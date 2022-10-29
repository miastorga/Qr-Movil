import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialQrsPageRoutingModule } from './historial-qrs-routing.module';

import { HistorialQrsPage } from './historial-qrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialQrsPageRoutingModule
  ],
  declarations: [HistorialQrsPage]
})
export class HistorialQrsPageModule {}
