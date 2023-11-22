import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output()  onAddTask:EventEmitter<Task> = new EventEmitter();

  text:string | undefined;
  day:string | undefined
  reminder:boolean = false
  subscription: Subscription | undefined

showAddTask:boolean = false; 

  constructor(private uiService:UiService){

  this.subscription = this.uiService.onToggle().subscribe((value) =>(this.showAddTask = value))

  }
  ngOnInit(): void {
  }
  onSubmit() {

    if (!this.text || !this.day) {
      alert('Please add a task and day')
      return
    }
const newTask ={
  text : this.text,
  day  : this.day,
  reminder:this.reminder
}

this.onAddTask.emit(newTask);
this.text =''
this.day =''
this.reminder =false

 

  }

}
