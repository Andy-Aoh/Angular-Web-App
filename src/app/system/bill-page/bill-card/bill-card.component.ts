import {Component, Input, OnInit} from '@angular/core';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
@Input() bill: Bill;
@Input() currency: any;

eur: number;
rub: number;
  constructor() { }

  ngOnInit() {
    const {rates} = this.currency;
    this.rub = rates['RUB'] * this.bill.value;
    this.eur = rates['EUR'] * this.bill.value;
  }

}
