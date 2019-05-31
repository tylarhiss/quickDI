import { Injectable } from '@angular/core';

@Injectable()
export class S1Service {
  constructor() {}

  makeNumber() {
    return 111111;
  }
}

@Injectable()
export class S2Service extends S1Service {
  makeNumber() {
    return 2222222;
  }
}

@Injectable({ providedIn: 'root' })
export class S3Service {
  makeNumber() {
    return 3333333;
  }
}

@Injectable({ providedIn: 'root' })
export class S4Service extends S3Service {
  makeNumber() {
    return 4444444;
  }
}
