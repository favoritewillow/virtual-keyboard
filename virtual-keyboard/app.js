

const lineFirstTopJSON = [ "!", "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+" ];
const lineFirstCenterJSON = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ];
const lineSecondJSON = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]" ];
const lineThirdJSON = [ "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'" ];
const lineFourthJSON = [ "\\", "Z", "X", "C", "V", "B", "N", "M", ".", ",", "/" ];

const CssClasses = {
  WRAPPER: "keyboard__wrapper",
  KEYBOARD: "keyboard__contaner",
  CONTENT: "keyboard__content",
  INPUT: "keyboard__text",
  SYMBOLS: "keyboard__content symbols",
  SYMBOL_KEY_LEFT: "keyboard__content symbols control-key",
  TOP_LEFT_SYMBOL: "top-left",
  CENTER_SYMBOL: "centered",
  BACKSPACE: "keyboard__content backspace control-key",
  TAB: "keyboard__content tab control-key",
  CAPS_LOCK: "keyboard__content caps-lock control-key",
  DEL: "keyboard__content del control-key",
  ENTER: "keyboard__content enter control-key",
  SHIFT: "keyboard__content shift control-key",
  SMALL_SHIFT: "keyboard__content control-key",  
  CTRL: "keyboard__content ctrl control-key", 
  WIN_ALT_ICON: "keyboard__content control-key", 
  SPACE: "keyboard__content space",  
}

const wrapper = document.createElement("div");
  wrapper.className = CssClasses.WRAPPER;
  document.body.append(wrapper); 

  const inputText = document.createElement("input");
  inputText.className = CssClasses.INPUT;
  wrapper.appendChild(inputText); 

  const keyboard = document.createElement("div");
  keyboard.className = CssClasses.KEYBOARD;
  wrapper.appendChild(keyboard); 

function firstLine() {
  const buttonLeftSymbol = document.createElement("button");
  buttonLeftSymbol.className = CssClasses.SYMBOL_KEY_LEFT;
  keyboard.appendChild(buttonLeftSymbol); 
  
  const divTopSymbol = document.createElement("div");
  divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
  divTopSymbol.innerHTML = "~";
  buttonLeftSymbol.appendChild(divTopSymbol);

  const divCenterSymbol = document.createElement("div");
  divCenterSymbol.className = CssClasses.CENTER_SYMBOL;
  divCenterSymbol.innerHTML = "`";
  buttonLeftSymbol.appendChild(divCenterSymbol);

  for (let i = 0; i < lineFirstCenterJSON.length; i++) {
    const buttonSymbol = document.createElement("button");
    buttonSymbol.className = CssClasses.SYMBOLS;
    
    const divTopSymbol = document.createElement("div");
    divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
    divTopSymbol.innerText = lineFirstTopJSON[i];
    buttonSymbol.appendChild(divTopSymbol);
  
    const divCenterSymbol = document.createElement("div");
    divCenterSymbol.className = CssClasses.CENTER_SYMBOL;
    divCenterSymbol.innerText = lineFirstCenterJSON[i];
    buttonSymbol.appendChild(divCenterSymbol); 
    
    buttonSymbol.addEventListener("click", () => {
      inputText.value += lineFirstCenterJSON[i];
    });
    
    keyboard.appendChild(buttonSymbol);
  }



  const buttonBackspace = document.createElement("button"); 
  buttonBackspace.className = CssClasses.BACKSPACE;
  buttonBackspace.innerText = "Backspace";
  keyboard.appendChild(buttonBackspace); 


}

