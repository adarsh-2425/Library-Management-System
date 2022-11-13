import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RegisterDialogComponent } from 'src/app/dialogs/register-dialog/register-dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Images
  loginDivUrl="https://source.unsplash.com/-4qhiC6RmQw";
  
  email:string = '';
  password:string = '';
  role:any;

  constructor(
    private toastr: ToastrService,
    private ValidateService: ValidateService,
    private AuthService: AuthService,
    private Router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    
    const user = {
      email: this.email,
      password: this.password
    }
    

    if(!this.ValidateService.validateEmail(user.email)){
      this.toastr.error('Please enter valid email');
      return false;
    }

    if(!this.ValidateService.validateLogin(user)){
      this.toastr.error('Please Fill in all fields');
      return false;
    }

    this.AuthService.authenticateUser(user)
    .subscribe(
      data => {
        if(data.success){
          this.AuthService.storeUserData(data.token, data.user, data.role, data.Name, data.id, data.email);
          this.toastr.success('Login Successful');
          const role = localStorage.getItem('role');
          if('Admin' == role){
            this.Router.navigate(['/admindashboard']);
          }
          else if('Librarian' == role){
            this.Router.navigate(['/Librarian/dashboard']);
          }
          else{
            this.Router.navigate(['/Member/dashboard']);
          }
        }
        else{
          this.toastr.error(data.msg);
        }
        
      }
    )};

     // Promote User Dialog
 openRegisterDialog(): void {
  let dialogRef = this.dialog.open(RegisterDialogComponent, { disableClose: true });
  height :'40%'
  width : '60%'
 }
}