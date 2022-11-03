import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HistorialQrsPageRoutingModule } from './historial-qrs-routing.module'

import { HistorialQrsPage } from './historial-qrs.page'
import { FiltroComponent } from 'src/app/components/filtro/filtro.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HistorialQrsPageRoutingModule,
	],
	declarations: [HistorialQrsPage, FiltroComponent],
})
export class HistorialQrsPageModule {}
