import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any[] | undefined;

  constructor(
    public authService: AuthService,
    private BooksService: BooksService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.BooksService.getBooks()
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data))
    })
  };

  viewBook(book:any){
    localStorage.setItem("BookId", book._id.toString());
    this.Router.navigate(['books/viewbook'])
  }

}
