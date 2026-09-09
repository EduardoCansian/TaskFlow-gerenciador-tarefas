const btnAddTask = document.getElementById('btnaddtask');
const containerTaskPending = document.getElementById('task-pending');
const toastMsg = document.getElementById('toast');
const inputTask = document.getElementById('task-input');
const nameTask = document.getElementById('title-task-pending');
const dropdownBtns = document.querySelectorAll('.btn-actions-menu');


btnAddTask.addEventListener('click', function() {

    if (inputTask.value.trim() === '') {
        toastMsg.style.background = 'red';
        toastMsg.textContent = 'Não é possível adicionar uma tarefa sem nome!'
        RevealToastMsg();
    }
    else {
        const newTask = document.createElement('div');
        newTask.classList.add('tasklist');

        newTask.innerHTML = `
            <div class="tasklist">
                <div class="checklist">
                    <input type="checkbox">
                </div>
                <div class="info-task">
                    <div class="task-body">
                        <p id="title-task-pending" class="title-task">${inputTask.value}</p>
                        <input type="text" name="" id="desc-task" placeholder="Adicionar descrição">
                        <p class="label-task">Etiquetas da tarefa</p>
                    </div>
                    <div class="dropdown">
                        <button class="btn-actions-menu"><span class="material-symbols-outlined">more_horiz</span></button>
                        <div class="dropdown-menu">
                            <button class="btn-dropdown-menu"><span class="material-symbols-outlined">target</span>Adicionar prazo</button>
                            <button class="btn-dropdown-menu"><span class="material-symbols-outlined">cached</span>Adicionar frequência</button>
                            <button class="btn-dropdown-menu"><span class="material-symbols-outlined">delete</span>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const btnMenu = newTask.querySelector('.btn-actions-menu');
        btnMenu.addEventListener('click', () => {
            const menuDropdown = newTask.querySelector('.dropdown-menu');
            menuDropdown.classList.toggle('show');
        });

        containerTaskPending.appendChild(newTask);

        document.addEventListener('click', function(evento) {
            const menuDropdown = document.querySelector('.dropdown-menu');
            const clickOut = !menuDropdown.contains(evento.target) && !dropdownBtns.contains(evento.target);

            if(clickOut) {
                menuDropdown.style.display('none');
            }
        });

        RevealToastMsg();

        toastMsg.style.background = 'rgba(10, 111, 10, 0.836)';
        toastMsg.textContent = 'Tarefa adicionada com sucesso!'
        RevealContainerTask();
        
        inputTask.value = '';
    }

})

function RevealContainerTask() {
    containerTaskPending.style.display = 'block';
}

function RevealToastMsg() {
    toastMsg.classList.remove('hidden');
    toastMsg.classList.add('show');

    setTimeout(function() {
        toastMsg.classList.remove('show');
        toastMsg.classList.add('hidden');
    }, 3000);
}

