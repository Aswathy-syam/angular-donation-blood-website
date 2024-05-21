import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserViewComponent } from './users-view/user-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UsersAddComponent,
    EditUserComponent,
    UserViewComponent
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule

  ]
})
export class UsersModule { }
