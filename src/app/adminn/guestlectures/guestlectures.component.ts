import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guestlectures',
  templateUrl: './guestlectures.component.html',
  styleUrls: ['./guestlectures.component.css']
})
export class GuestlecturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data)
  }

}
