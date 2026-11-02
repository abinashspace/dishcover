# Dishcover batch log

Source list: the WorldCuisines food-kb dataset (2,414 rows). The dataset declares no licence, so only its dish names were used. Every photo was re-checked on Wikimedia Commons for its licence (CC0 / CC BY / CC BY-SA / public domain) and checked by eye to make sure it shows the dish. All text was written for this app, and every review is a labelled SAMPLE.

## Status (after Batch 2, Nov 2 2026)

- Dishes in the app: **478**. That is 112 original dishes, 162 from Batch 1 and 204 from Batch 2.
- Dataset rows covered so far, counting alternate names and merged duplicates: 442
- Pending unique dataset dishes: **1,972**. The list is in `pending_queue.tsv`.
- Estimated batches left at ~200 per batch: about 10

## Batch 2: done (204)

- **indian-mains** (8): dhansak, seekh-kebab, sheermal, kulcha, chana-masala, jeera-rice, eggs-kejriwal, paya
- **south-indian** (7): puttu, kosambari, kuzhambu, pulihora, kozhukkatta, akki-rotti, patrode
- **seasia** (15): curry-puff, mi-quang, curry-mee, mee-siam, pancit, lumpia, banh-chung, klepon, goi-cuon, nasi-kandar, roti-john, murtabak, sinigang, kare-kare, popiah
- **indian-street** (3): khakhra, masala-omelette, ghugni
- **indian-sweets** (3): nankhatai, zarda, sel-roti
- **european** (21): kedgeree, schnitzel, croquette, pierogi, borscht, beef-stroganoff, chicken-kiev, olivier-salad, syrniki, shashlik, langos, cordon-bleu, haggis, galette-bretonne, goulash, gyros, bacalhau, francesinha, cornish-pasty, yorkshire-pudding, black-pudding
- **mideast** (19): halva, kabsa, mandi, mansaf, maqluba, mujaddara, dolma, sarma, pilaf, tabbouleh, kashk-bademjan, karniyarik, imam-bayildi, mucver, qatayef, mulukhiyah, maamoul, fesenjan, pita
- **chinese** (17): jiaozi, shumai, har-gow, lo-mein, wonton-noodles, zhajiangmian, hot-and-sour-noodles, biangbiang-noodles, liangpi, laghman, singapore-style-noodles, zongzi, egg-waffle, scallion-pancake, shaobing, chinese-hot-pot, egg-roll
- **japan-korea** (23): japchae, mandu, korokke, tonkotsu-ramen, tsukemen, yaki-udon, jjamppong, bibim-guksu, somen, dango, injeolmi, songpyeon, tteok, miso-soup, tamagoyaki, chawanmushi, sukiyaki, daifuku, oden, inarizushi, andong-jjimdak, california-roll, coffee-jelly
- **bakes** (28): melonpan, anpan, japanese-milk-bread, castella, sausage-roll, medovik, babka, sachertorte, crumpet, pastel-de-nata, sourdough, brioche, challah, bagel, english-muffin, belgian-waffle, hot-cross-bun, danish-pastry, kouign-amann, canele, banoffee-pie, shortbread, stroopwafel, lamington, apple-pie, pumpkin-pie, butter-tart, alfajor
- **americas** (20): deviled-egg, arroz-con-pollo, arroz-chaufa, red-beans-and-rice, rice-and-peas, gallo-pinto, cornbread, arepa, jerk-chicken, ackee-and-saltfish, feijoada, churrasco, chili-con-carne, tourtiere, moqueca, pupusa, aji-de-gallina, loco-moco, hash-browns, jamaican-patty
- **italian** (5): saltimbocca, zabaione, sfogliatella, tortellini, cannelloni
- **world** (4): khinkali, khachapuri, plov, lavash
- **mexican** (11): spanish-rice, chiles-en-nogada, gordita, taquito, chile-relleno, birria, carnitas, al-pastor, cochinita-pibil, flan, paleta
- **african** (20): biltong, suya, fufu, egusi, tajine, harira, couscous, pastilla, brik, bunny-chow, bobotie, koeksister, malva-pudding, mandazi, kitfo, shiro, doro-wat, tibs, akara, merguez

## Batch 2: skipped (1)

- doodhpak: no reusable photo on Commons or in the dataset. It stays in the pending queue.

## Batch 2: merged instead of added

- Shakshouka was merged into shakshuka, Spring roll into spring-rolls and Churro into churros.
- Wiener schnitzel was merged into schnitzel, and Bungeo-ppang into taiyaki.

## Batch 2: photo fixes

The dataset photo for these 14 dishes was wrong or unclear, so each was replaced with a better Commons photo after checking it by eye and re-checking its licence: kedgeree, eggs-kejriwal, somen, sourdough, babka, beef-stroganoff, egusi (the old photo showed seeds, not soup), cannelloni (dry pasta), haggis (raw and still packaged), bacalhau (dried fish), flan (a savoury tart), khachapuri, cornish-pasty and tibs. Nankhatai also had no dataset photo, so it got a Commons one.

