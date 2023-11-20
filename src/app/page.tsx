'use client';

import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {session?.user?.email}</p>

        <a href="/api/auth/signout">Sign Out</a>
      </>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
}
