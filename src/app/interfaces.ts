export interface DetalleQr {
	id: string
	profesor: string
	hora: Date
	siglas: string
	detalles?: string
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
