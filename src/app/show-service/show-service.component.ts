import { Component, OnInit } from '@angular/core';
import { S2Service, S1Service, S3Service, S4Service } from '../s1.service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {
  num1: number = this.s1.makeNumber();
  num2: number = this.s2.makeNumber();
  num3: number = this.s3.makeNumber();
  num4: number = this.s4.makeNumber();

  constructor(
    protected s1: S1Service,
    protected s2: S2Service,
    protected s3: S3Service,
    protected s4: S4Service
  ) {}

  ngOnInit() {}
}
