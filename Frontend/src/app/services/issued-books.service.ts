import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssuedBooksService {

  server_address = 'http://localhost:3000/issuedbooks';

  constructor(
    private http: HttpClient
  ) { }

    //Take book by member
    takeBook(book:any){
      return this.http.post<any>(`${this.server_address}/takebook`, book)
    }

    //Issue Book By Librarian
    issueBook(item:any){
      return this.http.put(`${this.server_address}/issuebook`, item)
      .subscribe(data =>{console.log(data)})
    }

    //LIBRARIAN SERVICES

    //Books waiting to be issued
    waitingForIssue(){
      return this.http.get(`${this.server_address}/waiting`)
    }

    //Read All Issued Books
    issuedBooks(){
      return this.http.get(`${this.server_address}/issued`)
    }

    //MEMBER SERVICES

    //View the books submitted  by member
    viewSubmittedBooks(email:any){
      this.http.get(`${this.server_address}/viewsubmittedbooks/`+email)
    }

    viewIssuedBooks(email:any){
      this.http.get(`${this.server_address}/viewissuedbooks/`+email)
    }

}
