import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-promotedialog',
  templateUrl: './promotedialog.component.html',
  styleUrls: ['./promotedialog.component.css']
})
export class PromotedialogComponent implements OnInit {

  user = {
    _id:'',
    Name:''
  }

  constructor(
    private UsersService: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    let id = localStorage.getItem('promoteuserid');
    this.UsersService.getUser(id)
    .subscribe((data)=>{
      this.user = JSON.parse(JSON.stringify(data));
    })
  }

  verify(user:any){
    this.UsersService.editUser(this.user);
    this.toastr.success(`${user.Name} verified as Librarian`);
    localStorage.removeItem('promoteuserid');
  }

}
