import {Component} from '@angular/core'

// 6/ Usar @Component decorator
@Component({
  moduleId: __moduleName,   // Hack para System.js rutas relativas
  selector: 'my-app',       // Se utiliza para nombrar un component desde el HTML
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})
// 9/ Un componente es simplemente una clase de typescript
export class App {
  name: string

  constructor() {
    this.name = 'Angular2'
  }
}