import type { Product } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { db } from '~/db/db.server';

interface LoaderData {
  products: Product[];
  count: number;
  pageNumber: number;
}

export const loader: LoaderFunction = async ({ params }) => {
  let { pageNumber = 0 } = params;
  console.log('pageNumber: ', params);
  const products = await db.product.findMany({
    take: 5,
    skip: Number(pageNumber) * 5,
  });
  const count = await db.product.count();
  return { products, count, pageNumber };
};
/** Podemos enviar varias variables que nos ayuden a crear un UI más complejo
 * totalItems => const count = await db.product.count();
 * resultsByPage => Esto se puede conseguir con un select
 * currentPage => pageNumber
 * numberOfPages => count / resultsByPage
 * Si piensas usar todas estas variables puedes usar la estrategia de los searchParams
 *      const url = new URL(request.url);
 *      const resultsByPage = url.searchParams.get("resultsByPage");
 *
 */

export default function Index() {
  const { products, count, pageNumber } = useLoaderData<LoaderData>();
  const page = Number(pageNumber);
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Usando Prisma {count}</h1>
      {products.map((product) => (
        <p key={product.id}>{product.slug}</p>
      ))}
      {pageNumber > 0 && (
        <Link to={`/page/${page - 1}`}>
          <button>Anterior</button>
        </Link>
      )}
      {products.length > 4 && (
        <Link to={`/page/${page + 1}`}>
          <button>Siguiente</button>
        </Link>
      )}
    </div>
  );
}
