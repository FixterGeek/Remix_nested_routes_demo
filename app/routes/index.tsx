import { redirect } from '@remix-run/node';

export const loader = async ({ params }) => {
  // redirecting for fift exercice
  return redirect('/dashboard/sales/invoices/1');
  //
};
