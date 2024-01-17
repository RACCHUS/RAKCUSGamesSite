import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MythicMightComponent } from './mythic-might.component';

 export const routes: Routes = [
  { path: 'mythic-might', component: MythicMightComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }