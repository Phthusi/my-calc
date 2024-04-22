export class Screen{
    constructor(){
        this.screenFunctions = {
                                "onShift":false,
                                "onAlpha":false,
                                "onUnit":false,
                                "isOn":false,
                                "onSettings":false,
                                "onSettings":false,
                                "onSettings":false,
                                "onMode":false
                            };
        this.activeScreen = 
        document.querySelector(".active-screen");

        this.topScreenSection = 
        document.querySelector(".top-screen-section");
        this.cursor = document.createElement("span");
        this.cursor.setAttribute("id","cursor");
        this.cursor.innerHTML = "|";
        
    }

    getScreenFunction(functionName){
        return this.screenFunctions[functionName];
    }

    changeScreenFunctions(screenFunctionName){
        this.screenFunctions[screenFunctionName] = 
        this.screenFunctions[screenFunctionName]
        === true ? false:true;
    }

    turnTheScreenOn(){
        this.activeScreen.setAttribute("class", "onScreen");
    }

    turnTheScreenOff(){
        this.activeScreen.removeAttribute("class");
    }

    addCursor(){
        this.topScreenSection.appendChild(this.cursor);       
    }

    removeCursor(){
        cursor.remove();
    }

    turnOn(){
        this.addCursor();
        this.turnTheScreenOn();
    }

    clearScreen(){
        this.topScreenSection.innerHTML = "";
        this.addCursor();
    }

    turnOff(){
        this.clearScreen();
        this.turnTheScreenOff();       
    }

    delete(){
        /*this is the simple version of the delete functionality */
        this.removeCursor();
        let text = this.topScreenSection.innerHTML;
        if(text.length===0){
            this.addCursor();
            return;
        }
        //needs change
        this.topScreenSection.innerHTML = text.substring(0,text.length-1);
        this.addCursor();
    }

    writeOnScreen(text){
        this.removeCursor();
        this.topScreenSection.innerHTML += text;
        this.addCursor();              
    }

    turnOnOrOff(){
        if(this.screenFunctions["isOn"]){
            this.turnOn();
            return;
        }
        this.turnOff();
    }
}