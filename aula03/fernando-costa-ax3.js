let idiomaSelecionado = 'pt-br';

const textos = {
    'pt-br': {
        tituloIdioma: 'Escolha seu idioma:',
        mensagemIdade: 'Digite sua data de nascimento:',
        placeholderDataNascimento: 'Data de Nascimento',
        botaoExibirIdade: 'Exibir idade',
        resultadoIdade: 'Você tem',
        anos: 'anos.'
    },
    'en-us': {
        tituloIdioma: 'Choose your language:',
        mensagemIdade: 'Enter your birth date:',
        placeholderDataNascimento: 'Date of Birth',
        botaoExibirIdade: 'Show age',
        resultadoIdade: 'You are',
        anos: 'years old.'
    },
    'es': {
        tituloIdioma: 'Elige tu idioma:',
        mensagemIdade: 'Ingrese su fecha de nacimiento:',
        placeholderDataNascimento: 'Fecha de Nacimiento',
        botaoExibirIdade: 'Mostrar edad',
        resultadoIdade: 'Tienes',
        anos: 'años.'
    }
};

function escolherIdioma(idioma) {
    idiomaSelecionado = idioma;
    exibirFormulario();
    // Atualiza o texto do resultado automaticamente ao mudar o idioma
    exibirIdade();
}

function exibirFormulario() {
    document.getElementById("tituloIdioma").textContent = textos[idiomaSelecionado].tituloIdioma;
    document.getElementById("mensagemIdade").textContent = textos[idiomaSelecionado].mensagemIdade;
    document.getElementById("dataNascimento").placeholder = textos[idiomaSelecionado].placeholderDataNascimento;
    document.getElementById("botaoExibirIdade").textContent = textos[idiomaSelecionado].botaoExibirIdade;
}

function exibirIdade() {
    let dataNascimento = document.getElementById("dataNascimento").value;

    let dataNascimentoObj = new Date(dataNascimento);
    let dataAtual = new Date();

    let anoNascimento = dataNascimentoObj.getFullYear();
    let mesNascimento = dataNascimentoObj.getMonth();
    let diaNascimento = dataNascimentoObj.getDate();

    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let diaAtual = dataAtual.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    // Atualiza o texto do resultado automaticamente ao mudar o idioma
    document.getElementById("resultadoIdade").textContent = `${textos[idiomaSelecionado].resultadoIdade} ${idade} ${textos[idiomaSelecionado].anos}`;
}

function alternarEsquemaCores() {
  // Obtém o elemento do controle de alternância
  var toggle = document.getElementById('color-scheme-toggle');

  // Obtém o elemento do corpo
  var body = document.body;

  // Alterna entre os esquemas de cores claro e escuro
  if (toggle.checked) {
      body.classList.add('dark');
      body.classList.remove('light');
  } else {
      body.classList.add('light');
      body.classList.remove('dark');
  }
}