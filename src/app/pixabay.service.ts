import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  constructor(
    private http: HttpClient
  ) { }

  public url_base = 'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';  // URL to web api

  getImages () {        
    return this.http.get(this.url_base)  
  } 

  filtrarImages (filtar) {  
    return this.http.get(`${this.url_base}&lang=es&q=${filtar}`)  
  } 

  searchCategories (cate) {  
    return this.http.get(`${this.url_base}&category=${cate}`)  
  } 

}
