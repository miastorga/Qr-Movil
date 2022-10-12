import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable({
	providedIn: 'root',
})
export class AlumnosDataService {
	API_URL = 'https://nancyb3a.github.io/Test/usuarios_PGY4121_09.json'
	constructor(private http: HttpClient) {}

	getAlumnos() {
		return this.http.get(this.API_URL)
	}
}
