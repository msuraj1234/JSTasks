import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagecomp',
  templateUrl: './messagecomp.component.html',
  styleUrls: ['./messagecomp.component.css']
})
export class MessagecompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() public message: string = "";
@Input('alert-pop') public message1: string = "";

displayalert(){
  alert(this.message1)
}
}


