function process(symbol){
let value1=document.querySelector("#input1");
let value2=document.querySelector("#input2");
let output=document.querySelector("#outputField");
if(symbol=="+"){
    output.value=parseInt(value1.value)+parseInt(value2.value);
    
}else if(symbol=="-"){
    output.value=parseInt(value1.value)-parseInt(value2.value);
}
else if(symbol=="/"){
    output.value=parseInt(value1.value)/parseInt(value2.value);
}
else if(symbol=="*"){
    output.value=parseInt(value1.value)*parseInt(value2.value);
}
else if(symbol=="%"){
    output.value=parseInt(value1.value)%parseInt(value2.value);
}else if(symbol=="clear"){
    value1.value=0;
    value2.value=0;
    output.value=0;

    

}
}

