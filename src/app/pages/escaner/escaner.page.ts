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
				console.log(barcodeData.text)
			})
			.catch((err) => {
				console.log('Error', err)
			})
	}
}
