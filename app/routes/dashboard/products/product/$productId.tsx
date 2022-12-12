import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/db.server";

export function ErrorBoundary({ error }: { error: { message: string } }) {
    return (
        <div className='p-12 min-w-[240px] bg-pink-100'>
            <h1 className="text-red-500 text-2xl mb-4">Ups!</h1>
            <p className="text-black-400 mb-4 text-lg">No encontramos tu producto</p>
            <span className="text-6xl text-center">🧠</span>
        </div>
    );
}

export const loader: LoaderFunction = async ({ params }) => {
    const product = await db.product.findUnique({
        where: {
            id: params.productId,
        },
    })
    return product
};

export default function ProductId() {
    const {
        body,
        color,
        images,
        name,
        price,
        stars,
    } = useLoaderData();
    return (
        <div className='p-12 min-w-[240px]'>
            <h3 className='font-semibold'>{name}</h3>
            <h2 className='text-4xl font-bold'>{price}</h2>
            <p className='font-semibold uppercase text-xs tracking-wide'>
                color {color}
            </p>
            <Divider />
            <div className='flex justify-between text-sm max-w-[400px]'>
                <span>{body}</span>
            </div>
            <Divider />
            <div className='flex justify-between text-sm w-full'>
                <img src={images[2]} alt={name} className="max-h-[415px]"></img>
            </div>
            <Divider />
            <div className='flex justify-between font-bold text-left'>
                <span>Ratings:</span>
                <span>
                    {Array(stars).fill('star').map(
                        (ele, ind) => (
                            <span
                                key={ele + ind}
                                className="text-yellow-300 text-left"
                            >★</span>
                        )
                    )}
                </span>
            </div>
        </div>
    )
}

const Divider = () => <hr className='my-4' />;