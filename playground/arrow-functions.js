var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Mario',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHi2() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

// Este traera resultados globales.
user.sayHi(1, 2, 3);
// Este trae resultados en scope local
user.sayHi2(1, 2, 3);
/* se recomienda usar la 2da forma solo si realmente se necesita un scope local.
   Pero ya en web services, yo usaria el primero.
*/