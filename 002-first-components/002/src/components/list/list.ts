// Importamos Output y EventEmitter
import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  moduleId: __moduleName,
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  @Input() list
  // 3/ Creamos el Output. El nombre de la variable será el nombre
  // del custom event utilizado desde fuera
  @Output() delete = new EventEmitter()

  // 3/ Emitimos el evento, pasando la lista como argumento
  deleteItem() {
    this.delete.emit(this.list)
  }
}