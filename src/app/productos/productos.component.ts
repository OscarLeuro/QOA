import { Component, Input, OnInit } from '@angular/core';
import { Productos } from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() produ1cto!: Productos;
  



}