'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      {
        type:"Furniture",
        sellerId:"5",
        title:"Boss Cat Bed",
        description:"Easy to play with your cat: 360 ° rotatable, 30 ° inclination for easy jumping in \nEasy to clean material: detachable soft fiber pad. Environmentally friendly and comfortable fiber lining inside \nStable stand and comfortable material: Anti-skid and spill. Extra support at the bottom prevents cat from hurting",
        detail:"\nFurrytail Boss cat bed x1\nFiber lining x1\nScrew Toolkit x1\nDonuts plastic clipx1\nManual",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/9019d5a58b860b2fdcb85c37c48f3df_1080x_963a4635-1ab8-4f1f-9ab8-1d6e5ef4f9cc_1080x.jpg?v=1643364650",
        price: 87.9,
        inventory: 10
      },
      {
        type:"Furniture",
        sellerId:"4",
        title:"Cat Window Perch",
        description:"A VIP viewing platform for a curious cat\nA good resting seat for sunbathing\nHeavy-duty and reliable suction\nStrong and simple structure for easy installation and removal\nHigh quality material, with cat hair resistant PVC material or Fabric material for scratching\nSuction cup is reusable after washed in warm water",
        detail:"",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/0e0684de6eb18fa9e3efc453f297eb66_1080x.jpg?v=1639375332",
        price: 119.99,
        inventory: 20
      },
      {
        type:"Furniture",
        sellerId:"4",
        title:"FurHaven Calming Fleece Covered Cat Bed",
        description:"Designed with insulating foam walls that help create a cozy, warm space for your pet to relax.\nPaw-fect for anxious pets who need a place to feel safe.\nFoldable for easy storage and travel.",
        detail:"Shake or vacuum out excess hair and debris. For best results, hand wash using mild detergent. No bleach. Rinse. Do not wring. Blot out excess water with towel before placing in dryer on Low. May be washed separately in front loading washing machine on delicate cycle only. Do not wash in washer with agitator.",
        imgUrl:"https://img.chewy.com/is/image/catalog/244616_MAIN._AC_SL1200_V1612500108_.jpg",
        price: 18.99,
        inventory: 20
      },
      {
        type:"Toy",
        sellerId:"8",
        title:"Frisco Plush, Teaser, Ball & Tunnel Variety Pack Cat Toy with Catnip, 25 count",
        description:"Give your kitty all the excitement that comes with 25 assorted toys, bundled together into one fun-filled pack. The play possibilities are virtually endless with so many toys together, each bringing something to the table when it comes to playtime, including feathers, crinkly textures, fuzzy mice, rolling balls and a wand. It even comes with a play tunnel for hide-and-seek or just chilling. Some toys have catnip for a boost of fun.It’s all the classics for your cat with all the savings for you.",
        detail:"Note: Cats usually begin to appreciate catnip between 6 and 8 months of age. To keep catnip fresh, store in a safe, cool , dark place. Catnip is an herb that grows naturally in the environment. Catnip is considered safe for animals and humans. We recommend catnip be used exclusively by cats. It is not intended for human consumption. Monitor play.",
        imgUrl:"https://img.chewy.com/is/image/catalog/169688_Main._AC_SL1200_V1573680535_.jpg",
        price: 18.99,
        inventory: 20
      },
      {
        type:"Toy",
        sellerId:"8",
        title:"OurPets Sushi Treat Dispensing Puzzle Toy",
        description:"Make meal or snack time exciting with the OurPets Sushi Treat Dispensing Puzzle Dog & Cat Toy. This interactive puzzle toy helps to strengthen your pet’s cognitive abilities while rewarding him with a treat. Just place dog or cat food or a drool-worthy treat that your pet can smell in the compartments, move the sushi flippers to cover the food puzzle’s tracks, and watch as your pet searches for every bite. This toy helps slow down pets that eat too quickly and helps encourage finicky eaters to eat.",
        detail:"Hand washable with mild soap and water.",
        imgUrl:"https://img.chewy.com/is/image/catalog/258947_PT4._AC_SL1200_V1605919339_.jpg",
        price: 18.99,
        inventory: 20
      },

      {
        type:"Travel",
        sellerId:"6",
        title:"Foldable Cat Backpack",
        description:"Easy to play with your cat: 360 ° rotatable, 30 ° inclination for easy jumping in \nEasy to clean material: detachable soft fiber pad. Environmentally friendly and comfortable fiber lining inside \nStable stand and comfortable material: Anti-skid and spill. Extra support at the bottom prevents cat from hurting",
        detail:"Backpack cover*1\nBackpack middle part*1\nBackpack bottom*1\nAssembly instruction*1",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/5499a3ab80a2e9d841d729e9e24ab8c5_1080x.jpg?v=1639375298",
        price: 119.99,
        inventory: 20
      },
      {
        type:"Travel",
        sellerId:"6",
        title:"Wild One Travel Carrier",
        description:"Travel together with this super comfortable, modular Travel Carrier. With breathable mesh walls, a dual use leash / shoulder strap, and an interior cushion that folds out to become a comfortable dog bed, our airline compliant carrier is the home away from home your dog deserves. ",
        detail:"Size: L - 17.5” (45 cm) / W - 11” (28 cm) / H - 10” (25 cm)]\nRecommended for use with dogs up to 16 lbs (7 kg)",
        imgUrl:"https://cdn.shopify.com/s/files/1/0011/7532/2687/products/WO_VM_Studio_PDP_TravelCarrier_Spruce_Dog_05_Web_800x1000_crop_center.jpg?v=1617191631",
        price: 125.5,
        inventory: 20
      },
      {
        type:"Travel",
        sellerId:"6",
        title:"PetAmi Deluxe Backpack Dog & Cat Carrier",
        description:"Made with durable 600D high-grade polyester for a long-lasting experience. ",
        detail:"Size: M - 17.5” / W - 10” / H - 15” ]\nRecommended for use with dogs up to 16 lbs (7 kg)",
        imgUrl:"https://img.chewy.com/is/image/catalog/326610_MAIN._AC_SL1200_V1633618281_.jpg",
        price: 39.99,
        inventory: 20
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Pet NMN",
        description:"The FIRST anti-aging product tailored for pets, approved by the United States Food and Drug Administration (U.S. FDA).",
        detail:"Sugar and Weight control. Feeding Instruction: 30 fish shape capusles every time.",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/0d1d05f1480783825261bdbf77a2acb_1080x.jpg?v=1639376842",
        price: 49.9,
        inventory: 10
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Salmon Jerky",
        description:"Made with 100% salmon jerky with no additives, fillers, color, or preservatives. Tasted chewy brings pure nutrients and energy to your furry friends. Proudly developed and produced in Canada with our exclusive patent formula",
        detail:"Feed as a healthy treat for your cat, break into pieces for small cats and always monitor your pet while treating. Fresh drinking water should always be available.",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/0d1d05f1480783825261bdbf77a2acb_1080x.jpg?v=1639376842",
        price: 9.9,
        inventory: 50
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Wild Salmon Pâte-Grain free wet cat food",
        description:"Made with Canadian wild salmon, proudly developed and produced in Canada. Flavors your cat will love. Grain free and no artificial colors, flavors or preservatives. For cats of all ages.  Meet the high protein need. Good for digestion and hair quality",
        detail:"Feed as a healthy treat for your cat, break into pieces for small cats and always monitor your pet while treating. Fresh drinking water should always be available.",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/salmonpatesmall_1080x.jpg?v=1639375580",
        price: 6.9,
        inventory: 80
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Tiki Cat® After Dark™ Chicken Recipe in Broth",
        description:"Give cats the real meat they crave with succulent shredded chicken and organ meat in a savory broth.",
        detail:"Recommendations vary greatly, based on your cat’s age, activity level and life stage. For adult cats, feed approximately 2-3 cans/pouches per day per 7 lbs. of body weight. For kittens, offer food several times a day, feed up to twice this amount.",
        imgUrl:"https://tikipets.com/wp-content/uploads/2018/01/TC_AfterDark_Chicken.png",
        price: 5.9,
        inventory: 80
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Tiki Cat® Aloha Friends™ Tuna, Calamari & Pumpkin",
        description:"Flaked tuna with pumpkin and indulgent calamari in a savory tuna broth. Grain & Potato Free",
        detail:"Recommendations vary greatly, based on your cat’s age, activity level and life stage. For adult cats, feed approximately 2-3 cans/pouches per day per 7 lbs. of body weight. For kittens, offer food several times a day, feed up to twice this amount.",
        imgUrl:"https://tikipets.com/wp-content/uploads/2018/01/Tiki-Cat-Aloha-Friends-3-oz.-can-12-TR-Tuna-Calamari-Pumpkin-1.png",
        price: 8.9,
        inventory: 80
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Weruva® Chicken Formula Au Jus",
        description:"Get ready for your kitten to dash over to their bowl to lap up this tasty meal! The shredded chicken in an au jus will make them jump for joy until you open up the next can.",
        detail:"Chicken, Chicken Broth, Natural Flavor, Dried Egg, Tricalcium Phosphate, Sunflower Oil, Guar Gum, Xanthan Gum, Locust Bean Gum, Fish Oil, Choline Chloride, Taurine, Zinc Sulfate, Ferrous Sulfate, Vitamin E Supplement, Thiamine Mononitrate (Vitamin B1), Niacin Supplement (Vitamin B3), Calcium Pantothenate, Vitamin A Supplement, Manganese Sulfate, Copper Sulfate, Riboflavin Supplement (Vitamin B2), Pyridoxine Hydrochloride (Vitamin B6), Vitamin D3 Supplement, Folic Acid, Vitamin B12 Supplement, Potassium Iodide",
        imgUrl:"https://weruva.com/wp-content/uploads/2021/05/WRV_KITTEN-CHICKEN_3.0OZ-CAN-01-WEB-1024x1024.jpg",
        price: 8.9,
        inventory: 80
      },
      {
        type:"Food & Feeder",
        sellerId:"4",
        title:"Wild One Bowl Kit",
        description:"Double up & save on our timelessly simple, non-slip Bowls. Made with food-grade stainless steel to hold 4 cups of food for the hungriest of dogs. A perfectly scooped bowl ensures no food is left behind in crevices or corners. Plus, they're top-rack dishwasher safe!",
        detail:"Dimensions: 7.72” x 7.72” x 3.15” \nVolume: 32 fl oz (4 cups)",
        imgUrl:"https://cdn.shopify.com/s/files/1/0011/7532/2687/products/WO_VM_Studio_PDP_Bowl_Lilac_03_Web_2_7471908d-8095-411b-90b4-eeb6e8b73f62_800x1000_crop_center.jpg?v=1636383437",
        price: 48,
        inventory: 10
      },
      {
        type:"Cleaning & Litter",
        sellerId:"7",
        title:"Dust-free Clumping Cat Litter-Flushable",
        description:"Dust-free, clumping\nMixed with natural Tofu\nWater dissolvable and flushable\nEnvironmentally friendly\nStrong odor control",
        detail:"5.5lb/bag",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/03-1_900x_11c661eb-a878-40fa-ae0d-31c20d1f7d53_1080x.jpg?v=1641857591",
        price: 48,
        inventory: 10
      },
      {
        type:"Cleaning & Litter",
        sellerId:"7",
        title:"Pet Cleaning Gloves",
        description:"Easy to use, just wear one glove and massage the essence throughout the body, and dry naturally. \nDeodorize with natural herbs, safe to use or even lick",
        detail:"Color: white\nMaterial: non-woven fabric\nProduct size: 10*16cm",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/11_2ed3457e-40f8-4680-b5c3-1139aa20404f_1080x.jpg?v=1642672880",
        price: 16.5,
        inventory: 10
      },
      {
        type:"Cleaning & Litter",
        sellerId:"7",
        title:"Glow House Cat Litter Box",
        description:"From now on, your beloved cats have their first villa! Furrytail builds pet litter box like an architect builds a house, which invests litter box with the beauty of stylish architecture. Featuring a grate on the right side (corridor), ensures cat to crosses grate upon exiting the Glow House, controlling scatter and recycling collected litter. Pet litter house should not be a total enclosed dark room. The Glow House’s door creates privacy, while the semi-open corridor enables ventilation.",
        detail:"Dimensions: 20.72” x 25.72” x 18.15”",
        imgUrl:"https://cdn.shopify.com/s/files/1/0550/0633/1131/products/1646433098174_1080x.jpg?v=1646433113",
        price: 187.99,
        inventory: 10
      },




    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});

  }
};