## Batch 2: other changes

- New category: African. Injera and jollof-rice moved to African; shakshuka moved to Middle Eastern.
- Added a `side` flag for achaar, papadam, guacamole, hummus, baba-ghanoush, naan, chapati, sambar, jeera-rice, pita, lavash, kosambari, rice-and-peas, cornbread and spanish-rice. These are never quiz picks.
- Detail photos were recompressed to 640px at about JPEG quality 78 (average 53KB). The 800px originals were not kept, so the 640px files were made from the 800px files.
- Searching for a diet word now uses the diet label, so "veg" no longer matches "non-veg" or "vegetables".

## Batch 1: done (162)

- **south-indian** (9): bisi-bele-bath, curd-rice, lemon-rice, idiyappam, neer-dosa, rava-idli, sambar, parotta, murukku
- **indian-sweets** (5): puran-poli, gajar-halwa, gujiya, phirni, watalappam
- **indian-mains** (16): chapati, papadam, kadhi, korma, rajma, dal-bati, chicken-tikka-masala, chicken-tikka, sarson-ka-saag, khichdi, gobi-paratha, aloo-matar, achaar, chicken-curry, mutton-curry, dal-bhat
- **indian-street** (4): mirchi-bada, ragda-pattice, egg-bhurji, jhalmuri
- **japan-korea** (21): katsudon, gyudon, oyakodon, omurice, tonkatsu, karaage, yakitori, yakisoba, okonomiyaki, green-tea-ice-cream, edamame, shabu-shabu, jajangmyeon, naengmyeon, hotteok, samgyetang, sundubu-jjigae, budae-jjigae, pajeon, kalguksu, tteokguk
- **bakes** (22): dorayaki, taiyaki, egg-tart, biscotti, panettone, ciabatta, focaccia, crepe, profiterole, mille-feuille, baguette, creme-caramel, french-toast, lemon-meringue-pie, pretzel, apple-strudel, scone, sticky-toffee-pudding, tres-leches-cake, key-lime-pie, pecan-pie, banana-bread
- **chinese** (11): xiao-long-bao, wonton, dandan-noodles, yangzhou-fried-rice, mooncake, char-siu, tangyuan, egg-foo-young, beef-chow-fun, lanzhou-noodles, cheung-fun
- **seasia** (22): pad-see-ew, drunken-noodles, khao-soi, thai-fried-rice, boat-noodles, banh-xeo, com-tam, cha-gio, banh-cuon, che, nasi-lemak, char-kway-teow, laksa, hainanese-chicken-rice, roti-canai, mee-goreng, nasi-goreng, rendang, satay, bakso, pisang-goreng, khow-suey
- **italian** (8): ravioli, minestrone, ossobuco, carpaccio, parmigiana, piadina, gelato, calzone
- **european** (11): croque-monsieur, ratatouille, beef-bourguignon, souffle, gazpacho, spanish-omelette, souvlaki, tiropita, kasespatzle, bratwurst, shepherds-pie
- **drinks** (1): horchata
- **mideast** (12): simit, gozleme, borek, menemen, manti, kibbeh, kabab-koobideh, joojeh-kabab, tahdig, ghormeh-sabzi, koshary, ful-medames
- **mexican** (10): enchiladas, chilaquiles, pozole, tamales, elote, fajitas, tostada, huevos-rancheros, chimichanga, mole-poblano
- **americas** (10): hamburger, hot-dog, eggs-benedict, gumbo, jambalaya, pao-de-queijo, coxinha, brigadeiro, acai-bowl, pollo-a-la-brasa

## Batch 1: skipped (0)

No dish was skipped. 9 first-pick photos were wrong or weak and were replaced after a second Commons search:
- gelato: the first photo had a person as its subject, so I used a gelato display case instead.
- souvlaki: the first photo was a salad; replaced with grilled skewers.
- tiropita: the first photo was flatbreads on a conveyor; replaced with a filo pie.
- tahdig: replaced with a clearer crispy rice crust.
- key-lime-pie: the first photo looked like a berry cheesecake; replaced with a slice of key lime pie.
- banana-bread: the first photo looked like brownies; replaced with a loaf.
- acai-bowl: the first photo was a drink; replaced with a bowl.
- achaar: the first photo looked like a curry; replaced with a jar of mango pickle.

## Notes

- Merged as duplicates of existing dishes rather than added again: e.g. dishes already in the app such as paella, fish and chips and empanada, plus dataset aliases (226 rows matched in total).
- Recategorised: paella and fish-and-chips moved to European; empanada moved to Americas.
- New categories: European, Americas. Thai & Vietnamese was renamed Southeast Asian (it now also covers Malaysia, Singapore, Indonesia and Burma).
- Diet labels lean strict. When a dish usually contains egg (spätzle, mooncake, most batters), it is marked egg, so the quiz's strict-vegetarian answer never suggests it.
- Next batches: pick the most menu-common items from pending_queue.tsv first (Indian regional dishes, then the cuisines most often met in cafes).
