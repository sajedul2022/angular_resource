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
  status = true;

  constructor() { }

  ngOnInit(): void {
  }

}
