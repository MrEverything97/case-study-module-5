import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterFinallyComponent} from './register-finally/register-finally.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFinallyComponent
  },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
