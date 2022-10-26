import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasegna',
  templateUrl: './recuperar-contrasegna.page.html',
  styleUrls: ['./recuperar-contrasegna.page.scss'],
})
export class RecuperarContrasegnaPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async showAlert(){
    await this.alertCtrl.create({
      header: "Nueva contraseña cambiada con éxito",
      subHeader: "_______________________",
      message: "Se ha enviado su nueva contraseña a su correo",

      buttons: ['De acuerdo'],

    }).then(res => res.present()); // MOSTRAR POR PANTALLA EL AlertCtrl
  }

}
