// ===== MENU RESPONSIVO =====
const navToggle = document.querySelector('.botao-menu-mobile');
const navMenu = document.querySelector('.menu-navegacao');
const menuLinks = document.querySelectorAll('.menu-navegacao a');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-aberto');

    const aberto = navMenu.classList.contains('menu-aberto');
    navToggle.textContent = aberto ? 'Fechar' : 'Menu';
    navToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    navToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('menu-aberto');
    if (navToggle) {
      navToggle.textContent = 'Menu';
      navToggle.setAttribute('aria-label', 'Abrir menu');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== CARRINHO =====
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco) {
  const item = carrinho.find(p => p.nome === nome);
  const valor = parseFloat(preco.replace('R$ ', '').replace(',', '.'));

  if (item) {
    item.quantidade += 1;
  } else {
    carrinho.push({ nome, preco: valor, quantidade: 1 });
  }

  salvarCarrinho();
  atualizarBadgeCarrinho();
  mostrarNotificacao(`${nome} adicionado ao carrinho!`);
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarBadgeCarrinho() {
  const badge = document.querySelector('.quantidade-carrinho');
  const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function mostrarNotificacao(mensagem) {
  const notif = document.createElement('div');
  notif.className = 'notificacao';
  notif.textContent = mensagem;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.classList.add('notificacao-visivel');
  }, 100);

  setTimeout(() => {
    notif.classList.remove('notificacao-visivel');
    setTimeout(() => notif.remove(), 300);
  }, 2400);
}

function abrirCarrinho() {
  const modal = document.querySelector('.fundo-modal-carrinho');
  if (modal) {
    modal.classList.add('carrinho-aberto');
    modal.setAttribute('aria-hidden', 'false');
    atualizarModalCarrinho();
  }
}

function fecharCarrinho() {
  const modal = document.querySelector('.fundo-modal-carrinho');
  if (modal) {
    modal.classList.remove('carrinho-aberto');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function atualizarModalCarrinho() {
  const lista = document.querySelector('.lista-carrinho');
  const total = document.querySelector('.total-carrinho');

  if (!lista) return;

  lista.innerHTML = '';
  let totalPreco = 0;

  if (carrinho.length === 0) {
    lista.innerHTML = '<p class="mensagem-carrinho-vazio">Seu carrinho esta vazio</p>';
  } else {
    carrinho.forEach((item, index) => {
      const subtotal = item.preco * item.quantidade;
      totalPreco += subtotal;

      const div = document.createElement('div');
      div.className = 'item-do-carrinho';
      div.innerHTML = `
        <div class="informacoes-item-carrinho">
          <h4>${item.nome}</h4>
          <p>R$ ${item.preco.toFixed(2)}</p>
        </div>
        <div class="controles-item-carrinho">
          <button onclick="alterarQuantidade(${index}, -1)">-</button>
          <span>${item.quantidade}</span>
          <button onclick="alterarQuantidade(${index}, 1)">+</button>
          <button class="botao-remover" onclick="removerDoCarrinho(${index})">Remover</button>
        </div>
        <div class="subtotal-item-carrinho">R$ ${subtotal.toFixed(2)}</div>
      `;

      lista.appendChild(div);
    });
  }

  if (total) {
    total.textContent = `Total: R$ ${totalPreco.toFixed(2)}`;
  }
}

function alterarQuantidade(index, valor) {
  if (!carrinho[index]) return;

  carrinho[index].quantidade += valor;

  if (carrinho[index].quantidade <= 0) {
    removerDoCarrinho(index);
  } else {
    salvarCarrinho();
    atualizarModalCarrinho();
    atualizarBadgeCarrinho();
  }
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  atualizarModalCarrinho();
  atualizarBadgeCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho esta vazio!');
    return;
  }

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const mensagem = `Ola! Gostaria de fazer um pedido:%0A%0A${carrinho
    .map(item => `${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`)
    .join('%0A')}%0A%0ATotal: R$ ${total.toFixed(2)}`;
  const whatsapp = '5511940028922';
  window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, '_blank');
}

function buscarPizza() {
  const inputBusca = document.querySelector('.campo-busca');
  const termo = inputBusca ? inputBusca.value.toLowerCase() : '';
  const cards = document.querySelectorAll('.card-pizza');

  cards.forEach(card => {
    const titulo = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = titulo.includes(termo) ? 'flex' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  atualizarBadgeCarrinho();

  const botaoPromocao = document.getElementById('botaoPromocao');
  if (botaoPromocao) {
    botaoPromocao.addEventListener('click', () => {
      mostrarNotificacao('Peca 2 fatias e ganhe 15% de desconto no refrigerante!');
    });
  }

});

window.addEventListener('click', (event) => {
  const modal = document.querySelector('.fundo-modal-carrinho');
  if (modal && event.target === modal) {
    fecharCarrinho();
  }
});


