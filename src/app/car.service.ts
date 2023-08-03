import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private Http:HttpClient) { 

  }
  carget(){
    return this.Http.get<any>('http://127.0.0.1:8000/cars/')
  }
  cargetit(id: any){
    return this.Http.get<any>(`http://127.0.0.1:8000/car/${id}/`)
   }

   caredit(id : any ,data:any){
    return this.Http.put<any>(`http://127.0.0.1:8000/car/${id}/`,data)
   }
  cardelete(id : any ){
    return this.Http.delete<any>(`http://127.0.0.1:8000/car/${id}/`)
   }
   carcreate(data:any){
    return this.Http.post<any>('http://127.0.0.1:8000/cars/',data)
   }
}
