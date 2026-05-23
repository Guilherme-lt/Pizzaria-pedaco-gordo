# Guia de estudo do projeto Big Fat Slice

Este arquivo é um bloco de notas para você entender o projeto como se fosse uma aula. A ideia é explicar o que cada parte faz, como mexer no código e quais comandos você pode usar no dia a dia.

## 1. Estrutura do projeto

Arquivos principais:

- `index.html`: página inicial do site.
- `menu.html`: página do cardápio.
- `style.css`: arquivo que controla cores, tamanhos, espaçamentos, layout e responsividade.
- `script.js`: arquivo que controla pequenas interações com JavaScript.
- `imagens/`: pasta onde ficam logos e imagens das pizzas.

Regra principal:

- HTML monta a estrutura.
- CSS cuida da aparência.
- JavaScript cuida da interação.

## 2. Como abrir o site

Como o projeto é simples e estático, você pode abrir direto no navegador:

1. Entre na pasta do projeto.
2. Clique duas vezes em `index.html`.
3. O navegador vai abrir a página inicial.

Também dá para abrir pelo VS Code usando a extensão Live Server, se você tiver instalada:

1. Clique com o botão direito em `index.html`.
2. Escolha `Open with Live Server`.
3. O navegador abre o site e atualiza quando você salva mudanças.

## 3. Como o HTML funciona

HTML usa tags. Uma tag é uma marcação que diz ao navegador que tipo de conteúdo existe ali.

Exemplo:

```html
<h1>Big Fat Slice</h1>
```

Aqui temos um título principal.

Outro exemplo:

```html
<p>Texto de apresentação da pizzaria.</p>
```

Aqui temos um parágrafo.

### Tags importantes usadas no projeto

`<header>`:
Área do cabeçalho. Normalmente tem logo e menu.

`<nav>`:
Área de navegação. Usada para links de menu.

`<main>`:
Conteúdo principal da página.

`<section>`:
Separa partes grandes do conteúdo, como hero, promoção e cardápio.

`<article>`:
Bloco independente, como um card de pizza ou um diferencial.

`<footer>`:
Rodapé da página.

`<a>`:
Cria link. O destino fica dentro do atributo `href`.

```html
<a href="menu.html">Cardápio</a>
```

`<img>`:
Mostra imagem. O caminho fica em `src` e o texto alternativo fica em `alt`.

```html
<img src="imagens/menu/pizza calabresa.png" alt="Pizza Calabresa" />
```

`<button>`:
Cria um botão para executar uma ação na mesma página.

```html
<button id="btnPromocao" type="button">Promoção do dia</button>
```

## 4. Diferença entre class e id

### class

Uma classe pode ser repetida em vários elementos.

Exemplo:

```html
<article class="pizza-card">
```

No CSS você acessa com ponto:

```css
.pizza-card {
  background-color: white;
}
```

Use `class` quando vários elementos podem ter o mesmo estilo.

### id

Um id deve ser único na página.

Exemplo:

```html
<button id="btnPromocao">Promoção do dia</button>
```

No JavaScript você acessa com:

```js
document.getElementById("btnPromocao");
```

Use `id` quando você precisa identificar um elemento específico.

## 5. Como o CSS funciona

CSS segue este formato:

```css
seletor {
  propriedade: valor;
}
```

Exemplo:

```css
.btn-principal {
  background-color: #8f1d14;
  color: white;
}
```

Explicando:

- `.btn-principal` seleciona elementos com `class="btn-principal"`.
- `background-color` muda a cor de fundo.
- `color` muda a cor do texto.

## 6. Variáveis CSS

No começo do `style.css` existe o `:root`.

Exemplo:

```css
:root {
  --vermelho: #8f1d14;
}
```

Isso cria uma variável. Para usar:

```css
color: var(--vermelho);
```

Vantagem:
se quiser mudar a cor principal do site inteiro, altere apenas o valor de `--vermelho`.

## 7. Flexbox

Flexbox é usado para alinhar itens em linha ou coluna.

Exemplo do cabeçalho:

```css
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Explicando:

- `display: flex`: ativa flexbox.
- `align-items: center`: centraliza na vertical.
- `justify-content: space-between`: joga um item para cada lado.

Use flexbox quando quiser alinhar elementos em uma direção, como logo e menu.

## 8. Grid

Grid é usado para criar grades com colunas e linhas.

Exemplo:

```css
.produtos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
```

Explicando:

- `display: grid`: ativa grid.
- `repeat(4, 1fr)`: cria 4 colunas iguais.
- `gap: 24px`: cria espaço entre os cards.

Use grid quando quiser organizar cards, produtos ou blocos em colunas.

## 9. Responsividade com @media

Responsividade é fazer o site se adaptar a telas diferentes.

Exemplo:

```css
@media (max-width: 620px) {
  .produtos {
    grid-template-columns: 1fr;
  }
}
```

Isso significa:
quando a tela tiver até 620px de largura, a lista de produtos vira uma coluna.

No projeto:

- Até `900px`: algumas grades viram uma coluna ou duas colunas.
- Até `620px`: o layout fica mais adequado para celular.

## 10. Como adicionar uma nova pizza no cardápio

No arquivo `menu.html`, encontre:

```html
<section class="produtos container">
```

Copie um card inteiro:

```html
<article class="cardpizza">
  <img src="imagens/menu/pizza calabresa.png" alt="Pizza Calabresa" />
  <h2>Pizza Calabresa</h2>
  <p>Calabresa fatiada, cebola e mussarela.</p>
