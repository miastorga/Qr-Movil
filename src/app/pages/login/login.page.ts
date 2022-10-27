import { Component, OnInit } from '@angular/core'
import { Router, NavigationExtras } from '@angular/router'
import { ToastController } from '@ionic/angular'
import { Alumno } from 'src/app/interfaces'
import { FirebaseauthService } from 'src/app/services/firebaseauth.service'
import { AlumnosDataService } from '../../services/alumnos-data.service'
import { FirestoreService } from '../../services/firestore.service'

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
	constructor(
		private router: Router,
		public toastController: ToastController,
		private alumnosService: AlumnosDataService,
		public database: FirestoreService,
		public firebaseAuthService: FirebaseauthService,
		public firestoreService: FirestoreService
	) {
		this.firebaseAuthService.stateAuth().subscribe((res) => {
			console.log(res)
			if (res != null) {
				this.uid = res.uid
				this.getUserInfo(this.uid)
			} else {
				this.initAlumno()
			}
		})
	}

	ngOnInit() {
		// Cuando este componente carge por primera vez se ejecutara esto ⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊
		// Tomos los datos de la API, los recorro y los guardo en la varible alumnos
		// donde alumnos es una lista que almacena muchos objetos (alumnos)
		this.alumnosService.getAlumnos().subscribe((resp) => {
			Object.values(resp).forEach((alumno) => {
				this.alumnos.push(...alumno)
				console.log(this.alumnos)
			})
		})
	}
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
	}
	ingresar() {
		// if (this.validarAlumno(this.usuario, this.password)) {
		this.presentToast('Bienvenido ' + this.usuario)
		let navigationExtras: NavigationExtras = {
			state: {
				user: { user: this.buscarAlumno }, // Al estado se asignamos un objeto con clave y valor
			},
		}
		this.firebaseAuthService
			.logIn(this.usuario, this.password)
			.then((res) => {
				console.log('Ingreso usuario', res)
			})
			.catch((err) => {
				console.log('error', err)
			})
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
		this.router.navigate(['/home'], navigationExtras)
		// }
	}

	// validarAlumno(user: string, pass: string) {
	// this.buscarAlumno = this.alumnos.find((alumno) => alumno.username === user)
	// const buscarPassword = this.alumnos.find(
	// 	(alumno) => alumno.password === pass
	// )
	// if (typeof this.buscarAlumno === 'undefined') {
	// 	this.presentToast('Usuario invalido', 900)
	// 	return false
	// }
	// if (typeof buscarPassword === 'undefined') {
	// 	this.presentToast('Contraseña invalida', 900)
	// 	return false
	// }
	// 	return true
	// }

	async presentToast(msg: string, duracion?: number) {
		const toast = await this.toastController.create({
			message: msg,
			duration: duracion ? duracion : 3000,
		})
		toast.present()
	}
	getUserInfo(uid: string) {
		const path = 'Cliente'
		this.firestoreService.getDocument<Alumno>(path, uid).subscribe((res) => {
			this.alumno = res
		})
	}
}

// FIN EVENTO INGRESAR
