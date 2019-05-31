import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MYFIRST_FRAGMENT,
  MYSECOND_FRAGMENT,
  FRAGMENT_SENTENCE
} from '../tokens';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: MYFIRST_FRAGMENT,
      useValue: 'FIRST VALUE FRAGMENT DEFAULT'
    },
    {
      provide: MYSECOND_FRAGMENT,
      useValue: 'SECONDVALUE FRAGMENT DEFAULT'
    },
    {
      provide: FRAGMENT_SENTENCE,
      useValue: 'JUST A NORMAL SENTENCE NOTHING TO SEE HERE'
    }
  ]
})
export class MyFragmentsModule {}
