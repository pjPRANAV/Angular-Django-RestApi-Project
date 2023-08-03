import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private api:CarService,private router:Router){

  }
  public car={
    "carname":'',
    "company":'',
    "price":null,
    "features":''
  }


Addfun(){
  this.api.carcreate(this.car).subscribe((res)=>{
    if(res){
      this.router.navigate(['/profile'])
    }
  })
}

}
