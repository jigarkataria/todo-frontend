import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private router: Router,private todoservice: TodoService) { }

  uname : String = '';
  psw : String = '';
  loginerror: boolean = false;

  Login(username,password){
    let logindata = {
      "username":username,
      "password":password
    }
    this.todoservice.login(logindata).subscribe((data) => {
    if(data){
      this.router.navigate([`./todo`]);
      }
    })
  }

  ngOnInit() {
  }

}
