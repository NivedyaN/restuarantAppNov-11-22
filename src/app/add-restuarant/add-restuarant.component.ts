import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restuarant',
  templateUrl: './add-restuarant.component.html',
  styleUrls: ['./add-restuarant.component.css']
})
export class AddRestuarantComponent implements OnInit {

  id:any;
  neighborhood:any;
  photograph:any;
  Monday:any;
  Tuesday:any;
  Wednesday:any;
  Thursday:any;
  Friday:any;
  Saturday:any;
  Sunday:any;
  rName:any;
  address:any;
  type:any;
  rvname:any;
  lat:any;
  lng:any;
  cuisine_type: any;
  comments: any;
  rating: any;
  date: any;
  constructor(private api:ApiService,private router:Router) { }
  ngOnInit(): void {
  }

  addProduct(){
    
  let newRestuarant={
    id: this.id,
    name: this.rName,
    neighborhood : this.neighborhood,
    photograph: this.photograph,
    address: this.address,
    latlng:{
      lat: this.lat,
      lng: this.lng
    },
    cuisine_type: this.cuisine_type,
    operating_hours:{
      Monday:this.Monday,
      Tuesday:this.Tuesday,
      Wednesday:this.Wednesday,
      Thursday:this.Thursday,
      Friday:this.Friday,
      Saturday:this.Saturday,
      Sunday:this.Sunday,
    },
     reviews:[
      {
        name: this.rvname,
        date:this.date,
        rating:this.rating,
        Comments:this.comments
      }
    ]
  }
  console.log(newRestuarant);
this.api.addRestuarant(newRestuarant)
.subscribe(()=>{
   alert("Restuarant details added Successfully!!!")
this.router.navigateByUrl('')
})

  }
  
}
