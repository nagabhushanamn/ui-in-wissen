

//--------------------------------------------
// module-1 : dependency / producer
//--------------------------------------------


const trainer = {
    getSingleSubject() {
        //
        return "javascript"
    },
    getMultipleSubjects() {
        return {
            [Symbol.iterator]() {
                let i = 0;
                return {
                    next() {
                        i++;
                        let value = i <= 5 ? 'sub-' + i : undefined
                        let done = i <= 5 ? false : true
                        return { value, done }
                    }
                }
            }
        }
    }
}


//--------------------------------------------
// module-2 : dependent / consumer
//--------------------------------------------


const employee = {
    doLearnAndWork() {
        //..
        // let sub1 = trainer.getSingleSubject(); // pull / sync / blocking call
        // console.log(sub1)

        let it = trainer.getMultipleSubjects();
        for (let sub of it) {  // pull / sync / blocking call
            console.log(sub)
        }

    }
}

employee.doLearnAndWork();