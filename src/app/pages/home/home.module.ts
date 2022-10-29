import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomePageRoutingModule } from './home-routing.module'

import { HomePage } from './home.page'
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component'
import { PerfilComponent } from 'src/app/components/perfil/perfil.component'
import { HistorialComponent } from 'src/app/components/historial/historial.component'

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [
		HomePage,
		SidemenuComponent,
		PerfilComponent,
		HistorialComponent,
	],
})
export class HomePageModule {}
