// const serviceCards = document.querySelectorAll('.tipo');
// const modal = document.getElementById('service-modal');
// const modalTitle = document.getElementById('modal-title');
// const serviceInput = document.getElementById('service-input');
// const closeModal = document.querySelector('.close');

// serviceCards.forEach(card => {
//     card.addEventListener('click', () => {
//         const service = card.getAttribute('data-service');
//         modalTitle.innerText = `Agendar ${service}`;
//         serviceInput.value = service;
//         modal.style.display = 'flex';
//     });
// });

// closeModal.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (event) => {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// });

// const form = document.getElementById('service-form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     // Aqui você pode enviar os dados do formulário para o servidor
//     console.log(Object.fromEntries(formData));
//     modal.style.display = 'none';
//     alert('Agendamento realizado com sucesso!');
// });


const serviceCards = document.querySelectorAll('.tipo');
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.querySelector('.close');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const service = card.getAttribute('data-service');
        modalTitle.innerText = `Agendar ${service}`;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
