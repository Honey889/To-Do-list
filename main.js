import inquirer from "inquirer";
let todoString = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Enter your item you want in your to-do list"
        },
        {
            type: "input",
            name: "addMore",
            message: "Do You want to add something more in your to-do list?",
            default: false
        }
    ]);
    const todoItem = todoInput.todoItem;
    const addMore = todoInput.addMore;
    if (todoItem) {
        todoString.push(todoItem);
    }
    loop = addMore;
}
;
if (todoString.length > 0) {
    console.log("here is your to-do list:");
    for (let i = 0; i < todoString.length; i++) {
        console.log(`${i + 1}. ${todoString[i]}`);
    }
}
else {
    console.log('Your to-do list is empty!');
}
// import inquirer from "inquirer";
// let todos :string[] = []
// let loop = true
// while(loop){
//     const answers :{
//         Todo : string,
//         addMore : boolean
//     } = await inquirer.prompt([
//         {
//             type : "input",
//             name : "Todo",
//             message : "Enter your item you want in your ToDo list?"
//         },
//         {
//             type : "confirm",
//             name : "addmore",
//             message : "Do you want to add more in the list?",
//             default : false
//         }
//     ])
//     const (Todo , addmore) = answers;
//     console.log(answers);
//     loop = addmore
//     if (Todo) {
//         todos.push(Todo)
//     }else("kindly add valid input")
// }
// console.log(todos);
