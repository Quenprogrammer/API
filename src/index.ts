import * as readline from "readline";
import {testLoop} from "./testloop/test-loop";

const rl=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
console.log("select an option:");
console.log("1. print city districts")
console.log("2. print city districts")

rl.question("Enter your choice: ", async (Choice) => {
    switch (parseInt(Choice)) {
        case 1:
            console.log("You selected option1 ");
            await testLoop();
            break;
        case 2:
            console.log("You selected option2 ");
            break;
        default:
            console.log("invalid option")

    }
    rl.close();
});