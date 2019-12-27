import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrospectiveComponent } from './retrospective/retrospective.component';
import { CreatenewretrospectiveComponent } from './retrospective/createnewretrospective/createnewretrospective.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'retrospective', component:RetrospectiveComponent},
  {path:'createnewretrospective', component:CreatenewretrospectiveComponent},
  {path:'', redirectTo:'retrospective', pathMatch:'full'},
  {path:'**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
