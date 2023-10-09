import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) { }

 


  getProductos(): void {
    this.productoService.getProductos()
    .subscribe(productos =>{
      productos.results.map((producto: any) =>{
        let nuevoProducto = {
          nombre: producto.nombre,
          precio: producto.precio,
          stock: producto.stock,
          imagen: producto.imagen,
        }
        this.productos.push(nuevoProducto)
      })
    })
  }

  ngOnInit(): void{
    this.getProductos();
  }
}
