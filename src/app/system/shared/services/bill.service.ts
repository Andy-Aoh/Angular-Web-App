import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Bill} from '../models/bill.model';
import {Observable} from 'rxjs/Observable';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi{
  constructor(public http: Http){
    super(http);
  }

  getBill(): Observable<Bill>{
   return this.get('bill');
  }

  getCurrency(base: string = 'USD'): Observable<any> {
  return this.http.get( `https://api.fixer.io/latest?base=${base}`)
  .map((response: Response) => response.json());
  }

  updateBill(bill: Bill): Observable<Bill>{
    return this.put('bill', bill);
  }
}
