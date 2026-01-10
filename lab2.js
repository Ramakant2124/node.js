const readline = require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

let todolist=[];

function showMenu(){
console.log("\n--- Todo list Menu ----");
console.log("1.Add todo");
console.log("2.View Todo");
console.log("Delete Todo");
console.log("4.Exit")

rl.question("Enter your choice : ", choice =>{
    switch(choice){
        case "1":
            addTodo();
            break;
        case "2":
            viewTodo();
            break;
        case "3":
            deleteTodo();
            break;
        case "4":
            console.log("Exiting Todo List");
            rl.close();
            break;
            default:
            console.log("Invalid Choice!");
            showMenu();
        }
    });

}

function addTodo(){
    rl.question("Enter todo item :",item=>{
        todolist.push(item);
        console.log("Todo added successfully");
        showMenu();
    });
}

function viewTodo(){
    console.log("\n Your Todo List")
    if(todolist.length===0){
        console.log("No Todos available.");
    }else{
        todolist.forEach((todo, index)=>{
            console.log(`${index + 1}. ${todo}`);
    });
}

showMenu();
}
function deleteTodo(){
    rl.question("Enter the number to delet :",num=>{
        if(num>0 && num <= todolist.length){
            todolist.splice(num-1,1);
            console.log("todo delet successfully");
        }else{
            console.log("Invalid todo number");
        }
        showMenu();
    });
}
showMenu();