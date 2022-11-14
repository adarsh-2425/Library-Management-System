import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/services/books.service';
import { ValidateService } from 'src/app/services/validate.service';

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
    private ValidateService: ValidateService
  ) { }

  ngOnInit(): void {
  }

  onBookSubmit(){
    
    console.log(this.Book);
    
    if(!this.ValidateService.validateBook(this.Book)){
      this.toastr.error('You did not write any stories!!');
      return false;
    }

    // this.ContentService.postContent(content).subscribe(
    //   data =>{
    //     if(data.success){
    //       this.toastr.success('Post is Successfully Published!');
    //       this.router.navigate(['/dashboard']);
    //     }
    //     else{
    //       this.toastr.error("Post Cannot be Published At The Moment. Try Again later!")
    //     }
    //   }
    // )
    
  }

  // resetContent(){
  //   this.ContentService.resetContent();
  //   this.router.navigate(['/postcontent']);
  // }

  // discard(){
  //   this.ContentService.discard();
  // }

}
