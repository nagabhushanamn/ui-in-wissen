
console.log('-index.js-')

// ----------------------------------------
// using DOM API
// ----------------------------------------

let box = document.querySelector('.alert-info')
let hideBtn = document.querySelector(".btn-danger")
let showBtn = document.querySelector(".btn-success")
let nextBtn = document.querySelector(".btn-primary")

hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})
nextBtn.addEventListener('click', e => {
    box.innerHTML = "will have 1 small break"
})


// ----------------------------------------
// using DOM + Timer API
// ----------------------------------------
let pandaEle = document.getElementById('pandaEle');
let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')
stopBtn.disabled = true
let interval;
startBtn.addEventListener('click', e => {
    stopBtn.disabled = false
    startBtn.disabled = true;
    let idx = 1;
    interval = setInterval(() => {
        let imgPath = `images/${idx}.jpeg`
        if (idx !== 2)
            pandaEle.src = imgPath
        idx++;
        if (idx > 5)
            idx = 1;
    }, 1000);
})
stopBtn.addEventListener('click', e => {
    stopBtn.disabled = true
    startBtn.disabled = false;
    clearInterval(interval)
})


//-----------------------------------------------
// using DOM + XHR API
//-----------------------------------------------


let todosBtn = document.getElementById('todos-btn');
let selectCountEle = document.getElementById("selectCountEle")
let inpCountEle = document.getElementById("inpCountEle")
todosBtn.addEventListener('click', e => {
    loadTodos(5)
})
selectCountEle.addEventListener('change', e => {
    loadTodos(e.target.value)
    inpCountEle.value = e.target.value
})
inpCountEle.addEventListener('change', e => {
    loadTodos(e.target.value)
    selectCountEle.value = e.target.value
})


function loadTodos(limit) {
    let xhr = new XMLHttpRequest();
    let apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`;
    xhr.open('GET', apiUrl)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let json = xhr.responseText;
            let todos = JSON.parse(json)
            let liElems = todos.map((todo, idx) => {
                return `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="badge ${todo.completed ? 'badge-success' : 'badge-danger'}">${todo.completed}</span>
                    </li>
                `
            })
            document.getElementById('todos').innerHTML = liElems.join(" ")
        }
    }
}