import { ReactNode } from 'react';
import { getUserLayer } from '@/utils/ContentFilter';
import TrafficProvider from './TrafficProvider.client';

interface Props {
  children: ReactNode;
}

export default async function ContentTypeProvider({ children }: Props) {
  const userLayer = await getUserLayer();
  const isBlack = userLayer === 3;

  return (
    <TrafficProvider isBlack={isBlack}>
      {children}
    </TrafficProvider>
  );
} 