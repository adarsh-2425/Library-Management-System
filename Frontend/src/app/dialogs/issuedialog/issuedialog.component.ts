import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-issuedialog',
  templateUrl: './issuedialog.component.html',
  styleUrls: ['./issuedialog.component.css']
})
export class IssuedialogComponent implements OnInit {

  
  item = {
    _id : localStorage.getItem('IssueId'),
    memberEmail : localStorage.getItem('memberEmail'),
    dueDate : '',
    remarks : ''
  }
 

  constructor(
    private IssuedBooksService: IssuedBooksService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  issueBook(){
    this.IssuedBooksService.issueBook(this.item)
    this.toastr.success('Book Issued')
  }



//this.dialogRef.close(); 
}
