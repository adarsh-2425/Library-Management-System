import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { IssuedialogComponent } from 'src/app/dialogs/issuedialog/issuedialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-waitinglist',
  templateUrl: './waitinglist.component.html',
  styleUrls: ['./waitinglist.component.css']
})
export class WaitinglistComponent implements OnInit {

  list:any[] | undefined;

  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(
    private IssuedBooksService: IssuedBooksService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.IssuedBooksService.waitingForIssue()
    .subscribe((data)=>{
      this.list = JSON.parse(JSON.stringify(data))
    })
  };

  openDialog(user:any): void {
   
    localStorage.setItem("IssueId", user._id.toString());
    localStorage.setItem("memberEmail", user.memberEmail.toString());
    localStorage.setItem("bookTitle", user.title.toString());

    let dialogRef = this.dialog.open(IssuedialogComponent);
    
      height :'40%'
      width : '60%'
      
    //Refresh page after dialog close angular
    dialogRef.afterClosed()
    .subscribe(() => this.ngOnInit());
  }

}
