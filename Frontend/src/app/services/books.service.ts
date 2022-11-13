import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  server_address = 'http://localhost:3000/books';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

    getBook(id:any){
      return this.http.get(`${this.server_address}/readone/`+id)
    }

    // Read All Books
    getBooks(){
      return this.http.get(`${this.server_address}/read`)
    }

    postBook(book:any){
      return this.http.post<any>(`${this.server_address}/create`, book);
    }

    updateBook(book:any){
      return this.http.put(`${this.server_address}/update`, book)
      .subscribe(data=>{
        console.log(data);
      })
    }

    deleteBook(id:any){
      return this.http.delete(`${this.server_address}/delete/`+id)
    }

}
