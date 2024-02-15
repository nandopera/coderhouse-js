function carregarArquivoJS(nomeArquivo) {
    let script = document.createElement('script');
    script.src = `./${nomeArquivo}`; // Caminho relativo para seus arquivos JS
    document.body.appendChild(script);
}


/* function carregarArquivoJS(nomeArquivo, funcaoCallback) {
    let script = document.createElement('script');
    script.src = `./${nomeArquivo}`;

    script.onload = function() {
        // Executa a função de callback após o carregamento do script
        if (typeof funcaoCallback === 'function') {
            funcaoCallback();
        }
    };

    document.body.appendChild(script);
}

function executarFuncao() {
    // Código a ser executado após o carregamento do arquivo 'while.js'
} */
 
// Com botão para trocar.

/* function trocarEstilo() {
    let estilo1 = document.getElementById('estilo1');
    let estilo2 = document.getElementById('estilo2');
    
    const toggle = document.getElementById('estilo-toggle');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            estilo1.disabled = true;
            estilo2.disabled = false;
        } else {
            estilo1.disabled = false;
            estilo2.disabled = true;
        }
        
    }
)}; */
    
    
    /* if (estilo1.disabled) {
        estilo1.disabled = false;
        estilo2.disabled = true;
    } else {
        estilo1.disabled = true;
        estilo2.disabled = false;
    } */

/* const estilo1 = document.getElementById('estilo1');
const estilo2 = document.getElementById('estilo2');

const radios = document.querySelectorAll('input[name="estilo"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            if (radio.id === 'estilo1') {
                estilo1.disabled = true;
                estilo2.disabled = false;
            } else {
                estilo1.disabled = false;
                estilo2.disabled = true;
            }
        }
    });
}); */

/* const interruptor = document.querySelector('.interruptor');
const bola = interruptor.querySelector('.bola');

interruptor.addEventListener('click', () => {
    const estilo1 = document.getElementById('estilo1');
    estilo1.checked = !estilo1.checked;
    bola.style.left = estilo1.checked ? '25px' : '2px';
}); */

const interruptor = document.querySelector('.interruptor');
const bola = interruptor.querySelector('.bola');

interruptor.addEventListener('click', () => {
  const estilo1 = document.getElementById('estilo1');
  const estilo2 = document.getElementById('estilo2');

  // Verifica o estado do radio button
  if (estilo1.checked) {
      estilo1.disabled = true;
      estilo2.disabled = false;
    bola.style.left = '2px';
  } else {
    estilo1.disabled = false;
    estilo2.disabled = true;
    bola.style.left = '25px';
  }
});