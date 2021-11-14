let operator = null;
let previousOperator;
let showScreen = 0;
let totalSum = 0;
let buffer = 0;

const button = document.querySelector(".calc-buttons");
const screen = document.querySelector(".screen");

function showScreens(number) {
  
  if (showScreen != 0) {
    showScreen += number;
  } else {
    showScreen = number;
  }
  screen.innerText = showScreen;
  buffer = parseInt(showScreen);

  console.log(buffer);
  console.log('totalsum ',totalSum);

}

function calNumber() {
  if (previousOperator === "\u002B") {
    totalSum += buffer;
    console.log(totalSum);
    buffer = 0;
  } else if (previousOperator === "\u2212") {
   totalSum -= buffer;
    buffer = 0;
  
  } else if (previousOperator === "\u00D7") {
    console.log(previousOperator);
    if(buffer === 0){
      buffer = 1;
    }
    if(totalSum === 0){
      totalSum += 1;
    }
    totalSum *= buffer;
    
  } else if (previousOperator === "\u00f7") {
  
    if(totalSum === 0){
      totalSum = buffer;
      console.log(totalSum);
    }
    else if(totalSum != 0){
      if(buffer === 0){
        buffer = 1;
      }
      totalSum /= buffer;
      buffer = 0;
    }
   
  }

   console.log(buffer);
  console.log(previousOperator);
  console.log('totalsum ',totalSum);


}

function makeOperate(operator) {
  
  showScreen = "0";
  if (operator === "C") {
    buffer = 0;
    totalSum = 0;
    screen.innerText = "0";
  }
  //push equal from calculator 
  else if (operator === "\u003D") {
      calNumber();
      previousOperator = null;
      buffer = 0;
      console.log(buffer);
      console.log('totalsum',totalSum);
     screen.innerText = totalSum;
  }
  else if(operator === '\u2190'){
    if(screen.innerText.length === 1){
      screen.innerText = "0";
      totalSum = parseInt(screen.innerText);
    }
    else{
      screen.innerText = screen.innerText.substr(0,screen.innerText.length - 1);
      totalSum = parseInt(screen.innerText);
    }
   buffer = 0;
  }
  else{
    previousOperator = operator;
    calNumber();
    
  }
  
}

button.addEventListener("click", function (event) {
  const label = event.target.innerText;
  //alert(`Tou click on ${ typeof parseInt(event.target.innerText)}`);
  if (parseInt(label) >= 0 && parseInt(label) <= 9) {
    showScreens(label);
    
    
   
  } else {
    operator = label;
  }
 
  if (operator != null) {
    makeOperate(operator)
    operator = null; 
  };
});
