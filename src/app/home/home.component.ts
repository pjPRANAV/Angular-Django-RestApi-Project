import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private maruthi:CarService){

  }
  public car:any=[
    {"carname":'',
    "company":'',
     "price": 0,
    "features":''}
    
   ]
   ngOnInit(){
    this.maruthi.carget().subscribe((Response:any)=>{
      console.log(Response)
      this.car=Response
    })
   }

}
