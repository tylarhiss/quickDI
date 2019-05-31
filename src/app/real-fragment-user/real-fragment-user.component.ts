import { Component, OnInit } from '@angular/core';
import { PNRService } from '../realishExample/pnrCreditService';

@Component({
  selector: 'app-real-fragment-user',
  templateUrl: './real-fragment-user.component.html',
  styleUrls: ['./real-fragment-user.component.scss']
})
export class RealFragmentUserComponent implements OnInit {
  value = this.p.makeRequest();

  constructor(protected p: PNRService) {}

  ngOnInit() {}
}
