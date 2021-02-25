import { Component, OnInit } from '@angular/core';
import motos from '../../../utils';
@Component({
  selector: 'app-barner',
  templateUrl: './barner.component.html',
  styleUrls: ['./barner.component.scss'],
})
export class BarnerComponent implements OnInit {
  public moto: string = motos[0];
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const motoIndex = Math.floor((Math.random() * 100) % motos.length);
      this.moto = motos[motoIndex];
    }, 3000);
  }
}
