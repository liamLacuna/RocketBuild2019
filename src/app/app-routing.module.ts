import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingComponent } from './components/hosting/hosting.component';

const routes: Routes = [
  {path: 'Become a Host' , component: HostingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
