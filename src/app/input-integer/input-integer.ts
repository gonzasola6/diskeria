import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disk } from '../disk-list/Disk';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger implements OnInit{

  constructor(){}

  @Input()
  quantity!: number;
  // disk!: Disk; //non-null assertion !"é que esto no es undefined en tiempo de ejecución”.

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();


  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit():void {
    if (this.quantity >= this.max) {
    this.maxReached.emit("Ya se alcanzó el stock al iniciar");
  }
  }

  upQuantity():void{
  if(this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }else {
    this.maxReached.emit("se alcanzo el max");
    } 
}

downQuantity():void{
  if (this.quantity>0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
}

changeQuantity(event: KeyboardEvent):void{
  console.log(event.key);
  this.quantityChange.emit(this.quantity);
}

}
