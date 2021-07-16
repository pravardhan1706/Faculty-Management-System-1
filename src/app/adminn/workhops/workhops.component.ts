import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workhops',
  templateUrl: './workhops.component.html',
  styleUrls: ['./workhops.component.css']
})
export class WorkhopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
  }


}
