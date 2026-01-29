let display = document.querySelector("#screen");
let btn = document.querySelectorAll("button");
let screenText = document.querySelector("#screen_text");
let result = document.querySelector("#result_text");

let firtValue = "";
let secondValue = "";
let operator = "";
let secondValueStatus = "notUpdated";
btn.forEach(button=>{
    button.addEventListener("click", (e)=>{
        if(e.target.id==="one"){
            screenText.textContent += 1;
            if(operator === ""){
                firtValue +="1"
            }else{
                
                secondValue +="1"
                secondValueStatus = "updated"
            }
            if (secondValueStatus ==="updated"){
                result.textContent = calculate(firtValue,secondValue,operator);
                firtValue =  calculate(firtValue,secondValue,operator);
            } 
        }else if (e.target.id==="two"){
            screenText.textContent += 2;
            if(operator === ""){
                firtValue +="2"
            }else{
                secondValue +="2"
            }
        }else if (e.target.id==="three"){
            screenText.textContent += 3;
            if(operator === ""){
                firtValue +="3"
            }else{
                secondValue +="3"
            }
        }else if (e.target.id==="four"){
            screenText.textContent += 4;
            if(operator === ""){
                firtValue +="4"
            }else{
                secondValue +="4"
            }
        }else if (e.target.id==="five"){
            screenText.textContent += 5;
            if(operator === ""){
                firtValue +="5"
            }else{
                secondValue +="5"
            }
        }else if (e.target.id==="six"){
            screenText.textContent += 6;
            if(operator === ""){
                firtValue +="6"
            }else{
                secondValue +="6"
            }
        }else if (e.target.id==="seven"){
            screenText.textContent += 7;
            if(operator === ""){
                firtValue +="7"
            }else{
                secondValue +="7"
            }
        }else if (e.target.id==="eight"){
            screenText.textContent += 8;
            if(operator === ""){
                firtValue +="8"
            }else{
                secondValue +="8"
            }
        }else if (e.target.id==="nine"){
            screenText.textContent += 9;
            if(operator === ""){
                firtValue +="9"
            }else{
                secondValue +="9"
            }
        }else if (e.target.id==="zero"){
            screenText.textContent += 0;
            if(operator === ""){
                firtValue +="0"
            }else{
                secondValue +="0"
            }
        }else if (e.target.id==="point"){
            screenText.textContent += ".";
            if(operator === ""){
                firtValue +="."
            }else{
                secondValue +="."
            }
        }else if (e.target.id==="plus"){
            if((((screenText.textContent)[(screenText.textContent).length -1])=== "+") || (((screenText.textContent)[(screenText.textContent).length -1])=== "*") || (((screenText.textContent)[(screenText.textContent).length -1])=== "/") || (((screenText.textContent)[(screenText.textContent).length -1])=== "-")){
                screenText.textContent = (screenText.textContent).slice( 0,-1);
                screenText.textContent += "+";
                operator = "+";
            }else{
                screenText.textContent += "+";
                operator = "+";
            }
            secondValue = "";
        }else if (e.target.id==="minus"){
            if((((screenText.textContent)[(screenText.textContent).length -1])=== "+") || (((screenText.textContent)[(screenText.textContent).length -1])=== "*") || (((screenText.textContent)[(screenText.textContent).length -1])=== "/") || (((screenText.textContent)[(screenText.textContent).length -1])=== "-")){
                screenText.textContent = (screenText.textContent).slice( 0,-1);
                screenText.textContent += "-";
                operator = "-";
            }else{
                screenText.textContent += "-";
                operator = "-";
            }
        }else if (e.target.id==="multiply"){
            if((((screenText.textContent)[(screenText.textContent).length -1])=== "+") || (((screenText.textContent)[(screenText.textContent).length -1])=== "*") || (((screenText.textContent)[(screenText.textContent).length -1])=== "/") || (((screenText.textContent)[(screenText.textContent).length -1])=== "-")){
                screenText.textContent = (screenText.textContent).slice( 0,-1);
                screenText.textContent += "*";
                operator = "*";
            }else{
                screenText.textContent += "*";
                operator = "*";
            }
        }else if (e.target.id==="divide"){
            if((((screenText.textContent)[(screenText.textContent).length -1])=== "+") || (((screenText.textContent)[(screenText.textContent).length -1])=== "*") || (((screenText.textContent)[(screenText.textContent).length -1])=== "/") || (((screenText.textContent)[(screenText.textContent).length -1])=== "-")){
                screenText.textContent = (screenText.textContent).slice( 0,-1);
                screenText.textContent += "/";
                operator = "/";
            }else{
                screenText.textContent += "/";
                operator = "/";
            }
        }else if (e.target.id==="clear_all"){
            screenText.textContent = "";
            result.textContent = "";
            firtValue = "";
            secondValue = "";
            operator = "";
            secondValueStatus = "notUpdated";


        }else if (e.target.id==="erase"){
            if((((screenText.textContent)[(screenText.textContent).length -1])!== "+") && (((screenText.textContent)[(screenText.textContent).length -1])!== "*") && (((screenText.textContent)[(screenText.textContent).length -1])!== "/") && (((screenText.textContent)[(screenText.textContent).length -1])!== "-")){
                screenText.textContent = (screenText.textContent).slice( 0,-1);
                secondValue = secondValue.slice(0,-1);
                if(operator === "+"){
                    firtValue = firtValue - secondValue;
                    result.textContent = calculate(firstValue ,secondValue,"-");
                }

            }
            
        }
        else if (e.target.id==="equals_to"){
           screenText.textContent = calculate(firtValue,secondValue,operator);
           firtValue = calculate(firtValue,secondValue,operator);
           secondValue = "";
           operator = "";
           result.textContent = firtValue;
        }
        
    })
})

function calculate(first,second,sign){
    if(sign==="+"){
        return +first + +second ;
    }else if(sign ==="-"){
        return +first - +second ;
    }else if(sign ==="/"){
        return +first / +second ;
    }else if(sign === "*"){
        return +first * +second ;
    }
}