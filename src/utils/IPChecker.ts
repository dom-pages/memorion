// API CREDENTIALS - TODAS DESATIVADAS
// const PROXYCHECK_API_KEY = '91z0m5-f9999f-569085-69f027'; // DESATIVADO
// const ABSTRACT_API_KEY = '3c9b0ec81cac4e3a905ce351b0d5ccb7';
// const IPINFO_API_KEY = 'e549c4829f6b7c'; // DESATIVADO

// SET FILTER DATA
const blockedCountryList = ['BR', 'RU', 'KP', 'IR'];

export async function isSuspiciousIP(ip: string, headers: Headers): Promise<boolean> {
          try {
            // TODAS AS APIS DESATIVADAS - SÓ CLOAKING ATIVO
            
            // PROXY CHECK - DESATIVADO (conta suspensa)
            // const proxyCheckResponse = await fetch(`https://proxycheck.io/v2/${ip}?key=${PROXYCHECK_API_KEY}&vpn=1&asn=1`);
            // 
            // if (!proxyCheckResponse.ok) {
            //   console.log('ProxyCheck API not available, skipping...');
            //   return false;
            // }
            // 
            // const proxyCheckText = await proxyCheckResponse.text();
            // let proxyCheckData;
            // 
            // try {
            //   proxyCheckData = JSON.parse(proxyCheckText);
            // } catch (error) {
            //   console.log('ProxyCheck response is not valid JSON, skipping...');
            //   return false;
            // }
            //
            // console.log('ProxyCheck:', proxyCheckData);
            //
            // if (proxyCheckData[ip]?.proxy === "yes" || proxyCheckData[ip]?.vpn === "yes") {
            //   console.log('PROXY / VPN DETECTED BY PROXY CHECK');
            //   return true;
            // }
            //
            // const proxyCheckCountry = proxyCheckData[ip]?.isocode;
            // const proxyCheckBlockedCountry = blockedCountryList.includes(proxyCheckCountry);
            //
            // if (proxyCheckBlockedCountry) {
            //   console.log('BLOCKED COUNTRY BY PROXY CHECK');
            //   return true;
            // }

            // ABSTRACT CHECK - DESATIVADO
            // const abstractResponse = await fetch(`https://ip-intelligence.abstractapi.com/v1/?api_key=${ABSTRACT_API_KEY}&ip_address=${ip}`);
            // const abstractData = await abstractResponse.json();

            // console.log('AbstractAPI:', abstractData);

            // if (abstractData?.security?.is_vpn || abstractData?.security?.is_proxy || abstractData?.security?.is_tor) {
            //   console.log('PROXY / VPN DETECTED BY ABSTRACT API');
            //   return true;
            // };

            // const abstractCountry = abstractData?.location?.country_code;
            // const abstractapiBlockedCountry = blockedCountryList.includes(abstractCountry);

            // if (abstractapiBlockedCountry) {
            //   console.log('BLOCKED COUNTRY BY ABSTRACT API');
            //   return true;
            // };

            // DATACENTER CHECK - DESATIVADO
            // const ipInfoResponse = await fetch(`https://ipinfo.io/${ip}/json?token=${IPINFO_API_KEY}`);
            // 
            // if (!ipInfoResponse.ok) {
            //   console.log('IPInfo API not available, skipping...');
            //   return false;
            // }
            // 
            // const ipInfoText = await ipInfoResponse.text();
            // let ipInfoData;
            // 
            // try {
            //   ipInfoData = JSON.parse(ipInfoText);
            // } catch (error) {
            //   console.log('IPInfo response is not valid JSON, skipping...');
            //   return false;
            // }

            // console.log('IPinfo:' , ipInfoData);

            // const asn = ipInfoData?.org || '';

            // if (asn.includes('Amazon') || asn.includes('Google') || asn.includes('Microsoft') || asn.includes('DigitalOcean')) {
            //   console.log('DATACENTER IP DETECTED BY IP INFO');
            //   return true;
            // }

            // const ipinfoCountry = ipInfoData?.country;
            // const ipinfoBlockedCountry = blockedCountryList.includes(ipinfoCountry);

            // if (ipinfoBlockedCountry) {
            //   console.log('BLOCKED COUNTRY BY IP INFO');
            //   return true;
            // }

            console.log('TODAS AS APIS DESATIVADAS - CLOAKING ATIVO');
            return false; // Permite acesso a todos

          } catch (error) {
            console.error(error);
            return false; // Em caso de erro, permite acesso
          }
          
          return false;
        }