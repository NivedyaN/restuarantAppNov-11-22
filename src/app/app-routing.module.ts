import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  //defining path for each component
  
  //RestuarantsListComponent  -  localhost:4200
  {
    path:'',component:RestuarantsListComponent
  },
  //ViewRestuarantComponent   -  localhost:4200/view-restuarant
  {
    path:'view-restuarant/:id',component:ViewRestuarantComponent
  },
  //AddRestuarantComponent   -  localhost:4200/add-restuarant
  {
    path:'add-restuarant',component:AddRestuarantComponent
  },
  //UpdateRestuarantComponent  - localhost:4200/update-restuarant
  {
    path:'update-restuarant/:id',component:UpdateRestuarantComponent
  },
  //DeleteRestuarantComponent  - localhost:4200/delete-restuarant
  {
    path:'delete-restuarant/:id',component:DeleteRestuarantComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
