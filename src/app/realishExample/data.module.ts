import { NgModule } from '@angular/core';
import {
  BREAKDOWN_GRAPH_FRAGMENT,
  FEES_GRAPH_FRAGMENT,
  PAYMENT_GRAPH_FRAGMENT,
  PNR_CREDIT_GRAPH_REQUEST
} from './realTokens';
import { pnrCreditAddFactory } from './pnrCreditAddRequestFactory';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: BREAKDOWN_GRAPH_FRAGMENT,
      useValue: `fragment breakdown on BookingPriceBreakdown {
            balanceDue
            authorizedBalanceDue
            total: totalCharged
            journeyTotals {
              totalDiscount
              totalTax
              totalAmount
            }
            journeys {
              key
              value {
                  journeyKey
                  totalAmount
                  totalTax
              }
            }
            passengerTotals {
              seats {
                total
                taxes
              }
              specialServices {
                taxes
                total
              }
              infant {
                total
                taxes
              }
            }
          }`
    },
    {
      provide: FEES_GRAPH_FRAGMENT,
      useValue: `fragment fees on KeyValuePair_StringGraphType_Passenger {
            passengerKey: key
            value {
              fees {
                code
                detail
                flightReference
                ssrCode
                ssrNumber
                type
                passengerFeeKey
                serviceCharges {
                  amount
                  code
                  detail
                  type
                }
              }
            }
          }`
    },
    {
      provide: PAYMENT_GRAPH_FRAGMENT,
      useValue: `fragment payment on Payment {
            paymentKey
            amounts {
              amount
              collected
            }
            details {
              accountNumber
              installments
              parentPaymentId
              accountName
              expirationDate
            }
            voucher {
              overrideAmount
            }
            status
            authorizationStatus
            code
            createdDate
          }`
    },
    {
      provide: PNR_CREDIT_GRAPH_REQUEST,
      useFactory: pnrCreditAddFactory,
      deps: [
        FEES_GRAPH_FRAGMENT,
        PAYMENT_GRAPH_FRAGMENT,
        BREAKDOWN_GRAPH_FRAGMENT
      ]
    }
  ]
})
export class DataModule {}
