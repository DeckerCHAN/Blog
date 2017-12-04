import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './pages/primary.component';


const routes: Routes = [
  {path: '', redirectTo: '/primary', pathMatch: 'full'},
  {path: 'primary', component: PrimaryComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
