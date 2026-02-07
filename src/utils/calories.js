export function calculateCalories({ gender, age, height, weight, activity }) {
  // Mifflin-St Jeor Equation
  let bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const maintenanceCalories = Math.round(bmr * activity);

  return {
    maintenance: maintenanceCalories,
    weightLoss: maintenanceCalories - 500,
    weightGain: maintenanceCalories + 500
  };
}

export function proteinRequirement(weight) {
  return Math.round(weight * 1.6);
}

export function calculateProtein(weight, goal = "maintain") {
  let multiplier = 1.5; // maintain

  if (goal === "loss") multiplier = 1.8;   // preserve muscle
  if (goal === "gain") multiplier = 2.0;   // muscle growth

  return Math.round(weight * multiplier);
}
