import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deleteuserdialog',
  templateUrl: './deleteuserdialog.component.html',
  styleUrls: ['./deleteuserdialog.component.css']
})
export class DeleteuserdialogComponent implements OnInit {

name = localStorage.getItem('deleteusername');

  constructor(
    private UsersService: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  delete(){
    let deleteid = localStorage.getItem("deleteUserId");
    this.UsersService.deleteUser(deleteid)
    .subscribe((data)=>{
      this.toastr.success(`${this.name} Deleted`)
    })
    localStorage.removeItem('deleteusername');
    localStorage.removeItem('deleteUserId');
  }

}
