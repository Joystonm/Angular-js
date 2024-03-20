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
  username:string=''
  password:any;

  validate(){
    if(this.username.length<6){
      alert('username should have more than 6 character')
      return false;
    }
    if(this.password.length<8){
      alert('password should have more than 8 character');
      return false;
    }
    return true;
  }

  login(){
    if(this.validate()){
      console.log(this.username + " is logged in");
      console.log('password'+this.password)
    }else console.log('invalid')
  }
}