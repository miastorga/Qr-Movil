import { Component, Input } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { SafeUrl } from '@angular/platform-browser'
@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
	@Input() userName: string
	@Input() nombre: string
	constructor(
		public alertController: AlertController,
		private router: Router
	) {}
	// Inicio evento cerrar sesión
	// Si en la el alertController apretas click fuera del cuadro
	// El programa entenderá que quieres seguir en el menú
	async alertaCerrarSesion() {
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
					handler: () => {
						localStorage.removeItem('ingresado')
						this.router.navigate(['/login'])
					},
				},
			],
		})

		await alert.present()
	}
	// fin evento cerrar sesión

	//Inicio Transforma un link a QR
	url: SafeUrl = ''
	onCodeChange(url: SafeUrl) {
		this.url = url
	}
	//Fin Transforma un link a QR
}
