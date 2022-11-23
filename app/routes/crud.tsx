import { type Product } from '@prisma/client';
import { redirect, type LoaderFunction } from '@remix-run/node';
import { Link, Outlet, useFetcher, useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import { db } from '~/db/db.server';

const productSchema = z.object({
  title: z.string().optional(),
  body: z.string().optional(),
  slug: z.string({ required_error: 'El slug debe ser único' }),
});

interface LoaderData {
  products: Product[];
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const form = Object.fromEntries(formData);
  const result = productSchema.safeParse(form);
  switch (request.method) {
    case 'DELETE':
      await db.product.delete({ where: { id: form.id } });
    case 'PATCH':
      if (result.success) {
        await db.product.update({
          where: {
            id: form.id,
          },
          data: { ...form, id: undefined },
        });
        return redirect('/crud');
      }
    default:
      if (result.success) {
        await db.product.create({ data: { ...form, id: undefined } });
        return redirect('/crud');
      }
  }

  return result;
};

export const loader: LoaderFunction = async () => {
  const products = await db.product.findMany({
    take: 10,
    orderBy: {
      id: 'desc',
    },
  });
  return { products };
};

export default function Crud() {
  const fetcher = useFetcher();

  const handleDelete = (id) => {
    if (!confirm('Estas seguro de borrar, no se puede recuperar!')) return;
    fetcher.submit({ id }, { method: 'delete' });
  };

  const { products } = useLoaderData<LoaderData>();
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <Link to='new'>
          <button className='py-2 px-4 bg-blue-500 text-white text-lg'>
            Agregar
          </button>
        </Link>
        <table className='table-auto'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Nombre del producto</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.map((producto) => (
              <tr key={producto.id}>
                <td style={{ padding: '0 8px' }}>
                  <Link className='text-blue-500' to={`${producto.slug}/edit`}>
                    {producto.id}
                  </Link>
                </td>
                {/* <td>{producto.title}</td> */}
                <td>{producto.body}</td>
                <td>
                  <button onClick={() => handleDelete(producto.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
      </div>
    </>
  );
}
