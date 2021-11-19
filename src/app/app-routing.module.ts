import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { SessionGuard } from '@core/guards/session.guard';

const routes:Routes=[
  {
    path:'auth',
    loadChildren:()=> import('./modules/auth/auth.module').then(m=> m.AuthModule) //Aplicable solo a modulos
 },
  {
     path:'',
     component: HomePageComponent,
     loadChildren:()=> import('./modules/home/home.module').then(m=> m.HomeModule) //Aplicable solo a modulos
     ,canActivate:[SessionGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }