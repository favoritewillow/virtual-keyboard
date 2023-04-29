
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
  
 /* let addButtonContent = (lineSecondJSON) => {  
    let result = "";
    for (let i = 0; i < lineSecondJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = CssClasses.CONTENT;
      buttonContent.innerText = `${lineSecondJSON[i]}`;
      document.addEventListener("keydown", function (event) {        
        if (event.key.toUpperCase() === lineSecondJSON[i].toUpperCase()) {        
          buttonContent.classList.add("key-highlights");
        }
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  keyboard.innerHTML += addButtonContent(lineSecondJSON);
  console.log(addButtonContent(lineSecondJSON));
  const buttons = {};

lineSecondJSON.forEach(key => {
  const buttonContent = document.createElement("button");
  buttonContent.className = CssClasses.CONTENT;
  buttonContent.innerText = key;
  keyboard.appendChild(buttonContent);
  buttons[key.toUpperCase()] = buttonContent;
});

document.addEventListener("keydown", function (event) {      
    if (event.key.toUpperCase() === key.toUpperCase()) {        
      buttons[key.toUpperCase()].classList.add("key-highlights");
    }      
  });

  document.addEventListener("keyup", function (event) {       
    if (event.key.toUpperCase() === key.toUpperCase()) {
      buttons[key.toUpperCase()].classList.remove("key-highlights");
    }      
  });
});
  document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase(); 
    if (key in buttons) {
      buttons[key].classList.add("key-highlights");
    }
  });

  document.addEventListener("keyup", function(event) {   
    const key = event.key.toLowerCase(); 
    if (key in buttons) {
      buttons[key].classList.remove("key-highlights");
    }
  });*/

const buttons = {};

lineSecondJSON.forEach(key => {
  const buttonContent = document.createElement("button");
  buttonContent.className = CssClasses.CONTENT;
  buttonContent.innerText = key;
  keyboard.appendChild(buttonContent);
  buttons[key] = buttonContent;
});


  document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const key = event.key.toUpperCase();
  if (buttons[key]) {
    buttons[key].classList.add("key-highlights");
  }
}

 /* document.addEventListener("keyup", function(event) {
    const key = event.key.toUpperCase();
    if (buttons[key]) {
      buttons[key].classList.remove("key-highlights");
    }
  });*/



       
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

  document.addEventListener("keydown", function (event) {       
    if (event.key === "Shift") {
      buttonShift.classList.add("key-highlights");
    } else {
      buttonShift.classList.remove("key-highlights");
    }       
  })

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

  document.addEventListener("keydown", function (event) {       
    if (event.key === "ArrowUp") {
      buttonArrowUp.classList.add("key-highlights");
    }      
  })

  document.addEventListener("keyup", function (event) {       
    if (event.key === "ArrowUp") {
      buttonArrowUp.classList.remove("key-highlights");
    }      
  })

  const buttonSmallShift = document.createElement("button"); 
  buttonSmallShift.className = CssClasses.SMALL_SHIFT;
  buttonSmallShift.innerText = "Shift";
  keyboard.appendChild(buttonSmallShift); 

  document.addEventListener("keydown", function (event) {       
    if (event.key === "Shift") {
      buttonSmallShift.classList.add("key-highlights");
    } else {
      buttonSmallShift.classList.remove("key-highlights");
    }       
  })
  

}

function fifthLine() {
  const buttonCtrlLeft = document.createElement("button"); 
  buttonCtrlLeft.className = CssClasses.CTRL;
  buttonCtrlLeft.innerText = "Ctrl";
  keyboard.appendChild(buttonCtrlLeft); 

  document.addEventListener("keydown", function (event) {       
    if (event.key === "Control") {
      buttonCtrlLeft.classList.add("key-highlights");
    } else {
      buttonCtrlLeft.classList.remove("key-highlights");
    }       
  })

  const buttonWin = document.createElement("button"); 
  buttonWin.className = CssClasses.WIN_ALT_ICON;
  buttonWin.innerText = "Win";
  keyboard.appendChild(buttonWin); 

  document.addEventListener("keydown", function (event) {    
    if (event.key === "Meta") {
      buttonWin.classList.add("key-highlights");
    } else {
      buttonWin.classList.remove("key-highlights");
    }       
  })

  const buttonAltLeft = document.createElement("button"); 
  buttonAltLeft.className = CssClasses.WIN_ALT_ICON;
  buttonAltLeft.innerText = "Alt";
  keyboard.appendChild(buttonAltLeft); 

 document.addEventListener("keydown", function (event) {   
    console.log(event); 
    if (event.key === "Alt") {
      buttonAltLeft.classList.add("key-highlights");
    } else {
      buttonAltLeft.classList.remove("key-highlights");
    }       
  })

  const buttonSpace = document.createElement("button"); 
  buttonSpace.className = CssClasses.SPACE;
  buttonSpace.innerText = "";
  keyboard.appendChild(buttonSpace); 

  document.addEventListener("keydown", function (event) {    
    if (event.key === " ") {
      buttonSpace.classList.add("key-highlights");
    } else {
      buttonSpace.classList.remove("key-highlights");
    }       
  })

  const buttonAltRight = document.createElement("button"); 
  buttonAltRight.className = CssClasses.WIN_ALT_ICON;
  buttonAltRight.innerText = "Alt";
  keyboard.appendChild(buttonAltRight);

  document.addEventListener("keydown", function (event) {    
    if (event.key === "Alt") {
      buttonAltRight.classList.add("key-highlights");
    } else {
      buttonAltRight.classList.remove("key-highlights");
    }       
  })


  const buttonCtrlRight = document.createElement("button"); 
  buttonCtrlRight.className = CssClasses.CTRL;
  buttonCtrlRight.innerText = "Ctrl";
  keyboard.appendChild(buttonCtrlRight); 

  document.addEventListener("keydown", function (event) {
    if (event.key === "Control") {
      buttonCtrlRight.classList.add("key-highlights");
    } else {
      buttonCtrlRight.classList.remove("key-highlights");
    }       
  })


  const buttonArrowLeft = document.createElement("button"); 
  buttonArrowLeft.className = CssClasses.WIN_ALT_ICON;
  buttonArrowLeft.innerHTML = "<img src='images/arrow-left.svg'>";
  keyboard.appendChild(buttonArrowLeft); 

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      buttonArrowLeft.classList.add("key-highlights");
    } else {
      buttonArrowLeft.classList.remove("key-highlights");
    }       
  })
  

  const buttonArrowDown = document.createElement("button"); 
  buttonArrowDown.className = CssClasses.WIN_ALT_ICON;
  buttonArrowDown.innerHTML = "<img src='images/arrow-down.svg'>";
  keyboard.appendChild(buttonArrowDown); 

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      buttonArrowDown.classList.add("key-highlights");
    } else {
      buttonArrowDown.classList.remove("key-highlights");
    }       
  })


  const buttonArrowRight = document.createElement("button"); 
  buttonArrowRight.className = CssClasses.WIN_ALT_ICON;
  buttonArrowRight.innerHTML = "<img src='images/arrow-right.svg'>";
  keyboard.appendChild(buttonArrowRight); 
 

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      buttonArrowRight.classList.add("key-highlights");
    } else {
      buttonArrowRight.classList.remove("key-highlights");
    }    
  })

  

}





firstLine();
secondLine();
thirdLine();
fourthLine();
fifthLine();
