# Dishcover batch log

Source list: the WorldCuisines food-kb dataset (2,414 rows). The dataset declares no licence, so only its dish names were used. Every photo was re-checked on Wikimedia Commons for its licence (CC0 / CC BY / CC BY-SA / public domain) and checked by eye to make sure it shows the dish. All text was written for this app, and every review is a labelled SAMPLE.

## Status (after Batch 9, Nov 2 2026): dataset fully worked through

- Dishes in the repo: **2,077** (112 original + 162 + 204 + 220 + 250 + 250 + 250 + 242 + 249 + 138 from Batches 1–9). The live site still has 948 (Batches 5–9 not deployed, by request).
- Pending dishes: **0**. All 2,414 dataset rows are now added, merged, or permanently skipped.
- `pending_queue.tsv` now has a `status` column. All 347 remaining rows are marked `skip:<reason>` so future runs filter them out:
  - `skip:weak-or-wrong-photo` (119): rejected on eyeball (packaged, blurry, tiny, wrong dish, not food), including the earlier batches' rejects.
  - `skip:no-reusable-photo` (91): no CC/PD photo in the dataset or as the Wikipedia lead image.
  - `skip:generic` (83): generic terms, not distinct dishes (white bread, fried egg, custard, turnover…).
  - `skip:ingredient` (34): ingredients/condiments/cheeses (dashi, nori, tahini, ricotta…).
  - `skip:brand` (14): brand products (Rice Krispies, Hot Pockets, Tokyo Banana…).
  - `skip:offlimits` (6): dog, cat, whale or insect dishes and similar.

## Batch 9: done (138)

- **seasia** (18): otap, plecing-kangkung, cap-cay, paksiw-na-baboy, akok, telur-pindang, telur-gulung, rujak-shanghai, asinan, babi-hong, bakwan, tee-long-pan, milk-pie, inipit, kue-makmur, ayam-pansuh, kadyos-baboy-kag-langka, khanom-khai
- **bakes** (8): pie-a-la-mode, divinity, areias, broa-de-avintes, pao-de-mafra, carrot-pudding, moravian-spice-cookies, palianytsia
- **italian** (2): stuffed-crust-pizza, rafanata
- **japan-korea** (6): imoni, tokushima-ramen, ishikari-nabe, morkovcha, hishi-mochi, ttongppang
- **americas** (24): schnitz-un-knepp, senate-bean-soup, creamed-eggs-on-toast, perico, texas-caviar, moro-de-guandules, frijoles-negros, butifarra-soledenas, moronga, hot-link-sausage, goetta, bologna-sausage, new-orleans-hot-sausage, creme-de-papaya, mane-pelado, sagu, maria-mole, olho-de-sogra, caruru, charleston-red-rice, flipper-pie, stew-peas, red-peas-soup, pebete
- **european** (41): aletria, scotch-woodcock, ovos-moles, pastel-de-tentugal, tortillitas-de-camarones, judd-mat-gaardebounen, pea-soup, matevz, guernsey-bean-jar, bouneschlupp, medisterpolse, chorizo, salchichon, cesnovka, sibiu-salami, botillo, babic-sausage, kishka, hogs-pudding, doctors-sausage, oxford-sausage, manjar-blanco, papo-de-anjo, bacalhau-a-ze-do-pipo, zganci, brudet, kotlovina, fritaja, fishermans-soup, medimurska-gibanica, frittella, grahova-pretepena-juha, torricado, xarem, cebolada, porkkanalaatikko, stuffed-mallow, zoervleis, shirred-eggs, kulen, sac
- **mideast** (5): nargesi, haminados, piyaz, apio, kubaneh
- **mexican** (10): machacado-con-huevo, burro-percheron, cabrito, puntas, arroz-negro, arroz-poblano, morisqueta, calavera, cochinito-de-piloncillo, nicuatole
- **chinese** (6): salted-duck-egg, wandouhuang, red-bean-cake, chongyang-cake, concave-cake, ji-dan-gao
- **indian-street** (1): tomato-omelette
- **indian-mains** (1): chhena-matar-tarkari
- **drinks** (2): douzhi, sekoteng
- **world** (5): hog-maw, katiya, bagiya, pickled-pigs-feet, rewena-bread
- **african** (9): sopa-de-cacahuete, koba, kikomando, kisra, funkaso, marghi-special, harqma, maboke, sabaayad

