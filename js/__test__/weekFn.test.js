import { weekFn } from "../function/weekFn";

// test("weekFn", () => {
//   expect(weekFn(1)).toBe("Понедельник");
//   expect(weekFn(2)).toBe("Вторник");
//   expect(weekFn(3)).toBe("Среда");
//   expect(weekFn(4)).toBe("Четверг");
//   expect(weekFn(5)).toBe("Пятница");
//   expect(weekFn(6)).toBe("Суббота");
//   expect(weekFn(7)).toBe("Воскресенье");
//   //
//   //
//   //
//   expect(weekFn(9)).toBe(null);
//   expect(weekFn(1.5)).toBe(null);
//   expect(weekFn("2")).toBe(null);
// });

describe("Tests -  Days of Week Function", () => {
  //

  test("Correct days of Week:", () => {
    const days = [
      { day: 1, expected: "Понедельник" },
      { day: 2, expected: "Вторник" },
      { day: 3, expected: "Среда" },
      { day: 4, expected: "Четверг" },
      { day: 5, expected: "Пятница" },
      { day: 6, expected: "Суббота" },
      { day: 7, expected: "Воскресенье" },
    ];

    days.forEach((item) => {
      console.log(
        `Testing day: ${weekFn(item.day)}, Expected: ${item.expected}`
      );
      expect(weekFn(item.day)).toBe(item.expected);
    });
  });

  //

  test("Incorrect days of Week:", () => {
    const days = [9, 1.4, "2", 0];
    const expected = null;

    days.forEach((item) => {
      console.log(
        `Testing day: ${item}, Expected: ${expected}`
      );
      expect(weekFn(item)).toBe(expected);
    });
  });
});
