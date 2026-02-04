export function calculateBMI(weight, height) {
  const h = height / 100;
  return (weight / (h * h)).toFixed(1);
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export function healthyWeightRange(height) {
  const h = height / 100;
  const min = (18.5 * h * h).toFixed(1);
  const max = (24.9 * h * h).toFixed(1);
  return { min, max };
}

export function bmiPrime(bmi) {
  return (bmi / 25).toFixed(2);
}