## Batch 9: merged instead of added

- stornoway black pudding → black-pudding; krofne → krapfen

## Batch 9: other changes

- For dishes with no dataset photo, the Wikipedia lead image was tried (licence re-checked, eyeballed). These are credited as "Wikipedia lead image".
- Diet: lard/suet/gelatin dishes marked non-veg (marranito, inipit, Moravian spice cookies, carrot pudding, maria-mole).
- Images folder is now about 137 MB.

## Batch 8: done (249)

- **mideast** (9): komaj-sehen, walnut-stuffed-figs, stuffed-dates, levengi, stuffed-squash, stuffed-intestines, tharid, joshpara, piti
- **bakes** (69): kringlea, krostule, kuciukai, leipziger-lerche, mandelkubb, milhojas, muskazine, new-york-roll, nuns-puffs, poppy-seed-roll, punsch-roll, xuixo, schnecken, schuxen, sfintisori, stutenkerl, torpedo-dessert, vatrushka, atlantic-beach-pie, bean-pie, blackberry-pie, bumbleberry-pie, caramel-tart, cashew-pie, chiffon-pie, derby-pie, grape-hull-pie, kuchen, millionaire-pie, pastafrola, peanut-pie, raspberry-pie, shaker-lemon-pie, strawberry-pie, tarta-capuchina, walnut-pie, anadama-bread, apple-bread, baba, vienna-bread, vanocka, tsoureki, beer-bread, boule, carrot-bread, chickpea-bread, cottage-loaf, limpa, lye-roll, mohnflesserl, salt-rising-bread, pane-ticinese, pistolet, portuguese-sweet-bread, potato-bread, pumpkin-bread, roggelchen, water-biscuit, graham-bread, korovai, cream-bun, chorley-cake, sausage-bread, nut-roll, apple-dumpling, belgian-bun, boston-bun, manchet, heisswecke
- **chinese** (15): lek-tau-phong, naiyou-subing, sou, shuangbaotai, guokui, scallion-bread, taro-dumpling, ageh, beef-bun, peanut-butter-bun, black-sesame-roll, zhaliang, spare-ribs, coconut-bar, tuna-bun
- **italian** (11): pa-de-pessic, borlengo, coppia-ferrarese, sgabeo, pane-di-altamura, stuffed-pizza, scaccia, pavese-agnolotti, schlutzkrapfen, casunziei, farsu-magru
- **mexican** (1): paste-pasty
- **americas** (21): pot-pie, fleischkuekle, moravian-chicken-pie, natchitoches-meat-pie, rappie-pie, southern-tomato-pie, sopa-paraguaya, marraqueta, stuffed-clam, platanos-rellenos, pepperoni-roll, stuffed-ham, turducken, minnesota-sushi, fricot, goat-water, lobster-stew, mocoto, oyster-stew, denver-sandwich, ham-salad
- **european** (60): savory-spinach-pie, killie-pie, butter-pie, corned-beef-pie, curry-pie, homity-pie, meat-and-potato-pie, pirog, spekrausi, steak-pie, woolton-pie, tonis-puri, cesnica, flatkaka, laufabraud, maltese-bread, shotis-puri, pao-alentejano, qistibi, rieska, caviar, sorrel-soup, veal-orloff, pyshka, khrenovina-sauce, rasstegai, kutia, kasha, helzel, krautshauptchen, szczecin-pasztecik, stuffed-racuchy, stuffed-squid, soldra, ballotine, tripoux, stuffed-tomatoes, rullepolse, calfs-liver-and-bacon, jellied-veal, pariser-schnitzel, ragout-fin, andrajos, hasenpfeffer, hochepot, jota, karelian-hot-pot, kig-ha-farz, laskisoosi, tuna-pot, tatws-pum-munud, skirts-and-kidneys, rossypottu, ragout, puchero, pottage, pichelsteiner, cocido-montanes, cocido-lebaniego, caparrones
- **world** (10): bacon-and-egg-pie, balep-korkun, tandoor-bread, hardtack, rissole, egg-in-the-basket, cheese-roll, prawn-roll, stuffed-cucumber, ham-and-eggs
- **seasia** (10): chicken-pastel, kamir, roti-buaya, roti-bolen, arsik, banh-la, jalangkote, balbacua, sekba, saksang
- **african** (23): eish-merahrah, bazin, potbrood, waterblommetjiebredie, usban, cocada-amarela, dambou, draw-soup, ekwang, fesikh, mugoyo, ogi, shark-chutney, mala-mogodu, kapana, kamounia, kokonte, seswaa, spicy-cow-feet, moambe-chicken, kedjenou, palaver-sauce, qrashel
- **indian-mains** (1): manda-roti
- **indian-sweets** (1): poornalu
- **japan-korea** (18): seattle-roll, ohaw, dojo-nabe, fugu-chiri, kagoshima-ramen, hakuto-jelly, muroran-curry-ramen, akumaki, amanatto, suama, amezaiku, beika, yubeshi, hanabiramochi, katemeshi, red-bean-rice, nanakusa-no-sekku, wappameshi

