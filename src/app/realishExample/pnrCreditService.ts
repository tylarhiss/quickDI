import { Injectable, Inject } from '@angular/core';
import { PNR_CREDIT_GRAPH_REQUEST } from './realTokens';

@Injectable({ providedIn: 'root' })
export class PNRService {
  constructor(@Inject(PNR_CREDIT_GRAPH_REQUEST) protected pnrGraphQuery) {}

  makeRequest() {
    return this.pnrGraphQuery;
  }
}
