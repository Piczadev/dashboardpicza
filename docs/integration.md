# Integration 

## Newsletter
Currently `GlassForm.tsx` handles the UI. To integrate with your chosen newsletter service (e.g., Mailchimp, ConvertKit, Beehiiv):
1. Update `GlassForm.tsx` to handle `onSubmit`.
2. Post the email payload to a Next.js API route (e.g., `src/pages/api/subscribe.ts`).
3. The API route securely communicates with the provider using a server-side secret key.

## Web3 Wallet
`GlassButton` in `Navbar.tsx` and `Hero.tsx` is meant to connect a wallet (Solana/TON).
1. Install an adapter like `@solana/wallet-adapter-react`.
2. Wrap the application (`_app.tsx`) in the necessary `WalletProvider` and `ConnectionProvider`.
3. Swap the `GlassButton` with a customized `WalletMultiButton`.

## CMS (Blog & Featured)
Mocks are provided in `BlogFeed.tsx` and `FeaturedCarousel.tsx`. 
For a production environment:
1. Use `getStaticProps` in `index.tsx` to read markdown/mdx files from a local directory or fetch from a Headless CMS (like Sanity/Contentful).
2. Pass the queried list as props to the components.
