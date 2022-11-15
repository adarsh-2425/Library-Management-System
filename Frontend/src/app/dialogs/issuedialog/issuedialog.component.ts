import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-issuedialog',
  templateUrl: './issuedialog.component.html',
  styleUrls: ['./issuedialog.component.css']
})
export class IssuedialogComponent implements OnInit {

  
  item = {
    _id : localStorage.getItem('IssueId'),
    title: localStorage.getItem('bookTitle'),
    memberEmail : localStorage.getItem('memberEmail'),
    dueDate : '',
    remarks : ''
  }
 

  constructor(
    private IssuedBooksService: IssuedBooksService,
    private toastr: ToastrService,
    private router: Router,
    private dialogRef: MatDialogRef<IssuedialogComponent>
  ) { }

  ngOnInit(): void {
  }

  issueBook(){
    this.IssuedBooksService.issueBook(this.item)
    this.toastr.success('Book Issued')
    
    localStorage.removeItem('IssueId');
    localStorage.removeItem('bookTitle');
    localStorage.removeItem('memberEmail');
    this.dialogRef.close();
  }

}
