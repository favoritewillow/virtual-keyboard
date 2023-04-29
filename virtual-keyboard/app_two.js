const lineFirstTopJSON = [ "~", "!", "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+" ];
const lineFirstCenterJSON = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ];

const keys = [ 
 
 "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL",
 "Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER",
 "Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ".", ",", "/", "", "Shift",
 "Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "", "", ""
 ];

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

  for (let i = 1; i < lineFirstCenterJSON.length; i++) {
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


function anotherLines() {
  let buttons = {};
  keys.forEach(key => {
     const button = document.createElement("button");
     button.className = CssClasses.CONTENT;
     button.innerText = key;
     keyboard.appendChild(button);
     buttons[key] = button;   
     
   });
 
   document.addEventListener("keydown", function(event) {
     const key = event.key; 
     if (key in buttons) {
       buttons[key].classList.add("key-highlights");
     }
   });
 
   document.addEventListener("keyup", function(event) {
     console.log(event);
     const key = event.key; 
     if (key in buttons) {
       buttons[key].classList.remove("key-highlights");
     }
   });

   



}






  firstLine();
  anotherLines();