## Batch 8: skipped

- Weak, wrong, packaged or no-licence photos, or off-limits dishes (30): pasca, christmas-wafer, damper, dumb-bread, hot-and-spicy-cheese-bread, peg-bread, pan-brioche, tapalapa, delele, echicha, chrain, stroganina, zakuski, kitcha, ahriche, mesfouf, tihlo, galantine, stuffed-apples, stuffed-quinces, banana-boat, rellenitos-de-platano, maconochie, pork-roll, seco, chitose-ame, fruit-bun, christmas-ham, harihari-nabe, guryev-porridge (no photo found). harihari-nabe was skipped because it is a whale dish; mesfouf because its photo showed a pizza.
- Brand names and generic terms were left out: okazu, hot-dog-bun, ham-sandwich, ham-and-cheese-sandwich and similar.

## Batch 8: merged instead of added

- furai → ebi-furai / kaki-furai; red caviar → caviar; stuffed eggplant → karniyarik / imam-bayildi / dolma; manicotti → cannelloni; cocido → cocido-madrileno; hamin → cholent; angel wings → krostule; moambe → moambe-chicken

## Batch 8: other changes

- Diet labels: lard/suet/tallow dishes marked non-veg (lek-tau-phong, coppia-ferrarese, borlengo, laufabraud, paste-pasty); chiffon pie marked non-veg because of gelatin.
- Images folder is now about 128 MB (detail ≤70 KB, thumbnails 350 px). Nothing else heavy was added.

## Batch 7: done (242)

