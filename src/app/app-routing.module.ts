import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BriefComponent } from './brief/brief.component';
import { PressemitteilungComponent } from './pressemitteilung/pressemitteilung.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form/brief', component: BriefComponent, data: { name: 'brief' } },
  {
    path: 'form/pressemitteilung',
    component: PressemitteilungComponent,
    data: { name: 'pressemitteilung' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
