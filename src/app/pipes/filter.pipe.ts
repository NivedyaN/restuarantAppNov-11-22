import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restuarantsList:any[], filterString:String,propName:any):any[0] {
    const result:any=[]
    if(!restuarantsList || filterString=='' || propName==''){
      return restuarantsList

    }
     restuarantsList.forEach((restuarant:any)=>{

      if(restuarant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restuarant)
        console.log(result)
      }
     })
     return result
  }

}