</article>
```

Depois altere:

- `src`: caminho da imagem.
- `alt`: descrição da imagem.
- `<h2>`: nome da pizza.
- `<p>`: ingredientes.

## 11. Como trocar uma imagem

Exemplo:

```html
<img src="imagens/logos/logo da pizzaria.png" alt="Logo da Pizzaria" />
```

Para trocar:

1. Coloque a nova imagem dentro da pasta correta.
2. Copie o caminho da imagem.
3. Troque o valor do `src`.
4. Atualize o `alt` para explicar a imagem.

Importante:
se o nome do arquivo tem espaços, escreva exatamente igual.

## 12. Como trocar cores do site

Abra `style.css` e vá até `:root`.

Exemplo:

```css
--vermelho: #8f1d14;
--amarelo: #f7c948;
```

Você pode trocar por outras cores em hexadecimal.

Exemplo:

```css
--vermelho: #b22222;
```

Depois salve e atualize o navegador.

## 13. Como o JavaScript do botão funciona

No `index.html`, o botão tem:

```html
<button id="btnPromocao" type="button">Promoção do dia</button>
```

No `script.js`, o JavaScript procura esse botão:

```js
const botaoPromocao = document.getElementById("btnPromocao");
```

Depois verifica se ele existe:

```js
if (botaoPromocao) {
  // código aqui dentro
}
```

Depois adiciona o clique:

```js
botaoPromocao.addEventListener("click", function () {
  alert("Promoção do dia: Combo Big Fat por apenas R$ 49,90!");
});
```

Traduzindo:
quando o botão for clicado, mostre o alerta.

## 14. Como trocar a mensagem da promoção

Abra `script.js` e altere o texto dentro de `alert()`.

Antes:

```js
alert("Promoção do dia: Combo Big Fat por apenas R$ 49,90!");
```

Depois:

```js
alert("Hoje tem pizza de calabresa com 20% de desconto!");
```

## 15. Comandos úteis no terminal

Estes comandos funcionam no PowerShell, que é o terminal do Windows.

Ver arquivos da pasta:

```powershell
Get-ChildItem
```

Ver arquivos incluindo ocultos:

```powershell
Get-ChildItem -Force
```

Entrar em uma pasta:

```powershell
Set-Location "nome-da-pasta"
```

Voltar uma pasta:

```powershell
Set-Location ..
```

Ver conteúdo de um arquivo:

```powershell
Get-Content index.html
```

Procurar uma palavra nos arquivos, se tiver `rg` instalado:

```powershell
rg "pizza"
```

Ver estado do Git:

```powershell
git status
```

Ver diferenças feitas nos arquivos:

```powershell
git diff
```

Adicionar arquivos para commit:

```powershell
git add index.html menu.html style.css script.js GUIA_DO_PROJETO.md
```

Criar commit:

```powershell
git commit -m "Melhora visual e adiciona guia do projeto"
```

## 16. Checklist para editar sem se perder

Antes de mexer:

- Abra o site no navegador.
- Pense em qual arquivo precisa mudar.
- Se for texto ou estrutura, mexa no HTML.
- Se for aparência, mexa no CSS.
- Se for clique ou interação, mexa no JavaScript.

Depois de mexer:

- Salve o arquivo.
- Atualize o navegador.
- Teste no tamanho de celular.
- Confira se as imagens carregaram.
- Confira se os links funcionam.

## 17. Mini glossário

`padding`:
Espaço interno do elemento.

`margin`:
Espaço externo do elemento.

`border-radius`:
Arredondamento das bordas.

`box-shadow`:
Sombra do elemento.

`color`:
Cor do texto.

`background-color`:
Cor de fundo.

`font-size`:
Tamanho da fonte.

`font-weight`:
Peso da fonte, como normal ou negrito.

`display: flex`:
Layout flexível para alinhar itens.

`display: grid`:
Layout em grade.

`gap`:
Espaço entre itens dentro de flex ou grid.

`hover`:
Estado quando o mouse passa por cima.

`@media`:
Regra para adaptar o site a tamanhos de tela.

## 18. Ordem recomendada para estudar este projeto

1. Leia primeiro o `index.html`.
2. Compare as classes do HTML com o `style.css`.
3. Procure no CSS uma classe, por exemplo `.hero`.
4. Altere um valor pequeno, como `padding` ou `color`.
5. Salve e veja o resultado no navegador.
6. Depois leia o `menu.html`.
7. Por último, estude o `script.js`.

O segredo é mexer em uma coisa por vez. Assim você entende causa e efeito sem se confundir.
