import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { PerfilComponent } from './components/perfil/perfil.component'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'perfil',
		component: PerfilComponent,
	},

	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login/login.module').then((m) => m.LoginPageModule),
	},
	{
		path: 'recuperar-contrasegna',
		loadChildren: () =>
			import('./pages/recuperar-contrasegna/recuperar-contrasegna.module').then(
				(m) => m.RecuperarContrasegnaPageModule
			),
	},
	{
		path: 'escaner',
		loadChildren: () =>
			import('./pages/escaner/escaner.module').then((m) => m.EscanerPageModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomePageModule),
	},
	{
		path: 'compartir-qr',
		loadChildren: () =>
			import('./pages/compartir-qr/compartir-qr.module').then(
				(m) => m.CompartirQrPageModule
			),
	},
	{
		path: '**',
		loadChildren: () =>
			import('./pages/error404/error404.module').then(
				(m) => m.Error404PageModule
			),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