- **bakes** (95): matzah, zwieback, garibaldi-biscuit, rich-tea, crispbread, barm-cake, teurgoule, aachener-printen, springerle, bethmannchen, koulourakia, puto-seco, rijstevlaai, krapfen, lucky-tattie, cabinet-pudding, figgy-pudding, persimmon-pudding, jam-roly-poly, sussex-pond-pudding, biscocho, melba-toast, paximathia, abernethy-biscuit, almond-biscuit, aparon, ballokume, barquillo, berner-haselnusslebkuchen, bizcochito, bredele, cat-tongue, caycay, chocolate-coated-marshmallow-treats, cowboy-cookies, cuchufli, macaroon, cornish-fairing, dutch-letter, fig-roll, finskepinner, flour-kurabiye, fudge-cookie, rosquillo, galletas-de-patatas, jacobina, joe-frogger, jodenkoek, jumble, kaasstengels, kiam-piann, kichel, kue-satu, lengua-de-gato, linga, mamon-tostado, maple-leaf-cream-cookie, marie-biscuit, paciencia, paborita, paprenjak, petit-beurre, pinata-cookie, roscas, rosette, rum-ball, kue-semprong, tahini-cookie, tareco, teiglach, tirggel, ugoy-ugoy, wibele, shrewsbury-cake, sandie, alexandertorte, bakpia-pathok, bichon-au-citron, bizcocho, bundevara, butterkaka, carac, cheesymite-scroll, conversation-tart, fazuelos, flaugnarde, flao, flies-graveyard, gustavus-adolphus-pastry, haddekuche, jambon, jesuite, kniekuchle, kok, kolach
- **americas** (9): egg-salad, steamed-clams, arroz-con-huevo-frito, arroz-con-maiz, arroz-de-lisa, rice-and-gravy, chow-mein-sandwich, chicken-riggies, klobasnik
- **mideast** (5): lentil-soup, orez-shuit, saffron-rice, muhallebi, kesme
- **european** (13): liverwurst, salo, longaniza, cervelat, lincolnshire-sausage, battered-sausage, carniolan-sausage, bundnerfleisch, kogel-mogel, kalakukko, grey-peas, szczecin-paprikash, palatschinke
- **african** (4): mealie-bread, droewors, eru, achu
- **chinese** (16): iron-egg, hokkien-fried-rice, yin-yang-fried-rice, cifantuan, gaifan, jiuniang, tube-rice-pudding, ludagun, white-sugar-sponge-cake, su-style-noodles, pidan-doufu, gaobuli, lotus-seed-bun, longevity-peach, mandarin-roll, steamed-meatball
- **world** (9): gundruk, kwati, dhindo, chataamari, sapu-mhicha, thukpa-bhatuk, bappir, boortsog, khapse
- **japan-korea** (17): nurungji, kongbap, jat-guksu, milmyeon, yakimochi, bupyeon, otaru-ankake-yakisoba, shirataki-noodles, tensoba, ulmyeon, buchimgae, jjim, seon, jjinppang, uiro, karukan, karakudamono
- **seasia** (62): soto-banjar, pindang-patin, aligue-fried-rice, java-rice, ampaw, arem-arem, balao-balao, baye-baye, binignit, burasa, burong-isda, pe-htaw-bhut-htamin, ginataang-munggo, hsi-htamin, htamane, kalamay, khao-kan-chin, kiampong, kuning, lepet, madumongso, tapai, masi, nasi-ambeng, nasi-bogana, nasi-gurih, nasi-jinggo, nasi-kapau, nasi-tim, nasi-timbel, nasi-tutug-oncom, nasi-tumpang, nasi-ulam, panyalam, pastil, pinipig, puso, salukara, thingyan-rice, tinutuan, tupig, lupis, banh-to, chwee-kueh, khanom-sot-sai, tibok-tibok, mie-goreng, ifumi, mie-kering, mont-di, kat-kyi-kaik, kyay-oh, lakso, lard-na, pisang-molen, maruya, chuoi-chien, mun-tahu, sapo-tahu, tahu-sumedang, banh-te, clorot
- **indian-mains** (1): akhni
- **south-indian** (2): rice-and-curry, sandige
- **mexican** (1): sopa-de-fideo
- **italian** (7): cotoletta-alla-bolognese, cavallucci, krumiri, nocciolini-di-canzo, pinolate, bruttiboni, crocetta-di-caltanissetta
- **indian-sweets** (1): manda-pitha

## Batch 7: skipped

- The 7 known skips are still left out: doodhpak, sevai, ulava charu, rolex, albaloo-polo, chamoy, beijinho.
- No Commons photo found (5): tinapayan, nan-gyi-thohk, banh-khoai-mi, cronut, shorgoghal.
- Dropped because the photo was wrong, unclear or only showed packaging (30): moche, kiping, rijsttafel, mont-lin-maya, moron, moffle, funing-big-cake, palitaw, jjolmyeon, kripik, apas, camachile-cookie, lincoln-biscuit, nice-biscuit, malted-milk, cream-cracker, bath-oliver, charcoal-biscuit, animal-cracker, berger-cookies, drabbelkoek, masa-podrida, kue-gapit, uraro, countess, conejito, carrot-cake-cookie, half-moon-cookie, song-gao, rice-bread.
- Left out as brand products or generic terms (still pending): Kraft Dinner, Rice Krispies, Hello Panda, Royal Dansk, Lorna Doone, E.L. Fudge, sorbet, custard, crouton, wafer, baked potato, chocolate pudding, sandwich cookie, square cookie, puffed rice, potato pancake, choux pastry, bing.

## Batch 7: merged instead of added

- Cream horn → schaumrolle; da bao → baozi; chelow → chelow-kabab; tofu skin → tofu-skin-roll; nan gyi thoke (duplicate spelling).

## Batch 7: other changes

- All 39 dishes held back from Batch 6 were added. Their photos were fetched again, and their licences re-checked.
- The ID-fix script is now in the repo at `tools/slug.py`.
- Dishes made with suet or lard are labelled non-veg: figgy pudding, jam roly-poly, Sussex pond pudding, bizcochito, roscas.
- Not deployed, not pushed, zip not rebuilt (by request).


## Batch 6: done (250)

