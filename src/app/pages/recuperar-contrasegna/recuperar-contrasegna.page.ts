import { Component, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service'
import { InteractionsService } from 'src/app/services/interactions.service'

@Component({
	selector: 'app-recuperar-contrasegna',
	templateUrl: './recuperar-contrasegna.page.html',
	styleUrls: ['./recuperar-contrasegna.page.scss'],
})
export class RecuperarContrasegnaPage implements OnInit {
	correo: string
	constructor(
		private interactions: InteractionsService,
		public authFireBase: FirebaseAuthService
	) {}

	ngOnInit() {}

	resetPassword() {
		this.authFireBase.resetPassword(this.correo)
		this.interactions.showAlertSimple({
			header: '¡Correo enviado de forma exitosa!',
			subHeader: 'Revisa tu correo electronico',
			message: '___________________________',
			buttons: ['ok'],
		})
	}
}
