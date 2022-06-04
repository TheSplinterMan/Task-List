//On Load (Pretty much our 'main' function)
window.addEventListener('load', () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const input_title = document.getElementById("new-task-title");
    const taskGrid = document.getElementById("tasks");
    let color = "var(--purple)"

    // On Submit, Do Actions...
    form.addEventListener('submit', (e) => {

        // Don't go to new page
        e.preventDefault();

        // The title and task
        const task = input.value;
        const task_title = input_title.value;

        // If the two fields aren't filled out, prompt re-entry; if they are, continue...
        if (!(task && task_title)) {
            alert("Please fill out the task and title.");
            console.log("New task not filled out")
            return;
        } 

        // Creating a new task block
        const singleTaskBlock = document.createElement('div');
        singleTaskBlock.classList.add("task")

        const singleTaskTitle = document.createElement("div");
        //singleTaskTitle.classList.add("title");
        //singleTaskBlock.appendChild(singleTaskTitle);

        const singleTaskText = document.createElement("div");
        //singleTaskText.classList.add("content");

        //singleTaskBlock.appendChild(singleTaskText);

        //========================

        const task_title_el = document.createElement("textarea");
        task_title_el.classList.add("title");
        task_title_el.value = task_title;
        task_title_el.setAttribute("readonly", "readonly");
        singleTaskBlock.appendChild(task_title_el);

        const task_input_el = document.createElement("textarea");
        task_input_el.classList.add("content");
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        singleTaskBlock.appendChild(task_input_el);



        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const editAction = document.createElement("button");
        editAction.classList.add("standard-btn");
        editAction.innerHTML = "Edit";

        const del = document.createElement("button");
        del.classList.add("standard-btn");
        del.innerHTML = "Delete";

        task_actions.appendChild(editAction);
        task_actions.appendChild(del);

        singleTaskBlock.appendChild(task_actions);
        singleTaskBlock.style.backgroundColor = color;

        taskGrid.appendChild(singleTaskBlock);

        input.value = "";
        input_title.value = "";

        //-------Edit Task (Not working yet)
        editAction.addEventListener('click', () => {
            console.log(editAction.innerText);

            if (editAction.innerText.toLowerCase() == 'edit'){
                editAction.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_title_el.removeAttribute("readonly");
                task_input_el.focus();
                task_title_el.focus();
            } else {
                editAction.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                task_title_el.setAttribute("readonly", "readonly");

            }

        })

        //-------Delete Task
        del.addEventListener('click', () => {
            console.log('Deleted Task');
            taskGrid.removeChild(singleTaskBlock);
        })

    })

          //-------Color Options Selector

        //Linking Buttons to Variables
        const color_purple = document.querySelector("#button-purple");
        const color_green = document.querySelector("#button-green");
        const color_red = document.querySelector("#button-red");
        const color_blue = document.querySelector("#button-blue");
        const color_orange = document.querySelector("#button-orange");

        //Set global variable to specific color based on selection
        color_purple.addEventListener('click', () => {
            color = "var(--purple)";
            console.log("Task block color changed to "+color);
        })

        color_green.addEventListener('click', () => {
            color = "var(--green)";
            console.log("Task block color changed to "+color);
        })

        color_red.addEventListener('click', () => {
            color = "var(--red)";
            console.log("Task block color changed to "+color);
        })

        color_blue.addEventListener('click', () => {
            color = "var(--blue)";
            console.log("Task block color changed to "+color);
        })

        color_orange.addEventListener('click', () => {
            color = "var(--orange)";
            console.log("Task block color changed to "+color);
        })
})