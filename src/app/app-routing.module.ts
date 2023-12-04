import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path:'recuperar',component: RecuperarComponent},
  {path:'registrar',component: RegistrarComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
