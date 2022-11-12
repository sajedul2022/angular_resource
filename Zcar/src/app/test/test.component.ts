import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  xyz = "This is Heading from class file";
  pqr = 100;
  x = "Hello";

  // button
  status = true;

  // input
  fname = "";

  // ngSwitch
  fruits = ["Apple", "papaya", "Mango", "grave", "Orange"];

  // Event Binding
  show(xyz:string){
    alert(xyz);
  }
  // style
 p2 = "p2Class";

  constructor() { }

  ngOnInit(): void {
  }

  

}
