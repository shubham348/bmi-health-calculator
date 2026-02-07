export function calculateBodyFat({
  gender,
  height,
  waist,
  neck,
  hip,
  weight
}) {
  let bodyFatPercent = 0;

  if (gender === "male") {
    bodyFatPercent =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450;
  } else {
    bodyFatPercent =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hip - neck) +
          0.221 * Math.log10(height)) -
      450;
  }

  const fatMass = (bodyFatPercent / 100) * weight;
  const leanMass = weight - fatMass;

  return {
    bodyFatPercent: Number(bodyFatPercent.toFixed(1)),
    fatMass: Number(fatMass.toFixed(1)),
    leanMass: Number(leanMass.toFixed(1))
  };
}

export function getBodyFatCategory(percent, gender) {
  if (gender === "male") {
    if (percent < 6) return "Essential Fat";
    if (percent < 14) return "Athletes";
    if (percent < 18) return "Fitness";
    if (percent < 25) return "Average";
    return "Obese";
  } else {
    if (percent < 14) return "Essential Fat";
    if (percent < 21) return "Athletes";
    if (percent < 25) return "Fitness";
    if (percent < 32) return "Average";
    return "Obese";
  }
}
