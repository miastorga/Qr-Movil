import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanerPageRoutingModule } from './escaner-routing.module';

import { EscanerPage } from './escaner.page';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'; // IMPORTADO

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanerPageRoutingModule
  ],
  declarations: [EscanerPage],

  providers:[ // PROVIDERS
    BarcodeScanner //PLUGIN CORDOVA INGRESADO
  ]
})
export class EscanerPageModule {}
