'use client';

import EditorJS, { BlockAPI, ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { useEffect, useState } from 'react';
import { savePost } from '../server/editor.action';

export default function Editor() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    let idTimeOut: NodeJS.Timeout;

    const editor = new EditorJS({
      onReady() {
        const editorDiv = document.querySelectorAll('.codex-editor.codex-editor--empty')[1];
        if (editorDiv) editorDiv.remove();
      },

      async onChange(api, event) {
        clearTimeout(idTimeOut);

        idTimeOut = setTimeout(async () => {
          const outputData = await editor.save();
          const postId: string | undefined = window.location.pathname.split('/')[2];

          const res = await savePost(outputData, postId);

          setMessage(res.message);
          window.history.replaceState(null, '', `/p/${res.post.id}`);
        }, 3000);
      },

      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          config: {
            levels: [2],
            defaultLevel: 2,
          },
          inlineToolbar: true,
        },
      },
      placeholder: 'Title',
      holder: '__Xc2k--kZ1F',
    });

    // return () => {
    //   editor.isReady
    //     .then(() => {
    //       console.log('Destroying Editor');
    //       editor.destroy();
    //     })
    //     .catch(err => console.log('Error destroying Editor', err.message));
    // };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-3xl mx-auto pl-10 p-5">
      <div
        id="__Xc2k--kZ1F"
        className="j9__Cj22 oPxw9__b2--hhMw font-serif w-full prose prose-xl prose-h2:text-4xl prose-headings:font-normal
        max-w-full
        overflow-x-hidden
      "
      ></div>

      {message}
    </div>
  );
}
