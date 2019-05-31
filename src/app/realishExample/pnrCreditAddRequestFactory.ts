export function pnrCreditAddFactory(
  feesFragment,
  paymentFragment,
  breakdownFragment
) {
  return `
  mutation addCredit($amount: Decimal!, $pnr: Input_RetrieveBooking) {
    addPnrCredit: paymentBookingCreditsAddv2(request: {request: {amount: $amount}, validation: $pnr}) {
      payment {
        ...payment
      }
    }
  }
  
  query breakdownAndFees {
    booking {
      breakdown {
        ...breakdown
      }
      fees: passengers {
        ...fees
      }
    }
  }
  
  ${feesFragment}
  ${paymentFragment}
  ${breakdownFragment}
    `;
}
