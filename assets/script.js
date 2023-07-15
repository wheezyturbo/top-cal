var a = '',op = '',b = '';


function operation(a,op,b){
    a = Number(a);
    b = Number(b);
    switch(op){
        case '+': return a+b;
        break;
        case '-': return a-b;
        break;
        case '*':return a*b;
        break;
        case '/':return a/b;
        break;
        case '':return a;
        break;
    }
}


const numbers = document.querySelectorAll('.numbers');

numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        if(op == '')a += number.textContent;
        else b += number.textContent;
        updateTextField();
    })
})

const operators = document.querySelectorAll('.operators');
operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        if(a != '')op = operator.textContent;
        updateTextField();
    })
})


const equalButton = document.getElementById('equals');
equalButton.addEventListener('click',()=>{
    const result = operation(a,op,b);
    a = result;
    b = ''
    op = ''
    updateTextField();
})

const ac = document.querySelector('.ac');
const input =  document.getElementById('input');
ac.addEventListener('click',()=>{
    a = '';b = '';op = '';
    updateTextField()
})

const dot = document.querySelector('.dot')
dot.addEventListener('click',()=>{
    if(op == '') a+='.';
    else b+='.';
    updateTextField();
})


function updateTextField(){
   input.value = a+op+b;
}