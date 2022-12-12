import { redirect } from '@remix-run/node';

export const loader = async () => {
  // redirecting for fift exercice
  return redirect('/dashboard/sales/invoices/1');
};

export default function index() {
  return <div>Welcome</div>
}
