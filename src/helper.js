function convertFeet(feet) {
  return feet * 12;
}

export function metricBMI(height, weight) {
  return ((weight / Math.pow(height, 2)) * 10000).toFixed(1);
}

export function imperialBMI(weight, feet, inches) {
  return ((weight / Math.pow(convertFeet(feet) + inches, 2)) * 703).toFixed(1);
}

export function lowerBMI(height) {
  return ((18.5 / 10000) * Math.pow(height, 2)).toFixed(1);
}

export function higherBMI(height) {
  return ((24.9 / 10000) * Math.pow(height, 2)).toFixed(1);
}

export function getResults(BMI) {
  if (BMI < 18.5) return "Underweight";
  else if (BMI >= 18.5 && BMI <= 24.9) return "Healthy weight";
  else if (BMI >= 25 && BMI <= 29.9) return "Overweight";
  else return "Obese";
}
