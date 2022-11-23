import { useFetcher, useNavigate } from '@remix-run/react';
import { useEffect, useRef } from 'react';
import ProductForm from './forms/ProductForm';

export default function Modal({ initialValues }) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const divRef = useRef();

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    const cb = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    document.addEventListener('keydown', cb);
    return () => document.removeEventListener('keydown', cb);
    /* eslint-disable */
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = {
      title: e.target.title.value,
      body: e.target.body.value,
      slug: e.target.slug.value,
      id: initialValues?.id || undefined,
    };
    if (initialValues?.id) {
      fetcher.submit(form, { method: 'patch', action: '/crud' });
    } else {
      fetcher.submit(form, { method: 'post', action: '/crud' });
    }
  };

  const onDelete = (id) => {};

  return (
    <div
      ref={divRef}
      onClick={(e) => {
        if (e.target === divRef.current) onCancel();
      }}
      className='w-full h-full bg-[rgba(0,0,0,0.7)] absolute top-0 grid place-items-center'
    >
      <div className='bg-white text-lg w-[600px] h-[400px] p-8 rounded-xl'>
        <div className='flex justify-between'>
          <h2>Agrega un nuevo producto</h2>
          <p onClick={onCancel}>❌</p>
        </div>
        <ProductForm initialValues={initialValues} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
