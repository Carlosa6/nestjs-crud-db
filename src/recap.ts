const myname = 'coche';
const age = 562;

if (myname != null) {
  console.log('xd');
}

const suma = (a: number, b: number) => {
  return a + b;
};

class Persona {
  // private age;
  // private name;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age} de edad`;
  }
}

const peter = new Persona(27, 'Parker');
console.log(peter.getSummary());
