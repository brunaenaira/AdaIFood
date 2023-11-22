// Array para armazenar as tarefas
let tasks = [{ id: 1, title: "Tarefa 1", description: "Descrição da tarefa 1" }, {
    id: 2, title: "Tarefa 2", description: "Descrição da tarefa 2"
}, { id: 3, title: "Tarefa 3", description: "Descrição da tarefa 3" }];


// ... (funções de validação e manipulação de tarefas)

function validateEmpty(field) {
    return !field.trim()
}

function isOnlyDigits(field) {
    for (let i = 0; i < field.length; i++) {
        if (isNaN(field[i])) {
            return false
        }
    }
    return true
}

function validateMinWidth(field, minWidth) {
    return field.length < minWidth
}

function printTask(task) {
    console.log(`Task de id ${task.id} com título "${task.title}" e descrição "${task.description}" `)
}

// Função para adicionar uma tarefa
function addTask() {
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    
    // Verifica se o título e descrição do formulário estão vazios
    if (validateEmpty(title) || validateEmpty(description)) {
        alert("O título e descrição são obrigatórios.");
        return "O título e descrição são obrigatórios.";
    }

    // Verifica se o título contém apenas números
    if (isOnlyDigits(title)) {
        alert("O título não pode conter apenas números.");
        return "O título não pode conter apenas números.";
    }

    // Verifica o comprimento mínimo do título
    if (validateMinWidth(title, 4)) {
        alert("O título deve ter no mínimo 4 caracteres.");
        return "O título deve ter no mínimo 4 caracteres.";
    }
    // Verifica o comprimento mínimo da descrição
    if (validateMinWidth(description, 20)) {
        alert("A descrição deve ter no mínimo 20 caracteres.");
        return "A descrição deve ter no mínimo 20 caracteres.";
    }

    // Verifica se há tarefas com título duplicado
    const duplicateTask = tasks.find(task => task.title === title);
    if (duplicateTask) {
        alert("Já existe uma tarefa com esse título.");
        return "Já existe uma tarefa com esse título.";
    }

    // Cria a tarefa e a adiciona ao array de tarefas
    const newTask = {
        id, title, description
    };
    tasks.push(newTask);
    alert("Tarefa adicionada com sucesso!");
    //Reseta os dados atuais do form
    document.getElementById("form-add").reset();
    // return "Tarefa adicionada com sucesso!";
}

// // Função para listar todas as tarefas
// function listTasks() {
//     return tasks;
// }

// Função para obter uma tarefa pelo ID
function getTaskById() {
    const taskId = parseInt(document.getElementById("taskId").value);

    if (!taskId) {
        alert("Por favor, insira um ID de tarefa válido!");
        return;
    }

    const task = tasks.find(task => task.id === taskId);

    if (task) {
        const taskDetails = `
                    <h2>Detalhes da Tarefa</h2>
                    <p>ID: ${task.id}</p>
                    <p>Título: ${task.title}</p>
                    <p>Descrição: ${task.description}</p>
                `;

        document.getElementById("output").innerHTML = taskDetails;
    } else {
        document.getElementById("output").innerHTML = "<p>Tarefa não encontrada!</p>";
    }
    // return tasks.find(task => task.id === id);
}

// Função para editar uma tarefa

function editTask() {
    const selectedTaskId = document.getElementById("task").value;
    const newTitle = document.getElementById("title").value;
    const newDescription = document.getElementById("description").value;

    if (!selectedTaskId || !newTitle || !newDescription) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const selectedTask = tasks.find(task => task.id === parseInt(selectedTaskId));
    // Verifica se o título e descrição estão vazios
    // if (validateEmpty(newTitle) || validateEmpty(newDescription)) {
    //     alert("O título e descrição são obrigatórios.");
    // }

    // Verifica se o título contém apenas números
    if (isOnlyDigits(newTitle)) {
        alert("O título não pode conter apenas números.");
    }

    // Verifica o comprimento mínimo do título
    if (validateMinWidth(newTitle, 4)) {
        alert("O título deve ter no mínimo 4 caracteres.");
    }
    // Verifica o comprimento mínimo da descrição
    if (validateMinWidth(newDescription, 20)) {
        alert("A descrição deve ter no mínimo 20 caracteres.");
    }
    // if (selectedTask) {
    selectedTask.title = newTitle;
    selectedTask.description = newDescription;

    // Exibe uma mensagem ou atualiza a interface para indicar que a tarefa foi editada
    document.getElementById("output").innerHTML = `<p>Tarefa editada com sucesso!</p>`;
    // } else {
    //     alert("Tarefa não encontrada!");
    // }
}

