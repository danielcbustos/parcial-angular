import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-lista',
  templateUrl: './cafe-lista.component.html',
  styleUrls: ['./cafe-lista.component.css']
})
export class CafeListaComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.calcularTotalCafeOrigen(cafes);
      this.calcularTotalCafeBlend(cafes);
    });
  }
  calcularTotalCafeOrigen(cafes: Array<Cafe>): number {
    for (let cafe of cafes) {
      if (cafe.tipo == 'Café de Origen') {
        this.totalCafeOrigen++;
      }
    }
    return this.totalCafeOrigen;
  }

  calcularTotalCafeBlend(cafes: Array<Cafe>): number {
    for (let cafe of cafes) {
      if (cafe.tipo == 'Blend') {
        this.totalCafeBlend++;
      }
    }
    return this.totalCafeBlend;
  }

  ngOnInit() {
    this.getCafes();
  }

}
