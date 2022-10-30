import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { PerfilComponent } from './components/perfil/perfil.component'
import {
	AngularFireAuthGuard,
	redirectUnauthorizedTo,
	redirectLoggedInTo,
	canActivate,
} from '@angular/fire/compat/auth-guard'
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])
const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login/login.module').then((m) => m.LoginPageModule),
	},
	{
		path: 'perfil',
		component: PerfilComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
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
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomePageModule),
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
	},
	{
		path: 'compartir-qr',
		loadChildren: () =>
			import('./pages/compartir-qr/compartir-qr.module').then(
				(m) => m.CompartirQrPageModule
			),
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
	},
	{
		path: 'historial-qrs',
		loadChildren: () =>
			import('./pages/historial-qrs/historial-qrs.module').then(
				(m) => m.HistorialQrsPageModule
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
