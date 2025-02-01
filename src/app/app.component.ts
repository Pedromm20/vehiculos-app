import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vehiculo } from './vehiculoInterface';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [VehiculoFormComponent, VehiculoListComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vehiculos-app';

  vehiculos: Vehiculo[] = [];

  agregarVehiculo(nuevoVehiculo: Vehiculo) {
    console.log('Vehículo agregado:', nuevoVehiculo); 
    this.vehiculos.push(nuevoVehiculo);
    this.vehiculos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  eliminarVehiculo(nombre: string) {
    this.vehiculos = this.vehiculos.filter(v => v.nombre !== nombre);
  }

  toggleFavorito(nombre: string) {
    const vehiculo = this.vehiculos.find(v => v.nombre === nombre);
    if (vehiculo) vehiculo.favorito = !vehiculo.favorito;
  }

}
