import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Vehiculo } from '../vehiculoInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculo-list',
  imports: [CommonModule],
  templateUrl: './vehiculo-list.component.html',
  styleUrl: './vehiculo-list.component.scss'
})
export class VehiculoListComponent {
  @Input() vehiculos: Vehiculo[] = [];
  @Output() onEliminar = new EventEmitter<string>();
  @Output() onFavorito = new EventEmitter<string>();

  eliminar(nombre: string) {
    this.onEliminar.emit(nombre);
  }

  toggleFavorito(nombre: string) {
    this.onFavorito.emit(nombre);
  }
}
