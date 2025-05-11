import { useState, useEffect } from 'react';

const COOKIE_NAME = 'vsl_access';

export function useTrafficFilter() {
  const [isBlack, setIsBlack] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookies = document.cookie.split(';');
      const vslAccessCookie = cookies.find(cookie => cookie.trim().startsWith(`${COOKIE_NAME}=`));
      setIsBlack(!!vslAccessCookie);
    };

    checkCookie();
  }, []);

  return isBlack;
} 