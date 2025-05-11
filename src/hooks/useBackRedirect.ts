import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useBackRedirect(redirectPath: string) {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      router.push(redirectPath);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [redirectPath, router]);
} 