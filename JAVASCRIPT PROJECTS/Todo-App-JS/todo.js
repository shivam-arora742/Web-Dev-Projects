
// selectors
const todoInput=document.querySelector(".input-text");
const todoButton=document.querySelector(".input-button");
const todoList=document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",clear);
todoList.addEventListener("click",check);

// functions
function addTodo(event){
    // check for invalid entry.
    if(todoInput.value==""){
        alert("Error!! Invalid Entry!!");
        return;
    }
// prevent form to submit or refresh.
// The preventDefault() method cancels the event if it is cancelable, 
// meaning that the default action that belongs to the event will not occur.
event.preventDefault();

// TODO div as a container to hold item value and add class '.todo'
const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

// create LI add class '.todo-list' and make it child of TODO-div  and add value of input-text to its innerHTML 
const todoLi=document.createElement('li');
todoLi.classList.add('todo-list');
todoLi.innerText=todoInput.value;
todoDiv.appendChild(todoLi);


// check button:create check button and add font-awesome icon to its HTML and add class '.todoCheck' and make it child of TODO-div .
const checkButton=document.createElement('button');
checkButton.innerHTML='<i class="fas fa-check-circle"></i>';
checkButton.classList.add('todoCheck');
todoDiv.appendChild(checkButton);

// trash button:create trash button and add font-awesome icon to its HTML and add class '.todoTrash' and make it child of TODO-div .
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add('todoTrash');
todoDiv.appendChild(trashButton);

// append list :make todo-div as a list  node  of todo-list. 
todoList.appendChild(todoDiv);
todoInput.value=" ";
}

function clear(e){
 const item =e.target;    //The target event property returns the element that triggered the event.
//  console.log(item);
// the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.
 if(item.classList[0]==="todoTrash"){
    //The parentElement property returns the parent element of the specified element.  
     const parent_elem=item.parentElement;
    //  console.log(parent_elem);
     //The remove() method removes the specified element from the DOM.
     parent_elem.remove();
 }
}

function check(e1){
    //The target event property returns the element that triggered the event.
    const item1 =e1.target;
    if(item1.classList[0]==="todoCheck"){
        //The parentElement property returns the parent element of the specified element.  
        const todo=item1.parentElement;
        //Change basic css styling of parent element.
        todo.style.background="green";
        todo.style.color="white";
        todo.style.textDecoration="line-through";

    }
   }