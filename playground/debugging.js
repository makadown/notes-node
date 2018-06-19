var person = {
    name: 'Andrew'
};

person.age = 38;
person.name = 'Mike';

console.log(person);

/*
Node debug

> node inspect *.js

continuar
> c

siguiente
>  n  

para ver valores hasta ese momento
> repl

como un breakpoint, en el codigo puedo poner la instruccion
debugger;

puedo correr tmb
> nodemon inspect app.js read --title="to buy"

de modo que puedo modificar mi codigo y este se reinicia y puedo debuguear agusto


Ahora bien, si corro 

> node --inspect-brk app.js read --title="to buy"
o
> nodemon --inspect-brk app.js read --title="to buy"

Abre algo como esto:
Debugger listening on ws://127.0.0.1:9229/df7634a6-2839-4d5a-8004-8254a8538ed5
For help, see: https://nodejs.org/en/docs/inspector

y le doy en chrome:
chrome://inspect/    > Open dedicated devtools for Node
*/