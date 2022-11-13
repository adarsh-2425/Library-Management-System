import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';
import { ManageMemberComponent } from './components/Admin/manage-member/manage-member.component';
import { DashboardAdminComponent } from './components/Admin/dashboard-admin/dashboard-admin.component';
import { PromotedialogComponent } from './dialogs/promotedialog/promotedialog.component';
import { DeleteuserdialogComponent } from './dialogs/deleteuserdialog/deleteuserdialog.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { BooksComponent } from './components/books/books/books.component';
import { ViewbookComponent } from './components/books/viewbook/viewbook.component';
import { IssuedialogComponent } from './dialogs/issuedialog/issuedialog.component';
import { WaitinglistComponent } from './components/Librarian/waitinglist/waitinglist.component';
import { IssuedComponent } from './components/Librarian/issued/issued.component';
import { LibrarianDashboardComponent } from './components/Librarian/dashboard/dashboard.component';
import { MemberDashboardComponent } from './components/Member/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterDialogComponent,
    ManageMemberComponent,
    DashboardAdminComponent,
    PromotedialogComponent,
    DeleteuserdialogComponent,
    EdituserComponent,
    BooksComponent,
    ViewbookComponent,
    IssuedialogComponent,
    WaitinglistComponent,
    IssuedComponent,
    LibrarianDashboardComponent,
    MemberDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      "positionClass": "toast-top-center",
      timeOut: 2000,
      closeButton: true,
    }),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSliderModule,
  ],
  providers: [
    ValidateService,
    AuthService,
    RegisterDialogComponent,
    PromotedialogComponent,
    DeleteuserdialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
