import Modal from '~/components/Modal';
import { db } from '~/db/db.server';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ params }) => {
  const product = await db.product.findUnique({ where: { slug: params.slug } });
  return { product };
};

export default function New() {
  const { product } = useLoaderData();
  return <Modal initialValues={product} />;
}
