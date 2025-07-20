import { Injectable } from '@angular/core';
import { Disk } from './disk-list/Disk';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
 maneja la logica del carrito
 */
export class DiskCartService {

  private _cartList: Disk [] = [];
  cartList : BehaviorSubject<Disk[]> = new BehaviorSubject(this._cartList);

  constructor(){}

  addToCart(disk: Disk){ 
    let item: Disk = this._cartList.find((v1) => v1.name == disk.name)!;
    if (!item){
      this._cartList.push({...disk});
    }else{
      item.quantity +=disk.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); // equivalente al emitt de eventos

  }
  
}
