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



isLoading: boolean = true;

constructor(
  private cart: DiskCartService,
  private disksDataService: DiskDataService){
}

ngOnInit():void {
  this.disksDataService.getAll()
  .subscribe(disks=> {
  this.disks = disks;
  this.isLoading = false;});
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
