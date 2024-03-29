import { Component, Input, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service'
import { Alumno, DetalleQr } from 'src/app/interfaces'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Subscription } from 'rxjs'
import { SendEmailService } from 'src/app/services/send-email.service'
@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
	login: boolean = false
	@Input() alumno: Alumno
	@Input() loaded: boolean
	suscriberUserInfo: Subscription
	constructor(
		public alertController: AlertController,
		private router: Router,
		public firebaseAuthService: FirebaseAuthService,
		public firestoreService: FirestoreService,
		public emails: SendEmailService
	) {
		this.firebaseAuthService.stateUser().subscribe((res) => {
			if (res) {
				console.log('esta logeado')
				this.login = true
				this.getDatosAlumno(res.uid)
			} else {
				console.log('no esta logeado')
				this.router.navigate([''])
				this.login = false
			}
		})
	}

	async ngOnInit() {}

	async cerrarSesion() {
		const alert = await this.alertController.create({
			header: 'Atención',
			message: '¿Está seguro que desea cerrar sesión?',
			buttons: [
				{
					text: 'No',
					role: 'cancel',
					handler: (blah) => {},
				},
				{
					text: 'Si',
					handler: async () => {
						this.firebaseAuthService.logOut()
						this.router.navigate([''])
					},
				},
			],
		})

		await alert.present()
	}

	// funcionando

	getDatosAlumno(uid: string) {
		const path = 'Alumnos'
		const id = uid
		this.firestoreService.getDocument<Alumno>(path, id).subscribe((res) => {
			if (res) {
				this.alumno = res
			}
			this.loaded = true
			console.log('datos alumno -> ', res)
		})
	}
}
