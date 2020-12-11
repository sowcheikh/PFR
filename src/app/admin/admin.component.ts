import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  show = false;
  color = "red";

  constructor() { }

  changeStatus() {
    this.show =!this.show;
  }

  changeColor(input) {
    console.log(input.value);
    this.color = input.value;
    this.color = '';

  }

  ngOnInit(): void {
  }

}
