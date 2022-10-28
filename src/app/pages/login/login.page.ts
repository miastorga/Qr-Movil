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
	) {
		// this.firebaseAuthService.stateAuth().subscribe((res) => {
		// 	console.log(res)
		// 	if (res != null) {
		// 		this.uid = res.uid
		// 		this.getUserInfo(this.uid)
		// 	} else {
		// 		this.initAlumno()
		// 	}
		// })
	}

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
		await this.interactions.presentLoading('Ingresando...')
		const res = this.firebaseAuthService
			.logIn(this.usuario, this.password)
			.catch((error) => {
				console.log('error')
				this.interactions.closeLoading()
				this.interactions.presentToast('Usuario o contraseña invalida')
			})
		if (res) {
			console.log('Login respuesta: ', res)
			this.interactions.closeLoading()
			// this.router.navigate(['/home'])
		}

		// this.historial = {
		// 	detalles: 'detalles',
		// 	hora: new Date(),
		// 	profesor: 'jesus jesus jesus',
		// 	siglas: '55555',
		// 	id: this.database.getId(),
		// }
		// const path = 'Alumnos'
		// const id = this.database.getId()
		// this.database.createDocument(this.historial, path, id)
		// this.router.navigate(['/home'], navigationExtras)
		// }
	}

	// getUserInfo(uid: string) {
	// 	console.log('getuserinfo')
	// 	const path = 'Alumno'
	// 	this.suscriberUserInfo = this.firestoreService
	// 		.getDocument<Alumno>(path, uid)
	// 		.subscribe((res) => {
	// 			this.alumno = res
	// 		})
	// }
}
