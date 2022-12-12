import { Link } from '@remix-run/react';
import { type Product } from "@prisma/client";

const ProductItem = ({
    name,
    price,
    body,
    color,
    id,
    images,
    stars,
}: Product) =>
(
    <Link to={`product/${id}`}>
        <div className=' p-4 flex w-full gap-12 justify-between hover:bg-zinc-200 cursor-pointer border-zinc-400 border-b'>
            <div className={`text-right w-1/3`}>
                <h2 className='font-semibold'>{name}</h2>
                <p className='text-xs text-zinc-600 font-semibold'>${price}</p>
                <section className='flex justify-between flex-wrap'>
                    {images.map((image: string, index: number) => (
                        <img
                            key={`key: ${image}-${index}`}
                            src={image}
                            className='mt-6 h-12 object-cover'
                            alt={`${image} - ${index}`}
                        />
                    ))}
                </section>
            </div>
            <div className={`text-left w-2/3`}>
                <h2 className='font-semibold'>{body}</h2>
                <p
                    className={`text-xs font-semibold uppercase`}
                >
                    {color}
                </p>
                {Array(stars).fill(0).map((e, i) => <span className='text-yellow-500' key={e || 0 + i}>★</span>)}
            </div>
        </div>
    </Link>
);

export default ProductItem;
