import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo1';
  task:string='';
  tasks:any=[];

  add(){
    if(this.task.trim()!==''){
      this.tasks.push(this.task);
      this.task=''
    }
  }

  edit(index:number){
    const editedTask=prompt("do u want to edit")
    if(editedTask!=null){
      this.tasks[index]=editedTask;
    }
  }

  delete(index:number) {
    const confirmed=confirm("do u want to delete")
    if(confirmed){
      this.tasks.splice(index,1);
    }
  }
  
}