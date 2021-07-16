import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onLogin(ref){
    let hodLoginObject=ref.value;
    if(hodLoginObject.username=='B V Kiranmai' && hodLoginObject.password=='hello1234'){
      this.router.navigateByUrl("/AdminHOD")
    }  
    else if(hodLoginObject.username=='19071A3244' && hodLoginObject.password=='hello1234'){
      this.router.navigateByUrl("/adminn")
    }  
    else{
      alert("invalid credentials")
    }
    
  
    
  }
}
