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

	// async startScanner() {
	// 	try {
	// 		const permission = await this.checkPermission()
	// 		if (!permission) {
	// 			return
	// 		}
	// 		await BarcodeScanner.hideBackground()
	// 		const result = await BarcodeScanner.startScan()
	// 		BarcodeScanner.showBackground()
	// 		if (result?.hasContent) {
	// 			this.scannedResult = result.content
	// 			BarcodeScanner.showBackground()
	// 			document.querySelector('body').classList.remove('scanner-active')
	// 		}
	// 	} catch (error) {
	// 		this.stopScan()
	// 	}
	// }
	// async checkPermission() {
	// 	try {
	// 		const status = await BarcodeScanner.checkPermission({ force: true })
	// 		if (status.granted) {
	// 			return true
	// 		}
	// 		return false
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	// stopScan() {
	// 	BarcodeScanner.showBackground()
	// 	BarcodeScanner.stopScan()
	// 	document.querySelector('body').classList.remove('scanner-active')
	// }
	// ngOnDestroy(): void {
	// 	this.stopScan()
	// }
}
