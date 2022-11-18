import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { slideInOut } from 'src/app/animations/animation';
import { fade } from 'src/app/animations/fade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    slideInOut,
    fade
  ]
})
export class MemberDashboardComponent implements OnInit {
  waitingbooks:any[] | undefined;
  issuedbooks:any[] | undefined;
  Name = localStorage.getItem('Name');
  Role = localStorage.getItem('role');


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
