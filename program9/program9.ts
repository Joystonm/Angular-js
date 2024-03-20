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
  
  employee= [
    { name: 'joyston', salary: 50000 },
    { name: 'John', salary: 60000 },  
  ];

  name:string='';
  salary:number=0;
  employees:any=[];

  search(){
    this.employees= this.employee.filter(e=>
      e.name.toLowerCase().includes(this.name.toLowerCase()) &&
      e.salary >= this.salary
    );
    this.salary=0;
    this.name=''
  }
}