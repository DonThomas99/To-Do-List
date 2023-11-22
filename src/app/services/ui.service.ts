import { Injectable,OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService implements OnInit {
  private showAddTask: boolean = false;
  private subject= new Subject<any>();

  constructor() {
   }
  ngOnInit(): void {
  }
  toggleAddTask(): void {
    
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

onToggle():Observable<any>{
  return this.subject.asObservable();
}

}
