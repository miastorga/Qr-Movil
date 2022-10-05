import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SidemenuComponent } from '../components/sidemenu/sidemenu.component'

import { HomePage } from './home.page'

const routes: Routes = [
	{
		path: '',
		component: HomePage,
		children: [
			{
				path: 'sidemenu',
				component: SidemenuComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomePageRoutingModule {}
