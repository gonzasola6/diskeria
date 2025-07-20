import { Component, OnInit } from '@angular/core';
import { Disk } from "./Disk";
import { DiskCartService } from '../disk-cart';
import { DiskDataService } from '../disk-data';

@Component({
  selector: 'app-disk-list',
  standalone: false,
  templateUrl: './disk-list.html',
  styleUrl: './disk-list.scss'
})
export class DiskList implements OnInit {

  disks : Disk[] = [];
//   {
//     name: "Artaud",
//     year: 1973,
//     price: 20,
//     stock: 2,
//     image: "assets/img/artaud.png",
//     autor: "Pescado Rabioso",
//     clearance: false,
//     quantity: 0,
//   },
//   {
//     name: "Clics Modernos",
//     year: 1983,
//     price: 18,
//     stock: 0,
//     image: "assets/img/clics.jpg",
//     autor: "Charly Garcia",
//     clearance: false,
//     quantity: 0,
//   },
//   {
//     name: "Almendra",
//     year: 1969,
//     price: 15,
//     stock: 2,
//     image: "assets/img/almendra.jpg",
//     autor: "Almendra",
//     clearance: true,
//     quantity: 0,
//   },
//   {
//     name: "Vida",
//     year: 1971,
//     price: 15,
//     stock: 0,
//     image: "assets/img/vida.jpg",
//     autor: "Sui Generis",
//     clearance: false,
//     quantity: 0,
//   },
  
// ]



constructor(
  private cart: DiskCartService,
  private disksDataService: DiskDataService){
}

ngOnInit():void {
  this.disksDataService.getAll()
  .subscribe(disks=> this.disks = disks);
}

addToCart(disk:Disk):void{
  this.cart.addToCart(disk);
  disk.stock -= disk.quantity;
  disk.quantity = 0;
}

maxReached(m: string){
  alert(m);
}

}
