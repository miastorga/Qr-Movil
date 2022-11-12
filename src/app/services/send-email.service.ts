import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
@Injectable({
	providedIn: 'root',
})
export class SendEmailService {
	constructor(public firestore: AngularFirestore) {}

	sendEmail(correo: string) {
		this.firestore
			.collection('mail')
			.add({
				to: correo,
				message: {
					subject: 'Hello from Firebase!',
					text: 'This is the plaintext section of the email body.',
					html: 'Probando si enviar correo funciona c:',
				},
			})
			.then(() => console.log('Queued email for delivery!'))
	}
}
