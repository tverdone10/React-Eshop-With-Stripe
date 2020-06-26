import React, { useState, useEffect } from "react";

const items = [
  {
    price: "price_1GxhjbFFxFG9mmf6Wt9x7oPr",
    quantity: 1,
    cost: 35900,
    name: "Squier Jaguar Bass",
  },
  {
    price: "price_1GxhhTFFxFG9mmf68RIKzNB6",
    quantity: 1,
    cost: 75000,
    name: "Fender Telecaster",
  },
  {
    price: "price_1GxhgBFFxFG9mmf6UXKrNh4D",
    quantity: 1,
    cost: 90000,
    name: "Gibson Explorer",
  },
];

function totalPrice(items) {
  return items.reduce(
    (accumulated, item) => accumulated + item.quantity * item.cost,
    0.0
  );
}



export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken));
  }, [stripeToken]);

  function checkOut() {
    stripe.redirectToCheckout({
      lineItems: items.map(item => ({
        price: item.price,
        quantity: item.quantity
      })),
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/canceled'
  
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.price}.jpg`}
                  alt={item.name}
                  width={50}
                />
              </td>
              <td>{item.quantity}</td>
              <td>{`$` + (item.cost * 0.01).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colSpan={3}>
              Total:
            </td>
            <td>{totalPrice(items)}</td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }} colSpan={4}>
              <button onClick={checkOut}>Checkout with Stripe</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}
