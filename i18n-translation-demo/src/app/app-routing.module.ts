import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'random', component: RandomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
