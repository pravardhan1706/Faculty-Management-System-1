import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdp',
  templateUrl: './sdp.component.html',
  styleUrls: ['./sdp.component.css']
})
export class SDPComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
  }


}
