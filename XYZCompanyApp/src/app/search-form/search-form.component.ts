import { Component, OnInit } from '@angular/core';
import {IDetails} from '../search-form/search-form'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchText;
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

  
  
}
