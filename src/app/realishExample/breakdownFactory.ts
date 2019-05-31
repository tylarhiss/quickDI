export function breakdownFragmentFactory(feesFragment: string) {
  return `
    fragment breakdown on BookingPriceBreakdown {
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
              // PRETEND INFANT IS A FEES OBJECT
           ...fees
          }
        }
      }
    ${feesFragment}
    `;
}
