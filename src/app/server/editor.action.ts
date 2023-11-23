'use server';

import { OutputData } from '@editorjs/editorjs';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from 'prisma/instance';

export const savePost = async (outputData: OutputData, id?: string) => {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  if (!id) {
    const post = await prisma.posts.create({
      data: {
        content: JSON.stringify(outputData),
        thumbnail: '/profile.png',
        title: outputData.blocks[0].data.text.substring(0, 80),
        author: {
          connect: {
            email: session?.user?.email + '',
          },
        },
      },
    });

    return { message: 'Create new post', post };
  }

  const post = await prisma.posts.upsert({
    create: {
      content: JSON.stringify(outputData),
      thumbnail: '/profile.png',
      title: outputData.blocks[0].data.text.substring(0, 80),
      author: {
        connect: {
          email: session?.user?.email + '',
        },
      },
    },
    where: {
      id,
    },
    update: {
      content: JSON.stringify(outputData),
      title: outputData.blocks[0].data.text.substring(0, 80),
    },
  });

  return { message: 'Saving post', post };
};
