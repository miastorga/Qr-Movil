import { Component, OnInit } from '@angular/core'
import { FirestorageService } from 'src/app/services/firestorage.service'
import { FirestoreService } from 'src/app/services/firestore.service'

@Component({
	selector: 'app-set-alumnos',
	templateUrl: './set-alumnos.component.html',
	styleUrls: ['./set-alumnos.component.scss'],
})
export class SetAlumnosComponent implements OnInit {
	newImage = ''
	constructor(
		public database: FirestoreService,
		public fireStorage: FirestorageService
	) {}

	ngOnInit() {}
}
