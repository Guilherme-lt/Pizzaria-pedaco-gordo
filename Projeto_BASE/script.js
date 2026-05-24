/*
  COMO LER ESTE ARQUIVO JAVASCRIPT

  JavaScript é usado para deixar a página interativa.
  Neste projeto, ele faz uma coisa simples:
  quando o usuário clica no botão "Promoção do dia",
  aparece uma mensagem com alert().

  Conceitos importantes usados aqui:
  - const: cria uma variável que não será trocada depois.
  - document: representa a página HTML carregada no navegador.
  - getElementById: procura um elemento pelo id.
  - if: verifica uma condição antes de executar um bloco.
  - addEventListener: fica "escutando" uma ação do usuário.
  - function: bloco de código que roda quando for chamado.
*/

// Busca no HTML o elemento que possui o id "btnPromocao".
// Esse id está no botão "Promoção do dia" da página inicial.
const botaoPromocao = document.getElementById("btnPromocao");
/*
  document.getElementById("btnPromocao") significa:
  "Navegador, procure no HTML o elemento que tem id='btnPromocao'".

  Se encontrar, ele guarda esse elemento dentro da variável botaoPromocao.
  Se não encontrar, o valor fica null.
*/

// Verifica se o botão foi encontrado antes de tentar usar ele.
// Isso evita erro na página do cardápio, porque nela esse botão não existe.
if (botaoPromocao) {
  /*
    if (botaoPromocao) só entra no bloco se a variável tiver um elemento válido.

    Isso é importante porque o mesmo script.js é carregado em páginas diferentes.
    Na home existe o botão.
    No cardápio não existe.
  */

  // Adiciona um evento de clique ao botão.
  // Sempre que o usuário clicar, a função abaixo será executada.
  botaoPromocao.addEventListener("click", function () {
    /*
      addEventListener recebe duas informações:
      1. O tipo de evento: "click".
      2. O que deve acontecer quando o evento ocorrer: function () { ... }.

      Em português:
      "Quando o botão for clicado, execute esta função".
    */

    // Exibe uma caixa de alerta simples com a promoção do dia.
    alert("Promoção do dia: Combo Big Fat por apenas R$ 49,90!");
    /*
      alert() é um comando simples do navegador.
      Ele abre uma caixinha de mensagem na tela.

      Para trocar o texto, altere apenas o conteúdo entre aspas.
    */
  });
}
