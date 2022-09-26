This is a [Next.js](https://nextjs.org/) project that allows you to accept USD payments in Stripe. Every succeded payment is processed by `/api/webhooks/stripe` webhook that is responsible for delivering ERC20 token (DINT) to the customer wallet address.

Customer wallet needs to be stored in the `metadata` object of the checkout.

Check working example at:
https://dint-member-payments.vercel.app

Processed transactions will be visible on the token tracker:
https://mumbai.polygonscan.com/token/0x97df2760193Df86af0A5248D7DFc0AA0b52AC2F5

Sent transfers will be visible on the wallet history:
https://mumbai.polygonscan.com/address/0x70063ec18ff2cb6b74408bccc4d4a64943563715
## How to start?
- install stable Node.js
- install packages with `npm install` or `yarn install`
- Configure ENVs for your project. You may do it with `.env`. Check example file `.env.example`
- deploy this app, so webhook urls are available for external http calls
- configure Stripe account to use webhooks

## How to test credit card payments with Stripe sandbox?
- test number: 4242 4242 4242 4242
- expiry date in future
- cvc any 3 digit number
- name, country does not matter

## How to connect it with front-end?
- Get Stripe session from `GET /api/checkout?email=john@doe.com&walletAddr=0x123123&amount=30`
- Redirect to Stripe session using obtained id
- check `pages/index.js` for inspiration

## Running dev server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
back and contributions are welcome!

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
