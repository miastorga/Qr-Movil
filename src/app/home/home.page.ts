import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage {
	user: any
	userName
	nombre
	constructor(private activeroute: ActivatedRoute, private router: Router) {
		this.activeroute.queryParams.subscribe(() => {
			if (this.router.getCurrentNavigation().extras.state) {
				this.user = this.router.getCurrentNavigation().extras.state.user
				this.userName = this.user.user.username
				this.nombre = this.user.user.nombre
			}
		})
	}
}
