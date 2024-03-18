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

  first:number=0;
  second:number=0;
  result:number=0;
  add(){
    this.result=this.first+this.second;
  }
  sub(){
    this.result=this.first-this.second;

  }
  mul(){
    this.result=this.first*this.second

  }

  div(){
    this.result=this.first/this.second;
  }
  
}