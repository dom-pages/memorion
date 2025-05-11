import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const COOKIE_NAME = 'vsl_access';

export function useTrafficFilter() {
  const [isBlack, setIsBlack] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const checkTraffic = () => {
      // Verifica se o cookie existe
      const hasAccess = document.cookie
        .split('; ')
        .some(row => row.startsWith(`${COOKIE_NAME}=true`));
      
      setIsBlack(hasAccess);
    };

    checkTraffic();
  }, [pathname, searchParams]);

  return { isBlack };
} 