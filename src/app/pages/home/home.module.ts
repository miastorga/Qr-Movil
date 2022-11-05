import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomePageRoutingModule } from './home-routing.module'

import { HomePage } from './home.page'
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'
import { PerfilComponent } from 'src/app/components/perfil/perfil.component'
import { GenerarQrComponent } from 'src/app/components/generar-qr/generar-qr.component'
import { QRCodeModule } from 'angularx-qrcode'
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		QRCodeModule,
	],
	declarations: [
		HomePage,
		SidemenuComponent,
		PerfilComponent,
		GenerarQrComponent,
	],
})
export class HomePageModule {}
