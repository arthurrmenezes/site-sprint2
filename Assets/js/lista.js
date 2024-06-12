document.addEventListener('DOMContentLoaded', function() {
    const pedidosSection = document.getElementById('pedidos-section');
    const pedidosLista = document.getElementById('pedidos-lista');

    function renderizarPedidos() {
        pedidosLista.innerHTML = '';

        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        if (pedidos.length === 0) {
            pedidosLista.innerHTML = '<p>Nenhum pedido encontrado.</p>';
            return;
        }

        pedidos.forEach((pedido, index) => {
            const pedidoElement = document.createElement('div');
            pedidoElement.innerHTML = `
                <div class="pedido">
                    <h3>Pedido ${index + 1}</h3>
                    <p><strong>Nome do Projeto:</strong> ${pedido.nomeProjeto}</p>
                    <p><strong>Tipo:</strong> ${pedido.tipo}</p>
                    <p><strong>Sobre:</strong> ${pedido.sobre}</p>
                    <p><strong>Prazo:</strong> ${pedido.prazo}</p>
                    <button class="btn-excluir" data-index="${index}">Excluir</button>
                </div>
            `;
            pedidosLista.appendChild(pedidoElement);
        });

        const btnsExcluir = document.querySelectorAll('.btn-excluir');
        btnsExcluir.forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(btn.getAttribute('data-index'));
                excluirPedido(index);
            });
        });
    }

    function excluirPedido(index) {
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.splice(index, 1);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        renderizarPedidos();
    }

    renderizarPedidos();
});
