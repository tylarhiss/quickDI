import { Injectable, Inject } from '@angular/core';
import { MYFIRST_FRAGMENT, MYSECOND_FRAGMENT } from './tokens';

@Injectable({
  providedIn: 'root'
})
export class FragmentCombinerService {
  constructor(
    @Inject(MYFIRST_FRAGMENT) protected firstFragment,
    @Inject(MYSECOND_FRAGMENT) protected secondFragment
  ) {}

  combineFragments() {
    return {
      a: this.firstFragment,
      b: this.secondFragment
    };
  }
}
