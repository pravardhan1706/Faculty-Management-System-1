import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.css']
})
export class SeminarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
  }


}
