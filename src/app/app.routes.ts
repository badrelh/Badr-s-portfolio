import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'projects', component: ProjectsComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'nav', component: NavComponent },
    { path: 'home', component: HomeComponent },  
    { path: 'about', component: AboutComponent },  
    { path: 'contact', component: ContactComponent },
];
