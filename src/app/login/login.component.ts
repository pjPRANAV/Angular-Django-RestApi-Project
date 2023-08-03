import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private log:UserService,private router:Router){

  }
  data : { password: string ,username :string }={
    username : '',
    password : '',
  }
  logg(){
    this.log.login(this.data).subscribe((log)=>{
    if(log.username){
      this.router.navigate(["/profile"])
    }
    else{
      this.router.navigate(["/login"])
    }
    },
    (error:any)=>{
      console.error("login error:",error);
    });
}
}
