import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  Books = {
    title:'',
    author:'',
    image:''
  }

  title:string = '';
  memberName:string = '';


  constructor(
    private BooksService: BooksService,
    private router: Router,
    private IssuedBooksService: IssuedBooksService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let BookId = localStorage.getItem('BookId');
    this.BooksService.getBook(BookId)
    .subscribe((data)=>{
      this.Books = JSON.parse(JSON.stringify(data));
    });
  }

  takeBook(Books:any){
    let books = {
      title : Books.title,
      memberName : localStorage.getItem('Name'),
      memberEmail: localStorage.getItem('email')
    }
    this.IssuedBooksService.takeBook(books)
    .subscribe(
      data =>{
        if(data.success){
          this.toastr.success(data.msg);
          this.router.navigate(['books'])
        }
        else{
          this.toastr.error(data.msg)
        }
      }
    )
  }

}
