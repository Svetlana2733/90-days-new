console.log("90 дней запущено");
// =====================================
// 90 ДНЕЙ - ЛОГИКА ЗАДАЧ
// =====================================


let tasks = [];


// кнопка добавить задачу

const addTaskButton = document.getElementById("add-task-button");


addTaskButton.addEventListener("click", function(){

    let taskName = prompt("Введите задачу:");

    if(taskName){

        tasks.push({

            title: taskName,

            completed:false

        });


        renderTasks();

    }

});



// отображение задач

function renderTasks(){


    const groups = document.querySelector(".task-groups");


    // удаляем старые добавленные задачи

    document.querySelectorAll(".user-task")
    .forEach(item=>item.remove());



    tasks.forEach((task,index)=>{


        let taskElement = document.createElement("div");


        taskElement.className="user-task";



        taskElement.innerHTML = `

        <div>

            <span>${task.title}</span>

        </div>


        <button onclick="completeTask(${index})">

            ${task.completed ? "✓" : "○"}

        </button>

        `;



        groups.appendChild(taskElement);



    });



    updateProgress();

}




// отметить задачу

function completeTask(index){


    tasks[index].completed = 
    !tasks[index].completed;


    renderTasks();

}




// прогресс

function updateProgress(){


    const total = tasks.length;


    const completed = tasks.filter(
        task=>task.completed
    ).length;



    document.getElementById(
        "completed-count"
    ).textContent = completed;



    document.getElementById(
        "total-count"
    ).textContent = total;



    let percent = 0;


    if(total>0){

        percent = Math.round(
            completed / total * 100
        );

    }



    document.getElementById(
        "progress-percent"
    ).textContent = percent+"%";



    document.getElementById(
        "progress-fill"
    ).style.width = percent+"%";


}
