import { Component } from '@angular/core';


//importando la clase empleado 
import { Empleado } from './models/empleado/empleado'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arregloEmpleados: Empleado[] = [
    { id: 1, nombre: "jose", ciudad: "oaxaca" },
    { id: 2, nombre: "pedro", ciudad: "veracruz" },
  ]

  empleadoSelecionado: Empleado = new Empleado();

  agregaroeditar() {
    if (this.empleadoSelecionado.id === 0) {
      this.empleadoSelecionado.id = this.arregloEmpleados.length + 1;
      this.arregloEmpleados.push(this.empleadoSelecionado);
    }
    this.empleadoSelecionado = new Empleado();

  }

  abrirparaeditar(empleado: Empleado) {
    this.empleadoSelecionado = empleado;
  }

  eliminar() {
    if (confirm(`estas seguro que quieres eliminar a ${this.empleadoSelecionado.nombre}`)) {
      this.arregloEmpleados = this.arregloEmpleados.filter(item => item != this.empleadoSelecionado);
      this.empleadoSelecionado = new Empleado();
    }

  }

}
