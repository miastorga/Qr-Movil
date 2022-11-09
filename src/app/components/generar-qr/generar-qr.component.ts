import { Component, OnInit } from '@angular/core'
import { format, parseISO } from 'date-fns'

@Component({
	selector: 'app-generar-qr',
	templateUrl: './generar-qr.component.html',
	styleUrls: ['./generar-qr.component.scss'],
})
export class GenerarQrComponent implements OnInit {
	qrString
	// todo hacer una interface
	nombre: string
	asignatura: string
	siglas: string
	fecha: Date
	correo: string

	modes = [
		'date',
		'date-time',
		'month',
		'month-year',
		'time',
		'time-date',
		'year',
	]
	selectedMode = 'date-time'
	showPicker = false
	dateValue = format(new Date(), 'yyyy-mm-dd') + 'T09:00:00.000z'
	formattedString = ''
	constructor() {
		this.setToday()
	}

	ngOnInit() {}

	setToday() {
		this.formattedString = format(
			parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'),
			'HH:mm, MMM d, yyyy'
		)
	}

	dateChanged(value) {
		this.dateValue = value
		this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy')
		this.showPicker = false
	}
	//  **funciona falta almacenar fecha
	generarQr() {
		console.log(this.formattedString)
		const infoProfesorObj = {
			correo: this.correo,
			nombre: this.nombre,
			asignatura: this.asignatura,
			siglas: this.siglas,
		}
		const objToJson = JSON.stringify(infoProfesorObj)
		this.qrString = objToJson
		console.log(this.qrString)
	}
}
