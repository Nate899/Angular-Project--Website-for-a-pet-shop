import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PetsComponent } from './Components/pets/pets.component';

const routes: Routes = [
  { path: 'main', component:MainComponent},
  { path:'contact', component: ContactUsComponent},
  {path:'pets', component: PetsComponent},
  {path:'' ,redirectTo: 'main' ,pathMatch:'full'},
  {path:'**', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
