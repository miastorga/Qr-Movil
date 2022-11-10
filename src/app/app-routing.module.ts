import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { PerfilComponent } from './components/perfil/perfil.component'
import {
	AngularFireAuthGuard,
	redirectUnauthorizedTo,
	redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard'
import { GenerarQrComponent } from './components/generar-qr/generar-qr.component'
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home'])
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
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectLoggedInToHome },
	},
	{
		path: 'perfil',
		component: PerfilComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
	},
	{
		path: 'generar-qr',
		component: GenerarQrComponent,
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
		path: 'historial-qrs',
		loadChildren: () =>
			import('./pages/historial-qrs/historial-qrs.module').then(
				(m) => m.HistorialQrsPageModule
			),
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
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
