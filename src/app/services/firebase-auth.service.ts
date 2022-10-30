import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	constructor(private authFirebase: AngularFireAuth) {
		this.getUID()
	}
	async logIn(email: string, password: string) {
		return await this.authFirebase.signInWithEmailAndPassword(email, password)
	}
	async resetPassword(email: string) {
		try {
			return this.authFirebase.sendPasswordResetEmail(email)
		} catch (error) {
			console.log(error)
		}
	}

	logOut() {
		return this.authFirebase.signOut()
	}

	async getUID() {
		const user = await this.authFirebase.currentUser
		return user ? user.uid : null
	}
	stateUser() {
		return this.authFirebase.authState
	}
}
