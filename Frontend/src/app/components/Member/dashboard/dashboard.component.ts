import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class MemberDashboardComponent implements OnInit {
  waitingbooks:any[] | undefined;
  issuedbooks:any[] | undefined;
  Name = localStorage.getItem('Name');


  constructor(
    private IssuedBooksService: IssuedBooksService

  ) { }

  ngOnInit(): void {

     //Books issued
    const waitingemail = localStorage.getItem('email');
    this.IssuedBooksService.SubmittedBooksMember(waitingemail)
    .subscribe((data)=>{
      this.waitingbooks = JSON.parse(JSON.stringify(data))
    })

    //Waiting books
    const issuedemail = localStorage.getItem('email');
    this.IssuedBooksService.IssuedBooksMember(issuedemail)
    .subscribe((data)=>{
      this.issuedbooks = JSON.parse(JSON.stringify(data))
    })
  }

}
