import { GameDetailsComponent } from './game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { PlatformComponent } from './platform/platform.component';
import { CategoriesComponent } from './categories/categories.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'platform/:name',canActivate:[AuthGuard],component:PlatformComponent},
  {path:'gameDetails/:id',canActivate:[AuthGuard],component:GameDetailsComponent},
  {path:'category/:name',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'sort-by/:item',canActivate:[AuthGuard],component:SortByComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
