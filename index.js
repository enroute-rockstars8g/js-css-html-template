//Introducción a JS

//variables

// 1.- no tipado
// 2.- dinamico

//Scope local
let myLet = "";
//Scope global
var myVar = "";
//Scope local
const myConst = "";

// cambio de tipo
myLet = 25;
myVar = 25;

// Error por reasignación a una constante
try {
  console.log("Asignacion ");
  myConst = 25;
} catch (e) {
  console.log("Error ");
} finally {
  console.log("Siempre se ejecutara");
}

//Funciones
function myFunction() {}

const myArrowFunction = () => {};

const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => {
  return a - b;
};

const division = (a, b) => {
  return a / b;
};

const multiplicacion = (a, b) => {
  return a * b;
};

const calculator = (a, b, operacion) => {
  let result = undefined;
  switch (operacion) {
    case "suma":
      result = suma(a, b);
      break;
    case "resta":
      result = resta(a, b);
      break;
    case "division":
      result = division(a, b);
      break;
    case "multiplicacion":
      result = multiplicacion(a, b);
      break;
  }

  return result;
};

function Dog(name = "", age = "") {
  this.name = name;
  this.age = age;

  this.bark = () => {
    console.log(`${this.name} said: wouh`);
  };
}

const myDog = new Dog("Firulais");

myDog.eat = () => {
  console.log("eating");
};

myDog.owner = { name: "Hugo" };

console.log(myDog.eat());
console.log(myDog.owner);

const num = 12313213213321231;
const numFloat = 1.35416541651651651;
const charVar = "a";
const charAnotherSyntax = "\n";
const stringVar = "Hola esto es una cadena\n";
const date = new Date();
const boolVar = true;
const anotherBoolVar = false;

console.log(date.getFullYear());

const arr = [
  num,
  numFloat,
  charVar,
  charAnotherSyntax,
  stringVar,
  date,
  boolVar,
  anotherBoolVar,
];

console.log(arr[0], arr[1]);
console.log(arr);

console.log(arr.shift());
console.log(arr);

arr.forEach((element) => {
  console.log(element);
});

const modifyArray = arr.map((element) => {
  return [element];
});

console.log(modifyArray);

const myObject = {
  marca: "Ford",
  modelo: "Mustang",
  fechaCreacion: 2022,
  position: 0,
  velocidad: 0,
  move: () => {
    myObject.position += myObject.velocidad;
  },
  colores: ["rojo", "azul", "plata"],
  partes: {
    motor: {
      cilindros: 8,
    },
    puertas: 4,
  },
};

console.log(myObject);
console.log(myObject.position);
myObject.velocidad = 50;
myObject.move();
myObject.move();
console.log(myObject.position);

console.log("Cilindros", myObject.partes.motor.cilindros);

const myMap = new Map();

myMap.set("primeraKey", 1);
myMap.set("segundaKey", "jajaja");

console.log(myMap.get("segundaKey"));

console.log(myMap.has("segundaKey"));

function sayHello() {
  console.log("Hello from button");
}

function welcome() {
  console.log("Welcome to the button");
}

// for (let i = 0; i < 100; i++) {
//   const myParagraph = document.createElement("p");

//   myParagraph.innerHTML = "<b>Este es mi parrafo" + (i + 1) + "</b>";

//   document.body.appendChild(myParagraph);
// }

function fibo() {
  const fiboNumber = parseInt(document.getElementById("inputFibo").value);

  console.log(fiboNumber);

  const numberToShow = [];

  for (let i = 0; i < fiboNumber; i++) {
    numberToShow.push(i);
  }
  const container = document.getElementById("fiboContainer");
  const praragraph = document.createElement("p");
  praragraph.innerText = numberToShow.join(",");
  container.appendChild(praragraph);
}
