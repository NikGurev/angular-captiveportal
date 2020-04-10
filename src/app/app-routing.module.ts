import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import {AccountComponent} from './components/account/account.component';
import {PageDesignComponent} from './components/account/page-design/page-design.component';
import {HomeComponent} from './components/account/home/home.component';
import {NavigationComponent} from "./components/account/navigation/navigation.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'account', component: AccountComponent, children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'design', component: PageDesignComponent },
      { path: 'other', component: NavigationComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
