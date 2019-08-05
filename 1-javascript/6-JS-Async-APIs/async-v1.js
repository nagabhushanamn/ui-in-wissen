

//--------------------------------------------
// module-1.1 : dependency / producer
//--------------------------------------------


const trainer = {
    getSingleSubject() {
        //..
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let sub = "JAVASCRIPT"
                console.log("TNR : resolving promise")
                resolve(sub) // push 
                // or
                // let err = "SORRY thats not my TOC";
                // reject(err) // push
            }, 3000)
        })
        return promise;
    },
}


//--------------------------------------------
// module-1.2 : dependency / producer
//--------------------------------------------


const itSupport = {
    getITSupport() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let sub = "INFRA"
                console.log("IT-SUPPORT : resolving promise")
                resolve(sub) // push 
            }, 1000)
        })
        return promise;
    }
}

//--------------------------------------------
// module-2 : dependent / consumer
//--------------------------------------------


const employee = {
    doLearnAndWork() {
        console.log("EMP : requesting subject..")
        let promise1 = itSupport.getITSupport();
        let promise2 = trainer.getSingleSubject();
        console.log("EMP : got promise for req, defer actions to future")
        // let newPromise = promise
        let newPromise = Promise.all([promise1, promise2])
        // let newPromise = Promise.race([promise1, promise2])
            .then(
                result => {
                    console.log("EMP : learning And working with " + result)
                    return "PROJECT"
                },
                error => console.log('EMP : NP , wel try to learn thru some e-sites')
            )
        console.log("EMP : can cont.. with other work..")
        return newPromise;
    }
}




//---------------------------------------------------
// module : team
//---------------------------------------------------

let promise = employee.doLearnAndWork();
promise.then(result => console.log("TEAM : " + result))