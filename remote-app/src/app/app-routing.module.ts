import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  
  {
    path: 'flight',
    loadChildren: () => import('./flight/flight.module').then( m => m.FlightPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
