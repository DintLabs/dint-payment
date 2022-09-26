import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET);

// This is a backend endpoint responsible for generating new Stripe checkout session

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { walletAddr, amount, email } = req.query;
  console.log({ walletAddr, amount, email })
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email: email,
    // pass customer wallet addr as metadata, so we know where to transfer funds
    payment_intent_data: {
      metadata: {
        "walletAddr": walletAddr,
      },
    },
    metadata: {
      "walletAddr": walletAddr,
    },
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Membership credits', // name of the product (shown at checkout)
          },
          unit_amount: Number(amount) * 100, // Stripe accepts prices in cents
        },
        quantity: 1,
      }
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_SUCCESS_URL}`, // where redirect user after success/fail
    cancel_url: `${process.env.NEXT_PUBLIC_FAILURE_URL}`,
  });

  res.status(200).json({ session })
}
