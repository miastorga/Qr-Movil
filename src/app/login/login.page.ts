import { Component, OnInit } from '@angular/core'
import { Router, NavigationExtras } from '@angular/router'
import { ToastController } from '@ionic/angular'
import { AlumnosDataService } from '../services/alumnos-data.service'
@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	user = {
		usuario: '',
		password: '',
	}
	usuario = ''
	password = ''
	field = ''
	alumnos = []
	constructor(
		private router: Router,
		public toastController: ToastController,
		private alumnosService: AlumnosDataService
	) {}

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

	ingresar() {
		if (this.validarAlumno(this.usuario, this.password)) {
			this.presentToast('Bienvenido ' + this.usuario)
			let navigationExtras: NavigationExtras = {
				state: {
					user: this.user, // Al estado se asignamos un objeto con clave y valor
				},
			}
			this.router.navigate(['/home'], navigationExtras)
		}
	}
	validarAlumno(user, pass) {
		const buscarAlumno = this.alumnos.find((alumno) => alumno.username === user)
		const buscarPassword = this.alumnos.find(
			(alumno) => alumno.password === pass
		)
		if (typeof buscarAlumno === 'undefined') {
			this.presentToast('Usuario invalido', 900)
			return false
		}
		if (typeof buscarPassword === 'undefined') {
			this.presentToast('Contraseña invalida', 900)
			return false
		}
		return true
	}
	async presentToast(msg: string, duracion?: number) {
		const toast = await this.toastController.create({
			message: msg,
			duration: duracion ? duracion : 3000,
		})
		toast.present()
	}
}

// FIN EVENTO INGRESAR
