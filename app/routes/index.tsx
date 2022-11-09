import { Link, useLoaderData } from '@remix-run/react';
import { db } from '~/db/db.server';

export const loader = async ({ params }) => {
  let { page = 0 } = params;
  const products = await db.product.findMany({
    take: 5,
    skip: 0,
  });
  const count = await db.product.count();
  return { products, count, page };
};

export default function Index() {
  const { products, count, page } = useLoaderData();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Usando Prisma {count}</h1>
      {products.map((product) => (
        <p key={product.id}>{product.slug}</p>
      ))}
      {page > 0 && (
        <Link to={`/page/${page - 1}`}>
          <button>Anterior</button>
        </Link>
      )}
      <Link to={`/page/${page + 1}`}>
        <button>Siguiente</button>
      </Link>
    </div>
  );
}
