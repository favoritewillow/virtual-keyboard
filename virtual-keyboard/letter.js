
const lineFirstTopJSON = [ "~", "!", "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+" ];
const lineFirstCenterJSON = [ "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=" ];

const keys = [ 
 "Backspace",
 "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "DEL",
 "Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER",
 "Shift", "\\", "Z", "X", "C", "V", "B", "N", "M", ".", ",", "/", "", "Shift",
 "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "", "", ""
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

  
  

}




function anotherLines() {
   /*let buttons = {};
 keys.forEach(key => {
    const button = document.createElement("button");
    button.className = CssClasses.CONTENT;
    button.innerText = key;
    keyboard.appendChild(button);
    buttons[key] = button;     
  });

  document.addEventListener("keydown", function(event) {
    const key = event.key.toUpperCase(); // приводим к нижнему регистру
    if (key in buttons) {
      buttons[key].classList.add("key-highlights");
    }
  });

  document.addEventListener("keyup", function(event) {
    console.log(event);
    const key = event.key.toUpperCase(); // приводим к нижнему регистру
    if (key in buttons) {
      buttons[key].classList.remove("key-highlights");
    }
  });*/
  

  let addButtonContent = (keys) => {  
    let result = "";
    for (let i = 0; i < keys.length; i++) {        
      if (i === 0) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.BACKSPACE;
        buttonContent.innerText = keys[0];
        document.addEventListener("keydown", function (event) {       
          if (event.key === "Backspace") {
            buttonContent.classList.add("key-highlights");
          } else {
            buttonContent.classList.remove("key-highlights");
          }       
        })

      result += buttonContent.outerHTML;

      } else if (i === 1) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.TAB;
        buttonContent.innerText = keys[1];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[1];
      });

      result += buttonContent.outerHTML;

      } else if (i === 14) {
        
        const buttonContent = document.createElement("button");
        buttonContent.className = CssClasses.SYMBOLS;
                
        const divTopSymbol = document.createElement("div");
        divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
        divTopSymbol.innerHTML = "/";
        buttonContent.appendChild(divTopSymbol);
        
        const divCenterSymbol = document.createElement("div");
        divCenterSymbol.className = CssClasses.CENTER_SYMBOL;
        divCenterSymbol.innerHTML = "\\";
        buttonContent.appendChild(divCenterSymbol);
        

        buttonContent.addEventListener("click", () => {
          inputText.value = "";
      });

      result += buttonContent.outerHTML;
      } else if (i === 15) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.DEL;
        buttonContent.innerText = keys[15];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[15];
      });

      result += buttonContent.outerHTML;

      } else if (i === 16) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.CAPS_LOCK;
        buttonContent.innerText = keys[16];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[16];
      });

      result += buttonContent.outerHTML;

      } else if (i === 28) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.ENTER;
        buttonContent.innerText = keys[28];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[28];
      });

      result += buttonContent.outerHTML;

      } else if (i === 29) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.SHIFT;
        buttonContent.innerText = keys[29];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[29];
      });

      result += buttonContent.outerHTML;

      } else if (i === 41) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerHTML = "<img src='images/arrow-up.svg'>";
        buttonContent.addEventListener("click", () => {
          inputText.value = "";
      });

      result += buttonContent.outerHTML;

      } else if (i === 42) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.SMALL_SHIFT;
        buttonContent.innerText = keys[42];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[42];
      });

      result += buttonContent.outerHTML;

      } else if (i === 43) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.CTRL;
        buttonContent.innerText = keys[43];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[43];
      });

      result += buttonContent.outerHTML;

      } else if (i === 44) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerText = keys[44];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[44];
      });

      result += buttonContent.outerHTML;

      } else if (i === 45) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerText = keys[45];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[45];
      });

      result += buttonContent.outerHTML;

      } else if (i === 46) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.SPACE;
        buttonContent.innerText = keys[46];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[46];
      });

      result += buttonContent.outerHTML;

      } else if (i === 47) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerText = keys[47];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[47];
      });

      result += buttonContent.outerHTML;

      } else if (i === 48) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.CTRL;
        buttonContent.innerText = keys[48];
        buttonContent.addEventListener("click", () => {
          inputText.value = keys[48];
      });

      result += buttonContent.outerHTML;

      } else if (i === 49) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerHTML = "<img src='images/arrow-left.svg'>";
        buttonContent.addEventListener("click", () => {
          inputText.value = "";
      });

      result += buttonContent.outerHTML;

      } else if (i === 50) {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.WIN_ALT_ICON;
        buttonContent.innerHTML = "<img src='images/arrow-down.svg'>";
        buttonContent.addEventListener("click", () => {
          inputText.value = "";
      });

      result += buttonContent.outerHTML;

      } else if (i === 51) {
        const buttonArrowRight = document.createElement("button"); 
        buttonArrowRight.className = CssClasses.WIN_ALT_ICON;
        buttonArrowRight.innerHTML = "<img src='images/arrow-right.svg'>";
        buttonArrowRight.addEventListener("click", () => {
          inputText.value = "";
      });


      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          buttonArrowRight.classList.add("key-highlights");
        } else {
          buttonArrowRight.classList.remove("key-highlights");
        }       
      })
    
      result += buttonArrowRight.outerHTML;
      
     } else {
        const buttonContent = document.createElement("button"); 
        buttonContent.className = CssClasses.CONTENT;
        buttonContent.innerText = `${keys[i]}`;
        buttonContent.addEventListener("click", () => {
          inputText.value += keys[i];
      });

      result += buttonContent.outerHTML;

      }

      
      
    } 
    return result;


    
  }

  keyboard.innerHTML += addButtonContent(keys);


  document.addEventListener("keydown", function(event) {
    const key = event.key.toUpperCase(); // приводим к нижнему регистру
    if (key in keys) {
      keys.classList.add("key-highlights");
    }
  });

  document.addEventListener("keyup", function(event) {
    console.log(event);
    const key = event.key.toUpperCase(); // приводим к нижнему регистру
    if (key in keys) {
      keys.classList.remove("key-highlights");
    }
  });

  
} 
/*
const changeColorKey = function () {
  buttonContent.classList.add("key-highlights");    
}

const keydown = document.querySelector(CssClasses.CONTENT);
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    buttonContent.classList.add("key-highlights");
  } else {
    buttonContent.classList.remove("key-highlights");
  }   
  //rtconsole.log(event);
})*/



firstLine();
anotherLines()









