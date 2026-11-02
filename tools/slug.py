import re,unicodedata
MAP={'ø':'o','Ø':'O','œ':'oe','Œ':'OE','æ':'ae','Æ':'AE','đ':'d','Đ':'D','ı':'i','ß':'ss','ł':'l','Ł':'L','þ':'th','ð':'d','ħ':'h'}
def slug(s):
    s=''.join(MAP.get(ch,ch) for ch in s).replace("'",'').replace('’','')
    s=unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+','-',s).strip('-')
