import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  id:any;
  url:string= "https://fakestoreapi.com/products/";
  list:any;
  showActions=true;
  constructor(private productService: ProductService, private router: ActivatedRoute, private cartService: CartService){
    this.id= this.router.snapshot.paramMap.get('id');
  
    this.url= this.url + this.id;
    console.log('Final URL', this.url);
    console.log('ID:', this.id);
    
    
  }
   ngOnInit(): void {
     this.productService.getAll(this.url).subscribe((data)=>{
          
      this.list=data;
      
     })
   }
   
  //  addToCart(list){
  //   let cartId = localStorage.getItem('cartId');
  //   if(!cartId){
  //       this.cartService.create();
  //   }
  //  }


  }


