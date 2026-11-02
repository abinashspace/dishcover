/* Dishcover — dish data.
   Taste values are 0–5. diet: "veg" | "egg" (vegetarian but has egg) | "both" (veg & non-veg versions) | "nonveg".
   type: drink | snack | meal | sweet. adventure: 1 (familiar) – 3 (new experience).
   photo: local image + credit (Wikimedia Commons; see images/CREDITS.md).
   NOTE: all reviews below are SAMPLE reviews written for this demo, not real customer data. */
window.CATEGORIES = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "drinks", label: "Cafe Drinks", emoji: "☕" },
  { id: "bakes", label: "Bakes & Sweets", emoji: "🥐" },
  { id: "italian", label: "Italian Cafe", emoji: "🍅" },
  { id: "asian", label: "East Asian", emoji: "🥢" },
  { id: "world", label: "World Street", emoji: "🌮" },
  { id: "indian", label: "Indian Favourites", emoji: "🇮🇳" }
];

window.DISHES = [
  {
    id: "affogato",
    photo: {"src": "images/affogato.jpg", "title": "Vinoteca, Smithfield, London (4485849609).jpg", "author": "Ewan Munro from London, UK", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Vinoteca,_Smithfield,_London_(4485849609).jpg"},
    name: "Affogato", pron: "ah-foh-GAH-toh", emoji: "🍨", color: "#F6E7D8",
    cuisine: "Italian", cat: "drinks", type: "sweet", diet: "veg", adventure: 2,
    what: "A scoop of vanilla ice cream with a hot shot of espresso poured over it. Half dessert, half coffee.",
    ingredients: ["Vanilla gelato / ice cream", "Espresso shot"],
    taste: { sweet: 4, spicy: 0, sour: 0, salty: 0, bitter: 3, mild: 2 },
    texture: ["Creamy", "Melty", "Hot & cold"],
    steps: [
      { icon: "☕", text: "If the espresso comes in a separate cup, pour it over the ice cream right away." },
      { icon: "🥄", text: "Scoop with a spoon while the ice cream is still cold and the coffee is hot — that contrast is the whole point." },
      { icon: "⏱️", text: "Eat it quickly; it melts in a few minutes." },
      { icon: "🥤", text: "Sip the sweet coffee-cream left at the bottom like a tiny milkshake." }
    ],
    reviews: { rating: 4.6, summary: "People love the hot–cold contrast and say it's a perfect after-meal treat. Some find the espresso too bitter.",
      loved: ["Hot + cold contrast", "Not too heavy"], watch: ["Strong coffee taste", "Small portion"],
      samples: [
        { name: "Riya", stars: 5, text: "Tastes like coffee ice cream but way better. Ordered a second one!" },
        { name: "Karthik", stars: 4, text: "Eat it fast. I waited for a photo and it became coffee soup." },
        { name: "Neha", stars: 3, text: "Nice, but bitter for me. Ask if they can add a little sugar." }
      ] },
    goodFor: ["Coffee", "Ice cream", "Dessert after a meal"],
    tip: "Not a fan of bitter? Ask for a bigger scoop of ice cream!"
  },
  {
    id: "cortado",
    photo: {"src": "images/cortado.jpg", "title": "CaféCortado(Tallat).jpg", "author": "Charles Haynes", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Caf%C3%A9Cortado(Tallat).jpg"},
    name: "Cortado", pron: "kor-TAH-doh", emoji: "🥛", color: "#EFE3D3",
    cuisine: "Spanish", cat: "drinks", type: "drink", diet: "veg", adventure: 2,
    what: "A small, strong coffee: espresso 'cut' with an equal amount of warm milk. Smaller and stronger than a latte.",
    ingredients: ["Espresso", "Steamed milk (equal amount)"],
    taste: { sweet: 1, spicy: 0, sour: 1, salty: 0, bitter: 3, mild: 2 },
    texture: ["Smooth", "Little foam"],
    steps: [
      { icon: "🍬", text: "It comes unsweetened. Add sugar first if you like it sweet, and stir." },
      { icon: "🤏", text: "It's served in a small glass (around 120 ml) — hold it by the top rim if the glass is warm." },
      { icon: "😌", text: "Sip slowly. It's strong, so it's not meant to be gulped." }
    ],
    reviews: { rating: 4.4, summary: "Coffee lovers like that it's strong but smooth. Newcomers expecting a big cup are surprised by the size.",
      loved: ["Balanced, strong flavour", "Quick pick-me-up"], watch: ["Small size", "Bitter if you're used to sweet coffee"],
      samples: [
        { name: "Arjun", stars: 5, text: "Stronger than a cappuccino, smoother than an espresso. My new usual." },
        { name: "Meera", stars: 4, text: "Tiny glass! But it really wakes you up." },
        { name: "Sam", stars: 3, text: "Needed two sugars for me. Good if you like real coffee taste." }
      ] },
    goodFor: ["Strong coffee", "Espresso but softer", "Small drinks"],
    tip: "Cortado = small & strong. Want a big milky cup? Pick a latte instead."
  },
  {
    id: "matcha-latte",
    photo: {"src": "images/matcha-latte.jpg", "title": "Matcha green tea latte art.jpg", "author": "Jeff Nelson", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Matcha_green_tea_latte_art.jpg"},
    name: "Matcha Latte", pron: "MAH-chah LAH-tay", emoji: "🍵", color: "#DDEFD8",
    cuisine: "Japanese", cat: "drinks", type: "drink", diet: "veg", adventure: 2,
    what: "Powdered Japanese green tea whisked with milk. Bright green, earthy and creamy. Has caffeine, but less than coffee.",
    ingredients: ["Matcha (green tea powder)", "Milk", "Sweetener (optional)"],
    taste: { sweet: 2, spicy: 0, sour: 0, salty: 0, bitter: 2, mild: 4 },
    texture: ["Creamy", "Smooth"],
    steps: [
      { icon: "🧊", text: "Choose hot or iced. Iced is a nice first try — it's milder." },
      { icon: "🍯", text: "Ask how sweet it is. Unsweetened matcha tastes grassy; a little sweetener helps beginners." },
      { icon: "🥄", text: "Stir before sipping — the powder can settle at the bottom." }
    ],
    reviews: { rating: 4.3, summary: "Fans love its calm, earthy taste. First-timers sometimes say it tastes 'like grass' when unsweetened.",
      loved: ["Gentle energy", "Pretty colour"], watch: ["Grassy taste", "Pricey"],
      samples: [
        { name: "Ananya", stars: 5, text: "Iced with oat milk is my favourite. Feels fresh, not heavy." },
        { name: "Rahul", stars: 3, text: "First sip was weird, by the end I liked it. Get it sweetened." },
        { name: "Joe", stars: 4, text: "Less jittery than coffee. Stir it well!" }
      ] },
    goodFor: ["Green tea", "Milky drinks", "Less caffeine than coffee"],
    tip: "Tell them 'less sweet' or 'regular sweet' — they'll adjust it."
  },
  {
    id: "bubble-tea",
    photo: {"src": "images/bubble-tea.jpg", "title": "Bubble Tea.png", "author": "Howief", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Bubble_Tea.png"},
    name: "Bubble Tea (Boba)", pron: "BUB-ul tee / BOH-bah", emoji: "🧋", color: "#F1E2F4",
    cuisine: "Taiwanese", cat: "drinks", type: "drink", diet: "veg", adventure: 2,
    what: "Sweet milk tea (or fruit tea) with chewy tapioca pearls at the bottom, drunk with a fat straw.",
    ingredients: ["Black or green tea", "Milk", "Sugar syrup", "Tapioca pearls"],
    taste: { sweet: 5, spicy: 0, sour: 1, salty: 0, bitter: 1, mild: 3 },
    texture: ["Chewy pearls", "Creamy", "Cold"],
    steps: [
      { icon: "📝", text: "Pick a flavour, sugar level (e.g. 50%) and ice level. 50% sugar is a safe start." },
      { icon: "🥤", text: "Hold the sealed cup firmly and stab the lid with the pointy end of the straw in one quick push." },
      { icon: "🔄", text: "Shake or swirl it so the pearls and syrup mix." },
      { icon: "😋", text: "Sip and let a few pearls come up the straw. Chew them — they're soft and gummy." }
    ],
    reviews: { rating: 4.5, summary: "Fun and filling. Most people love the chewy pearls; some find it far too sweet at full sugar.",
      loved: ["Chewy pearls are fun", "Lots of flavours"], watch: ["Very sweet at 100%", "Pearls not for small kids"],
      samples: [
        { name: "Isha", stars: 5, text: "Brown sugar boba = happiness. Go 50% sugar." },
        { name: "Vikram", stars: 4, text: "Didn't know about stabbing the lid. Took me three tries 😂" },
        { name: "Lena", stars: 4, text: "Like a drink and a snack together." }
      ] },
    goodFor: ["Sweet drinks", "Milkshakes", "Chewy textures"],
    tip: "Stab the lid fast and straight — slow pokes just bend the straw!"
  },
  {
    id: "filter-coffee",
    photo: {"src": "images/filter-coffee.jpg", "title": "Filter kaapi.JPG", "author": "Vallari.a", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Filter_kaapi.JPG"},
    name: "Filter Coffee", pron: "Filter kaapi", emoji: "☕", color: "#EADBC8",
    cuisine: "South Indian", cat: "indian", type: "drink", diet: "veg", adventure: 1,
    what: "Strong South Indian coffee brewed slowly (often with chicory), mixed with hot frothy milk and sugar. Served in a steel tumbler and bowl (davara).",
    ingredients: ["Coffee + chicory decoction", "Boiled milk", "Sugar"],
    taste: { sweet: 3, spicy: 0, sour: 0, salty: 0, bitter: 2, mild: 3 },
    texture: ["Frothy", "Hot"],
    steps: [
      { icon: "🥣", text: "You get a tumbler (tall cup) inside a davara (small bowl). It's very hot — hold by the top rim." },
      { icon: "↕️", text: "Pour the coffee from the tumbler into the bowl and back a few times. This cools it and makes froth." },
      { icon: "☕", text: "Sip from the tumbler (or the bowl). Many people sip without the cup touching their lips." }
    ],
    reviews: { rating: 4.7, summary: "Loved for its strong, comforting, sweet taste. The steel cups get very hot — that's the most common complaint.",
      loved: ["Strong & comforting", "Cheap and quick"], watch: ["Cup is very hot", "Usually pre-sweetened"],
      samples: [
        { name: "Lakshmi", stars: 5, text: "Nothing beats it in the morning. The pouring is half the fun." },
        { name: "Dev", stars: 4, text: "Ask for 'less sugar' if you want — they'll do it." },
        { name: "Tom", stars: 5, text: "Better than most fancy lattes I've had." }
      ] },
    goodFor: ["Sweet milky coffee", "Strong tea", "Morning drinks"],
    tip: "Pour high between tumbler and davara for extra froth — carefully!"
  },
  {
    id: "croissant",
    photo: {"src": "images/croissant.jpg", "title": "Croissant-Petr Kratochvil.jpg", "author": "Petr Kratochvil", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Croissant-Petr_Kratochvil.jpg"},
    name: "Croissant", pron: "KWAH-son (or krah-SONT)", emoji: "🥐", color: "#FBE8C6",
    cuisine: "French", cat: "bakes", type: "snack", diet: "egg", adventure: 1,
    what: "A crescent-shaped French pastry made of many thin, buttery layers. Crispy outside, soft and airy inside.",
    ingredients: ["Flour", "Lots of butter", "Yeast", "Egg wash (usually)"],
    taste: { sweet: 1, spicy: 0, sour: 0, salty: 1, bitter: 0, mild: 5 },
    texture: ["Flaky", "Buttery", "Soft inside"],
    steps: [
      { icon: "🔥", text: "Ask them to warm it — croissants taste best slightly warm." },
      { icon: "🤲", text: "Eat with your hands. Tear off a piece instead of biting the whole thing." },
      { icon: "🍓", text: "Plain is great. You can add butter or jam if served on the side." },
      { icon: "🍽️", text: "Keep a plate or napkin under it — the flakes fall everywhere (that's a sign it's good!)." }
    ],
    reviews: { rating: 4.5, summary: "A safe, comforting pick. People love the buttery flakes; stale or cold ones disappoint.",
      loved: ["Buttery & light", "Goes with any coffee"], watch: ["Messy flakes", "Not filling alone"],
      samples: [
        { name: "Priya", stars: 5, text: "Warm croissant + cappuccino = perfect breakfast." },
        { name: "Aman", stars: 4, text: "Flakes everywhere on my shirt. Worth it." },
        { name: "Zoe", stars: 4, text: "Try the chocolate one (pain au chocolat) next." }
      ] },
    goodFor: ["Bread & butter", "Light breakfast", "Something not too sweet"],
    tip: "Hear a 'crunch' and see flakes? That's a good croissant!"
  },
  {
    id: "macaron",
    photo: {"src": "images/macaron.jpg", "title": "Des macarons de chez Bouillet (mars 2023).jpg", "author": "Benoît Prieur", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Des_macarons_de_chez_Bouillet_(mars_2023).jpg"},
    name: "Macaron", pron: "mah-kah-RON", emoji: "🧁", color: "#FBDDE6",
    cuisine: "French", cat: "bakes", type: "sweet", diet: "egg", adventure: 2,
    what: "A small, colourful sandwich cookie: two light almond-meringue shells with a creamy filling. Not the same as a coconut 'macaroon'.",
    ingredients: ["Almond flour", "Egg whites", "Sugar", "Buttercream / ganache / jam filling"],
    taste: { sweet: 5, spicy: 0, sour: 1, salty: 0, bitter: 0, mild: 3 },
    texture: ["Crisp shell", "Chewy inside", "Creamy filling"],
    steps: [
      { icon: "🎨", text: "Pick flavours by colour — pink is often rose or raspberry, green pistachio, brown chocolate. Ask if unsure." },
      { icon: "🤏", text: "Hold it gently between fingers; the shell is delicate." },
      { icon: "😋", text: "Eat it in two or three small bites. Notice the crisp-then-chewy texture." },
      { icon: "☕", text: "They're very sweet — pair with unsweetened tea or coffee." }
    ],
    reviews: { rating: 4.2, summary: "Pretty and delicate; people enjoy trying many flavours. Common complaints: very sweet and pricey for the size.",
      loved: ["Fun flavours", "Great for gifting"], watch: ["Very sweet", "Expensive per piece"],
      samples: [
        { name: "Sana", stars: 5, text: "Pistachio and salted caramel were amazing." },
        { name: "Rohit", stars: 3, text: "Cute but two bites and gone. Super sweet." },
        { name: "Emma", stars: 4, text: "Get a mixed box and share!" }
      ] },
    goodFor: ["Sweets", "Cookies", "Trying many flavours"],
    tip: "Macaron (one 'o') = colourful almond cookie. Macaroon = coconut!"
  },
  {
    id: "tiramisu",
    photo: {"src": "images/tiramisu.jpg", "title": "Tiramisu - Raffaele Diomede.jpg", "author": "Raffaele Diomede from Pordenone, ITALIA", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Tiramisu_-_Raffaele_Diomede.jpg"},
    name: "Tiramisu", pron: "tee-rah-mee-SOO", emoji: "🍰", color: "#EBDCCB",
    cuisine: "Italian", cat: "bakes", type: "sweet", diet: "egg", adventure: 1,
    what: "Italian layered dessert: soft sponge biscuits soaked in coffee, with a sweet mascarpone cream and cocoa on top. The name means 'pick me up'.",
    ingredients: ["Ladyfinger biscuits", "Espresso", "Mascarpone cheese", "Eggs & sugar", "Cocoa powder"],
    taste: { sweet: 4, spicy: 0, sour: 0, salty: 0, bitter: 2, mild: 3 },
    texture: ["Creamy", "Soft", "Moist"],
    steps: [
      { icon: "🥄", text: "Use a spoon (or dessert fork) and dig down to the bottom to get every layer in one bite." },
      { icon: "😮‍💨", text: "Don't breathe in sharply — the cocoa powder on top can make you cough!" },
      { icon: "❓", text: "Some versions contain alcohol (like coffee liqueur). Ask if you avoid alcohol." }
    ],
    reviews: { rating: 4.6, summary: "A crowd favourite — creamy, coffee-flavoured and not too heavy. Some versions are too soggy or boozy.",
      loved: ["Creamy coffee flavour", "Light texture"], watch: ["May contain alcohol", "Contains caffeine"],
      samples: [
        { name: "Kavya", stars: 5, text: "Like a coffee cloud. Best dessert on the menu." },
        { name: "Nikhil", stars: 4, text: "I coughed on the cocoa, lol. Still loved it." },
        { name: "Marco", stars: 4, text: "Good one, but ask if it has liqueur." }
      ] },
    goodFor: ["Coffee", "Creamy desserts", "Cake"],
    tip: "Get all the layers in one spoonful — that's the magic."
  },
  {
    id: "bruschetta",
    photo: {"src": "images/bruschetta.jpg", "title": "2014 Bruschetta The Larder Chiang Mai.jpg", "author": "Takeaway", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:2014_Bruschetta_The_Larder_Chiang_Mai.jpg"},
    name: "Bruschetta", pron: "broo-SKET-tah", emoji: "🍅", color: "#FADAD3",
    cuisine: "Italian", cat: "italian", type: "snack", diet: "veg", adventure: 1,
    what: "Toasted slices of bread rubbed with garlic, topped with chopped tomatoes, basil and olive oil. A fresh, crunchy starter.",
    ingredients: ["Toasted bread", "Tomato", "Garlic", "Basil", "Olive oil"],
    taste: { sweet: 1, spicy: 0, sour: 2, salty: 2, bitter: 0, mild: 3 },
    texture: ["Crunchy", "Juicy topping"],
    steps: [
      { icon: "🤲", text: "Eat with your hands — pick up one slice at a time." },
      { icon: "📐", text: "Bite from a corner and lean over your plate; tomato pieces like to fall." },
      { icon: "⏱️", text: "Eat it soon after it arrives, before the bread gets soggy." },
      { icon: "🤝", text: "It's usually served as a shared starter — fine to take one piece each." }
    ],
    reviews: { rating: 4.3, summary: "Fresh, light and easy to share. Messy toppings and soggy bread are the usual complaints.",
      loved: ["Fresh & light", "Good to share"], watch: ["Toppings fall off", "Raw garlic taste"],
      samples: [
        { name: "Anjali", stars: 4, text: "Like a fancy tomato toast. Very fresh." },
        { name: "Paul", stars: 5, text: "Perfect starter, ordered another plate." },
        { name: "Harsh", stars: 3, text: "Tasty but half my tomatoes ended up on the table." }
      ] },
    goodFor: ["Tomato", "Garlic bread", "Light starters"],
    tip: "Say 'broo-SKET-tah' — the 'ch' sounds like 'k' in Italian."
  },
  {
    id: "panini",
    photo: {"src": "images/panini.jpg", "title": "Panini sandwich in a restaurant.JPG", "author": "Tomwsulcer", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Panini_sandwich_in_a_restaurant.JPG"},
    name: "Panini", pron: "pah-NEE-nee", emoji: "🥪", color: "#F6E2C0",
    cuisine: "Italian", cat: "italian", type: "meal", diet: "both", adventure: 1,
    what: "A hot, pressed Italian sandwich. The bread is grilled flat so it's crispy outside with melted cheese inside.",
    ingredients: ["Italian bread (ciabatta)", "Cheese", "Veggies or chicken/meat", "Pesto or sauces"],
    taste: { sweet: 0, spicy: 1, sour: 1, salty: 3, bitter: 0, mild: 3 },
    texture: ["Crispy outside", "Gooey cheese"],
    steps: [
      { icon: "🔪", text: "It's usually cut in half. Pick up one half with your hands." },
      { icon: "🔥", text: "Careful with the first bite — melted cheese is very hot." },
      { icon: "🍟", text: "Dip in any side sauce, or eat with the chips/salad it comes with." }
    ],
    reviews: { rating: 4.4, summary: "Filling and safe — like a better grilled sandwich. Some find café portions small for the price.",
      loved: ["Crispy & cheesy", "Filling"], watch: ["Hot cheese", "Price"],
      samples: [
        { name: "Sneha", stars: 5, text: "Pesto paneer panini was so good." },
        { name: "Yash", stars: 4, text: "Basically a premium grilled sandwich. No complaints." },
        { name: "Ali", stars: 4, text: "Let it cool one minute. Learned the hard way." }
      ] },
    goodFor: ["Grilled sandwiches", "Cheese", "Something filling"],
    tip: "Panini is the safest 'new' order — it's just a fancy grilled sandwich!"
  },
  {
    id: "sushi",
    photo: {"src": "images/sushi.jpg", "title": "Sushi platter.jpg", "author": "chidorian from Japan", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:Sushi_platter.jpg"},
    name: "Sushi", pron: "SOO-shee", emoji: "🍣", color: "#FFE1D6",
    cuisine: "Japanese", cat: "asian", type: "meal", diet: "both", adventure: 3,
    what: "Bite-sized Japanese pieces of slightly sweet vinegar rice with fish, seafood or vegetables, often rolled in seaweed. Not all sushi is raw fish!",
    ingredients: ["Sushi rice (with vinegar)", "Raw/cooked fish or veggies", "Nori seaweed", "Soy sauce, wasabi, pickled ginger"],
    taste: { sweet: 1, spicy: 1, sour: 1, salty: 2, bitter: 0, mild: 4 },
    texture: ["Soft rice", "Silky fish", "Crisp seaweed"],
    steps: [
      { icon: "🥢", text: "Use chopsticks — or your fingers. Eating sushi by hand is completely normal." },
      { icon: "🫗", text: "Pour a little soy sauce in the small dish. Dip lightly — fish side down, not the rice (it falls apart)." },
      { icon: "🟢", text: "Wasabi is very hot, like strong mustard. Use a tiny dab or skip it." },
      { icon: "👄", text: "Eat each piece in one bite if you can." },
      { icon: "🫚", text: "The pink pickled ginger is a palate cleanser — eat a slice between different pieces." }
    ],
    reviews: { rating: 4.4, summary: "Fresh and light; many beginners start with veg or cooked rolls and love them. Raw fish isn't for everyone.",
      loved: ["Fresh & light", "Veg & cooked options"], watch: ["Raw fish", "Wasabi surprise"],
      samples: [
        { name: "Tanvi", stars: 5, text: "Started with avocado and cucumber rolls. Now I'm hooked." },
        { name: "Ravi", stars: 3, text: "Too much wasabi went straight to my nose 😭 Use a tiny bit!" },
        { name: "Ken", stars: 5, text: "Dip fish side down. Game changer." }
      ] },
    goodFor: ["Light meals", "Seafood", "Trying something new"],
    tip: "Nervous? Order a cooked or veg roll like a California or cucumber roll first."
  },
  {
    id: "ramen",
    photo: {"src": "images/ramen.jpg", "title": "Shoyu Ramen（Tokyo Ramen） - 01.jpg", "author": "Quercus acuta", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg"},
    name: "Ramen", pron: "RAH-men", emoji: "🍜", color: "#FCE7C8",
    cuisine: "Japanese", cat: "asian", type: "meal", diet: "both", adventure: 2,
    what: "A big bowl of Japanese wheat noodles in a rich, hot broth, topped with things like egg, meat slices, greens and seaweed. Nothing like instant noodles!",
    ingredients: ["Wheat noodles", "Broth (pork, chicken, miso or veg)", "Soft-boiled egg", "Meat or tofu", "Spring onions"],
    taste: { sweet: 1, spicy: 2, sour: 0, salty: 4, bitter: 0, mild: 2 },
    texture: ["Slurpy noodles", "Rich broth"],
    steps: [
      { icon: "🥄", text: "Taste the broth first with the spoon — it's the heart of the dish." },
      { icon: "🥢", text: "Lift noodles with chopsticks, rest them on the spoon, and eat. Slurping is fine (even polite in Japan)." },
      { icon: "⏱️", text: "Eat fairly quickly — noodles go soft if they sit too long." },
      { icon: "🥚", text: "Bite into the egg — the yolk is often soft and jammy." },
      { icon: "🍲", text: "Finish with the broth using the spoon, or sip from the bowl." }
    ],
    reviews: { rating: 4.6, summary: "Warm, filling and comforting. Very satisfying; some bowls are salty or heavy.",
      loved: ["Deep, rich flavour", "Very filling"], watch: ["Salty broth", "Pork-based broths are common"],
      samples: [
        { name: "Aditi", stars: 5, text: "Miso ramen on a rainy day. Perfect." },
        { name: "Sid", stars: 4, text: "Ask which broth is veg — many are pork or chicken." },
        { name: "Hana", stars: 5, text: "Slurp! Nobody judges, I promise." }
      ] },
    goodFor: ["Noodles", "Soups", "Hearty meals"],
    tip: "Rest noodles on your spoon — no splashes on your shirt!"
  },
  {
    id: "dim-sum",
    photo: {"src": "images/dim-sum.jpg", "title": "Chinese DimSum (9023590541).jpg", "author": "LeonardKong", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Chinese_DimSum_(9023590541).jpg"},
    name: "Dim Sum", pron: "dim SUM", emoji: "🥟", color: "#F3EBDD",
    cuisine: "Chinese (Cantonese)", cat: "asian", type: "snack", diet: "both", adventure: 2,
    what: "A meal of many small Chinese bites — steamed dumplings, buns and rolls served in bamboo baskets, meant for sharing.",
    ingredients: ["Thin dough wrappers", "Fillings: prawn, chicken, pork or veggies", "Soy / chilli oil dips"],
    taste: { sweet: 1, spicy: 1, sour: 0, salty: 2, bitter: 0, mild: 4 },
    texture: ["Soft", "Chewy wrapper", "Juicy"],
    steps: [
      { icon: "📋", text: "Order 3–4 different baskets to share. Each has 3–4 pieces." },
      { icon: "🥢", text: "Pick up one piece with chopsticks (a fork is fine too)." },
      { icon: "🫗", text: "Dip in soy sauce or chilli oil." },
      { icon: "🥄", text: "Soup dumplings (xiao long bao)? Put it on a spoon, nibble a small hole, sip the hot soup, then eat it." }
    ],
    reviews: { rating: 4.5, summary: "Great for groups — lots of variety in small portions. Some say it adds up in price quickly.",
      loved: ["Lots of variety", "Great to share"], watch: ["Hot soup inside", "Small portions add up"],
      samples: [
        { name: "Pooja", stars: 5, text: "Crystal veg dumplings were so delicate." },
        { name: "Ishaan", stars: 4, text: "Burned my tongue on a soup dumpling. Use the spoon trick!" },
        { name: "Mei", stars: 5, text: "Go with friends and order everything." }
      ] },
    goodFor: ["Momos", "Sharing", "Small bites"],
    tip: "Love momos? Dim sum is their fancy cousin."
  },
  {
    id: "bibimbap",
    photo: {"src": "images/bibimbap.jpg", "title": "Dolsot-bibimbap.jpg", "author": "Sous Chef", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0", "source": "https://commons.wikimedia.org/wiki/File:Dolsot-bibimbap.jpg"},
    name: "Bibimbap", pron: "BEE-bim-bahp", emoji: "🍲", color: "#FCE0CF",
    cuisine: "Korean", cat: "asian", type: "meal", diet: "both", adventure: 2,
    what: "A Korean rice bowl topped with neat sections of vegetables, meat or tofu and a fried egg. 'Bibim' means mixed — you mix it before eating.",
    ingredients: ["Rice", "Seasoned veggies", "Beef / tofu", "Fried egg", "Gochujang (sweet-spicy chilli paste)"],
    taste: { sweet: 2, spicy: 3, sour: 0, salty: 2, bitter: 0, mild: 2 },
    texture: ["Crunchy veggies", "Soft rice", "Crispy bottom (stone bowl)"],
    steps: [
      { icon: "🌶️", text: "Add gochujang chilli paste — start with a little, it's spicy-sweet." },
      { icon: "🥄", text: "Mix everything together thoroughly with your spoon, breaking the egg yolk." },
      { icon: "🔥", text: "In a hot stone bowl (dolsot)? Don't touch it! Let the rice crisp at the bottom for a minute." },
      { icon: "😋", text: "Eat with the spoon (Koreans use spoons for rice). Scrape up the crispy bits." }
    ],
    reviews: { rating: 4.6, summary: "Colourful, healthy-feeling and filling. People love the crispy rice in stone bowls; spice level varies.",
      loved: ["Healthy & filling", "Crispy rice"], watch: ["Stone bowl is very hot", "Chilli paste is spicy"],
      samples: [
        { name: "Divya", stars: 5, text: "Mix it all! That's the fun part." },
        { name: "Varun", stars: 4, text: "Tastes like a Korean biryani-salad combo. Weird but great." },
        { name: "Jin", stars: 5, text: "Wait for the crispy rice at the bottom 👌" }
      ] },
    goodFor: ["Rice bowls", "Veggies", "Mild-to-medium spice"],
    tip: "Mix, mix, mix! An unmixed bibimbap is a sad bibimbap."
  },
  {
    id: "pho",
    photo: {"src": "images/pho.jpg", "title": "Bowl of Meatball pho.jpg", "author": "SerraKnightz", "license": "CC BY 4.0", "licenseUrl": "https://creativecommons.org/licenses/by/4.0", "source": "https://commons.wikimedia.org/wiki/File:Bowl_of_Meatball_pho.jpg"},
    name: "Pho", pron: "FUH (not 'foe')", emoji: "🍜", color: "#E3F0E4",
    cuisine: "Vietnamese", cat: "asian", type: "meal", diet: "both", adventure: 2,
    what: "Vietnamese rice-noodle soup in a light, fragrant broth (usually beef or chicken), served with fresh herbs, lime and chilli on the side.",
    ingredients: ["Flat rice noodles", "Clear spiced broth", "Beef or chicken", "Basil, bean sprouts, lime, chilli"],
    taste: { sweet: 1, spicy: 1, sour: 1, salty: 2, bitter: 0, mild: 4 },
    texture: ["Soft noodles", "Light broth", "Crunchy sprouts"],
    steps: [
      { icon: "🥄", text: "Taste the broth first, before adding anything." },
      { icon: "🌿", text: "Tear herbs and add bean sprouts, a squeeze of lime and chilli from the side plate." },
      { icon: "🫗", text: "Put hoisin or sriracha sauce in a small dish to dip the meat, instead of pouring it in the soup." },
      { icon: "🥢", text: "Chopsticks in one hand for noodles, spoon in the other for broth." }
    ],
    reviews: { rating: 4.5, summary: "Light, fresh and soothing — like a herby, clean version of noodle soup. Mostly made with meat broth.",
      loved: ["Fresh herbs", "Light but filling"], watch: ["Usually meat broth", "Herbs like coriander"],
      samples: [
        { name: "Shreya", stars: 4, text: "Felt like chicken soup but way more fragrant." },
        { name: "Mohan", stars: 5, text: "Add the lime! It makes everything pop." },
        { name: "Linh", stars: 5, text: "Taste broth first, then customize." }
      ] },
    goodFor: ["Soups", "Fresh herbs", "Light meals"],
    tip: "It's said 'fuh' — like a question: 'fuh?'"
  },
  {
    id: "momos",
    photo: {"src": "images/momos.jpg", "title": "Momo nepal.jpg", "author": "Kushal Goyal", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Momo_nepal.jpg"},
    name: "Momos", pron: "MOH-mohs", emoji: "🥟", color: "#F7E9DA",
    cuisine: "Tibetan / Nepali", cat: "asian", type: "snack", diet: "both", adventure: 1,
    what: "Himalayan dumplings — thin dough filled with veggies, paneer or chicken — steamed, fried or tandoori, served with fiery red chutney.",
    ingredients: ["Flour wrapper", "Veg / paneer / chicken filling", "Garlic, ginger, onion", "Spicy tomato-chilli chutney"],
    taste: { sweet: 0, spicy: 3, sour: 1, salty: 2, bitter: 0, mild: 3 },
    texture: ["Soft & juicy (steamed)", "Crispy (fried)"],
    steps: [
      { icon: "🧾", text: "Choose steamed (soft, lighter), fried (crispy) or tandoori (smoky, spicy)." },
      { icon: "🤏", text: "Use a fork, toothpick or your fingers." },
      { icon: "🌶️", text: "Dip in the red chutney — it's usually very spicy, so start small." },
      { icon: "♨️", text: "Bite in half first; hot juice inside can burn." }
    ],
    reviews: { rating: 4.6, summary: "One of India's favourite street snacks. Cheap, filling and addictive; the chutney can be very hot.",
      loved: ["Cheap & tasty", "Juicy filling"], watch: ["Chutney is fiery", "Hot juices"],
      samples: [
        { name: "Aarav", stars: 5, text: "Steamed veg momos with that red chutney — daily craving." },
        { name: "Simran", stars: 4, text: "Try tandoori momos if you like spicy." },
        { name: "Tenzin", stars: 5, text: "Bite half first, let the steam out." }
      ] },
    goodFor: ["Street food", "Dumplings", "Spicy dips"],
    tip: "First time? Go steamed veg — a classic that everyone loves."
  },
  {
    id: "tacos",
    photo: {"src": "images/tacos.jpg", "title": "001 Tacos de carnitas, carne asada y al pastor.jpg", "author": "Larry Miller", "license": "CC BY-SA 2.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0", "source": "https://commons.wikimedia.org/wiki/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg"},
    name: "Tacos", pron: "TAH-kohs", emoji: "🌮", color: "#FCEBC2",
    cuisine: "Mexican", cat: "world", type: "meal", diet: "both", adventure: 2,
    what: "Small soft corn or flour tortillas folded around fillings like grilled meat, beans or paneer, topped with salsa, onion and coriander.",
    ingredients: ["Corn or flour tortilla", "Filling (chicken, beans, paneer, etc.)", "Salsa", "Onion, coriander, lime"],
    taste: { sweet: 1, spicy: 3, sour: 2, salty: 2, bitter: 0, mild: 2 },
    texture: ["Soft wrap", "Juicy filling", "Crunchy toppings"],
    steps: [
      { icon: "🍋", text: "Squeeze the lime over and add salsa first." },
      { icon: "🤲", text: "Pick it up with your hands and fold it slightly like a 'U'." },
      { icon: "↘️", text: "Tilt your head, not the taco — keep it level so the filling stays in." },
      { icon: "🍽️", text: "Bite from one end over your plate. Fallen bits? Eat them with a fork." }
    ],
    reviews: { rating: 4.5, summary: "Fresh, zesty and fun to eat. Messy if overfilled; spice depends on the salsa.",
      loved: ["Zesty & fresh", "Fun to eat"], watch: ["Messy", "Hot salsa"],
      samples: [
        { name: "Nisha", stars: 5, text: "Paneer tacos with lime — so fresh!" },
        { name: "Gaurav", stars: 4, text: "Tilt the head trick works. No spills." },
        { name: "Carlos", stars: 4, text: "Order 3 different fillings to compare." }
      ] },
    goodFor: ["Kathi rolls", "Tangy food", "Hand-held food"],
    tip: "Tilt your head, not the taco! 🌮"
  },
  {
    id: "falafel",
    photo: {"src": "images/falafel.jpg", "title": "Falafels 2.jpg", "author": "Popo le Chien", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0", "source": "https://commons.wikimedia.org/wiki/File:Falafels_2.jpg"},
    name: "Falafel", pron: "fuh-LAH-ful", emoji: "🧆", color: "#E6EED3",
    cuisine: "Middle Eastern", cat: "world", type: "snack", diet: "veg", adventure: 1,
    what: "Crispy deep-fried balls made of ground chickpeas and herbs — like a Middle Eastern vada. Often served in pita bread with salad and tahini sauce.",
    ingredients: ["Chickpeas", "Herbs (parsley, coriander)", "Garlic & spices", "Tahini (sesame) sauce", "Pita bread"],
    taste: { sweet: 0, spicy: 1, sour: 1, salty: 2, bitter: 1, mild: 3 },
    texture: ["Crunchy outside", "Soft inside"],
    steps: [
      { icon: "🫓", text: "In a pita wrap? Keep the paper on and peel it down as you eat." },
      { icon: "🍽️", text: "On a plate? Break a ball with a fork or fingers and dip it in tahini or hummus." },
      { icon: "🥗", text: "Eat with the salad and pickles — they balance the fried crunch." }
    ],
    reviews: { rating: 4.4, summary: "A great vegetarian pick — crunchy, herby and filling. Can be dry without enough sauce.",
      loved: ["Fully vegetarian", "Crunchy"], watch: ["Dry without sauce", "Sesame allergy (tahini)"],
      samples: [
        { name: "Ritu", stars: 5, text: "Tastes like a herby dal vada. Loved it." },
        { name: "Omar", stars: 4, text: "Ask for extra tahini — it makes it." },
        { name: "Kunal", stars: 4, text: "Filling falafel wrap for a cheap lunch." }
      ] },
    goodFor: ["Vada / pakoda", "Vegetarian food", "Wraps"],
    tip: "Ask for extra sauce — falafel loves sauce."
  },
  {
    id: "shawarma",
    photo: {"src": "images/shawarma.jpg", "title": "Handmade Chicken Shawarma Wrap - Lavash.jpg", "author": "Andy Li", "license": "CC0", "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Handmade_Chicken_Shawarma_Wrap_-_Lavash.jpg"},
    name: "Shawarma", pron: "shuh-WAR-mah", emoji: "🌯", color: "#F6DEC6",
    cuisine: "Middle Eastern", cat: "world", type: "meal", diet: "nonveg", adventure: 1,
    what: "Thin slices of spiced meat roasted on a turning vertical grill, wrapped in soft bread with garlic sauce, pickles and veggies.",
    ingredients: ["Spiced chicken or meat", "Pita / khubz bread", "Garlic sauce (toum)", "Pickles, onions, fries"],
    taste: { sweet: 0, spicy: 2, sour: 2, salty: 3, bitter: 0, mild: 2 },
    texture: ["Soft wrap", "Juicy meat", "Crunchy pickles"],
    steps: [
      { icon: "🧻", text: "Keep the foil or paper wrapper on — it holds everything together." },
      { icon: "⬇️", text: "Bite from the top and peel the wrapper down little by little." },
      { icon: "🧄", text: "Plate version? Wrap pieces of meat in bread with garlic sauce, or eat with a fork." }
    ],
    reviews: { rating: 4.5, summary: "Juicy, garlicky and filling — a late-night favourite. Quality varies a lot between shops.",
      loved: ["Garlic sauce", "Filling & cheap"], watch: ["Strong garlic breath", "Varies by shop"],
      samples: [
        { name: "Faizal", stars: 5, text: "That garlic sauce is everything." },
        { name: "Megha", stars: 4, text: "Peel the foil slowly or it all falls out." },
        { name: "Jay", stars: 4, text: "Try the plate version with fries too." }
      ] },
    goodFor: ["Rolls & wraps", "Garlic", "Grilled chicken"],
    tip: "Garlic sauce is strong — carry a mint after! 😉"
  },
  {
    id: "pani-puri",
    photo: {"src": "images/pani-puri.jpg", "title": "Pani Puri1.JPG", "author": "Sruthi612", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Pani_Puri1.JPG"},
    name: "Pani Puri", pron: "PAH-nee POO-ree (aka golgappa, puchka)", emoji: "🫧", color: "#E2F1EA",
    cuisine: "North Indian street", cat: "indian", type: "snack", diet: "veg", adventure: 2,
    what: "Small hollow crispy puris filled with potato or chickpeas and dipped in spicy, tangy mint water. An explosion of flavour in one bite.",
    ingredients: ["Crispy hollow puris", "Potato / chickpea filling", "Spicy mint-tamarind water", "Sweet chutney"],
    taste: { sweet: 2, spicy: 4, sour: 4, salty: 2, bitter: 0, mild: 0 },
    texture: ["Crunchy", "Burst of water"],
    steps: [
      { icon: "🍃", text: "You get a small bowl or leaf plate. The vendor hands you one puri at a time." },
      { icon: "🗣️", text: "Tell them your style: 'less spicy', 'more sweet', or 'only potato'." },
      { icon: "👄", text: "Put the WHOLE puri in your mouth at once, quickly, before it gets soggy." },
      { icon: "✋", text: "Say 'bas' (enough) when you're done. Ask for a 'sukha puri' (dry one) at the end — it's usually free!" }
    ],
    reviews: { rating: 4.8, summary: "Loved across India — tangy, spicy and super fun. First-timers often get water on their shirt.",
      loved: ["Flavour explosion", "Cheap & fun"], watch: ["Can be very spicy", "Pick a clean stall"],
      samples: [
        { name: "Sakshi", stars: 5, text: "One bite, whole thing. That's the rule." },
        { name: "Rohan", stars: 5, text: "Ask for sweet chutney if spice scares you." },
        { name: "Mike", stars: 4, text: "Tried to bite it in half. Big mistake 😂" }
      ] },
    goodFor: ["Tangy & spicy food", "Street food", "Bold flavours"],
    tip: "One puri, one bite! Don't try to bite it in half."
  },
  {
    id: "vada-pav",
    photo: {"src": "images/vada-pav.jpg", "title": "Vada Pav-Indian street food.JPG", "author": "Rutvi Mistry", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Vada_Pav-Indian_street_food.JPG"},
    name: "Vada Pav", pron: "VAH-dah PAAV", emoji: "🍔", color: "#FCE6C5",
    cuisine: "Mumbai street", cat: "indian", type: "snack", diet: "veg", adventure: 1,
    what: "Mumbai's famous 'burger': a spicy fried potato fritter (vada) in a soft bun (pav) with green and garlic chutneys.",
    ingredients: ["Potato vada (in gram-flour batter)", "Pav bun", "Green chutney", "Dry garlic chutney", "Fried green chilli"],
    taste: { sweet: 0, spicy: 3, sour: 1, salty: 2, bitter: 0, mild: 2 },
    texture: ["Soft bun", "Crispy fritter"],
    steps: [
      { icon: "🤲", text: "Hold it with your hands, like a burger." },
      { icon: "😋", text: "Take big bites so you get bun, vada and chutney together." },
      { icon: "🌶️", text: "The fried green chilli on the side is for brave bites in between — optional!" }
    ],
    reviews: { rating: 4.7, summary: "Cheap, filling, spicy comfort food. Most people love it; the garlic chutney can be strong.",
      loved: ["Super cheap & filling", "Spicy chutneys"], watch: ["Fried & oily", "Strong garlic chutney"],
      samples: [
        { name: "Omkar", stars: 5, text: "Mumbai in one bite. With cutting chai — perfect." },
        { name: "Elena", stars: 4, text: "Like a potato burger. Spicy but so good." },
        { name: "Tara", stars: 4, text: "Skip the green chilli unless you're brave." }
      ] },
    goodFor: ["Burgers", "Spicy snacks", "Potato"],
    tip: "Pair it with cutting chai for the full Mumbai experience."
  },
  {
    id: "masala-dosa",
    photo: {"src": "images/masala-dosa.jpg", "title": "Masala Dosa 2023.jpg", "author": "Yakshitha", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Masala_Dosa_2023.jpg"},
    name: "Masala Dosa", pron: "MUH-sah-lah DOH-sah", emoji: "🌯", color: "#FBE9C9",
    cuisine: "South Indian", cat: "indian", type: "meal", diet: "veg", adventure: 1,
    what: "A big, thin, crispy crepe made from fermented rice and lentil batter, folded around spiced potato filling. Comes with sambar and coconut chutney.",
    ingredients: ["Rice & urad dal batter", "Spiced potato masala", "Sambar (lentil soup)", "Coconut chutney"],
    taste: { sweet: 0, spicy: 2, sour: 2, salty: 2, bitter: 0, mild: 3 },
    texture: ["Crispy", "Soft filling"],
    steps: [
      { icon: "✋", text: "Use your right hand (or a fork & spoon — both fine). Start from the crispy edge." },
      { icon: "🥔", text: "Tear a piece of dosa and use it to wrap a little potato filling." },
      { icon: "🥥", text: "Dip in coconut chutney or sambar, then eat." },
      { icon: "🔁", text: "Most South Indian places refill sambar and chutney for free — just ask." }
    ],
    reviews: { rating: 4.7, summary: "A filling, wholesome favourite. People love the crunch; soggy or cold dosas are the main letdown.",
      loved: ["Crispy & filling", "Free sambar refills"], watch: ["Gets soggy if left", "Big portion"],
      samples: [
        { name: "Suresh", stars: 5, text: "Crispy dosa + coconut chutney. Classic." },
        { name: "Anna", stars: 4, text: "Huge! Sharing is a good idea." },
        { name: "Deepa", stars: 5, text: "Try it with ghee (butter masala dosa)." }
      ] },
    goodFor: ["Crispy food", "Potato", "Wholesome meals"],
    tip: "Eat the crispy edges first — they don't stay crispy for long!"
  },
  {
    id: "pav-bhaji",
    photo: {"src": "images/pav-bhaji.jpg", "title": "Bambayya Pav bhaji.jpg", "author": "Rupali Banarase", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Bambayya_Pav_bhaji.jpg"},
    name: "Pav Bhaji", pron: "PAAV BHAH-jee", emoji: "🍛", color: "#FBD9C6",
    cuisine: "Mumbai street", cat: "indian", type: "meal", diet: "veg", adventure: 1,
    what: "A spicy, buttery mashed-vegetable curry (bhaji) eaten with soft bread rolls (pav) toasted in butter.",
    ingredients: ["Mashed mixed veggies", "Pav bhaji masala", "Lots of butter", "Pav buns", "Onion & lemon"],
    taste: { sweet: 1, spicy: 3, sour: 2, salty: 2, bitter: 0, mild: 2 },
    texture: ["Thick & smooth", "Soft buttery buns"],
    steps: [
      { icon: "🍋", text: "Squeeze lemon on the bhaji and sprinkle the chopped onions on top." },
      { icon: "🫓", text: "Tear a piece of pav with your fingers." },
      { icon: "🥄", text: "Scoop up the bhaji with the pav piece and eat together." },
      { icon: "➕", text: "Need more? You can order extra pav separately." }
    ],
    reviews: { rating: 4.7, summary: "Rich, buttery, spicy comfort food. Very filling; can be heavy on butter.",
      loved: ["Buttery & spicy", "Very filling"], watch: ["Heavy / oily", "Spice level varies"],
      samples: [
        { name: "Hetal", stars: 5, text: "Extra butter, extra lemon. Heaven." },
        { name: "Brian", stars: 4, text: "Like a spicy veggie mash with buttered buns. Loved it." },
        { name: "Manish", stars: 5, text: "Always order one extra pav." }
      ] },
    goodFor: ["Curries", "Buttery bread", "Spicy food"],
    tip: "Lemon + onion on top makes it 10x better."
  },
  {
    id: "kathi-roll",
    photo: {"src": "images/kathi-roll.jpg", "title": "Kolkata Rolls.jpg", "author": "Satyajit Dhawale (Satyajit888)", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Kolkata_Rolls.jpg"},
    name: "Kathi Roll", pron: "KAH-tee roll", emoji: "🌯", color: "#F7E0CB",
    cuisine: "Kolkata street", cat: "indian", type: "meal", diet: "both", adventure: 1,
    what: "A flaky paratha (often coated with egg) rolled around grilled kebab, chicken, paneer or egg, with onions and tangy chutney.",
    ingredients: ["Paratha (sometimes egg-coated)", "Chicken/paneer/egg filling", "Onions & green chilli", "Lime & chutney"],
    taste: { sweet: 0, spicy: 3, sour: 2, salty: 2, bitter: 0, mild: 2 },
    texture: ["Flaky wrap", "Juicy filling"],
    steps: [
      { icon: "🧻", text: "It comes wrapped in paper. Keep it on to hold the roll." },
      { icon: "⬇️", text: "Bite from the top and tear the paper down as you go." },
      { icon: "❓", text: "Vegetarian? Ask for paneer or veg, and mention 'no egg' — many rolls use egg paratha." }
    ],
    reviews: { rating: 4.6, summary: "A filling, on-the-go meal with lots of flavour. Egg in the paratha surprises some vegetarians.",
      loved: ["Easy to eat on the go", "Tangy & spicy"], watch: ["Often has egg", "Onions are raw"],
      samples: [
        { name: "Arnab", stars: 5, text: "Egg chicken roll from Kolkata — unbeatable." },
        { name: "Swati", stars: 4, text: "Paneer roll was great. Ask for no egg if veg." },
        { name: "Leo", stars: 4, text: "Like an Indian burrito." }
      ] },
    goodFor: ["Wraps & rolls", "Shawarma", "Spicy food"],
    tip: "Like shawarma? You'll love a kathi roll."
  }
];
