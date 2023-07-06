const form = document.getElementById('form-contatos');
const tabelaContatos = document.getElementById('tabela-contatos');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    tabelaContatos.innerHTML += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});