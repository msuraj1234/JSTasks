import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messageapp',
  templateUrl: './messageapp.component.html',
  styleUrls: ['./messageapp.component.css']
})
export class MessageappComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() public name: string = "";
  @Input() public phnumber: number = 0;
  @Input('alert-pop') public message1: string = "";
  
  displayalert(){
    alert(this.message1)
  }
}
