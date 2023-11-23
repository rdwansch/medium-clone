'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const StoryContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => {}]);

export default function StoryContextProvider({ children }: { children: ReactNode }) {
  const [story, setStory] = useState('');

  return <StoryContext.Provider value={[story, setStory]}>{children}</StoryContext.Provider>;
}
