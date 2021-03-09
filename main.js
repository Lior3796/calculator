let output = document.getElementById("result");
let calcNumber = 0;
let secondNumber = 0;
let counter = 0;
let onlySign;
let sign;
output.innerText = calcNumber;

function signs(sign){
    let result = document.getElementById(`${sign}`).innerText;
    onlySign = result;
    result = calcNumber + result;
    output.innerText = result;
    sign = result;
    counter++;
    console.log(sign);
}
function addDigit(num1){
    if(counter === 1){
        if(num1 === "."){
            secondNumber = `${secondNumber}.`;
            output.innerText = secondNumber;
            counter = 3;
            
        }
        else if(counter === 3){
            secondNumber = secondNumber + num1;
            output.innerText = secondNumber;
            counter = 1;
        }
        else{
        output.innerText = `${secondNumber}`;
        secondNumber = 10 * secondNumber + num1;
        output.innerText = secondNumber;
       }
    }
    else if(num1 === "."){
        calcNumber = `${calcNumber}.`;
        output.innerText = calcNumber;
        counter = 3;
    }
      
       
    else if(counter === 3){
           calcNumber = calcNumber + num1;
           output.innerText = calcNumber;
           counter = 0;
    } 
    else{
           calcNumber = 10 * calcNumber + num1;
           output.innerText = calcNumber;
    }

    
}
function calculate(){
    console.log(onlySign);
    switch (onlySign) {
        case "+":
            output.innerText = calcNumber + secondNumber;
            break;
        case "-":
             output.innerText = calcNumber - secondNumber;
             break;
        case "*":
            output.innerText = calcNumber * secondNumber;
            break;
        case "/":
            output.innerText = calcNumber / secondNumber;  
            break;          
        default:
            return 0;
    }
    
}
// setTimeout(9000,alert("don't forget to reset"));
function reset(){
    output.innerText = "0";
    calcNumber = 0;
    secondNumber = 0;
    sign = null;
    counter = 0;
}



    

