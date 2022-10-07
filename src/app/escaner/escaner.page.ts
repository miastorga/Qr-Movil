import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-escaner',
  templateUrl: './escaner.page.html',
  styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {

  codigo: any; // especificarle a la aplicacion cuál es la info primaria

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    
  }

  scan(){ // PARA QUE ESCANEE DESDE UN BOTON Y NO DIRECTAMENTE DESDE EL HOME
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo = barcodeData.text; // muestra texto por consola, para leer errores
      console.log('Barcode data', this.codigo);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
