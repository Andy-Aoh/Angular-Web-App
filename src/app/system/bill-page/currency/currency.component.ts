import {Component, Input} from '@angular/core';

@Component({
  selector: 'wfm-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
  @Input() currency: any;
  currencies: string[] = ['RUB', 'EUR'];
}
