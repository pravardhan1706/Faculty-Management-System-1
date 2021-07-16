import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fdp',
  templateUrl: './fdp.component.html',
  styleUrls: ['./fdp.component.css']
})
export class FDPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
  }


}
