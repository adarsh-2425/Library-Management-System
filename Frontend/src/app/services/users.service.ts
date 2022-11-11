import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //server_address= "api";
  server_address= "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.server_address}/users/read`);
  }

  getUser(id:any){
    return this.http.get(`${this.server_address}/users/`+id);
  }

  

  // Update role as librarian
  editUser(user:any)
  {
    console.log('User update')
    return this.http.put(`${this.server_address}/users/updateuser/`,user)
    .subscribe(data =>{console.log(data)})
  }

  // Edit user by user
  editUserByUser(user:any)
  {
    console.log('User update')
    return this.http.put(`${this.server_address}/users/update/`,user)
    .subscribe(data =>{console.log(data)})
  }
  // Delete User
  deleteUser(id:any){
    return this.http.delete(`${this.server_address}/users/delete/`+id)
  }

}
