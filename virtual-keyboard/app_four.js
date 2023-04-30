const lineSecondJSON = {
  itemTab: "Tab",
  itemQ: "Q",
  itemW: "W",
  itemE: "E",
  itemR: "R",
  itemT: "T",
  itemY: "Y",
  itemU: "U",
  itemI: "I",
  itemO: "O",
  itemP: "P",
  itemBracketLeft: "[",
  itemBracketRight: "]"
};

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

const buttons = {};

for (let key in lineSecondJSON) {
  //console.log(key);
  const buttonContent = document.createElement("button");
  buttonContent.className = CssClasses.CONTENT;
  buttonContent.innerText = `${lineSecondJSON[key]}`;
  keyboard.appendChild(buttonContent);
  buttons[key] = buttonContent;
};

Object.values(buttons).forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("key-highlights");
  });
});

document.addEventListener("keydown", event => {
  console.log(event.key);
  const keyName = event.key;
  const button = buttons[`item${keyName.toUpperCase()}`];  
  if (button) {    
    button.classList.add("key-highlights");
    console.log(button);
  }  
});

document.addEventListener("keydown", event => {
  const keyName = event.key;
  const button = Object.values(buttons).find(b => b.innerText === keyName);
  if (button) {
    button.classList.add("key-highlights");
  }
});


/*document.addEventListener("keydown", function (event) {
  console.log(event.key);
  const keye = event.key.toUpperCase(); 
  if (keye in buttons) {
    buttons[keye].classList.add("key-highlights");
  }
});*/

/*document.addEventListener("keydown", function (event) {   
  console.log(event);  
  if (event.key === "Q") {
    buttons["Q"].classList.add("key-highlights");
  } 
});*/

