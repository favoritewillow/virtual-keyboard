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
const inputText = document.createElement("input");
const keyboard = document.createElement("div");

wrapper.className = CssClasses.WRAPPER;
inputText.className = CssClasses.INPUT;
keyboard.className = CssClasses.KEYBOARD;

document.body.append(wrapper);
wrapper.appendChild(inputText); 
wrapper.appendChild(keyboard); 

function firstLine() {
  const buttonLeftSymbol = document.createElement("button");
  const divTopSymbol = document.createElement("div");
  const divCenterSymbol = document.createElement("div");

  const buttonOne = document.createElement("button");
  const divExclamation = document.createElement("div");
  const div1 = document.createElement("div");

  const buttonTwo = document.createElement("button");
  const divAt = document.createElement("div");
  const div2 = document.createElement("div");

  const buttonThree = document.createElement("button");
  const divGrill = document.createElement("div");
  const div3 = document.createElement("div");

  const buttonFour = document.createElement("button");
  const divDollar = document.createElement("div");
  const div4 = document.createElement("div");
  
  const buttonFive = document.createElement("button");
  const divInterest = document.createElement("div");
  const div5 = document.createElement("div");
  
  const buttonSix = document.createElement("button");
  const divColon = document.createElement("div");
  const div6 = document.createElement("div");

  const buttonSeven = document.createElement("button");
  const divQuestion = document.createElement("div");
  const div7 = document.createElement("div");

  const buttonEight = document.createElement("button");
  const divStar = document.createElement("div");
  const div8 = document.createElement("div");

  const buttonNine = document.createElement("button");
  const divBracketLeft = document.createElement("div");
  const div9 = document.createElement("div");

  const buttonZero = document.createElement("button");
  const divBracketRight = document.createElement("div");
  const div0 = document.createElement("div");

  const buttonMinuse = document.createElement("button");
  const divMinuseDown = document.createElement("div");
  const divMinuse = document.createElement("div");

  const buttonEquals = document.createElement("button");
  const divPlus = document.createElement("div");
  const divEquals = document.createElement("div");

  const buttonBackspace = document.createElement("button"); 

  buttonLeftSymbol.className = CssClasses.SYMBOL_KEY_LEFT;
  divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
  divCenterSymbol.className = CssClasses.CENTER_SYMBOL;

  buttonOne.className = CssClasses.SYMBOLS;
  divExclamation.className = CssClasses.TOP_LEFT_SYMBOL;
  div1.className = CssClasses.CENTER_SYMBOL;

  buttonTwo.className = CssClasses.SYMBOLS;
  divAt.className = CssClasses.TOP_LEFT_SYMBOL;
  div2.className = CssClasses.CENTER_SYMBOL;

  buttonThree.className = CssClasses.SYMBOLS;
  divGrill.className = CssClasses.TOP_LEFT_SYMBOL;
  div3.className = CssClasses.CENTER_SYMBOL;

  buttonFour.className = CssClasses.SYMBOLS;
  divDollar.className = CssClasses.TOP_LEFT_SYMBOL;
  div4.className = CssClasses.CENTER_SYMBOL;

  buttonFive.className = CssClasses.SYMBOLS;
  divInterest.className = CssClasses.TOP_LEFT_SYMBOL;
  div5.className = CssClasses.CENTER_SYMBOL;

  buttonSix.className = CssClasses.SYMBOLS;
  divColon.className = CssClasses.TOP_LEFT_SYMBOL;
  div6.className = CssClasses.CENTER_SYMBOL;

  buttonSeven.className = CssClasses.SYMBOLS;
  divQuestion.className = CssClasses.TOP_LEFT_SYMBOL;
  div7.className = CssClasses.CENTER_SYMBOL;

  buttonEight.className = CssClasses.SYMBOLS;
  divStar.className = CssClasses.TOP_LEFT_SYMBOL;
  div8.className = CssClasses.CENTER_SYMBOL;

  buttonNine.className = CssClasses.SYMBOLS;
  divBracketLeft.className = CssClasses.TOP_LEFT_SYMBOL;
  div9.className = CssClasses.CENTER_SYMBOL;

  buttonZero.className = CssClasses.SYMBOLS;
  divBracketRight.className = CssClasses.TOP_LEFT_SYMBOL;
  div0.className = CssClasses.CENTER_SYMBOL;

  buttonMinuse.className = CssClasses.SYMBOLS;
  divMinuseDown.className = CssClasses.TOP_LEFT_SYMBOL;
  divMinuse.className = CssClasses.CENTER_SYMBOL;

  buttonEquals.className = CssClasses.SYMBOLS;
  divPlus.className = CssClasses.TOP_LEFT_SYMBOL;
  divEquals.className = CssClasses.CENTER_SYMBOL;

  buttonBackspace.className = CssClasses.BACKSPACE;

  divTopSymbol.innerHTML = "~";
  divCenterSymbol.innerHTML = "`";

  divExclamation.innerHTML = "!";
  div1.innerHTML = "1";

  divAt.innerHTML = "@";
  div2.innerHTML = "2";

  divGrill.innerHTML = "#";
  div3.innerHTML = "3";

  divDollar.innerHTML = "$";
  div4.innerHTML = "4";

  divExclamation.innerHTML = "%";
  div5.innerHTML = "5";

  divColon.innerHTML = ":";
  div6.innerHTML = "6";

  divQuestion.innerHTML = "?";
  div7.innerHTML = "7";

  divStar.innerHTML = "*";
  div8.innerHTML = "8";

  divBracketLeft.innerHTML = "(";
  div9.innerHTML = "9";

  divBracketRight.innerHTML = ")";
  div0.innerHTML = "0";

  divMinuseDown.innerHTML = "_";
  divMinuse.innerHTML = "-";

  divPlus.innerHTML = "+";
  divEquals.innerHTML = "=";

  buttonBackspace.innerText = "Backspace";
  
  keyboard.appendChild(buttonLeftSymbol);   
  buttonLeftSymbol.appendChild(divTopSymbol);
  buttonLeftSymbol.appendChild(divCenterSymbol);

  keyboard.appendChild(buttonOne);   
  buttonOne.appendChild(divExclamation);
  buttonOne.appendChild(div1);  

  keyboard.appendChild(buttonTwo);   
  buttonTwo.appendChild(divAt);
  buttonTwo.appendChild(div2);

  keyboard.appendChild(buttonThree);   
  buttonThree.appendChild(divGrill);
  buttonThree.appendChild(div3);  

  keyboard.appendChild(buttonFour);   
  buttonFour.appendChild(divDollar);
  buttonFour.appendChild(div4);  

  keyboard.appendChild(buttonFive);   
  buttonFive.appendChild(divInterest);
  buttonFive.appendChild(div5);  

  keyboard.appendChild(buttonSix);   
  buttonSix.appendChild(divColon);
  buttonSix.appendChild(div6);  

  keyboard.appendChild(buttonSeven);   
  buttonSeven.appendChild(divQuestion);
  buttonSeven.appendChild(div7);  

  keyboard.appendChild(buttonEight);   
  buttonEight.appendChild(divStar);
  buttonEight.appendChild(div8);

  keyboard.appendChild(buttonNine);   
  buttonNine.appendChild(divBracketLeft);
  buttonNine.appendChild(div9);  

  keyboard.appendChild(buttonZero);   
  buttonZero.appendChild(divBracketRight);
  buttonZero.appendChild(div0);  

  keyboard.appendChild(buttonMinuse);   
  buttonMinuse.appendChild(divMinuseDown);
  buttonMinuse.appendChild(divMinuse);

  keyboard.appendChild(buttonEquals);   
  buttonEquals.appendChild(divPlus);
  buttonEquals.appendChild(divEquals);
  
  keyboard.appendChild(buttonBackspace);   
  
  document.addEventListener("keydown", function (event) {   
    console.log(event);  
    if (event.key === "`") {
      buttonLeftSymbol.classList.add("key-highlights");
    } 
    if (event.key === "1") {
      buttonOne.classList.add("key-highlights");
    }  
    if (event.key === "2") {
      buttonTwo.classList.add("key-highlights");
    }  
    if (event.key === "3") {
      buttonThree.classList.add("key-highlights");
    } 
    if (event.key === "4") {
      buttonFour.classList.add("key-highlights");
    }   
    if (event.key === "5") {
      buttonFive.classList.add("key-highlights");
    }  
    if (event.key === "6") {
      buttonSix.classList.add("key-highlights");
    }  
    if (event.key === "7") {
      buttonSeven.classList.add("key-highlights");
    }  
    if (event.key === "8") {
      buttonEight.classList.add("key-highlights");
    }  
    if (event.key === "9") {
      buttonNine.classList.add("key-highlights");
    }  
    if (event.key === "0") {
      buttonZero.classList.add("key-highlights");
    }  
    if (event.key === "-") {
      buttonMinuse.classList.add("key-highlights");
    }  
    if (event.key === "=") {
      buttonEquals.classList.add("key-highlights");
    } 
    if (event.key === "Backspace") {
      buttonBackspace.classList.add("key-highlights");
    } 
  })

  document.addEventListener("mousedown", function (event) {   
    console.log(event);  
    if (event.key === "`") {
      buttonLeftSymbol.classList.add("key-highlights");
    } 
    if (event.key === "1") {
      buttonOne.classList.add("key-highlights");
    }  
    if (event.key === "2") {
      buttonTwo.classList.add("key-highlights");
    }  
    if (event.key === "3") {
      buttonThree.classList.add("key-highlights");
    } 
    if (event.key === "4") {
      buttonFour.classList.add("key-highlights");
    }   
    if (event.key === "5") {
      buttonFive.classList.add("key-highlights");
    }  
    if (event.key === "6") {
      buttonSix.classList.add("key-highlights");
    }  
    if (event.key === "7") {
      buttonSeven.classList.add("key-highlights");
    }  
    if (event.key === "8") {
      buttonEight.classList.add("key-highlights");
    }  
    if (event.key === "9") {
      buttonNine.classList.add("key-highlights");
    }  
    if (event.key === "0") {
      buttonZero.classList.add("key-highlights");
    }  
    if (event.key === "-") {
      buttonMinuse.classList.add("key-highlights");
    }  
    if (event.key === "=") {
      buttonEquals.classList.add("key-highlights");
    } 
    if (event.key === "Backspace") {
      buttonBackspace.classList.add("key-highlights");
    } 
  })
}

