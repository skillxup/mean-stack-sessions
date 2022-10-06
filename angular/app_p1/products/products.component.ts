import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // defining / declaring the group of products
  products: any[] = [
    { id: 1, name: "t shirt", price: 450 }, 
    { id: 2, name: "acer laptop", price: 1450 }, 
    { id: 3, name: "lg washing machine", price: 840 }, 
    { id: 4, name: "opt link", price: 50 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
