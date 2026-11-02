Dishcover - know your food before you order.
Open index.html in any modern browser. No install, build step or internet needed.

- 1,939 dishes across 16 categories (Indian street food, South Indian, Indian mains, Indian sweets,
  cafe drinks, bakes & desserts, Italian, European, Japanese & Korean, Chinese & Himalayan,
  Southeast Asian, Middle Eastern, Mexican, Americas, African, around the world).
- Files: data/index.js is a slim index, with one short row per dish holding only the card, category
  and quiz fields (about 84 bytes per dish). Photo paths are worked out from each dish's id.
  data/search.js holds the search keywords (description, ingredients, pronunciation, good-for,
  texture) and loads right after the first paint, or on the first search. Until it loads, searching
  matches names, cuisines, categories and tastes. Full details (description, ingredients, how-to-eat
  steps, tip, sample reviews, photo credits) are in data/detail/<category>.js. They load only when a
  dish is opened, using a script tag, so the app still works from file://. Cards use 350px thumbnails (quality 72)
  from images/thumb/; the dish page uses photos of at most 640px and 70KB from images/. The grid shows 40 cards at a time,
  with a "Show more" button.
- Dishes marked side:true are condiments, pickles, dips, breads and other side-only items. They can be
  searched and browsed, but the quiz never recommends them.
- Searching "veg", "vegetarian", "non-veg" or "meat" filters by each dish's diet label instead of matching text.
- New dishes are added in batches; see BATCH_LOG.md and pending_queue.tsv.
- Likes, 'I tried it' and your reviews are saved in this browser (localStorage).
- All reviews and ratings in the app are SAMPLE reviews written for the demo, not real customer data.
- Photos: Wikimedia Commons, each under its own CC0 / CC BY / CC BY-SA / public-domain licence.
  Full credits are in images/CREDITS.md and shown on each dish page.
- Dish selection and image links partly drawn from the WorldCuisines food-kb dataset
  (huggingface.co/datasets/worldcuisines/food-kb); explanations, taste ratings, how-to-eat steps and
  tips were written for this app.
