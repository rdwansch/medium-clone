import { useParams } from 'next/navigation';
import EditorJS from '~/app/components/EditorJS';
import Nav from '~/app/components/Nav';

export default function page() {
  return (
    <div>
      <Nav />

      <EditorJS />
    </div>
  );
}
