import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restuarants-list',
  templateUrl: './restuarants-list.component.html',
  styleUrls: ['./restuarants-list.component.css']
})
export class RestuarantsListComponent implements OnInit {
//property
restName="List of Restuarants"
restuarantList:any=[]


//to hold searchTerm
searchTerm=""

// dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    // apiservice call - to get all restuarant list--- asynchronous function call
    this.apiService.getRestuarantsList()
    .subscribe((result)=>{
      this.restuarantList=result
      console.log(this.restuarantList=result);
    })
    // to get search term from api service
     this.apiService.Search.subscribe((data)=>{
      console.log(data);
      this.searchTerm=data
     })

  }

}
