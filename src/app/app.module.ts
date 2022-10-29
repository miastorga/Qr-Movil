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
import { AngularFireAuthModule, PERSISTENCE } from '@angular/fire/compat/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import {
	provideAnalytics,
	getAnalytics,
	ScreenTrackingService,
	UserTrackingService,
} from '@angular/fire/analytics'
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { provideFunctions, getFunctions } from '@angular/fire/functions'
import { provideMessaging, getMessaging } from '@angular/fire/messaging'
import { provideStorage, getStorage } from '@angular/fire/storage'
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot({ navAnimation: enterAnimation }),
		AppRoutingModule,
		HttpClientModule,
		BackendModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireAuthModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideFunctions(() => getFunctions()),
		provideMessaging(() => getMessaging()),
		provideStorage(() => getStorage()),
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		BarcodeScanner,
		ScreenTrackingService,
		UserTrackingService,
		{ provide: PERSISTENCE, useValue: 'local' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