// Função para remover uma tarefa
function removeTask() {
    const selectedTaskId = document.getElementById("task").value;

    if (!selectedTaskId) {
        alert("Por favor, selecione uma tarefa!");
        return;
    }

    const taskIndex = tasks.findIndex(task => task.id === parseInt(selectedTaskId));

    // if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);

    // Exibe uma mensagem ou atualiza a interface para indicar que a tarefa foi removida
    document.getElementById("output").innerHTML = `<p>Tarefa removida com sucesso!</p>`;
    // } else {
    //     alert("Tarefa não encontrada!");
    // }
}

// funções que criam o formulário e interação do usuário com a interface
function addTaskForm() {
    document.getElementById("output").innerHTML = `
                <h2>Adicionar Tarefa</h2>
                <form onsubmit="event.preventDefault(); addTask()" id="form-add">
                    <label for="id">Id:</label>
                    <input type="number" id="id" required>
                    <label for="title">Título:</label>
                    <input type="text" id="title">
                    <label for="description">Descrição:</label>
                    <textarea id="description" rows="4" ></textarea>
                    <input type="submit" value="Adicionar Tarefa">
                </form>
            `;
}

function listAllTasks() {
    let taskList = `
                <h2>Todas as Tarefas</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                    </tr>
            `;

    tasks.forEach(task => {
        taskList += `
                    <tr>
                        <td>${task.id}</td>
                        <td>${task.title}</td>
                        <td>${task.description}</td>
                    </tr>
                `;
    });

    taskList += `</table>`;
    document.getElementById("output").innerHTML = taskList;
}

function editTaskForm() {
    let taskOptions = "<option value=''>Selecione uma tarefa</option>";

    tasks.forEach(task => {
        taskOptions += `<option value="${task.id}">${task.title}</option>`;
    });

    const form = `
                <h2>Editar Tarefa</h2>
                <form onsubmit="event.preventDefault(); editTask()">
                    <label for="task">Selecione a tarefa:</label>
                    <select id="task">${taskOptions}</select>
                    <label for="title">Novo Título:</label>
                    <input type="text" id="title">
                    <label for="description">Nova Descrição:</label>
                    <textarea id="description" rows="4"></textarea>
                    <input type="submit" value="Editar Tarefa">
                </form>
            `;

    document.getElementById("output").innerHTML = form;
}

function removeTaskForm() {
    let taskOptions = "<option value=''>Selecione uma tarefa</option>";

    tasks.forEach(task => {
        taskOptions += `<option value="${task.id}">${task.title}</option>`;
    });

    const form = `
                <h2>Remover Tarefa</h2>
                <form onsubmit="event.preventDefault(); removeTask()">
                    <label for="task">Selecione a tarefa:</label>
                    <select id="task">${taskOptions}</select>
                    <input type="submit" value="Remover Tarefa">
                </form>
            `;

    document.getElementById("output").innerHTML = form;
}

function getTaskByIdForm() {
    const form = `
                <h2>Obter Tarefa por ID</h2>
                <form onsubmit="event.preventDefault(); getTaskById()">
                    <label for="taskId">ID da Tarefa:</label>
                    <input type="number" id="taskId">
                    <input type="submit" value="Buscar Tarefa">
                </form>
            `;

    document.getElementById("output").innerHTML = form;
}