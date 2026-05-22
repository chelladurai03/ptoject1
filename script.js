let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function save(){
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function render(filter="all"){

let list=
document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

if(
filter==="active" &&
task.done
)return;

if(
filter==="completed" &&
!task.done
)return;

let li=
document.createElement("li");

li.innerHTML=
`
${task.text}

<button onclick="toggle(${index})">
✓
</button>

<button onclick="removeTask(${index})">
X
</button>
`;

if(task.done)
li.classList.add("done");

list.appendChild(li);

});

}

function addTask(){

let input=
document.getElementById("taskInput");

if(input.value==="")
return;

tasks.push({
text:input.value,
done:false
});

input.value="";

save();

render();

}

function toggle(i){

tasks[i].done=
!tasks[i].done;

save();

render();

}

function removeTask(i){

tasks.splice(i,1);

save();

render();

}

function filterTasks(type){

render(type);

}

render();