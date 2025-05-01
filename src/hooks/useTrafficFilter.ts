import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useTrafficFilter() {
  const [isBlack, setIsBlack] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTraffic = () => {
      const urlParams = new URLSearchParams(location.search);
      const catParam = urlParams.get('cat');
      
      if (catParam === 'b6mP2e7KIKH7i2w') {
        // Salvar no cookie
        document.cookie = 'traffic_type=black; path=/; max-age=31536000'; // 1 ano de validade
        
        // Remover o parâmetro da URL
        urlParams.delete('cat');
        const newUrl = urlParams.toString() 
          ? `${location.pathname}?${urlParams.toString()}`
          : location.pathname;
        
        // Navegar para a nova URL sem o parâmetro
        navigate(newUrl, { replace: true });
        
        setIsBlack(true);
      } else {
        // Verificar se já existe um cookie
        const cookies = document.cookie.split(';');
        const trafficCookie = cookies.find(cookie => cookie.trim().startsWith('traffic_type='));
        
        if (trafficCookie) {
          setIsBlack(trafficCookie.includes('black'));
        } else {
          setIsBlack(false);
        }
      }
    };

    checkTraffic();
  }, [location, navigate]);

  return { isBlack };
} 