function secondLine() {     
  
  const buttonTab = document.createElement("button"); 
  const buttonQ = document.createElement("button");
  const buttonW = document.createElement("button");
  const buttonE = document.createElement("button");
  const buttonR = document.createElement("button");
  const buttonT = document.createElement("button");
  const buttonY = document.createElement("button");
  const buttonU = document.createElement("button");
  const buttonI = document.createElement("button");
  const buttonO = document.createElement("button");
  const buttonP = document.createElement("button");
  const buttonBracketLeft = document.createElement("button");
  const buttonBracketRight = document.createElement("button");
  const buttonReverseSlash = document.createElement("button");
  const divSlash = document.createElement("div");
  const divReverseSlash = document.createElement("div");
  const buttonDel = document.createElement("button");
  
  buttonTab.className = CssClasses.TAB;
  buttonQ.className = CssClasses.CONTENT;
  buttonW.className = CssClasses.CONTENT;
  buttonE.className = CssClasses.CONTENT;
  buttonR.className = CssClasses.CONTENT;
  buttonT.className = CssClasses.CONTENT;
  buttonY.className = CssClasses.CONTENT;
  buttonU.className = CssClasses.CONTENT;
  buttonI.className = CssClasses.CONTENT;
  buttonO.className = CssClasses.CONTENT;
  buttonP.className = CssClasses.CONTENT;
  buttonBracketLeft.className = CssClasses.CONTENT;
  buttonBracketRight.className = CssClasses.CONTENT;
  buttonReverseSlash.className = CssClasses.SYMBOLS;
  divSlash.className = CssClasses.TOP_LEFT_SYMBOL;
  divReverseSlash.className = CssClasses.CENTER_SYMBOL;
  buttonDel.className = CssClasses.DEL;
  
  buttonTab.innerText = "Tab"; 
  buttonQ.innerText = "Q";
  buttonW.innerText = "W";
  buttonE.innerText = "E";
  buttonR.innerText = "R";
  buttonT.innerText = "T";
  buttonY.innerText = "Y";
  buttonU.innerText = "U";
  buttonI.innerText = "I";
  buttonO.innerText = "O";
  buttonP.innerText = "P";
  buttonBracketLeft.innerText = "[";
  buttonBracketRight.innerText = "]"; 
  divSlash.innerHTML = "/";  
  divReverseSlash.innerHTML = "\\";  
  buttonDel.innerHTML = "DEL";

  keyboard.appendChild(buttonTab); 
  keyboard.appendChild(buttonQ);
  keyboard.appendChild(buttonW);
  keyboard.appendChild(buttonE);
  keyboard.appendChild(buttonR);
  keyboard.appendChild(buttonT);
  keyboard.appendChild(buttonY);
  keyboard.appendChild(buttonU);
  keyboard.appendChild(buttonI);
  keyboard.appendChild(buttonO);
  keyboard.appendChild(buttonP);
  keyboard.appendChild(buttonBracketLeft);
  keyboard.appendChild(buttonBracketRight);
  keyboard.appendChild(buttonReverseSlash); 
  buttonReverseSlash.appendChild(divSlash);
  buttonReverseSlash.appendChild(divReverseSlash);
  keyboard.appendChild(buttonDel); 

  document.addEventListener("keydown", function (event) {   
    console.log(event);  
    if (event.key === "Tab") {
      buttonTab.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "Q") {
      buttonQ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "W") {
      buttonW.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "E") {
      buttonE.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "R") {
      buttonR.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "T") {
      buttonT.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "Y") {
      buttonY.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "U") {
      buttonU.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "I") {
      buttonI.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "O") {
      buttonO.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "P") {
      buttonP.classList.add("key-highlights");
    }  
    if (event.key === "[") {
      buttonBracketLeft.classList.add("key-highlights");
    }  
    if (event.key === "]") {
      buttonBracketRight.classList.add("key-highlights");
    } 
    if (event.key === "\\") {
      buttonReverseSlash.classList.add("key-highlights");
    } 
    if (event.key === "Delete") {
      buttonDel.classList.add("key-highlights");
    } 
  })
  document.addEventListener("mousedown", function (event) {   
    console.log(event);  
    if (event.key === "Tab") {
      buttonTab.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "Q") {
      buttonQ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "W") {
      buttonW.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "E") {
      buttonE.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "R") {
      buttonR.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "T") {
      buttonT.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "Y") {
      buttonY.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "U") {
      buttonU.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "I") {
      buttonI.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "O") {
      buttonO.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "P") {
      buttonP.classList.add("key-highlights");
    }  
    if (event.key === "[") {
      buttonBracketLeft.classList.add("key-highlights");
    }  
    if (event.key === "]") {
      buttonBracketRight.classList.add("key-highlights");
    } 
    if (event.key === "\\") {
      buttonReverseSlash.classList.add("key-highlights");
    } 
    if (event.key === "Delete") {
      buttonDel.classList.add("key-highlights");
    } 
  })  
}

