import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() price: number | undefined;
  int: string = '';
  decimal: string = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.price) {
      this.int = parseInt(this.price.toString()).toString();
      this.decimal = this.getDecimalPart(this.price);
    }
  }

  getDecimalPart(num: number): string {
    if (Number.isInteger(num)) {
      return '00';
    }

    return num.toString().split('.')[1];
  }

}
