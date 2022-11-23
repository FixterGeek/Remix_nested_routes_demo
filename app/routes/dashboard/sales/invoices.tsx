import { type LoaderFunction } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import Invoice from '~/components/dashboard/Invoice';

export const invoices = [
  {
    name: 'Santa Monica',
    year: 1995,
    amount: '$8,000',
    status: 'due today',
  },
  {
    name: 'Stankonia',
    year: 2000,
    amount: '$10,800',
    status: 'overdue',
  },
  {
    name: 'Ocean Avenue',
    year: 2003,
    amount: '$9,500',
    status: 'paid',
  },
  {
    name: 'Tubthumper',
    year: 1997,
    amount: '$14,000',
    status: 'due in 10 days',
  },
  {
    name: 'Wide Open Sp...',
    year: 1998,
    amount: '$4,600',
    status: 'due in 8 days',
  },
];

interface LoaderData {
  invoices: Record<string, string | number>[];
}

export const loader: LoaderFunction = () => {
  return {
    invoices,
  };
};

export default function Invoices() {
  const { invoices } = useLoaderData<LoaderData>();
  return (
    <div>
      <h2 className='uppercase text-xs font-semibold text-zinc-500 mb-4'>
        Invoice list
      </h2>
      <section className='flex w-full'>
        <div className='border border-zinc-400 rounded flex flex-col'>
          {invoices.map((invoice, index) => (
            <Invoice index={index} key={invoice.name} {...invoice} />
          ))}
        </div>
        <Outlet />
      </section>
    </div>
  );
}
