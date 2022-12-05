import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PricelistService } from '../services/pricelist.service';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  products:Product[] = [] ;

  constructor( private pricelistService:PricelistService ) {
    this.pricelistService.readProducts().subscribe((product:Product[])=>{this.products=product}) 
   }

  ngOnInit(): void {
  }

}
