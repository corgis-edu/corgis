---
permalink: /blockpy/ingredients/
style: dataset
---

<img class="img-thumbnail float-right"
     src="/images/datasets/ingredients-icon.png"
     alt="ingredients icon"
     role="presentation">

# Ingredients BlockPy Library

<p class='lead'>From the CORGIS Dataset Project</p>

<span class='text-muted'>By Ryan Whitcomb, Joung Min Choi, Bo Guan</span><br>
<span class='text-muted'>Version 3.0.0, created 10/15/2021</span><br>
<span class='text-muted'>Tags: ingredients, vitamins, minerals, health, nutrition</span>

# Overview

The following data comes from the United States Department of Agriculture's Food Composition Database.  It contains data for various types of food ingredients including the amounts of different vitamins and minerals found in the foods as well as macronutrient percentages.  The food covered spans a large variety of foods from butter to Campbell's soup. Much of the supplementary documenation for each field comes directly from that pages' Wikipedia article.



<https://www.ars.usda.gov/northeast-area/beltsville-md-bhnrc/beltsville-human-nutrition-research-center/food-surveys-research-group/docs/fndds-download-databases/>




# Key Descriptions
    
<table class='table table-condensed table-striped table-bordered table-hover'>
<tr>
    <th class=''>Key</th>
    <th class=''>List of...</th>
    <th class=''>Comment</th>
    <th class=''>Example Value</th>
</tr>

<tr>
    <td>Category</td>
    <td>String</td> 
    <td>The general category of food that this item belongs to.</td>
    <td><code>"Butter"</code></td>
</tr>

<tr>
    <td>Description</td>
    <td>String</td> 
    <td>A full description of this food item, including its category and some sub categories.</td>
    <td><code>"Butter, salted"</code></td>
</tr>

<tr>
    <td>Nutrient Data Bank Number</td>
    <td>Integer</td> 
    <td>A unique ID for this food item.</td>
    <td><code>1001</code></td>
</tr>

<tr>
    <td>Data.Alpha Carotene</td>
    <td>Integer</td> 
    <td>Alpha Carotene is a form of carotene with a Beta-ionone ring at one end and an Alpha-ionone ring at the opposite end. It is the second most common form of carotene. Alpha Carotene is common in yellow-orange and dark-green vegetables. Measured in micrograms (mcg).</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Beta Carotene</td>
    <td>Integer</td> 
    <td>An organic, strongly colored red-orange pigment abundant in plants and fruits. Measured in micrograms (mcg).</td>
    <td><code>158</code></td>
</tr>

<tr>
    <td>Data.Beta Cryptoxanthin</td>
    <td>Integer</td> 
    <td>Cryptoxanthin is a natural carotenoid pigment. It has been isolated from a variety of sources including the petals and flowers of plants in the genus Physalis, orange rind, papaya, egg yolk, butter, apples, and bovine blood serum. In the human body, cryptoxanthin is converted to vitamin A (retinol) and is, therefore, considered a provitamin A. As with other carotenoids, cryptoxanthin is an antioxidant and may help prevent free radical damage to cells and DNA, as well as stimulate the repair of oxidative damage to DNA. Measured in micrograms (mcg).</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Carbohydrate</td>
    <td>Float</td> 
    <td>In food science and in many informal contexts, the term carbohydrate often means any food that is particularly rich in the complex carbohydrate starch (such as cereals, bread and pasta) or simple carbohydrates, such as sugar (found in candy, jams, and desserts). Carbohydrates are found in wide variety of foods. The important sources are cereals (wheat, maize, rice), potatoes, sugarcane, fruits, table sugar(sucrose), bread, milk, etc. Starch and sugar are the important carbohydrates in our diet. Starch is abundant in potatoes, maize, rice and other cereals. Sugar appears in our diet mainly as sucrose(table sugar) which is added to drinks and many prepared foods such as jam, biscuits and cakes. Glucose and fructose are found naturally in many fruits and some vegetables. Glycogen is carbohydrate found in the liver and muscles (as animal source). Cellulose in the cell wall of all plant tissue is a carbohydrate. It is important in our diet as fibre which helps to maintain a healthy digestive system. Measured in grams (g) by difference.</td>
    <td><code>0.06</code></td>
</tr>

