import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import styles from '~/styles/global.css';

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export function CatchBoundary() {
  const caught = useCatch();
  const notFoundImage = require('/diedRobot.jpeg')
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className='flex flex-1 flex-wrap direction-row items-center justify-center'>
          <h1 className='text-6xl text-orange-800'>
            {caught.status} {caught.statusText}
          </h1>
          <img src={notFoundImage}
            alt='not found'
            className='w-4/12'
          />
        </div>
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'anidando ando',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
