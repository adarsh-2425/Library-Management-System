import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { ManageMemberComponent } from './components/Admin/manage-member/manage-member.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
