import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  timeNow: Date;

  constructor() { }

  ngOnInit(){
    setInterval(()=>{
      this.timeNow= new Date();
    },1000);
  }

}
