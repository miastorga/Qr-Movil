import { Component, OnInit } from '@angular/core'
import { FirebaseauthService } from 'src/app/services/firebaseauth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Alumno } from '../../interfaces'

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
	alumno: Alumno = {
		correo: '',
		foto: '',
		historial_qrs: [],
		id: '',
		nombre: '',
		username: '',
	}
	uid = ''
	newFile: any
	constructor(
		public firebaseAuthService: FirebaseauthService,
		public firestoreService: FirestoreService
	) {}

	async ngOnInit() {}
	async newImageUpload(event: any) {
		if (event.target.files && event.target.files[0]) {
			this.newFile = event.target.files[0]
			const reader = new FileReader()
			reader.onload = (image) => {
				this.alumno.foto = image.target.result as string
			}
			reader.readAsDataURL(event.target.files[0])
		}
	}
}
