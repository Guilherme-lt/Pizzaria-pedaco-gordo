# Guia de estudo do codigo do site Big Fat Slice

Este guia explica como o site funciona por dentro. A ideia e voce conseguir abrir o `index.html`, o `menu.html`, o CSS e o JavaScript e entender:

- o que cada arquivo faz;
- como HTML, CSS e JavaScript se conectam;
- o que significam as principais tags, classes, ids e funcoes;
- como o carrinho, o menu mobile e a busca funcionam.

## 1. Visao geral do projeto

O site esta dividido em tres partes principais:

```txt
index.html          -> pagina inicial do site
menu.html           -> pagina do cardapio
CSS/style.css       -> estilo principal: cores, tamanhos, layout, cards, botoes
CSS/responsivo.css  -> ajustes para telas menores, como celular e tablet
js/script.js        -> interacoes: menu mobile, carrinho, busca, notificacao
imagens/            -> logos, pizzas e imagens usadas no site
```

HTML, CSS e JavaScript trabalham juntos assim:

```txt
HTML cria a estrutura da pagina.
CSS deixa essa estrutura bonita e organizada.
JavaScript adiciona comportamento e interacao.
```

Exemplo real do seu site:

```html
<button class="botao-carrinho" onclick="abrirCarrinho()">
  Carrinho
  <span class="quantidade-carrinho"></span>
</button>
```

Esse botao envolve as tres tecnologias:

- HTML: cria o botao na tela.
- CSS: usa `.botao-carrinho` para deixar o botao bonito.
- JavaScript: usa `onclick="abrirCarrinho()"` para abrir o carrinho quando clicar.

## 2. O que e HTML

HTML e a linguagem que define o conteudo da pagina.

Ele responde perguntas como:

- existe um cabecalho?
- existe uma imagem?
- existe um botao?
- existe uma secao de pizzas?
- existe um rodape?

HTML nao e usado principalmente para beleza. Ele e usado para estrutura.

Exemplo:

```html
<h1>Big Fat Slice</h1>
```

Isso cria um titulo principal. O navegador sabe que `h1` e um titulo muito importante.

Outro exemplo:

```html
<p>Pizzas generosas, massa artesanal e muito queijo.</p>
```

Isso cria um paragrafo de texto.

## 3. Estrutura basica do `index.html`

O `index.html` comeca assim:

```html
<!doctype html>
<html lang="pt-BR">
```

`<!doctype html>` avisa ao navegador que o documento usa HTML moderno.

`<html lang="pt-BR">` abre o documento HTML e informa que o idioma da pagina e portugues do Brasil.

Depois vem o `head`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Big Fat Slice | Pizzaria</title>
  <link rel="stylesheet" href="CSS/style.css" />
  <link rel="stylesheet" href="CSS/responsivo.css" />
  <script src="js/script.js" defer></script>
</head>
```

O `head` nao aparece visualmente na pagina. Ele guarda configuracoes importantes.

Explicando linha por linha:

`<meta charset="UTF-8" />`

Define a codificacao de caracteres. Isso ajuda o navegador a entender letras, acentos e simbolos.

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

Faz a pagina se adaptar melhor ao tamanho da tela. Sem isso, celular costuma exibir o site todo pequeno.

`<title>Big Fat Slice | Pizzaria</title>`

Define o titulo que aparece na aba do navegador.

`<link rel="stylesheet" href="CSS/style.css" />`

Conecta o HTML ao arquivo principal de CSS.

`<link rel="stylesheet" href="CSS/responsivo.css" />`

Conecta o HTML ao CSS responsivo, usado para adaptar o site em telas menores.

`<script src="js/script.js" defer></script>`

Conecta o HTML ao JavaScript. O `defer` faz o navegador carregar o script depois de ler o HTML, evitando erros de elementos ainda nao encontrados.

## 4. O que e o `body`

O `body` e a parte visivel da pagina.

No seu site, o `body` tem esta organizacao:

```txt
body
  header  -> cabecalho fixo
  main    -> conteudo principal
  footer  -> rodape
  div     -> modal do carrinho
```

Isso e uma estrutura muito comum em sites.

## 5. Cabecalho do site

No `index.html` e no `menu.html`, o cabecalho comeca assim:

```html
<header class="cabecalho-fixo">
  <div class="conteudo-cabecalho container">
