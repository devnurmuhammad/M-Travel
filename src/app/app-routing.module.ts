import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
