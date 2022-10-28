import { Component } from '@angular/core'
import { FirebaseAuthService } from './services/firebase-auth.service'

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(private firebaseAuthService: FirebaseAuthService) {}
}
