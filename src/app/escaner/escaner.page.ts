import { Component, OnInit } from '@angular/core'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
@Component({
	selector: 'app-escaner',
	templateUrl: './escaner.page.html',
	styleUrls: ['./escaner.page.scss'],
})
export class EscanerPage implements OnInit {
	scannedResult: any

	constructor(private barcodeScanner: BarcodeScanner) {}
	ngOnInit(): void {
		this.barcodeScanner
			.scan()
			.then((barcodeData) => {
				console.log('Barcode data', barcodeData)
				this.scannedResult = barcodeData.text
				console.log(barcodeData.text)
			})
			.catch((err) => {
				console.log('Error', err)
			})
	}
}
