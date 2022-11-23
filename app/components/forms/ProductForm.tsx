import { Form } from '@remix-run/react';

export default function ProductForm({ initialValues = {}, onSubmit }) {
  return (
    <Form method='post' onSubmit={onSubmit} className='flex flex-col'>
      <label htmlFor=''>Escribe el slug</label>
      <input
        defaultValue={initialValues.slug}
        className='border'
        name='slug'
        placeholder='title'
      />
      <label htmlFor=''>Escribe el titulo</label>
      <input
        defaultValue={initialValues.title}
        className='border'
        name='title'
        placeholder='title'
      />
      <label htmlFor=''>Escribe la descripción</label>
      <textarea
        defaultValue={initialValues.body}
        className='border'
        name='body'
      ></textarea>
      <input
        type='submit'
        className='py-8 px-6 bg-blue-500 rounded text-white'
        value={initialValues.id ? 'Actualizar' : 'Guardar'}
      />
    </Form>
  );
}
