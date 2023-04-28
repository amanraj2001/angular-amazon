import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from './model/proc';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private router:Router) { }

  product:Array<product>=[
    {
      id:0,
      productname:"Iphone",
      productimg:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1656712887888",
      productdesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi iste non ea similique consequatur quibusdam praesentium rem voluptas inventore.',
      productspeci:{
        camera:'16 mpx',
        ram:'8 GB',
        rom:'256 GB',
        Android:'12'
      },
      liked:false
    },
    {
      id:1,
      productname:"Samsung",
      productimg:"https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
      productdesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi iste non ea similique consequatur quibusdam praesentium rem voluptas inventore. rem voluptas inventore.',
      productspeci:{
        camera:'16 mpx',
        ram:'8 GB',
        rom:'256 GB',
        Android:'12'
      },
      liked:false
    },

  ]


  avail:boolean=false

    auth(username:any,password :any){
        if(username=='admin' && password=='password'){
          this.avail=true
          alert("you are logged in")
        this.router.navigate([''])
        }
        else{
          this.avail=false
        }
    }

    islogged(){
      return this.avail
    }


}
