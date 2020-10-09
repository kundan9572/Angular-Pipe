import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  CurrentDate: number ;
  numberFormat: number = 0;
  num: number = 0;
  name: string='';
  currNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  date(): void{
    this.CurrentDate = Date.now();
  }

  numFormat(numpipe: number): void{
    this.numberFormat = numpipe;
  }

  percentage(npercent: number): void{
    this.num = npercent;
  }

  pipes(name: string): void{
    this.name = name;
  }

  currencyFormat(currency: number): void{
    this.currNum = currency;
  }

}
