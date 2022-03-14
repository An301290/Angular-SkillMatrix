import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
    providedIn:'root'
})

export class ProductService {
getProducts(): IProduct[] {
    return [
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
          }, {
            "productId": 3,
            "productName": "Leaf",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://www.istockphoto.com/de/foto/schild-sch%C3%BCtzt-vor-viren-gm1217889649-355682792"
          },
          {
            "productId": 4,
            "productName": "Garden",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.istockphoto.com/de/foto/schild-sch%C3%BCtzt-vor-viren-gm1217889649-355682792"
          }   
    ]; 
}
}