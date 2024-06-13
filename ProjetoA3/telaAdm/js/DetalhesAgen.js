let currentEditId = null;

function showListScreen() {
    document.getElementById('list-screen').style.display = 'block';
}

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const schedule = document.getElementById('schedule').value;
    const description = document.getElementById('description').value;

    // Lógica para adicionar ou editar a instituição
    // Deixei apenas o que era comum entre adicionar e editar

    showListScreen();
});

showListScreen();

// Simule os dados preenchidos pelo usuário (você pode buscar esses dados de um servidor ou banco de dados)
const agendamentoSelecionado = {
    nome: 'Fulano de Tal',
    cpf: '123.456.789-00',
    contato: '(11) 98765-4321',
    email: 'fulano@example.com',
    genero: 'Masculino',
    motivo: 'Consulta médica',
    // Adicione outros campos conforme necessário
};

// Preenche os campos do formulário com os dados do agendamento selecionado
document.getElementById('nome').value = agendamentoSelecionado.nome;
document.getElementById('cpf').value = agendamentoSelecionado.cpf;
document.getElementById('contato').value = agendamentoSelecionado.contato;
document.getElementById('email').value = agendamentoSelecionado.email;
document.getElementById('genero').value = agendamentoSelecionado.genero;
document.getElementById('motivo').value = agendamentoSelecionado.motivo;

// Event listener para o campo "Motivo"
const motivoSelect = document.getElementById('motivo');
const detalhesMotivoTextarea = document.getElementById('detalhes-motivo');

motivoSelect.addEventListener('change', () => {
    const selectedMotivo = motivoSelect.value;
    if (selectedMotivo === 'consulta') {
        detalhesMotivoTextarea.value = 'Detalhes da consulta...';
    } else if (selectedMotivo === 'cancelamento') {
        detalhesMotivoTextarea.value = 'Detalhes do cancelamento...';
    } else {
        detalhesMotivoTextarea.value = ''; // Limpa o textarea se nenhuma opção for selecionada
    }
});

// Event listener para o formulário (pode ser usado para salvar os dados)
document.getElementById('formulario-agendamento').addEventListener('submit', (event) => {
    event.preventDefault();
    // Lógica para salvar os dados (implemente conforme sua necessidade)
    console.log('Dados salvos!');
});
