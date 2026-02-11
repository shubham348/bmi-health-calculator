export function calculateBMR({ weight, height, age, gender }) {
  // Mifflin-St Jeor Formula
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}
