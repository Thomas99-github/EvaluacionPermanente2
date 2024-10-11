import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  productos: Producto[] = [
    { id:1,nombre: 'Producto 1', categoria: 'Categoría A', precio: 2009.99, descripcion: 'Descripción del producto 1' },
    { id:2,nombre: 'Producto 2', categoria: 'Categoría B', precio: 409.99, descripcion: 'Descripción del producto 2' },
    { id:3,nombre: 'Producto 3', categoria: 'Categoría A', precio: 10009.99, descripcion: 'Descripción del producto 3' },
    { id:4,nombre: 'Producto 4', categoria: 'Categoría C', precio: 90900.99, descripcion: 'Descripción del producto 4' },
    { id:5,nombre: 'Producto 5', categoria: 'Categoría A', precio: 90.99, descripcion: 'Descripción del producto 5' },
    { id:6,nombre: 'Producto 6', categoria: 'Categoría C', precio: 2350.99, descripcion: 'Descripción del producto 6' },
    { id:7,nombre: 'Producto 7', categoria: 'Categoría B', precio: 250.99, descripcion: 'Descripción del producto 7' },
    { id:8,nombre: 'Producto 8', categoria: 'Categoría A', precio: 97.99, descripcion: 'Descripción del producto 8' },
    { id:9,nombre: 'Producto 9', categoria: 'Categoría B', precio: 242.99, descripcion: 'Descripción del producto 9' },
    { id:10,nombre: 'Producto 10', categoria: 'Categoría C', precio: 317.99, descripcion: 'Descripción del producto 10' },

  ];

  categorias: string[] = ['Categoría A', 'Categoría B', 'Categoría C'];

  categoriaSeleccionada: string = '';

  get productosFiltrados(): Producto[] {
    if (this.categoriaSeleccionada === '') {
      return this.productos;
    } else {
      return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
    }
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }
  
}
