import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';

@Component({
  selector: 'app-memberissuedbooks',
  templateUrl: './memberissuedbooks.component.html',
  styleUrls: ['./memberissuedbooks.component.css']
})
export class MemberissuedbooksComponent implements OnInit {
  books:any[] | undefined;


  constructor(
    private IssuedBooksService: IssuedBooksService
  ) { }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    this.IssuedBooksService.IssuedBooksMember(email)
    .subscribe((data)=>{
      this.books = JSON.parse(JSON.stringify(data))
    })

    }
  }

