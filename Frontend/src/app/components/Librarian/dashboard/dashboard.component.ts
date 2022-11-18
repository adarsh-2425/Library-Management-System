import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class LibrarianDashboardComponent implements OnInit {
  waitingbooks:any[] | undefined;
  issuedbooks:any[] | undefined;
  Name = localStorage.getItem('Name');

  constructor(
    private IssuedBooksService: IssuedBooksService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    //Waiting books
    this.IssuedBooksService.waitingForIssue()
    .subscribe((data)=>{
      this.waitingbooks = JSON.parse(JSON.stringify(data))
    })

     //Books issued
     this.IssuedBooksService.issuedBooks()
     .subscribe((data)=>{
       this.issuedbooks = JSON.parse(JSON.stringify(data))
     })
  }

  submittedbooks(){
    this.router.navigate(['/Librarian/waitinglist'])
  }

  issuedbooksfn(){
    this.router.navigate(['/Librarian/issued'])

  }

}
