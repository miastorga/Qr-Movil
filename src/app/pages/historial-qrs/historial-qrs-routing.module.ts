import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialQrsPage } from './historial-qrs.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialQrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialQrsPageRoutingModule {}
