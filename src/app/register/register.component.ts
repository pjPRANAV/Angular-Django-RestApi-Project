import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
  constructor(private regservice:UserService){

  }
  data : { password: string ,username :string ,email :string}={
    username : '',
    email : '',
    password : '',
  }
  submit(){
    this.regservice.register(this.data).subscribe((res)=>{
      console.log(res)
    })
  }
}
