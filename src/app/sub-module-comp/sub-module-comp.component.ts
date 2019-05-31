import { Component, OnInit } from '@angular/core';
import { S1Service, S2Service, S3Service } from '../s1.service';

@Component({
  selector: 'app-sub-module-comp',
  templateUrl: './sub-module-comp.component.html',
  styleUrls: ['./sub-module-comp.component.scss']
})
export class SubModuleCompComponent implements OnInit {
  value = this.s1.makeNumber();

  constructor(protected s1: S1Service) {}

  ngOnInit() {}
}

@Component({
  selector: 'app-sub-module-comp2',
  templateUrl: './sub-module-comp.component.html',
  styleUrls: ['./sub-module-comp.component.scss']
})
export class SubModuleComp2Component implements OnInit {
  value = this.s3.makeNumber();

  constructor(protected s3: S3Service) {}

  ngOnInit() {}
}

@Component({
  selector: 'app-sub-module-comp3',
  templateUrl: './sub-module-comp.component.html',
  styleUrls: ['./sub-module-comp.component.scss'],
  providers: [
    {
      provide: S3Service,
      useExisting: S1Service
    }
  ]
})
export class SubModuleComp3Component implements OnInit {
  value = this.s3.makeNumber();

  constructor(protected s3: S3Service) {}

  ngOnInit() {}
}

@Component({
  selector: 'app-sub-module-comp4',
  templateUrl: './sub-module-comp.component.html',
  styleUrls: ['./sub-module-comp.component.scss'],
  providers: [
    {
      provide: S1Service,
      useExisting: S3Service
    }
  ]
})
export class SubModuleComp4Component implements OnInit {
  value = this.s1.makeNumber();

  constructor(protected s1: S1Service) {}

  ngOnInit() {}
}
