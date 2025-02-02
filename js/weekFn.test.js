import { weekFn } from "./weekFn";

test("weekFn", () => {
  expect(weekFn(1)).toBe("Понедельник");
  expect(weekFn(2)).toBe("Вторник");
  expect(weekFn(3)).toBe("Среда");
  expect(weekFn(4)).toBe("Четверг");
  expect(weekFn(5)).toBe("Пятница");
  expect(weekFn(6)).toBe("Суббота");
  expect(weekFn(7)).toBe("Воскресенье");
  //
  //
  //
  expect(weekFn(9)).toBe(null);
  expect(weekFn(1.5)).toBe(null);
  expect(weekFn("2")).toBe(null);
});
