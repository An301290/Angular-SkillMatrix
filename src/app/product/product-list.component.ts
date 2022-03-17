import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  pageTitle ='Product List'; 
  imageWidth = 50;
  imageMargin = 2; 
  showImage = false; 

  private _listFilter : string = ''; 
  get listFilter() : string
  {
    return this._listFilter; 
  }
  set listFilter(value: string )
  {
    this._listFilter = value; 
    console.log('I´m setter', value); 
    this.filterProduct = this.performFilter(value); 
  }

  filterProduct : IProduct[] = []; 
  

  products: IProduct[] = []; 


  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.products = this.productService.getProducts(); 
    this.filterProduct = this.products;  
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message; 
  }

  performFilter(filterBy : string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().includes(filterBy)); 
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage; 
  }
}
