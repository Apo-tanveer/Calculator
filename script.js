let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let doubleZero = document.querySelector("#double_zero");
let point = document.querySelector("#point");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let erase = document.querySelector("#erase");
let clearAll = document.querySelector("#clear_all");
let equalTo = document.querySelector("#equals_to");
let display = document.querySelector("#screen");
let btn = document.querySelector("button");
let screenText = document.querySelector("#screen_text");

btn.addEventListener("click",(e)=>{
    if(e.target.id==="one"){
        screenText.textContent ="one"
    }
})

