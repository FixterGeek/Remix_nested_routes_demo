import { Outlet, useLoaderData } from "@remix-run/react";
import { type Product } from "@prisma/client";
import ProductItem from "~/components/dashboard/ProductItem";
import { db } from "~/db/db.server";

export async function loader() {
    const products = await db.product.findMany({ take: 5 });
    return { data: products };
}

export default function Products() {
    const data = useLoaderData();
    const { products } = data as { products: Product[] };

    return (
        <section className='p-20'>
            <h2 className='text-4xl font-bold pb-6'>Products</h2>
            <hr className='my-4' />
            <section className='flex'>
                <section>
                    <div className='border border-indigo-400 rounded flex flex-col w-full'>
                        {products.map((product) => (
                            <ProductItem key={product.id} {...product} />
                        ))}
                    </div>
                </section>
                <section>
                    <Outlet />
                </section>
            </section>
        </section>
    )
}
