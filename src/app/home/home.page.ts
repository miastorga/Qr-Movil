import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular';
@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {
	constructor(private router: Router) {
		this.router.navigate(['home/sidemenu'])
	}
	segmentChanged($event) {
		console.log($event)
		const direccion = $event.detail.value
		console.log(direccion)
		this.router.navigate(['home/' + direccion])
	}
}
