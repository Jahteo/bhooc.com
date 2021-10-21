const fs = require('fs')

//This really only had to be ran once, so it's not actually needed in the repo.
//However, it was a huge stumbling block for me bc I was adament that I had to manually rewrite the massize wordpress xml dump & I'm super proud that I did this on my own (after a painful amount of trying to do it manually first)
const data = [
  {
    "title": "Quinoa Bean Salad",
    "link": "https://bhooc.com/quinoa-bean-salad/",
    "pubDate": "Fri, 04 Jan 2019 06:10:30 +0000",
    "encoded": [
      "1 cup cooked tricolor quinoa\n2 15oz cans beans, any variety, rinsed and drained\n1/4 cup kalamata olives, sliced\n2 tbsp Neapolitan Herb balsamic vinegar\n1 tbsp UP EVOO\n1 tbsp Harissa or Smoked Chabaani olive oil\nFreshly cracked black pepper\nCombine quinoa, beans, and sliced olives; set aside. Whisk together oil, balsamic and pepper. Pour over quinoa mix and toss well. Garnish with fresh parsley and serve immediately! Great hot or cold. Also tastes great with strong cheese like goat cheese or crumbled Gorgonzola cheese.",
      null
    ],
    "post_id": "31",
    "post_date": "2019-01-04 06:10:30",
    "post_name": "quinoa-bean-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "harissa-olive-oil",
        "#text": "Harissa olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "neapolitan-herb-balsamic-vinegar",
        "#text": "Neapolitan Herb balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "quinoa-salad",
        "#text": "quinoa salad"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "smoked-chabaani-olive-oil",
        "#text": "Smoked Chabaani olive oil"
      }
    ],
    "postmeta": [
      {
        "meta_value": "big-horn-recipes"
      },
      {
        "meta_value": "big-horn-quinoa-bean-salad"
      }
    ]
  },
  {
    "title": "Parsley Rice Salad with Toasted Almonds and Lemon",
    "link": "https://bhooc.com/parsley-rice-salad-with-toasted-almonds-and-lemon/",
    "pubDate": "Fri, 04 Jan 2019 06:10:44 +0000",
    "encoded": [
      "The nutrients found in parsley include Vitamin A, Vitamin K, Vitamin C, Vitamin E, Thiamin, Riboflavin, Niacin, Vitamin B6, Vitamin B12, Pantothenic Acid, Choline, Folates, Calcium, Iron, Magnesium, Manganese, Phosphorous, Potassium, Zinc, and Copper.\n\nThis recipe calls for 5 cups of parsley and is delicious!\n\nIf you are off carbs, try substituting cooked drained cauliflower \"rice\" instead of rice.\n\nSalad Ingredients:\n\n1 fresh lemon (zest and juice)\n1 clove garlic, grated\n1 tablespoon Dijon mustard\n1/4 cup Sicilian Lemon balsamic vinegar\n1/4 cup Garlic olive oil\n1/2 teaspoon black pepper\n1/2 teaspoon fine sea salt\n1 cup cooked rice\n1/2 cup finely diced sweet onion\n5 cups chopped parsley\n(remove large stems and pulse in processor)\n1 cup roasted almonds\n(pulse in processor)\n\nIn a bowl, combine the first 7 ingredients and whisk to combine.\n\nDressing Ingredients:\n\nMix together the rest of the ingredients and toss to combine\n1 15-oz can white beans\nJuice of 1/2 lemon\n1 tbs Tuscan Herb olive oil\n1 tbs Key Lime balsamic vinegar\nSalt &amp; pepper – to taste\n\nPlace all in processor. Pulse. Enjoy!",
      null
    ],
    "post_id": "33",
    "post_date": "2019-01-04 06:10:44",
    "post_name": "parsley-rice-salad-with-toasted-almonds-and-lemon",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Garlic olive oil and Sicilian Lemon balsamic vinegar marry these flavors together for punch and nutrition. Try other combinations for even more variety."
      },
      null
    ]
  },
  {
    "title": "Spinach & Raspberry Salad with Cascadian Wild Raspberry Dressing",
    "link": "https://bhooc.com/spinach-raspberry-salad-with-cascadian-wild-raspberry-dressing/",
    "pubDate": "Sat, 05 Jan 2019 05:01:32 +0000",
    "encoded": [
      "Salad Ingredients:\n\n3 cups fresh baby spinach\n2 cups spring mix\n1/4 cup mint leaves, finely chopped\n1/4 cup grape tomatoes, halved\n1/4 cup fresh raspberries\n\nDressing Ingredients:\n\n1/4 cup Extra Virgin Olive Oil\n1/4 cup Cascadian Wild Raspberry white balsamic vinegar\n1 tbs. minced shallots\nSalt and pepper to taste\n\nCombine salad ingredients. In a blender place shallots, salt, pepper and balsamic vinegar. Pour EVOO slowly while on. Chill. Pour dressing over salad and serve.",
      null
    ],
    "post_id": "344",
    "post_date": "2019-01-05 05:01:32",
    "post_name": "spinach-raspberry-salad-with-cascadian-wild-raspberry-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-extra-virgin-olive-oil",
        "#text": "Big Horn Extra Virgin Olive Oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "cascadian-wild-raspberry-white-balsamic-vinegar",
        "#text": "Cascadian Wild Raspberry white balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "raspberry-balsamic-vinegar",
        "#text": "raspberry balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spinach-and-raspberry-salad",
        "#text": "spinach and raspberry salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spinach-salad",
        "#text": "spinach salad"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Cascadian Wild Raspberry white balsamic vinegar is the star in this salad. All your other ingredients come to life with just a kiss of sweet, fresh berries."
      },
      null
    ]
  },
  {
    "title": "Simple Mushroom and Fresh Herbs Salad",
    "link": "https://bhooc.com/simple-mushroom-and-fresh-herbs-salad/",
    "pubDate": "Sat, 05 Jan 2019 05:01:53 +0000",
    "encoded": [
      "½ lb. firm mushrooms, trimmed and thinly sliced\n3 tbs. Sicilian Lemon balsamic vinegar\n2 cups fresh herb leaves, all coarsely chopped\n1 cup spring mix\n¼ cup Ultra Premium Extra Virgin Olive Oil (UPEVOO)\nSalt\nFreshly ground pepper\n1 ounce shaved Parmesan cheese\n\nToss the mushrooms with Sicilian Lemon balsamic vinegar in a salad bowl. Add the herbs and Parmesan cheese. Add salt and freshly ground pepper, and whisk in the olive oil. Toss with the mushrooms, spring mix and Parmesan, and serve.\n\nSuggestion for fresh herb leaves. Parsley, tarragon, chervil, dill, chives, wild arugula.",
      null
    ],
    "post_id": "346",
    "post_date": "2019-01-05 05:01:53",
    "post_name": "simple-mushroom-and-fresh-herbs-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "extra-virgin-olive-oil",
        "#text": "extra virgin olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salad",
        "#text": "salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "ultra-premium-olive-oil",
        "#text": "Ultra Premium olive oil"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Sicilian Lemon balsamic vinegar shines in our mushroom and herbs salad recipe. It's healthy, tasty and so simple to prepare. Make extra for a quick lunch."
      },
      null
    ]
  },
  {
    "title": "Easy Italian Chicken Salad",
    "link": "https://bhooc.com/easy-italian-chicken-salad/",
    "pubDate": "Sat, 05 Jan 2019 05:02:54 +0000",
    "encoded": [
      "Salad Ingredients:\n\n2 cups shredded rotisserie chicken meat\n¼ cup chopped fresh parsley\n¼ cup pine nuts, roasted\n½ medium red onion, sliced thinly\n3 tbs. sliced roasted red peppers\n2 tbs. capers, with brine\nSalt and pepper to taste\n\nDressing Ingredients:\n\n2 tbs. Serrano Honey vinegar\n2 tbs. Sicilian Lemon balsamic vinegar\n1 tsp. Dijon mustard\n<h4>In a large bowl, combine the chicken, parsley, pine nuts, red onions, roasted peppers, and capers. Salt and pepper to taste.</h4><h4>Blend the Serrano Honey vinegar, Sicilian Lemon balsamic vinegar and Dijon mustard until emulsified. Pour in with the chicken mixture; stir to coat.</h4><h4>Serve over mixed greens and enjoy!</h4>",
      null
    ],
    "post_id": "349",
    "post_date": "2019-01-05 05:02:54",
    "post_name": "easy-italian-chicken-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "chicken-salad",
        "#text": "Chicken Salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "easy-dinner",
        "#text": "easy dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "italian-chicken-salad",
        "#text": "Italian Chicken Salad"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "There's nothing easier than shredding rotisserie chicken and serving with Serrano Honey vinegar and Sicilian Lemon balsamic vinaigrette. Toss and enjoy!"
      },
      {
        "meta_value": "big-horn-easy-italian-chicken-salad"
      }
    ]
  },
  {
    "title": "Horseradish Dressing",
    "link": "https://bhooc.com/horseradish-dressing/",
    "pubDate": "Sat, 05 Jan 2019 05:03:26 +0000",
    "encoded": [
      "1/2 cup sour cream\n3 tablespoons prepared horseradish\n1 tablespoon chopped fresh chives\n1 tbs Serrano Honey vinegar\n1 tbs Honey Ginger balsamic vinegar\nSea salt\n<h4>Serve over spinach salad with crumbled blue cheese and steak slices.\nStart your new year with a healthy and delicious simple appetizer that everyone will enjoy. Serve with your favorite bubbly!</h4>",
      null
    ],
    "post_id": "352",
    "post_date": "2019-01-05 05:03:26",
    "post_name": "horseradish-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "dressing",
        "#text": "dressing"
      },
      {
        "@domain": "post_tag",
        "@nicename": "honey-ginger-balsamic-vinegar",
        "#text": "Honey Ginger balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "horseradish-dressing",
        "#text": "horseradish dressing"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our Horseradish dressing recipe features Serrano Honey vinegar and Honey Ginger balsamic vinegar. Turn up the flavor with simple ingredients for all meats."
      },
      null
    ]
  },
  {
    "title": "Fruit & Fun Salad with Cinnamon Pear Balsamic Vinegar",
    "link": "https://bhooc.com/fruit-fun-salad-with-cinnamon-pear-balsamic-vinegar/",
    "pubDate": "Sat, 05 Jan 2019 05:03:43 +0000",
    "encoded": [
      "<h4>4 tart apples\n3 oz creamy goat cheese\n1 tbs Cinnamon Pear balsamic vinegar\n1 tbs chopped walnuts\n1 tbs chopped dried cranberries\nGround cinnamon</h4><h4>Slice apples into thin slices. Mix goat cheese with Cinnamon Pear balsamic vinegar. Chop walnuts and cranberries.</h4><h4>Spread cheese mixture onto apples top with walnuts and cranberries. Sprinkle cinnamon on top.</h4>",
      null
    ],
    "post_id": "354",
    "post_date": "2019-01-05 05:03:43",
    "post_name": "fruit-fun-salad-with-cinnamon-pear-balsamic-vinegar",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "apple-salad",
        "#text": "apple salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "balsamic-vinegar",
        "#text": "balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "cinnamon-pear",
        "#text": "Cinnamon Pear"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Cinnamon Pear balsamic vinegar is featured in this sweet and satisfying fruit salad. Garnish with any nut to add texture. Try a white balsamic next time!"
      },
      {
        "meta_value": [
          "fruit-fun-salad",
          "fruit-fun-salad-with-big-horn-cinnamon-pear-balsamic-vinegar"
        ]
      }
    ]
  },
  {
    "title": "Challah Bread",
    "link": "https://bhooc.com/challah/",
    "pubDate": "Sat, 05 Jan 2019 05:04:09 +0000",
    "encoded": [
      "<h4>1⁄2 cup fresh orange juice (from about 2 medium oranges)\n2 1⁄4 teaspoons active dry yeast (1 packet)\n1⁄3 cup Blood Orange olive oil\n3 large eggs, at room temperature\n1 large egg yolk, at room temperature\n3 tablespoons sugar 1 teaspoon kosher salt\n1⁄4 to 1⁄2 teaspoon grated orange or lemon zest, to taste (optional)\n3 to 3 1⁄2 cups bread flour, plus more for kneading dough</h4><h4>In the bowl of an electric mixer, combine orange juice and 1 tablespoon water. Sprinkle yeast over top and let sit until frothy, about 5 minutes.</h4><h4>Add Blood Orange olive oil, 2 eggs, 1 yolk, the sugar, the salt and the zest, if using, and beat with a dough hook until just combined. Add in flour, 1 cup at a time, until dough comes together into a sticky mass. You may or may not use all of the flour, so at the end, add it gradually. The dough should come away from the sides of the bowl but not be at all stiff. You’re looking for a slightly sticky, soft dough.</h4><h4>Transfer dough to floured work surface and knead until smooth, about 5 minutes. Transfer to an oiled bowl and turn the dough over. Cover bowl with a clean dish towel and let rise in a draft-free place until doubled, about 1 1/2 to 2 hours. Press down dough to expel all the air, cover bowl and let rise for another 45 minutes.</h4><h4>In a small bowl, combine the remaining 1 egg with 1 teaspoon water and set aside. Cut dough into three equal pieces and roll them each into ropes 12 inches long. Braid them into a loaf, tucking the edges under. Place on a small rimmed baking sheet, then brush with egg wash. Let rise uncovered for 45 minutes.</h4><h4>Heat oven to 375 degrees with a rack in the middle. Gently brush a second coat of egg wash on the dough, bake for 25 to 35 minutes. Cool on a wire rack before serving.</h4>",
      null
    ],
    "post_id": "356",
    "post_date": "2019-01-05 05:04:09",
    "post_name": "challah",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-olive-oil",
        "#text": "Big Horn olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "blood-orange-olive-oil",
        "#text": "Blood Orange olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "challah",
        "#text": "Challah"
      },
      {
        "@domain": "post_tag",
        "@nicename": "challah-bread",
        "#text": "Challah bread"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our Challah bread recipe is sure to become a favorite at your holiday table. Blood orange olive oil is just one of many flavor options to enhance this staple."
      },
      null
    ]
  },
  {
    "title": "Fantastic Fudge",
    "link": "https://bhooc.com/fantastic-fudge/",
    "pubDate": "Sat, 05 Jan 2019 05:04:38 +0000",
    "encoded": [
      "2 cups milk chocolate chips\n1/4 cup heavy whipping cream\n1/4 cup honey\n1 tbsp Blood Orange olive oil\n1/2 cup white chocolate chips\n2 tsp Black Cherry balsamic vinegar\n1/2 cup walnuts (optional)\nSea salt (optional)\n<h4>Add milk chocolate chips, heavy whipping cream, honey and Blood Orange olive oil to the slow cooker.\nCover and cook on high for one hour. Add white chocolate chips and stir until melted. Add Black Cherry balsamic vinegar and walnut pieces. Pour melted chocolate into a 4x8 foil baking dish. Sprinkle sea salt over chocolate.  Allow to cool. Serve and enjoy!</h4><h4>Let your imagination wander to make your own combinations for fudge. Just switch out the oil and vinegar flavors.</h4><h4>Try Chipotle and Maple, Persian Lime and Coconut or Lemon and Raspberry!</h4>",
      null
    ],
    "post_id": "358",
    "post_date": "2019-01-05 05:04:38",
    "post_name": "fantastic-fudge",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-fudge",
        "#text": "Big Horn fudge"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chocolate-fudge",
        "#text": "chocolate fudge"
      },
      {
        "@domain": "post_tag",
        "@nicename": "fudge",
        "#text": "fudge"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Who doesn't like a yummy piece of old-fashioned fudge at the holidays? fudge graces lots of tables, and the flavor options are limitless. Try it!"
      },
      {
        "meta_value": "big-horn-fudge"
      }
    ]
  },
  {
    "title": "Bacon and Asparagus Frittata",
    "link": "https://bhooc.com/bacon-and-asparagus-frittata/",
    "pubDate": "Sat, 05 Jan 2019 05:04:59 +0000",
    "encoded": [
      "<h4>1 tbs. Garlic olive oil\n1 cup chopped red onion\n2 garlic cloves, minced\n1/2 cup bacon crumbles\n2 cups sliced fresh asparagus, cut in 1/2-inch pieces\n8 eggs, beaten\n1/4 cup minced parsley\n1/2 teaspoon sea salt\n1/4 teaspoon black pepper\n1 large tomato, thinly sliced\n1 cup shredded cheddar cheese\n1/4 cup Gruyere cheese, shredded</h4><h4>Preheat broiler on low setting. Heat a 10-in. cast iron skillet to medium heat. Add onion and garlic, saute until onion is tender. Add asparagus and bacon, heat for another minute. Add parsley, salt and pepper. In a large bowl, scramble the eggs and pour into skillet and mix well. Cook over medium-low for 7 minutes or until eggs are nearly set. Decorate with tomato slices and shredded cheeses. Broil on top rack for 5-7 minutes, until golden brown.</h4>",
      null
    ],
    "post_id": "360",
    "post_date": "2019-01-05 05:04:59",
    "post_name": "bacon-and-asparagus-frittata",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "bacon-and-asparagus-frittata",
        "#text": "bacon and asparagus frittata"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Garlic infused olive oil is the secret to this dangerously delicious dish. Come to the table with fork and napkin ready. The bacon jazzes up this meal."
      },
      null
    ]
  },
  {
    "title": "Salmon Spinach Frittata",
    "link": "https://bhooc.com/salmon-spinach-frittata/",
    "pubDate": "Sat, 05 Jan 2019 05:05:34 +0000",
    "encoded": [
      "<h4>3 tbs. Basil olive oil\n1 red onion, chopped\n2 cups fresh baby spinach\n1 cup cooked salmon\n1 tsp. dill\n1 tsp. sea salt\n1 tsp. white pepper\n8 large eggs, lightly beaten\n¼ cup Gruyere cheese, shredded</h4><h4>Warm olive oil over medium heat in a 10-inch rod iron skillet. Add onions and cook, stirring often, until softened, about 5 minutes. Add spinach and salmon; season with dill, salt and pepper. Sauté until heated through.</h4><h4>Preheat broiler to low and set an oven rack about 5 inches from heat source. Pour eggs into skillet and stir briefly to distribute vegetables and salmon. Reduce heat to low and cook about 7 minutes. Sprinkle with cheese.</h4><h4>Place skillet under broiler; cook until top is golden brown; about 7 minutes. Cool on stove in pan about 5 minutes. Enjoy!</h4>",
      null
    ],
    "post_id": "362",
    "post_date": "2019-01-05 05:05:34",
    "post_name": "salmon-spinach-frittata",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "basil-olive-oil",
        "#text": "basil olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "frittata",
        "#text": "frittata"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salmon",
        "#text": "salmon"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salmon-spinach-frittata",
        "#text": "salmon spinach frittata"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spinach",
        "#text": "spinach"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Big Horn Olive Oil Company's Salmon Spinach Frittata recipe will knock your socks off! Serve hot or chill to eat as an appetizer. Basil olive oil is a must!"
      },
      null
    ]
  },
  {
    "title": "Salmon Cakes",
    "link": "https://bhooc.com/salmon-cakes/",
    "pubDate": "Sat, 05 Jan 2019 05:05:55 +0000",
    "encoded": [
      "<h4>1 lb cooked, fresh wild caught salmon\n1 onion, peeled and diced\n1 tbs. scallions\n3 tbs. almond flour\n3 large eggs\n1 rib of celery, diced\n1 tbs. dried dill\n1 tsp. lemon zest\n1 tsp. sea salt\n3 tbs. Basil olive oil</h4><h4>Break up salmon with a fork. Add diced onion, celery and spices. Mix in the almond flour and combine thoroughly. Add eggs and mix well. Place griddle on grill and heat to 300, add Basil olive oil. Shape the mixture into 8 patties and cook until the sides. Are golden brown, roughly 3 - 4 minutes on each side. Enjoy!</h4>",
      null
    ],
    "post_id": "365",
    "post_date": "2019-01-05 05:05:55",
    "post_name": "salmon-cakes",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "basil-olive-oil",
        "#text": "basil olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "dill-olive-oil",
        "#text": "dill olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salmon-cakes",
        "#text": "salmon cakes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "You haven't lived until you have tried's exquisite salmon cakes. Dill or Basil olive oils work very well with this simple dish. Make yours today."
      }
    ]
  },
  {
    "title": "Beef Bok Choy Stir Fry",
    "link": "https://bhooc.com/beef-bok-choy-stir-fry/",
    "pubDate": "Sat, 05 Jan 2019 05:06:15 +0000",
    "encoded": [
      "<h4>1 1/2 lb. rib eye steak, thinly sliced\nSea salt and black pepper\nOnions, chopped\nMushrooms, sliced\nBamboo shoots\nWater chestnuts, sliced\n1 cup fresh bean sprouts\n10 heads baby bok choy, chopped\n1/4 cup water\n1/4 cup low sodium soy sauce\n2 tbs. Champagne wine vinegar\n2 tbs. Honey Ginger balsamic vinegar\n1/4 tsp. powdered ginger</h4><h4>In a bowl, mix the soy sauce, Champagne wine vinegar, Honey Ginger balsamic vinegar and ginger. Heat the oil in a large skillet over high heat. Add thinly sliced steak. Season with sea salt. And pepper. Cook 3-4 minutes turning often. When cooked transfer cooked steak to a plate. To the skillet, add the onions, mushrooms, bamboo shoots and water chestnuts. Cook for about 1 minute. Add bok choy, bean sprouts and ¼ cup water, cover and simmer 2 to 3 minutes. Add steak (and juices) and sauce. Stirring often about 1 -2 minutes. Serve over rice or bed of spinach.</h4>",
      null
    ],
    "post_id": "368",
    "post_date": "2019-01-05 05:06:15",
    "post_name": "beef-bok-choy-stir-fry",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "champagne-wine-vinegar",
        "#text": "champagne wine vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "honey-ginger-balsamic-vinegar",
        "#text": "Honey Ginger balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "stir-fry",
        "#text": "stir fry"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Give your favorite Asian dish a new twist with Champagne wine vinegar and Honey Ginger balsamic vinegar by Olive Oil Company. Shop at BHOOC.com."
      }
    ]
  },
  {
    "title": "Chipotle-Serrano Rib Eye Steaks",
    "link": "https://bhooc.com/best-tasting-olive-oil/",
    "pubDate": "Sat, 05 Jan 2019 05:06:33 +0000",
    "encoded": [
      "4- 8 oz. rib eye steaks\n1/2 cup Serrano Honey vinegar\n1/2 cup Chipotle olive oil\n1 tbs. hickory smoked sea salt\n<h4>Combine vinegar, olive oil and sea salt. Place rib eye and mixture into a zip lock bag. Take out as much air as possible. And refrigerate a few hours. Prepare grill to medium heat. Place steaks on the grill and cook until golden brown, 4-5 minutes. Turn steaks over and continue to grill 3-5 minutes for medium rare, 5-7 minutes for medium, or 8-10 minutes for medium well.</h4>",
      null
    ],
    "post_id": "370",
    "post_date": "2019-01-05 05:06:33",
    "post_name": "best-tasting-olive-oil",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "chipotle-olive-oil",
        "#text": "Chipotle olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": [
          "Start grilling season off right with Chipotle infused olive oil. Our Chipotle Serrano recipe will be an instant hit on ribe eye steaks. Great anytime.",
          "chipotle-serrano-rib-eye-steaks"
        ]
      }
    ]
  },
  {
    "title": "Honey Ginger & Garlic Salmon",
    "link": "https://bhooc.com/honey-ginger-garlic-salmon/",
    "pubDate": "Sat, 05 Jan 2019 05:06:51 +0000",
    "encoded": [
      "<h4>1 lb salmon fillet\n2 tbs. Garlic olive oil\n2 tbs. Honey Ginger balsamic vinegar\n2 tbs. soy sauce</h4><h4>Place salmon fillet in a ziplock bag. Combine the olive oil, balsamic vinegar and soy sauce. Put in bag with salmon fillets. Marinade for 20-30 minutes.</h4><h4>Preheat oven to 350 degrees. Place salmon on a foil lined baking sheet and bake 15-20 minutes, basting with marinade halfway through. Put remaining marinade in a pot and cook over medium high heat to a boil. Simmer for for 3-5 minutes stirring till reduced. Serve sauce over salmon. Enjoy.</h4>",
      null
    ],
    "post_id": "373",
    "post_date": "2019-01-05 05:06:51",
    "post_name": "honey-ginger-garlic-salmon",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "honey-ginger-balsamic-vinegar",
        "#text": "Honey Ginger balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salmon",
        "#text": "salmon"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Wow your guests with sizzling honey ginger and garlic salmon, made with Olive Oil Company's top-notch oils and vinegars. Enjoy anytime. Delicious!"
      },
      null
    ]
  },
  {
    "title": "Blood Orange & Tangerine Chicken",
    "link": "https://bhooc.com/blood-orange-tangerine-chicken/",
    "pubDate": "Sat, 05 Jan 2019 05:07:11 +0000",
    "encoded": [
      "<h4>2 skinless, boneless chicken breast halves, diced\n2 tbs. Blood Orange olive oil\n1/4 cup orange juice\n1/4 cup soy sauce\n1/4 cup Tangerine balsamic vinegar\n1 tsp ground garlic\n1 tsp ground ginger\n1/8 tsp red pepper flakes</h4><h4>Dice chicken breasts into 1 inch cubes. Heat olive oil in a skillet and brown chicken. Remove chicken from pan and add orange juice, soy sauce,tangerine balsamic vinegar, garlic, ginger and red pepper flakes. Stir together and add chicken. Cook and stir until the sauce reduces into a sticky glaze. About 20 minutes. Enjoy.</h4>",
      null
    ],
    "post_id": "375",
    "post_date": "2019-01-05 05:07:11",
    "post_name": "blood-orange-tangerine-chicken",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blood-orange-olive-oil",
        "#text": "Blood Orange olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chicken",
        "#text": "chicken"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "tangerine-balsamic-vinegar",
        "#text": "Tangerine balsamic vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Nothing says Asian food like our Blood Orange olive oil and Tangerine balsamic vinegar marinated chicken dish. Fresh flavors make for some exciting dinners."
      },
      null
    ]
  },
  {
    "title": "Grilled Harissa Chicken Tenderloin With Couscous",
    "link": "https://bhooc.com/grilled-harissa-chicken-tenderloin-with-couscous/",
    "pubDate": "Sat, 05 Jan 2019 05:07:54 +0000",
    "encoded": [
      "1 lb. chicken tenderloins, cut in half\n2 tbs. Harissa olive oil\n2 tbs Blueberry balsamic vinegar\n2 tbs. natural yogurt\n1 cup couscous\n1 1/2 cup vegetable broth\n1 tbs Harissa olive oil\n1 cup blueberries\n4 green onions, finely sliced\nJuice of ½ lemon\n1/4 cup flaked almonds, toasted (plus some for garnish)\nHandful of fresh mint, finely chopped ( plus some for garnish)\nSea salt and black pepper\nMix together Harissa olive oil, Blueberry balsamic vinegar, and yogurt. Place halved chicken tenderloin and mixture in a ziplock bag and marinate 30 minutes.\nPlace couscous into a large pan and add hot stock and olive oil. Stir, cover and let sit 5 minutes. When done, fluff with a fork. Add blueberries, green onions lemon juice, toasted almonds and mint. Season with sea salt and pepper to taste.\nGrill chicken tenderloins about 2-3 minutes on each side. Serve over couscous, sprinkle with mint and toasted almonds.",
      null
    ],
    "post_id": "381",
    "post_date": "2019-01-05 05:07:54",
    "post_name": "grilled-harissa-chicken-tenderloin-with-couscous",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blueberry-balsamic-vinegar",
        "#text": "Blueberry balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chicken-tenderloin",
        "#text": "chicken tenderloin"
      },
      {
        "@domain": "post_tag",
        "@nicename": "couscous",
        "#text": "couscous"
      },
      {
        "@domain": "post_tag",
        "@nicename": "harrisa-olive-oil",
        "#text": "Harrisa olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Harissa insired olive oil and Blueberry balsamic vinegar come together as a hit in this amazing chicken and couscous dish. Excellent served on salad."
      },
      null
    ]
  },
  {
    "title": "BBQ Shrimp",
    "link": "https://bhooc.com/bbq-shrimp/",
    "pubDate": "Sat, 05 Jan 2019 05:08:22 +0000",
    "encoded": [
      "1 lb. uncooked deveined shrimp\n4 tbs. Persian Lime olive oil\n4 tbs. Coconut balsamic vinegar\nLime Fresca sea salt to taste\nSkewers\n\nSoak skewers in water for about 15 minutes.\nCombine shrimp with Persian Lime olive oil; let sit for about 10 minutes. Skewer shrimp and grill about 3-5 minutes on each side. Brush with Coconut balsamic vinegar often. Sprinkle with lime fresca sea salt and serve.",
      null
    ],
    "post_id": "383",
    "post_date": "2019-01-05 05:08:22",
    "post_name": "bbq-shrimp",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "barbeque-shrimp",
        "#text": "barbeque shrimp"
      },
      {
        "@domain": "post_tag",
        "@nicename": "bbq-shrimp",
        "#text": "bbq shrimp"
      },
      {
        "@domain": "post_tag",
        "@nicename": "coconut-balsamic-vinegar",
        "#text": "Coconut balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our barbeque shrimp recipe witll rock your grill with Persian Lime olive oil and Coconut balsamic vinegar. Serve hot or cold for a winning side or entree."
      },
      null
    ]
  },
  {
    "title": "Happy, Healthy New Year from Olive Oil Company",
    "link": "https://bhooc.com/news-title-1/",
    "pubDate": "Wed, 02 Jan 2019 08:28:38 +0000",
    "encoded": [
      "We hope all our fans enjoyed their holiday celebrations. To encourage your journey in health, we have launched a <a href=\"http://BHOOC.com\">new website</a> full of recipes, products, and all that's happening in our Tasting Rooms. Browse around for an education on olive oil, gift ideas and more. We are also looking forward to offering gift cards for online shopping. Check back often. All events and promotions will be available right here, as well as on <a href=\"https://www.facebook.com/bighornoliveoilcompany/?eid=ARBcdWxGYZEVwx-GUJkSoh7p6as-iUDIvm9_SJXkcOWQ9EONIqWJKHSqL6peEXlnBKgD2ow_F62SWcg8\">Facebook</a> and <a href=\"https://www.google.com/search?q=big+horn+olive+oil+company+-+las+vegas&amp;oq=big+&amp;aqs=chrome.0.69i59l2j69i57j69i60j0l2.1479j0j8&amp;sourceid=chrome&amp;ie=UTF-8\">Google</a>.\n\nWe always enjoy sharing our passion for Ultra Premium olive oils and quality Modena balsamic vinegars in our Tasting Rooms. Stop by during new hours - Monday through Saturday, from 10am to 6pm. We are closed Sundays. Here's to your health! We'll see you soon.",
      null
    ],
    "post_id": "392",
    "post_date": "2019-01-02 08:28:38",
    "post_name": "news-title-1",
    "category": {
      "@domain": "category",
      "@nicename": "news",
      "#text": "News"
    },
    "postmeta": [
      null,
      {
        "meta_key": "_wp_old_date",
        "meta_value": "2019-01-09"
      }
    ]
  },
  {
    "title": "Big Horn olive oil",
    "link": "https://bhooc.com/?p=1170",
    "pubDate": "Mon, 28 Oct 2019 08:40:57 +0000",
    "encoded": [
      "Big Horn olive oil\n\ntruffle oil\n\nbest olive oil",
      null
    ],
    "post_id": "1170",
    "post_date": "2019-10-28 08:40:57",
    "post_name": null,
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "best-olive-oil",
        "#text": "best olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-olive-oil",
        "#text": "Big Horn olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "truffle-oil",
        "#text": "truffle oil"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Big Horn olive oil"
      },
      null
    ]
  },
  {
    "title": "BBQ Chicken",
    "link": "https://bhooc.com/bbq-chicken/",
    "pubDate": "Sat, 05 Jan 2019 05:08:37 +0000",
    "encoded": [
      "BBQ Sauce Ingredients:\n1/3 cup ketchup\n1/4 cup Chipotle olive oil\n1/4 cup Serrano Honey vinegar\n1 teaspoon Terrapin Ridge Smokey Onion mustard\n\nTo prepare sauce, combine first 4 ingredients in a small saucepan; bring to a boil over medium heat. Reduce heat; simmer 15 to 20 minutes or until thickened.\n\nChicken Ingredients:\n2 teaspoons garlic powder\n2 teaspoons chili powder\n1 teaspoon paprika\n1/2 teaspoon ground cumin\n1/4 teaspoon hickory salt\n1/4 teaspoon black pepper\n3 lbs. Boneless skinless chicken thighs\nCooking spray\n\nCombine garlic powder, chili powder, paprika, cumin, hickory sea salt, and white pepper in a small bowl. Rub the spice mixture evenly on chicken. Let stand at room temperature 30 minutes.\nPreheat grill to medium-high heat, lighting only one side of the grill to enable both direct and indirect grilling. Coat grill rack with cooking spray; place chicken on lit side of grill (direct heat). Cover and grill 8 minutes on each side. Move chicken to the unlit side of the grill (indirect heat). Baste chicken with sauce mixture. Cover and grill an additional 5 minutes on each side or until done. Serve with remaining sauce.",
      null
    ],
    "post_id": "385",
    "post_date": "2019-01-05 05:08:37",
    "post_name": "bbq-chicken",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "bbq-chicken",
        "#text": "BBQ Chicken"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chipotle-olive-oil",
        "#text": "Chipotle olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Spice up barbeque season with's BBQ Chicken recipe. Chipotle olive oil and Serrano Honey vinegar bring together this dish to make lots of smiles."
      },
      {
        "meta_value": "big-horn-bbq-chicken"
      }
    ]
  },
  {
    "title": "Jerk Chicken with Grilled Caribbean Salsa",
    "link": "https://bhooc.com/jerk-chicken-with-grilled-caribbean-salsa/",
    "pubDate": "Sat, 05 Jan 2019 05:09:09 +0000",
    "encoded": [
      "Sauce Ingredients:\n1/4 cup Cilantro Roasted Onion olive oil\n1/4 cup Pineapple balsamic vinegar\n1/3 cup ketchup\n1 teaspoon Terrapin Ridge Wasabi Lime mustard\nTo prepare sauce, combine first 5 ingredients in a small saucepan; bring to a boil over medium heat. Stir frequently. Reduce heat and simmer 15 to 20 minutes or until thickened.\n\nChicken Ingredients:\n2 tsp garlic powder\n2 bay leaves, finely crumbled\n1 tsp ground allspice\n1/2 tsp freshly ground black pepper\n1/2 tsp thyme\n1/2 tsp ginger\n4 (6-ounce) skinless, boneless chicken breast halves\n<h4>Combine garlic, ground allspice, black pepper, bay leaf, thyme and ginger. Rub the spice mixture evenly on chicken. Let stand at room temperature 30 minutes.</h4><h4>Preheat grill to medium-high heat. Cover and grill 8 minutes on each side. Move chicken to the unlit side of the grill (indirect heat). Baste chicken with sauce mixture. Cover and grill an additional 5 minutes on each side or until done, basting every minute. Serve with remaining sauce and salsa.</h4><h4>Salsa Ingredients:\n1/2 cup fresh pineapple, chopped\n1/2 cup fresh mango, chopped\n1/2 cup diced red bell pepper, finely diced\n1/3 cup red onions, finely diced, finely diced\nJuice of one lime\n1 tbs. Cilantro Roasted Onion olive oil\n1/4 tsp. sea salt</h4><h4>Chop pineapple and mango; place in a medium bowl. Add 1/4 cup diced bell pepper, 1/3 cup diced red onions, juice of one lime juice, 1 tbs Cilantro Roasted Onion olive oil, and 1/4 teaspoon salt; toss to combine. Serve over chicken.</h4>\nSign up for our newlsetter at <a href=\"http://BHOOC.com\">BHOOC.com</a> to receive more recipes and the latest news.",
      null
    ],
    "post_id": "388",
    "post_date": "2019-01-05 05:09:09",
    "post_name": "jerk-chicken-with-grilled-caribbean-salsa",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cilantro-roasted-onion-olive-oil",
        "#text": "Cilantro Roasted Onion olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "jerk-chicken-with-grilled-caribbean-salsa",
        "#text": "Jerk Chicken With Grilled Caribbean Salsa"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pineapple-balsamic-vinegar",
        "#text": "Pineapple balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      "wp:meta_value>",
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Jazz up summer with Jerk chicken with grilled caribbean salsa. Cilantro roasted onion olive oil paired with pineapple balsamic vinegar makes this dish pop!"
      },
      null
    ]
  },
  {
    "title": "New products for 2019",
    "link": "https://bhooc.com/news-title-2/",
    "pubDate": "Wed, 09 Jan 2019 06:05:47 +0000",
    "encoded": [
      "Well, not quite yet. We are currently reviewing new products to compliment our gourmet olives, spreads, olive oils and vinegars. Many of you have requested new flavors in balsamic vinegars. The chef is always working on new ideas, so we'll see what pops up this year. <a href=\"http://BHOOC.com\">Sign up here</a> for our monthly newsletter. It's one of the best ways to stay in touch and in the know.\n\nYou can also <a href=\"https://www.facebook.com/bighornoliveoilcompany/?eid=ARBcdWxGYZEVwx-GUJkSoh7p6as-iUDIvm9_SJXkcOWQ9EONIqWJKHSqL6peEXlnBKgD2ow_F62SWcg8\">follow us on Facebook</a> for news and updates. We post our delicious recipes there when they are available. However you follow us, we're glad that you do! Please share your requests for new oil and vinegar flavors. You never know. You may have the next new flavor!",
      null
    ],
    "post_id": "394",
    "post_date": "2019-01-09 06:05:47",
    "post_name": "news-title-2",
    "category": {
      "@domain": "category",
      "@nicename": "news",
      "#text": "News"
    },
    "postmeta": null
  },
  {
    "title": "Review us on Yelp, Google and Facebook",
    "link": "https://bhooc.com/news-title-3/",
    "pubDate": "Thu, 10 Jan 2019 08:28:58 +0000",
    "encoded": [
      "Hey fans! We're so happy to hear of all your positive experiences in our Tasting Rooms. Why not tell others by posting a review on either Yelp, <a href=\"https://www.facebook.com/pg/bighornoliveoilcompany/reviews/?ref=page_internal\">Facebook</a> or Google? To review Las Vegas on Yelp, click here. To review Mayberry Landing on Yelp, <a href=\"https://www.yelp.com/biz/big-horn-olive-oil-company-mayberry-landing-reno-3\">click here</a>. To review SouthCreek Shopping Center on Yelp, <a href=\"https://www.yelp.com/biz/big-horn-olive-oil-company-south-creek-center-reno?osq=big+horn+olive\">click here</a>. You can also Google each location and leave a review there too.\n\nThese days, folks turn to the Internet to read reviews before venturing out to a new store. All the reviews we have received have encouraged others to experience Olive Oil Company. And we can't thank you enough. Keep those reviews coming. More and more people are finding online. Our reputation is built on offering genuine products to genuine people like you.",
      null
    ],
    "post_id": "396",
    "post_date": "2019-01-10 08:28:58",
    "post_name": "news-title-3",
    "category": {
      "@domain": "category",
      "@nicename": "news",
      "#text": "News"
    },
    "postmeta": [
      null,
      {
        "meta_key": "_wp_old_date",
        "meta_value": "2019-01-16"
      }
    ]
  },
  {
    "title": "There is a whole scandalous world behind olive oil production",
    "link": "https://bhooc.com/olive-oils/",
    "pubDate": "Sat, 01 Jun 2019 00:36:08 +0000",
    "encoded": [
      "Wherever you find quality olive oils, you will also find folks trying to make a dishonest buck. Don't take our word for it. Criminals have their hands in the olive oil mills, and they're passing corrupted oils to the United States. 60 Minutes ran an expose on fraud in the industry, and boy did they have our attention! Did you know that most quality olive oil comes from Spain? That's right. Most people think the best olives grow in Italy. The truth is, Spain is the world's top olive producer. While geography doesn't matter, quality really does.\n\nWhen you think of the money made from exporting olive oil, you realize no country will ever ship their best product out. They simply want to enjoy it for themselves. And that is perfectly ok. As long as the olive oil mill that produces your oil crushes unripened olives and takes proper care of the yield. When you shop with Olive Oil Company, you can rest assured your olive oils are fresh, whole and unadulterated oils. We carry the world's best exported olive oils and balsamic vinegars. Every business wants to make money. We have learned you don't have to charge a lot for quality olive oil. You just need to have a solid business model. <a href=\"http://bhooc.com\">BHOOC.com</a> has just that.\n\nThe great news about true olive oil is that is healthy and has many uses. We even convert to butter to olive oil in our baking recipes. With real olive oil, you can safely cook up to 420 degrees Fahrenheit. We grill, marinade, saute and do everything else with our oils and vinegars. Since you may be new to Olive Oil Company, you may want to check out recipes on our <a href=\"http://bhooc.com/recipes/\">website</a> or Facebook page under Olive Oil Company.\n\nWhether you are new with high quality olive oil, or have been appreciating for years, we're so glad you're shopping with, and we look forward to seeing you online soon.",
      null
    ],
    "post_id": "533",
    "post_date": "2019-06-01 00:36:08",
    "post_name": "olive-oils",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "butter-to-olive-oil",
        "#text": "butter to olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-mill",
        "#text": "olive oil mill"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oils",
        "#text": "olive oils"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Knowing your source for olive oils is just as important as consuming other quality ingredients. Olive processing matters. Shop at BHOOC.com today."
      },
      null
    ]
  },
  {
    "title": "Not just any old olive oil and balsamic vinegar will do",
    "link": "https://bhooc.com/olive-oil-and-balsamic-vinegar/",
    "pubDate": "Fri, 07 Jun 2019 08:48:33 +0000",
    "encoded": [
      "The range in quality of olive oil and balsamic vinegar is broad and confusing. Do we want aged oil and vinegar? Or, should our extra virgin olive oil sit around? What is Balsamic Condimento? And, if balsamic vinegar is aged, what is its shelf life?\n\nHere at, we have all had the same questions. How do you know your olive oil is fresh? Is this the real deal? Can we tell the difference between our product and the stuff at the olive oil market? Sometimes it's anyone's guess if the aged balsamic vinegar they just bought is authentic. When food isn't a part of your daily diet, you most likely don't know much about it. This happens to be the case with olive oil and <a href=\"https://bhooc.com/product-category/vinegars/\">balsamic vinegar</a>.\n\nThe Italian mafia has swindled Americans out of hundreds of billions of dollars through oil and vinegar corruption. And they get away with it because the consumer is ignorant. Once your palate is exposed to genuine aged balsamic vinegar, there is no going back. And you'll probably notice the difference right away. That stuff you're served in a restaurant can just be wine vinegar with a lot of caramel coloring. When you taste any of the top-notch balsamic vinegars in our tasting rooms, you'll notice the difference right away.\n\nWhen you're spending good money on healthy foods, it doesn't make sense to drown them in adulterated olive oil and balsamic vinegar. Adding unhealthy ingredients to our nutritious meals defeats the purpose. Part of pursuing better health is paying attention to ingredients. They can make or break your health-conscious meal planning. Stop by a tasting room to stock up on high-quality oils, vinegars and gourmet olives. We want to support your efforts to eat right and preserve good health.",
      null
    ],
    "post_id": "565",
    "post_date": "2019-06-07 08:48:33",
    "post_name": "olive-oil-and-balsamic-vinegar",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "balsamic-condimento",
        "#text": "Balsamic Condimento"
      },
      {
        "@domain": "post_tag",
        "@nicename": "extra-virgin-olive-oil",
        "#text": "extra virgin olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-and-balsamic-vinegar",
        "#text": "olive oil and balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-market",
        "#text": "olive oil market"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Adding adulterated olive oil and balsamic vinegar to your nutritious meals is unhealthy. Preserve the quality of your meals with oils and vinegars."
      },
      null,
      {
        "meta_key": "_wp_old_date",
        "meta_value": [
          "2019-06-11",
          "not-just-any-old-olive-oil-and-balsamic-vinegar-will-do"
        ]
      }
    ]
  },
  {
    "title": "Award-winning Spanish olive oil is at Olive Oil Company",
    "link": "https://bhooc.com/spanish-olive-oil/",
    "pubDate": "Thu, 20 Jun 2019 18:40:09 +0000",
    "encoded": [
      "The world's finest Spanish olive oil is available once again. Anytime we can get the olive oil from Melgarejo or Oro Bailen farms, we know our discerning patrons will be pleased. Both olives produce an emerald green oil that is rich and viscous. This year's Spanish Picual olive oil boasts a 276.6 parts per million antioxidant count. This number qualifies the oil as a \"medium\" in terms of pungency. Hojiblanca Ultra Premium olive oil is our most \"robust\" for the season. It heralds a hearty 406.8 ppm for its biophenol count.\n\nUC Davis Olive Center has done numerous studies on the health benefits of fresh olive oil. They have reported that true extra virgin olive oils with at least a 161 ppm phenol count may drop diastolic blood pressure. We're now seeing that the olive oil with 300 ppm and above drop both blood pressure and lowers cholesterol. You can Google olive oil and blood pressure for more information. It's wonderful to know that Spanish olive oil and other oils at Olive Oil Company are fresh and healthy too! When we find good food sources, we really can use it to supplement vitamins and nutrients. Your food should be medicine for your body!\n\nIt's even better to know that all of our Ultra Premium extra virgin olive oils have traceable health benefits. For any olive oil to be considered as Ultra Premium oil, it must present at least a 139 ppm phenol count. So no matter which olive oil you purchase, they each have live antioxidants that fight free radicals. When you learn that health begins at a cellular level, it really does matter what you feed your body. For this year's Northern Hemisphere harvest, we highly recommend our world-renown Spanish olive oils. Pick up your bottle before the end of July.",
      null
    ],
    "post_id": "623",
    "post_date": "2019-06-20 18:40:09",
    "post_name": "spanish-olive-oil",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "extra-virgin-olive-oil",
        "#text": "extra virgin olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-and-blood-pressure",
        "#text": "olive oil and blood pressure"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-company",
        "#text": "olive oil company"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spanish-olive-oil",
        "#text": "Spanish olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "the-olive-oil",
        "#text": "the olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our fresh Spanish olive oil is high in antioxidants and full of flavor! Choose from our Picual or Hojiblanca varietals for dips, dressings and marinades."
      },
      null
    ]
  },
  {
    "title": "Avocado & Mango Salad with Persian Lime-Pomegranate Dressing",
    "link": "https://bhooc.com/avocado-mango-salad-with-persian-lime-pomegranate-dressing/",
    "pubDate": "Thu, 20 Jun 2019 18:55:50 +0000",
    "encoded": [
      "Pine nuts, roasted\nCilantro, chopped\nRed pepper flakes\nScallions, chopped\nDried mangoes, cut into small pieces\n1 Tbs. lime juice\n1/4 cup Pomegranate Balsamic Vinegar\n1/4 cup Persian Lime Olive Oil\nAvocado, chopped\nYour choice of greens. (Spinach, Arugula, Mixed Greens)\n\nIn a bowl, mix together pine nuts, scallions, dried mangoes, cilantro, lime juice and red pepper flakes.\nIn a blender, add chopped avocado, Pomegranate balsamic vinegar and Persian lime olive oil. Plate your greens. Add topping mixture.\nDrizzle with dressing and serve.",
      null
    ],
    "post_id": "627",
    "post_date": "2019-06-20 18:55:50",
    "post_name": "avocado-mango-salad-with-persian-lime-pomegranate-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "avocado-salad",
        "#text": "avocado salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "mango-salad",
        "#text": "mango salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pomegranate-balsamic-vinegar",
        "#text": "Pomegranate balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Persian Lime olive oil and Pomegranate dark balsamic vinegar pair in this recipe for a mouth-popping salad. Serve for lunch or dinner. Satisfy your tastebuds."
      }
    ]
  },
  {
    "title": "Pickled Shrimp & Onions",
    "link": "https://bhooc.com/pickled-shrimp-onions/",
    "pubDate": "Thu, 20 Jun 2019 19:08:38 +0000",
    "encoded": [
      "<p class=\"direction-ltr align-center para-style-body\">2-1/2 lbs peeled and cooked shrimp, thawed\n3 Vidalia onions, thinly sliced\n2 lemons, thinly sliced\n1 cup Champagne Wine Vinegar\n1/2 cup Sicilian Lemon Balsamic Vinegar\n1 cup Extra Virgin Olive Oil\n4 oz jar capers, include juice\n1-1/2 tsp celery seeds\n1 tsp sea salt\n1 tsp pickling spice\n4 dashes of Tabasco sauce</p><p class=\"direction-ltr align-center para-style-body\">Toss all together and let it sit 24 hrs in refrigerator and enjoy! Good for up to a week.</p>",
      null
    ],
    "post_id": "630",
    "post_date": "2019-06-20 19:08:38",
    "post_name": "pickled-shrimp-onions",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-extra-virgin-olive-oil",
        "#text": "Big Horn Extra Virgin Olive Oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "champagne-wine-vinegar",
        "#text": "champagne wine vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "seafood-salad",
        "#text": "seafood salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Oh, wow! Wait until you try this recipe. It's a must for summer and seafood fans. This delicious dish features Champagne and Sicilian Lemon vinegars."
      }
    ]
  },
  {
    "title": "Hula-Hula Gin Shrub Cocktail",
    "link": "https://bhooc.com/hula-hula-gin-shrub-cocktail/",
    "pubDate": "Thu, 20 Jun 2019 19:21:04 +0000",
    "encoded": [
      "<p class=\"direction-ltr align-center para-style-body\">Big Horn Pomegranate Balsamic Vinegar is the twist to this fabulous cocktail.</p><p class=\"direction-ltr align-center para-style-body\">3 parts gin\n2 parts triple sec\n2 parts pineapple juice\n1 part pomegranate balsamic vinegar\nIce\nPineapple chunks and cherries\nUmbrella for serving (optional)</p><p class=\"direction-ltr align-center para-style-body\">Chill serving glasses. Shake ingredients briskly with ice. Strain into the glass over ice. Serve with cherries &amp; pineapple chunks.</p>",
      null
    ],
    "post_id": "634",
    "post_date": "2019-06-20 19:21:04",
    "post_name": "hula-hula-gin-shrub-cocktail",
    "category": [
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pomegranate-balsamic-vinegar",
        "#text": "Pomegranate balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "shrub",
        "#text": "Shrub"
      },
      {
        "@domain": "post_tag",
        "@nicename": "shrub-cocktail",
        "#text": "shrub cocktail"
      },
      {
        "@domain": "post_tag",
        "@nicename": "vinegar-cocktail",
        "#text": "vinegar cocktail"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Spicy Cucumber Slices",
    "link": "https://bhooc.com/spicy-cucumber-slices/",
    "pubDate": "Thu, 20 Jun 2019 19:39:18 +0000",
    "encoded": [
      "1 large cucumber, thinly sliced\n 2 tbs. Champagne wine vinegar\n1 tbs. Jalapeno balsamic vinegar\n2 tbs. Baklouti Green Chili olive oil\nSalt and pepper\n\nPlace sliced cucumbers in a container with a lid. Mix together the remaining ingredients. Pour over cucumbers and let sit in the refrigerator until ready for use.\n\nServe over fish, meats, salads etc. Substitute Chipotle olive oil for a less spicy version.",
      null
    ],
    "post_id": "637",
    "post_date": "2019-06-20 19:39:18",
    "post_name": "spicy-cucumber-slices",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garnish",
        "#text": "garnish"
      },
      {
        "@domain": "category",
        "@nicename": "lunch",
        "#text": "Lunch"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spicy-cucumber-slices",
        "#text": "spicy cucumber slices"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Jazz up your fish, meats and salads with this quick and simple spicy cucumber recipe. Turn the heat up or down with Chipotle or Baklouti green chili oils."
      }
    ]
  },
  {
    "title": "Butternut Squash & Brussels Sprouts Salad",
    "link": "https://bhooc.com/butternut-squash-brussels-sprouts-salad/",
    "pubDate": "Thu, 20 Jun 2019 20:22:26 +0000",
    "encoded": [
      "Salad Ingredients:\n\n1-16 oz bag Brussels sprouts, sliced\n1-10 oz pkg. riced butternut squash\n2 tbs. garlic olive oil\n1-15 oz can garbanzo beans\n1 lime\n\nHeat pan to medium heat with garlic olive oil and cook Brussels sprouts. Set aside. Do the same with butternut squash. Add garbanzo beans and lime. Toss together.\n\nDressing Ingredients:\n\n2 tbs. Greek yogurt\n2 tbs. Red Apple balsamic vinegar\n1 tbs Almond oil\n1 tbs Garlic olive oil\n1/2 tsp smoked paprika\n1/2 tsp turmeric\n\nMix the dressing into above mixture and chill. Serve over greens and avocado slices. Top with sunflower kernels.",
      null
    ],
    "post_id": "640",
    "post_date": "2019-06-20 20:22:26",
    "post_name": "butternut-squash-brussels-sprouts-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "almond-oil",
        "#text": "almond oil"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "lunch",
        "#text": "Lunch"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "red-apple-balsamic-vinegar",
        "#text": "Red Apple balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Red Apple balsamic vinegar marries together the rich ingredients in this recipe. Serve as a main dish, or compliment meats and other sides with this tasty dish."
      }
    ]
  },
  {
    "title": "Tex Mex Rice Salad",
    "link": "https://bhooc.com/tex-mex-rice-salad/",
    "pubDate": "Thu, 20 Jun 2019 20:30:04 +0000",
    "encoded": [
      "2 cups cooked brown rice\n2 cups cauliflower rice\n1 bunch cilantro, chopped\n1 onion, diced\n2 stalks celery, diced\n2 carrots, diced\n1 green or red pepper, diced\n1 can black beans, drained\n1 can Mexican corn, drained\n1 can RO-TEL diced tomatoes &amp; green chili\n1 lime, juiced\n2 tbs. Chipotle olive oil\n2 tbs. Jalapeño white balsamic\n\nToss above ingredients together &amp; enjoy!",
      null
    ],
    "post_id": "643",
    "post_date": "2019-06-20 20:30:04",
    "post_name": "tex-mex-rice-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "chipotle-olive-oil",
        "#text": "Chipotle olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "jalapeno-white-balsamic-vinegar",
        "#text": "Jalapeno white balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salad",
        "#text": "salad"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "tex-mex-rice-salad",
        "#text": "Tex Mex rice salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "vegan",
        "#text": "vegan"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Cauliflower Rice & Brown Rice Tabouli",
    "link": "https://bhooc.com/cauliflower-rice-brown-rice-tabouli/",
    "pubDate": "Thu, 20 Jun 2019 20:53:15 +0000",
    "encoded": [
      "2 cups cooked brown rice\n2 cups cauliflower rice\n1 bunch parsley, chopped\n1 cucumber, diced\n1 bunch scallions, diced\n1 tomato, peeled, seeded and diced\n1 bunch mint leaves, chopped\n1 lime, juiced\n1/4 tsp. Black Truffle Sea Salt\n1/4 tsp. black pepper\n2 tbs. Herbes de Provence olive oil\n2 tbs. Sicilian Lemon white balsamic vinegar\n\nToss above ingredients together &amp; enjoy!",
      null
    ],
    "post_id": "646",
    "post_date": "2019-06-20 20:53:15",
    "post_name": "cauliflower-rice-brown-rice-tabouli",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "black-truffle-salt",
        "#text": "black truffle salt"
      },
      {
        "@domain": "post_tag",
        "@nicename": "black-truffle-sea-salt",
        "#text": "black truffle sea salt"
      },
      {
        "@domain": "post_tag",
        "@nicename": "herbes-de-provence-olive-oil",
        "#text": "herbes de provence olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "rice-salad",
        "#text": "rice salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-white-balsamic-vinegar",
        "#text": "sicilian lemon white balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Black Truffle infused sea salt tops this healthy and delicious dish. Serve with Herbes de Provence oil and Sicilian Lemon white balsamic vinegar. Easy prep."
      }
    ]
  },
  {
    "title": "Butternut Squash Soup",
    "link": "https://bhooc.com/butternut-squash-soup/",
    "pubDate": "Thu, 20 Jun 2019 21:51:31 +0000",
    "encoded": [
      "2-16oz package cubed butternut squash\n1/2 onion, finely chopped\n2 tbs. Baklouti Green Chili olive oil\n1 tablespoon ground turmeric\n2 teaspoons ground cinnamon\n1/2 teaspoon ground cayenne pepper\n1/2 teaspoon ground ginger\n1/2 teaspoon garlic powder\n1 (15 ounce) cans of coconut milk\n1-48 oz box vegetable stock\n\nIn a pot, add olive oil and heat on medium heat. Add chopped onion and cook till translucent. Add butternut squash cubes. Add next five ingredients. Cook for about 2 minutes mixing well. Add coconut milk and vegetable stock. Bring to a boil and then turn heat to low and cook for about 30 minutes. Use an immersion blender to cream. Garnish with roasted pumpkin seeds. Serve over vegetables, with croutons, over rice. Use your imagination for this fabulous soup.",
      null
    ],
    "post_id": "649",
    "post_date": "2019-06-20 21:51:31",
    "post_name": "butternut-squash-soup",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "baklouti-green-chili-olive-oil",
        "#text": "Baklouti Green Chili olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "butternut-squash-soup",
        "#text": "Butternut Squash Soup"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "category",
        "@nicename": "lunch",
        "#text": "Lunch"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "vegan-soup",
        "#text": "Vegan soup"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our super easy Butternut Squash soup is a hit with Baklouti Green Chili olive oil. Serve as a meal, or over rice and other veggies. Try other oils for flavor."
      }
    ]
  },
  {
    "title": "Roasted Mushroom & Cherry Pork Loin",
    "link": "https://bhooc.com/roasted-mushroom-cherry-pork-loin/",
    "pubDate": "Thu, 20 Jun 2019 22:14:08 +0000",
    "encoded": [
      "4 lbs. pork loin\n1 cup onion, finely chopped\n3 Tbs. Black Cherry Balsamic Vinegar\n1 Tbs. Big Horn Wild Mushroom &amp; Sage Olive Oil\n3/4 tsp. ground allspice\n1/2 tsp. sea salt &amp; 1/2 tsp. black pepper\n1/4 tsp cayenne pepper\n1-16 oz bag frozen cherries, pitted\n\nPre-heat oven to 425 degrees.\n\nTrim fat off pork loin, place in shallow roasting pan and pat dry with paper towels. Salt and pepper, then bake for 30 minutes.\n\nMix together the onion, balsamic vinegar, olive oil, allspice, cayenne and frozen cherries. After the 30 minutes, pour this mixture over the roast and cook another 30 minutes.\n\nTransfer to a serving platter and let it rest for 10 minutes. Carve and serve warm with cherry sauce.",
      null
    ],
    "post_id": "652",
    "post_date": "2019-06-20 22:14:08",
    "post_name": "roasted-mushroom-cherry-pork-loin",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "black-cherry-balsamic-vinegar",
        "#text": "Black Cherry balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pork-loin",
        "#text": "pork loin"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pork-roast-dinner",
        "#text": "pork roast dinner"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "wild-mushroom-sage-olive-oil",
        "#text": "Wild Mushroom &amp; Sage olive oil"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Wild Mushroom & Sage olive oil paired with Black Cherry balsamic vinegar are a winning combination with this timeless favorite. Serve warm and await smiles."
      }
    ]
  },
  {
    "title": "\"Welcome Spring\" Salad",
    "link": "https://bhooc.com/spring-salad/",
    "pubDate": "Fri, 21 Jun 2019 16:36:01 +0000",
    "encoded": [
      "3 Tbs. Big Horn Persian Lime Olive Oil\n2 Tbs. Coconut Balsamic Vinegar\n1 Tbs. yogurt\n1 small shallot, finely chopped\nSea salt and black pepper\n3 celery stalks, thinly shaved\n1/4 celery leaves\n1 small bunch baby arugula, torn\n2 Tbs. chopped pitted green olives\n\nIn a bowl, stir together shallot, yogurt, olive oil, balsamic vinegar, salt and pepper. Add celery stalks, celery leaves and arugula. Toss in green olives and mix well.\n\nOptionally, serve with shrimp on top!\n\n1 Tbs. Garlic Olive Oil\n1 Tbs. Grapefruit Balsamic Vinegar\n1/2 lb. uncooked shrimp, peeled and deveined\n\nHeat garlic olive oil in a pan, toss in shrimp and cook until pink. Stir in grapefruit balsamic vinegar &amp; cook a tad more. Serve on salad!",
      null
    ],
    "post_id": "655",
    "post_date": "2019-06-21 16:36:01",
    "post_name": "spring-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "coconut-balsamic-vinegar",
        "#text": "Coconut balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grapefruit-balsamic-vinegar",
        "#text": "grapefruit balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_wp_old_date",
        "meta_value": "2019-06-20"
      },
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Welcome the season with fresh ingredients and Olive Oil Company's Persian Lime olive oil, Garlic oil, Coconut balsamic and Grapefruit balsamic."
      }
    ]
  },
  {
    "title": "Ghirardelli Triple Chocolate & Mandarin Brownies",
    "link": "https://bhooc.com/ghirardelli-triple-chocolate-mandarin-brownies/",
    "pubDate": "Fri, 21 Jun 2019 16:54:34 +0000",
    "encoded": [
      "1 box Ghirardelli triple chocolate brownie mix\n1/3 cup water\n1/3 cup Mandarin Olive Oil + 1/2 Tbsp for greasing\n1 egg\n\nPreheat oven to 325F &amp; lightly grease baking pan with 1/2 Tbsp Mandarin Olive Oil. Mix remaining ingredients until well blended. Bake according to box directions for pan size. Cool completely in pan before cutting. Enjoy &amp; experiment using olive oils in any box mix!",
      null
    ],
    "post_id": "659",
    "post_date": "2019-06-21 16:54:34",
    "post_name": "ghirardelli-triple-chocolate-mandarin-brownies",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blood-orange-olive-oil",
        "#text": "Blood Orange olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "post_tag",
        "@nicename": "mandarin-olive-oil",
        "#text": "mandarin olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Wow your guests with Mandarin infused Ghirardelli triple chocolate brownies. They won't expect the rich flavor they'll taste. Try other oils to mix it up!"
      },
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Honey Ginger Meringue Cookies",
    "link": "https://bhooc.com/honey-ginger-meringue-cookies/",
    "pubDate": "Fri, 21 Jun 2019 17:46:05 +0000",
    "encoded": [
      "2 large egg whites, room temperature\n1/4 teaspoon cream of tartar\n⅛ teaspoon salt\n1/2 cup granulated sugar\n1 teaspoon Honey Ginger White Balsamic\n\nIn a kitchen mixer, whip first 3 ingredients until foamy, then increase speed to high &amp; slowly add sugar until shiny &amp; stiff peaks form. Stir in Balsamic gently, then pipe or spoon onto parchment covered baking sheets. Bake at 225F for 1 hour. Turn off oven &amp; leave in closed oven for 2 hours to cool completely.",
      null
    ],
    "post_id": "662",
    "post_date": "2019-06-21 17:46:05",
    "post_name": "honey-ginger-meringue-cookies",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "post_tag",
        "@nicename": "french-dessert",
        "#text": "french dessert"
      },
      {
        "@domain": "post_tag",
        "@nicename": "honey-ginger-balsamic-vinegar",
        "#text": "Honey Ginger balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "meringue-cookies",
        "#text": "meringue cookies"
      },
      {
        "@domain": "post_tag",
        "@nicename": "meringues",
        "#text": "meringues"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "The simplest desserts are sometimes the best, and our Honey Ginger flavored meringue cookies make an easy impression. They're so easy to make. Serve tonight!"
      }
    ]
  },
  {
    "title": "Skewered Lamb with Milanese Gremolata Olive Oil & Oregano Balsamic Vinegar",
    "link": "https://bhooc.com/skewered-lamb-with-milanese-gremolata-olive-oil-oregano-balsamic-vinegar/",
    "pubDate": "Fri, 21 Jun 2019 17:56:05 +0000",
    "encoded": [
      "1/4 cup Milanese Gremolata olive oil\n1/4 cup Oregano balsamic vinegar\n1 lemon, juiced\n1/2 tsp. sea salt\n1/4 tsp. black pepper\n2 lbs boneless leg of lamb, trimmed\nand cut into 1\" cubes\n2 medium green peppers, cut into 1\" cubes\n1 large onion cut into 1\" pieces\n\nCombine marinade ingredients and mix well. Add lamb cubes and marinade 8 hrs. Thread lamb cubes, onion and peppers onto treated wooden skewer. Broil 4 minutes on each side.",
      null
    ],
    "post_id": "665",
    "post_date": "2019-06-21 17:56:05",
    "post_name": "skewered-lamb-with-milanese-gremolata-olive-oil-oregano-balsamic-vinegar",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "dinner",
        "#text": "dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lamb",
        "#text": "lamb"
      },
      {
        "@domain": "post_tag",
        "@nicename": "milanese-gremolata",
        "#text": "Milanese Gremolata"
      },
      {
        "@domain": "post_tag",
        "@nicename": "milanese-gremolata-olive-oil",
        "#text": "Milanese Gremolata olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "oregano",
        "#text": "Oregano"
      },
      {
        "@domain": "post_tag",
        "@nicename": "oregano-balsamic-vinegar",
        "#text": "Oregano balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "There is a whole new side to lamb when you pair Milanese Gremolata olive oil and Oregano balsamic vinegar in this tasty dish. Serve as the main or side dish."
      }
    ]
  },
  {
    "title": "Spinach Strawberry Salad with Basil-Vanilla Balsamic Dressing",
    "link": "https://bhooc.com/spinach-strawberry-salad-with-basil-vanilla-balsamic-dressing/",
    "pubDate": "Fri, 21 Jun 2019 18:09:03 +0000",
    "encoded": [
      "1 lb. strawberries, quartered\n1/2 cup crushed hazelnuts, toasted\n1/2 lb. baby spinach\n1/4 cup Vanilla Balsamic Vinegar\n1/4 cup Basil Olive Oil\n1 Tbs. yogurt\n\nIn a large bowl, gently toss baby spinach with strawberries and hazelnuts. In a blender, mix Vanilla balsamic vinegar with yogurt. Add Basil olive oil slowly while blending. Add dressing before serving.\n\nTo toast hazelnuts: Place hazelnuts over high heat in a sauté pan; toss frequently. Remove when fragrant. Cool.",
      null
    ],
    "post_id": "669",
    "post_date": "2019-06-21 18:09:03",
    "post_name": "spinach-strawberry-salad-with-basil-vanilla-balsamic-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-basil-olive-oil",
        "#text": "Big Horn Basil olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-vanilla-balsamic-vinegar",
        "#text": "Big Horn Vanilla Balsamic Vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "strawberry-salad",
        "#text": "strawberry salad"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Wow your tastebuds with this refreshing and satisfying anytime salad. Spinach presents basil and vanilla flavors to dazzle. Perfect for lunch or dinner."
      }
    ]
  },
  {
    "title": "Spicy Peanut Sauce",
    "link": "https://bhooc.com/spicy-peanut-sauce/",
    "pubDate": "Fri, 21 Jun 2019 18:44:21 +0000",
    "encoded": [
      "1/3 cup Lemongrass Mint balsamic vinegar\n3 tbs Honey Ginger balsamic vinegar\nJuice of one lime\n4 tbs. fish sauce*(vegan recipe below)\n2 tbs. carrots, chopped\n1 clove garlic, chopped\n1 serrano pepper, thinly sliced\n2 tsp. Sambal oelek\n1/2 cup peanut butter\n\nPlace all ingredients in blender. Mix and put in a jar. Use on rice paper rolls, sate, etc.",
      null
    ],
    "post_id": "672",
    "post_date": "2019-06-21 18:44:21",
    "post_name": "spicy-peanut-sauce",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-lemongrass-mint-balsamic-vinegar",
        "#text": "Big Horn Lemongrass Mint balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "dips-sauces-recipes",
        "#text": "Dips &amp; Sauces"
      },
      {
        "@domain": "post_tag",
        "@nicename": "honey-ginger-balsamic-vinegar",
        "#text": "Honey Ginger balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "peanut-sauce",
        "#text": "peanut sauce"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spicy-peanut-sauce",
        "#text": "spicy peanut sauce"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Big Horn Lemongrass Mint balsamic vinegar and Honey Ginger balsamic vinegar turns up the zip in this delectable sauce recipe. Spread on literally anything."
      }
    ]
  },
  {
    "title": "Asparagus Salad with Lemon-Tangerine Dressing",
    "link": "https://bhooc.com/asparagus-salad-with-lemon-tangerine-dressing/",
    "pubDate": "Fri, 21 Jun 2019 19:31:01 +0000",
    "encoded": [
      "3 cups mixed greens\n1/2 red onion, thinly sliced\n1 can mandarin orange segments, drained\n1/2 can chickpeas, drained\n1/2 bunch grilled asparagus spears, chopped\n1/2 cup toasted walnut pieces\n1/2 cup cranberries\n1/4 cup Tangerine Balsamic Vinegar\n1/4 cup Lemon Olive Oil\n1 Tsp. dijon mustard\n\nCombine first 7 ingredients in a large bowl. Whisk together Olive Oil, Balsamic Vinegar and Dijon mustard. Toss and serve.",
      null
    ],
    "post_id": "675",
    "post_date": "2019-06-21 19:31:01",
    "post_name": "asparagus-salad-with-lemon-tangerine-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "asparagus-salad",
        "#text": "asparagus salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lemon-olive-oil",
        "#text": "Lemon olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "tangerine-balsamic-vinegar",
        "#text": "Tangerine balsamic vinegar"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Asparagus, chick peas and oranges, oh my! Marry them together with Lemon fused olive oil and Tangerine dark balsamic vinegar for an easy win in the kitchen."
      }
    ]
  },
  {
    "title": "Cranberry Walnut Salad with Garlic-Raspberry Dressing",
    "link": "https://bhooc.com/cranberry-walnut-salad-with-garlic-raspberry-dressing/",
    "pubDate": "Fri, 21 Jun 2019 19:40:22 +0000",
    "encoded": [
      "½ cup walnuts, toasted\n½ cup dried cranberries\n1 red onion, thinly sliced\nMixture of greens\n1/4 cup Raspberry Dark Balsamic Vinegar\n1/4 cup Garlic Olive Oil\n1 teaspoon Dijon mustard\nSalt and pepper\n\nToast walnuts over high heat in a sauté pan; toss frequently. Remove when fragrant.\nSoak sliced onions in ice water for ½ hour. Drain well. Whisk together dressing ingredients. Wash and dry greens. Add nuts, berries and onion to greens then toss with dressing. Serve immediately.",
      null
    ],
    "post_id": "678",
    "post_date": "2019-06-21 19:40:22",
    "post_name": "cranberry-walnut-salad-with-garlic-raspberry-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cranberry-walnut-salad",
        "#text": "cranberry walnut salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "raspberry-dark-balsamic-vinegar",
        "#text": "Raspberry Dark Balsamic Vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Garlic and raspberry in a salad dressing? We couldn't live without it! This salad shines with deep flavors and loads of satisfaction. Try other vinegars too"
      }
    ]
  },
  {
    "title": "Lemon Cod with Pasta",
    "link": "https://bhooc.com/lemon-cod-with-pasta/",
    "pubDate": "Mon, 24 Jun 2019 20:13:13 +0000",
    "encoded": [
      "4 Cod Fillets\n2 Preserved Lemons, flesh discarded, rind minced\n1 Tbsp Big Horn Milanese Gremolata Olive Oil\n2 Tbsp Tuscan Herb Olive Oil\n1 Tbsp Oregano\n28 oz Crushed Tomatoes\n1 lb Cavatappi (corkscrew) Pasta\n\nLay Cod in a baking dish &amp; coat with Milanese Gremolata. Sprinkle with minced Lemons &amp; bake 30 min at 350 degrees Fahrenheit or until flesh is tender and cooked through. Meanwhile, combine Tuscan Herb, Oregano, and Tomatoes in a pan and simmer on stove 15 min.  Add Salt &amp; Pepper to taste. During Cod's last 10 min, boil Pasta according to  instructions, then drain and stir into sauce. When Cod is finished baking, serve over pasta &amp; enjoy!",
      null
    ],
    "post_id": "683",
    "post_date": "2019-06-24 20:13:13",
    "post_name": "lemon-cod-with-pasta",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cod",
        "#text": "Cod"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "milanese-gremolata",
        "#text": "Milanese Gremolata"
      },
      {
        "@domain": "post_tag",
        "@nicename": "milanese-gremolata-olive-oil",
        "#text": "Milanese Gremolata olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pasta",
        "#text": "pasta"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "tuscan-herb-olive-oil",
        "#text": "tuscan herb olive oil"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Granny Smith Slaw",
    "link": "https://bhooc.com/granny-smith-slaw/",
    "pubDate": "Mon, 24 Jun 2019 20:29:16 +0000",
    "encoded": [
      "12 oz pkg coleslaw mix\n2 cups chopped granny smith apples\n1 cup seedless red grapes, cut in half\n1/2 cup celery, thinly sliced\n1/4 cup Cilantro Roasted Onion olive oil\n1/4 cup Serrano Honey vinegar\n1 tsp. Dijon mustard\n1/3 cup cashews\n2 tsp poppy seeds\nSea salt and pepper to taste\n\nIn a jar, mix olive oil and vinegar with dijon mustard. Set aside. In a large bowl, combine coleslaw mix, apples, grapes and celery.\nToss in dressing. Top with cashews and sprinkle on poppy seeds. Season with sea salt and pepper. Enjoy!",
      null
    ],
    "post_id": "686",
    "post_date": "2019-06-24 20:29:16",
    "post_name": "granny-smith-slaw",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cilantro-roasted-onion-olive-oil",
        "#text": "Cilantro Roasted Onion olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "You haven't lived until you taste our Granny Smith slaw, featuring Cilantro Roasted Onion olive oil and Serrano Honey vinegar. Serve as a side or for lunch."
      }
    ]
  },
  {
    "title": "Zucchini & Eggplant Stack",
    "link": "https://bhooc.com/zucchini-eggplant-stack/",
    "pubDate": "Mon, 24 Jun 2019 20:58:59 +0000",
    "encoded": [
      "2 medium eggplants (Cut into 18 slices)\n1 Tbs. Neapolitan Herb balsamic vinegar\n1 Tbs. Blood Orange olive oil\n\nMix together olive oil and balsamic vinegar, and toss in eggplant slices. Grill until softened & marked. A panini press, George Foreman, or griddle pan also work well.\n\n2 medium zucchinis (24 slices lengthwise)\n1 Tbs. Tuscan Herb Olive Oil\n1 Tbs. Sicilian Lemon Balsamic Vinegar\n\nGrill as above. Set aside.\n\n3-4 Tomatoes (sliced into 12 slices)\nTruffle Sea Salt to taste\n\nGrill as above. Set aside.\n\n1 cup cashews\n1 cup warm water\n1 Tbs. garlic powder\n2 Tbs. nutritional yeast\n\nMeasure cashews, warm water, garlic powder and nutritional yeast in a blender and puree till smooth. Set aside.\n\n1 can tomato sauce\nRoasted pine nuts\n\nIn a casserole dish, layer 6 slices of grilled eggplant, a cashew drizzle, a layer of grilled zucchini & another cashew drizzle. Repeat with\nanother eggplant & zucchini layer. Add all the grilled tomato slices, a final cashew drizzle & then top with remaining eggplant. Last, pour over the tomato sauce and roasted pine nuts. Cover with foil and bake at 325 degrees for 20-30 minutes, until bubbly.\nLet cool slightly & enjoy!",
      null
    ],
    "post_id": "689",
    "post_date": "2019-06-24 20:58:59",
    "post_name": "zucchini-eggplant-stack",
    "category": [
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "tuscan-herb-olive-oil",
        "#text": "tuscan herb olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "zucchini-and-eggplant-stack",
        "#text": "Zucchini and eggplant stack"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Grill up and serve this tasty stack with any dish. Tuscan Herb olive oil and Sicilian Lemon white balsamic vinegar shine in this wonderful flavor combo."
      }
    ]
  },
  {
    "title": "Mixed Greens & Fennel Salad",
    "link": "https://bhooc.com/mixed-greens-fennel-salad/",
    "pubDate": "Mon, 24 Jun 2019 21:09:16 +0000",
    "encoded": [
      "Dressing:\n\n1/4 cup Basil olive oil\n1/4 cup Gravenstein Apple white balsamic\nSalt and pepper to taste\n1 tsp. Dijon mustard\n\nSalad:\n\n1 (10 ounce) bag mixed salad greens\n1 small fennel bulb, thinly sliced\n1 orange, peeled and segmented\n1/2 red onion, thinly sliced\n1/2 cup slivered almonds\n1/2 cup Kalamata olives\n1 tablespoon fresh basil leaves, thinly sliced\n\nWhisk together Basil olive oil, Gravenstein Apple white balsamic, Dijon mustard, salt and pepper; set aside. Toss the salad greens, sliced fennel, orange, onion, almonds, and Kalamata olives in a large bowl. Pour the dressing over the salad and toss to serve.",
      null
    ],
    "post_id": "694",
    "post_date": "2019-06-24 21:09:16",
    "post_name": "mixed-greens-fennel-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-basil-olive-oil",
        "#text": "Big Horn Basil olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "gravenstein-apple-balsamic-vinegar",
        "#text": "Gravenstein Apple balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Basil olive oil and Gravenstein Apple white balsamic vinegar marry together mixed greens and fennel to wow any palate. Try different oil and vinegars too."
      }
    ]
  },
  {
    "title": "Garlic Roasted Radishes with Lemon Mint Dressing",
    "link": "https://bhooc.com/garlic-roasted-radishes-with-lemon-mint-dressing/",
    "pubDate": "Mon, 24 Jun 2019 21:22:50 +0000",
    "encoded": [
      "3 cups radishes, trimmed and halved\n1 tbsp. Garlic olive oil\n1 tbsp. Butter olive oil\n1/2 tsp. sea salt\n1/4 tsp. pepper\nPreheat oven to 400 degrees. Line a baking sheet with foil and set aside. Combine all the above ingredients. Mix well. Roast radishes cut side down on baking sheet for 14-16 minutes or until slightly golden brown. Serve as a side dish or a salad with spring mix, cucumbers, red onions & fresh parsley, dill or chives and serve with the following dressing.\n\n2 tbsp. Lemon olive oil, 2 tbsp. Lemongrass Mint balsamic vinegar, 1 tsp. Dijon mustard, sea salt and pepper to taste mix the above together and serve over salad.",
      null
    ],
    "post_id": "703",
    "post_date": "2019-06-24 21:22:50",
    "post_name": "garlic-roasted-radishes-with-lemon-mint-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-lemongrass-mint-balsamic-vinegar",
        "#text": "Big Horn Lemongrass Mint balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "butter-olive-oil",
        "#text": "butter olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Garlic oil, Butter oil and Lemongrass Mint balsamic vinegar, oh my! This tasty dish can be served hot or cold and is sure to win at the table with guests."
      }
    ]
  },
  {
    "title": "What is the best olive oil for cooking?",
    "link": "https://bhooc.com/what-is-the-best-olive-oil-for-cooking/",
    "pubDate": "Tue, 09 Jul 2019 21:56:50 +0000",
    "encoded": [
      "Light, mild and extra virgin. These are all words used to describe the <a href=\"http://bhooc.com\">best olive oil for cooking</a>. Unfortunately, most Americans don't know what those words mean. When you're working with olive oil, it's likely you're not familiar with the real stuff. Much of what lands in the U.S. are fake. We are easily cheated out of good money for a poor quality product when shopping for the precious commodity,  The saddest part is that we think we're helping our health by buying slick imitations.\n\nIf you visited Europe, you would find at least one high-quality olive oil and vinegar store near the markets. Because fresh olive oil is available, suppliers want you to taste their offerings. So shops make the finest oils and vinegars available for tasting. In America, this trend is becoming more popular and is necessary to avoid buying sub-par olive oil. Types of olives don't matter as much as how they are picked and crushed. And of course, it's always good to know your source.\n\nIf you're looking for the best olive oil for cooking, try Olive Oil Company. We carry the world's very best imported olive oils and balsamic vinegars. The best part of buying from is you can taste everything before you purchase. In our olive oil and vinegar store, you can sample hundreds of combinations to please your palate. We also sample all our mustards, jams and gourmet Spanish olives.\n\nThe best olive oil for cooking is any fresh and unadulterated olive oil from a traceable source. Shopping at BHOOC.com is a great way to try oils crushed from different types of olives. Our oils change every six months, so it's always fresh. Stop by the nearest tasting room to experience what we already know. We look forward to sharing lots of ideas with you.",
      null
    ],
    "post_id": "715",
    "post_date": "2019-07-09 21:56:50",
    "post_name": "what-is-the-best-olive-oil-for-cooking",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "best-olive-oil-for-cooking",
        "#text": "best olive oil for cooking"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-and-vinegar-store",
        "#text": "olive oil and vinegar store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "types-of-olives",
        "#text": "types of olives"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "The best olive oil for cooking must come from fresh olives that are picked green off the tree. Olive Oil Company carries fresh, unadulterated oil."
      },
      null
    ]
  },
  {
    "title": "Aged balsamic vinegar is a coveted Italian treat",
    "link": "https://bhooc.com/aged-balsamic-vinegar/",
    "pubDate": "Tue, 16 Jul 2019 10:03:42 +0000",
    "encoded": [
      "Who doesn't love aged balsamic vinegar from Modena, Italy? We know we do! Complex flavor and satisfying texture keep us coming back for more 18-year-old balsamic vinegar. Whether you're drizzling over meats or cooking with balsamic vinegar, the sky is the limit with its many uses. Legend even tells us aceto balsamico has been used for hundreds of years for everything from wounds to sore throats. This stuff is amazing!\n\nBig Horn Olive Oil Company prides ourselves on mixing winning olive oil and balsamic vinegar combinations. Our staff is loaded with suggestions, and we even keep recipes in our <a href=\"http://bhooc.com\">online store</a>. You can also follow our Facebook page for new recipes and other product information. Aged balsamic vinegar can be either dark or white, and we love them both. Tasting is a must if you are near our Reno or Las Vegas tasting rooms. With over forty vinegars to choose from, we highly recommend stopping in for a visit. You will not regret it.\n\nWhen it comes to cooking with balsamic vinegar, we are experts, but you don't have to be one. Fresh olive oil and aged balsamic vinegar just add to whatever you're already cooking. There is no chef school required to enjoy our product. All you have to do is taste. Salads, marinades, and meals will never be the same. Since vinegar tenderizes meat, we constantly massage into our steaks and poultry. Whether you're finishing a chicken breast coming off the grill, or just want to enjoy a good bread dip,'s Traditional 18-year-old balsamic vinegar is the perfect start. It's the base of all our flavored dark vinegars. If you're looking for more tart and acidic balsamics, try our white vinegars. They are not cooked to caramelization but aged up to twelve years.",
      null
    ],
    "post_id": "717",
    "post_date": "2019-07-16 10:03:42",
    "post_name": "aged-balsamic-vinegar",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "18-year-old-vinegar",
        "#text": "18 year old vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "aged-balsamic-vinegar",
        "#text": "aged balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "cooking-with-balsamic-vinegar",
        "#text": "cooking with balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Drizzling aged balsamic vinegar over bread, meats and cheeses has been an Italian tradition for centuries. BHOOC.com carries 18 year-old balsamic vinegar."
      },
      null
    ]
  },
  {
    "title": "Hojiblanca olive oil has arrived",
    "link": "https://bhooc.com/hojiblanca-olive-oil-has-arrived/",
    "pubDate": "Wed, 07 Aug 2019 17:09:30 +0000",
    "encoded": [
      "Australian Hojiblanca olive oil has just graced our shelves. What a treat this season's harvest brings! Our mildest olive oil boasts a 242.7 biophenol count, and that's exciting for olive oil lovers everywhere. We have learned that live antioxidants promote heart health and help fight chronic diseases. Did you know you can lower your blood pressure and cholesterol with unripened olive oil? UC Davis Olive Center is a wealth of information if you'd like to know more.\n\nWe have also brought in Picholine olive oil and Coratina olive oil from Australia. Our Chilean olive oils are Arbequina olive oil, Picual olive oil, and Koroneiki olive oil. Both Hojiblanca Arbequina oils carry biophenol levels in the mild range and are wonderful on the palate. Both Picholine olive oil and Picual olive oil star as our medium level oils this season. If you're looking for more oomph, you'll find it in our robust Coratina olive oil and Koroneiki olive oil.\n\nBecause we know good olive oil is hard to find, it's important to share our quality product with the public. Our love for fresh and delicious olive oils is what keeps Olive Oil Company going! We take pride in supplying the unadulterated product at affordable prices. When you find a solid source, stick with it. You'll never regret adding healthy olive oil to your diet. We're happy to keep in stock for you. Come by one of our tasting rooms to sample the latest crop of ultra premium olive oils. We would love to hear about your favorite selection for the season.\n\nWhether you are a fan of Hojiblanca, Arbequina or Coratina olive oils, Olive Oil Company samples daily. Stop by with a group for a tasting tour. Where else can you go to enjoy fresh olive oils and gourmet goodies? Let us know you're coming with a group, and we'll break out a spread for you. We'll see you soon.\n\n&nbsp;",
      null
    ],
    "post_id": "739",
    "post_date": "2019-08-07 17:09:30",
    "post_name": "hojiblanca-olive-oil-has-arrived",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "arbequina-olive-oil",
        "#text": "arbequina olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "coratina-olive-oil",
        "#text": "coratina olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "hojiblanca-olive-oil",
        "#text": "hojiblanca olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "koroneiki-olive-oil",
        "#text": "koroneiki olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "picual-olive",
        "#text": "picual olive"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Hojiblanca olive oil is a delightful surprise this season. Stop by a tasting room to experience the rich flavors found in our southern hemisphere oils."
      },
      null
    ]
  },
  {
    "title": "Is drinking olive oil good for your health",
    "link": "https://bhooc.com/is-drinking-olive-oil-good-for-your-health/",
    "pubDate": "Wed, 14 Aug 2019 15:00:48 +0000",
    "encoded": [
      "Drinking olive oil should be part of a healthy diet if it really is good for us. But do we really want to drink olive oil? When I first heard about the idea, I wasn't too keen. However, different types of olive oil have been proven to improve human health. Olive oil that's pressed from unripened olives maintains healthy antioxidants. Olive oil for cooking should be fresh and full of nutrition. Whether you are drinking olive oil or using olive oil for cooking, make sure your source is solid. Experts have found much of the oils imported to the U.S. is actually canola oil. Imagine pouring that down your gullet! If you're seriously considering drinking olive oil for health, consult your physician first.\n\nConsuming adulterated olive oil can be harmful to your health. We have all read how different types of olive oil are good for different purposes. Have you thought of the reality that not all olive oils are equal? It's not pleasant to think that someone is selling us a poor quality product and calling it olive oil. But it happens. And it happens more than we think. Imagine what drinking canola oil would do to your health. We're pretty sure that's not what you have in mind when you think of drinking olive oil.\n\nSo what's the solution to this problem? All we can recommend is that you know your sources. Olive Oil Company makes every effort to preserve all the nutrition in all our products. Good olive oil with antioxidants can be a very healthy part of your daily diet. If you're consuming healthful oil, you're ahead of a lot of people. Just using olive oil for cooking can promote heart and vascular health. As Americans, we can all use a little help in those areas. Anything you can do to improve your health is a smart move, and we're glad to be on the journey with you.",
      null
    ],
    "post_id": "742",
    "post_date": "2019-08-14 15:00:48",
    "post_name": "is-drinking-olive-oil-good-for-your-health",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "different-types-of-olive-oil",
        "#text": "different types of olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "drinking-olive-oil",
        "#text": "drinking olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-for-cooking",
        "#text": "olive oil for cooking"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "If drinking olive oil is healthy, then why isn't everyone doing it? Different types of olive oils do promote heart and vascular health. Try a new one today."
      },
      null
    ]
  },
  {
    "title": "Breakfast Frittata",
    "link": "https://bhooc.com/breakfast-frittata/",
    "pubDate": "Thu, 15 Aug 2019 22:45:49 +0000",
    "encoded": [
      "1 Tbs. Herbes de Provence Olive Oil\n2 shallots, chopped\n1 lb. Brussel Sprouts, thinly sliced\n1/2 lb. Ham, diced\nSalt &amp; Pepper\n8 Eggs, beaten\n1/4 cup Milk\n1 cup Gruyere Cheese\n1/4 cup fresh parsley, chopped\nPaprika\n\nPreheat Broiler. Mix eggs, salt, pepper, and milk in a blender. Mix well. In an oven-proof skillet, heat olive oil, add shallots and cook 3 minutes. Add brussels sprouts and ham then cook 3-5 minutes tossing together occasionally until lightly browned. Set aside. Add Gruyere to egg mixture. Pour over brussels sprouts. Top with parsley, sprinkle with paprika. Cook about 5 minutes on medium-low. Place skillet in preheated oven and broil for about 3 minutes. Let sit for 5 minutes. Slice into wedges and drizzle with your favorite balsamic reduction.",
      null
    ],
    "post_id": "809",
    "post_date": "2019-08-15 22:45:49",
    "post_name": "breakfast-frittata",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "balsamic-reduction",
        "#text": "balsamic reduction"
      },
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "post_tag",
        "@nicename": "herbes-de-provence-olive-oil",
        "#text": "herbes de provence olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Chicken Skewers with Thai Peanut Lime Sauce",
    "link": "https://bhooc.com/chicken-skewers-with-thai-peanut-lime-sauce/",
    "pubDate": "Mon, 19 Aug 2019 16:39:50 +0000",
    "encoded": [
      "Sauce Ingredients:\n\n1⁄2 cup smooth peanut butter\n1⁄4 cup low sodium soy sauce\n1⁄4 cup unsweetened almond or coconut milk\n1 tsp fish sauce\n2 tsp Persian Lime Olive Oil\n2 tbsp rice vinegar\n1-2 tsp Sriracha sauce, or more to taste\n3 tbsp brown sugar\n3 tbsp water\n\nChicken Strips:\n\n1 lb. chicken breast, cut into strips\n2 tbsp Cilantro Roasted Onion Olive Oil\n2 tbsp  Coconut Balsamic Vinegar\n1⁄2 tsp salt\n1⁄4 tsp black pepper\nBamboo skewers\n\nDirections:\n\nSauce - Combine all ingredients in a medium saucepan and heat on medium-low, stirring frequently until peanut butter melts and all ingredients blend together. Consistency should be a smooth even-colored sauce. Use additional water or milk as needed to thin sauce. Use as a glaze for chicken or quick rice noodle sauce. Chicken – Soak bamboo skewers in water (to prevent burning while cooking). Marinate chicken strips with Cilantro Roasted Onion Olive Oil and Coconut Balsamic for a minimum of 1 hour. Thread chicken onto bamboo skewers and line on a sheet pan. You can bake in a 375-degree oven, for approximately 35 minutes or grill over medium heat for 12-15 minutes.",
      null
    ],
    "post_id": "821",
    "post_date": "2019-08-19 16:39:50",
    "post_name": "chicken-skewers-with-thai-peanut-lime-sauce",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-persian-lime-olive-oil",
        "#text": "big horn persian lime olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "cilantro-roasted-onion-olive-oil",
        "#text": "Cilantro Roasted Onion olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "coconut-balsamic-vinegar",
        "#text": "Coconut balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "thai-chicken",
        "#text": "thai chicken"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Gouda Cheese Balls",
    "link": "https://bhooc.com/gouda-cheese-balls/",
    "pubDate": "Mon, 19 Aug 2019 16:50:32 +0000",
    "encoded": [
      "1/2 lb. Gouda Cheese, shredded\n2 egg whites\n1 tsp. baking powder\n3 Tbs. flour\n1/4 tsp. Truffle salt\nextra flour for dredging\nOlive Oil for frying\n\nIn a food processor, shred the cheese, then change blade and mix with the\negg whites, baking powder, flour and truffle salt\nuntil dough forms. Scrape out the dough and place into a zip lock bag. Mold\ninto a log and refrigerate 10-15 minutes.\nHeat olive oil in a small pan. (Make sure that there is enough olive oil to\ncover the size of the balls you make.)\nRemove cheese dough from refrigerator. Make half inch balls, roll in flour\nand drop into hot olive oil.(about 6 at the time)\nCook until golden brown. Scoop out with slotted spoon onto a paper towel\nto drain. Serve with mustard sauce.\n\nMustard Dipping Sauce\n1 Tbs. Denissimo Balsamic vinegar\n2 Tbs. Smokey Onion Mustard\nMix together and serve",
      null
    ],
    "post_id": "824",
    "post_date": "2019-08-19 16:50:32",
    "post_name": "gouda-cheese-balls",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "gouda-cheese-balls",
        "#text": "gouda cheese balls"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Truffle Hummus",
    "link": "https://bhooc.com/truffle-hummus/",
    "pubDate": "Mon, 19 Aug 2019 16:53:50 +0000",
    "encoded": [
      "Serves: 6 \n\n1-15.5 oz. can of chickpeas, rinsed and drained\n1 tbsp Truffle Oil\n1 tbsp Traditional White Balsamic Vinegar\n2 cloves garlic, minced\n1/3-cup fresh lemon juice\n1⁄2 tsp sea salt\n1⁄4 tsp soy sauce\n1/3-cup tahini\n1⁄2 tsp chopped parsley\n1⁄4 tsp Truffle salt \n\nCombine chickpeas, truffle oil, balsamic vinegar, garlic, lemon juice, salt, and soy sauce into a food processor. Blend until smooth. Add tahini and blend for 2 more minutes. Cover and refrigerate overnight. Sprinkle with chopped fresh parsley and truffle salt before serving. \n\nServe with a fresh vegetable tray.",
      null
    ],
    "post_id": "827",
    "post_date": "2019-08-19 16:53:50",
    "post_name": "truffle-hummus",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dips-sauces-recipes",
        "#text": "Dips &amp; Sauces"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "truffle-hummus",
        "#text": "truffle hummus"
      },
      {
        "@domain": "post_tag",
        "@nicename": "truffle-oil",
        "#text": "truffle oil"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Crab Cakes with Chili Lime Sauce",
    "link": "https://bhooc.com/crab-cakes-with-chili-lime-sauce/",
    "pubDate": "Mon, 19 Aug 2019 16:58:06 +0000",
    "encoded": [
      "Serves: 6-8 small cakes \n\n2 packages imitation or real crab\n1-bunch scallions\n2 eggs\n2 tbsp mayonnaise\n1 tsp dry mustard\n1 cup bread crumbs\n1⁄2 tsp cayenne\n1 tsp garlic powder\n1⁄2 tsp Old Bay seasoning\n1 lemon, juiced\nSalt and pepper to taste\n2 tbsp Dill Olive Oil\n2 tbsp Lemon Olive Oil \n\nMix together the above 10 ingredients. Salt and Pepper to taste. Make small patties. Heat olive oils in a pan. Cook to brown patties on both sides. Drain on paper towels. Serve with Chili Lime Sauce. \n\n5 key limes, juiced 1⁄4 cup water 1⁄4 cup shredded carrots 2 Tbs. fish sauce 2 Tbs. Honey 2 Tbs. chili garlic sauce \n\nMix together and serve with crab cakes.",
      null
    ],
    "post_id": "830",
    "post_date": "2019-08-19 16:58:06",
    "post_name": "crab-cakes-with-chili-lime-sauce",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "crab-cakes",
        "#text": "crab cakes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "dill-olive-oil",
        "#text": "dill olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lemon-olive-oil",
        "#text": "Lemon olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Dill Deviled Eggs",
    "link": "https://bhooc.com/dill-deviled-eggs/",
    "pubDate": "Mon, 19 Aug 2019 17:02:01 +0000",
    "encoded": [
      "Serves: 12-14 \n\n12 eggs\n3 tbsp mayonnaise\n2 tbsp Dill Olive Oil\n2 tbsp Champagne Wine Vinegar\n1 tsp mustard \n\nBring eggs to a boil in a pot with enough water to cover the eggs. Then turn heat to low and cook for 8 minutes. Turn off heat, and let eggs sit in the pot with water, until they reach room temperature. \n\nIn the meantime, mix the remaining ingredients together. When eggs are cooled, peel, slice in half lengthwise and scoop out the yolks. \n\nBlend in yolks in with the above mixture. This can be done by putting all ingredients into a sealable plastic bag and kneading it with your hands. Snip one corner of the plastic bag and use it as a decorating tube to fill the egg halves. \n\nSprinkle with fresh dill or paprika.",
      null
    ],
    "post_id": "833",
    "post_date": "2019-08-19 17:02:01",
    "post_name": "dill-deviled-eggs",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "big-horn-dill-olive-oil",
        "#text": "big horn dill olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "champagne-wine-vinegar",
        "#text": "champagne wine vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "dill-deviled-eggs",
        "#text": "Dill Deviled Eggs"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Party Popcorn",
    "link": "https://bhooc.com/party-popcorn/",
    "pubDate": "Mon, 19 Aug 2019 17:07:08 +0000",
    "encoded": [
      "Serves: 3 \n\nIngredients:\n1⁄2 cup popcorn kernels (roughly 10 cups popped)\n1 tbsp Garlic Olive Oil\n1 tbsp Butter Olive Oil\n2 tsp Baklouti Green Chili Oil\n2 tsp Black Truffle Oil\n1-2 tsp Truffle Salt \n\nDirections: Pour popped kernels into a large mixing bowl or paper bag. Evenly drizzle oils over popcorn; add truffle salt and toss until well mixed.",
      null
    ],
    "post_id": "836",
    "post_date": "2019-08-19 17:07:08",
    "post_name": "party-popcorn",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "baklouti-green-chili-olive-oil",
        "#text": "Baklouti Green Chili olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "black-truffle-sea-salt",
        "#text": "black truffle sea salt"
      },
      {
        "@domain": "post_tag",
        "@nicename": "butter-olive-oil",
        "#text": "butter olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "popcorn",
        "#text": "popcorn"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "white-truffle-oil",
        "#text": "white truffle oil"
      }
    ],
    "postmeta": {
      "meta_value": "big-horn-party-popcorn"
    }
  },
  {
    "title": "The grocery store you have been searching",
    "link": "https://bhooc.com/the-grocery-store-you-have-been-searching-for/",
    "pubDate": "Wed, 21 Aug 2019 10:48:09 +0000",
    "encoded": [
      "This grocery store is worth the trip! Olive Oil Company has three Tasting Rooms in Nevada.  Looking for a grocery store near me? Google us for directions to either Mayberry Landing or SouthCreek Shopping Center in Reno, or to Pueblo Place balsamic vinegar store in Las Vegas. The bulk of our business is in fresh Ultra Premium olive oils and balsamic vinegars, but we're a gourmet goody shop too.\n\nHave you ever had jams or mustards from Terrapin Ridge Farms?  Currently, we carry six different kinds.  If you like jams, we carry hot pepper bacon, apple horseradish, and hot pepper raspberry preserves.  For our mustard fans, we have smoky onion, raspberry honey, and sweet beet with horseradish.  Jams and mustards grace our shelves all year long.  Stop by for a sample when you're in the neighborhood.\n\nDid you know our gourmet grocery store also carries Spanish olives?  Whether you like whole or stuffed olives, we have quite the selection.  Almonds, garlic, orange and lemon rinds are only some of the ingredients you'll find in our stuffed olives.  Our whole queen olives are very meaty and make a healthy snack.  Whether you're a martini drinker or just an olive snacker, the grocery store near me has just what you're looking for.\n\nYou could shop at tasting rooms and stock your kitchen with all kinds of goodies.  While you're in our balsamic vinegar store, check our traditional dark balsamic vinegar from Modena, Italy.  You'll never be able to buy your balsamic in a regular store again.  Our dark balsamic vinegar is cooked to caramelization in copper barrels and aged up to eighteen years.  A-Premium white balsamic vinegar is not cooked as much, so it retains more acidity.  Cranberry Pear, Sicilian Lemon, and Coconut are just a few of these tasty delicacies.\n\nIf it's olive oil, balsamic vinegar or gourmet snacks you want, Olive Oil Company has it.  Come by Monday through Saturday, between 10 am and 6 pm to sample and have some fun!  Bring your friends and family.  You can also check out all our flavors online at <a href=\"http://bhooc.com\">BHOOC.com</a>.  We'll see you soon.",
      null
    ],
    "post_id": "807",
    "post_date": "2019-08-21 10:48:09",
    "post_name": "the-grocery-store-you-have-been-searching-for",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "balsamic-vinegar-store",
        "#text": "balsamic vinegar store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grocery-store",
        "#text": "grocery store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grocery-store-near-me",
        "#text": "grocery store near me"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "The grocery store with top quality balsamic vinegars and Ultra Premium olive oils is right here at Olive Oil Company. Google us for directions!"
      },
      null
    ]
  },
  {
    "title": "Blackberry Ginger and Oat Smoothie",
    "link": "https://bhooc.com/blackberry-ginger-and-oat-smoothie/",
    "pubDate": "Mon, 19 Aug 2019 17:14:24 +0000",
    "encoded": [
      "Makes 1 serving \n\nIngredients:\n1⁄2 cup vanilla Greek yogurt\n1⁄4 cup rolled oats\n2 tbsp water (or more as needed to thin down)\n1⁄2 cup pitted, tart cherries\n1/3- cup blackberries, fresh or frozen\n2 tsp ground flaxseed\n1⁄4 tsp ground cinnamon\n2 tsp Blackberry Ginger Balsamic \n\nDirections: Place all ingredients into a blender and blend until smooth. \n\nMix and match your favorite fruit and balsamic for a nutritious and satisfying smoothie!",
      null
    ],
    "post_id": "839",
    "post_date": "2019-08-19 17:14:24",
    "post_name": "blackberry-ginger-and-oat-smoothie",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Lemon Apricot Oatmeal Bars",
    "link": "https://bhooc.com/lemon-apricot-oatmeal-bars/",
    "pubDate": "Mon, 19 Aug 2019 17:21:06 +0000",
    "encoded": [
      "Makes 16 bars \n\nIngredients:\n2 cups rolled oats\n1⁄2 cup brown sugar\n1/3 -cup wheat germ\n2 tbsp ground flaxseed\n1⁄2 tsp ground cinnamon\n1 cup Whole Wheat pastry flour\n3⁄4 teaspoon salt\n3⁄4 cup dried apricots, roughly chopped\n1⁄2 cup plus 1 tbsp local honey\n1 egg, beaten\n1⁄2 cup Lemon Olive Oil\n1 tsp vanilla extract \n\nDirections: Preheat oven to 350 degrees.\n\nIn a large mixing bowl, sift together oats, brown sugar, wheat germ, flaxseeds, cinnamon, flour, and salt. Add in honey, egg, olive oil, and vanilla extract and stir until mixture is fully incorporated. \n\nLightly grease an 8x8 square baking pan. Using the back of a large spoon (or clean fingers), press mixture into a square mold, roughly 1 inch thick. Bake for 18-20 minutes or until the top is slightly golden; careful not to over bake as bars will become very dry. \n\nOnce bars have cooled, slice into 16 even squares and wrap individually in BPA- free saran wrap or foil. Store in a cool cupboard or fridge. Great to take on the go or for a nutritious dessert!",
      null
    ],
    "post_id": "842",
    "post_date": "2019-08-19 17:21:06",
    "post_name": "lemon-apricot-oatmeal-bars",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lemon-olive-oil",
        "#text": "Lemon olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lemon-apricot-oatmeal-bars",
        "#text": "Lemon-Apricot Oatmeal Bars"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Honey-Chipotle Almond Trail Mix",
    "link": "https://bhooc.com/honey-chipotle-almond-trail-mix/",
    "pubDate": "Mon, 19 Aug 2019 17:30:44 +0000",
    "encoded": [
      "1-cup popcorn (air-popped preferred) 1⁄4 cup almonds* 1⁄4 cup dried cranberries or other favorite fruit \n\n<b>*Honey-Chipotle Almonds\n</b>1 1⁄2 cup whole, unsalted almonds\n2 tsp Chipotle Olive Oil\n1 tsp Cayenne Olive Oil\n1⁄4 tsp smoked paprika\n1/8 tsp cayenne powder (optional)\n1-2 tbsp local honey\n1 tsp brown sugar\n1/8 tsp salt \n\nDirections: Heat a skillet on medium heat. Add almonds and olive oil. Stir until almonds are lightly coated with oil. Add honey, smoked paprika, and cayenne powder, and continue to stir for 1 minute. Remove from heat and pour almonds onto a sheet pan to cool. Sprinkle almonds with salt and brown sugar. Store in the fridge or a cool, dry place.",
      null
    ],
    "post_id": "845",
    "post_date": "2019-08-19 17:30:44",
    "post_name": "honey-chipotle-almond-trail-mix",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "chipotle-olive-oil",
        "#text": "Chipotle olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Avocado Smoothie",
    "link": "https://bhooc.com/avocado-smoothie/",
    "pubDate": "Mon, 19 Aug 2019 17:35:30 +0000",
    "encoded": [
      "Makes 2 smoothies \n\nIngredients:\n1 avocado, peeled and pitted\n3⁄4 cup milk\n2 tbsp local honey\n2 tsp Ultra Premium Extra Virgin Olive Oil",
      null
    ],
    "post_id": "848",
    "post_date": "2019-08-19 17:35:30",
    "post_name": "avocado-smoothie",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "post_tag",
        "@nicename": "extra-virgin-olive-oil",
        "#text": "extra virgin olive oil"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Roasted Beet & Pistachio Salad",
    "link": "https://bhooc.com/roasted-beet-pistachio-salad/",
    "pubDate": "Mon, 19 Aug 2019 17:40:03 +0000",
    "encoded": [
      "Serves: 1 \n\nIngredients: 3 cups romaine lettuce, chopped\n1⁄2 cup cooked lentils or white beans\n1⁄2 cup roasted beets, chopped\n1⁄2 cup hearts of palm, sliced\n1 tbsp crumbled Gorgonzola cheese\n1 tbsp pistachios, chopped \n\nDressing:\n1 tbsp Almond Oil\n2 tbsp Traditional Dark Balsamic \n\nAssemble salad ingredients on a plate. Whisk dressing ingredients together and drizzle over the top.",
      null
    ],
    "post_id": "851",
    "post_date": "2019-08-19 17:40:03",
    "post_name": "roasted-beet-pistachio-salad",
    "category": [
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "roasted-almond-oil",
        "#text": "roasted almond oil"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "traditional-dark-balsamic",
        "#text": "traditional dark balsamic"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Southwest Salad with Cilantro Lime Dressing",
    "link": "https://bhooc.com/southwest-salad-with-cilantro-lime-dressing/",
    "pubDate": "Mon, 19 Aug 2019 17:48:02 +0000",
    "encoded": [
      "Serves: 2 \n\nSalad Ingredients: \n\n5 cups mixed greens\n1⁄2 cup cherry tomatoes, halved\n1⁄2 cup corn, drained\n1⁄2 cup black beans, drained and rinsed\n2 tbsp chopped cilantro leaves\n1 avocado, halved and diced\n1 package tortilla strips \n\nDressing: 1 bunch cilantro, stems removed\n1⁄2 cup plain Greek yogurt\n2 cloves garlic\nJuice of 1 lime\nSea salt to taste\n3 tbsp. Persian Lime Olive Oil\n2 tbsp Champagne Wine Vinegar \n\nIn a bowl, toss lettuce, tomatoes, corn, black beans, and cilantro. Gently toss in avocado and top with tortilla strips. \n\nIn a food processor, chop cilantro. Then add Greek yogurt, garlic, and lime juice. Add sea salt to taste. Process. While the processor is on, add Olive Oil and Vinegar in a slow stream, until emulsified.",
      null
    ],
    "post_id": "854",
    "post_date": "2019-08-19 17:48:02",
    "post_name": "southwest-salad-with-cilantro-lime-dressing",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "champagne-wine-vinegar",
        "#text": "champagne wine vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "dressings-and-vinaigrettes",
        "#text": "Dressings &amp; Vinaigrettes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Chicken Waldorf Salad with Serrano Honey & Dijon Dressing",
    "link": "https://bhooc.com/chicken-waldorf-salad-with-serrano-honey-dijon-dressing/",
    "pubDate": "Mon, 19 Aug 2019 17:55:53 +0000",
    "encoded": [
      "Serves: 2 \n\n\nIngredients: 1 cup cooked chicken breast, roughly chopped\n1/3-cup tbsp plain Greek yogurt\n2 tbsp Serrano Honey Vinegar\n1 tbsp Dijon mustard\n1⁄4 cup crushed walnuts\n1⁄4 cup dried Montmorency (tart) cherries\n2 celery stalks, washed and chopped\n1 medium apple, diced\nGround pepper, to taste \n\nTip: For the best texture and flavor, add cherries to the salad just prior to serving. \n\n\nDirections: In a small bowl, mix together Greek yogurt, Serrano Honey vinegar, Dijon mustard, and ground pepper. Adjust ratios per preference. In another bowl, combine additional ingredients (minus the dried cherries). Add dressing and mix until well incorporated. Serve over a bed of fresh greens and top with dried cherries.",
      null
    ],
    "post_id": "857",
    "post_date": "2019-08-19 17:55:53",
    "post_name": "chicken-waldorf-salad-with-serrano-honey-dijon-dressing",
    "category": [
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Greek Super Salad",
    "link": "https://bhooc.com/greek-super-salad/",
    "pubDate": "Mon, 19 Aug 2019 18:00:13 +0000",
    "encoded": [
      "Serves: 3 \n\nSalad Ingredients: 3-4 plum tomatoes, seeded, diced\n2 medium cucumbers, diced\n1⁄2 red onion, finely chopped\n1 bell pepper, seeded, diced\n10 cups kalamata olives, roughly chopped\n1⁄2 cup feta cheese, crumbled\n1 cup garbanzo beans, rinsed and drained\n2 cups cooked quinoa or whole-wheat couscous \n\nDressing: 2 tbsp Garlic Olive Oil\n2 tbsp Red Wine Vinegar\n2 tsp Sicilian Lemon Vinegar\n2 tsp lemon zest\n1 garlic clove, finely diced\n1⁄2 tsp dried basil\n1⁄2 tsp dried oregano\n1⁄2 tsp salt (or more to taste)\n1⁄4 tsp ground pepper \n\n<b>Quinoa </b>is a nutrient-dense grain, which contains all 9 essential amino acids. It provides a good source of dietary fiber, is high in protein, and offers a good source of vitamins and minerals. Quinoa can be found in three varieties: red, black, and white – white being the most common. \n\n<b>Couscous </b>is a type of small pasta made out of semolina flour. Couscous comes in several sizes and sometimes colors. Although lower in calories than quinoa, traditional couscous is often made from refined flour, which lacks nutrients, however, there are varieties made with whole wheat flour. \n\n\nDirections In a small bowl, whisk together olive oil, vinegars, lemon zest, garlic, basil, oregano, salt, and pepper; set aside. \n\nIn a separate bowl, combine tomatoes, cucumbers, red onion, bell pepper, and kalamata olives. Add the vinaigrette and mix well. Add feta cheese, garbanzo beans, and quinoa and gently mix. Place on top of lettuce greens or eat on its own.",
      null
    ],
    "post_id": "860",
    "post_date": "2019-08-19 18:00:13",
    "post_name": "greek-super-salad",
    "category": [
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "red-wine-vinegar",
        "#text": "red wine vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-balsamic-vinegar",
        "#text": "Sicilian Lemon balsamic vinegar"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Upgraded Chinese Chicken Salad",
    "link": "https://bhooc.com/upgraded-chinese-chicken-salad/",
    "pubDate": "Mon, 19 Aug 2019 18:03:47 +0000",
    "encoded": [
      "Serves: 2 \n\nIngredients: 5 cups romaine, freshly washed and chopped\n1⁄2 cup red cabbage, shredded\n1 cup Napa cabbage, shredded\n5 ounces cooked chicken breast, sliced into strips\n3 tbsp slivered almonds\n1-cup mandarin oranges (if canned, drained and rinsed)\n1 large carrot, peeled and shredded\n1⁄4 cup edamame (optional)\n1⁄4 cup chopped green onions \n\nDressing: \n\n2 tbsp Almond Oil\n1 tbsp Blenheim Apricot Vinegar\n2 tbsp Champagne Wine Vinegar \n\nWhisk together almond oil and vinegars and set aside. \n\nWash and slice all vegetables. Combine in a large mixing bowl and toss. Add mandarin orange slices, chicken strips, and dressing and toss. Serve immediately.",
      null
    ],
    "post_id": "863",
    "post_date": "2019-08-19 18:03:47",
    "post_name": "upgraded-chinese-chicken-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "apricot-balsamic-vinegar",
        "#text": "Apricot balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "blenheim-apricot-balsamic-vinegar",
        "#text": "blenheim apricot balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "dressings-and-vinaigrettes",
        "#text": "Dressings &amp; Vinaigrettes"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Cannellini Bean Salad",
    "link": "https://bhooc.com/cannellini-bean-salad/",
    "pubDate": "Mon, 19 Aug 2019 18:09:35 +0000",
    "encoded": [
      "Serves: 3 \n\n1-16 oz. can cannellini beans, rinsed and drained\n2 tbsp chopped fresh parsley\n2 tbsp diced black olives\n2 tbsp Tuscan Herb Olive Oil\n3 tbsp Sicilian Lemon Balsamic Vinegar \n\nCombine the above ingredients together in a bowl. Serve with crusty bread.",
      null
    ],
    "post_id": "866",
    "post_date": "2019-08-19 18:09:35",
    "post_name": "cannellini-bean-salad",
    "category": [
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sicilian-lemon-white-balsamic-vinegar",
        "#text": "sicilian lemon white balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Couscous Salad with Grilled Fruit",
    "link": "https://bhooc.com/couscous-salad-with-grilled-fruit/",
    "pubDate": "Mon, 19 Aug 2019 19:00:07 +0000",
    "encoded": [
      "Serves: 4 \n\n2 nectarines, pitted and halved\n2 red plums, pitted and halved\n1 1⁄2 cups vegetable broth\n1-cup couscous\n2 tbsp Cilantro &amp; Roasted Onion Olive Oil\n2 tbsp Persian Lime Olive Oil\n1 tbsp honey\n1 tbsp chopped mint leaves\n1 tbsp roasted, salted sunflower seeds for topping \n\nBrush 1 tbsp Persian Lime Olive Oil over the cut sides of each fruit. Heat grill to medium and fruit directly on grill rack. Cover and grill about 5 minutes or until charred. Remove and cut into smaller wedges for salad. \n\nBring broth to boil in a medium saucepan and stir in couscous along with 1 tbsp Cilantro and Roasted Onion Olive Oil. Remove from heat and cover. Let stand 5 minutes and fluff with a fork. \n\nIn a separate large bowl, whisk together the remaining Roasted Cilantro &amp; Roasted Onion Olive Oil and Persian Lime Olive Oil, honey, 1⁄4 tsp salt, and 1⁄4 tsp pepper. Add fruit, couscous, mint, and toss the salad to coat. Top with sunflower seeds.",
      null
    ],
    "post_id": "869",
    "post_date": "2019-08-19 19:00:07",
    "post_name": "couscous-salad-with-grilled-fruit",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cilantro-roasted-onion-olive-oil",
        "#text": "Cilantro Roasted Onion olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Watermelon Salad",
    "link": "https://bhooc.com/watermelon-salad/",
    "pubDate": "Tue, 20 Aug 2019 20:04:11 +0000",
    "encoded": [
      "Serves: 2-4 \n\n2 tbsp Lemongrass Mint Balsamic Vinegar\n1 Key lime, juiced\n1⁄4 cup Blood Orange Olive Oil\n1 red onion, thinly sliced\n4 cups watermelon, cut into small chunks\n2 cups mixed greens\n10 mint leaves, finely chopped\n1 cup crumbled feta cheese \n\nIn a bowl, mix sliced onion, key lime, olive oil, and balsamic vinegar. Let this sit for at least 10 minutes. In a salad bowl, gently toss watermelon, mixed greens and mint leaves together. Add onion mixture. When ready to serve, toss in feta cheese.",
      null
    ],
    "post_id": "872",
    "post_date": "2019-08-20 20:04:11",
    "post_name": "watermelon-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blood-orange-olive-oil",
        "#text": "Blood Orange olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "lemongrass-mint-balsamic-vinegar",
        "#text": "lemongrass mint balsamic vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "watermelon-salad",
        "#text": "watermelon salad"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Simple Carrot Salad",
    "link": "https://bhooc.com/simple-carrot-salad/",
    "pubDate": "Tue, 20 Aug 2019 20:32:58 +0000",
    "encoded": [
      "Serves: 3 \n\n4 cups grated carrots\n1/3 cup dried cranberries\n2 green onions, chopped\n2 tbsp chopped parsley\n4 tbsp Harissa Olive Oil\n1⁄4 cup Pineapple Balsamic Vinegar\n1/8 tsp sea salt \n\nDirections: Whisk together olive oil, vinegar, and salt and set aside. \n\nIn a medium bowl, combine grated carrots, cranberries, and green onions. Add the vinaigrette and mix well. Garnish with chopped parsley.",
      null
    ],
    "post_id": "875",
    "post_date": "2019-08-20 20:32:58",
    "post_name": "simple-carrot-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "carrot-salad",
        "#text": "carrot salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pineapple-bal",
        "#text": "pineapple bal"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Kick it Up a Notch Quinoa Salad",
    "link": "https://bhooc.com/kick-it-up-a-notch-quinoa-salad/",
    "pubDate": "Mon, 09 Sep 2019 17:05:12 +0000",
    "encoded": [
      "Serves 8-10 \n\nSalad Ingredients: 4 cups cooked Quinoa 2 cups finely chopped Kale 1 cup grape tomatoes cut in half 1 large avocado diced 4 green onions diced 1⁄4 cup chopped cilantro \n\nDressing: 1/3 cup Extra Virgin Olive Oil\n1 tbsp Baklouti Green Chili Pepper Olive Oil\n1 tbsp Honey Vinegar\n1⁄4 cup fresh lemon juice\n2 cloves garlic minced\n1 tbsp Braggs Liquid Aminos\n1⁄2 tsp ground black pepper \n\nCombine salad ingredients in a large bowl; set aside. Prepare dressing; Pour over salad and toss until well incorporated.",
      null
    ],
    "post_id": "878",
    "post_date": "2019-09-09 17:05:12",
    "post_name": "kick-it-up-a-notch-quinoa-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "baklouti-green-chili-olive-oil",
        "#text": "Baklouti Green Chili olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      },
      {
        "@domain": "post_tag",
        "@nicename": "serrano-honey-vinegar",
        "#text": "Serrano Honey vinegar"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_wp_old_date",
        "meta_value": "2019-08-20"
      }
    ]
  },
  {
    "title": "CBD products are online and in our Las Vegas tasting room",
    "link": "https://bhooc.com/cbd-products-are-online-and-in-our-las-vegas-tasting-room/",
    "pubDate": "Mon, 09 Sep 2019 17:02:05 +0000",
    "encoded": [
      "Big Horn Olive Oil Company is selling through our CBD infused lozenges, olive oils and balsamic vinegars. Order online at <a href=\"http://BHOOC.com\">BHOOC.com</a> or stop by our Las Vegas tasting room to stock up. Oils and vinegars ordered online have been reduced to cover shipping charges. Prices are the same whether you buy online or in our store.\n\nCBD infused lozenges are $20.00 per pack. We have green apple, cherry and lemon flavors available.\n\nCBD infused olive oil is $30.00 for our  6.7 ounce bottle\n\nCBD infused olive oil $55.00-375Ml\n\nCBD infused balsamic vinegar $30.00-200Ml\n\nCBD infused balsamic vinegar $55.00-375Ml",
      null
    ],
    "post_id": "906",
    "post_date": "2019-09-09 17:02:05",
    "post_name": "cbd-products-are-online-and-in-our-las-vegas-tasting-room",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "cbd",
        "#text": "CBD"
      },
      {
        "@domain": "category",
        "@nicename": "news",
        "#text": "News"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Buy while we still have product. CBD has been so popular, and we're sad to see it go. Use your oils quickly. Vinegars will stick around for three years."
      },
      {
        "meta_key": "_wp_old_date",
        "meta_value": "2019-08-21"
      }
    ]
  },
  {
    "title": "Quick Herb Corn Muffins",
    "link": "https://bhooc.com/quick-herb-corn-muffins/",
    "pubDate": "Mon, 09 Sep 2019 17:54:13 +0000",
    "encoded": [
      "1 box Jiffy Corn Muffin Mix\n1/2 cup milk\n1 egg\n1 Tbs. Basil Olive Oil\n1/2 Tbs. Baklouti Green Chili Olive Oil\n1 cup corn kernels, fresh or frozen\n1 Tbs. Seasonello\nPreheat oven to 400 degrees.\nLine muffin cups with paper liners.\nMix the first 5 ingredients, then add the corn and Seasonello and let sit for about 10 minutes. Fill each muffin cup about 2/3 full. Bake 20-25 minutes.",
      null
    ],
    "post_id": "989",
    "post_date": "2019-09-09 17:54:13",
    "post_name": "quick-herb-corn-muffins",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "baklouti-green",
        "#text": "baklouti green"
      },
      {
        "@domain": "post_tag",
        "@nicename": "basil-olive-oil",
        "#text": "basil olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "corn-muffins",
        "#text": "corn muffins"
      },
      {
        "@domain": "post_tag",
        "@nicename": "herb-corn-muffins",
        "#text": "herb corn muffins"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Shrimp Enchiladas with Green Sauce",
    "link": "https://bhooc.com/shrimp-enchiladas-with-green-sauce/",
    "pubDate": "Mon, 09 Sep 2019 17:59:54 +0000",
    "encoded": [
      "1/2 cup Garlic Olive Oil\n16 corn tortillas (6 inch)\n1 Tbs. Garlic Olive Oil\n\n2 medium roma tomatoes, chopped\n2 medium onions, finely chopped\n4 garlic cloves, minced\n1/2 tsp. ground cumin\n1-1/2 lb. raw small shrimp, peeled &amp; deveined\n2-10 oz. pkg frozen chopped spinach, thawed and squeeze dry\n2 cups shredded mozzarella cheese\n2-10 oz. cans green enchilada sauce\nCilantro for serving.\n\nPre Heat oven to 350 degrees.\nGrease a 9x13 baking dish, set aside.\nPlace two sheets of foil on a plate\nUse paper towels to drain tortillas\nHeat a 1/2 cup of Garlic Olive Oil over medium heat and fry tortillas for about 10 seconds, one at a time\nWrap in foil to keep warm and softened.\nPour 1 Tbs. Garlic Olive Oil in a pan over medium-high heat. Sauté onions, garlic, tomatoes, and cumin. Cook until onions are tender.\nAdd shrimp and cook until it turns pink.\nStir in the spinach and cook for 1 final minute.\n\nScoop 1/4 cup of shrimp mixture on each tortilla, top with 1 Tbs. cheese. Roll and place seam side down in baking dish. Repeat with remaining tortillas.\n\nBake in preheated oven for 25-30 minutes. Top with fresh cilantro before serving.",
      null
    ],
    "post_id": "992",
    "post_date": "2019-09-09 17:59:54",
    "post_name": "shrimp-enchiladas-with-green-sauce",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "entrees-recipes",
        "#text": "Entrees"
      },
      {
        "@domain": "post_tag",
        "@nicename": "garlic-olive-oil",
        "#text": "Garlic olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "shrimp-enchiladas",
        "#text": "shrimp enchiladas"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Make Ahead Black Eyed Pea Salad",
    "link": "https://bhooc.com/make-ahead-black-eyed-pea-salad/",
    "pubDate": "Mon, 09 Sep 2019 18:08:57 +0000",
    "encoded": [
      "2 cans black-eyed peas, rinsed and drained\n2 cups grape tomatoes, halved\n1 each of small peppers\n(yellow, green, red) finely chopped\n1 small red onion, chopped\n1 celery rib, chopped\n2 Tbs. basil, minced\n\n1/4 Oregano Balsamic Vinegar\n1/4 Persian Lime Olive Oil\n1 tsp dijon mustard\nSalt and Pepper to taste\n\nToss together the first 6 ingredients in a bowl. Blend together the next 3 ingredients in a jar. Drizzle over the salad and refrigerate covered for an hour before serving. Note: you can use any combination of Olive Oil or Balsamic Vinegar.",
      null
    ],
    "post_id": "995",
    "post_date": "2019-09-09 18:08:57",
    "post_name": "make-ahead-black-eyed-pea-salad",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "black-eye-pea-salad",
        "#text": "black eye pea salad"
      },
      {
        "@domain": "post_tag",
        "@nicename": "oregano-balsamic-vinegar",
        "#text": "Oregano balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "persian-lime-olive-oil",
        "#text": "Persian Lime olive oil"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Shopping online for holiday gifts starts now",
    "link": "https://bhooc.com/shopping-online-for-holiday-gifts-starts-now/",
    "pubDate": "Tue, 01 Oct 2019 16:44:17 +0000",
    "encoded": [
      "Your shopping online should be a breeze in the Digital Age. We wrap all your holiday gifts at <a href=\"http://bhooc.com\">BHOOC.com</a>. If you need help selecting the perfect gift, we offer sampler sets available. Our experienced staff has hand-selected each set. We know just what to give when it comes to sending online gifts.\n\nYour discerning recipients will love olive oil gifts. We know people get tired of the same old fruit baskets. And yet, we all still like food. Why shouldn't you jazz up the holiday season with fresh oil and vinegar gifts? You don't have to take risks when shopping online for Olive Oil Company olive oil and balsamic vinegar gifts. Who needs the stress of holiday shopping on top of holiday cooking? You're going to be busy with friends and family. Give yourself a break and we'll handle the gift shopping.\n\nWhether you're shopping online or coming into our tasting room, we'll help you choose the perfect oils and vinegars for your family. Get ready to give the gift of good food this holiday season! Who would re-gift ultra-premium olive oil and Modena balsamic vinegar? If you're ready to mail something besides another sweater this year, we've got just the holiday gifts for you. Olive Oil Company stands behind all its quality products, and we're excited to share them with newbies. Don't be surprised if your recipients blame you for getting them hooked. It's just what happens when our premium oil and vinegar gift sets are shared.\n\nWe know online gifts can be hard to choose. We're happy to do the work for you. And we know your loved ones will be thrilled to receive their olive oil gifts. We haven't had a gift returned yet. We hope you have a pleasant experience shopping online at <a href=\"http://bhooc.com\">BHOOC.com</a>.",
      null
    ],
    "post_id": "1052",
    "post_date": "2019-10-01 16:44:17",
    "post_name": "shopping-online-for-holiday-gifts-starts-now",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "balsamic-vinegar-gifts",
        "#text": "balsamic vinegar gifts"
      },
      {
        "@domain": "post_tag",
        "@nicename": "holiday-gifts",
        "#text": "holiday gifts"
      },
      {
        "@domain": "post_tag",
        "@nicename": "holiday-shopping",
        "#text": "holiday shopping"
      },
      {
        "@domain": "post_tag",
        "@nicename": "oil-and-vinegar-gift",
        "#text": "oil and vinegar gift"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-gifts",
        "#text": "olive oil gifts"
      },
      {
        "@domain": "post_tag",
        "@nicename": "online-gifts",
        "#text": "online gifts"
      },
      {
        "@domain": "post_tag",
        "@nicename": "shopping-online",
        "#text": "shopping online"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Shopping online has made holiday gifts a cinch. BHOOC.com is open for all your holiday shopping. Send sets or create your own. Wow your friends and family!"
      },
      null
    ]
  },
  {
    "title": "Our grocery store is stocked for the holidays",
    "link": "https://bhooc.com/our-grocery-store-is-stocked-for-the-holidays/",
    "pubDate": "Fri, 11 Oct 2019 16:44:14 +0000",
    "encoded": [
      "If you're looking for a new twist on your traditional dishes, stop by our grocery store and Tasting Rooms for free samples. Roasted Pumpkin Seed Oil from Stony Brook Farms is the perfect complement to our Pepitas in salads and soups. So you can drizzle and shake over roasted veggies for a nutty finish. Both the oil and seeds are also a delicious addition to ice creams, custards, souffles and anything else you can imagine.\n\nCalifornia Wine and Champagne Wafers are a delightful accompaniment to every wine. Simply pop a bite into your mouth, swallow a sip of your favorite wine and voila! A little flavor explosion of lemon and vanilla, chocolate and mocha or raspberry and almond makes your evening glass into a sweet treat! These artisan wine wafers are also yummy when paired with tea, coffee, or nothing at all. So no matter which flavor you choose, you're going to love it! You can even buy all three and give it as a gift! Sample all flavors in our grocery store, so you know exactly what you're giving.\n\nTerrapin Ridge Farms offer our favorite dips, jams, mustards, and relishes. And we can hardly wait to share samples with you. Whether you're serving a veggie dish or spreading on a sandwich, these spreads are highly craved and sought after. Dress up your cream cheese or finish a chicken breast coming off the grill with Hot Pepper Bacon Jam. Mix some whipped cream cheese together with Sweet Beet and Horseradish Mustard for a simple vegetable dip. We love the spicy Mango Habanero jam and Pineapple Habanero dip. They're fantastic for spicing up marinades.\n\nAlmondina cookies are lining our shelves for the holidays. Choconut, Pistachio and Almond, Ginger Spice, Cinnamon and more are all perfect goodies to serve with coffee or tea after a meal. They would also be a wonderful surprise in someone's Christmas stocking. Watch out - these cookies are difficult to stop eating. Once the package is opened, good luck!\n\nMaple syrups from Butternut Mountain Farms are always a welcome addition during the fall and winter months. Choose from Sweet Autumn, Sweet Bourbon, Sweet Chai, and Sweet Heat flavors. All syrups are straight from Vermont and a gobsmacking addition to pancakes, marinades, meat rubs and more. Tap our Tasting Room for a taste. You may want to stock up. They're only around this time of year. And once they're gone, they're gone until next year.\n\nAs you can see, we have been busy stocking our shelves. We look forward to making your holiday gifts unique and appreciated. You can't go wrong when you shop Olive Oil Company for holiday gifts. We're the specialty grocery store near you have been looking for. Bring your friends and family for a tasting tour. We'll see you soon. For recipes and ideas, visit <a href=\"http://BHOOC.com\">BHOOC.com</a>.\n\n&nbsp;",
      null
    ],
    "post_id": "1088",
    "post_date": "2019-10-11 16:44:14",
    "post_name": "our-grocery-store-is-stocked-for-the-holidays",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "almondina-cookies",
        "#text": "Almondina cookies"
      },
      {
        "@domain": "post_tag",
        "@nicename": "california-champagne-wafers",
        "#text": "California Champagne Wafers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "california-wine-wafers",
        "#text": "California Wine Wafers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "champagne-wafers",
        "#text": "champagne wafers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "gourmet-dip",
        "#text": "gourmet dip"
      },
      {
        "@domain": "post_tag",
        "@nicename": "gourmet-jam",
        "#text": "gourmet jam"
      },
      {
        "@domain": "post_tag",
        "@nicename": "gourmet-mustard",
        "#text": "gourmet mustard"
      },
      {
        "@domain": "post_tag",
        "@nicename": "hot-pepper-bacon-jam",
        "#text": "hot pepper bacon jam"
      },
      {
        "@domain": "post_tag",
        "@nicename": "mango-habanero-jam",
        "#text": "Mango Habanero jam"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pepitas",
        "#text": "pepitas"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pineapple-habanero-dip",
        "#text": "Pineapple Habanero dip"
      },
      {
        "@domain": "post_tag",
        "@nicename": "pumpkin-seed-oil",
        "#text": "pumpkin seed oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "roasted-pumpkin-seed-oil",
        "#text": "roasted pumpkin seed oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sweet-beet-and-horseradish-mustard",
        "#text": "Sweet Beet and Horseradish Mustard"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      },
      {
        "@domain": "post_tag",
        "@nicename": "vermont-maple-syrup",
        "#text": "vermont maple syrup"
      },
      {
        "@domain": "post_tag",
        "@nicename": "wine-wafers",
        "#text": "wine wafers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Our specialty grocery store is stocked and ready for all your holiday shopping. Choose from cookies, jams, mustards and more to compliment holiday gifts."
      },
      {
        "meta_value": [
          "new-gourmet-goodies-have-arrived-for-the-holidays",
          "our-grocery-store-is-stocked-with-gourmet-goodies-for-the-holidays"
        ]
      }
    ]
  },
  {
    "title": "Grocery store for olive oil? Well, yes!",
    "link": "https://bhooc.com/grocery-store-for-olive-oil-well-yes/",
    "pubDate": "Wed, 23 Oct 2019 18:55:23 +0000",
    "encoded": [
      "Finding a grocery store with quality olive oil can be a challenge. But, look no further than Olive Oil Company. Our olive oil grocery store carries the best extra virgin olive oil and balsamic vinegar in the world. And you don't have to take our word for it. At Olive Oil Company, we run a full tasting room so you can taste the difference for yourself.\n\nNow is the time to start shopping for holiday gift sets. Why not stop by our tasting room to sample some options? We can make an olive oil and balsamic vinegar gift set for even the most discerning customer. No matter who you're shopping for, we're sure we can please with a gift set. Our helpful staff is ready to offer delicious pairing suggestions.\n\nWhen looking for a grocery store, remember Olive Oil Company. We're a whole grocery store devoted to the world's best olive oils and vinegars. We have balsamic vinegar, honey vinegar, and two wine vinegars. Each one is a dazzling complement to twenty-four fused and infused olive oils. You don't have to settle for the olive oil in your local grocery store. Just one more stop puts the very best oil and vinegar in your cart. We're worth the trip!\n\nBig Horn Olive Oil Company is a must when putting together a gift set. We always have decorative bags, colored tissue wrap and ribbons on hand. Decorated gift sets leave our store ready to give. Gift-giving should be simple, and that's why we love what we do. Our team enjoys putting together olive oil gift sets that are gift-ready. Whether you're having dinner with friends or need a quick host gift, swing by our tasting room for the perfect offering.\n\nShopping at <a href=\"http://BHOOC.com\">BHOOC.com</a> makes gift shopping easy too. We have assembled gift sets for every tastebud. <a href=\"https://bhooc.com/product-category/sampler-sets/\">Shop our sampler sets by clicking here.</a> Visit our tasting room or order online. You can't lose when you shop with Olive Oil Company.",
      null
    ],
    "post_id": "1160",
    "post_date": "2019-10-23 18:55:23",
    "post_name": "grocery-store-for-olive-oil-well-yes",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "gift-set",
        "#text": "gift set"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grocdery-store",
        "#text": "grocdery store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grocery-store-near-me",
        "#text": "grocery store near me"
      },
      {
        "@domain": "post_tag",
        "@nicename": "holiday-gift-set",
        "#text": "holiday gift set"
      },
      {
        "@domain": "post_tag",
        "@nicename": "holiday-sampler-set",
        "#text": "holiday sampler set"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil",
        "#text": "olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-grocery-store",
        "#text": "olive oil grocery store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sampler-set",
        "#text": "sampler set"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "Finding an olive oil grocery store with quality product is tough, unless you know where to shop. Olive Oil Company offers the best options around!"
      },
      null
    ]
  },
  {
    "title": "The olive Las Vegas has awaited is here",
    "link": "https://bhooc.com/the-olive-las-vegas-has-awaited-is-here/",
    "pubDate": "Thu, 24 Oct 2019 16:37:08 +0000",
    "encoded": [
      "Where do you buy an olive Las Vegas carries locally? Of course, you can find gourmet Spanish olives at <a href=\"https://www.google.com/maps/place/Big+Horn+Olive+Oil+Company+-+Las+Vegas/@36.1980116,-115.2825761,15z/data=!4m12!1m6!3m5!1s0x0:0x2e3692590439dc51!2sBig+Horn+Olive+Oil+Company+-+Las+Vegas!8m2!3d36.1980116!4d-115.2825761!3m4!1s0x0:0x2e3692590439dc51!8m2!3d36.1980116!4d-115.2825761\">Big Horn Olive Oil Company</a>. Our shelves are stocked like an olive grocery at the front of our tasting room. Sample from a selection of garlic stuffed, almond stuffed, lemon or orange peel stuffed olives. We also carry red chili stuffed olives. Some of our Manzanilla olives are brined with garlic and rosemary. If you like, spice, we recommend the spicy picked cocktail for your martinis and cheese boards. Olive Grocery has just what you're looking for.\n\nOur shelves currently have ten to twelve different olive types on our shelves. We even carry pickled sweet garlic. And the best part is, you can try an olive Las Vegas before you buy a jar. We wouldn't want you going home with olives you might not like. So we always have fresh samples on hand. Just ask our staff to taste. We're happy to share as many olives as you'd like to try. We wouldn't feel right calling ourselves an olive grocery if we didn't sample our olives. Come by between meals and enjoy an olive Las Vegas feast while you're here.\n\nSo, now that you know where to shop for an olive Las Vegas, the question is, when should you stop by? We hope to see you as soon as possible! Our olives are all in decorative glass jars. They make a perfect host or welcome gift. And when you purchase olives as gifts, we'll wrap them for free. We always have adorable bags with colorful tissue and ribbon ready for wrapping. If you're doing your holiday shopping, stop by for <a href=\"https://bhooc.com/product-category/sampler-sets/\">pre-wrapped gifts</a>. Or, you can choose the olive and we'll do the wrapping. You'll have all your olive fans hooked on <a href=\"http://bhooc.com\">Big Horn Olive Oil Company</a>.",
      null
    ],
    "post_id": "1166",
    "post_date": "2019-10-24 16:37:08",
    "post_name": "the-olive-las-vegas-has-awaited-is-here",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "grocery",
        "#text": "grocery"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive",
        "#text": "olive"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-grocery",
        "#text": "olive grocery"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-las-vegas",
        "#text": "olive Las Vegas"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-grocery-store",
        "#text": "olive oil grocery store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-store",
        "#text": "olive store"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olives-las-vegas",
        "#text": "olives Las Vegas"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "The olive Las Vegas has demanded is now at Olive Oil Company. Taste a variety of Spanish whole, stuffed and pitted olives. We are your olive store."
      },
      null
    ]
  },
  {
    "title": "EVOO olive oil gifts are popular this year",
    "link": "https://bhooc.com/evoo-olive-oil-gifts-are-popular-this-year/",
    "pubDate": "Mon, 02 Dec 2019 23:17:41 +0000",
    "encoded": [
      "EVOO olive oil is not created equally. What we find on the shelves in America is often fake. How do they get away with it? Simple: EVOO olive oil isn't regulated in our country. And labels don't really tell the truth. Olive oil producers can print whatever they want for the oils they export. This makes giving an olive oil gift set a disappointment when the olive oil is no good. We know you want to gift truly fresh extra virgin olive oil, and Olive Oil Company has just what you're looking for.\n\nFlavored balsamic vinegar is just the complement to any of our southern hemisphere olive oils. And if EVOO isn't for you, we have plenty of fused and infused olive oils too. Whether your loved ones enjoy citrus, savory or spicy, our Tasting Room is loaded with options for flavor combinations. And, we can put together an olive oil gift set that is sure to dazzle tastebuds. Blood Orange and Vanilla, Chipotle and Maple, and Tuscan Herb and Red Apple are just a few fun combos. You are always welcome to mix your own pairings and select flavors on your own. Whatever you choose, we're ready to wrap gifts and send you out with your holiday shopping complete.\n\nBring your list to the grocery store near me. Our team is ready and waiting to help you knock out your holiday shopping list. We have just the olive oil gift set you want. And, if you don't see what you want, just let us know. We can help you choose just the right flavored balsamic vinegar for your olive oil gift set. Please even the pickiest palate with Olive Oil Company flavored olive oils and balsamic vinegars. We've got just what you're looking for. Come taste for yourself. You can try everything before you buy it. We also have lots of jams, mustards, and olives to go with your gifts. We'll see you soon!",
      null
    ],
    "post_id": "1172",
    "post_date": "2019-12-02 23:17:41",
    "post_name": "evoo-olive-oil-gifts-are-popular-this-year",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "evoo-olive-oil",
        "#text": "EVOO olive oil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "flavored-balsamic-vinegar",
        "#text": "flavored balsamic vinegar"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grocery-store-near-me",
        "#text": "grocery store near me"
      },
      {
        "@domain": "post_tag",
        "@nicename": "olive-oil-gift-set",
        "#text": "olive oil gift set"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_yoast_wpseo_metadesc",
        "meta_value": "EVOO olive oil gift sets are hitting the shelves just in time for all your hard-to-buy-for loved ones, and you can taste everything before you buy!"
      },
      null
    ]
  },
  {
    "title": "Double Whipped Holiday Egg Nog for a Crowd",
    "link": "https://bhooc.com/double-whipped-holiday-egg-nog-for-a-crowd/",
    "pubDate": "Tue, 12 Nov 2019 18:17:06 +0000",
    "encoded": [
      "Double Whipped Holiday Egg Nog for a Crowd\n(makes 1.5 gallons)\n\n12 eggs, separated\n1-1/2 cups sugar\n1/4 cup Vanilla Balsamic vinegar\n2 cups dark rum\n3/4 cups brandy\n6 cups whole milk\n1-1/2 tsp. ground nutmeg\n2 cups heavy cream\n2 cups heavy whipping cream, lightly whipped with 2 tsp. Vanilla Balsamic\nDash cinnamon &amp; nutmeg\n\nIn a large bowl, with an electric mixer, beat together egg yolks and sugar for about 10 minutes until pale, thick and sugar is dissolved. Gradually add Vanilla Balsamic, rum, and brandy. Chill in refrigerator.\nBefore serving, stir in the milk and nutmeg. In separate bowls, beat the egg whites until stiff and then the heavy whipping cream till stiff.\nFold the whipped egg whites and the whipped cream into the chilled milk-rum mixture. Serve in small glasses garnished with lightly whipped cream (sweetened with Vanilla Balsamic), cinnamon and nutmeg. Deliciously rich, yet surprisingly light and fluffy. Decadent enough to be dessert!",
      null
    ],
    "post_id": "1196",
    "post_date": "2019-11-12 18:17:06",
    "post_name": "double-whipped-holiday-egg-nog-for-a-crowd",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "double-whipped-holiday-egg-nog-for-a-crowd",
        "#text": "Double Whipped Holiday Egg Nog for a Crowd"
      },
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "post_tag",
        "@nicename": "holiday-egg-nog",
        "#text": "holiday egg nog"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      "wp:meta_value>",
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Turkey Sloppy Joes",
    "link": "https://bhooc.com/turkey-sloppy-joes/",
    "pubDate": "Tue, 12 Nov 2019 19:49:58 +0000",
    "encoded": [
      "Turkey Sloppy Joes\n\n1 lb. ground turkey or chicken\n1 Tbs. Chipotle Olive Oil\n1 small onion, chopped\n1 stalk celery, chopped\n1/4 green pepper, chopped\n1 10-1/4 oz. can condensed tomato soup, undiluted\n1/2 cup ketchup\n2 Tbs. Indian Spice mustard\n2 Tbs. Traditional Balsamic\n1/4 tsp. pepper\n8 hamburger buns\n\nHeat Chipotle olive oil in a skillet and cook ground turkey, onion, celery, and green pepper over medium heat until the turkey is no longer pink. Drain. Stir in the soup, ketchup, mustard, balsamic vinegar and pepper.\nTransfer to a crockpot. Cover and cook on low for 4 hours. Serve on buns.",
      null
    ],
    "post_id": "1199",
    "post_date": "2019-11-12 19:49:58",
    "post_name": "turkey-sloppy-joes",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "lunch",
        "#text": "Lunch"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sloppy-joes",
        "#text": "sloppy joes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "turkey-sloppy-joes",
        "#text": "turkey sloppy joes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Spanish Frittata",
    "link": "https://bhooc.com/spanish-frittata/",
    "pubDate": "Tue, 12 Nov 2019 20:29:17 +0000",
    "encoded": [
      "<div>Spanish Frittata</div><div></div><div>1/2 cup Herbs de Provence olive oil</div><div>4 potatoes, peeled and sliced</div><div>1 onion, peeled and sliced</div><div>salt and pepper</div><div>1 tsp. ground fennel seed</div><div>Salt and black pepper</div><div>6 large eggs</div><div></div><div>Move rack in oven to the top</div><div>&amp; pre-heat to a low broil.</div><div>Heat Herbs de Provence oil in an 8- or 10-inch nonstick skillet over medium heat. Add potatoes, onions, fennel, salt and pepper. Gently turn mixture in oil, and adjust heat to a slow bubble.</div><div>Cook at medium/low heat, turning potatoes gently every few minutes, until they are tender. In a bowl, beat eggs with salt and pepper.</div><div>Drain potatoes in colander, reserving 2 Tbs. oil in pan and heat oil over medium heat. Meanwhile, gently mix warm potatoes with eggs, and add to skillet. When edges firm up, reduce heat to medium-low. Cook 7 minutes. Now place pan in top rack of oven and broil 5-7 minutes. Serve warm or at room temperature. Enjoy all day long. Optional additions to this would be spinach, chopped ham or swiss chard.</div>",
      null
    ],
    "post_id": "1202",
    "post_date": "2019-11-12 20:29:17",
    "post_name": "spanish-frittata",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spanish-frittata",
        "#text": "spanish frittata"
      },
      {
        "@domain": "category",
        "@nicename": "uncategorized",
        "#text": "Uncategorized"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Cranberry Walnut Turkey Salad",
    "link": "https://bhooc.com/cranberry-walnut-turkey-salad/",
    "pubDate": "Tue, 12 Nov 2019 20:31:19 +0000",
    "encoded": [
      "Cranberry Walnut Turkey Salad\n<div>2-1/2 cups leftover turkey, chopped</div><div>1/2 cup mayonnaise</div><div>2 Tbs. sour cream</div><div>1 tsp. dijon mustard</div><div>1 Tbs. Herbs de Provence olive oil</div><div>2 tsp. Apricot balsamic vinegar</div><div>1/2 tsp. sea salt</div><div>1/2 tsp. black pepper</div><div>1/3 cup diced celery</div><div>1/4 cup diced red onions</div><div>1/2 cup dried cranberries</div><div>1/4 cup walnuts, chopped</div><div>1/4 cup parsley, chopped</div><div></div><div>In a medium bowl, whisk together mayonnaise, sour cream, dijon mustard, Herbs de Provence olive oil, Apricot balsamic, salt and pepper. Add celery, onions, cranberries, walnuts and parsley. Gently fold in chopped turkey. Cover and refrigerate for at least an hour. Serve over salad greens, or make it into a sandwich.</div>",
      null
    ],
    "post_id": "1205",
    "post_date": "2019-11-12 20:31:19",
    "post_name": "cranberry-walnut-turkey-salad",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "entrees-recipes",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Blue Cheese Cookies",
    "link": "https://bhooc.com/blue-cheese-cookies/",
    "pubDate": "Thu, 12 Dec 2019 20:21:19 +0000",
    "encoded": [
      "<div>Blue Cheese Cookies</div><div>1/2 cup cream cheese, room temp</div><div>2/3 cup butter olive oil</div><div>¼ tsp. cayenne pepper</div><div>1 ½ cups crumbled blue cheese</div><div>2 cups all-purpose flour</div><div>2 cups crisp rice cereal, such as Rice Krispies</div><div>2 slices bacon, cooked and crumbled</div><div></div><div>Preheat oven to 350 degrees. With a mixer on medium speed, cream together cream cheese and butter olive oil until light and fluffy. Add cayenne, blue cheese, flour, rice cereal, and bacon and beat on medium-low speed until well blended. The dough will be stiff.</div><div>2. Roll 1 tablespoon portions into balls and place slightly apart on baking sheets. Flatten each ball with a fork.</div><div>3. Bake until cookies are golden brown, 12 to 15 minutes.</div>",
      null
    ],
    "post_id": "1271",
    "post_date": "2019-12-12 20:21:19",
    "post_name": "blue-cheese-cookies",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blue-cheese-cookies",
        "#text": "Blue Cheese Cookies"
      },
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Sun-dried Tomato Tapenade",
    "link": "https://bhooc.com/sun-dried-tomato-tapenade/",
    "pubDate": "Thu, 12 Dec 2019 20:24:53 +0000",
    "encoded": [
      "<div>Sun-dried Tomato Tapenade</div><div></div><div>3/4 c. sun-dried tomatoes</div><div>2-3 T. capers, to taste</div><div>1 cup parsley</div><div>3 cloves garlic</div><div>1/2 cup Tuscan Herb olive oil</div><div>salt &amp; pepper to taste</div><div></div><div>Place tomatoes, capers, parsley, and garlic in a food processor.</div><div>Blend until almost smooth. Drizzle Tuscan Herb Olive Oil as the processor is running. Add salt &amp; pepper to taste. Makes about 1 cup.</div><div></div><div>Serve on baguettes.</div><div>Slice baguette into serving-size slices. Brush with Persian Lime olive oil and bake for 10 to 15 minutes at 350 degrees.</div>",
      null
    ],
    "post_id": "1274",
    "post_date": "2019-12-12 20:24:53",
    "post_name": "sun-dried-tomato-tapenade",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dips-sauces-recipes",
        "#text": "Dips &amp; Sauces"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sun-dried-tomato-tapenade",
        "#text": "Sun-dried Tomato Tapenade"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Grilled Garlic Polenta Rounds with Wild Mushrooms",
    "link": "https://bhooc.com/grilled-garlic-polenta-rounds-with-wild-mushrooms/",
    "pubDate": "Thu, 12 Dec 2019 20:27:41 +0000",
    "encoded": [
      "<div>Grilled Garlic Polenta Rounds with</div><div>Wild Mushrooms</div><div></div><div>1 Tbs. Garlic Olive Oil</div><div>1/4 cup shallots, minced</div><div>1 lb. assorted fresh mushroom, chopped</div><div>1 Tbs. Wild Mushroom and Sage Olive Oil</div><div>1/4 tsp. black pepper</div><div>1/4 tsp. sea salt</div><div>2 Tbs. fresh flat leaf parsley, chopped</div><div>1 Tbs. Traditional Balsamic Vinegar</div><div>1 (18 oz tube) prepared polenta, sliced into 12 rounds</div><div></div><div></div><div>Heat olive oil in a large nonstick skillet over medium-high heat. Add shallots and cook until softened, about 30 seconds. Drizzle Wild Mushroom and Sage Olive Oil over chopped mushrooms and toss gently. Add mushrooms to pan along with sea salt and pepper. Cook stirring occasionally until mushrooms are deeply browned and have released most of their liquid. About 6-8 minutes. Remove from heat and stir in parsley and balsamic vinegar.</div><div></div><div>Heat a pan over medium-high heat. Coat both sides of the polenta rounds with Garlic Olive Oil. Cook 4 to 5 minutes per side. Remove from heat and top each round with about 3 tbs. mushroom mixture. Serve immediately.</div>",
      null
    ],
    "post_id": "1277",
    "post_date": "2019-12-12 20:27:41",
    "post_name": "grilled-garlic-polenta-rounds-with-wild-mushrooms",
    "category": [
      {
        "@domain": "category",
        "@nicename": "breakfast",
        "#text": "Breakfast"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grilled-garlic-polenta-rounds-with-wild-mushrooms",
        "#text": "Grilled Garlic Polenta Rounds with  Wild Mushrooms"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Mediterranean White Bean Soup",
    "link": "https://bhooc.com/mediterranean-white-bean-soup/",
    "pubDate": "Thu, 12 Dec 2019 20:29:52 +0000",
    "encoded": [
      "<div>Mediterranean White Bean Soup</div><div></div><div>1 Tbs. Garlic Olive Oil</div><div>1 large onion, chopped</div><div>2 garlic cloves, minced</div><div>1 large carrot, chopped</div><div>1 celery rib, chopped</div><div>6 cups vegetable broth</div><div>1 tsp. dried thyme</div><div>1/2 tsp. oregano</div><div>1 tsp. sea salt</div><div>1/2 tsp. black pepper</div><div>3- 15 oz cans white beans, drained and rinsed</div><div>2 cups baby spinach, chopped</div><div>Parmesan cheese, grated (for serving)</div><div>Parsley, chopped (for serving)</div><div></div><div align=\"left\">In a large pot, heat Garlic olive oil over medium high heat. Add onions and garlic. Cook about 2-3 minutes, stirring regularly. Add in the carrots, celery, thyme, oregano, salt and pepper, and cook for an additional 2-3 minutes.</div><div align=\"left\">Add vegetable broth and beans, bring to a boil, reduce heat and simmer for 15 minutes.</div><div align=\"left\">Stir in the spinach and continue to simmer until the spinach wilts, about 2 minutes</div><div align=\"left\">Remove from heat, sprinkle fresh parsley and grated parmesan cheese, if desired, and serve with artisan bread.</div>",
      null
    ],
    "post_id": "1280",
    "post_date": "2019-12-12 20:29:52",
    "post_name": "mediterranean-white-bean-soup",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "about-2-minutes-remove-from-heat",
        "#text": "about 2 minutes Remove from heat"
      },
      {
        "@domain": "post_tag",
        "@nicename": "and-cook-for-an-additional-2-3-minutes-add-vegetable-broth-and-beans",
        "#text": "and cook for an additional 2-3 minutes. Add vegetable broth and beans"
      },
      {
        "@domain": "post_tag",
        "@nicename": "and-serve-with-artisan-bread",
        "#text": "and serve with artisan bread."
      },
      {
        "@domain": "post_tag",
        "@nicename": "bring-to-a-boil",
        "#text": "bring to a boil"
      },
      {
        "@domain": "post_tag",
        "@nicename": "celery",
        "#text": "celery"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chopped-for-serving-in-a-large-pot",
        "#text": "chopped (for serving) In a large pot"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chopped-1-celery-rib",
        "#text": "chopped 1 celery rib"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chopped-2-garlic-cloves",
        "#text": "chopped 2 garlic cloves"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chopped-6-cups-vegetable-broth-1-tsp-dried-thyme-1-2-tsp-oregano-1-tsp-sea-salt-1-2-tsp-black-pepper-3-15-oz-cans-white-beans",
        "#text": "chopped 6 cups vegetable broth 1 tsp. dried thyme 1/2 tsp. oregano 1 tsp. sea salt 1/2 tsp. black pepper 3- 15 oz cans white beans"
      },
      {
        "@domain": "post_tag",
        "@nicename": "chopped-parmesan-cheese",
        "#text": "chopped Parmesan cheese"
      },
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "post_tag",
        "@nicename": "drained-and-rinsed-2-cups-baby-spinach",
        "#text": "drained and rinsed 2 cups baby spinach"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "post_tag",
        "@nicename": "grated-for-serving-parsley",
        "#text": "grated (for serving) Parsley"
      },
      {
        "@domain": "post_tag",
        "@nicename": "heat-bh-garlic-olive-oil-over-medium-high-heat-add-onions-and-garlic-cook-about-2-3-minutes",
        "#text": "heat BH Garlic olive oil over medium high heat. Add onions and garlic. Cook about 2-3 minutes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "if-desired",
        "#text": "if desired"
      },
      {
        "@domain": "category",
        "@nicename": "lunch",
        "#text": "Lunch"
      },
      {
        "@domain": "post_tag",
        "@nicename": "mediterranean-white-bean-soup-1-tbs-bh-garlic-olive-oil-1-large-onion",
        "#text": "Mediterranean White Bean Soup 1 Tbs. BH Garlic Olive Oil 1 large onion"
      },
      {
        "@domain": "post_tag",
        "@nicename": "minced-1-large-carrot",
        "#text": "minced 1 large carrot"
      },
      {
        "@domain": "post_tag",
        "@nicename": "oregano",
        "#text": "Oregano"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "post_tag",
        "@nicename": "reduce-heat-and-simmer-for-15-minutes-stir-in-the-spinach-and-continue-to-simmer-until-the-spinach-wilts",
        "#text": "reduce heat and simmer for 15 minutes. Stir in the spinach and continue to simmer until the spinach wilts"
      },
      {
        "@domain": "post_tag",
        "@nicename": "salt-and-pepper",
        "#text": "salt and pepper"
      },
      {
        "@domain": "category",
        "@nicename": "soups",
        "#text": "Soups"
      },
      {
        "@domain": "post_tag",
        "@nicename": "sprinkle-fresh-parsley-and-grated-parmesan-cheese",
        "#text": "sprinkle fresh parsley and grated parmesan cheese"
      },
      {
        "@domain": "post_tag",
        "@nicename": "stirring-regularly-add-in-the-carrots",
        "#text": "stirring regularly. Add in the carrots"
      },
      {
        "@domain": "post_tag",
        "@nicename": "thyme",
        "#text": "thyme"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Decadent Spanish Hot Chocolate",
    "link": "https://bhooc.com/decadent-spanish-hot-chocolate/",
    "pubDate": "Thu, 12 Dec 2019 20:32:27 +0000",
    "encoded": [
      "<div>Decadent Spanish Hot Chocolate</div><div></div><div>5 Tbs. unsweetened Mashpi cocoa powder</div><div>4 Tbs. Sugar</div><div>1/4 Tbs. corn starch</div><div>1 tsp. Raspberry Dark Balsamic</div><div>1 tsp. cocoa powder</div><div>2 tsp. Chipotle Olive Oil</div><div>1 cup cold water</div><div></div><div align=\"left\">Whisk together cocoa powder, sugar and corn starch in a small saucepan.</div><div align=\"left\">Pour Raspberry Balsamic, Chipotle Olive Oil, &amp; cold water into cocoa mixture and start cooking at medium low heat, stirring constantly. Cook until it thickens and serve immediately in two small mugs.</div><div align=\"left\"></div><div align=\"left\">Bonus: Dip churros, French toast, or Almondina cookies into the super thick chocolate for an extra treat. Recipe can easily be doubled or tripled, but be sure to still serve in small mugs as it is supremely rich, especially without milk or cream. Also try with Pomegranate Balsamic &amp; Butter Olive Oil or with Cinnamon-Pear Balsamic &amp; Blood Orange Olive Oil.</div>",
      null
    ],
    "post_id": "1283",
    "post_date": "2019-12-12 20:32:27",
    "post_name": "decadent-spanish-hot-chocolate",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "decadent-spanish-hot-chocolate",
        "#text": "Decadent Spanish Hot Chocolate"
      },
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "One Pot Vegetable Stew",
    "link": "https://bhooc.com/one-pot-vegetable-stew/",
    "pubDate": "Tue, 14 Jan 2020 22:57:17 +0000",
    "encoded": [
      "3-15 oz cans of butter beans, drained and rinsed\n1/2 tsp. Seasonello salt\n1/2 tsp. Fine black pepper\n1 Tbs. Butter Olive Oil\n1 tsp.  Butter Olive Oil\n1 onion, chopped fine\n3 garlic cloves, minced\n2 teaspoons ground thyme\n3 tablespoons all-purpose flour\n4 cups vegetable broth\n1/2 cup Sicilian Lemon Balsamic Vinegar\n1 small potato, cut into 1/2 inch chunks\n1 small yam, cut into 1/2 inch chunks\n1-16 oz bag frozen peas and carrots\n1 tablespoon tarragon leaves\n\nBegin by chopping the potato and yam into chunks and set aside. Then chop the onion and mince garlic and set aside.\n\nEmpty all three cans of butter beans into a colander and rinse. Heat Olive Oil into a Dutch oven over medium-high heat. Add beans, Seasonello salt and pepper. Cook for about 6 minutes, stirring every 2 minutes. Transfer mixture to a plate.\nReduce heat to medium. Add 1 tsp. butter olive oil and then the onion, garlic, thyme, and tarragon to the now-empty pot. Cook for about 4 minutes. Stir in flour and cook for 1 minute. Add the bean mixture back into the pot. Slowly whisk in broth and balsamic vinegar. Cover and simmer for 25- 35 minutes. Serve with a crusty baguette.",
      null
    ],
    "post_id": "1361",
    "post_date": "2020-01-14 22:57:17",
    "post_name": "one-pot-vegetable-stew",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dinner",
        "#text": "Dinner"
      },
      {
        "@domain": "category",
        "@nicename": "entrees",
        "#text": "Entrees"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "soups",
        "#text": "Soups"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Chipotle & Dark Chocolate Popcorn",
    "link": "https://bhooc.com/chipotle-dark-chocolate-popcorn/",
    "pubDate": "Tue, 14 Jan 2020 23:00:42 +0000",
    "encoded": [
      "4 Tbs. Dark Chocolate Balsamic Vinegar\n4 squares Mashpi\n80% chocolate bar\n1/2 cup unpopped popcorn\n4 Tbs. Chipotle Olive Oil\nsea salt\n\nPop the popped corn in an air popper, or traditional on stovetop.\nDrizzle with the Chipotle Olive Oil. In the meantime, pour the balsamic vinegar in a small saucepan, add the piece of chocolate bar and simmer over medium-low heat until it thickens. About 3-4 minutes. Drizzle over the popcorn mixture. Sprinkle with sea salt. Shake it up and serve.",
      null
    ],
    "post_id": "1364",
    "post_date": "2020-01-14 23:00:42",
    "post_name": "chipotle-dark-chocolate-popcorn",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Raspberry Lemonade",
    "link": "https://bhooc.com/raspberry-lemonade/",
    "pubDate": "Tue, 14 Jan 2020 23:01:58 +0000",
    "encoded": [
      "8 oz glass of water or seltzer\n1/2 oz. Raspberry Dark Balsamic\n1/2 oz. Sicilian Lemon Balsamic\n\nMix together and pour over ice cubes. Balsamic Vinegars are made in the Solera Fashion and is a carminative, an appetite suppressant and a good source of probiotics. And ...\nNO SUGAR ADDED.",
      null
    ],
    "post_id": "1367",
    "post_date": "2020-01-14 23:01:58",
    "post_name": "raspberry-lemonade",
    "category": [
      {
        "@domain": "category",
        "@nicename": "drinks",
        "#text": "Drinks"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Mediterranean Olive Oil Cake",
    "link": "https://bhooc.com/mediterranean-olive-oil-cake/",
    "pubDate": "Tue, 14 Jan 2020 23:02:56 +0000",
    "encoded": [
      "1 1/2 cup all-purpose flour\n2 tsp Baking powder\n1/2 tsp Salt\n1/2 cup Granulated sugar\n3 Eggs (or substitution)\n1/2 cup Milk (any kind)\n3/4 cup Lemon Olive Oil\n1/4 cup pistachio nuts, crushed\nLemon zest, optional\n\nPreheat oven to 350° F &amp; lightly oil a loaf or cake pan\nMix flour, baking powder &amp; salt in one bowl\nIn another, beat sugar &amp; eggs until fluffy\nGradually beat in the milk, then the Lemon Olive Oil\nAdd wet ingredients to dry &amp; fold until combined, then add\ncrushed pistachio nuts. Bake 40 minutes until golden brown.\nAllow to cool before serving.",
      null
    ],
    "post_id": "1369",
    "post_date": "2020-01-14 23:02:56",
    "post_name": "mediterranean-olive-oil-cake",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      }
    ],
    "postmeta": [
      null,
      {
        "meta_key": "_pingme",
        "meta_value": "1"
      },
      {
        "meta_key": "_encloseme",
        "meta_value": "1"
      }
    ]
  },
  {
    "title": "Italian Chopped Salad with Roasted Red Pepper Vinaigrette",
    "link": "https://bhooc.com/italian-chopped-salad-with-roasted-red-pepper-vinaigrette/",
    "pubDate": "Tue, 14 Jan 2020 23:04:32 +0000",
    "encoded": [
      "1/4 cup Gravenstein Apple White Balsamic Vinegar\n1/4 cup Roasted Red Pepper, drained\n1/4 cup Tuscan Herb Olive Oil\n1/4 small white onion\n1/2 tsp. dry mustard\nPinch of red pepper flakes, optional\n\nPlace all ingredients in a food processor. Blend thoroughly. Salt and pepper to taste.\n\n2 bags of chopped romaine/radicchio mix, chopped\n1 red onion, chopped\n2 ribs celery, chopped\n1 pint cherry tomatoes, thinly sliced\n1/3 cup pepperoncini peppers, stemmed and thinly sliced\n1/3 cup oil-packed sun-dried tomatoes, rinsed and chopped\n1 can chickpeas, rinsed and drained\n\nIn a large bowl, combine the above ingredients. Prepare dressing. Add\ndressing to salad and toss together and serve.",
      null
    ],
    "post_id": "1371",
    "post_date": "2020-01-14 23:04:32",
    "post_name": "italian-chopped-salad-with-roasted-red-pepper-vinaigrette",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dressings-and-vinaigrettes",
        "#text": "Dressings &amp; Vinaigrettes"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "salads",
        "#text": "Salads"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Black Truffle Hummus",
    "link": "https://bhooc.com/black-truffle-hummus/",
    "pubDate": "Tue, 28 Jan 2020 23:12:04 +0000",
    "encoded": [
      "1 can (15.5 oz) chick peas, drained\n2 cloves garlic, minced\n1Tbs. Sesame Oil\n1 Tbs. lemon juice\n1 tsp. soy sauce\nSalt and pepper to taste\n1/4 cup Black Truffle Oil\n1/2 teaspoon chopped parsley\nTruffle Salt\n\nIn a blender, combine first 6 ingredients. Blend until smooth.\nOpen the top of the blender and slowly add Black Truffle Oil.\nPut into a bowl, cover and refrigerate. Before serving sprinkle with chopped\nfresh parsley and Truffle sea Salt before serving.\nServe with vegetable tray or pita chips",
      null
    ],
    "post_id": "1385",
    "post_date": "2020-01-28 23:12:04",
    "post_name": "black-truffle-hummus",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "black-truffle-hummus",
        "#text": "black truffle hummus"
      },
      {
        "@domain": "category",
        "@nicename": "dips-sauces-recipes",
        "#text": "Dips &amp; Sauces"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Spicy Cinnamon Roasted Walnuts",
    "link": "https://bhooc.com/spicy-cinnamon-roasted-walnuts/",
    "pubDate": "Tue, 28 Jan 2020 23:15:27 +0000",
    "encoded": [
      "1/2 Tbs. Blood Orange Green Chili Oil\n1/2 Tbs. Cinnamon Pear Balsamic Vinegar\n1 cup Fresh Walnut halves\nsea salt\ncayenne pepper\n\nMix first three ingredients together in a Ziploc bag. Preheat oven 350 degrees. Line cookie sheet with parchment paper and place walnut mixture in single layer on top. Sprinkle with sea salt and cayenne pepper. Bake for 10 minutes. Take out immediately and let cool.\n\nNOTE: Use your favorite pairings. (Butter Olive Oil and Neapolitan Balsamic vinegar) Makes a great topping for salads as well.",
      null
    ],
    "post_id": "1387",
    "post_date": "2020-01-28 23:15:27",
    "post_name": "spicy-cinnamon-roasted-walnuts",
    "category": [
      {
        "@domain": "category",
        "@nicename": "dessert",
        "#text": "Dessert"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      },
      {
        "@domain": "post_tag",
        "@nicename": "spicy-cinnamon-roasted-walnuts",
        "#text": "spicy cinnamon roasted walnuts"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Buffalo Cauliflower with Dipping Sauce",
    "link": "https://bhooc.com/buffalo-cauliflower-with-dipping-sauce/",
    "pubDate": "Tue, 28 Jan 2020 23:35:21 +0000",
    "encoded": [
      "2 heads cauliflower, cut into bite size pieces\n3 Tbs. Butter Olive Oil\n1 teaspoon garlic powder\n1 teaspoon truffle salt\n1 teaspoon black pepper\n1 teaspoon onion powder\n\nDipping Sauce\n\n1/4 cup Sour Cream\n3 Tbs. Hot sauce\n1/2 teaspoon Butter Olive Oil\n\nPreheat oven to 350 degrees. Mix all spices with cauliflower and olive oil. Place on a cookie sheet and bake for 45 minutes until golden brown.\n\nTo make dipping sauce, mix sour cream, hot sauce and olive oil together and set aside.\n\nOnce cauliflower is cooked, place them in a mixing bowl and toss with another 3 Tbs. of Hot Sauce. Serve immediately with dipping sauce.",
      null
    ],
    "post_id": "1389",
    "post_date": "2020-01-28 23:35:21",
    "post_name": "buffalo-cauliflower-with-dipping-sauce",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "buffalo-cauliflower",
        "#text": "buffalo cauliflower"
      },
      {
        "@domain": "category",
        "@nicename": "dips-sauces-recipes",
        "#text": "Dips &amp; Sauces"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  },
  {
    "title": "Blue Cheese Croquettes ",
    "link": "https://bhooc.com/blue-cheese-croquettes/",
    "pubDate": "Tue, 28 Jan 2020 23:37:57 +0000",
    "encoded": [
      "1-1/2 ounces Butter Olive Oil\n1 small onion, chopped small\n3/4 cup flour\n1-3/4 cup whole milk\n1/2 cup Blue cheese\ncrumbled flour for coating\n1 egg\nbreadcrumbs for coating\nSpanish extra virgin olive oil\n\nHeat the butter olive oil in a saucepan over a medium heat. Add the onion and sauté until tender (about 5 minutes). Slowly add the flour and mix well during 5 minutes blending well. Pour in the milk stirring a little at the time until the sauce thickens. Add the blue cheese, mix well and cook for another 2 minutes. Place this mixture in a plastic container, cover and let it cool completely. To make the croquettes, take a spoonful of the thick béchamel and shape it into a small cylinder. Repeat until you finish with all the béchamel paste. Flour the croquettes, dip them in the egg and finally into the breadcrumbs, pressing carefully all round so the croquettes get a good even coating. Heat the olive oil in a small frying pan and fry the croquettes in small batches until golden. Place them in a plate with kitchen paper to absorb the excess of oil. Serve them hot. Delicious with Hot Pepper Bacon Jam.",
      null
    ],
    "post_id": "1391",
    "post_date": "2020-01-28 23:37:57",
    "post_name": "blue-cheese-croquettes",
    "category": [
      {
        "@domain": "post_tag",
        "@nicename": "blue-cheese-croquettes",
        "#text": "blue cheese croquettes"
      },
      {
        "@domain": "category",
        "@nicename": "recipes",
        "#text": "Recipes"
      },
      {
        "@domain": "category",
        "@nicename": "sides-appetizers",
        "#text": "Sides &amp; Appetizers"
      }
    ],
    "postmeta": null
  }
]
//take in data dump from wordpress (array of objects w way too much junk)
//loop through every recipe object, pulling out relevant information into new object
//write every new object to unique ts file using the Recipe.ts type I've already created
//file should live in the recipes folder



function splitData(arrOfObjs) {
  for (object in arrOfObjs){
    let recipe = arrOfObjs[object]
    let badCategory = recipe.category

    let possDescription = recipe.postmeta
    let newDescription = ""
    if (
      possDescription !== null
      && possDescription[1] !== undefined
      && possDescription[1] !== null
      && typeof possDescription[1].meta_value !== "1"
    ) {
      newDescription = possDescription[1].meta_value
    }

    let newCategories = []
    let newProducts = []
    for (idx in badCategory){
      if (
        badCategory[idx]["@domain"] === "category"
        && badCategory[idx]["#text"] !== "Recipes"
      ) {
        newCategories.push(badCategory[idx]["@nicename"])
      }
      if (
        badCategory[idx]["@domain"] === "post_tag"
      ) {
        newProducts.push(badCategory[idx]["@nicename"])
      }
    }

    let tempInstruct = recipe.encoded[0].split("\n").filter(e => e)
    let newIngredients = []
    let newSteps = []
    for (line in tempInstruct){
      if (tempInstruct[line].includes(".")) {
        newSteps.push(tempInstruct[line])
      } else {
        newIngredients.push(tempInstruct[line])
      }
    }

    let newRecipe = {
      slug: recipe.post_name,
      name: recipe.title,
      img: "", //???
      ingredients: newIngredients,
      steps: newSteps,
      description: newDescription,
      categories: newCategories, //returns "uncategorized" on non-recipes
      products: newProducts, // inconsistent original data, lol
      // originalFormat: recipe, //done
    }

    // console.log(recipe.title)
    //here's where I take that newRecipe and figure out how to print it to a new ts file.
    const strRecipe = JSON.stringify(newRecipe, null, 2)
    const newFile = `import { Recipe } from '../../types/Recipe'

const recipe: Recipe = ${strRecipe}

export default recipe`

    fs.writeFile(`recipes/testDump/${newRecipe.slug}.ts`, newFile, (err) => {
      if (err)
        console.log(err);
      else {
        console.log(`${newRecipe.slug}.ts written successfully`);
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync("books.txt", "utf8"));
      }
    })
  }
}

splitData(data)
console.log("finished???")