function thirdLine() {

  const buttonCapsLock = document.createElement("button");
  const buttonA = document.createElement("button");
  const buttonS = document.createElement("button");
  const buttonD = document.createElement("button");
  const buttonF = document.createElement("button");
  const buttonG = document.createElement("button");
  const buttonH = document.createElement("button");
  const buttonJ = document.createElement("button");
  const buttonK = document.createElement("button");
  const buttonL = document.createElement("button");
  const buttonSemicolon = document.createElement("button");
  const buttonCommaTop = document.createElement("button");
  const buttonEnter = document.createElement("button"); 
  
  buttonCapsLock.className = CssClasses.CAPS_LOCK;
  buttonA.className = CssClasses.CONTENT;
  buttonS.className = CssClasses.CONTENT;
  buttonD.className = CssClasses.CONTENT;
  buttonF.className = CssClasses.CONTENT;
  buttonG.className = CssClasses.CONTENT;
  buttonH.className = CssClasses.CONTENT;
  buttonJ.className = CssClasses.CONTENT;
  buttonK.className = CssClasses.CONTENT;
  buttonL.className = CssClasses.CONTENT;
  buttonSemicolon.className = CssClasses.CONTENT;
  buttonCommaTop.className = CssClasses.CONTENT;
  buttonEnter.className = CssClasses.ENTER;
  
  buttonCapsLock.innerText = "Caps Lock";
  buttonA.innerText = "A";
  buttonS.innerText = "S";
  buttonD.innerText = "D";
  buttonF.innerText = "F";
  buttonG.innerText = "G";
  buttonH.innerText = "H";
  buttonJ.innerText = "J";
  buttonK.innerText = "K";
  buttonL.innerText = "L";
  buttonSemicolon.innerText = ";";
  buttonCommaTop.innerText = "'";
  buttonEnter.innerText = "ENTER";
  
  keyboard.appendChild(buttonCapsLock); 
  keyboard.appendChild(buttonA); 
  keyboard.appendChild(buttonS); 
  keyboard.appendChild(buttonD); 
  keyboard.appendChild(buttonF); 
  keyboard.appendChild(buttonG); 
  keyboard.appendChild(buttonH); 
  keyboard.appendChild(buttonJ); 
  keyboard.appendChild(buttonK); 
  keyboard.appendChild(buttonL); 
  keyboard.appendChild(buttonSemicolon); 
  keyboard.appendChild(buttonCommaTop); 
  keyboard.appendChild(buttonEnter);
  
  document.addEventListener("keydown", function (event) {   
    console.log(event);  
    if (event.key === "CapsLock") {
      buttonCapsLock.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "A") {
      buttonA.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "S") {
      buttonS.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "D") {
      buttonD.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "F") {
      buttonF.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "G") {
      buttonG.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "H") {
      buttonH.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "J") {
      buttonJ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "K") {
      buttonK.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "L") {
      buttonL.classList.add("key-highlights");
    }  
    if (event.key === ";") {
      buttonSemicolon.classList.add("key-highlights");
    }  
    if (event.key === "'") {
      buttonCommaTop.classList.add("key-highlights");
    }    
    if (event.key === "Enter") {
      buttonEnter.classList.add("key-highlights");
    }   
  })

  document.addEventListener("mousedown", function (event) {   
    console.log(event);  
    if (event.key === "CapsLock") {
      buttonCapsLock.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "A") {
      buttonA.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "S") {
      buttonS.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "D") {
      buttonD.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "F") {
      buttonF.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "G") {
      buttonG.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "H") {
      buttonH.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "J") {
      buttonJ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "K") {
      buttonK.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "L") {
      buttonL.classList.add("key-highlights");
    }  
    if (event.key === ";") {
      buttonSemicolon.classList.add("key-highlights");
    }  
    if (event.key === "'") {
      buttonCommaTop.classList.add("key-highlights");
    }    
    if (event.key === "Enter") {
      buttonEnter.classList.add("key-highlights");
    }   
  })
}

