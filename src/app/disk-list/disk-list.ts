import { Component } from '@angular/core';

@Component({
  selector: 'app-disk-list',
  standalone: false,
  templateUrl: './disk-list.html',
  styleUrl: './disk-list.scss'
})
export class DiskList {

  disk = {
  name: "Artaud",
  year: "1973",
  price: 20,
  stock: 2,
  image: "assets/img/artaud.png"
};

}
