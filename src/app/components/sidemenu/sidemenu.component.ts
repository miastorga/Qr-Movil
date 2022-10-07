import { Component, OnInit } from '@angular/core'
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
	constructor(
		public alertController: AlertController,
		private router: Router
	) {}

	ngOnInit() {}

	// Inicio evento cerrar sesión

	//Si en la el alertController apretas click fuera del cuadro
	//el programa entenderá que quieres seguir en el menú
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
					handler: (blah) => {
						console.log('confimacion: no')
					},
				},
				{
					text: 'Si',
					handler: () => {
						console.log('Confirmacion: si')
						localStorage.removeItem('ingresado')
						this.router.navigate(['/login'])
					},
				},
			],
		})

		await alert.present()
	}
	// fin evento cerrar sesión
}
