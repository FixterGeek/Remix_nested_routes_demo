export default function Error() {
  return (
    <div className=' p-20 flex flex-col items-center w-[340px]'>
      <img className='w-[320px]' src='/error-document.png' alt='error' />
      <h2 className='text-red-500 text-xl font-semibold'>¡Algo salió mal!</h2>
    </div>
  );
}
