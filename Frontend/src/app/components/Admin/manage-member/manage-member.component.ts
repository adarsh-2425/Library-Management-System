import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {MatDialog} from '@angular/material/dialog';
import { PromotedialogComponent } from 'src/app/dialogs/promotedialog/promotedialog.component';
import { DeleteuserdialogComponent } from 'src/app/dialogs/deleteuserdialog/deleteuserdialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-member',
  templateUrl: './manage-member.component.html',
  styleUrls: ['./manage-member.component.css']
})
export class ManageMemberComponent implements OnInit {

  visible: any;
  users:any[] | undefined
  Name = localStorage.getItem('Name');
  Role = localStorage.getItem('role');

  constructor(
    private userService: UsersService,
    public dialog: MatDialog,
    public authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users = JSON.parse(JSON.stringify(data));
    });
}

editUser(user:any){
  localStorage.setItem("editUserId", user._id.toString());
  this.router.navigate(['/edituser'])
}

promote(user:any){
  localStorage.setItem('promoteuserid', user._id.toString())
  let dialogRef = this.dialog.open(PromotedialogComponent);

  dialogRef.afterClosed()
  .subscribe(()=> this.ngOnInit());
}

deleteUser(user:any){
  localStorage.setItem("deleteUserId", user._id.toString());
  localStorage.setItem('deleteusername', user.Name.toString());
  let dialogRef = this.dialog.open(DeleteuserdialogComponent)

  dialogRef.afterClosed()
  .subscribe(()=> this.ngOnInit());

}
}