```

`<header>` representa o cabecalho da pagina.

`class="cabecalho-fixo"` e usada no CSS para deixar o cabecalho preso no topo da tela.

No CSS:

```css
.cabecalho-fixo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
```

Explicacao:

- `position: fixed;` fixa o elemento na tela.
- `top: 0;` cola no topo.
- `left: 0;` cola no lado esquerdo.
- `width: 100%;` ocupa toda a largura.
- `z-index: 10;` faz o cabecalho ficar acima de outros elementos.

Dentro dele existe:

```html
<div class="conteudo-cabecalho container">
```

Essa `div` organiza o conteudo interno do cabecalho: logo, menu e carrinho.

A classe `container` e reutilizada no site inteiro:

```css
.container {
  width: min(100% - 32px, var(--largura-container));
  margin: 0 auto;
}
```

Ela limita a largura do conteudo e centraliza.

`margin: 0 auto;` e uma tecnica muito comum para centralizar blocos horizontalmente.

## 6. Logo

```html
<a class="link-logo" href="index.html" aria-label="Ir para a pagina inicial">
  <img class="imagem-logo" src="imagens/logos/big fat slice readonly.png" alt="Big Fat Slice" />
</a>
```

Aqui temos um link com imagem dentro.

`<a>` cria um link.

`href="index.html"` diz para onde o link leva.

`<img>` mostra uma imagem.

`src="..."` diz onde esta o arquivo da imagem.

`alt="Big Fat Slice"` e um texto alternativo. Ele aparece se a imagem nao carregar e tambem ajuda acessibilidade.

A classe `.imagem-logo` no CSS controla o tamanho:

```css
.imagem-logo {
  width: clamp(150px, 20vw, 210px);
}
```

`clamp()` define um tamanho flexivel com minimo, ideal e maximo.

Aqui significa:

- minimo: `150px`;
- tamanho preferido: `20vw`;
- maximo: `210px`.

`vw` significa viewport width, ou seja, porcentagem da largura da tela.

## 7. Menu de navegacao

```html
<nav class="menu-navegacao" aria-label="Menu principal">
  <a class="link-atual" href="index.html">Home</a>
  <a href="menu.html">Cardapio</a>
  <a href="#secao-localizacao">Localizacao</a>
</nav>
```

`<nav>` representa uma area de navegacao.

Dentro dele existem links.

`class="link-atual"` marca a pagina atual. No `index.html`, o link atual e Home. No `menu.html`, o link atual e Cardapio.

No CSS:

```css
.menu-navegacao a:hover,
.menu-navegacao a.link-atual {
  background-color: var(--amarelo);
  color: var(--escuro);
}
```

Essa regra aplica o mesmo estilo quando:

- o mouse passa em cima do link (`:hover`);
- o link tem a classe `.link-atual`.

O link de localizacao no `index.html` usa:

```html
href="#secao-localizacao"
```

Isso nao abre outro arquivo. Ele leva o usuario ate a parte da mesma pagina que tem:

```html
<section class="secao-localizacao container" id="secao-localizacao">
```

Essa conexao funciona pelo `id`.

## 8. Botao do menu mobile

```html
<button class="botao-menu-mobile" aria-label="Abrir menu" aria-expanded="false">Menu</button>
```

Esse botao aparece em telas menores.

No CSS principal ele comeca escondido:

```css
.botao-menu-mobile {
  display: none;
}
```

No CSS responsivo ele aparece:

```css
@media screen and (max-width: 820px) {
  .botao-menu-mobile {
    display: inline-flex;
  }
}
```

Isso significa: quando a tela tiver ate `820px`, mostre o botao.

No JavaScript:

```js
const navToggle = document.querySelector('.botao-menu-mobile');
const navMenu = document.querySelector('.menu-navegacao');
```

O JavaScript procura no HTML:

- o botao do menu;
- o menu de navegacao.

Depois:

```js
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('menu-aberto');
});
```

Quando clicar no botao, o JavaScript adiciona ou remove a classe `menu-aberto` no menu.

No CSS responsivo:

```css
.menu-navegacao {
  display: none;
}

.menu-navegacao.menu-aberto {
  display: flex;
}
```

Traduzindo:

- sem `menu-aberto`, o menu fica escondido;
- com `menu-aberto`, o menu aparece.

Essa e uma das conexoes mais importantes do site:

```txt
HTML tem o botao
JavaScript escuta o clique
JavaScript coloca a classe menu-aberto
CSS mostra o menu quando essa classe existe
```

## 9. Botao do carrinho

```html
<button class="botao-carrinho" onclick="abrirCarrinho()" aria-label="Abrir carrinho de compras">
  Carrinho
  <span class="quantidade-carrinho"></span>
