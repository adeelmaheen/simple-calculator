#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
const answer= await inquirer.prompt([
    {
        name: "num_1",
        type: "number",
        message: chalk.bgMagenta("Enter your First_number")
    },
    {
        name: "num_2",
        type: "number",
        message: chalk.bgCyan("Enter your Second_number")

    },
    {
        name: "operators",
        type: "list",
        message: chalk.bgGreen("In which of the operator you want to perform?"),
        choices: ["Division", "Multiplication", "Addition", "Subtraction"]
    },
]);
if(answer.operators === "Division"){
    console.log(chalk.green(answer.num_1 / answer.num_2));
}else if(answer.operators === "Multiplication"){
    console.log(chalk.blue(answer.num_1 * answer.num_2));
}else if(answer.operators === "Addition"){
    console.log(chalk.magenta(answer.num_1 + answer.num_2));
}else if(answer.operators === "Subtraction"){
    console.log(chalk.cyan(answer.num_1 - answer.num_2));

}else{
    console.log(chalk.red("Enter the given operator!"));

}
  

