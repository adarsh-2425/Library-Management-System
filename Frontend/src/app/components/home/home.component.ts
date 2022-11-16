import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:any[] | undefined;

  

  constructor(
    private BooksService: BooksService,
    private Router: Router,
  ) { }

  ngOnInit(): void {
    this.BooksService.getBooks()
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data))
    })
  }

  viewBook(book:any){
    localStorage.setItem("BookId", book._id.toString());
    this.Router.navigate(['books/viewbook'])
  }

  

}
