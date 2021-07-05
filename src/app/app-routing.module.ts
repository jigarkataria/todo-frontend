import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'edit-todo/:id', component: EditTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
