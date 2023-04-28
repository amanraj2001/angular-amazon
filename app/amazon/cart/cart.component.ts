import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private demo:MainService,private route:ActivatedRoute) {

    }

    res:any
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      console.log(p['id']);
           this.res = this.demo.product.find(x=>x.id==p['id'])
          console.log(this.res);

    })
  }
}
