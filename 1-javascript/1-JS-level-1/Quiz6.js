


let tnr = { name: 'Nag' }

let service = {
    doTeach: function () {
        console.dir(this)
        console.log(this.name + " teaching javascript")
    }
}

// service.doTeach();
// service.doTeach.call(tnr)

let teachBtn = document.getElementById("teach-btn");
// teachBtn.addEventListener('click', function(){
//     service.doTeach.call(tnr)
// })
// or
teachBtn.addEventListener('click', service.doTeach.bind(tnr))