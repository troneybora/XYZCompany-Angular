import { Component, OnInit } from '@angular/core';
import {IDetails} from '../product-list/product-list'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: Array<IDetails>=[

    {

      id: "p01",
      name:"Samsung",
      price:20000,
      category:"mobile"

  },
  {
      id:"p02",
      name:"Redmi",
      price:15000,
      category:"mobile"

  },
  {
      id:"p03",
      name:"Dell",
      price:40000,
      category:"laptop"

  },
  {
      id:"p04",
      name:"Apple",
      price:80000,
      category:"laptop"

  }
  ];
  
   productobj : IDetails={
    
    id:null,
    name:'',
    price:null,
    category:'',
    
    };
    
  constructor() { }

  ngOnInit() {
  }

  delete(i){
    this.Products.splice(i,1);
  }
}
