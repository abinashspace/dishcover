# Dishcover batch log

Source list: the WorldCuisines food-kb dataset (2,414 rows). The dataset declares no licence, so only its dish names were used. Every photo was re-checked on Wikimedia Commons for its licence (CC0 / CC BY / CC BY-SA / public domain) and checked by eye to make sure it shows the dish. All text was written for this app, and every review is a labelled SAMPLE.

## Status (after Batch 4, Nov 2 2026)

- Dishes in the app: **948**. That is 112 original dishes, 162 from Batch 1, 204 from Batch 2, 220 from Batch 3 and 250 from Batch 4.
- Dataset rows covered so far, counting alternate names and merged duplicates: 921
- Pending unique dataset dishes: **1,493**. The list is in `pending_queue.tsv`.
- Estimated batches left at ~250 per batch: about 6

## Batch 4: done (250)

- **bakes** (54): rum-cake, melktert, neenish-tart, capirotada, cocada, bolillo, croquembouche, pain-aux-raisins, gateau-basque, chouquette, polvoron, bunuelo, roscon, tocino-de-cielo, pizzelle, amaretti, spotted-dick, christmas-pudding, digestive-biscuit, custard-cream, bourbon-biscuit, jammie-dodgers, custard-tart, bara-brith, teacake, millionaires-shortbread, barmbrack, germknodel, speculaas, franzbrotchen, pumpernickel, vanillekipferl, cremeschnitte, marillenknodel, swiss-roll, bossche-bol, tiger-bread, kulich, zefir, bialy, papanasi, pogaca, peanut-butter-cookie, oatmeal-raisin-cookie, bear-claw, apple-crisp, blueberry-pie, cherry-pie, mississippi-mud-pie, shoofly-pie, fudge, pacoca, bolo-de-rolo, cuban-pastry
- **african** (20): efo-riro, msemmen, lablabi, sfenj, briouat, baghrir, amala, eba, ogbono-soup, kenkey, alloco, githeri, kachumbari, chipsi-mayai, sosatie, potjiekos, gatsby, matapa, dabo-kolo, bariis-iskukaris
- **world** (4): tsuivan, kharcho, lobio, badrijani
- **japan-korea** (30): hiyashi-chuka, kamameshi, tekkadon, oshizushi, kaki-furai, onsen-tamago, jingisukan, sara-udon, yudoufu, chankonabe, cream-stew, okinawa-soba, abura-soba, senbei, manju, yokan, sakuramochi, warabimochi, bento, kinpira, taco-rice, zosui, oyaki, sata-andagi, juk, janchi-guksu, hoppang, gyeran-ppang, sundae, dubu-kimchi
- **chinese** (16): luosifen, chongqing-noodles, crossing-the-bridge-noodles, grass-jelly, taro-cake, fun-guo, cocktail-bun, laping, thenthuk, pineapple-cake, fa-gao, jian-dui, fish-ball, duck-rice, mantau, hong-dou-tang
- **seasia** (35): nasi-kuning, sayur-lodeh, kue-lapis, krupuk, nasi-dagang, nasi-kerabu, puto, champorado, pandesal, taho, tortang-talong, banh-canh, banh-bot-loc, khao-tom, mi-krop, khao-poon, gulai, nasi-campur, lontong, ketupat, kwetiau-goreng, bihun-goreng, bakmi, bubur-ketan-hitam, pineapple-tart, lugaw, biko, suman, pancit-bihon, bistek, buko-pie, cha-lua, banh-bo, maggi-goreng, singapore-hae-mee
- **indian-mains** (2): pakhala, panta-bhat
- **south-indian** (1): sanna
- **indian-sweets** (1): pootharekulu
- **indian-street** (1): bakarkhani
- **mideast** (22): sholezard, sangak, barbari, gheimeh, kuru-fasulye, jachnun, saltah, kleicha, kibbeh-nayyeh, kabab-barg, loobia-polo, bazlama, turlu, israeli-couscous, makdous, freekeh, ka-ak, sujuk, kahk, duqqa, bissara, lahoh
- **mexican** (13): tlacoyo, queso-flameado, panucho, salbute, memela, mixiote, rajas-con-crema, picadillo, poc-chuc, huevos-motulenos, caldo-de-pollo, tostilocos, nopalito
- **european** (31): piperade, oeuf-mayonnaise, cholent, callos, migas, chicharron, ajoblanco, mushy-peas, devils-on-horseback, scouse, kipper, pork-pie, pie-and-peas, chicken-fillet-roll, weisswurst, maultaschen, toast-hawaii, dutch-pannenkoek, zurcher-geschnetzeltes, fasolada, papoutsakia, bacalhau-com-natas, cozido, polvo-a-lagareiro, shchi, okroshka, dressed-herring, vinegret, porkolt, karelian-pasty, waterzooi
- **italian** (6): agnolotti, tortelloni, scaloppine, stracciatella, grissini, bresaola
- **americas** (14): hoppin-john, chipa, locro, coco-bread, jucy-lucy, baked-beans, green-bean-casserole, montreal-style-bagel, hawaiian-pizza, sopaipilla, hallaca, alcapurria, feijao-tropeiro, callaloo

