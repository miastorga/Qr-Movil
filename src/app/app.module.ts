import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { enterAnimation } from './animations/nav-animation'
import { HttpClientModule } from '@angular/common/http'
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { BackendModule } from './backend/backend.module'
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { PERSISTENCE } from '@angular/fire/compat/auth'
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot({ navAnimation: enterAnimation }),
		AppRoutingModule,
		HttpClientModule,
		BackendModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireAuthModule,
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		BarcodeScanner,
		// { provide: PERSISTENCE, useValue: 'session' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
