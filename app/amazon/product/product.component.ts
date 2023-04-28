import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { product } from 'src/app/model/proc';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    prodata:Array<product>=[]
      constructor(private demo:MainService,private router:Router) {
        this.prodata=this.demo.product

      }
      cartitem:Array<product>=[]
      cart(item:any){
        if(this.demo.avail){
          alert('yes you are in')
          // console.log(item);

          this.cartitem.push(item)
          console.log(this.cartitem);


        }
        else{
          alert("you are not logged In")
          this.router.navigate(['login'])
        }

      }

      clc(i:number){
        if(this.demo.product[i].liked==false && this.demo.product[i].id==i && this.demo.avail){
          this.demo.product[i].liked=true
        }
        else{
          this.demo.product[i].liked=false

        }
      }


}
