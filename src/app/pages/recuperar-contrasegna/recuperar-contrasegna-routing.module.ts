import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarContrasegnaPage } from './recuperar-contrasegna.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarContrasegnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarContrasegnaPageRoutingModule {}
