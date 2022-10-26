import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirQrPage } from './compartir-qr.page';


const routes: Routes = [
  {
    path: '',
    component: CompartirQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class CompartirQrPageRoutingModule {}
