import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent }, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class NavbarRoutingModule {}
