import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { arrayUnion, deleteField } from '@angular/fire/firestore'
import { DetalleQr } from '../interfaces'
@Injectable({
	providedIn: 'root',
})
export class FirestoreService {
	constructor(public database: AngularFirestore) {}

	createImagenPerfil(data: any, path: string, id: string) {
		const collection = this.database.collection(path) //Alumnos
		return collection.doc(id).update({
			foto: data,
		})
	}

	getDocument<T>(path: string, id: string) {
		const collection = this.database.collection<T>(path)
		return collection.doc<T>(id).valueChanges()
	}

	deleteDocument(path: string, id: string) {
		const collection = this.database.collection(path)
		return collection.doc(id).delete()
	}

	async deleteHistorialQrs(path: string, id: string) {
		const collection = this.database.collection(path).doc(id)
		const removeHistorial = collection.update({
			historial: deleteField(),
		})
		console.log(removeHistorial)
	}

	// Agregar datos del qr al historial de qrs en firebase
	async updateHistorial(detallesQr: DetalleQr, path: string, id: string) {
		const updatRef = this.database.collection(path).doc(id)
		return updatRef.update({
			historial: arrayUnion(detallesQr),
		})
	}

	//Crea un Id
	getId() {
		return this.database.createId()
	}

	//Devuelve una lista de una coleccion
	getCollection<T>(path: string) {
		const collection = this.database.collection<T>(path)
		return collection.valueChanges()
	}
}
