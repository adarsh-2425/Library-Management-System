import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  server_address = 'http://localhost:3000/search';

  constructor(
    private http: HttpClient
  ) { }

  search(item:any){
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post<any>(`${this.server_address}`, item, {
      headers
    })
    
  }
}
