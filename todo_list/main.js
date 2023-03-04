// 유져가 값을 입력한다.
// +버튼을 클릭하면, 할일이 추가된다
// delete버튼을 누르면 할일 삭제된다.
// check 버튼을 누르면 할이 끝나면서 밑줄이 간다
//1 check 버튼을 클릭하는 순간 true, false
//2 true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로
//진행중인  끝남 탬을 누르면, 언더바가 이동한다.
//끝남탭은, 끝난 아이템만, 진행중 탭은 진행중인 탭만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task_input")
console.log(taskInput);
let addBtn = document.getElementById("btn_add");
let tabs = document.querySelectorAll(".task_tabs div")
let taskList = [];
let mode = "all"
let filterList = ""
let horizontalLine = document.getElementById("under_line")
let horizontalMenus = document.querySelectorAll(".task_tabs .menu")
// console.log(horizontalLine);
// console.log(horizontalMenus);

horizontalMenus.forEach((menu)=>
menu.addEventListener("click", (e)=> horizontalIndicator(e)));
function horizontalIndicator(e){
    horizontalLine.style.left = e.currentTarget.offsetLeft +"px";
    horizontalLine.style.width = e.currentTarget.offsetWidth +"px";
    horizontalLine.style.top = e.currentTarget.offsetHeight - 3 +"px";
}
//만약 아무것도 없다면 alert창을 출력한다.
// if (taskInput == "" || null || undefined || 0 || NaN){
//     alert("할일 앱에 할일을 먼저 적어주세요~");
// } 
addBtn.addEventListener("click", addTask);

for(let i =1; i<tabs.length; i++){
    tabs[i].addEventListener("click",function(event){filter(event)});
}


// console.log(tabs);
function addTask(){
    // console.log("click")
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    if(!taskInput.value){
        alert("할일을 입력해주세요")
        return
    } else{
        taskList.push(task);
        render();
        // 사용자가 적은 인풋값은 다시 리셋 설정
        taskInput.value = "";
    }
}

function render(){
    let list =[];
    if(mode == "all"){
        list = taskList;
    } else if (mode =="ongoing" || mode =="done"){
        list = filterList;
    } 
    let resultHTML = "";
    for(let i = 0; i<list.length; i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class= "task_done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">check</button>
                <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">check</button>
                <button onclick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        }
    }
    document.getElementById("task_board").innerHTML = resultHTML;
}

function toggleComplete(id){
    // console.log("check됬음")
    // console.log("id:" ,id);
    for(let i=0; i < taskList.length; i++) {
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id){
    console.log("삭제하자", id);
    for(let  i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
        console.log(taskList);
    }
    render();
}

function filter(event){
    mode = event.target.id;
    filterList = [] ;
    console.log("클릭됨", mode);
    if(mode == "all"){
        render();
    } else if(mode=="ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i]);
            }
        }
        render();
    }   else if(mode == "done"){
        for(let i = 0; i<taskList.length; i++){
            if(taskList[i].isComplete ==true){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
    // console.log(filiterList);
}
// 랜덤 아이디 생성 함수
function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 9);
}









