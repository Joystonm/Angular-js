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
  number:number = 0;
  displayedStudents:any= [];

  studentsData = [
    { name: 'Joyston', usn: '4MT21CS061', cgpa: 9.2 },
    { name: 'john', usn: '4MT21CS178', cgpa: 9.5 },
    { name: 'Allan', usn: '4MT21CS020', cgpa: 9.3 },
    { name: 'Dinesh', usn: '4MT21CS048', cgpa: 10 }
  ];
 
  displayStudents(){
    this.displayedStudents=this.studentsData.slice(0, this.number);
  }

  
}