import { Screen } from "./screen.js";
import { InputProcessor } from "./inputs/userInput.js";

// let screen = new Screen();
// console.log(screen.getScreenFunction("onShift"));
// screen.changeScreenFunctions("onShift");
// console.log(screen.getScreenFunction("onShift"));
class Calculator{
    constructor(){
        this.inputProcessor = new InputProcessor();
    }
}

let calc = new Calculator();