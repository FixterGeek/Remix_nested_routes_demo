import { type LoaderFunction } from '@remix-run/node';
import { useState } from 'react';
import Combo, { Option } from '~/components/Combo';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = () => {
  return ['Blissmo', 'Lupita dalesio', 'Juan gabriel', 'José josé', 'Piporro'];
};

export default function ReactEnVivo() {
  const names = useLoaderData<string[]>();
  const [query, setQuery] = useState<string>('');

  const handleChange = (value: string) => {
    console.log(value);
    setQuery(value);
  };

  const filtered =
    query === ''
      ? names
      : names.filter((name) =>
          name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );

  return (
    <div>
      <h2>Blissmo</h2>
      <Combo>
        <Combo.Input onChange={handleChange} />
        <Combo.Options>
          {filtered.map((name) => (
            <Option key={name}>{name}</Option>
          ))}
        </Combo.Options>
      </Combo>
    </div>
  );
}
