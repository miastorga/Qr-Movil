import { Component, OnInit } from '@angular/core'
import { FirestoreService } from 'src/app/services/firestore.service'

@Component({
	selector: 'app-set-alumnos',
	templateUrl: './set-alumnos.component.html',
	styleUrls: ['./set-alumnos.component.scss'],
})
export class SetAlumnosComponent implements OnInit {
	constructor(public database: FirestoreService) {}

	ngOnInit() {}
}
