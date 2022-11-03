import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { Alumno, DetalleQr } from 'src/app/interfaces'
import { InteractionsService } from 'src/app/services/interactions.service'
import { FirestoreService } from '../../services/firestore.service'
@Component({
	selector: 'app-escaner',
	templateUrl: './escaner.page.html',
	styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
	scannedResult: any
	alumno: Alumno

	constructor(
		private barcodeScanner: BarcodeScanner,
		public database: FirestoreService,
		public firestoreService: FirestoreService,
		public router: Router,
		public interactions: InteractionsService
	) {}

	ngOnInit(): void {
		const router = this.router.getCurrentNavigation().extras.state
		this.alumno = router.alumno
		this.barcodeScanner
			.scan()
			.then((barcodeData) => {
				this.scannedResult = barcodeData.text
				//**Funciona si el qr devuelve un JSON */
				this.actHistorial(this.scannedResult, this.alumno.id)
				console.log(JSON.parse(barcodeData.text))
			})
			.catch((err) => {
				this.interactions.showAlertSimple({
					header: 'Error',
					buttons: ['Vale'],
					message: 'A ocurrido un error',
					subHeader: '-----',
				})

				this.router.navigate(['/home'])
			})
	}

	actHistorial(detalleQr: DetalleQr, id: string) {
		const path = 'Alumnos'
		this.firestoreService.updateHistorial(detalleQr, path, id)
	}
}