<tr>
    <td>Data.Cholesterol</td>
    <td>Integer</td> 
    <td>An organic molecule that is a sterol (or modified steroid), a type of lipid molecule, and is biosynthesized by all animal cells, because it is an essential structural component of all animal cell membranes; essential to maintain both membrane structural integrity and fluidity. Cholesterol enables animal cells to dispense with a cell wall (to protect membrane integrity and cell viability), thereby allowing animal cells to change shape and animals to move (unlike bacteria and plant cells, which are restricted by their cell walls). Since all animal cells manufacture cholesterol, all animal-based foods contain cholesterol in varying amounts. Measured in milligrams (mg).</td>
    <td><code>215</code></td>
</tr>

<tr>
    <td>Data.Choline</td>
    <td>Float</td> 
    <td>A water-soluble vitamin. Humans make choline in the liver. Whether dietary or supplemental choline is beneficial or harmful to humans is undefined. Measured in milligrams (mg).</td>
    <td><code>18.8</code></td>
</tr>

<tr>
    <td>Data.Fiber</td>
    <td>Float</td> 
    <td>Dietary fiber or roughage is the indigestible portion of food derived from plants. It has two main components: soluble fiber and insoluble fiber. Measured in grams (g).</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Lutein and Zeaxanthin</td>
    <td>Integer</td> 
    <td>Lutein is synthesized only by plants and like other xanthophylls is found in high quantities in green leafy vegetables such as spinach, kale and yellow carrots. Zeaxanthin is one of the most common carotenoid alcohols found in nature. It is important in the xanthophyll cycle. Synthesized in plants and some micro-organisms, it is the pigment that gives paprika (made from bell peppers), corn, saffron, wolfberries, and many other plants and microbes their characteristic color. This combined quantity of these two compounds is measured in micrograms (mcg).</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Lycopene</td>
    <td>Integer</td> 
    <td>Lycopene is a bright red carotene and carotenoid pigment and phytochemical found in tomatoes and other red fruits and vegetables, such as red carrots, watermelons, gac, and papayas, although not in strawberries, or cherries. Although lycopene is chemically a carotene, it has no vitamin A activity. Foods that are not red may also contain lycopene, such as asparagus and parsley. Measured in micrograms (mcg).</td>
    <td><code>0</code></td>
</tr>

<tr>
    <td>Data.Niacin</td>
    <td>Float</td> 
    <td>Also known as vitamin B3 and nicotinic acid, is an organic compound with the formula C6H5NO 2 and, depending on the definition used, one of the 20 to 80 essential human nutrients. Measured in miligrams (mg).</td>
    <td><code>0.042</code></td>
</tr>

<tr>
    <td>Data.Protein</td>
    <td>Float</td> 
    <td>Proteins are essential nutrients for the human body. They are one of the building blocks of body tissue, and can also serve as a fuel source. As a fuel, proteins provide as much energy density as carbohydrates: 4 kcal (17 kJ) per gram; in contrast, lipids provide 9 kcal (37 kJ) per gram. There are nine essential amino acids which humans must obtain from their diet in order to prevent protein-energy malnutrition and resulting death. Humans need the essential amino acids in certain ratios. Dietary sources of protein include both animals and plants: meats, dairy products, fish and eggs as well as grains, legumes and nuts. Measured in grams (g).</td>
    <td><code>0.85</code></td>
</tr>

<tr>
    <td>Data.Retinol</td>
    <td>Integer</td> 
    <td>Retinol, also known as Vitamin A1, is a vitamin found in food and used as a dietary supplement. As a supplement it is used to treat and prevent vitamin A deficiency. Measured in micrograms (mcg).</td>
    <td><code>671</code></td>
</tr>

<tr>
    <td>Data.Riboflavin</td>
    <td>Float</td> 
    <td>Riboflavin, also known as vitamin B2, is a vitamin found in food and used as a dietary supplement. It is nearly always well tolerated. Normal doses are safe during pregnancy. Riboflavin is in the vitamin B group. It is required by the body for cellular respiration. Food sources include eggs, green vegetables, milk, and meat. Measured in milligrams (mg).</td>
    <td><code>0.034</code></td>
</tr>

<tr>
    <td>Data.Selenium</td>
    <td>Float</td> 
    <td>Selenium is a chemical element with symbol Se and atomic number 34. Selenium salts are toxic in large amounts, but trace amounts are necessary for cellular function in many organisms, including all animals. Measured in micrograms (mcg).</td>
    <td><code>1.0</code></td>
