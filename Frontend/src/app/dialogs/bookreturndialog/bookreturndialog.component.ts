import { Component, OnInit } from '@angular/core';
import { IssuedBooksService } from 'src/app/services/issued-books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookreturndialog',
  templateUrl: './bookreturndialog.component.html',
  styleUrls: ['./bookreturndialog.component.css']
})
export class BookreturndialogComponent implements OnInit {

  constructor(
    private IssuedBooksService: IssuedBooksService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  bookReturned(){
    let deleteId = localStorage.getItem('deleteId');
    this.IssuedBooksService.bookReturned(deleteId)
    .subscribe((data) => {
      this.toastr.info('Item Removed')
    })
  };

}
