/*
  Este arquivo é o JavaScript do site.

  HTML cria a estrutura.
  CSS deixa bonito.
  JavaScript adiciona interação.

  Neste projeto, o JavaScript faz uma coisa simples:
  quando o usuário clica no botão "Promoção do dia", aparece uma mensagem.
*/

const botaoPromocao = document.getElementById("btnPromocao");
/*
  const cria uma variável.
  document representa a página HTML aberta no navegador.
  getElementById("btnPromocao") procura um elemento com id="btnPromocao".

  No index.html existe:
  <button id="btnPromocao">Promoção do dia</button>

  Então esta variável guarda aquele botão.
*/

if (botaoPromocao) {
  /*
    Este if verifica se o botão realmente existe antes de usar.

    Isso evita erro porque:
    - na página inicial existe o botão;
    - na página do cardápio não existe esse botão.
  */

  botaoPromocao.addEventListener("click", function () {
    /*
      addEventListener escuta uma ação do usuário.
      "click" significa que o código roda quando o botão for clicado.
      function () { ... } é o bloco de código executado depois do clique.
    */

    alert("Promoção do dia: Combo Big Fat por apenas R$ 49,90!");
    /*
      alert abre uma caixinha simples de mensagem no navegador.
      Para mudar a promoção, basta alterar o texto dentro das aspas.
    */
  });
}
