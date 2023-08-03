import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private route:ActivatedRoute,private runedit:CarService,private routecar:Router){

  }
  public car={
    "carname":'',
    "company":'',
    "price":null,
    "features":''
  }
  
  id:any
  
  
  ngOnInit(){
  this.id=this.route.snapshot.paramMap.get('id')
      this.runedit.cargetit(this.id).subscribe((res:any)=>{
        console.log({res})
        this.car=res
      })
    }
  
  editfun(){
      if(this.id){
        this.runedit.caredit(this.id,this.car).subscribe((res:any)=>{
          if(res){
            this.routecar.navigate(['/profile'])
          }
        })
      }
      
    }

}
