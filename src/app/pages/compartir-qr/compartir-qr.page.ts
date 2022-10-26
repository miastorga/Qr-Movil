import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-compartir-qr',
  templateUrl: './compartir-qr.page.html',
  styleUrls: ['./compartir-qr.page.scss'],
})
export class CompartirQrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //Inicio Transforma un link a QR 
  url: SafeUrl = ''
  onCodeChange(url: SafeUrl){
    this.url = url;
  }
  //Fin Transforma un link a QR
}
