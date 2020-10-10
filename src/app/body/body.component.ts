import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public todayDate: Date;
  public amount: number;
  public message: string;

  constructor() { }

  ngOnInit(): void {
    this.todayDate = new Date();
    this.amount = 100;
    this.message = 'Chennai Super King';
  }

  

}
