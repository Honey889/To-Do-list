// import inquirer from "inquirer"

// let todoString :string[] = [];
// let loop = true

// interface TodoInput {
//     todoItem : string,
//     addMore : boolean
// }

// while(loop){
//     const todoInput : TodoInput = await inquirer.prompt([
//         {
//             type:"input",
//             name : "todoItem",
//             message : "Enter your item you want in your to-do list"
//         },
//         {
//             type : "input",
//             name: "addMore",
//             message: "Do You want to add something more in your to-do list?",
//             default : false
//         }
//     ]);

//     const todoItem = todoInput.todoItem
//     const addMore = todoInput.addMore

//     if (todoItem){
//         todoString.push(todoItem);
//     }

//     loop = addMore;
// };


// if(todoString.length > 0){
//     console.log("here is your to-do list:");
//     for(let i=0; i < todoString.length; i++){
//         console.log(`${i + 1}. ${todoString[i]}`);   
//     }

// }else{
//     console.log('Your to-do list is empty!');
    
// }

