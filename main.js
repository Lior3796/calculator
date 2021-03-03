var output = document.getElementById("result");
var calcNumber = 0;
var secondNumber = 0;
var counter = 0;
var sign;
output.innerText = calcNumber;
// var num1;
// var num2;
// var counter = 0;
// var sign;

function signs(sign){
    let result = document.getElementById(`${sign}`).innerText;
    result = calcNumber + result;
    output.innerText = result;
    sign = result;
    counter++;
}
function addDigit(num1){
    if(counter === 1){
        output.innerText = " ";
        secondNumber = 10 * secondNumber + num1;
        output.innerText = secondNumber;
        
    }
    
    else {
    calcNumber = 10 * calcNumber + num1;
    output.innerText = calcNumber;
   
    }
}
function calculate(){
    switch (sign) {
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




    

