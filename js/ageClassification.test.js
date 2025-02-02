import { ageClassification } from "./ageClassification.js";

test("ageClassification", () => {
  expect(ageClassification(-1)).toBe(null);
  expect(ageClassification(0)).toBe("Детство");
  expect(ageClassification(1)).toBe("Детство");
  expect(ageClassification(24)).toBe("Детство");
  expect(ageClassification(24.01)).toBe("Молодость");
  expect(ageClassification(44)).toBe("Молодость");
  expect(ageClassification(44.01)).toBe("Зрелость");
  expect(ageClassification(65)).toBe("Зрелость");
  expect(ageClassification(65.1)).toBe("Старость");
  expect(ageClassification(75)).toBe("Старость");
  expect(ageClassification(75.01)).toBe("Долголетие");
  expect(ageClassification(90)).toBe("Долголетие");
  expect(ageClassification(90.01)).toBe("Рекорд");
  expect(ageClassification(122)).toBe("Рекорд");
  expect(ageClassification(122.01)).toBe(null);
  expect(ageClassification(150)).toBe(null);
});
