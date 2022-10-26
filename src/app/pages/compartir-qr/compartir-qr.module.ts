import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirQrPageRoutingModule } from './compartir-qr-routing.module';

import { CompartirQrPage } from './compartir-qr.page';

//importados para el QR
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirQrPageRoutingModule,
    QRCodeModule// QR
  ],
  declarations: [CompartirQrPage],
  providers:[] //
})

export class CompartirQrPageModule {

}
