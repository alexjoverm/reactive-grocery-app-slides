import {Component} from '@angular/core'

@Component({
  moduleId: __moduleName,   // Hack para System.js rutas relativas
  selector: 'my-app',       // Se utiliza para nombrar un component desde el HTML
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})
export class App {
}