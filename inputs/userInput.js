import { Screen } from "../screen.js";

export class InputProcessor{
    static commands = ["=","delete","clear","down","right",
                        "select","left","up","shift","alpha",
                        "settings","on/off","mode","unit"
                        ];    
    constructor(){
        this.screen = new Screen();
        this.buttons = document.querySelectorAll("button");
        this.addEventListeners();
    }

    addEventListeners(){
        this.buttons.forEach((button)=>{
            button.addEventListener("click",(event)=>{
                let userInput = event.target.value;
                this.processInput(userInput);
            })
        });
    }


    processInput(userInput){
        if(InputProcessor.commands.includes(userInput)){
            this.doCommand(userInput);
            return;
        }
        this.screen.writeOnScreen(userInput);
    }

    doCommand(commandName){
        if (commandName === "on/off") {
            this.screen.changeScreenFunctions("isOn");
            this.screen.turnOnOrOff();
            return;
        }if(!this.screen.screenFunctions["isOn"]) return;
        switch(commandName){
            case "=":
                break;
            case "delete":
                this.screen.delete();
                break;
            case "clear":
                this.screen.clearScreen();
                break;
            case "up":
                break;
            case "down":
                break;
            case "right":
                break;
            case "left":
                break;
            case "shift":
                break;
            case "alpha":
                break;
            case "mode":
                break;
            case "unit":     
                break;
            case "settings":
                break;
        }
    }
}
   