</button>
```

`onclick="abrirCarrinho()"` chama a funcao JavaScript `abrirCarrinho`.

`span.quantidade-carrinho` e o numero pequeno que mostra quantos itens existem no carrinho.

No JavaScript:

```js
function abrirCarrinho() {
  const modal = document.querySelector('.fundo-modal-carrinho');
  if (modal) {
    modal.classList.add('carrinho-aberto');
    modal.setAttribute('aria-hidden', 'false');
    atualizarModalCarrinho();
  }
}
```

Essa funcao faz tres coisas:

1. Procura o fundo do modal do carrinho.
2. Adiciona a classe `carrinho-aberto`.
3. Atualiza a lista do carrinho antes de mostrar.

No CSS:

```css
.fundo-modal-carrinho {
  display: none;
}

.fundo-modal-carrinho.carrinho-aberto {
  display: flex;
}
```

Ou seja:

- o carrinho comeca escondido;
- quando recebe `carrinho-aberto`, aparece.

## 10. Secao inicial do `index.html`

```html
<section class="secao-inicial">
```

`section` representa uma parte grande da pagina.

`secao-inicial` e a primeira grande area visual do site, com titulo, chamada e imagens.

Dentro dela:

```html
<div class="container conteudo-secao-inicial">
```

Essa `div` tem duas classes:

- `container`: centraliza e limita largura;
- `conteudo-secao-inicial`: cria o layout interno.

No CSS:

```css
.conteudo-secao-inicial {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.86fr);
  align-items: center;
  gap: 48px;
}
```

`display: grid;` transforma o elemento em grade.

`grid-template-columns` define as colunas.

Nesse caso, a secao inicial tem duas colunas:

- uma para o texto;
- outra para as imagens.

`gap: 48px;` coloca espaco entre as colunas.

`align-items: center;` alinha os itens verticalmente no centro.

## 11. Texto da secao inicial

```html
<div class="texto-secao-inicial">
  <span class="etiqueta-destaque">Fatias gigantes estilo americano</span>
  <h1>Big Fat Slice</h1>
  <p>...</p>
</div>
```

`span` e usado para um pequeno texto em linha. Aqui ele vira uma etiqueta visual.

`h1` e o titulo principal da pagina. Deve existir normalmente apenas um `h1` por pagina.

`p` e um paragrafo.

No CSS:

```css
.secao-inicial h1 {
  font-family: "Archivo Black", Arial, sans-serif;
  font-size: clamp(3.2rem, 7vw, 5.8rem);
  line-height: 0.92;
}
```

Essa regra significa: todo `h1` dentro de `.secao-inicial` recebe esse estilo.

`font-family` escolhe a fonte.

`font-size` define o tamanho da letra.

`line-height` define a altura da linha.

## 12. Botoes da secao inicial

```html
<div class="grupo-botoes">
  <a class="botao botao-principal" href="menu.html">Ver cardapio</a>
  <button class="botao botao-secundario" id="botaoPromocao" type="button">Promocao do dia</button>
</div>
```

Aqui existem dois elementos parecidos visualmente, mas diferentes em funcao.

O primeiro e um link:

```html
<a class="botao botao-principal" href="menu.html">Ver cardapio</a>
```

Ele leva para outra pagina.

O segundo e um botao:

```html
<button class="botao botao-secundario" id="botaoPromocao">Promocao do dia</button>
```

Ele nao troca de pagina. Ele executa JavaScript.

A classe `botao` define o estilo comum de todos os botoes.

As classes `botao-principal` e `botao-secundario` mudam a cor de cada tipo.

No JavaScript:

```js
const botaoPromocao = document.getElementById('botaoPromocao');
```

Aqui o JavaScript procura o elemento pelo `id`.

Depois:

```js
botaoPromocao.addEventListener('click', () => {
  mostrarNotificacao('Peca 2 fatias e ganhe 15% de desconto no refrigerante!');
});
```

Quando o usuario clica no botao, aparece uma notificacao.

## 13. Imagens da secao inicial

```html
<div class="imagens-secao-inicial" aria-hidden="true">
  <img class="imagem-promocao-principal" src="imagens/logos/propaganda div3.png" alt="Promocao Big Fat Slice" />
  <img class="selo-promocional" src="imagens/logos/propaganda div1.png" alt="Selo promocional" />