- **americas** (17): half-smoke, hangtown-fry, runza, strata, steamed-cheeseburger, bondiola-sandwich, pate-chinois, paila-marina, porotos-con-riendas, guatita, oil-down, saimin, stamp-and-go, bierock, garnacha, curtido, carimanola
- **bakes** (77): russian-tea-cake, sugar-cream-pie, fried-pie, cuban-bread, tortita-negra, nazook, mandelbrot, finger-bun, schaumrolle, punschkrapfen, milk-cream-strudel, tufahije, pe-de-moleque, queijadinha, cajuzinho, curau, viennese-whirls, treacle-sponge-pudding, arctic-roll, empire-biscuit, saskatoon-berry-pie, pets-de-soeurs, flapper-pie, hallulla, coca, rugbrod, moorkop, pepernoot, roze-koek, zeeuwse-bolus, fat-rascal, manchester-tart, bakewell-pudding, rhubarb-pie, kifli, silvana, broas, runeberg-torte, pain-de-mie, puits-damour, spritzgeback, kalitsounia, lagana, kue-putri-salju, blaa, farl, krembo, florentine-biscuit, gizzada, figolla, qurabiya, krumkake, flatbrod, obwarzanek-krakowski, torun-gingerbread, folar, fios-de-ovos, quesito, cornulete, pastila, pryanik, borodinsky-bread, bannock, black-bun, prekmurska-gibanica, hertzoggie, miguelitos, panellets, mollete, hallongrotta, tunnbrod, bundner-nusstorte, wahe, birnbrot, acibadem-kurabiyesi, bublik, crempog
- **world** (10): ghapama, chiko-roll, zucchini-slice, pie-floater, dovga, kupati, sha-phaley, bichak, uchpuchmak, kuurdak
- **european** (51): tzimmes, holishkes, kasekrainer, pasulj, tavce-gravce, proja, gibanica, karadordeva-snicla, glamorgan-sausage, bedfordshire-clanger, saveloy, bob-chorba, lukanka, mish-mash, panagyurishte-style-eggs, zelnik, botifarra, escudella, zagorski-strukli, soparnik, rod-polse, hachee, pease-pudding, stargazy-pie, galette-saucisse, paupiette, barbajuan, gaisburger-marsch, fozelek, hortobagyi-palacsinta, kibinai, lutefisk, racuchy, bife-a-cavalo, cabidela, linguica, rojoes, empadao, drob, ostropel, fasole-cu-carnati, tocana, makarony-po-flotski, kurnik, gazpachuelo, hornazo, porra-antequerana, tombet, olla-podrida, kalops, riz-casimir
- **seasia** (23): htamin-jin, kya-zan-hinga, espasol, ginataang-mais, tokneneng, nasi-bakar, nasi-kucing, kupat-tahu, konro, tahu-gejrot, soto-bandung, bubur-cha-cha, seri-muka, kue-mangkok, naem, ayam-buah-keluak, heong-peng, mee-bandung-muar, sai-krok-isan, khao-khluk-kapi, sakhu-sai-mu, banh-chuoi, banh-da-lon
- **chinese** (9): paomo, water-chestnut-cake, tofu-skin-roll, malay-sponge-cake, lo-mai-chi, danbing, coffin-bread, suncake, taro-pastry
- **african** (18): genfo, fit-fit, gored-gored, mrouzia, fricasse, mechouia-salad, assidat-zgougou, chakhchoukha, gazelle-ankles, asida, isi-ewu, kuli-kuli, okpa, ewa-aganyin, kilishi, tomato-bredie, umngqusho, riz-gras
- **south-indian** (2): chatti-pathiri, unnakai
- **indian-street** (1): dhebra
- **indian-sweets** (1): enduri-pitha
- **mideast** (18): nargesi-kebab, qottab, reshteh-khoshkar, baghali-ghatogh, khoresh-karafs, kolompeh, samoon, laffa, bamba, markook, meghli, sheikh-al-mahshi, maluj, boyoz, kapuska, ladys-navel, sobiyet, pacanga-boregi
- **italian** (4): michetta, cuccidati, casoncelli, panella
- **japan-korea** (12): butajiru, hoto, kiritanpo, nanbanzuke, tenmusu, okowa, kenchin-jiru, chinsuko, hwangnam-ppang, eo-mandu, nokdu-muk, siru-tteok
- **mexican** (7): chongos-zamoranos, romeritos, coyotas, corunda, totopo, pollo-motuleno, caldo-de-queso

## Batch 6: skipped

