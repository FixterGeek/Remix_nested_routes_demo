import { type LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Error from '~/components/dashboard/Error';
import { invoices } from '../invoices';

// export const ErrorBoundary = () => {
//   return <Error />;
// };

export const loader: LoaderFunction = ({ params }) => {
  return {
    invoice: invoices[params.invoiceId],
  };
};

export default function InvoiceId() {
  const { invoice } = useLoaderData();
  return (
    <div className='p-12 min-w-[340px]'>
      <h3 className='font-semibold'>{invoice.name}</h3>
      <h2 className='text-4xl font-bold'>{invoice.amount}</h2>
      <p className='font-semibold uppercase text-xs tracking-wide'>
        {invoice.status} &#8226; invoiced 10/31/{invoice.year}
      </p>
      <Divider />
      <div className='flex justify-between text-sm'>
        <span>Pro Plan</span>
        <span>$6,000</span>
      </div>
      <Divider />
      <div className='flex justify-between text-sm'>
        <span>Custom</span>
        <span>$2,000</span>
      </div>
      <Divider />
      <div className='flex justify-between font-bold'>
        <span>Net total</span>
        <span>{invoice.amount}</span>
      </div>
    </div>
  );
}

const Divider = () => <hr className='my-4' />;
