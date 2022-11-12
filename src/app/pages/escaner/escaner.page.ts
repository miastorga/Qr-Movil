import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { Alumno, DetalleQr } from 'src/app/interfaces'
import { InteractionsService } from 'src/app/services/interactions.service'
import { SendEmailService } from 'src/app/services/send-email.service'
import { FirestoreService } from '../../services/firestore.service'
@Component({
	selector: 'app-escaner',
	templateUrl: './escaner.page.html',
	styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
	scannedResult: DetalleQr
	alumno: Alumno

	constructor(
		private barcodeScanner: BarcodeScanner,
		public database: FirestoreService,
		public firestoreService: FirestoreService,
		public router: Router,
		public interactions: InteractionsService,
		public enviarCorreo: SendEmailService
	) {}

	ngOnInit(): void {
		const router = this.router.getCurrentNavigation().extras.state
		this.alumno = router.alumno
		console.log(this.alumno.correo)

		this.barcodeScanner
			.scan()
			.then((barcodeData) => {
				this.scannedResult = JSON.parse(barcodeData.text)
				console.log(this.scannedResult)
				Object.assign(this.scannedResult, { id: this.firestoreService.getId() })
				this.enviarCorreo.sendEmail(this.scannedResult.correo)
				//**Funciona si el qr devuelve un JSON y el Qr es un texto*/
				this.actHistorial(this.scannedResult, this.alumno.id)
			})
			.catch((err) => {
				this.interactions.showAlertSimple({
					header: 'Error',
					buttons: ['Vale'],
					message: 'A ocurrido un error',
					subHeader: '_____________________________',
				})

				this.router.navigate(['/home'])
			})
	}

	actHistorial(detalleQr: DetalleQr, id: string) {
		const path = 'Alumnos'
		this.firestoreService.updateHistorial(detalleQr, path, id)
	}
}
