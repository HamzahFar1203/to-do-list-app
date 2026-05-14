const text_input = document.getElementById("input_field");
const submit_button = document.getElementById("submit_button");
const list_div = document.getElementById("list");

const list_of_items = [];

submit_button.addEventListener("click", () => {
    if (text_input.value.trim().length !== 0) {
        console.log(text_input.value);

        var list_item = {
            itemName: text_input.value,
            dateAdded: new Date().toLocaleDateString('en-US'),
            status: "Incomplete"
        }

        list_of_items.push(list_item);

        post_to_display();

        text_input.value = "";

    } else {
        console.log("No List Item");
        return;
    }
});

function post_to_display () {
    list_div.innerHTML = "";

    for (let item of list_of_items) {
        const new_list_item = document.createElement("section");
        new_list_item.className = "list_item";

        const new_list_item_name = document.createElement("p");
        new_list_item_name.className = "list_item_name";
        new_list_item_name.textContent = item.itemName;

        const new_list_item_date = document.createElement("p");
        new_list_item_date.className = "list_item_date";
        new_list_item_date.textContent = item.dateAdded;

        new_list_item.appendChild(new_list_item_name);
        new_list_item.appendChild(new_list_item_date);
        list_div.appendChild(new_list_item);
    }
}