export function ageClassification(num) {
  return num < 0
    ? null
    : num <= 24
    ? "Детство"
    : num <= 44
    ? "Молодость"
    : num <= 65
    ? "Зрелость"
    : num <= 75
    ? "Старость"
    : num <= 90
    ? "Долголетие"
    : num <= 122
    ? "Рекорд"
    : null;
}

