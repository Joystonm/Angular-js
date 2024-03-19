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

  number:number=0;
  fact:number=0;
  result:number=0;

  Factorial(){
    this.fact=1;
    for(let i=2;i<=this.number;i++){
      this.fact=this.fact*i;
    }
    this.result=this.fact;
  }
  Square(){
    this.result=(this.number)*(this.number);
   }
  
}