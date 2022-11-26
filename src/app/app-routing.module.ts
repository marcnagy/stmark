import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home-page/home.module').then((m) => m.HomePageModule)
  },
  {
    path:'SignIn',
    loadChildren: () =>
      import('./modules/sign-in/sign-in.module').then((m) => m.SigninModule)
  },
  {
    path:'SignUp',
    loadChildren: () =>
      import('./modules/signup/sign-up.module').then((m) => m.SignUpModule)
  },
  {
    path:'donation',
    loadChildren: () =>
      import('./modules/Donations/donation.module').then((m) => m.DonationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
