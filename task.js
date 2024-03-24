#! /usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { type: "list",
        name: "oprator",
        message: "Enter which currency you want to change",
        choices: ["USD Dollar", "RIYAL", "AED", "Omani Rial"] },
    {
        type: "number",
        name: "numberone",
        message: "Enter your Amount",
    }
]);
const { oprator, numberone } = ans;
let result;
switch (oprator) {
    case "USD Dollar":
        result = numberone * 278.25;
        console.log("Thank you for using our program");
        break;
    case "RIYAL":
        result = numberone * 74.19;
        console.log("Thank you for using our program");
        break;
    case "AED":
        result = numberone * 76.22;
        console.log("Thank you for using our program");
        break;
    case "Omani Rial":
        result = numberone * 722.79;
        console.log("Thank you for using our program");
        break;
    default:
        console.log("choose correct oprator");
}
console.log(`${numberone}, ${oprator}, ${result} into PKR `);
