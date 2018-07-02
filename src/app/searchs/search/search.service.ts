import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientUrl: string = "//dummy-blue-hunter.mybluemix.net/user/by-name/";
  bookUrl: string = "//dummy-blue-hunter.mybluemix.net/book/by-title/";
  
  constructor(private http: HttpClient) { }

  //método para retornar a busca por nome do cliente
  getClient(name) {
    return this.http.get(this.clientUrl + name);
  }

  getBook(name){
    return this.http.get(this.bookUrl + name);
  }
  

}
