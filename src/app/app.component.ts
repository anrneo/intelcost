import { Component } from '@angular/core';
import { PixabayService } from './pixabay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private apiService: PixabayService
  ) { }

  title = 'intelcost';
  images:any = {}
  model:any = {}

  ngOnInit() {
    this.getImages()
    
  }

  
  getImages(){
  this.apiService.getImages()
  .subscribe(dat=>{
    this.images = dat
   })
}

filtrarImages(search){
  if (search) {
    this.apiService.filtrarImages(search)
  .subscribe(dat=>{
    this.images = dat
  })
  }else{
    this.getImages() 
  }
  
  

}

searchCategories(cate){
  this.apiService.searchCategories(cate)
  .subscribe(dat=>{
    this.images = dat
  })

  
}

}
