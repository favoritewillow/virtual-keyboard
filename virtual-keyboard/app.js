const lineSecondJSON = [   
  "Q", 
  "W", 
  "E", 
  "R", 
  "T", 
  "Y", 
  "U", 
  "I", 
  "O", 
  "P", 
  "[", 
  "]"  
];

const lineThirdJSON = [   
  "A", 
  "S", 
  "D", 
  "F", 
  "G", 
  "H", 
  "J", 
  "K", 
  "L", 
  ";", 
  "'"   
];

const divWrapper = document.createElement("div");
  divWrapper.className = "keyboard__wrapper";
  document.body.append(divWrapper); 

function secondLine() {
    
  const inputText = document.createElement("input");
  inputText.className = "keyboard__text";
  divWrapper.appendChild(inputText); 
  
  const buttonTab = document.createElement("button"); 
  buttonTab.className = "keyboard__content tab left-button";
  buttonTab.innerText = "Tab";
  divWrapper.appendChild(buttonTab); 
  
  let addButtonContent = (lineSecondJSON) => {  
    let result = "";
    for (let i = 0; i < lineSecondJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = "keyboard__content";
      buttonContent.innerText = `${lineSecondJSON[i]}`;
      buttonContent.addEventListener("click", () => {
        inputText.value += lineSecondJSON[i];
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  divWrapper.innerHTML += addButtonContent(lineSecondJSON);
     
  const buttonSymbol = document.createElement("button");
  buttonSymbol.className = "keyboard__content symbols";
  divWrapper.appendChild(buttonSymbol); 
  
  const divTopSymbol = document.createElement("div");
  divTopSymbol.className = "top-left";
  divTopSymbol.innerHTML = "/";
  buttonSymbol.appendChild(divTopSymbol);
  
  const divCenterSymbol = document.createElement("div");
  divCenterSymbol.className = "centered";
  divCenterSymbol.innerHTML = "&bsol;";
  buttonSymbol.appendChild(divCenterSymbol);
  
  const buttonDel = document.createElement("button");
  buttonDel.className = "keyboard__content del right-button";
  buttonDel.innerHTML = "DEL";
  divWrapper.appendChild(buttonDel); 
}

function thirdLine() {

  const buttonCapsLock = document.createElement("button"); 
  buttonCapsLock.className = "keyboard__content caps-lock left-button";
  buttonCapsLock.innerText = "Caps Lock";
  divWrapper.appendChild(buttonCapsLock); 

  let addButtonContent = (lineThirdJSON) => {  
    let result = "";
    for (let i = 0; i < lineThirdJSON.length; i++) {
      const buttonContent = document.createElement("button"); 
      buttonContent.className = "keyboard__content";
      buttonContent.innerText = `${lineThirdJSON[i]}`;
      buttonContent.addEventListener("click", () => {
        inputText.value += lineThirdJSON[i];
      });
      result += buttonContent.outerHTML;
    }
   
   return result;
  }
  
  divWrapper.innerHTML += addButtonContent(lineThirdJSON);

  const buttonEnter = document.createElement("button"); 
  buttonEnter.className = "keyboard__content enter right-button";
  buttonEnter.innerText = "ENTER";
  divWrapper.appendChild(buttonEnter); 


}


secondLine();
thirdLine();