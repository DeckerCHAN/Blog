import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './pages/resume.component';
import {AntiCheatingComponent} from './pages/anti-cheating.component';
import {SelectComponent} from './pages/select.component';


const routes: Routes = [
  {path: '', redirectTo: '/resume', pathMatch: 'full'},
  {path: 'anticheat', component: AntiCheatingComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'select', component: SelectComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
