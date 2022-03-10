import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  

  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://www.istockphoto.com/de/foto/schild-sch%C3%BCtzt-vor-viren-gm1217889649-355682792"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://www.istockphoto.com/de/foto/schild-sch%C3%BCtzt-vor-viren-gm1217889649-355682792"
    }
  ]; 


  constructor() { }

  ngOnInit(): void {
    this.listFilter = 'cart'; 
  }

  performFilter(filterBy : string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().includes(filterBy)); 
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage; 
  }
}
