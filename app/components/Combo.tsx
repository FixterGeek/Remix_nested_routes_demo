import type { ChangeEvent, ReactNode } from 'react';
// context
// 1. lista de opciones

const Options = ({ children }: { children: ReactNode }) => {
  return (
    <div className='border border-blue-600 w-[190px] rounded-md my-1 py-2'>
      {children}
    </div>
  );
};
// 2. componente que sea 1 opcion
export const Option = ({ children }: { children: ReactNode }) => {
  return (
    <p className='cursor-pointer py-1 pl-12 hover:bg-blue-600 hover:text-white'>
      {children}
    </p>
  );
};
// 3. Input?
const Input = ({ onChange }: { onChange: (arg0: string) => void }) => {
  return (
    <input
      className='rounded-md bg-blue-600 px-2 py-2 text-white'
      onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
        onChange(value)
      }
      type='search'
    />
  );
};

export default function Combo({ children }: { children: ReactNode }) {
  return <div className='p-4'>{children}</div>;
}

Combo.Input = Input;
Combo.Option = Option;
Combo.Options = Options;
