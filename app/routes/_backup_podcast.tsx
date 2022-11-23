import { type ActionFunction } from '@remix-run/node';
import { Form, useTransition } from '@remix-run/react';
import { useEffect, useRef } from 'react';
import useRecorder from '../components/useRecorder';
import fs from 'fs';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('audio');
  const ab = await file.arrayBuffer();
  const buf = Buffer.from(ab);
  fs.writeFileSync('public/audioFiles/audio.webm', buf);
  return null;
};

export default function Podcast() {
  const { audioURL, blob, isRecording, startRecording, stopRecording } =
    useRecorder();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const transition = useTransition();

  console.log('La data: ', transition);

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  useEffect(() => {
    if (blob && inputRef.current) {
      const file = new File([blob], 'audio.webm');
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      inputRef.current.files = dataTransfer.files;
    }
  }, [blob]);

  return (
    <div>
      <h2>Podcast</h2>
      <audio controls src={audioURL}></audio>
      <button
        className={`${isRecording ? 'bg-red-500' : ''}`}
        onClick={handleClick}
      >
        {isRecording ? 'Grabando...' : 'Grabar'}
      </button>

      {blob && (
        <Form method='post' encType='multipart/form-data'>
          <input name='audio' ref={inputRef} type='file' />
          <input name='name' type='text' />
          <textarea name='description'></textarea>
          <button>
            {transition.state !== 'idle' ? 'Cargando...' : 'Enviar'}
          </button>
        </Form>
      )}
    </div>
  );
}
