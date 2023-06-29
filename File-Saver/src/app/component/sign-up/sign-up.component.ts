import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    email: string = ' ';
    password: string=' ';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  signup(){
    if(this.email == ' '){
        alert('Please enter Email');
        return;
   }

   if(this.password == ' '){
        alert('Please enter Password');
        return;
   }

   this.auth.signup(this.email,this.password);
   this.email=' ';
   this.password=' ';

  }
  signupbg : string="assets/Images/signupbg.jpg";
  hide=true;
}
