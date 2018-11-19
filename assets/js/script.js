var i=0;
var taskContainer = document.getElementsByClassName('wrapper')[0];

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

setTask(generateRandomNumber(0, tasksList.length-1))

function spitSpans(task){
  return task
  .split('')
  .map(stuff => `<span>${stuff}</span>`)
  .join('');
}

function setTask(taskNumber){
  taskContainer.innerHTML = spitSpans(tasksList[taskNumber]);
}

document.getElementsByTagName("body")[0]
.addEventListener("click", function(){
  if(i == tasksList.length - 1)
    i=0;
  setTask(i++);
});

document.addEventListener("keydown", function(event) {
  if(event.which == 32)
    setTask(i++);
});