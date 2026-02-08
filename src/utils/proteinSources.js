export const proteinSources = {
  veg: [
    { name: "Soy Chunks (Nutrela, cooked)", protein: 27, calories: 170, unit: "50 g dry" },
    { name: "Whey Protein", protein: 24, calories: 120, unit: "1 scoop (30 g)" },
    { name: "Besan (Gram Flour)", protein: 22, calories: 387, unit: "100 g" },
    { name: "Paneer (low fat)", protein: 18, calories: 200, unit: "100 g" },
    { name: "Paneer (regular)", protein: 18, calories: 265, unit: "100 g" },
    { name: "Masoor Dal", protein: 18, calories: 230, unit: "1 cup cooked" },
    { name: "Boiled Soybeans", protein: 16, calories: 173, unit: "100 g" },
    { name: "Chana Dal", protein: 15, calories: 220, unit: "1 cup cooked" },
    { name: "Rajma", protein: 15, calories: 225, unit: "1 cup cooked" },
    { name: "Moong Dal", protein: 14, calories: 210, unit: "1 cup cooked" },
    { name: "Chole (Chickpeas)", protein: 14, calories: 240, unit: "1 cup cooked" },
    { name: "Toor Dal (Arhar)", protein: 13, calories: 200, unit: "1 cup cooked" },
    { name: "Lobia (Black-eyed peas)", protein: 13, calories: 200, unit: "1 cup cooked" },
    { name: "Greek Yogurt", protein: 10, calories: 59, unit: "100 g" },
    { name: "Milk (toned)", protein: 8, calories: 100, unit: "1 glass (250 ml)" },
    { name: "Quinoa", protein: 8, calories: 220, unit: "1 cup cooked" },
    { name: "Chana Sprouts", protein: 8, calories: 120, unit: "1 cup" },
    { name: "Pumpkin Seeds", protein: 8, calories: 150, unit: "2 tbsp" },
    { name: "Roasted Chana", protein: 7, calories: 120, unit: "1 small bowl (30 g)" },
    { name: "Moong Sprouts", protein: 7, calories: 90, unit: "1 cup" },
    { name: "Peanuts (roasted)", protein: 7, calories: 170, unit: "1 handful (30 g)" },
    { name: "Oats", protein: 6, calories: 150, unit: "40 g dry" },
    { name: "Almonds", protein: 6, calories: 170, unit: "10–12 almonds" },
    { name: "Cashews", protein: 5, calories: 155, unit: "8–10 cashews" },
    { name: "Brown Rice", protein: 5, calories: 215, unit: "1 cup cooked" },
    { name: "Chia Seeds", protein: 5, calories: 120, unit: "2 tbsp" },
    { name: "Curd (Dahi)", protein: 4, calories: 60, unit: "1 cup (150 g)" },
    { name: "Flax Seeds", protein: 4, calories: 110, unit: "2 tbsp" },
    { name: "Whole Wheat Roti", protein: 3, calories: 100, unit: "1 medium roti" }
  ],

  nonVeg: [
    { name: "Tuna", protein: 30, calories: 180, unit: "100 g cooked" },
    { name: "Chicken Breast (skinless)", protein: 26, calories: 165, unit: "100 g cooked" },
    { name: "Mutton (lean)", protein: 25, calories: 294, unit: "100 g cooked" },
    { name: "Whey Protein", protein: 24, calories: 120, unit: "1 scoop (30 g)" },
    { name: "Prawns", protein: 24, calories: 99, unit: "100 g cooked" },
    { name: "Catla Fish", protein: 23, calories: 150, unit: "100 g cooked" },
    { name: "Rohu Fish", protein: 22, calories: 140, unit: "100 g cooked" },
    { name: "Sardines", protein: 21, calories: 180, unit: "100 g cooked" },
    { name: "Chicken Curry (home style)", protein: 20, calories: 240, unit: "1 cup" },
    { name: "Egg Whites", protein: 11, calories: 55, unit: "3 egg whites" },
    { name: "Egg", protein: 6, calories: 70, unit: "1 large egg" }
  ]
};
export const caloriefoods = [
  // ===== VERY LOW CALORIE / HIGH WATER =====
  { name: "Shirataki Noodles", quantity: 100, water: 96, carbs: 4, protein: 0, fat: 0, fiber: 4, calories100g: 16, density: 0.16, caloriesKg: 160, densityType: "Low" },
  { name: "Lettuce", quantity: 100, water: 96.1, carbs: 2.9, protein: 0.9, fat: 0.1, fiber: 1.2, calories100g: 16.1, density: 0.16, caloriesKg: 161, densityType: "Low" },
  { name: "Celery", quantity: 100, water: 96.1, carbs: 3, protein: 0.7, fat: 0.2, fiber: 1.6, calories100g: 16.6, density: 0.17, caloriesKg: 166, densityType: "Low" },
  { name: "Bottle Gourd (Ghia)", quantity: 100, water: 95.8, carbs: 3.6, protein: 0.6, fat: 0.02, fiber: 1.2, calories100g: 17, density: 0.17, caloriesKg: 170, densityType: "Low" },
  { name: "Radish", quantity: 100, water: 95.8, carbs: 3.4, protein: 0.7, fat: 0.1, fiber: 1.6, calories100g: 17.3, density: 0.17, caloriesKg: 173, densityType: "Low" },
  { name: "Cucumber", quantity: 100, water: 95.6, carbs: 3.6, protein: 0.7, fat: 0.1, fiber: 0.5, calories100g: 18.1, density: 0.18, caloriesKg: 181, densityType: "Low" },
  { name: "Zucchini", quantity: 100, water: 95.4, carbs: 3.1, protein: 1.2, fat: 0.3, fiber: 1, calories100g: 19.9, density: 0.20, caloriesKg: 199, densityType: "Low" },
  { name: "Tomato", quantity: 100, water: 95.1, carbs: 3.6, protein: 1, fat: 0.3, fiber: 1.2, calories100g: 21.1, density: 0.21, caloriesKg: 211, densityType: "Low" },
  { name: "Bell Peppers", quantity: 100, water: 94.3, carbs: 4.6, protein: 0.9, fat: 0.2, fiber: 1.7, calories100g: 23.8, density: 0.24, caloriesKg: 238, densityType: "Low" },
  { name: "Asparagus", quantity: 100, water: 93.7, carbs: 3.9, protein: 2.2, fat: 0.2, fiber: 2.1, calories100g: 26.2, density: 0.26, caloriesKg: 262, densityType: "Low" },
  { name: "Mushrooms", quantity: 100, water: 93.3, carbs: 3.3, protein: 3.1, fat: 0.3, fiber: 1, calories100g: 28.3, density: 0.28, caloriesKg: 283, densityType: "Low" },
  { name: "Cabbage", quantity: 100, water: 92.8, carbs: 5.8, protein: 1.3, fat: 0.1, fiber: 2.5, calories100g: 29.3, density: 0.29, caloriesKg: 293, densityType: "Low" },
  { name: "Spinach", quantity: 100, water: 93.1, carbs: 3.6, protein: 2.9, fat: 0.4, fiber: 2.2, calories100g: 29.6, density: 0.30, caloriesKg: 296, densityType: "Low" },

  // ===== FRUITS =====
  { name: "Watermelon", quantity: 100, water: 91.9, carbs: 7.2, protein: 0.65, fat: 0.2, fiber: 0.4, calories100g: 33.2, density: 0.33, caloriesKg: 332, densityType: "Low" },
  { name: "Strawberry", quantity: 100, water: 91.7, carbs: 7.4, protein: 0.6, fat: 0.3, fiber: 2, calories100g: 34.7, density: 0.35, caloriesKg: 347, densityType: "Low" },
  { name: "Grapefruit", quantity: 100, water: 91.1, carbs: 8, protein: 0.8, fat: 0.1, fiber: 1.6, calories100g: 36.1, density: 0.36, caloriesKg: 361, densityType: "Low" },
  { name: "Cantaloupe", quantity: 100, water: 91, carbs: 8, protein: 0.8, fat: 0.2, fiber: 1, calories100g: 37, density: 0.37, caloriesKg: 370, densityType: "Low" },
  { name: "Broccoli", quantity: 100, water: 90.2, carbs: 6.6, protein: 2.8, fat: 0.4, fiber: 2.6, calories100g: 41.2, density: 0.41, caloriesKg: 412, densityType: "Low" },
  { name: "Lemon", quantity: 100, water: 89.3, carbs: 9.3, protein: 1.1, fat: 0.3, fiber: 2.8, calories100g: 44.3, density: 0.44, caloriesKg: 443, densityType: "Low" },
  { name: "Peach", quantity: 100, water: 89.3, carbs: 9.5, protein: 0.9, fat: 0.3, fiber: 1.5, calories100g: 44.3, density: 0.44, caloriesKg: 443, densityType: "Low" },
  { name: "Papaya", quantity: 100, water: 89.2, carbs: 10, protein: 0.5, fat: 0.3, fiber: 1.7, calories100g: 44.7, density: 0.45, caloriesKg: 447, densityType: "Low" },
  { name: "Carrot", quantity: 100, water: 88.9, carbs: 10, protein: 0.9, fat: 0.2, fiber: 2.8, calories100g: 45.4, density: 0.45, caloriesKg: 454, densityType: "Low" },
  { name: "Blackberry", quantity: 100, water: 88.5, carbs: 9.6, protein: 1.4, fat: 0.5, fiber: 5.3, calories100g: 48.5, density: 0.49, caloriesKg: 485, densityType: "Low" },
  { name: "Plum", quantity: 100, water: 88, carbs: 11, protein: 0.7, fat: 0.3, fiber: 1.5, calories100g: 49.5, density: 0.50, caloriesKg: 495, densityType: "Low" },
  { name: "Orange", quantity: 100, water: 87.2, carbs: 11.8, protein: 0.9, fat: 0.1, fiber: 2.4, calories100g: 51.7, density: 0.52, caloriesKg: 517, densityType: "Low" },
  { name: "Apricot", quantity: 100, water: 87.2, carbs: 11, protein: 1.4, fat: 0.4, fiber: 2, calories100g: 53.2, density: 0.53, caloriesKg: 532, densityType: "Low" },
  { name: "Pineapple", quantity: 100, water: 86.3, carbs: 13.1, protein: 0.5, fat: 0.1, fiber: 1.4, calories100g: 55.3, density: 0.55, caloriesKg: 553, densityType: "Low" },
  { name: "Raspberry", quantity: 100, water: 86.2, carbs: 11.9, protein: 1.2, fat: 0.7, fiber: 6.5, calories100g: 58.7, density: 0.59, caloriesKg: 587, densityType: "Low" },
  { name: "Apple", quantity: 100, water: 85.5, carbs: 14, protein: 0.3, fat: 0.2, fiber: 2.4, calories100g: 59, density: 0.59, caloriesKg: 590, densityType: "Low" },
  { name: "Pear", quantity: 100, water: 84.3, carbs: 15.2, protein: 0.4, fat: 0.1, fiber: 3.1, calories100g: 63.3, density: 0.63, caloriesKg: 633, densityType: "Low" },
  { name: "Blueberry", quantity: 100, water: 84.5, carbs: 14.5, protein: 0.7, fat: 0.3, fiber: 2.4, calories100g: 63.5, density: 0.64, caloriesKg: 635, densityType: "Low" },
  { name: "Mango", quantity: 100, water: 83.8, carbs: 15, protein: 0.8, fat: 0.4, fiber: 1.6, calories100g: 66.8, density: 0.67, caloriesKg: 668, densityType: "Low" },
  { name: "Kiwi", quantity: 100, water: 83.8, carbs: 14.7, protein: 1, fat: 0.5, fiber: 3, calories100g: 67.3, density: 0.67, caloriesKg: 673, densityType: "Low" },
  { name: "Cherries", quantity: 100, water: 82.8, carbs: 16, protein: 1, fat: 0.2, fiber: 2.1, calories100g: 69.8, density: 0.70, caloriesKg: 698, densityType: "Low" },
  { name: "Lychee", quantity: 100, water: 81.8, carbs: 17, protein: 0.8, fat: 0.4, fiber: 1.3, calories100g: 74.8, density: 0.75, caloriesKg: 748, densityType: "Low" },
  { name: "Grapes", quantity: 100, water: 81.3, carbs: 18, protein: 0.6, fat: 0.1, fiber: 1, calories100g: 75.3, density: 0.75, caloriesKg: 753, densityType: "Low" },
  { name: "Guava", quantity: 100, water: 82.4, carbs: 14, protein: 2.6, fat: 1, fiber: 5.5, calories100g: 75.4, density: 0.75, caloriesKg: 754, densityType: "Low" },
  { name: "Potato", quantity: 100, water: 80.9, carbs: 17, protein: 2, fat: 0.1, fiber: 2.2, calories100g: 76.9, density: 0.77, caloriesKg: 769, densityType: "Low" },
  { name: "Chiku (Sapota)", quantity: 100, water: 80, carbs: 18, protein: 1, fat: 1, fiber: 5.5, calories100g: 85, density: 0.85, caloriesKg: 850, densityType: "Low" },
  { name: "Pomegranate", quantity: 100, water: 80.1, carbs: 17, protein: 1.7, fat: 1.2, fiber: 4, calories100g: 85.6, density: 0.86, caloriesKg: 856, densityType: "Low" },
  { name: "Banana", quantity: 100, water: 77.6, carbs: 21, protein: 1.1, fat: 0.3, fiber: 2.6, calories100g: 91.1, density: 0.91, caloriesKg: 911, densityType: "Low" },

  // ===== PROTEIN FOODS =====
  { name: "Lentil Sprouts", quantity: 100, water: 75.6, carbs: 18, protein: 6, fat: 0.4, fiber: 4, calories100g: 99.6, density: 1.00, caloriesKg: 996, densityType: "Low" },
  { name: "Rice (Boiled)", quantity: 100, water: 69, carbs: 28, protein: 2.7, fat: 0.3, fiber: 0.4, calories100g: 125.5, density: 1.26, caloriesKg: 1255, densityType: "Low" },
  { name: "Tofu", quantity: 100, water: 74, carbs: 6, protein: 14, fat: 6, fiber: 1, calories100g: 134, density: 1.34, caloriesKg: 1340, densityType: "Low" },
  { name: "Egg (Whole)", quantity: 100, water: 75.3, carbs: 1.1, protein: 13, fat: 10.6, fiber: 0, calories100g: 151.8, density: 1.52, caloriesKg: 1518, densityType: "Low" },
  { name: "Chicken Breast", quantity: 100, water: 65.4, carbs: 0, protein: 31, fat: 3.6, fiber: 0, calories100g: 156.4, density: 1.56, caloriesKg: 1564, densityType: "Low" },

  // ===== MODERATE =====
  { name: "Avocado", quantity: 100, water: 75, carbs: 9, protein: 2, fat: 14, fiber: 7, calories100g: 170, density: 1.7, caloriesKg: 1700, densityType: "Moderate" },
  { name: "Chickpeas", quantity: 100, water: 61, carbs: 27, protein: 9, fat: 3, fiber: 8, calories100g: 171, density: 1.71, caloriesKg: 1710, densityType: "Moderate" },
  { name: "Fish (Salmon)", quantity: 100, water: 66.2, carbs: 0, protein: 20.4, fat: 13.4, fiber: 0, calories100g: 202.2, density: 2.02, caloriesKg: 2022, densityType: "Moderate" },
  { name: "Paneer", quantity: 100, water: 60, carbs: 0, protein: 18, fat: 22, fiber: 0, calories100g: 270, density: 2.7, caloriesKg: 2700, densityType: "Moderate" },

  // ===== HIGH CALORIE DENSITY =====
  { name: "Pumpkin Seeds", quantity: 100, water: 21, carbs: 15, protein: 19, fat: 45, fiber: 6, calories100g: 541, density: 5.41, caloriesKg: 5410, densityType: "High" },
  { name: "Flax Seeds", quantity: 100, water: 10.5, carbs: 29, protein: 18.3, fat: 42.2, fiber: 27.3, calories100g: 569, density: 5.69, caloriesKg: 5690, densityType: "High" },
  { name: "Almonds", quantity: 100, water: 6.9, carbs: 22, protein: 21.2, fat: 49.9, fiber: 12.5, calories100g: 621.9, density: 6.22, caloriesKg: 6219, densityType: "High" },
  { name: "Walnuts", quantity: 100, water: 5.6, carbs: 14, protein: 15.2, fat: 65.2, fiber: 6.7, calories100g: 703.6, density: 7.04, caloriesKg: 7036, densityType: "High" }

];


