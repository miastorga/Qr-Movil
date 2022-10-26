import { Component, OnInit } from '@angular/core'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { FirestoreService } from '../../services/firestore.service'
@Component({
	selector: 'app-escaner',
	templateUrl: './escaner.page.html',
	styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
	scannedResult: any

	constructor(
		private barcodeScanner: BarcodeScanner,
		public database: FirestoreService
	) {}
	ngOnInit(): void {
		this.barcodeScanner
			.scan()
			.then((barcodeData) => {
				this.scannedResult = barcodeData.text
				//**FUNCIONA */
				const data = {
					historial: {
						detalles: this.scannedResult,
						hora: new Date(),
						profesor: 'yaravi',
						siglas: 'asd-987',
					},
				}
				const path = 'Alumnos/'
				const id = '3'
				this.database.createDocument(data, path, id)
				console.log(barcodeData.text)
			})
			.catch((err) => {
				console.log('Error', err)
			})
	}
}
