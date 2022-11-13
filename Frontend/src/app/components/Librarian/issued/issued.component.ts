import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BookreturndialogComponent } from 'src/app/dialogs/bookreturndialog/bookreturndialog.component';

@Component({
  selector: 'app-issued',
  templateUrl: './issued.component.html',
  styleUrls: ['./issued.component.css']
})
export class IssuedComponent implements OnInit {

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
    this.IssuedBooksService.issuedBooks()
    .subscribe((data)=>{
      this.list = JSON.parse(JSON.stringify(data))
    })
  }

  openDialog(user:any): void {
   
    localStorage.setItem("deleteId", user._id.toString());
    let dialogRef = this.dialog.open(BookreturndialogComponent);
    
      height :'40%'
      width : '60%'
      
    //Refresh page after dialog close angular
    dialogRef.afterClosed()
    .subscribe(() => this.ngOnInit());
  }

}
