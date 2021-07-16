import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminn',
  templateUrl: './adminn.component.html',
  styleUrls: ['./adminn.component.css']
})
export class AdminnComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

}
