import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Learn';

  items = [
    {
      name: 'Veg',
      price: 100.00
    },
    {
      name: 'NonVeg',
      price: 200.00
    }
  ]

  primaryTodo = {
    id: 0,
    title: 'Live Life',
    completed: false
  }

  constructor(private loginService: LoginService) { }

  addNewItem() {
    // this.items.unshift({ name: 'New-item', price: 200.00 }) // mutational
    this.items = this.items.concat({ name: 'New-item', price: 200.00 }) // immutable
    console.log("items count - " + this.items.length)
  }

  clearItems() {
    this.items = []
  }

  login() {
    this.loginService.login("Nag")
  }
}
