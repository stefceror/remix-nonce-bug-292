import {useContext} from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";
import { NonceContext } from "./components/NonceContext";

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useContext(NonceContext);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
