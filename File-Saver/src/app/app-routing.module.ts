import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { FileuploadComponent } from './component/fileupload/fileupload.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { DashcontentComponent } from './component/dashcontent/dashcontent.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component : LoginComponent
  },
  {
    path:'signup', component : SignUpComponent
  },
  {
    path:'dashboard', component : DashboardComponent,
    children:[
      {path: '',component: DashcontentComponent},
      {path:'home', component:HomeComponent},
      {path:'fileupload', component:FileuploadComponent}
    ]
  },
  {
    path:'varify-email', component : VarifyEmailComponent
  },
  {
    path:'forget-password', component : ForgetPasswordComponent
  },
  // {
  //   path:'fileupload', component:FileuploadComponent
  // },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
