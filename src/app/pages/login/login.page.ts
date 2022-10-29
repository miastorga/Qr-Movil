import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular'
import { Alumno } from 'src/app/interfaces'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service'
import { FirestoreService } from '../../services/firestore.service'
import { Subscription } from 'rxjs'
import { InteractionsService } from 'src/app/services/interactions.service'
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	user = {}
	usuario = ''
	password = ''
	buscarAlumno
	field = ''
	alumnos = []

	alumno: Alumno = {
		correo: '',
		foto: '',
		historial_qrs: [],
		id: '',
		nombre: '',
		username: '',
	}
	uid = ''
	suscriberUserInfo: Subscription
	constructor(
		private router: Router,
		public toastController: ToastController,
		public database: FirestoreService,
		public firebaseAuthService: FirebaseAuthService,
		public firestoreService: FirestoreService,
		public interactions: InteractionsService
	) {}

	ngOnInit() {}
	initAlumno() {
		this.uid = ''
		this.alumno = {
			correo: '',
			foto: '',
			historial_qrs: [],
			id: '',
			nombre: '',
			username: '',
		}
		console.log(this.alumno)
	}
	async ingresar() {
		await this.interactions.presentLoading('Ingresando')
		const res = await this.firebaseAuthService
			.logIn(this.usuario, this.password)
			.catch((error) => {
				console.log('error login')
				this.interactions.closeLoading()
				this.interactions.presentToast('Usuario o Contraseña incorrecta')
			})
		if (res) {
			console.log('res ->', res)
			this.interactions.closeLoading()
			this.interactions.presentToast('Ingresado con exito')
			this.router.navigate(['/home'])
		}
	}
}
