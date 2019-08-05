let Rx = require('rxjs')
let { Subject } = Rx;

//--------------------------------------------
// module-1.1 : dependency / producer
//--------------------------------------------


const trainer = {
    getMultipleSubjects() {
        let stream = new Subject();
        let i = 0;
        setInterval(() => {
            i++;
            let sub = 'sub-' + i
            stream.next(sub);  // push
            if (i === 5) {
                stream.complete()
            }
        }, 2000);
        return stream;
    },
}


//--------------------------------------------
// module-2 : dependent / consumer
//--------------------------------------------


const employee = {
    doLearnAndWork() {
        console.log("EMP : requesting subject..")
        let stream = trainer.getMultipleSubjects();
        console.log("EMP : got stream for req, defer actions to future")
        stream.subscribe(
            result => {
                console.log("EMP : learning And working with " + result)
            },
            error => console.log('EMP : NP , wel try to learn thru some e-sites'),
            () => console.log('thanks trained for all subjects')
        )
        console.log("EMP : can cont.. with other work..")
    }
}




//---------------------------------------------------
// module : team
//---------------------------------------------------

employee.doLearnAndWork();