</tr>

<tr>
    <td>Data.Sugar Total</td>
    <td>Float</td> 
    <td>Sugar is the generalized name for sweet, short-chain, soluble carbohydrates, many of which are used in food. They are composed of carbon, hydrogen, and oxygen. There are various types of sugar derived from different sources. Simple sugars are called monosaccharides and include glucose (also known as dextrose), fructose, and galactose. The table or granulated sugar most customarily used as food is sucrose, a disaccharide. (In the body, sucrose hydrolyses into fructose and glucose.) Other disaccharides include maltose and lactose. Longer chains of sugars are called oligosaccharides. Chemically-different substances may also have a sweet taste, but are not classified as sugars. Some are used as lower-calorie food substitutes for sugar, described as artificial sweeteners. Measure in grams (g).</td>
    <td><code>0.06</code></td>
</tr>

<tr>
    <td>Data.Thiamin</td>
    <td>Float</td> 
    <td>Thiamin (or thiamine) is one of the water-soluble B vitamins. It is also known as vitamin B1. Thiamin is naturally present in some foods, added to some food products, and available as a dietary supplement. This vitamin plays a critical role in energy metabolism and, therefore, in the growth, development, and function of cells. Measured in milligrams (mg).</td>
    <td><code>0.005</code></td>
</tr>

<tr>
    <td>Data.Water</td>
    <td>Float</td> 
    <td>The amount of water in the food. Measured in grams (g).</td>
    <td><code>16.17</code></td>
</tr>

<tr>
    <td>Data.Fat.Monosaturated Fat</td>
    <td>Float</td> 
    <td>Fatty acids that have one double bond in the fatty acid chain with all of the remainder carbon atoms being single-bonded. Measured in grams (g).</td>
    <td><code>21.021</code></td>
</tr>

<tr>
    <td>Data.Fat.Polysaturated Fat</td>
    <td>Float</td> 
    <td>Lipids in which the constituent hydrocarbon chain possesses two or more carbon-carbon double bonds. Polyunsaturated fat can be found mostly in nuts, seeds, fish, algae, leafy greens, and krill. "Unsaturated" refers to the fact that the molecules contain less than the maximum amount of hydrogen (if there were no double bonds). Measured in grams (g).</td>
    <td><code>3.043</code></td>
</tr>

<tr>
    <td>Data.Fat.Saturated Fat</td>
    <td>Float</td> 
    <td>A saturated fat is a type of fat in which the fatty acids all have single bonds. Measured in grams (g).</td>
    <td><code>51.368</code></td>
</tr>

<tr>
    <td>Data.Fat.Total Lipid</td>
    <td>Float</td> 
    <td>Lipids comprise a group of naturally occurring molecules that include fats, waxes, sterols, fat-soluble vitamins (such as vitamins A, D, E, and K), monoglycerides, diglycerides, triglycerides, phospholipids, and others. The main biological functions of lipids include storing energy, signaling, and acting as structural components of cell membranes. Measured in grams (g).</td>
    <td><code>81.11</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Calcium</td>
    <td>Integer</td> 
    <td>Calcium is a mineral needed to build and maintain strong bones and teeth. It is also very important for other physical functions, such as muscle control and blood circulation. Calcium is not made in the body - it must be absorbed from food. To effectively absorb calcium from food, Vitamin D is needed. Measured in milligrams (mg).</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Copper</td>
    <td>Float</td> 
    <td>Copper is an essential trace element that is vital to the health of all living things (humans, plants, animals, and microorganisms). In humans, copper is essential to the proper functioning of organs and metabolic processes. Measured in milligrams (mg).</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Iron</td>
    <td>Float</td> 
    <td>Iron is a mineral that is naturally present in many foods, added to some food products, and available as a dietary supplement. Dietary iron has two main forms: heme and nonheme. Plants and iron-fortified foods contain nonheme iron only, whereas meat, seafood, and poultry contain both heme and nonheme iron. Measured in milligrams (mg).</td>
    <td><code>0.02</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Magnesium</td>
    <td>Integer</td> 
    <td>Magnesium is an essential mineral for human nutrition. Magnesium is needed for more than 300 biochemical reactions in the body. It helps to maintain normal nerve and muscle function, supports a healthy immune system, keeps the heart beat steady, and helps bones remain strong. It also helps regulate blood glucose levels and aid in the production of energy and protein. There is ongoing research into the role of magnesium in preventing and managing disorders such as high blood pressure, heart disease, and diabetes. However, taking magnesium supplements is not currently recommended. Diets high in protein, calcium, or vitamin D will increase the need for magnesium. Most dietary magnesium comes from vegetables, such as dark green, leafy vegetables. Measured in milligrams (mg).</td>
    <td><code>2</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Phosphorus</td>
    <td>Integer</td> 
    <td>Phosphorus is an essential macromineral, included in almost all foods. Phosphorus is the second most abundant mineral nutrient in the body, after calcium. This mineral is part of all cells, especially cell membranes, and is essential to bone strength, because it's the main structural component of bones and teeth, as calcium phosphate. Phosphorus is also an important element in energy production. Measured in milligrams (mg).</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Potassium</td>
    <td>Integer</td> 
    <td>Potassium is a mineral and electrolyte that helps nerves to function and muscles to contract, among many other tasks. Potassium sources include leafy greens, fruit from vines, root vegetables, and citrus fruits. Measured in milligrams (mg).</td>
    <td><code>24</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Sodium</td>
    <td>Integer</td> 
    <td>Salt, also known as sodium chloride, is about 40 percent sodium and 60 percent chloride. It adds flavor to food and is also used as a preservative, binder, and stabilizer. The human body needs a very small amount of sodium - the primary element we get from salt - to conduct nerve impulses, contract and relax muscles, and maintain the proper balance of water and minerals. But too much sodium in the diet can lead to high blood pressure, heart disease, and stroke. Measured in milligrams (mg).</td>
    <td><code>643</code></td>
