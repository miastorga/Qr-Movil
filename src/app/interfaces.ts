export interface DetalleQr {
	id: string
	seccion: string
	asignatura: string
	docente: string
	correo: string
}
export interface Alumno {
	id: string
	nombre: string
	username: string
	foto: string
	correo: string
	historial?: Array<DetalleQr>
	carrera?: string
	sede?: string
}

export interface ShowAlertSimple {
	header: string
	subHeader?: string
	message?: string
	buttons: Array<string>
}
