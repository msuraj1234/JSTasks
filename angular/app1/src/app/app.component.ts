import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first app';
  sno:number=100;
  fullName:string="Suraj Kumar"

  isDisabled:boolean=false;

  display(){
    alert('Hi this is suraj')
  }

  constructor(){
    setTimeout(()=>{
      this.isDisabled=true
    },5000)
  }
}