## Batch 4: skipped (7)

- doodhpak, sevai, ulava-charu and rolex were not retried (no clearly reusable photo turned up). They stay pending.
- albaloo-polo and chamoy: no usable Commons photo. beijinho: the only candidate photo showed a sunset, not the dish. All three stay pending; kipper, barmbrack and bossche-bol were added instead to keep the batch at 250.
- banh-uc and patlicanli-kebap were dropped because of slug/photo lookup problems; they stay pending. About 185 other candidates were fetched but not used this batch; their images were deleted and they stay in the queue.

## Batch 4: merged instead of added

- Chee Cheong Fun → cheung-fun, Cheese bun → pao-de-queijo, Shahan ful → ful-medames, Bakpau → baozi/siopao (removed from the queue).
- Dish pages explain look-alikes: panucho vs salbute, tortellini vs tortelloni, stracciatella (cheese / gelato / soup), teacake (English bun vs Tunnock's), migas (Spanish vs Tex-Mex), pörkölt vs goulash, sopaipilla (New Mexico vs Chile).

## Batch 4: photo fixes

The first photo for krupuk, biko, banh-bo, bazlama, tostilocos and coco-bread was wrong or unclear and was replaced with a Commons photo checked by eye. scaloppine and hoppin-john were re-checked and kept. loobia-polo, lahoh, papoutsakia, bacalhau-com-natas and alcapurria had no dataset photo, so Commons photos were found.

## Batch 4: other changes

- **Image re-encode (all 948 dishes):** thumbnails regenerated from the detail photos at 350px, JPEG quality 72 (18MB → 17MB total despite +250 dishes). Detail photos capped at 640px and 70KB each (quality stepped 78→55; 5 photos also scaled to ~504px). Detail photos total 48MB (was 35.7MB for 698). Checked on a phone-sized (iPhone 13) screenshot: grid and dish pages look sharp.
- **Side dishes (never quiz picks):** amala, eba, kenkey, kachumbari, kinpira, mantau, krupuk, pandesal, ketupat, sanna, sangak, barbari, bazlama, israeli-couscous, makdous, duqqa, lahoh, bolillo, grissini, mushy-peas, pumpernickel, tiger-bread, vinegret, coco-bread, baked-beans, green-bean-casserole.
- **Tests:** 948/948 thumbs and photos load, FCP ~240ms, 44 quiz runs with no diet violations; 2,400-dish synthetic scale test FCP 170–290ms.

## Batch 3: done (220)

- **japan-korea** (31): chahan, donburi, chazuke, champon, agedashi-tofu, hiyayakko, makizushi, nikujaga, hayashi-rice, kakigori, anmitsu, imagawayaki, takikomi-gohan, tamago-kake-gohan, tendon, unadon, nigirizushi, chirashizushi, curry-bread, katsu-sando, kushikatsu, ebi-furai, kakiage, doenjang-jjigae, galbi-jjim, gyeran-jjim, bindae-tteok, kong-guksu, bokkeum-bap, buldak-ramen, gyeran-mari
- **chinese** (22): claypot-rice, lo-mai-gai, hot-dry-noodles, stinky-tofu, douhua, char-siu-bao, tangbao, shengjian-mantou, turnip-cake, chicken-feet, century-egg, tea-egg, egg-drop-soup, oyster-omelette, youtiao, tingmo, pineapple-bun, mango-pudding, shrimp-toast, chai-tow-kway, yong-tau-foo, tomato-egg-noodles
- **seasia** (26): rawon, soto-betawi, nasi-uduk, nasi-padang, bubur-ayam, mie-ayam, siomay, perkedel, martabak-manis, penang-hokkien-mee, sinangag, silog, bibingka, siopao, turon, bicol-express, kaldereta, crispy-pata, balut, xoi, banh-beo, banh-bao, nem-nuong, bo-la-lot, rat-na, singapore-hokkien-mee
- **indian-mains** (3): thalassery-biryani, bhakri, dalcha
- **south-indian** (2): koottu, kiribath
- **indian-street** (1): bun-kebab
- **mideast** (17): bolani, kabuli-pulao, chelow-kabab, baghali-polo, shirin-polo, kuku-sabzi, mirza-ghassemi, cilbir, mercimek-koftesi, sabich, bourekas, sufganiyah, msabbaha, toum, sfiha, lokma, hawawshi
- **african** (11): yassa, thieboudienne, maafe, waakye, kelewele, moin-moin, pepper-soup, ugali, chakalaka, boerewors, vetkoek
- **mexican** (13): chalupa, sope, huarache, tlayuda, pambazo, aguachile, carne-asada, menudo, refried-beans, frijoles-charros, salsa-verde, pico-de-gallo, sincronizada
- **drinks** (1): champurrado
- **bakes** (32): concha, pan-de-muerto, chocolate-chip-cookie, snickerdoodle, black-and-white-cookie, banana-cream-pie, sweet-potato-pie, quindim, crepes-suzette, paris-brest, palmier, floating-island, meringue, ensaimada, tarta-de-santiago, bakewell-tart, mince-pie, treacle-tart, chelsea-bun, bread-pudding, kaiserschmarrn, linzer-torte, lebkuchen, poffertjes, bougatsa, kurtoskalacs, semla, anzac-biscuit, pavlova, rice-pudding, carrot-cake, gingerbread
- **americas** (16): knish, detroit-pizza, stromboli, jalapeno-popper, pigs-in-a-blanket, etouffee, dirty-rice, lobster-roll, bandeja-paisa, cachapa, pabellon-criollo, arroz-con-gandules, moros-y-cristianos, doubles, tallarin-saltado, papa-rellena
- **european** (33): vol-au-vent, lobster-thermidor, blanquette-de-veau, pot-au-feu, jambon-beurre, french-fries, fideua, salmorejo, pisto, fabada, cocido-madrileno, huevos-rotos, steak-and-kidney-pie, lancashire-hotpot, scotch-egg, prawn-cocktail, fish-pie, irish-stew, soda-bread, schweinshaxe, avgolemono, gigantes-plaki, bifana, bacalhau-a-bras, caldo-verde, pirozhki, blini, solyanka, golabki, lecso, varenyky, banitsa, pastizz
- **italian** (8): farinata, panzerotti, porchetta, piccata, pasta-e-fagioli, frittata, caponata, cotoletta
- **world** (4): buuz, chebureki, scrambled-eggs, stuffed-peppers

## Batch 3: skipped (3)

- doodhpak: tried again with other sources: a Commons search for doodhpak / doodh pak / dudhpak, the en, gu, hi and mr Wikipedia pages, the Wikidata item Q5296979 (which has no image), and Openverse/Flickr (0 results). No reusable photo was found, so it stays pending.
- sevai: the only Commons photo is 320px, which is too small. It stays pending.
- ulava-charu: no Commons photo exists. It stays pending.

The candidate photo for Rolex (Ugandan egg wrap) showed only a street vendor, not the dish, so it was left out and stays pending. About 90 other candidates were fetched but not used this batch. Their images were deleted, and they stay in the queue.

## Batch 3: merged instead of added

- Knafeh was merged into kunafa, New York-style cheesecake into cheesecake, Trdelník into kürtőskalács, Apam balik into martabak-manis (Terang Bulan) and the British Pigs in blankets into pigs-in-a-blanket.
- Huevos estrellados is listed as huevos-rotos. Each of these dish pages explains the difference: cotoletta and schnitzel, sincronizada and quesadilla, gyeran-mari and tamagoyaki, champon and jjamppong, and Singapore and Penang Hokkien mee.

## Batch 3: photo fixes

The first photo for 11 dishes was wrong or unclear, so each was replaced with a Commons photo checked by eye: curry-bread, rawon, shrimp-toast, bo-la-lot, nem-nuong, huevos-rotos (the first photo showed only chorizo), lobster-thermidor (the first photo looked like a salad), soda-bread (the first photo showed sandwiches), golabki, chelsea-bun and steak-and-kidney-pie. Pambazo and french-fries had no dataset photo, so they also got Commons photos.

## Batch 3: other changes

- **Slim index:** `data/index.js` went from 336KB at 478 dishes to 58KB at 698 dishes. Each dish is now one short array, and photo paths are worked out from the dish id.
- **Search keywords and lazy loading:** search keywords moved to `data/search.js` (188KB), which loads after the first paint. Description, ingredients, texture, good-for, tip and pronunciation moved to the per-category detail files. The quiz result page and Bao's dish tips load the detail file they need before showing.
- **Scale test:** with a synthetic 2,400-dish index (221KB), first contentful paint was 130–260ms. With the real 698 dishes it was about 300ms.
- **Side dishes:** new ones (never quiz picks) are bhakri, toum, ugali, chakalaka, refried-beans, salsa-verde, pico-de-gallo, soda-bread and french-fries.
- **Diet labels:** ensaimada is marked non-veg because it is made with pork lard, and mince-pie is marked "both" because the suet can be beef.

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
