import { Link } from '@remix-run/react';

const Invoice = ({
  name,
  year,
  amount,
  status,
  index,
}: Record<string, string | number>) => (
  <Link to={`${index}`}>
    <div className=' p-4 flex w-full gap-12 justify-between hover:bg-zinc-200 cursor-pointer'>
      <div>
        <h2 className='font-semibold'>{name}</h2>
        <p className='text-xs text-zinc-600 font-semibold'>{year}</p>
      </div>
      <div className='text-right'>
        <h2 className='font-semibold'>{amount}</h2>
        <p
          className={`text-xs font-semibold uppercase text-zinc-600 ${
            status === 'paid'
              ? 'text-green-600'
              : status === 'overdue'
              ? 'text-red-600'
              : ''
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  </Link>
);

export default Invoice;
