import {Component} from '@angular/core'

@Component({
  moduleId: __moduleName,   // Hack para System.js rutas relativas
  selector: 'my-app',       // Se utiliza para nombrar un component desde el HTML
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})
export class App {
  name: string
  isVisible: boolean
  list: any[]

  constructor() {
    this.name = 'Angular2'
    this.isVisible = true

    this.list = [
      { id: 0, title: 'Paco', class: 'red' },
      { id: 1, title: 'Pepe', class: 'red' }
    ]
  }

  // 3/ Toggleamos isVisible
  toggleVisible () {
    this.isVisible = !this.isVisible
  }
}