- The 7 known skips are still left out because no clearly reusable photo was found: doodhpak, sevai, ulava charu, rolex, albaloo-polo, chamoy, beijinho.
- 19 were dropped because the photo was wrong or unclear: goetta, divinity, kubaneh, pitha, olho-de-sogra, laobing, wotou, yusheng, otap, rusk, breakfast-roll, bulla-cake, toto, solomon-gundy, imoni, arare, bigilla, edikang-ikong, kikomando.
- 39 had usable photos but were held back to keep the batch at 250. They are still in the pending queue.

## Batch 6: other changes

- Fixed ID generation (`slug.py`) so special letters turn into plain ones: ø→o, œ→oe, æ→ae, đ→d, ı→i, ß→ss, ł→l, þ→th, ð→d, plus normal accent stripping. This brought in rugbrød (`rugbrod`), rød pølse (`rod-polse`), flatbrød (`flatbrod`) and pets de sœurs (`pets-de-soeurs`).
- The write-ups point out close relatives so they are not taken as duplicates: runza/bierock, gibanica/prekmurska gibanica, rød pølse/hot dog, laffa/pita, saimin/ramen, hallulla/marraqueta, porra/salmorejo.
- Not deployed, not pushed, zip not rebuilt (by request).


## Batch 5: done (250)

- **bakes** (48): black-bottom-pie, buttermilk-pie, chess-pie, cobbler, frozen-custard, honey-bun, lemon-ice-box-pie, sugar-cookie, hamantash, rugelach, canjica, passion-fruit-mousse, pave, rock-cake, saffron-bun, ginger-snap, fried-ice-cream, butter-cookie, vlaai, gingerbread-man, sally-lunn-bun, marzipan, egg-pie, ube-crinkles, joulutorttu, charlotte, fougasse, ladyfinger, pithivier, pain-de-campagne, sable, dampfnudel, schneeball, tapioca-pudding, sticky-bun, zopf, rainbow-cookie, fortune-cookie, pan-dulce, afghan, lefse, bolo-do-caco, broa, cozonac, paskha, sushki, pionono, basler-lackerli
- **americas** (22): johnnycake, shrimp-creole, steak-and-eggs, succotash, texas-toast, vegetarian-chili, yaka-mein, italian-sausage, fugazza, galinhada, tamale-pie, locrio, llapingacho, guyanese-pepperpot, bammy, run-down, nacatamal, pasteles, sorullos, aloo-pie, pan-de-jamon, boliche
- **japan-korea** (27): mochi-ice-cream, akashiyaki, botamochi, chanpuru, ganmodoki, karinto, konpeito, kusa-mochi, kuzumochi, mizutaki, momiji-manju, monaka, motsunabe, negimaki, raindrop-cake, satsuma-age, shiruko, tokoroten, toshikoshi-soba, yakisoba-pan, yatsuhashi, zoni, agwi-jjim, hwajeon, mak-guksu, mujigae-tteok, jeungpyeon
- **world** (2): khash, sulguni
- **european** (40): blintz, matzah-brei, vienna-sausage, steak-and-kidney-pudding, pasticada, hutspot, chicken-and-mushroom-pie, scotch-pie, andouille, boudin, garbure, navarin, roulade, bockwurst, eisbein, stuffed-mushrooms, flaki, zrazy, kaszanka, bacalhau-a-gomes-de-sa, canja-de-galinha, tripas-a-moda-do-porto, placinta, coulibiac, kholodets, rassolnik, pozharsky-cutlet, mimosa-salad, oladyi, ukha, bridie, arroz-caldoso, arros-negre, cachopo, caldo-galego, escabeche, fabes-con-almejas, sobrassada, wallenbergare, pampushka
- **seasia** (49): burmese-tofu, khauk-swe-thoke, meeshay, ang-ku-kueh, mee-pok, banmian, ngo-hiang, goto, kutsinta, laing, maja-blanca, mechado, nilaga, okoy, pancit-malabon, pata-tim, puto-bumbong, sapin-sapin, tokwat-baboy, bakpia, lemper, kue-putu, dodol, nasi-liwet, serabi, urap, sayur-asem, semur, tahu-campur, nasi-kebuli, lemang, nagasari, khao-piak-sen, sai-ua, bahulu, pie-tee, roti-tissue, hokkien-char-mee, asam-pedas, bubur-kacang-hijau, khanom-bueang, khao-lam, kluai-khaek, banh-tet, banh-duc, chao, nem-chua, pate-chaud, bun-oc
- **chinese** (18): buttered-pineapple-bun, ox-tongue-pastry, ham-and-egg-bun, cart-noodle, put-chai-ko, pork-chop-bun, ciba-cake, osmanthus-cake, qingtuan, pearl-meatballs, tong-sui, shanghai-fried-noodles, paper-wrapped-cake, yau-gok, bah-oan, chiayi-turkey-rice, dan-zai-noodles, egg-yolk-pastry
- **drinks** (1): red-bean-ice
- **mideast** (10): eggah, taftan, amba, saj-bread, taboon-bread, bamia, sulu-kofte, patlicanli-kebap, cezerye, stuffed-mussels
- **african** (9): himbasha, makroudh, mechoui, chermoula, matbucha, bambalouni, ofada-rice, ndole, frikkadel
- **south-indian** (1): ada
- **indian-sweets** (1): jaynagarer-moa
- **italian** (6): baci-di-dama, ricciarelli, ciceri-e-tria, rustico, paccheri, pancetta
- **mexican** (14): arroz-a-la-tumbada, bionico, borracho-beans, caldo-de-siete-mares, carne-a-la-tampiquena, entomatada, gringas, huachinango-a-la-veracruzana, machaca, manchamanteles, mole-de-olla, mole-verde, molote, papadzules
- **indian-mains** (2): bannu-pulao, sajji

