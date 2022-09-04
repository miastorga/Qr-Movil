import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarContrasegnaPageRoutingModule } from './recuperar-contrasegna-routing.module';

import { RecuperarContrasegnaPage } from './recuperar-contrasegna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContrasegnaPageRoutingModule
  ],
  declarations: [RecuperarContrasegnaPage]
})
export class RecuperarContrasegnaPageModule {}
