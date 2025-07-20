import { Component, OnInit } from '@angular/core';
import { DiskCartService } from '../disk-cart';
import { Disk } from '../disk-list/Disk';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit{

  cartList$: Observable<Disk[]>;

  constructor(private cart: DiskCartService){
    this.cartList$ = cart.cartList.asObservable();

    

 
  }

  ngOnInit(): void {
  }

}
