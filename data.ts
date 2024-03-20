const data = {
  id: "02Y14448F80401454",
  status: "COMPLETED",
  payment_source: {
    paypal: {
      email_address: "sb-2xb8k27028003@personal.example.com",
      account_id: "8VWWA46UKJKRS",
      account_status: "VERIFIED",
      name: {
        given_name: "John",
        surname: "Doe",
      },
      address: {
        country_code: "KE",
      },
    },
  },
  purchase_units: [
    {
      reference_id: "default",
      shipping: {
        name: {
          full_name: "John Doe",
        },
        address: {
          address_line_1: "Free Trade Zone",
          admin_area_2: "Nairobi",
          admin_area_1: "CA",
          postal_code: "00521",
          country_code: "KE",
        },
      },
      payments: {
        captures: [
          {
            id: "4BT21486BL543744E",
            status: "COMPLETED",
            amount: {
              currency_code: "USD",
              value: "15.00",
            },
            final_capture: true,
            seller_protection: {
              status: "ELIGIBLE",
              dispute_categories: [
                "ITEM_NOT_RECEIVED",
                "UNAUTHORIZED_TRANSACTION",
              ],
            },
            seller_receivable_breakdown: {
              gross_amount: {
                currency_code: "USD",
                value: "15.00",
              },
              paypal_fee: {
                currency_code: "USD",
                value: "0.81",
              },
              net_amount: {
                currency_code: "USD",
                value: "14.19",
              },
            },
            links: [
              {
                href: "https://api.sandbox.paypal.com/v2/payments/captures/4BT21486BL543744E",
                rel: "self",
                method: "GET",
              },
              {
                href: "https://api.sandbox.paypal.com/v2/payments/captures/4BT21486BL543744E/refund",
                rel: "refund",
                method: "POST",
              },
              {
                href: "https://api.sandbox.paypal.com/v2/checkout/orders/02Y14448F80401454",
                rel: "up",
                method: "GET",
              },
            ],
            create_time: "2024-03-20T17:44:56Z",
            update_time: "2024-03-20T17:44:56Z",
          },
        ],
      },
    },
  ],
  payer: {
    name: {
      given_name: "John",
      surname: "Doe",
    },
    email_address: "sb-2xb8k27028003@personal.example.com",
    payer_id: "8VWWA46UKJKRS",
    address: {
      country_code: "KE",
    },
  },
  links: [
    {
      href: "https://api.sandbox.paypal.com/v2/checkout/orders/02Y14448F80401454",
      rel: "self",
      method: "GET",
    },
  ],
};
