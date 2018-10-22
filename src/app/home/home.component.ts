import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Task } from './../models/task';
import { Component, Injectable, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import { ITaskService } from '../service/Itask.service';


@Injectable()
@Component({
  selector: "thx-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [ITaskService]
})



export class HomeComponent implements OnInit{

  constructor(private iTaskService:ITaskService){}
  
  title: string = '';
  tasks: Task[] = [];
  taskObj: any;
  description: string;
  dueDate: Date;
  selected: boolean;
  done: boolean;
  hidden: boolean = false;
  showAlertSucess = false;
  showAlertDanger = false;

  ngOnInit(){
    //this.onGetTask();
  }

  //Gets all tasks from "api"
  onGetTask(){
    this.iTaskService.getAllTasks()
      .subscribe(
        (data: any[]) => {
          data.forEach(element => { 
            this.taskObj = {
              id: element.id,
              title: element.title,
              description: element.description,
              dueDate: element.due,
              selected: this.selected = false,
              done: element.done,
            }
            this.tasks.push(this.taskObj);
          })
        }
      );
    
  }

  //Creates new task
  onCreateNewTask(taskObj){
    //this.iTaskService.createTask(taskObj)
    //.subscribe(taskObj => this.tasks.push(this.taskObj));
    this.tasks.push(this.taskObj);
  }

  //add new task
  addTask(event) {
    this.taskObj = {
      id : (this.tasks.length + 1),
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      completed: false,
      selected: this.selected = false,
    }; 
    this.onCreateNewTask(this.taskObj);
    //resets form
    this.title = '';
    this.description = '';
    this.dueDate = undefined;
   
    event.preventDefault();
  }

  //completes task or uncompletes if completed 
  setCompleted(i) {
    let task = i;
    let taskId = task.id;
    if (task.done ){
      task.done = false;
      //return this.iTaskService.updateTaskComplete(task, taskId)
      //.subscribe();
    } else {
      task.done = true;
      //return this.iTaskService.updateTaskComplete(task, taskId)
      //.subscribe();
    };
  }

  onUpdateTask(task){
    let taskId = task.id;
    this.taskObj = {
      id: taskId,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      completed: task.done,
      selected: task.selected,
    };
    //this.iTaskService.updateTaskComplete(this.taskObj, taskId)
    //.subscribe();

  }
    
  //deletes single task by index
  onDeleteTask(task) {
    let taskId = task.id;
    task.hidden = true;
    //this.alertTimerDanger()
    //return this.iTaskService.deleteTask(taskId)
    //.subscribe();
    
  }
  
  // turns off delete selected button if there arent any tasks
  disableDeleteSelected(){
    if (this.tasks.length) {
      return false;
    } else {
      return true;
    }
  }

  //deletes all the tasks currently selected
  deleteSelectedTasks() {
    //ES5 to reverse loop to splice by index
    for(var i=(this.tasks.length -1); i > -1; i--) {
      if(this.tasks[i].selected) {
        //this.onDeleteTask(this.tasks[i]);
        this.tasks.splice(i, 1);
        //this.alertTimerDanger();
      }
    }
  }

  //sets all tasks with button to selected
  selectAllTasks(event) {
    for (var i=0; i<this.tasks.length; i++) {
      this.tasks[i].selected = !this.tasks[i].selected;
    }
  }

/*   alertTimerSuccess(){
    this.showAlertSucess = true;
    setTimeout(() => { this.showAlertSucess = false;}, 300);
  }

  alertTimerDanger(){
    this.showAlertDanger = true;
    setTimeout(() => { this.showAlertDanger = false;}, 300);
  } */

}