function secondLine() {     
  
  const buttonTab = document.createElement("button"); 
  buttonTab.className = CssClasses.TAB;
  buttonTab.innerText = "Tab";
  keyboard.appendChild(buttonTab); 
  
  let addButtonContent = (lineSecondJSON) => {  
    let result = "";
    for (let i = 0; i < lineSecondJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = CssClasses.CONTENT;
      buttonContent.innerText = `${lineSecondJSON[i]}`;
      buttonContent.addEventListener("click", () => {
        inputText.value += lineSecondJSON[i];
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  keyboard.innerHTML += addButtonContent(lineSecondJSON);
     
  const buttonSymbol = document.createElement("button");
  buttonSymbol.className = CssClasses.SYMBOLS;
  keyboard.appendChild(buttonSymbol); 
  
  const divTopSymbol = document.createElement("div");
  divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
  divTopSymbol.innerHTML = "/";
  buttonSymbol.appendChild(divTopSymbol);
  
  const divCenterSymbol = document.createElement("div");
  divCenterSymbol.className = CssClasses.CENTER_SYMBOL;
  divCenterSymbol.innerHTML = "\\";
  buttonSymbol.appendChild(divCenterSymbol);
  
  const buttonDel = document.createElement("button");
  buttonDel.className = CssClasses.DEL;
  buttonDel.innerHTML = "DEL";
  keyboard.appendChild(buttonDel); 
}

function thirdLine() {

  const buttonCapsLock = document.createElement("button"); 
  buttonCapsLock.className = CssClasses.CAPS_LOCK;
  buttonCapsLock.innerText = "Caps Lock";
  keyboard.appendChild(buttonCapsLock); 

  let addButtonContent = (lineThirdJSON) => {  
    let result = "";
    for (let i = 0; i < lineThirdJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = CssClasses.CONTENT;
      buttonContent.innerText = `${lineThirdJSON[i]}`;
      buttonContent.addEventListener("click", () => {
        inputText.value += lineThirdJSON[i];
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  keyboard.innerHTML += addButtonContent(lineThirdJSON);

  const buttonEnter = document.createElement("button"); 
  buttonEnter.className = CssClasses.ENTER;
  buttonEnter.innerText = "ENTER";
  keyboard.appendChild(buttonEnter); 

}

function fourthLine() {

  const buttonShift = document.createElement("button"); 
  buttonShift.className = CssClasses.SHIFT;
  buttonShift.innerText = "Shift";
  keyboard.appendChild(buttonShift); 

  let addButtonContent = (lineFourthJSON) => {  
    let result = "";
    for (let i = 0; i < lineFourthJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = CssClasses.CONTENT;
      buttonContent.innerText = `${lineFourthJSON[i]}`;
      buttonContent.addEventListener("click", () => {
        inputText.value += lineFourthJSON[i];
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  keyboard.innerHTML += addButtonContent(lineFourthJSON);

  const buttonArrowUp = document.createElement("button"); 
  buttonArrowUp.className = CssClasses.WIN_ALT_ICON;
  buttonArrowUp.innerHTML = "<img src='images/arrow-up.svg'>";
  keyboard.appendChild(buttonArrowUp); 

  const buttonSmallShift = document.createElement("button"); 
  buttonSmallShift.className = CssClasses.SMALL_SHIFT;
  buttonSmallShift.innerText = "Shift";
  keyboard.appendChild(buttonSmallShift); 

}

function fifthLine() {
  const buttonCtrlLeft = document.createElement("button"); 
  buttonCtrlLeft.className = CssClasses.CTRL;
  buttonCtrlLeft.innerText = "Ctrl";
  keyboard.appendChild(buttonCtrlLeft); 

  const buttonWin = document.createElement("button"); 
  buttonWin.className = CssClasses.WIN_ALT_ICON;
  buttonWin.innerText = "Win";
  keyboard.appendChild(buttonWin); 

  const buttonAltLeft = document.createElement("button"); 
  buttonAltLeft.className = CssClasses.WIN_ALT_ICON;
  buttonAltLeft.innerText = "Alt";
  keyboard.appendChild(buttonAltLeft); 

  const buttonSpace = document.createElement("button"); 
  buttonSpace.className = CssClasses.SPACE;
  buttonSpace.innerText = "";
  keyboard.appendChild(buttonSpace); 

  const buttonAltRight = document.createElement("button"); 
  buttonAltRight.className = CssClasses.WIN_ALT_ICON;
  buttonAltRight.innerText = "Alt";
  keyboard.appendChild(buttonAltRight); 

  const buttonCtrlRight = document.createElement("button"); 
  buttonCtrlRight.className = CssClasses.CTRL;
  buttonCtrlRight.innerText = "Ctrl";
  keyboard.appendChild(buttonCtrlRight); 

  const buttonArrowLeft = document.createElement("button"); 
  buttonArrowLeft.className = CssClasses.WIN_ALT_ICON;
  buttonArrowLeft.innerHTML = "<img src='images/arrow-left.svg'>";
  keyboard.appendChild(buttonArrowLeft); 

  const buttonArrowDown = document.createElement("button"); 
  buttonArrowDown.className = CssClasses.WIN_ALT_ICON;
  buttonArrowDown.innerHTML = "<img src='images/arrow-down.svg'>";
  keyboard.appendChild(buttonArrowDown); 


  const buttonArrowRight = document.createElement("button"); 
  buttonArrowRight.className = CssClasses.WIN_ALT_ICON;
  buttonArrowRight.innerHTML = "<img src='images/arrow-right.svg'>";
  keyboard.appendChild(buttonArrowRight); 

}



firstLine();
secondLine();
thirdLine();
fourthLine();
fifthLine();