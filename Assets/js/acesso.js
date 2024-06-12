document.addEventListener('DOMContentLoaded', function() {
    const formPedido = document.getElementById('form-pedido');
    const pedidosSection = document.getElementById('pedidos-section');
    const pedidosLista = document.getElementById('pedidos-lista');
    const cancelarBtn = document.getElementById('botao-cancelar');
    const prazoInput = document.getElementById('prazo');

    const hoje = new Date();
    hoje.setDate(hoje.getDate() + 1); // Incrementando um dia
    const dataMinima = hoje.toISOString().split('T')[0]; // Formato de data para o atributo min do input date
    prazoInput.setAttribute('min', dataMinima);

    formPedido.addEventListener('submit', function(event) {
        event.preventDefault();

        const nomeProjeto = document.getElementById('nome-projeto').value;
        const tipo = document.getElementById('tipo').value;
        const sobre = document.getElementById('sobre').value;
        const prazo = document.getElementById('prazo').value;

        const pedido = {
            nomeProjeto,
            tipo,
            sobre,
            prazo
        };

        let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
        pedidos.push(pedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        formPedido.reset();
    });

    cancelarBtn.addEventListener('click', function() {
        document.getElementById('nome-projeto').value = '';
        document.getElementById('tipo').value = 'App-Todas as plataformas';
        document.getElementById('sobre').value = '';
        document.getElementById('prazo').value = '';
    });
});
