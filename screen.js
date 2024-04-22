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
        this.activeScreen.setAttribute("class", "onScreen");//top-screen-section onScreen
    }

    turnTheScreenOff(){
        this.activeScreen.removeAttribute("class");
    }

    addCursor(){
        this.topScreenSection.innerHTML += 
        this.topScreenSection.innerHTML+"<span id='cursor'>|</span>";       
    }

    removeCursor(){
        let cursor = document.querySelector("#cursor");
        cursor.remove();
    }

    turnOn(){
        this.addCursor();
        this.turnTheScreenOn();
    }

    turnOff(){
        this.removeCursor();
        this.turnTheScreenOff();       
    }

    turnOnOrOff(){
        if(this.screenFunctions["isOn"]){
            this.turnOn();
            return;
        }
        console.log("turning screen on...",this.screenFunctions["isOn"])
        this.turnOff();
    }
}