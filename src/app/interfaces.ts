export interface DetalleQr {
	id: string
	profesor: string
	hora: Date
	siglas: string
}
export interface Alumno {
	id: string
	nombre: string
	username: string
	foto: string
	correo: string
	historial_qrs?: Array<DetalleQr>
	password?: string
}
