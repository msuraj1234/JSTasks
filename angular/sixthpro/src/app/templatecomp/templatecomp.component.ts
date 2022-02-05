import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatecomp',
  templateUrl: './templatecomp.component.html',
  styleUrls: ['./templatecomp.component.css']
})
export class TemplatecompComponent implements OnInit {

  constructor() { }
uname:string="suraj"
roll:number=0;
phno:string='suraj@gmai.com';
address:string="Vanasthalipuram"
python: boolean = false
js: boolean = false
angular: boolean = false
  ngOnInit() {
  }
  display(data:any){
alert(data.form.controls.uname.value)
this.uname = data.form.controls.uname.value
this.roll = data.form.controls.roll.value
this.phno = data.form.controls.phno.value
this.address = data.form.controls.address.value
this.python = data.form.controls.python.value
this.js = data.form.controls.js.value
this.angular = data.form.controls.angular.value
console.log(data)
  }
}
