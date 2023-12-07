const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

buttons.forEach((i) => {
    i.onclick=()=>{
        if(i.id=="clear"){
            display.innerText="";
        }else if(i.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1);
        }else if(display.innerText !="" && i.id=="equal"){
            display.innerText= eval(display.innerText)
        }else if(display.innerText=="" && i.id=="equal"){
            display.innerText = "Null";
            setTimeout(()=>(display.innerText=""), 2000);
        }
        else{
            display.innerText+=i.id;
        }
    }
});

const btnTema = document.querySelector(".tema");
const calculator = document.querySelector(".calculator");

let isDark = true;
btnTema.onclick=()=>{
    calculator.classList.toggle("dark");
    btnTema.classList.toggle("active");
    isDark = !isDark;
}