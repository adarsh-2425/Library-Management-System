import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
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
    path : 'admindashboard', component: AdminDashboardComponent
  },
  {
    path: 'librariandashboard', component: LibrarianDashboardComponent
  },
  {
    path: 'memberdashboard', component: MemberDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
