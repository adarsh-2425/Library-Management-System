import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { ManageMemberComponent } from './components/Admin/manage-member/manage-member.component';
import { BooksComponent } from './components/books/books/books.component';
import { ViewbookComponent } from './components/books/viewbook/viewbook.component';
import { HomeComponent } from './components/home/home.component';
import { LibrarianDashboardComponent } from './components/librarian-dashboard/librarian-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MemberDashboardComponent } from './components/member-dashboard/member-dashboard.component';

const routes: Routes = [
  {
    path : '', component: HomeComponent
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'admindashboard', component: DashboardAdminComponent,
  },
  {
    path: 'managemember', component: ManageMemberComponent
  },
  {
    path: 'librariandashboard', component: LibrarianDashboardComponent
  },
  {
    path: 'memberdashboard', component: MemberDashboardComponent
  },
  {
    path: 'books', component: BooksComponent,
  },
      {
        path: 'books/viewbook', component: ViewbookComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
