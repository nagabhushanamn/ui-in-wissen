import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  @Input("value") todo;

  // constructor(private cd: ChangeDetectorRef) {
  //   console.log('TodoComponent :: constructor ')
  //   console.log(this.todo)
  // }

  // ngOnChanges(changes) {
  //   console.log('TodoComponent :: ngOnChanges')
  //   console.dir(changes)
  // }

  // ngOnInit() {
  //   console.log('TodoComponent :: ngOnInit')
  //   console.log(this.todo);
  // }

  // ngDoCheck() {
  //   console.log('TodoComponent :: ngDoCheck ')
  // }


  // ngAfterContentInit() {
  //   console.log("TodoComponent :: ngAfterContentInit");
  // }

  // ngAfterContentChecked() {
  //   console.log("TodoComponent :: ngAfterContentChecked");
  // }

  // ngAfterViewInit() {
  //   console.log("TodoComponent :: ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("TodoComponent :: ngAfterViewChecked");
  // }


  // ngOnDestroy() {
  //   console.log('TodoComponent :: ngOnDestroy ')
  // }


}
