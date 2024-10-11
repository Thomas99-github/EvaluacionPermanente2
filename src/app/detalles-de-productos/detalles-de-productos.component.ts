import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-detalles-de-productos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './detalles-de-productos.component.html',
  styleUrl: './detalles-de-productos.component.css'
})
export class DetallesDeProductosComponent {

  productos: Producto[] = [
    { id:1,nombre: 'Producto 1', categoria: 'Categoría A', precio: 29.99, descripcion: 'Descripción del producto 1' },
    { id:2,nombre: 'Producto 2', categoria: 'Categoría B', precio: 49.99, descripcion: 'Descripción del producto 2' },
    { id:3,nombre: 'Producto 3', categoria: 'Categoría A', precio: 19.99, descripcion: 'Descripción del producto 3' },
    { id:4,nombre: 'Producto 4', categoria: 'Categoría C', precio: 99.99, descripcion: 'Descripción del producto 4' },
  ];

  productoSeleccionado?: Producto;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoSeleccionado = this.productos.find(producto => producto.id === id);
    
  }

}
