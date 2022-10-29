import { Component, Input, OnInit } from '@angular/core'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service'
import { FirestoreService } from 'src/app/services/firestore.service'
import { Alumno, DetalleQr } from '../../interfaces'

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
	@Input() alumno: Alumno
	@Input() loaded: boolean
	uid = ''
	newFile: any
	login: boolean = false
	constructor(
		public firebaseAuthService: FirebaseAuthService,
		public firestoreService: FirestoreService
	) {
		// this.firebaseAuthService.stateUser().subscribe((res) => {
		// 	if (res) {
		// 		console.log('esta logeado')
		// 		this.login = true
		// 		this.getDatosAlumno(res.uid)
		// 	} else {
		// 		console.log('no esta logeado')
		// 		this.login = false
		// 	}
		// })
	}

	ngOnInit() {}

	// async getUid() {
	// 	const uid = await this.firebaseAuthService.getUID()
	// 	if (uid) {
	// 		this.uid = uid
	// 		console.log('uid', this.uid)
	// 		// this.getDatosAlumno(this.uid)
	// 	} else {
	// 		console.log('no existe uid')
	// 	}
	// }

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

	// getDatosAlumno(uid: string) {
	// 	const path = 'Alumnos'
	// 	const id = uid
	// 	this.firestoreService.getDocument<Alumno>(path, id).subscribe((res) => {
	// 		if (res) {
	// 			this.alumno = res
	// 		}
	// 		this.loaded = true
	// 		console.log('datos alumno -> ', res)
	// 	})
	// }
}
