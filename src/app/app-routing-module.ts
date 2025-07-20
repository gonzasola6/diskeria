import { BreweryDisks } from './brewery-disks/brewery-disks';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryAbout } from './brewery-about/brewery-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'disks',
    pathMatch: 'full'
  },
  {
    path: 'disks',
    component: BreweryDisks
  },
  {
    path: 'about',
    component: BreweryAbout
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
