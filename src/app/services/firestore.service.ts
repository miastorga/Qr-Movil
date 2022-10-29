import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { arrayUnion } from '@angular/fire/firestore'
@Injectable({
	providedIn: 'root',
})
export class FirestoreService {
	constructor(public database: AngularFirestore) {}

	//
	createDocument(data: any, path: string, id: string) {
		const collection = this.database.collection(path)
		return collection.doc(id).set(data)
	}

	getDocument<T>(path: string, id: string) {
		const collection = this.database.collection<T>(path)
		return collection.doc<T>(id).valueChanges()
	}

	deleteDocument(path: string, id: string) {
		const collection = this.database.collection(path)
		return collection.doc(id).delete()
	}

	// Agregar datos del qr al historial del qr firebase
	async updateHistorial(detallesQr: any, path: string, id: string) {
		const collection = this.database.collection(path)
		return await collection.doc(id).update({
			historial: arrayUnion(...detallesQr),
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
