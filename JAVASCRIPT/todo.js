let todo=[]

let req=prompt("Welcome to your todo list! What would you like to do?")

while(true)
{

    if(req=="quit"){
        
        console.log("you quit the app");
        break;
    }
    else if(req=="list"){

        console.log("**********");

        for(let i=0;i<=todo.length-1;i++){
            console.log(`${i} : ${todo[i]}`);
        }
        console.log("**********");
    }
    else if(req=="add"){

        let new_task=prompt("enter your new task");
        todo.push(new_task);
        console.log(`${new_task} added to the list!`);
    }
    else if(req=="delete"){

        
    }


}

