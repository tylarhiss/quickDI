import { Component, OnInit, Inject } from '@angular/core';
import {
  MYFIRST_FRAGMENT,
  MYSECOND_FRAGMENT,
  FRAGMENT_SENTENCE
} from '../tokens';
import { FragmentCombinerService } from '../fragment-combiner.service';

@Component({
  selector: 'app-fragment-shower',
  templateUrl: './fragment-shower.component.html',
  styleUrls: ['./fragment-shower.component.scss']
})
export class FragmentShowerComponent implements OnInit {
  value = this.fragmentCombiner.combineFragments();

  constructor(
    @Inject(MYFIRST_FRAGMENT) protected firstFragment,
    @Inject(MYSECOND_FRAGMENT) protected secondfragment,
    protected fragmentCombiner: FragmentCombinerService,
    @Inject(FRAGMENT_SENTENCE) protected fragmentSentence
  ) {}

  ngOnInit() {}
}