</div>
```

Essa area guarda imagens decorativas/promocionais.

`aria-hidden="true"` informa para leitores de tela ignorarem esse bloco. Isso pode fazer sentido quando a imagem e mais decorativa e nao essencial para entender o conteudo.

As classes controlam tamanho, sombra e posicionamento.

## 14. Secao chamada

```html
<section class="secao-chamada container">
  <h2>Uma fatia nunca e suficiente!</h2>
  <p>...</p>
</section>
```

Essa secao e uma chamada curta entre a secao inicial e os diferenciais.

`h2` e um titulo secundario. Ele e menos importante que `h1`, mas ainda organiza o conteudo.

No CSS:

```css
.secao-chamada {
  padding: 74px 0 36px;
  text-align: center;
}
```

`padding` cria espaco interno.

`text-align: center;` centraliza o texto.

## 15. Lista de diferenciais

```html
<section class="lista-diferenciais container">
  <article class="card-diferencial">...</article>
  <article class="card-diferencial">...</article>
  <article class="card-diferencial">...</article>
</section>
```

`article` e usado para um bloco de conteudo independente. Cada diferencial e como um pequeno card com uma ideia.

No CSS:

```css
.lista-diferenciais {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
```

Isso cria uma grade com tres colunas.

`repeat(3, ...)` significa repetir tres vezes.

`1fr` significa uma fracao do espaco disponivel.

Em telas menores, no `responsivo.css`, isso muda para duas colunas e depois uma coluna.

## 16. Secao promocao

```html
<section class="secao-promocao container">
  <div class="texto-promocao">...</div>
  <div class="preco-promocao">...</div>
</section>
```

Essa secao tem duas partes:

- texto da oferta;
- caixa com preco.

No CSS:

```css
.secao-promocao {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
}
```

Isso cria:

- primeira coluna flexivel para o texto;
- segunda coluna fixa de `250px` para o preco.

No responsivo:

```css
.secao-promocao {
  grid-template-columns: 1fr;
}
```

Em telas menores, vira uma coluna so.

## 17. Secao mais pedidas

```html
<section class="secao-mais-pedidas container">
  <div class="titulo-secao">...</div>
  <div class="grade-pizzas">...</div>
</section>
```

`titulo-secao` e um padrao usado em varias partes do site.

Ele geralmente tem:

```html
<span>Favoritas da casa</span>
<h2>Mais pedidas</h2>
```

O `span` funciona como uma legenda pequena.

O `h2` e o titulo da secao.

`grade-pizzas` organiza os cards das pizzas.

Cada pizza e:

```html
<article class="card-pizza">
  <img src="..." alt="..." />
  <h3>Calabresa Big</h3>
  <p>...</p>
  <strong>R$ 39,90</strong>
</article>
```

`h3` e um titulo menor dentro de uma secao.

`strong` destaca uma informacao importante. Aqui e o preco.

## 18. Localizacao

```html
<section class="secao-localizacao container" id="secao-localizacao">
```

Essa secao tem classe e id.

A classe `secao-localizacao` serve para estilizar no CSS.

O id `secao-localizacao` serve para navegacao pelo link:

```html
<a href="#secao-localizacao">Localizacao</a>
```

Dentro dela existe um `iframe`:

```html
<iframe src="https://www.google.com/maps/embed?..."></iframe>
```

`iframe` permite mostrar uma pagina dentro de outra. Aqui ele mostra o mapa do Google Maps dentro do seu site.

## 19. Rodape

```html
<footer class="rodape-site">
  <div class="container conteudo-rodape">
```

`footer` representa o rodape da pagina.

No CSS:

```css
.rodape-site {
  background: var(--escuro);
  color: #fff;
  padding: 38px 0;
}
```

Ele ganha fundo escuro, texto branco e espaco interno.

## 20. Modal do carrinho

No final do HTML existe:

```html
<div class="fundo-modal-carrinho" aria-hidden="true">
  <div class="caixa-carrinho">
```

Esse e o carrinho que aparece por cima da tela.

`fundo-modal-carrinho` e o fundo escuro.

`caixa-carrinho` e a caixa branca interna.

Ele comeca escondido:

```css
.fundo-modal-carrinho {
  display: none;
}
```

Quando o JavaScript adiciona `carrinho-aberto`, ele aparece:

```css
.fundo-modal-carrinho.carrinho-aberto {
  display: flex;
}
```

Dentro do modal:

```html
<div class="lista-carrinho"></div>
```

Essa lista comeca vazia no HTML. O JavaScript preenche ela depois.

## 21. O que e CSS

CSS e a linguagem que define a aparencia da pagina.

Ele responde perguntas como:

- qual cor o fundo tem?
- qual tamanho a fonte tem?
- um elemento fica em linha ou em coluna?
- o card tem sombra?
- no celular, o layout muda?

CSS trabalha com seletores.

Exemplo:

```css
.card-pizza {
  border-radius: 8px;
  padding: 18px;
}
```

`.card-pizza` e um seletor de classe. Ele pega todos os elementos HTML que possuem `class="card-pizza"`.

## 22. Variaveis CSS

No comeco do `style.css`, existe:

```css
:root {
  --vermelho: #9f261b;
  --amarelo: #f2b83b;
  --escuro: #201a17;
}
```

`:root` representa a raiz do documento.

Variaveis CSS comecam com `--`.

Depois voce usa assim:

```css
background-color: var(--amarelo);
```

Vantagem: se quiser mudar o amarelo do site inteiro, muda apenas uma linha.

## 23. Reset basico

```css
* {
  box-sizing: border-box;
}
```

`*` seleciona todos os elementos.

`box-sizing: border-box;` faz largura e altura incluirem padding e borda. Isso facilita muito o controle de layout.

## 24. Estilos globais

```css
body {
  margin: 0;
  font-family: "Montserrat", Arial, sans-serif;
  color: var(--escuro);
  background: var(--creme);
}
```

`margin: 0;` remove a margem padrao do navegador.

`font-family` define a fonte do site.

`color` define a cor padrao do texto.

`background` define a cor de fundo.

## 25. Imagens

```css
img {
  display: block;
  max-width: 100%;
}
```

`max-width: 100%;` impede a imagem de passar da largura do elemento pai.

Isso ajuda na responsividade.

## 26. Links

```css
a {
  color: inherit;
  text-decoration: none;
}
```

`color: inherit;` faz o link herdar a cor do elemento pai.

`text-decoration: none;` remove o sublinhado padrao dos links.

## 27. Classe `container`

```css
.container {
  width: min(100% - 32px, var(--largura-container));
  margin: 0 auto;
}
```

Essa classe e muito importante.

Ela faz o conteudo:

- nao colar nas bordas da tela;
- ficar centralizado;
- nao ficar largo demais em telas grandes.

`min(100% - 32px, var(--largura-container))` escolhe o menor valor entre:

- largura total da tela menos 32px;
- largura maxima definida em `--largura-container`.

## 28. Flexbox

O CSS usa bastante `display: flex`.

Exemplo:

```css
.conteudo-cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Flexbox e bom para organizar elementos em linha ou coluna.

`align-items: center;` alinha verticalmente.

`justify-content: space-between;` coloca espaco entre os itens.

No cabecalho, isso separa:

- logo na esquerda;
- menu no centro;
- carrinho na direita.

## 29. Grid

O CSS tambem usa `display: grid`.

Exemplo:

```css
.grade-pizzas {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
```

Grid e excelente para layouts em colunas.

Aqui ele cria uma grade de pizzas com tres colunas.

No responsivo, muda:

```css
.grade-pizzas {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

E depois:

```css
.grade-pizzas {
  grid-template-columns: 1fr;
}
```

Assim o site se adapta a tablet e celular.

## 30. O que e responsividade

Responsividade e fazer o site funcionar bem em tamanhos diferentes de tela.

O arquivo `CSS/responsivo.css` usa `@media`.

Exemplo:

```css
@media screen and (max-width: 820px) {
  .menu-navegacao {
    display: none;
  }
}
```

Isso significa: aplique essas regras somente quando a tela tiver no maximo `820px`.

No seu site existem tres pontos principais:

```txt
max-width: 1040px -> ajustes para telas medias
max-width: 820px  -> muda cabecalho e ativa menu mobile
max-width: 620px  -> ajustes para celular
```

## 31. JavaScript do site

JavaScript adiciona comportamento.

No seu site ele faz:

- abrir e fechar menu mobile;
- adicionar pizza ao carrinho;
- salvar carrinho no navegador;
- atualizar quantidade do carrinho;
- abrir e fechar modal;
- calcular total;
- enviar pedido para WhatsApp;
- buscar pizzas pelo nome;
- mostrar notificacoes.

## 32. Selecionando elementos no JavaScript

No inicio:

```js
const navToggle = document.querySelector('.botao-menu-mobile');
const navMenu = document.querySelector('.menu-navegacao');
const menuLinks = document.querySelectorAll('.menu-navegacao a');
```

`document` representa a pagina HTML.

`querySelector` pega o primeiro elemento que combina com o seletor.

`querySelectorAll` pega todos os elementos que combinam com o seletor.

`.botao-menu-mobile` procura uma classe.

`.menu-navegacao a` procura todos os links dentro do menu.

## 33. `const` e `let`

```js
const navToggle = ...
```

`const` cria uma variavel que nao sera reatribuida.

```js
let carrinho = ...
```

`let` cria uma variavel que pode mudar.

O carrinho usa `let` porque o conteudo muda quando o usuario adiciona ou remove pizzas.

## 34. Menu mobile no JavaScript

```js
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-aberto');
  });
}
```

`if (navToggle && navMenu)` verifica se os elementos existem.

Isso evita erro caso o script rode em uma pagina que nao tenha esses elementos.

`addEventListener('click', ...)` escuta o clique.

`classList.toggle('menu-aberto')` adiciona a classe se ela nao existir, ou remove se ja existir.

Depois:

```js
const aberto = navMenu.classList.contains('menu-aberto');
```

`contains` verifica se o elemento tem determinada classe.

O resultado fica em `aberto`, que sera `true` ou `false`.

## 35. Carrinho salvo no navegador

```js
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
```

Essa linha parece complicada, mas da para dividir:

`localStorage` e um armazenamento do navegador.

`localStorage.getItem('carrinho')` tenta pegar o carrinho salvo.

`JSON.parse(...)` transforma texto salvo em array/objeto JavaScript.

`|| []` significa: se nao tiver nada salvo, use um array vazio.

Entao, ao abrir o site:

- se ja existe carrinho salvo, ele carrega;
- se nao existe, comeca vazio.

## 36. Adicionar ao carrinho

```js
function adicionarAoCarrinho(nome, preco) {
```

Essa funcao recebe dois valores:

- `nome`: nome da pizza;
- `preco`: preco como texto, por exemplo `"R$ 39,90"`.

Ela e chamada no `menu.html` assim:

```html
<button onclick="adicionarAoCarrinho('Calabresa Big', 'R$ 39,90')">Adicionar</button>
```

Dentro da funcao:

```js
const item = carrinho.find(p => p.nome === nome);
```

`find` procura no array do carrinho uma pizza com o mesmo nome.

Se encontrar, aumenta a quantidade:

```js
item.quantidade += 1;
```

Se nao encontrar, adiciona um novo objeto:

```js
carrinho.push({ nome, preco: valor, quantidade: 1 });
```

Esse objeto representa um item do carrinho:

```js
{
  nome: "Calabresa Big",
  preco: 39.9,
  quantidade: 1
}
```

## 37. Convertendo preco

```js
const valor = parseFloat(preco.replace('R$ ', '').replace(',', '.'));
```

O preco chega como texto:

```txt
R$ 39,90
```

JavaScript nao consegue calcular diretamente com esse texto.

Entao:

`replace('R$ ', '')` remove `R$ `.

Resultado:

```txt
39,90
```

`replace(',', '.')` troca virgula por ponto.

Resultado:

```txt
39.90
```

`parseFloat(...)` transforma em numero.

Resultado:

```txt
39.9
```

## 38. Salvando carrinho

```js
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
```

`JSON.stringify(carrinho)` transforma o array em texto.

`localStorage.setItem` salva esse texto no navegador.

Assim o carrinho nao some se atualizar a pagina.

## 39. Atualizando quantidade no botao do carrinho

```js
function atualizarBadgeCarrinho() {
  const badge = document.querySelector('.quantidade-carrinho');
  const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}
```

`badge` e o `span` que mostra o numero.

`reduce` soma as quantidades de todos os itens.

Exemplo:

```txt
Calabresa x2
KitKat x1
Total de itens = 3
```

Depois:

```js
badge.textContent = total;
badge.style.display = total > 0 ? 'flex' : 'none';
```

`textContent` muda o texto.

O operador `? :` e chamado operador ternario.

Ele funciona assim:

```js
condicao ? valorSeVerdadeiro : valorSeFalso
```

No caso:

- se total for maior que zero, mostra com `flex`;
- se for zero, esconde com `none`.

## 40. Notificacao

```js
function mostrarNotificacao(mensagem) {
  const notif = document.createElement('div');
  notif.className = 'notificacao';
  notif.textContent = mensagem;
  document.body.appendChild(notif);
}
```

Essa funcao cria uma `div` nova pelo JavaScript.

`document.createElement('div')` cria um elemento HTML.

`className = 'notificacao'` coloca a classe CSS.

`textContent = mensagem` coloca o texto.

`appendChild` adiciona a notificacao dentro do `body`.

Depois ela recebe a classe `notificacao-visivel`:

```js
notif.classList.add('notificacao-visivel');
```

No CSS:

```css
.notificacao {
  opacity: 0;
}

.notificacao.notificacao-visivel {
  opacity: 1;
}
```

Ou seja, primeiro ela existe invisivel, depois fica visivel.

Depois de alguns segundos, o JavaScript remove:

```js
notif.remove()
```

## 41. Atualizando o modal do carrinho

```js
function atualizarModalCarrinho() {
  const lista = document.querySelector('.lista-carrinho');
  const total = document.querySelector('.total-carrinho');
}
```

Essa funcao pega:

- a area onde os itens aparecem;
- a area onde o total aparece.

Depois:

```js
lista.innerHTML = '';
```

Limpa a lista antes de montar de novo.

Se o carrinho estiver vazio:

```js
lista.innerHTML = '<p class="mensagem-carrinho-vazio">Seu carrinho esta vazio</p>';
```

Se tiver itens, percorre cada item:

```js
carrinho.forEach((item, index) => {
```

`forEach` executa uma acao para cada item do array.

`item` e o produto atual.

`index` e a posicao dele no array.

Depois calcula subtotal:

```js
const subtotal = item.preco * item.quantidade;
```

E cria uma `div`:

```js
const div = document.createElement('div');
div.className = 'item-do-carrinho';
```

Depois coloca HTML dentro dela:

```js
div.innerHTML = `
  ...
`;
```

Esse HTML inclui botoes de:

- diminuir quantidade;
- aumentar quantidade;
- remover item.

## 42. Alterar quantidade

```js
function alterarQuantidade(index, valor) {
  if (!carrinho[index]) return;

  carrinho[index].quantidade += valor;
}
```

`index` indica qual item sera alterado.

`valor` pode ser:

- `1` para aumentar;
- `-1` para diminuir.

Se a quantidade chegar a zero:

```js
if (carrinho[index].quantidade <= 0) {
  removerDoCarrinho(index);
}
```

O item e removido.

## 43. Remover item

```js
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  atualizarModalCarrinho();
  atualizarBadgeCarrinho();
}
```

`splice(index, 1)` remove um item do array naquela posicao.

Depois salva e atualiza a tela.

## 44. Finalizar compra pelo WhatsApp

```js
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho esta vazio!');
    return;
  }
}
```

Primeiro verifica se o carrinho esta vazio.

`return` para a funcao ali mesmo.

Depois calcula o total:

```js
const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
```

Monta uma mensagem:

```js
const mensagem = `Ola! Gostaria de fazer um pedido:%0A%0A...`;
```

`%0A` representa quebra de linha em URL.

Depois abre o WhatsApp:

```js
window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, '_blank');
```

`window.open` abre uma nova aba.

## 45. Busca de pizza

No `menu.html`:

```html
<input class="campo-busca" type="text" placeholder="Buscar pizza..." oninput="buscarPizza()" />
```

`oninput` chama a funcao toda vez que o usuario digita.

No JavaScript:

```js
function buscarPizza() {
  const inputBusca = document.querySelector('.campo-busca');
  const termo = inputBusca ? inputBusca.value.toLowerCase() : '';
  const cards = document.querySelectorAll('.card-pizza');
}
```

`inputBusca.value` pega o que o usuario digitou.

`toLowerCase()` transforma em minusculo para facilitar a comparacao.

Depois:

```js
cards.forEach(card => {
  const titulo = card.querySelector('h3').textContent.toLowerCase();
  card.style.display = titulo.includes(termo) ? 'flex' : 'none';
});
```

Para cada card:

- pega o titulo da pizza;
- verifica se o titulo contem o termo digitado;
- se contem, mostra;
- se nao contem, esconde.

## 46. Como `menu.html` e diferente do `index.html`

O `index.html` e a pagina inicial.

Ele tem:

- secao inicial;
- chamada;
- diferenciais;
- promocao;
- mais pedidas;
- localizacao.

O `menu.html` e focado no cardapio.

Ele tem:

- introducao do cardapio;
- campo de busca;
- pizzas salgadas;
- pizzas doces;
- botoes de adicionar ao carrinho.

As duas paginas compartilham:

- cabecalho;
- rodape;
- modal do carrinho;
- CSS;
- JavaScript.

Isso e bom porque o site fica consistente.

## 47. Como as classes conectam HTML e CSS

Exemplo:

No HTML:

```html
<article class="card-pizza">
```

No CSS:

```css
.card-pizza {
  border-radius: 8px;
  padding: 18px;
}
```

Essa conexao funciona porque o nome da classe e igual.

Se voce trocar no HTML para:

```html
<article class="produto-pizza">
```

Mas nao trocar no CSS, o estilo para de funcionar.

Por isso, quando renomear classe, precisa atualizar todos os lugares:

- HTML;
- CSS;
- JavaScript, se ele usar essa classe.

## 48. Como ids conectam HTML e JavaScript

No HTML:

```html
<button id="botaoPromocao">Promocao do dia</button>
```

No JavaScript:

```js
const botaoPromocao = document.getElementById('botaoPromocao');
```

O JavaScript acha o botao pelo id.

Id deve ser unico na pagina. Classe pode repetir, id nao deveria.

## 49. Classes de estilo e classes de estado

Existem classes que descrevem o que o elemento e:

```txt
card-pizza
botao-carrinho
secao-inicial
conteudo-rodape
```

E existem classes que descrevem o estado atual:

```txt
menu-aberto
carrinho-aberto
notificacao-visivel
link-atual
```

Classes de estado normalmente sao adicionadas ou removidas pelo JavaScript.

Exemplo:

```js
navMenu.classList.toggle('menu-aberto');
```

## 50. Ordem recomendada para estudar

Uma boa ordem seria:

1. Abra o `index.html`.
2. Entenda a estrutura: `header`, `main`, `footer`.
3. Veja como cada `section` representa uma parte visual da pagina.
4. Abra o `CSS/style.css`.
5. Procure a classe de uma secao, por exemplo `.secao-inicial`.
6. Compare o HTML com o CSS.
7. Abra o `CSS/responsivo.css`.
8. Veja como os layouts mudam em telas menores.
9. Abra o `menu.html`.
10. Veja os botoes que chamam `adicionarAoCarrinho`.
11. Abra o `js/script.js`.
12. Estude primeiro o menu mobile.
13. Depois estude o carrinho.
14. Por ultimo estude a busca e notificacao.

## 51. Como ler uma parte do codigo sozinho

Quando encontrar uma classe, faca tres perguntas:

1. Onde ela aparece no HTML?
2. Onde ela aparece no CSS?
3. Ela aparece no JavaScript?

Exemplo com `card-pizza`:

HTML:

```html
<article class="card-pizza">
```

CSS:

```css
.card-pizza {
  ...
}
```

JavaScript:

```js
const cards = document.querySelectorAll('.card-pizza');
```

Isso mostra que `card-pizza` e usado:

- para estruturar o produto no HTML;
- para estilizar no CSS;
- para filtrar na busca com JavaScript.

## 52. Resumo das conexoes mais importantes

```txt
botao-menu-mobile
  HTML: botao do menu
  JS: escuta clique
  CSS: aparece no mobile

menu-aberto
  JS: adiciona/remove
  CSS: mostra/esconde o menu

botao-carrinho
  HTML: botao visivel
  JS: chama abrirCarrinho()
  CSS: estilo do botao

fundo-modal-carrinho
  HTML: modal do carrinho
  JS: recebe carrinho-aberto
  CSS: escondido ou visivel

quantidade-carrinho
  HTML: span vazio
  JS: coloca numero de itens
  CSS: estilo da bolinha

card-pizza
  HTML: card de pizza
  CSS: visual do card
  JS: usado na busca

campo-busca
  HTML: input de busca
  JS: le o texto digitado
  CSS: estilo do campo
```

## 53. Dica final

O jeito mais eficiente de estudar esse projeto e escolher uma funcionalidade pequena e seguir o caminho completo.

Exemplo: carrinho.

Siga nesta ordem:

```txt
1. Botao "Adicionar" no menu.html
2. Funcao adicionarAoCarrinho no script.js
3. Array carrinho
4. localStorage
5. atualizarBadgeCarrinho
6. abrirCarrinho
7. atualizarModalCarrinho
8. CSS do modal
```

Assim voce entende o fluxo real do site, nao apenas comandos soltos.

