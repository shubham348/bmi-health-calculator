export function calculateMacros(calories, proteinPct, carbPct, fatPct) {
  const proteinCalories = (calories * proteinPct) / 100;
  const carbCalories = (calories * carbPct) / 100;
  const fatCalories = (calories * fatPct) / 100;

  return {
    proteinGrams: Number((proteinCalories / 4).toFixed(1)),
    carbGrams: Number((carbCalories / 4).toFixed(1)),
    fatGrams: Number((fatCalories / 9).toFixed(1))
  };
}
