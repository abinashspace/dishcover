package app.dishcover;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ClipData;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.util.Base64;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Locale;

public class MainActivity extends Activity {
    private static final int FILE_CHOOSER = 1001;
    private WebView web;
    private ValueCallback<Uri[]> fileCallback;
    private int barTop, barBottom, barLeft, barRight;

    @SuppressLint({"SetJavaScriptEnabled", "AddJavascriptInterface"})
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        web = new WebView(this);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        WebSettings settings = web.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowContentAccess(true);
        web.addJavascriptInterface(new BackupBridge(), "DishcoverAndroid");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                pushSafeArea();
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback, FileChooserParams params) {
                if (fileCallback != null) fileCallback.onReceiveValue(null);
                fileCallback = callback;
                try {
                    startActivityForResult(params.createIntent(), FILE_CHOOSER);
                } catch (Exception e) {
                    fileCallback = null;
                    callback.onReceiveValue(null);
                    return false;
                }
                return true;
            }
        });
        setContentView(web);
        if (Build.VERSION.SDK_INT >= 30) {
            web.setOnApplyWindowInsetsListener((v, insets) -> {
                android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars());
                barLeft = bars.left;
                barTop = bars.top;
                barRight = bars.right;
                barBottom = bars.bottom;
                pushSafeArea();
                return insets;
            });
            web.requestApplyInsets();
        }
        web.loadUrl("file:///android_asset/index.html");
    }

    private void pushSafeArea() {
        if (web == null) return;
        float density = getResources().getDisplayMetrics().density;
        if (density <= 0f) density = 1f;
        String js = String.format(Locale.US,
                "document.documentElement.style.setProperty('--sat','%.1fpx');" +
                "document.documentElement.style.setProperty('--sab','%.1fpx');" +
                "document.documentElement.style.setProperty('--sal','%.1fpx');" +
                "document.documentElement.style.setProperty('--sar','%.1fpx');",
                barTop / density, barBottom / density, barLeft / density, barRight / density);
        web.evaluateJavascript(js, null);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FILE_CHOOSER) {
            if (fileCallback != null) {
                Uri[] result = resultCode == RESULT_OK
                        ? WebChromeClient.FileChooserParams.parseResult(resultCode, data)
                        : null;
                fileCallback.onReceiveValue(result);
                fileCallback = null;
            }
            return;
        }
        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    @Deprecated
    public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    private class BackupBridge {
        @JavascriptInterface
        public void exportBackup(String json) {
            runOnUiThread(() -> saveBackup(json));
        }

        @JavascriptInterface
        public void shareCardBegin() {
            cardBuf.setLength(0);
        }

        @JavascriptInterface
        public void shareCardChunk(String part) {
            if (part != null) cardBuf.append(part);
        }

        @JavascriptInterface
        public void shareCardFinish(String filename, String title, String dish) {
            String data = cardBuf.toString();
            cardBuf.setLength(0);
            runOnUiThread(() -> shareCardPng(data, filename, title, dish));
        }
    }

    private final StringBuilder cardBuf = new StringBuilder();

    private void shareCardPng(String dataUrl, String filename, String title, String dish) {
        try {
            String b64 = dataUrl == null ? "" : dataUrl;
            int comma = b64.indexOf(',');
            if (comma >= 0) b64 = b64.substring(comma + 1);
            byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
            if (bytes.length == 0) throw new IllegalStateException("empty");
            String safe = filename == null ? "" : filename.replaceAll("[^A-Za-z0-9._-]", "");
            if (!safe.endsWith(".png")) safe = (safe.isEmpty() ? "food-id-card" : safe) + ".png";
            String label = (title == null || title.isEmpty()) ? "Food ID card" : title;
            File dir = new File(getCacheDir(), "share");
            if (!dir.isDirectory() && !dir.mkdirs()) throw new IllegalStateException("dir");
            File file = new File(dir, safe);
            try (FileOutputStream out = new FileOutputStream(file)) {
                out.write(bytes);
            }
            Uri uri = Uri.parse("content://" + ShareProvider.AUTH + "/" + safe);
            Intent send = new Intent(Intent.ACTION_SEND);
            send.setType("image/png");
            send.putExtra(Intent.EXTRA_STREAM, uri);
            String caption = (dish == null || dish.isEmpty()) ? label : label + " — " + dish;
            send.putExtra(Intent.EXTRA_SUBJECT, caption);
            send.putExtra(Intent.EXTRA_TITLE, caption);
            send.putExtra(Intent.EXTRA_TEXT, caption);
            send.setClipData(ClipData.newRawUri(label, uri));
            send.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            for (ResolveInfo info : getPackageManager().queryIntentActivities(send, PackageManager.MATCH_DEFAULT_ONLY)) {
                grantUriPermission(info.activityInfo.packageName, uri, Intent.FLAG_GRANT_READ_URI_PERMISSION);
            }
            Intent chooser = Intent.createChooser(send, label);
            chooser.setClipData(ClipData.newRawUri(label, uri));
            chooser.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            startActivity(chooser);
        } catch (Exception e) {
            Toast.makeText(this, "Couldn't share that card", Toast.LENGTH_SHORT).show();
        }
    }

    private void saveBackup(String json) {
        try {
            ContentValues values = new ContentValues();
            values.put(MediaStore.MediaColumns.DISPLAY_NAME, "dishcover-backup-" + new java.text.SimpleDateFormat("yyyy-MM-dd-HHmm", java.util.Locale.US).format(new java.util.Date()) + ".json");
            values.put(MediaStore.MediaColumns.MIME_TYPE, "application/json");
            Uri collection;
            if (Build.VERSION.SDK_INT >= 29) {
                values.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS);
                values.put(MediaStore.MediaColumns.IS_PENDING, 1);
                collection = MediaStore.Downloads.EXTERNAL_CONTENT_URI;
            } else {
                collection = MediaStore.Files.getContentUri("external");
            }
            Uri uri = getContentResolver().insert(collection, values);
            if (uri == null) throw new IllegalStateException("insert");
            try (OutputStream out = getContentResolver().openOutputStream(uri)) {
                if (out == null) throw new IllegalStateException("stream");
                out.write(json.getBytes(StandardCharsets.UTF_8));
            }
            if (Build.VERSION.SDK_INT >= 29) {
                values.clear();
                values.put(MediaStore.MediaColumns.IS_PENDING, 0);
                getContentResolver().update(uri, values, null, null);
            }
            Toast.makeText(this, "Backup saved to Downloads", Toast.LENGTH_LONG).show();
        } catch (Exception e) {
            Toast.makeText(this, "Couldn't save the backup", Toast.LENGTH_SHORT).show();
        }
    }
}
