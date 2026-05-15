const text_input = document.getElementById("input_field");
const submit_button = document.getElementById("submit_button");
const list_div = document.getElementById("list");

var list_of_tasks = [];


/*

    Gathers text input, stores it in an object, which then gets
    stored in an array. This array of objects is then used to
    display each task as an element in the task viewer.

*/
submit_button.addEventListener("click", () => {

    if (text_input.value.trim().length !== 0) {

        console.log(text_input.value);

        var list_item = {

            taskName: text_input.value,

            dateAdded: new Date().toLocaleDateString('en-US'),

            status: "Incomplete"

        }

        list_of_tasks.push(list_item);

        post_to_task_viewer();

        text_input.value = "";

    } else {

        console.log("No List Item");

        return;

    }

    console.log(list_of_tasks);

});

/*

    Delete functionality using event.target to delete tasks that
    have been clicked on.

*/
const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("click", (event) => {

    if (event.target.classList.contains("list_item_name") || event.target.classList.contains("list_item_date")) {

        var text_to_match = event.target.parentElement.querySelector(".list_item_name").textContent;
    
    } else {
    
        return;
    
    }

    let newarray = list_of_tasks.filter((task) => {
    
        return task.taskName !== text_to_match;
        
    });

    list_of_tasks = newarray;

    post_to_task_viewer();

});

/*
    Clears the task viewer and re-creates each element based on 
    the objects within the list_of_tasks array of objects.
*/
function post_to_task_viewer () {

    list_div.innerHTML = "";

    for (let item of list_of_tasks) {

        // Creates the <section> which wraps around all task elements
        const new_list_item = document.createElement("section");
        new_list_item.className = "list_item";

        // Creates the <p> which holds the task name
        const new_list_item_name = document.createElement("p");
        new_list_item_name.className = "list_item_name";
        new_list_item_name.textContent = item.taskName;

        // Creates the <p> which holds the date the task was created
        const new_list_item_date = document.createElement("p");
        new_list_item_date.className = "list_item_date";
        new_list_item_date.textContent = item.dateAdded;

        // Appends the task name <p> to the <section> element as its child
        new_list_item.appendChild(new_list_item_name);

        // Appends the date <p> to the <section> element as its child
        new_list_item.appendChild(new_list_item_date);

        // Sends the completed <section> with all task information to the list viewer
        list_div.appendChild(new_list_item);

    }
}