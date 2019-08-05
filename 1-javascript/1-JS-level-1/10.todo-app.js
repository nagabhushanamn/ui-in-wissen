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

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        // this.todos.push(newTodo) // mutate
        this.todos = this.todos.concat(newTodo) // immutable
    }
    editTodo(id, newTitle) {
        // a.immutable
        // this.todos = this.todos.map(function (item) {
        //     if (item.id === id)
        //         item.title = newTitle
        //     return item;
        // })
        // b. mutable
        let idx = this.todos.findIndex(function (item) {
            return item.id === id;
        })
        let item = this.todos[idx]
        item.title = newTitle
    }
    deleteTodo(id) {
        // a.immutable
        // this.todos = this.todos.filter(function (item) {
        //     return item.id !== id
        // })
        // b.mutable
        let idx = this.todos.findIndex(function (item) {
            return item.id === id;
        })
        this.todos.splice(idx, 1)
    }
    completeTodo(id) {
        // a.immutable
        // this.todos = this.todos.map(function (item) {
        //     if (item.id === id)
        //         item.completed = !item.completed
        //     return item;
        // })
        // b. mutable
        let idx = this.todos.findIndex(function (item) {
            return item.id === id;
        })
        let item = this.todos[idx]
        item.completed = !item.completed
    }
    completeAll() {
        let areAllCompleted = this.todos.every(function (item) {
            return item.completed;
        })
        // a.immutable
        // this.todos = this.todos.map(function (item) {
        //     item.completed = !areAllCompleted
        //     return item;
        // })
        // b. mutable
        this.todos.forEach(function (item) {
            item.completed = !areAllCompleted
        })
    }
    clearCompleted() {
        // a.immutable
        // this.todos = this.todos.filter(function (item) {
        //     return !item.completed
        // })
        // mutable
        this.todos.forEach((item) => {
            if (item.completed)
                this.deleteTodo(item.id)
        })
    }
    viewTodos(filterBy) {
        if (filterBy === "ALL")
            this.todos.forEach(function (item) {
                console.log(item)
            })
    }

}

let service = new TodoService();