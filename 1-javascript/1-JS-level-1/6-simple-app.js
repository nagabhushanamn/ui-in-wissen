"use strict"

//  class ES5
function Trainer(name) {
    this.name = name;
}
Trainer.prototype.doTeach = function (sub) {
    console.log(this.name + " teaching " + sub)
    let notes = sub + "-notes"
    let tnrName = this.name;
    let doLearn = function () {
        console.log(this.name + " learning with " + notes + " from the Trainer - " + tnrName )
    }
    console.log("teaching ends")
    return doLearn
}

// class ES6
class Employee {
    constructor(name) {
        this.name = name
    }
    doWork() {
        console.log(this.name + " working..")
    }
}

function sessionStart() {
    let trainer = new Trainer("Nag")
    let e1 = new Employee("E1")
    let e2 = new Employee("E2")
    let doLearn = trainer.doTeach('javascript');
    doLearn.call(e1)
    doLearn.call(e2)
    e1.doWork()
    e2.doWork()
}

sessionStart();
