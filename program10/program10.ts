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
  
  
  shopping_list=['item1','item2'];
  item:string='';
  count:number=this.shopping_list.length;

  add(){
    if(this.item!==''){
      this.shopping_list.push(this.item);
      this.item=''
      this.count=this.shopping_list.length;
    }
  }
  remove(index:number){
    if(confirm('do u want to delete ?')){
      this.shopping_list.splice(index,1);
      this.count=this.shopping_list.length;

  }
}
}