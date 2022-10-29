import { Injectable } from '@angular/core'
import { LoadingController, ToastController } from '@ionic/angular'
@Injectable({
	providedIn: 'root',
})
export class InteractionsService {
	loading: any
	constructor(
		private toastController: ToastController,
		public loadingController: LoadingController
	) {}

	async presentToast(mensaje: string, duracion: number = 2000) {
		const toast = await this.toastController.create({
			message: mensaje,
			duration: duracion,
		})
		await toast.present()
	}

	async presentLoading(mensaje: string) {
		this.loading = await this.loadingController.create({
			message: mensaje,
			duration: 2000,
			cssClass: '.alert-button-confirm',
		})
		await this.loading.present()
	}

	async closeLoading() {
		this.loading.dismiss()
	}
}
