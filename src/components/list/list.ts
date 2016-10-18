// Importamos Input
import {Component, Input} from '@angular/core'

@Component({
  moduleId: __moduleName,
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
  // Usamos @Input decorator para obtener el parámetro list
  @Input() list
}