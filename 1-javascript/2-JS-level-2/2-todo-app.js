
// {id:0,title:'',completed:false}
class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;


let filters = {
    'ALL': () => true,
    'ACTIVE': item => !item.completed,
    'COMPLETED': item => item.completed
}

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo) 
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map((item, idx) => {
            if (item.id === id) item.title = newTitle
            return item
        })
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id)
    }
    completeTodo(id) {
        this.todos = this.todos.map((item, idx) => {
            if (item.id === id) item.completed = !item.completed
            return item
        })
    }
    completeAll() {
        let areAllCompleted = this.todos.every(item => item.completed)
        this.todos = this.todos.map((item, idx) => {
            item.completed = !areAllCompleted
            return item
        })
    }
    clearCompleted() {
        this.todos = this.todos.filter(item => !item.completed)
    }
    viewTodos(flag) {
        this.todos
        .filter(filters[flag])
        .forEach(item=>console.log(item))
    }

}

let service = new TodoService();