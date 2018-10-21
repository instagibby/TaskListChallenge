import { Observable } from "rxjs/Rx";
import { Task } from "../models/task";
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

const API_URL = 'http://localhost:3000/tasks';

@Injectable()
export class ITaskService {
  constructor(private http: HttpClient) {}

  //GET
  getAllTasks(){
    return this.http.get<Task[]>(API_URL)
    .map(
      (tasks) => {
        return tasks;
      }
    );
  }
  //POST
  createTask(task: Task[]){
    return this.http.post(API_URL, task);
  }
  //PUT
  updateTaskComplete(t, tId){
    return this.http.put(API_URL +'/'+ tId, t);
  }

  //DELETE
  deleteTask(id: number): Observable<{}> {
    const url = `${API_URL + '/'+ id}`;
    return this.http.delete(url)
      .pipe(
        
      );
  }

}
