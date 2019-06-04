import { Component, OnInit } from '@angular/core';
import { S1Service, S2Service, S3Service, S4Service } from '../s1.service';

@Component({
  selector: 'app-override-servicer',
  templateUrl: './override-servicer.component.html',
  styleUrls: ['./override-servicer.component.scss'],
  providers: [
    {
      provide: S1Service,
      useExisting: S2Service
    },
    {
      provide: S3Service,
      useExisting: S4Service
    }
  ]
})
export class OverrideServicerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