## Batch 5: skipped

- Still not retried (no clearly reusable photo found quickly): doodhpak, sevai, ulava-charu, rolex, albaloo-polo, chamoy, beijinho. They stay pending.
- **Retried with corrected spellings and now added:** banh-uc → **banh-duc** (Bánh đúc; the "đ" had been dropped from the slug) and patlcanl-kebap → **patlicanli-kebap** (Patlıcanlı kebap; the dotless "ı" had been dropped).
- No usable photo in the dataset (26, still pending): shorgoghal, manjar-branco, iced-bun, burmese-fried-rice, nan-gyi-thoke, beaver-tail, liangfen, kulen, cronut, diri-djondjon, molagoottal, kateh, shir-berenj, hard-dough-bread, stew-peas, red-peas-soup, coconut-drop, purin, chilorio, balila, rewena-bread, concoction-rice, chanfana, dombolo, khai-yat-sai, banh-khoai-mi.
- Photo rejected after eyeballing (still pending): damper, pork-roll and pepperoni-roll (packaging only), jam-roly-poly, mont-lin-maya (street scene), shotis-puri, palitaw (packet), lupis, java-rice, manicotti (dry pasta), marquesita (no food visible), cheese-roll (blurry), jjolmyeon (plain noodles), ovos-moles, queijada, khapse (too dark), rellenitos-de-platano (fire scene), seco, lorne-sausage; rugbrød, rød pølse, flatbrød and pets de sœurs were also left out because "ø/œ" broke their slugs (to fix next batch).
- About 330 other fetched candidates were not used this batch; their images were deleted and they stay in the queue.

## Batch 5: merged instead of added

- Pasty → cornish-pasty, Cabbage roll → golabki/sarma, Rosca de reyes → roscon (removed from the queue).
- Dish pages explain look-alikes: andouille (French tripe vs Cajun smoked), boudin (noir/blanc/Cajun), roulade (meat vs sponge), Vienna sausage vs frankfurter names, chao vs congee/juk, Hokkien char mee (KL) vs Singapore/Penang Hokkien mee, eisbein vs schweinshaxe, cobbler vs crisp vs crumble.

## Batch 5: other changes

- New images encoded to the Batch 4 sizes (detail ≤640px and ≤70KB, thumbs 350px q72). Detail photos 60MB and thumbnails 22MB in total for 1,198 dishes.
- **Side dishes (never quiz picks):** johnnycake, succotash, texas-toast, fougasse, pain-de-campagne, urap, lemang, taftan, amba, bammy, chermoula, matbucha, borracho-beans, saj-bread, taboon-bread, broa, pampushka.
- **Tests:** 1198/1198 thumbs and photos load, FCP ~256ms, 44 quiz runs with no diet violations, diet search clean; 2,400-dish scale test FCP 156–348ms; phone (iPhone 13) screenshot of a new dish page looks sharp.
- **Delivery change (user instruction):** no Netlify deploy, no GitHub push and no zip for this batch — local git commit only. The live site still shows Batch 4 (948 dishes).

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
