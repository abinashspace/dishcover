Dishcover - know your food before you order.
Open index.html in any modern browser. No install, build step or internet needed.

- 274 dishes across 15 categories (Indian street food, South Indian, Indian mains, Indian sweets,
  cafe drinks, bakes & desserts, Italian, European, Japanese & Korean, Chinese & Himalayan,
  Southeast Asian, Middle Eastern, Mexican, Americas, around the world).
- Files: data/index.js holds the card, search and quiz fields for every dish. Full details (how-to-eat
  steps, sample reviews and photo credits) are in data/detail/<category>.js and are loaded only when you
  open a dish, using a script tag, so the app still works from file://. Cards use 400px thumbnails
  (images/thumb/) and the dish page uses the 800px photo (images/). The grid shows 40 cards at a time
  with a "Show more" button.
- New dishes are added in batches; see BATCH_LOG.md.
- Likes, 'I tried it' and your reviews are saved in this browser (localStorage).
- All reviews and ratings in the app are SAMPLE reviews written for the demo, not real customer data.
- Photos: Wikimedia Commons, each under its own CC0 / CC BY / CC BY-SA / public-domain licence.
  Full credits are in images/CREDITS.md and shown on each dish page.
- Dish selection and image links partly drawn from the WorldCuisines food-kb dataset
  (huggingface.co/datasets/worldcuisines/food-kb); explanations, taste ratings, how-to-eat steps and
  tips were written for this app.
