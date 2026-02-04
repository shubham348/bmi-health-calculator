export function calculateCalories({ age, weight, height, gender }) {
  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  return Math.round(bmr * 1.2);
}

export function proteinRequirement(weight) {
  return Math.round(weight * 1.6);
}
