console.log("90 дней запущено");


let tasks = [];


const addButtons = document.querySelectorAll(".add-sphere-task");


addButtons.forEach(button => {


    button.addEventListener("click", () => {


        const sphere = button.dataset.sphere;


        let title = prompt("Введите задачу");


        if(title){


            tasks.push({

                title:title,

                sphere:sphere,

                completed:false

            });


            renderTasks();

        }


    });


});



function renderTasks(){


    document.querySelectorAll(".sphere-tasks")
    .forEach(block=>{
        block.innerHTML="";
    });



    tasks.forEach((task,index)=>{


        const container =
        document.getElementById(task.sphere+"-tasks");


        if(container){


            let card=document.createElement("div");


            card.className="task-card";


            card.innerHTML=`

            <span>
            ${task.title}
            </span>


            <button onclick="completeTask(${index})">

            ${task.completed ? "✓" : ""}

            </button>

            `;


            container.appendChild(card);


        }


    });


    updateProgress();

}



function completeTask(index){


    tasks[index].completed =
    !tasks[index].completed;


    renderTasks();

}




function updateProgress(){


    let total = tasks.length;


    let done =
    tasks.filter(t=>t.completed).length;



    document.getElementById(
    "completed-count"
    ).textContent = done;



    document.getElementById(
    "total-count"
    ).textContent = total;



    let percent = total
    ? Math.round(done/total*100)
    : 0;



    document.getElementById(
    "progress-percent"
    ).textContent =
    percent+"%";


    document.getElementById(
    "progress-fill"
    ).style.width =
    percent+"%";


}
