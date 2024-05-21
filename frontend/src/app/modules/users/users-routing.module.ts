import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserViewComponent } from './users-view/user-view.component';


const routes: Routes = [{ path: '', component: UsersComponent },

{path:'add',component:UsersAddComponent},
{path:'edit/:id',component:EditUserComponent},
{path:'view/:id',component:UserViewComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