function fourthLine() {

  const buttonShift = document.createElement("button"); 
  const buttonSlashReverse = document.createElement("button"); 
  const buttonZ = document.createElement("button"); 
  const buttonX = document.createElement("button"); 
  const buttonC = document.createElement("button"); 
  const buttonV = document.createElement("button"); 
  const buttonB = document.createElement("button"); 
  const buttonN = document.createElement("button"); 
  const buttonM = document.createElement("button"); 
  const buttonDot = document.createElement("button"); 
  const buttonComma = document.createElement("button"); 
  const buttonSlash = document.createElement("button");
  const buttonArrowUp = document.createElement("button"); 
  const buttonSmallShift = document.createElement("button"); 
  
  buttonShift.className = CssClasses.SHIFT;
  buttonSlashReverse.className = CssClasses.CONTENT;
  buttonZ.className = CssClasses.CONTENT;
  buttonX.className = CssClasses.CONTENT;
  buttonC.className = CssClasses.CONTENT;
  buttonV.className = CssClasses.CONTENT;
  buttonB.className = CssClasses.CONTENT;
  buttonN.className = CssClasses.CONTENT;
  buttonM.className = CssClasses.CONTENT;
  buttonDot.className = CssClasses.CONTENT;
  buttonComma.className = CssClasses.CONTENT;
  buttonSlash.className = CssClasses.CONTENT;
  buttonArrowUp.className = CssClasses.WIN_ALT_ICON;
  buttonSmallShift.className = CssClasses.SMALL_SHIFT;
  
  buttonShift.innerText = "Shift";
  buttonSlashReverse.innerText = "\\";
  buttonZ.innerText = "Z";
  buttonX.innerText = "X";
  buttonC.innerText = "C";
  buttonV.innerText = "V";
  buttonB.innerText = "B";
  buttonN.innerText = "N";
  buttonM.innerText = "M";
  buttonDot.innerText = ".";
  buttonComma.innerText = ",";
  buttonSlash.innerText = "/";
  buttonArrowUp.innerHTML = "<img src='images/arrow-up.svg'>";
  buttonSmallShift.innerText = "Shift";
  
  keyboard.appendChild(buttonShift); 
  keyboard.appendChild(buttonSlashReverse); 
  keyboard.appendChild(buttonZ); 
  keyboard.appendChild(buttonX); 
  keyboard.appendChild(buttonC); 
  keyboard.appendChild(buttonV); 
  keyboard.appendChild(buttonB); 
  keyboard.appendChild(buttonN); 
  keyboard.appendChild(buttonM); 
  keyboard.appendChild(buttonDot); 
  keyboard.appendChild(buttonComma); 
  keyboard.appendChild(buttonSlash);   
  keyboard.appendChild(buttonArrowUp);  
  keyboard.appendChild(buttonSmallShift); 
   
  document.addEventListener("keydown", function (event) {   
    console.log(event); 
    if (event.key === "Shift") {
      buttonShift.classList.add("key-highlights");
    } 
    if (event.key === "\\") {
      buttonSlashReverse.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "Z") {
      buttonZ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "X") {
      buttonX.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "C") {
      buttonC.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "V") {
      buttonV.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "B") {
      buttonB.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "N") {
      buttonN.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "M") {
      buttonM.classList.add("key-highlights");
    }  
    if (event.key === ".") {
      buttonDot.classList.add("key-highlights");
    }  
    if (event.key === ",") {
      buttonComma.classList.add("key-highlights");
    }  
    if (event.key === "/") {
      buttonSlash.classList.add("key-highlights");
    }  
    if (event.key === "ArrowUp") {
      buttonArrowUp.classList.add("key-highlights");
    }    
    if (event.key === "Shift") {
      buttonSmallShift.classList.add("key-highlights");
    }   
  })

  document.addEventListener("mousedown", function (event) {   
    console.log(event);  
    if (event.key === "Shift") {
      buttonShift.classList.add("key-highlights");
    } 
    if (event.key === "\\") {
      buttonSlashReverse.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "Z") {
      buttonZ.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "X") {
      buttonX.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "C") {
      buttonC.classList.add("key-highlights");
    } 
    if (event.key.toUpperCase() === "V") {
      buttonV.classList.add("key-highlights");
    }   
    if (event.key.toUpperCase() === "B") {
      buttonB.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "N") {
      buttonN.classList.add("key-highlights");
    }  
    if (event.key.toUpperCase() === "M") {
      buttonM.classList.add("key-highlights");
    }  
    if (event.key === ".") {
      buttonDot.classList.add("key-highlights");
    }  
    if (event.key === ",") {
      buttonComma.classList.add("key-highlights");
    }  
    if (event.key === "/") {
      buttonSlash.classList.add("key-highlights");
    }  
    if (event.key === "ArrowUp") {
      buttonArrowUp.classList.add("key-highlights");
    }    
    if (event.key === "Shift") {
      buttonSmallShift.classList.add("key-highlights");
    }   
  })
}

