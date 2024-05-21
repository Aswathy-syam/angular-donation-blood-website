import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  
  {path:"",component:HomeComponent},
  {path:"donors",component:DetailsComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
