import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router,private todoservice: TodoService) { }
  someInput: any = "";
  todo: any = {}
  edititem(value){
    let complete = {title: value ,"id":this.todo._id };
    this.todoservice.update(complete).subscribe((data) => {
    })
     this.router.navigate([`./todo`]);
  }

  gettodo(id){
    this.todoservice.getTodobyId(id).subscribe((data:any) => {
      if(data){
        this.todo = data;
        this.someInput = data.title;
        }
      })
  }
  ngOnInit() {

     this.route.params.subscribe(params => {
      this.gettodo(params.id);
   });
  }

}
