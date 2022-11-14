import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  query:any = '';
  queryType:any = 'title';
  books:any[] | undefined;
  book={
    title:'',
    author:''
  }

  constructor(
    public authService: AuthService,
    private BooksService: BooksService,
    private Router: Router,
    private SearchService: SearchService
  ) { }

  ngOnInit(): void {
    this.BooksService.getBooks()
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data))
    })
  };

  search(){
    let item = {
      query : this.query,
      queryType : this.queryType
    }
    this.SearchService.search(item)
    .subscribe((data)=>{
      this.books = data;
    })
  }

  viewBook(book:any){
    localStorage.setItem("BookId", book._id.toString());
    this.Router.navigate(['books/viewbook'])
  }

}
