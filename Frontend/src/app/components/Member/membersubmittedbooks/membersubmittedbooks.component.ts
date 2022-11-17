import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';

@Component({
  selector: 'app-membersubmittedbooks',
  templateUrl: './membersubmittedbooks.component.html',
  styleUrls: ['./membersubmittedbooks.component.css']
})
export class MembersubmittedbooksComponent implements OnInit {
  books:any[] | undefined;


  constructor(
    private IssuedBooksService: IssuedBooksService
  ) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    this.IssuedBooksService.SubmittedBooksMember(email)
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data))
    })
  }

}
