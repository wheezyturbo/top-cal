
class Calculator{
    add =(...a) =>a.reduce((b,c)=>b+c)
    sub = (a,b)=>a-b;
    mul = (...a)=>a.reduce((b,c)=>b*c);
    div = (a,b)=>a/b;
}


function operate(a,b,c){
    if(b=='+') return new Calculator().add(a,c);
    if(b=='-') return new Calculator().sub(a,c);
    if(b=='*') return new Calculator().mul(a,c);
    if(b=='/') return new Calculator().div(a,c);
}

var a='',b='',c='';


const numbuttons = document.querySelectorAll('.numbers');
numbuttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        document.getElementById('input').value+=button.textContent;
        console.log(button.textContent)

    })
})


let updateInput = ()=>{
    document.getElementById('input').value = a+c+b;
}

document.querySelector('.ac').addEventListener('click',()=>{
    a = ''
    b = ''
    c = ''
    updateInput();
})

