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

    //MEMBER SERVICES

    //Take book by member
    takeBook(book:any){
      return this.http.post<any>(`${this.server_address}/takebook`, book)
    }

    //View the books submitted  by member
    SubmittedBooksMember(email:any){
      return this.http.get(`${this.server_address}/viewsubmittedbooks/`+email)
    }

    IssuedBooksMember(email:any){
      return this.http.get(`${this.server_address}/viewissuedbooks/`+email)
    }

    //LIBRARIAN SERVICES

    //Issue Book By Librarian
    issueBook(item:any){
      return this.http.put(`${this.server_address}/issuebook`, item)
      .subscribe(data =>{console.log(data)})
    }

    //Books waiting to be issued
    waitingForIssue(){
      return this.http.get(`${this.server_address}/waiting`)
    }

    //Read All Issued Books
    issuedBooks(){
      return this.http.get(`${this.server_address}/issued`)
    }

    //Delete Returned Books from Issuedbooks DB
    bookReturned(deleteId:any){
      return this.http.delete(`${this.server_address}/delete/`+deleteId)
    }

    
}