</tr>

<tr>
    <td>Data.Major Minerals.Zinc</td>
    <td>Float</td> 
    <td>Zinc is found in cells throughout the body. It is needed for the body's defensive (immune) system to properly work. It plays a role in cell division, cell growth, wound healing, and the breakdown of carbohydrates. Zinc is also needed for the senses of smell and taste. Measured in milligrams (mg).</td>
    <td><code>0.09</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin A - RAE</td>
    <td>Integer</td> 
    <td>Vitamin A is a fat soluble vitamin that is also a powerful antioxidant. Vitamin A plays a critical role in maintaining healthy vision, neurological function, healthy skin, and more. Measured in retinol activity equivalents (micrograms, or mcg).</td>
    <td><code>684</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin B12</td>
    <td>Float</td> 
    <td>Vitamin B12, also called cobalamin, is a water-soluble vitamin that has a key role in the normal functioning of the brain and nervous system, and the formation of red blood cells. It is one of eight B vitamins. It is involved in the metabolism of every cell of the human body, especially affecting DNA synthesis, fatty acid and amino acid metabolism. No fungi, plants, nor animals (including humans) are capable of producing vitamin B12. Only bacteria and archaea have the enzymes needed for its synthesis. Proved sources of B12 are animal products (meat, fish, dairy products) and supplements. Measured in micrograms (mcg).</td>
    <td><code>0.17</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin B6</td>
    <td>Float</td> 
    <td>Vitamin B6 is involved in many aspects of macronutrient metabolism, neurotransmitter synthesis, histamine synthesis, hemoglobin synthesis and function, and gene expression. Vitamin B6 is widely distributed in foods in both its free and bound forms. Measured in milligrams (mg).</td>
    <td><code>0.003</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin C</td>
    <td>Float</td> 
    <td>Vitamin C, also known as ascorbic acid and L-ascorbic acid, is a vitamin found in food and used as a dietary supplement. Foods that contain vitamin C include citrus fruit, tomatoes, and potatoes. Measured in milligrams (mg).</td>
    <td><code>0.0</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin E</td>
    <td>Float</td> 
    <td>Vitamin E refers to a group of compounds that include both tocopherols and tocotrienols, usually found in various oils (corn oil, soybean oil, wheat germ oil). Measured in milligrams (mg).</td>
    <td><code>2.32</code></td>
</tr>

<tr>
    <td>Data.Vitamins.Vitamin K</td>
    <td>Float</td> 
    <td>Vitamin K (Phylloquinone) is a group of structurally similar, fat-soluble vitamins the human body requires for complete synthesis of certain proteins that are prerequisites for blood coagulation and which the body also needs for controlling binding of calcium in bones and other tissues. Measured in micrograms (mcg).</td>
    <td><code>7.0</code></td>
</tr>

</table>