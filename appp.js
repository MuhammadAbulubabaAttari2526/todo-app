let taskButton = document.getElementById("taskbutton")
let taskInput = document.getElementById("taskinput")
let list = document.getElementById("tasklist")

taskButton.addEventListener("click", function(){
    if (taskInput.value === "") return;
    let li = document.createElement("li")
    li.innerText = taskInput.value
    list.appendChild(li)
    taskInput.value = "";

    // ----------btn container-----------
    let container = document.createElement("div")
    container.classList.add("btns")

    // / -------dlt button------------

    let dlt = document.createElement("button")
dlt.innerHTML = `<i class="fa-solid fa-trash"></i>`


dlt.addEventListener("click",function(){
    li.remove()
})

li.addEventListener("click", function(e){
    e.target.style.textDecoration = " line-through" 
})

container.appendChild(dlt)

// ------------edit button---------------
let edit = document.createElement("button")
edit.innerHTML= `<i class="fa-solid fa-pen-to-square"></i>`
edit.addEventListener("click", function(){
    let text = li.firstChild.textContent;

    taskInput.value = text;
    li.remove()
  
})
  container.appendChild(edit)

  li.appendChild(container)




})



