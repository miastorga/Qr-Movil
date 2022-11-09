import { Component, Input, OnInit } from '@angular/core'
import { FirestorageService } from 'src/app/services/firestorage.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { InteractionsService } from 'src/app/services/interactions.service'
import { Alumno } from '../../interfaces'

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
	@Input() alumno: Alumno
	@Input() loaded: boolean
	uid = ''
	login: boolean = false
	newFile = ''
	constructor(
		public firestorage: FirestorageService,
		public interactions: InteractionsService,
		public firestore: FirestoreService
	) {}

	ngOnInit() {
		console.log(this.alumno)
	}

	async newImageUpload(event: any) {
		if (event.target.files && event.target.files[0]) {
			this.newFile = event.target.files[0]
			const reader = new FileReader()
			reader.onload = (image) => {
				this.newFile = image.target.result as string
			}
			reader.readAsDataURL(event.target.files[0])
		}
		this.interactions.presentLoading('Guardando imganen de perfil')
		const path = 'Fotos_Perfiles'
		const name = this.alumno.username
		const res = await this.firestorage.uploadImage(this.newFile, path, name)
		this.alumno.foto = res

		this.firestore
			.createImagenPerfil(this.alumno.foto, 'Alumnos', this.alumno.id)
			.then(() => {
				this.interactions.presentToast('Guardado con exito')
				this.interactions.closeLoading()
			})
			.catch(() => {
				this.interactions.presentToast('No se pudo guardar')
			})
		console.log('imagen alumno', this.alumno.foto)
		console.log('New file const', this.newFile)
	}
}
