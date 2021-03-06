var i=0;
var taskContainer = document.getElementsByClassName('wrapper')[0];
var animationPipeline;

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

function shuffle(ordered){
  let shuffled = [];
  for(var i=ordered.length; i>0; i--){
    let r =generateRandomNumber(0, i);
    shuffled.push(ordered.splice(r, 1)[0])
  }
  return shuffled;
}

var tasksList = shuffle(tasksCollection);

function setTask(taskNumber){
 clearTimeout(animationPipeline);
  if(i == tasksList.length - 1)
    i=0;
  document.getElementsByClassName('animated')[0].className = "fadeOutDown animated"  
  animationPipeline =  setTimeout(function(){ 
    taskContainer.innerHTML = spitSpans(tasksList[taskNumber]);
  }, 1000);
}

setTask(generateRandomNumber(0, tasksList.length-1))

function spitSpans(task){
  return `<p class="fadeInDown animated">
    ${task
    .split('')
    .map(stuff => `<span>${stuff}</span>`)
    .join('')}
    </p>`;
}


document.getElementsByTagName("body")[0]
.addEventListener("click", function(){
  setTask(i++);
});

document.addEventListener("keydown", function(event) {
  if(event.which == 32){
    setTask(i++);
  }
});

setInterval(function(){ 
  setTask(i++); 
}, 5000);
