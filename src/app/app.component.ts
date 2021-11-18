import { Component } from '@angular/core';
import { Productos } from './productos/productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TiendaV';


  items:Array<any> = ['Gina','Óscar','Antonella']

  addItem(){

    this.items.push('item')

  }

  deleteItem(index:number){


    this.items.splice(index,1)


  }

  products:Productos[] = [
    
    
    {name: 'Camisa Azul',
    price: 50,
    img: 'nuevo',
    description: 'Nueva descripción'},


    {name: 'Camisa Negra',
    price: 50,
    img: 'nuevo',
    description: 'Nueva descripción'}


  ]



}
