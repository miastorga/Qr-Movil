import { Component, OnInit } from '@angular/core'
import { Router, NavigationExtras } from '@angular/router'
import { ToastController } from '@ionic/angular'
// IMPORTAR LAS WEÁS QUE VAMOS A USAR
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	// NOMBRE DE LA CLASE, EN ESTE CASO "LoginPage"
	user = {
		usuario: '',
		password: '',
	}
	field = ''
	// formularioLogin: FormGroup //VARIABLE INICIALIZADA DEL FORMULARIO DE TIPO FORMGROUP

	constructor(
		// public fb: FormBuilder,
		private router: Router,
		public toastController: ToastController
	) {
		// fb = ATRIBUTO DE TIPO FormBuilder
		// this.formularioLogin = this.fb.group({
		// 	// PARA INICIALIZAR EL FORMULARIO
		// 	nombre: new FormControl('', Validators.required), // PRIMER CAMPO REQUERIDO EN NUESTRO FORMULARIO
		// 	contraseña: new FormControl('', Validators.required), // SEGUNDO CAMPO REQUERIDO EN NUESTRO FORMULARIO
		// }) // FIN DE LOS CAMPOS REQUERIDOS EN NUESTRO FORMULARIO
	}

	ngOnInit() {}

	//EVENTO INGRESAR
	ingresar() {
		//verifico campos vacíos
		if (this.validateMode(this.user)) {
			this.presentToast('Bienvenido ' + this.user.usuario)
			// Se declara e instancia un elemento de tipo NavigationExtras
			let navigationExtras: NavigationExtras = {
				state: {
					user: this.user, // Al estado se asignamos un objeto con clave y valor
				},
			}
			this.router.navigate(['/escaner'], navigationExtras) // navegamos hacia el Home y enviamos información adicional
		} else {
			this.presentToast('Falta ingresar: ' + this.field, 500)
		}
	}
	validateMode(model: any) {
		//Recorrer todas las entradas que me entrega el Object entries y obtengo su clave-valor
		for (var [key, value] of Object.entries(model)) {
			//si el value está vacio retorno falso y guardo el nombre del campo para el error
			if (value === '') {
				this.field = key
				return false
			}
		}
		return true
	}
	async presentToast(msg: string, duracion?: number) {
		const toast = await this.toastController.create({
			message: msg,
			duration: duracion ? duracion : 1000,
		})
		toast.present()
	}
}

// FIN EVENTO INGRESAR
