


function doTeach() {
    try {
        let tnr = "Nag"; // will move to heap
        console.log(tnr + " teaching javascript")
        if (1 === 2) {
            throw new Error("hate javascript")
        }
        setTimeout(() => {
            console.log(tnr + " teaching react.js")
            if (1 === 2) {
                throw new Error("hate react.js")
            }
            console.log("teaching react.js ends")
        }, 3000)
        console.log("teaching javascript ends")
    } catch (e) {
        console.log('i caught : ' + e.message)
    }
}

doTeach();