function fifthLine() {
  const buttonCtrlLeft = document.createElement("button"); 
  const buttonWin = document.createElement("button"); 
  const buttonAltLeft = document.createElement("button"); 
  const buttonSpace = document.createElement("button"); 
  const buttonAltRight = document.createElement("button"); 
  const buttonCtrlRight = document.createElement("button"); 
  const buttonArrowLeft = document.createElement("button"); 
  const buttonArrowDown = document.createElement("button"); 
  const buttonArrowRight = document.createElement("button"); 

  buttonCtrlLeft.className = CssClasses.CTRL;
  buttonWin.className = CssClasses.WIN_ALT_ICON;
  buttonAltLeft.className = CssClasses.WIN_ALT_ICON;
  buttonSpace.className = CssClasses.SPACE;
  buttonAltRight.className = CssClasses.WIN_ALT_ICON;
  buttonCtrlRight.className = CssClasses.CTRL;
  buttonArrowLeft.className = CssClasses.WIN_ALT_ICON;
  buttonArrowDown.className = CssClasses.WIN_ALT_ICON;
  buttonArrowRight.className = CssClasses.WIN_ALT_ICON;

  buttonCtrlLeft.innerText = "Ctrl";
  buttonWin.innerText = "Win";
  buttonAltLeft.innerText = "Alt";
  buttonSpace.innerText = "";
  buttonAltRight.innerText = "Alt";
  buttonCtrlRight.innerText = "Ctrl";
  buttonArrowLeft.innerHTML = "<img src='images/arrow-left.svg'>";
  buttonArrowDown.innerHTML = "<img src='images/arrow-down.svg'>";
  buttonArrowRight.innerHTML = "<img src='images/arrow-right.svg'>";

  keyboard.appendChild(buttonCtrlLeft); 
  keyboard.appendChild(buttonWin); 
  keyboard.appendChild(buttonAltLeft); 
  keyboard.appendChild(buttonSpace); 
  keyboard.appendChild(buttonAltRight);
  keyboard.appendChild(buttonCtrlRight); 
  keyboard.appendChild(buttonArrowLeft); 
  keyboard.appendChild(buttonArrowDown); 
  keyboard.appendChild(buttonArrowRight); 

  document.addEventListener("keydown", function (event) {   
    console.log(event);  
    if (event.key === "Control") {
      buttonCtrlLeft.classList.add("key-highlights");
    } 
    if (event.key === "Meta") {
      buttonWin.classList.add("key-highlights");
    }  
    if (event.key === "Alt") {
      buttonAltLeft.classList.add("key-highlights");
    }  
    if (event.key === " ") {
      buttonSpace.classList.add("key-highlights");
    } 
    if (event.key === "Alt") {
      buttonAltRight.classList.add("key-highlights");
    }   
    if (event.key === "Control") {
      buttonCtrlRight.classList.add("key-highlights");
    }  
    if (event.key === "ArrowLeft") {
      buttonArrowLeft.classList.add("key-highlights");
    }  
    if (event.key === "ArrowDown") {
      buttonArrowDown.classList.add("key-highlights");
    }  
    if (event.key === "ArrowRight") {
      buttonArrowRight.classList.add("key-highlights");
    }        
  })

  document.addEventListener("click", function (event) {   
    console.log(event);  
    if (event.key === "Control") {
      buttonCtrlLeft.classList.add("key-highlights");
    } 
    if (event.key === "Meta") {
      buttonWin.classList.add("key-highlights");
    }  
    if (event.key === "Alt") {
      buttonAltLeft.classList.add("key-highlights");
    }  
    if (event.key === " ") {
      buttonSpace.classList.add("key-highlights");
    } 
    if (event.key === "Alt") {
      buttonAltRight.classList.add("key-highlights");
    }   
    if (event.key === "Control") {
      buttonCtrlRight.classList.add("key-highlights");
    }  
    if (event.key === "ArrowLeft") {
      buttonArrowLeft.classList.add("key-highlights");
    }  
    if (event.key === "ArrowDown") {
      buttonArrowDown.classList.add("key-highlights");
    }  
    if (event.key === "ArrowRight") {
      buttonArrowRight.classList.add("key-highlights");
    }        
  })
}

firstLine();
secondLine();
thirdLine();
fourthLine();
fifthLine();