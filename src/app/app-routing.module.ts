import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingComponent } from './components/hosting/hosting.component';

const routes: Routes = [
  {path: 'BecomeAHost' , component: HostingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
