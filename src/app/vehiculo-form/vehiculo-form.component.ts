import { Component, EventEmitter, Output, } from '@angular/core';
import { Vehiculo } from '../vehiculoInterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-form',
  imports: [FormsModule],
  templateUrl: './vehiculo-form.component.html',
  styleUrl: './vehiculo-form.component.scss'
})
export class VehiculoFormComponent {

  @Output() onVehiculoAgregar = new EventEmitter<Vehiculo>();

  nombre: string = '';
  tipo: 'Coche' | 'Moto' = 'Coche';

  agregarVehiculo() {
    if (!this.nombre.trim()) return;

    this.onVehiculoAgregar.emit({
      nombre: this.nombre,
      tipo: this.tipo,
      favorito: false
    });

    this.nombre = '';
    this.tipo = 'Coche';
  }

}
