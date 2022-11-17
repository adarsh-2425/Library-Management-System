import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { ManageMemberComponent } from './components/Admin/manage-member/manage-member.component';
import { BooksComponent } from './components/books/books/books.component';
import { ViewbookComponent } from './components/books/viewbook/viewbook.component';
import { HomeComponent } from './components/home/home.component';
import { LibrarianDashboardComponent } from './components/Librarian/dashboard/dashboard.component';
import { MemberDashboardComponent } from './components/Member/dashboard/dashboard.component';

import { IssuedComponent } from './components/Librarian/issued/issued.component';
import { WaitinglistComponent } from './components/Librarian/waitinglist/waitinglist.component';
import { LoginComponent } from './components/login/login.component';
import { IssuedBooksService } from './services/issued-books.service';
import { MemberissuedbooksComponent } from './components/Member/memberissuedbooks/memberissuedbooks.component';
import { MembersubmittedbooksComponent } from './components/Member/membersubmittedbooks/membersubmittedbooks.component';

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
    path: 'books', component: BooksComponent,
  },
  {
    path: 'books/viewbook', component: ViewbookComponent
  },
  {
    path: 'Librarian/waitinglist', component: WaitinglistComponent
  },
  {
    path: 'Librarian/issued', component: IssuedComponent
  },
  {
    path: 'Librarian/dashboard', component : LibrarianDashboardComponent
  },
  {
    path: 'Member/dashboard', component: MemberDashboardComponent
  },
  {
    path: 'Member/issuedbooks', component: MemberissuedbooksComponent
  },
  {
    path: 'Member/submittedbooks', component: MembersubmittedbooksComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
