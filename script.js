let isOn = false;

function appendToDisplay(display){
    if (isOn){
        document.getElementById('display').value += value;
        display.style.backgroundColor = "white";
        display.style.color = 'black';
        
    }
}

function clearLast(){
    if(isOn){
        let display = document.getElementById('display');
        display.value = display.value.slice(0,-1);
        display.style.backgroundColor = "white";
       
    }
}

function turnOn(){
    isOn = true;
    document.getElementById('display').value = '0';    
    display.style.backgroundColor = "white";
    display.style.color = 'black';
    display.style.textAlign = 'right';
    
}

function turnOff(){
    isOn = false;
    let display = document.getElementById('display');
    document.getElementById('display').value = '';
    display.style.backgroundColor = "black";
    display.style.fontSize = "12px";
    display.style.textAlign = 'center';
    display.style.color = "white"
    display.value="Clique em ON para Calcular";

   
}


function appendToDisplay(value){
    if(isOn){
        let display = document.getElementById('display');
        if(display.value === '0'){
            display.value = '';
        }
    }
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = "";

}

function calculateResult(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}

window.onload = function(){
   let display = document.getElementById('display');
   display.value = 'Clique em ON para Calcular';
   display.style.backgroundColor = 'black'
   display.style.color = 'white';
   display.style.fontSize = '12px'
   display.style.textAlign = 'center';
   isOn = false;  
    

};
