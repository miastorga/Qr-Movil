import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
	providedIn: 'root',
})
export class FirebaseAuthService {
	constructor(public auth: AngularFireAuth) {
		this.getUID()
	}

	logIn(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}
	logOut() {
		this.auth.signOut()
	}
	async getUID() {
		const user = await this.auth.currentUser
		return user ? user.uid : null
	}
	stateAuth() {
		return this.auth.authState
	}
}
