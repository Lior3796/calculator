var output = document.getElementById("result");
var calcNumber = 0;
var secondNumber = 0;
var counter = 0;
var onlySign;
var sign;
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
            output.innerText = " ";
            secondNumber = `${secondNumber}.`;
            output.innerText = secondNumber;
        }
        else{
        output.innerText = " ";
        secondNumber = 10 * secondNumber + num1;
        output.innerText = secondNumber;
    }
    }
    else {
        if(num1 === "."){
            output.innerText = " ";
            calcNumber = `${calcNumber}.`;
            output.innerText = calcNumber;
        }
        else {
           calcNumber = 10 * calcNumber + num1;
           output.innerText = calcNumber;
        } 
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
function reset(){
    output.innerText = "0";
    calcNumber = 0;
    secondNumber = 0;
    sign = null;
    counter = 0;
}



    

