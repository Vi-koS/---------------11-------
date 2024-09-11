const addTask = document.querySelector('#add-task')
const input = document.querySelector('#input')
const plusTask = document.querySelector('#plusTask')



document.addEventListener("DOMContentLoaded", function () {
    loadTasks()
})
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach(function (elem) {
        let task = document.createElement('li')
        task.textContent = elem
        task.className = 'task'
        plusTask.appendChild(task)

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'btnDel'
        deleteBtn.textContent = "Удалить"
        plusTask.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', deleteTaskF)
        function deleteTaskF() {
            plusTask.removeChild(deleteBtn)
            plusTask.removeChild(task)
            removeTask(task.textContent)
        }

    })
}

addTask.addEventListener('click', addTaskFunc)

function addTaskFunc() {
    const task = document.createElement('li')
    task.className = 'task'
    task.textContent = input.value

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'btnDel'
    deleteBtn.textContent = "Удалить"

    plusTask.appendChild(task)
    saveTask(input.value)
    plusTask.appendChild(deleteBtn)
    input.value = ""


    deleteBtn.addEventListener('click', deleteTaskFunk)

    function deleteTaskFunk() {
        plusTask.removeChild(deleteBtn)
        plusTask.removeChild(task)
        removeTask(elem)

    }
}

// Урааа! я так рада что у меня получилось реаливать связь между кнопкой и клавишей Энтер!))

document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){addTaskFunc()
    }
})



function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const index = tasks.indexOf(task)
    if (index > -1) {
        tasks.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(tasks))


    }
}