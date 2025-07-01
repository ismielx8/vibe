'use client';

// <-- hooks can only be used in client components
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: 'world' }));
  

  return( 
  <div>
    {JSON.stringify(data, null, 2)}
  </div>
  );

};