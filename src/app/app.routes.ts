import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MythicMightComponent } from './mythic-might/mythic-might.component';
import { JottoComponent } from './jotto/jotto.component';
import { AboutComponent } from './about/about.component';

 export const routes: Routes = [
  { path: 'mythic-might', component: MythicMightComponent },
  { path: 'jotto', component: JottoComponent },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }