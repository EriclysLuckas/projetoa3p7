let currentEditId = null;

        function showPreviewScreen() {
            document.getElementById('preview-screen').style.display = 'block';
            document.getElementById('list-screen').style.display = 'none';
            document.getElementById('detail-screen').style.display = 'none';
        }

        function showListScreen() {
            document.getElementById('preview-screen').style.display = 'none';
            document.getElementById('list-screen').style.display = 'block';
            document.getElementById('detail-screen').style.display = 'none';
        }

        function showDetailForm(id = null) {
            const detailContainer = document.getElementById('detail-screen');
            const detailTitle = document.getElementById('detail-title');
            const nameInput = document.getElementById('name');
            const scheduleInput = document.getElementById('schedule');
            const descriptionInput = document.getElementById('description');
            
            if (id) {
                const institution = document.querySelector(`li[data-id='${id}']`);
                const name = institution.querySelector('h3').textContent;
                const schedule = institution.querySelector('.schedule').textContent;
                const description = institution.querySelector('.description').textContent;

                nameInput.value = name;
                scheduleInput.value = schedule;
                descriptionInput.value = description;
                detailTitle.textContent = "Editar Instituição";
                currentEditId = id;
            } else {
                nameInput.value = '';
                scheduleInput.value = '';
                descriptionInput.value = '';
                detailTitle.textContent = "Adicionar Nova Instituição";
                currentEditId = null;
            }

            detailContainer.style.display = 'block';
            document.getElementById('list-screen').style.display = 'none';
            document.getElementById('preview-screen').style.display = 'none';
        }

        function removeInstitution(id) {
            const institution = document.querySelector(`li[data-id='${id}']`);
            institution.remove();
        }

        document.getElementById('edit-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const schedule = document.getElementById('schedule').value;
            const description = document.getElementById('description').value;

            if (currentEditId) {
                const institution = document.querySelector(`li[data-id='${currentEditId}']`);
                institution.querySelector('h3').textContent = name;
                institution.querySelector('.schedule').textContent = schedule;
                institution.querySelector('.description').textContent = description;
            } else {
                const newId = document.querySelectorAll('#institution-list li').length + 1;
                const newInstitution = document.createElement('li');
                newInstitution.setAttribute('data-id', newId);
                newInstitution.innerHTML = `
                    <h3>${name}</h3>
                    <p>Horário: <span class="schedule">${schedule}</span></p>
                    <p>Descrição: <span class="description">${description}</span></p>
                    <a href="#" onclick="showDetailForm(${newId})">Editar</a>
                    <a href="#" class="remove" onclick="removeInstitution(${newId})">Remover</a>
                `;
                document.getElementById('institution-list').appendChild(newInstitution);
            }

            showListScreen();
        });


        showPreviewScreen();