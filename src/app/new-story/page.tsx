'use client';

import { useRouter } from 'next/navigation';
import Nav from '../components/Nav';
import dynamic from 'next/dynamic';

const EditorJS = dynamic(() => import('~/app/components/EditorJS'), {
  ssr: false,
});

export default function NewStory() {
  const router = useRouter();

  return (
    <>
      <Nav />

      <EditorJS />
    </>
  );
}
