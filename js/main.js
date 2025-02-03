import { ageClassification } from "./function/ageClassification.js";
import { weekFn } from "./function/weekFn.js";

const task = 1;

switch (task) {
  //

  case 1:
    console.log("    -1 :", ageClassification(-1)); // -1 : null
    console.log("     0 :", ageClassification(0)); // 0 : null
    console.log("     1 :", ageClassification(1)); // 1 : Детство
    console.log("    24 :", ageClassification(24)); // 24 : Детство
    console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодость
    console.log("    44 :", ageClassification(44)); // 44 : Молодость
    console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрелость
    console.log("    65 :", ageClassification(65)); // 65 : Зрелость
    console.log("  65.1 :", ageClassification(65.1)); // 65.1 : Старость
    console.log("    75 :", ageClassification(75)); // 75 : Старость
    console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : Долголетие
    console.log("    90 :", ageClassification(90)); // 90 : Долголетие
    console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
    console.log("   122 :", ageClassification(122)); // 122 : Рекорд
    console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
    console.log("   150 :", ageClassification(150)); // 150 : null
    break;
  //

  case 2:
    console.log(weekFn(1)); // 'Понедельник'
    console.log(weekFn(3)); // 'Среда'
    console.log(weekFn(7)); // 'Воскресенье'
    console.log(weekFn(9)); // null
    console.log(weekFn(1.5)); // null
    console.log(weekFn("2")); // null
}
