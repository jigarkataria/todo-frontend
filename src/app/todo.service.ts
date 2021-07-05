import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  login(userData){
    return this.http.post('http://localhost:3000/login', userData)
      .pipe((res) => {
        return res;
      });
  }
  getTodo(userid){
    return this.http.get('http://localhost:3000/'+ userid)
      .pipe((res) => {
        return res;
      });
  }
  update(data){
    return this.http.put('http://localhost:3000', data)
      .pipe((res) => {
        return res;
      });
  }
  deleteTodo(data){
    return this.http.delete('http://localhost:3000/' + data)
      .pipe((res) => {
        return res;
      });
  }
  add(data){
    return this.http.post('http://localhost:3000', data)
      .pipe((res) => {
        return res;
      });
  }
  getTodobyId(id){
    return this.http.get('http://localhost:3000/todoid/'+ id)
      .pipe((res) => {
        return res;
      });
  }
}
