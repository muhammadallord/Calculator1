const display = document.getElementById('display');

function appendToDisplay(input){
    display.value +=input;
}
function clearDisplay(){
display.value ="";
}
function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-';
  }
function calculate(key){
   try{
        display.value =eval(display.value);    }
    catch{
        alert("Invalid");
    }
}
function del(){
    display.value =display.value.slice(0,-1);
}
