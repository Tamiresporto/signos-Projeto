# signos-Projeto

🔮 Signos - Projeto de Consulta Astrológica
Descrição
Este projeto é uma aplicação web que permite ao usuário descobrir o seu signo do zodíaco com base na data de nascimento informada. O sistema exibe o signo correspondente e uma descrição sobre as características típicas do signo, separadas entre masculino e feminino. O projeto foi desenvolvido com ReactJS, mas neste README também explicamos como seria a lógica aplicada em PHP e JavaScript puros.

🛠️ Tecnologias Utilizadas
ReactJS: Interface interativa e responsiva.

JavaScript: Manipulação de lógica e estados.

CSS Inline: Estilização rápida e direta dos componentes.

HTML: Estruturação de conteúdo.

PHP (explicativo): Poderia ser utilizado no backend para validar e retornar o signo.

JavaScript puro (explicativo): Também pode ser utilizado para implementar a lógica de detecção do signo diretamente no cliente.

💡 Funcionalidades
Formulário para inserir a data de nascimento.

Detecção automática do signo com base na data.

Exibição do nome do signo e uma descrição personalizada.

Layout atrativo e responsivo com imagens temáticas.

📌 Como funciona a lógica
✔️ Em ReactJS (JavaScript)
O usuário insere a data de nascimento.

A data é convertida para o formato MM-DD.

O sistema compara essa data com os intervalos de cada signo.

O signo correspondente é exibido na tela com sua descrição.

✔️ Como seria a lógica em JavaScript puro (sem React):
html
Copiar
Editar
<input type="date" id="dataNascimento">
<button onclick="consultarSigno()">Consultar Signo</button>
<div id="resultado"></div>

<script>
  const signos = [
    { nome: "Áries", inicio: "03-21", fim: "04-19" },
    { nome: "Touro", inicio: "04-20", fim: "05-20" },
    // ... demais signos
  ];

  function consultarSigno() {
    const data = document.getElementById('dataNascimento').value;
    if (!data) return;
    const [ano, mes, dia] = data.split('-');
    const dataFormatada = `${mes}-${dia}`;
    
    const encontrado = signos.find(s => {
      if (s.inicio > s.fim) {
        return dataFormatada >= s.inicio || dataFormatada <= s.fim;
      }
      return dataFormatada >= s.inicio && dataFormatada <= s.fim;
    });

    document.getElementById('resultado').innerText = 
      encontrado ? `Seu signo é: ${encontrado.nome}` : 'Signo não encontrado';
  }
</script>
✔️ Como seria a lógica em PHP:
php
Copiar
Editar
<?php
$signos = [
    ["nome" => "Áries", "inicio" => "03-21", "fim" => "04-19"],
    ["nome" => "Touro", "inicio" => "04-20", "fim" => "05-20"],
    // ... demais signos
];

function consultarSigno($dataNascimento) {
    global $signos;
    $data = date('m-d', strtotime($dataNascimento));
    
    foreach ($signos as $s) {
        if ($s['inicio'] > $s['fim']) {
            if ($data >= $s['inicio'] || $data <= $s['fim']) {
                return $s['nome'];
            }
        } else {
            if ($data >= $s['inicio'] && $data <= $s['fim']) {
                return $s['nome'];
            }
        }
    }
    return "Signo não encontrado";
}

// Exemplo de uso:
$dataNascimento = "1995-04-05";
echo "Seu signo é: " . consultarSigno($dataNascimento);
?>

🚀 Como rodar o projeto React
Clone o repositório:
git clone https://github.com/seu-usuario/signos-projeto.git
cd signos-projeto
Instale as dependências:

npm install
npm run dev
Inicie o servidor de desenvolvimento:

npm run dev
Acesse no navegador: http://localhost:3000

🧑‍💻 Autor
Tamires Porto
Engenharia de Software - 5º período
Desenvolvido com dedicação, criatividade e um toque de magia astrológica! 🌟

📜 Licença
Este projeto está sob a licença MIT.
