function carregarArquivoJS(nomeArquivo) {
        let script = document.createElement('script');
        script.src = `./${nomeArquivo}`; // Caminho relativo para seus arquivos JS
        document.body.appendChild(script);
    }
    
    const estilo1 = document.getElementById('estilo1');
    const estilo2 = document.getElementById('estilo2');
    
    const radios = document.querySelectorAll('input[name="estilo"]');
    
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          if (radio.id === 'estilo1') {
            estilo1.disabled = false;
            estilo2.disabled = true;
          } else if (radio.id === 'estilo2') {
            estilo1.disabled = true;
            estilo2.disabled = false;
          }
        }
      });
    });
    
    const interruptor = document.querySelector('.interruptor');
    const bola = interruptor.querySelector('.bola');
    
    interruptor.addEventListener('click', () => {
        const estilo1 = document.getElementById('estilo1');
        estilo1.checked = !estilo1.checked;
        bola.style.left = estilo1.checked ? '25px' : '2px';
    });
    