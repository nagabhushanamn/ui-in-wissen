
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Person :: constructor")
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}

// let person = new Person("Nag", 36)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log("Employee :: constructor")
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

// let emp = new Employee("Nag", 36, 1000, 00)

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }
}

let boss = new Boss("Nag", 36, 1000.00)





class Abc {
    static staMethod() {
        console.log("Abc :: staMethod()")
    }
}
Abc.staVar1 = 1;
Abc.staVar2 = 2;

Abc.staMethod();