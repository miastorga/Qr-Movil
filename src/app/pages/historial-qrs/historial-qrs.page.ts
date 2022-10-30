import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Alumno } from 'src/app/interfaces'

@Component({
	selector: 'app-historial-qrs',
	templateUrl: './historial-qrs.page.html',
	styleUrls: ['./historial-qrs.page.scss'],
})
export class HistorialQrsPage implements OnInit {
	alumno: Alumno
	loaded: boolean
	existeHistorial: boolean
	constructor(public router: Router) {}

	ngOnInit() {
		//**Cambiar formato hora de alumno */
		const router = this.router.getCurrentNavigation().extras.state
		this.alumno = router.alumno
		this.loaded = true
	}
}
