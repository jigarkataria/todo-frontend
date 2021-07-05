import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private router: Router,private todoservice: TodoService) { }
  toDoListArray:any;
  someInput: any = "";
  edit:boolean = false;
  additem(itemTitle) {
    let todo = {
      userid:"123",
      title:itemTitle
    }
    this.todoservice.add(todo).subscribe((data) => {
      if(data){
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
        }
      })

  }

  editTodo(value) {
    this.router.navigate([`./edit-todo/${value._id}`]);
  }
  complete(value){
    debugger;
    let complete = {complete: !value.complete,"id":"123" };
    this.todoservice.update(complete).subscribe((data) => {
      if(data){
        if(data){
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
          }
        }
      })
  }

  delete(value){
    this.todoservice.deleteTodo(value._id).subscribe((data) => {
      if(data){
        if(data){
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
          }
        }
  })
}
  getUserTodos(value){
    this.todoservice.getTodo(value).subscribe((data) => {
      if(data){
       this.toDoListArray = data;
        }
      })
  }
  ngOnInit() {
    this.getUserTodos('123')
  }

}
