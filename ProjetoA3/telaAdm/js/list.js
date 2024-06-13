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


// Simulando dados de agendamentos (você pode buscar esses dados de um servidor ou banco de dados)
const agendamentos = [
    { id: 1, data: '2024-06-15', hora: '10:00', tipo: 'Nutrição', status: 'agendado' },
    { id: 2, data: '2024-06-16', hora: '14:30', tipo: 'Fisioterapia', status: 'agendado' },
    { id: 3, data: '2024-06-17', hora: '09:15', tipo: 'Advocacia', status: 'aguardando' },
    { id: 4, data: '2024-06-18', hora: '11:45', tipo: 'Financeiro', status: 'atendido' },
    { id: 5, data: '2024-06-19', hora: '16:00', tipo: 'Nutrição', status: 'cancelado' },
    { id: 6, data: '2024-06-20', hora: '13:00', tipo: 'Fisioterapia', status: 'agendado' },
    { id: 7, data: '2024-06-21', hora: '10:30', tipo: 'Advocacia', status: 'agendado' },
    { id: 8, data: '2024-06-22', hora: '15:15', tipo: 'Financeiro', status: 'aguardando' },
    { id: 9, data: '2024-06-23', hora: '12:00', tipo: 'Nutrição', status: 'atendido' },
    { id: 10, data: '2024-06-24', hora: '17:30', tipo: 'Fisioterapia', status: 'agendado' }
];

// Função para normalizar strings para comparação
function normalizarString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Função para renderizar a lista de agendamentos
function renderizarAgendamentos() {
    const filtroStatus = document.getElementById('filtro-status').value;
    const filtroTipo = document.getElementById('filtro-tipo').value;
    const listaAgendamentos = document.getElementById('lista-agendamentos');

    console.log('Filtro Status:', filtroStatus);
    console.log('Filtro Tipo:', filtroTipo);

    // Limpa a lista antes de renderizar novamente
    listaAgendamentos.innerHTML = '';

    agendamentos.forEach((agendamento) => {
        console.log('Agendamento:', agendamento);
        if ((filtroStatus === 'todos' || agendamento.status === filtroStatus) &&
            (filtroTipo === 'todos' || normalizarString(agendamento.tipo) === normalizarString(filtroTipo))) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${agendamento.data}</td>
                <td>${agendamento.hora}</td>
                <td>${agendamento.tipo}</td>
                <td>${agendamento.status}</td>
                <td><button class="detalhes" data-id="${agendamento.id}" data-status="${agendamento.status}">Detalhes</button></td>
            `;
            listaAgendamentos.appendChild(row);
        }
    });
}

// Função para mostrar o modal com a mensagem
function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';

    // Fecha o modal ao clicar no botão de fechar
    document.getElementById('modal-close').onclick = function() {
        modal.style.display = 'none';
    }

    // Fecha o modal ao clicar fora do conteúdo do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Event listener para o seletor de status
document.getElementById('filtro-status').addEventListener('change', renderizarAgendamentos);

// Event listener para o seletor de tipo
document.getElementById('filtro-tipo').addEventListener('change', renderizarAgendamentos);

// Event listener para os botões de detalhes
document.getElementById('lista-agendamentos').addEventListener('click', (event) => {
    if (event.target.classList.contains('detalhes')) {
        const agendamentoId = event.target.getAttribute('data-id');
        const agendamentoStatus = event.target.getAttribute('data-status').toLowerCase();

        if (agendamentoStatus === 'agendado' || agendamentoStatus === 'cancelado') {
            window.location.href = '/ProjetoA3/telaAdm/DetalhesAgen.html';
        } else if (agendamentoStatus === 'aguardando') {
            showModal('Agendamento em andamento. Aguarde a conclusão.');
        } else if (agendamentoStatus === 'atendido') {
            showModal('Agendamento concluído. Não é mais possível ver os detalhes.');
        }
    }
});

// Renderiza a lista inicialmente
renderizarAgendamentos();
