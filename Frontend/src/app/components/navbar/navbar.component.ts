import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../Librarian/add-book-dialog/add-book-dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query:any = '';
  queryType:any = '';

  constructor(
    public authService:AuthService,
    private router:Router,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    this.authService.logout();
    this.toastr.warning('You are Logged out')
    this.router.navigate(['/login'])
     return false;
  };

  openAddBookDialog(){
    let dialogRef = this.dialog.open(AddBookDialogComponent, {disableClose: true});
  }

  refreshBook(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/books']);
  });
  
  }
}
