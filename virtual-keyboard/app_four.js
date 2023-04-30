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
  itemBracketRight: "]",
  itemReverseSlash: "\\",
  itemDel: "DEL"
};

const CssClasses = {
  WRAPPER: "keyboard__wrapper",
  KEYBOARD: "keyboard__contaner",
  CONTENT: "keyboard__content",
  INPUT: "keyboard__text",
  SYMBOLS: "keyboard__content symbols",
  CONTROL_KEY: "control-key",
  TOP_LEFT_SYMBOL: "top-left",
  CENTER_SYMBOL: "centered",
  BACKSPACE: "backspace",
  TAB: "tab",
  CAPS_LOCK: "caps-lock",
  DEL: "del",
  ENTER: "enter",
  SHIFT: "shift",
  SMALL_SHIFT: "control-key",  
  CTRL: "ctrl",   
  SPACE: "space",  
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


const buttonTab = buttons.itemTab;
buttonTab.classList.add(CssClasses.CONTROL_KEY);
buttonTab.classList.add(CssClasses.TAB);

const buttonDel = buttons.itemDel;
buttonDel.classList.add(CssClasses.CONTROL_KEY);
buttonDel.classList.add(CssClasses.DEL);


const keyToRemove = "itemReverseSlash"; // Замените это свойство на свой ключ объекта, который вы хотите удалить
const buttonToRemove = buttons[keyToRemove];
if (buttonToRemove) {
  buttonToRemove.remove();
  delete lineSecondJSON[keyToRemove];
}

const newButtonReverseSlash = document.createElement("button");
newButtonReverseSlash.className = CssClasses.SYMBOLS;
newButtonReverseSlash.innerHTML = "\\";

const divTopSymbol = document.createElement("span");
  divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
  divTopSymbol.innerHTML = "/";
  newButtonReverseSlash.appendChild(divTopSymbol);

keyboard.insertBefore(newButtonReverseSlash, buttons.itemDel); // вставляем кнопку перед кнопкой "itemW"
buttons.itemReverseSlash = newButtonReverseSlash;

Object.values(buttons).forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("key-highlights");
  });
});

document.addEventListener("keydown", event => {
  const keyName = event.key.toUpperCase();
  const button = buttons[`item${keyName}`];  
  if (button) {    
    button.classList.add("key-highlights");
    console.log(button);
  }  
  if (event.key === "Delete" && buttons.itemDel) {
    buttons.itemDel.classList.add("key-highlights");
  }
  if (event.key === "\\" && buttons.itemReverseSlash) {
    buttons.itemReverseSlash.classList.add("key-highlights");
  }


});

document.addEventListener("keydown", event => {
  const keyName = event.key;
  const button = Object.values(buttons).find(b => b.innerText === keyName);
  if (button) {
    button.classList.add("key-highlights");
  }
});


/*
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
*/