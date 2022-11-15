import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
@Injectable({
	providedIn: 'root',
})
export class SendEmailService {
	constructor(public firestore: AngularFirestore) {}

	sendEmail(correo: string, nombreAlumno: string, tiempo: Array<string>) {
		const [fecha, hora] = tiempo
		this.firestore
			.collection('mail')
			.add({
				to: correo,
				message: {
					subject: 'RegistrApp',
					text: 'This is the plaintext section of the email body.',
					html: `${nombreAlumno} escaneo el qr el ${fecha} a las ${hora} `,
				},
			})
			.then(() => console.log('Queued email for delivery!'))
	}
}
