

//------------------------------------------
// Wheel
//------------------------------------------

interface Wheel {
    rotate: () => void
}

//------------------------------------------
// MRF Wheel
//------------------------------------------
class MRFWheel implements Wheel {
    constructor() {
        console.log("MRFWheel instance created...");
    }
    rotate() {
        console.log("MRF-wheel rotating...")
    }
}
//------------------------------------------
// CEAT Wheel
//------------------------------------------
class CEATWheel implements Wheel {
    constructor() {
        console.log("CEATWheel instance created...");
    }
    rotate() {
        console.log("CEAT-wheel rotating...")
    }
}
//------------------------------------------
// Car
//------------------------------------------

/*
class Car {
    move() {
        let mrfWheel = new MRFWheel()
        mrfWheel.rotate();
        console.log("car is moving..")
    }
}

let car = new Car()
car.move()
car.move()

*/

/*

    design & performance issues

    => tight-coupling b/w dependent & dependency
        -> can't extend module with new features easily
    => on every 'move' call,
       duplicate dependency instances are created & discarded
        -> slow,memory/resource use high
    => unit-testing not possible
        -> dev/bug fix slow


     why these issues ?

     => dependent itself creating its own dependency.

     solution :

     => don't create dependency in dependent's home,
        do lookup/get from factory

     limitation on factory-lookup:

     => factory-location tight-coupling

     best solution:

     => don't create/lookup but inject/get by 'third-party' ( Inversion of Control )

     how to implement IOC ?

        way-1 : dependency injection (DI )

                => constructor DI
                => setter
                => field
                ...

        way-2 : AOP


  --------------------------------------
  OO concepts
  --------------------------------------

  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism


  --------------------------------------
  OO principles
  --------------------------------------

  S.O.L.I.D principles

  S ==> single responsibility
  O ==> open & closed
  L ==> Liskov , substitution
  I ==> Interface segregation
  D ==> Dependency inversion


  --------------------------------------
  OO design pattern
  --------------------------------------

  => creational
  => structural
  => behavioral



*/

class Car {

    constructor(private wheel: Wheel) { }
    move() {
        this.wheel.rotate();
        console.log("car is moving..")
    }
}


let mrfWheel: Wheel = new MRFWheel();
let ceatWheel: Wheel = new CEATWheel();

let car = new Car(mrfWheel)
car.move()
car.move()