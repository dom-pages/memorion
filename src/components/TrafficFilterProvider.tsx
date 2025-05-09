import { Suspense } from 'react';
import { useTrafficFilter } from '@/hooks/useTrafficFilter';

interface TrafficFilterProviderProps {
  children: (isBlack: boolean) => React.ReactNode;
}

function TrafficFilterContent({ children }: TrafficFilterProviderProps) {
  const { isBlack } = useTrafficFilter();
  return <>{children(isBlack)}</>;
}

export function TrafficFilterProvider({ children }: TrafficFilterProviderProps) {
  return (
    <Suspense fallback={null}>
      <TrafficFilterContent children={children} />
    </Suspense>
  );
} 