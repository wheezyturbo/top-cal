
class Calculator{
    add =(...a) =>a.reduce((b,c)=>b+c)
    sub = (a,b)=>a-b;
    mul = (...a)=>a.reduce((b,c)=>b*c);
    div = (a,b)=>a/b;
}