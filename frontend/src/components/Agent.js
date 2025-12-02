import { useEffect } from 'react';

const JotFormAgent = () => {

    useEffect(() => {
        const SCRIPT_ID = 'jotform-agent-script';
        const SCRIPT_URL = "https://cdn.jotfor.ms/agent/embedjs/019acefe1a6875818162229005bfdc8ed07c/embed.js";

        // Script zaten varsa tekrar yükleme
        if (document.getElementById(SCRIPT_ID)) {
            return;
        }

        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.src = SCRIPT_URL;
        script.async = true;

        // DİKKAT: crossOrigin satırını sildik, artık CORS hatası vermeyecek.

        script.onload = () => {
            console.log("JotForm Agent başarıyla yüklendi.");
        };

        script.onerror = () => {
            console.error("JotForm scripti yüklenemedi. (Adblocker kontrolü yapın)");
        };

        document.body.appendChild(script);

        // Cleanup
        return () => {
            // Sayfa değişince scripti silmek isterseniz yorumu açın:
            // const existingScript = document.getElementById(SCRIPT_ID);
            // if (existingScript) document.body.removeChild(existingScript);
        };
    }, []);

    return null;
};

export default JotFormAgent;