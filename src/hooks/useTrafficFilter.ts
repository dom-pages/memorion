import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export function useTrafficFilter() {
  const [isBlack, setIsBlack] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkTraffic = () => {
      // Lógica para determinar se é tráfego black ou white
      const isBlackTraffic = Math.random() < 0.5; // Exemplo: 50% de chance de ser black
      setIsBlack(isBlackTraffic);
    };

    checkTraffic();
  }, [pathname, searchParams]);

  return { isBlack };
} 