import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './pages/primary.component';
import { ResumeComponent } from './pages/resume.component';
import { GameComponent } from './pages/game.component';


const routes: Routes = [
  {path: '', redirectTo: '/resume', pathMatch: 'full'},
  {path: 'primary', component: PrimaryComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'game', component: GameComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
