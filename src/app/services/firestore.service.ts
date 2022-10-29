import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { FieldValue } from '@angular/fire/firestore'
@Injectable({
	providedIn: 'root',
})
export class FirestoreService {
	constructor(public database: AngularFirestore) {}

	createDocument(data: any, path: string, id: string) {
		const collection = this.database.collection(path)
		return collection.doc(id).set(data)
	}

	getDocument<T>(path: string, id: string) {
		const collection = this.database.collection<T>(path)
		return collection.doc<T>(id).valueChanges()
	}

	// Agregar datos del qr al historial del qr firebase
	updateHistorial(detallesQr: any, path: string, id: string) {
		const { detalles, hora, profesor, siglas } = detallesQr
		const collection = this.database.collection(path)
		return collection.doc(id).update({
			detallesQr,
		})
	}
	getId() {
		return this.database.createId()
	}
	// metodo que devuelve una coleccion
	// para en un futuro recorrer el historial y mostrarlo
	getCollection<T>(path: string) {
		const collection = this.database.collection<T>(path)
		return collection.valueChanges()
	}
}
