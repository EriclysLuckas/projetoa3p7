var agora = new Date();
var mesAtual = agora.getMonth();
var anoAtual = agora.getFullYear();
var diaSelecionado = null; // Armazena o dia atualmente selecionado

function obterNomeMes(mes) {
    var nomeMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return nomeMeses[mes];
}

function obterPrimeiroDiaDoMes(ano, mes) {
    return new Date(ano, mes, 1).getDay();
}

function obterDiasNoMes(ano, mes) {
    return new Date(ano, mes + 1, 0).getDate();
}

function atualizarCalendario(mes, ano) {
    var nomeMes = obterNomeMes(mes);
    document.getElementById('monthYear').textContent = nomeMes + " " + ano;
    var days = document.getElementById('days');
    days.innerHTML = ''; // Limpa os dias anteriores

    var primeiroDia = obterPrimeiroDiaDoMes(ano, mes);
    var diasNoMesAnterior = obterDiasNoMes(ano, mes - 1);

    // Preenche os dias do mês anterior
    for (var i = primeiroDia; i > 0; i--) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day', 'previous-month');
        dayElement.textContent = diasNoMesAnterior - i + 1;
        days.appendChild(dayElement);
    }

    // Preenche os dias do mês atual
    var diasNoMes = obterDiasNoMes(ano, mes);
    for (var dia = 1; dia <= diasNoMes; dia++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = dia;
        dayElement.addEventListener('click', function() {
            if (diaSelecionado) {
                diaSelecionado.classList.remove('selected'); // Remove a seleção do dia anterior
            }
            this.classList.add('selected'); // Adiciona a seleção ao dia clicado
            diaSelecionado = this; // Atualiza o dia selecionado
        });
        days.appendChild(dayElement);
    }
}

document.getElementById('prev').addEventListener('click', function() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }
    atualizarCalendario(mesAtual, anoAtual);
});

document.getElementById('next').addEventListener('click', function() {
    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
    atualizarCalendario(mesAtual, anoAtual);
});

document.getElementById('currentMonth').addEventListener('click', function() {
    mesAtual = new Date().getMonth();
    anoAtual = new Date().getFullYear();
    atualizarCalendario(mesAtual, anoAtual);
});

atualizarCalendario(mesAtual, anoAtual);


document.addEventListener('DOMContentLoaded', function() {
var listIcon = document.querySelector('.bi-list');
var overlay = document.querySelector('.overlay');

listIcon.addEventListener('click', function() {
overlay.style.display = 'block';
});

// Adiciona um evento de clique ao documento inteiro para fechar a overlay
document.addEventListener('click', function(event) {
// Verifica se o clique ocorreu fora do ícone de lista
if (!listIcon.contains(event.target)) {
    // Oculta a overlay
    overlay.style.display = 'none';
}
});
});
