// Lean Body Mass
export function calculateLeanBodyMass(weight, bodyFatPercent) {
  const lbm = weight * (1 - bodyFatPercent / 100);
  const fatMass = weight - lbm;

  return {
    leanBodyMass: Number(lbm.toFixed(2)),
    fatMass: Number(fatMass.toFixed(2))
  };
}
