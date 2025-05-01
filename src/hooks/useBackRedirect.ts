import { useEffect } from 'react';

export const useBackRedirect = (redirectPath: string) => {
  useEffect(() => {
    const setBackRedirect = (path: string) => {
      // Adiciona os parâmetros de URL se existirem
      const urlWithParams = path + (window.location.search ? window.location.search : '');
      
      // Prepara o histórico para o backredirect
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);

      // Adiciona o listener para o evento popstate
      window.addEventListener('popstate', () => {
        console.log('Redirecionando para:', urlWithParams);
        setTimeout(() => {
          window.location.href = urlWithParams;
        }, 1);
      });
    };

    setBackRedirect(redirectPath);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('popstate', () => {});
    };
  }, [redirectPath]);
}; 