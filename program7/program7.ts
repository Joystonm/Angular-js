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
  
  users=[
    {n:'joyston',e:'joyston@gmail.com'}
  ]
  name:string=''
  email:string=''

  add(){
    if(this.name.trim()!=='' && this.email.trim()!==''){
      this.users.push({n:this.name,e:this.email});
      this.name=''
      this.email=''
    }
  }
    edit(index:number){
      const newname=prompt('enter name');
      const newemail=prompt('enter email');

      if(newname!==null && newemail!==null){
        this.users[index].n=newname;
        this.users[index].e=newemail;
      }else{
        alert("name and email cannot be empty")
      }
    }

    delete(index:number){
      if(confirm("delete")){
        this.users.splice(index,1);
      }
    }
  }