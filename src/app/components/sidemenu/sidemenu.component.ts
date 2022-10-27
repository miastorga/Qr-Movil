import { Component, Input } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { SafeUrl } from '@angular/platform-browser'
import { FirebaseauthService } from 'src/app/services/firebaseauth.service'
import { Alumno } from 'src/app/interfaces'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Subscription } from 'rxjs'
@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
	@Input() userName: string
	@Input() nombre: string

	alumno: Alumno = {
		correo: '',
		foto: '',
		historial_qrs: [],
		id: '',
		nombre: '',
		username: '',
	}
	suscriberUserInfo: Subscription
	constructor(
		public alertController: AlertController,
		private router: Router,
		public firebaseAuthService: FirebaseauthService,
		public firestoreService: FirestoreService
	) {}
	// Inicio evento cerrar sesión
	// Si en la el alertController apretas click fuera del cuadro
	// El programa entenderá que quieres seguir en el menú
	async cerrarSesion() {
		const alert = await this.alertController.create({
			cssClass: 'my-custom-class',
			header: 'Atención',
			message: '¿Está seguro que desea cerrar sesión?',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {},
				},
				{
					text: 'Si',
					handler: async () => {
						this.firebaseAuthService.logOut()
						//TODO unsubcribe no funciona ARREGLAR
						this.suscriberUserInfo.unsubscribe()
						this.router.navigate(['/login'])
					},
				},
			],
		})

		await alert.present()
	}

	url: SafeUrl = ''
	onCodeChange(url: SafeUrl) {
		this.url = url
	}

	getUserInfo(uid: string) {
		const path = 'Cliente'
		this.suscriberUserInfo = this.firestoreService
			.getDocument<Alumno>(path, uid)
			.subscribe((res) => {
				this.alumno = res
			})
	}
}
