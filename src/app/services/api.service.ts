import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestuarantComponent } from '../delete-restuarant/delete-restuarant.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  deleteRestuarant(restId: any) {
    throw new Error('Method not implemented.');
  }
  //variables

  Search= new BehaviorSubject("")
  


// dependency injection
  constructor(private api:HttpClient) { }

  //userdefined functions
  
  // to get all restuarnat list
  getRestuarantsList()
  {
   // use http request get -make api call to - http://localhost:3000/restaurants 
   //get()-HttpClient class-HttpClientModule library
   return this.api.get('http://localhost:3000/restaurants')
} 

//2.get a single restuarant details frm api
viewRestuarnt(restId:any){
  return this.api.get('http://localhost:3000/restaurants/'+restId)

}
// 3/to add new restuarant details 
addRestuarant(newRestuarant:any){
  return this.api.post('http://localhost:3000/restaurants/',newRestuarant)
}
//4. to update perticular restuarant
updateRestuarant(restId:any, updateRestBody:any){
  return this.api.put('http://localhost:3000/restaurants/'+restId,updateRestBody)
}

//5.to delete perticular restuarant
DeleteRestuarantComponent(restId:any){
  return this.api.delete('http://localhost:3000/restaurants/'+restId)
}

}

  
  
  
