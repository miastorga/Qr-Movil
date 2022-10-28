import { Component, Input, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service'
import { Alumno } from 'src/app/interfaces'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Subscription } from 'rxjs'
@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
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
		public firebaseAuthService: FirebaseAuthService,
		public firestoreService: FirestoreService
	) {}

	async ngOnInit() {}

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
						this.router.navigate(['/login'])
					},
				},
			],
		})

		await alert.present()
	}
}
