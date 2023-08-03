import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private profile:CarService,private router:Router){

  }
 public car:any=[
  {"carname":'',
  "company":'',
   "price": 0,
  "features":''}
  
 ]
 ngOnInit(){
  this.profile.carget().subscribe((Response:any)=>{
    console.log(Response)
    this.car=Response
  })
 }
 edit(id : any){
  this.router.navigate([`/edit/${id}`])
 }
delete(id :any){
   this.profile.cardelete(id).subscribe((res: any)=>{
     
   })
  }
  create(){
    this.router.navigate(['/create'])
  }
}
