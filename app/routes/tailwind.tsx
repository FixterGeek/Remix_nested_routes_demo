export default function Tailwind() {
  return (
    <section className='flex flex-col py-20 h-screen gap-8 px-20'>
      <h2 className='text-3xl font-bold'>Cada vez más personas leen online</h2>
      <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi
        cumque repellat pariatur nesciunt, ab omnis esse impedit, quis eaque
        dolorem voluptate,{' '}
        <span className='underline decoration-pink-500 decoration-2'>
          voluptates
        </span>{' '}
        accusantium qui ut? Sint
        <span className='underline decoration-indigo-500 decoration-2'>
          quisquam
        </span>{' '}
        <span className='underline decoration-violet-500 decoration-2'>
          doloremque
        </span>{' '}
        sapiente.
      </p>
    </section>
  );
}
