import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/services/books.service';
import { ValidateService } from 'src/app/services/validate.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent implements OnInit {

  Book = {
    title:'',
    author: '',
    genre:'',
    about: '',
    publicationDate:'',
    image: '',
  }

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private BooksService: BooksService,
    private ValidateService: ValidateService,
    private matDialog: MatDialogRef<AddBookDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onBookSubmit(){
    
    console.log(this.Book);
    
    if(!this.ValidateService.validateBook(this.Book)){
      this.toastr.error('No Books Added!!');
      return false;
    }

    this.BooksService.postBook(this.Book).subscribe(
        data =>{
          if(data.success){
            this.toastr.success('Book is Successfully Added!');
            this.matDialog.close();
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/books']);
          }); 
          }
          else{
            this.toastr.error("Book Cannot be Added At The Moment. Try Again later!")
          }
        }
      )
    
  }

  // resetContent(){
  //   this.ContentService.resetContent();
  //   this.router.navigate(['/postcontent']);
  // }

  // discard(){
  //   this.ContentService.discard();
  // }

}
