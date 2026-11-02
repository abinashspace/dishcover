# Dishcover batch log

Source list: the WorldCuisines food-kb dataset (2,414 rows). The dataset declares no licence, so only its dish names were used. Every photo was re-checked on Wikimedia Commons for its licence (CC0 / CC BY / CC BY-SA / public domain) and checked by eye to make sure it shows the dish. All text was written for this app, and every review is a labelled SAMPLE.

## Status (after Batch 1, Nov 2 2026)

- Dishes in the app: **274** (112 from earlier versions + 162 from Batch 1)
- Dataset rows already covered (incl. alternate names / duplicates): 226
- Pending unique dataset dishes: **2,187**. The full list is in `pending_queue.tsv`, with columns row, name, cuisines, countries and category guess.
- Estimated batches left at ~150 per batch: about 15

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
