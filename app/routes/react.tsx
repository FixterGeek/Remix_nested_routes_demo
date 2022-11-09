import ComboBox from '~/components/ComboBox';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';

export const loader = () => {
  return [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
  ];
};

export default function R() {
  const people = useLoaderData<any[]>();
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className='min-h-screen'>
      <h2 className='text-2xl py-20 px-8'>Un Bonito ComboBox: </h2>
      <div className='flex justify-center py-20 min-h-screen'>
        <ComboBox>
          <ComboBox.Input onChange={handleChange} />
          <ComboBox.Options>
            {filteredPeople.map((person) => (
              <ComboBox.Option key={person}>{person}</ComboBox.Option>
            ))}
          </ComboBox.Options>
        </ComboBox>
      </div>
    </div>
  );
}
