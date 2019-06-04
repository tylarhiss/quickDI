import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowServiceComponent } from './show-service/show-service.component';
import { SubModuleCompComponent } from './sub-module-comp/sub-module-comp.component';
import { SubModule } from './sub-module-comp/sub.module';
import { S1Service, S2Service } from './s1.service';

import { RealFragmentUserComponent } from './real-fragment-user/real-fragment-user.component';
import { DataModule } from './realishExample/data.module';
import {
  BREAKDOWN_GRAPH_FRAGMENT,
  FEES_GRAPH_FRAGMENT
} from './realishExample/realTokens';
import { breakdownFragmentFactory } from './realishExample/breakdownFactory';
import { OverrideServicerComponent } from './override-servicer/override-servicer.component';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [S1Service, S2Service]
})
export class NameModule {}

@NgModule({
  declarations: [
    AppComponent,
    ShowServiceComponent,
    RealFragmentUserComponent,
    OverrideServicerComponent
  ],
  imports: [BrowserModule, NameModule, AppRoutingModule, SubModule, DataModule],
  providers: [
    {
      provide: BREAKDOWN_GRAPH_FRAGMENT,
      useValue: `fragment breakdown on BookingPriceBreakdown {
        balanceDue
        totalDue
      }`
    }

    // {
    //   provide: BREAKDOWN_GRAPH_FRAGMENT,
    //   useFactory: breakdownFragmentFactory,
    //   deps: [FEES_GRAPH_FRAGMENT]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
