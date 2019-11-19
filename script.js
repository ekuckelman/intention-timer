var studyBox = document.querySelector('.studyBox');
var chillBox = document.querySelector('.chillBox');
var exerciseBox = document.querySelector('.exerciseBox');
var minutesInput = document.querySelector('.minutesInput');
var secondsInput = document.querySelector('.secondsInput');
var timerMinute = document.querySelector('.minutes');
var timerSeconds = document.querySelector('.seconds');
var startBtn = document.querySelector('.start');
var accomplishment = document.querySelector('.accomplishment');
var circle = document.querySelector('.circle');
var timerStart = document.querySelector('.main2Start');

studyBox.addEventListener('click', changeStudyBorder);
chillBox.addEventListener('click', changeChillBorder);
exerciseBox.addEventListener('click', changeExerciseBorder);
startBtn.addEventListener('click', changeDisplay);
startBtn.addEventListener('click', updateTimer);
startBtn.addEventListener('click', changeTimerColor);
document.addEventListener('keyup', checkInputs);
circle.addEventListener('click', startTimer);

function changeStudyBorder() {
    studyBox.style.borderColor = '#B3FD78';
    chillBox.style.borderColor = '#CBC9CF';
    exerciseBox.style.borderColor = '#CBC9CF';
    return studyBox.clicked = true; 
}

function changeChillBorder() {
    chillBox.style.borderColor = '#C278FD';
    exerciseBox.style.borderColor = '#CBC9CF';
    studyBox.style.borderColor = '#CBC9CF';
    return chillBox.clicked = true;
}

function changeExerciseBorder() {
    exerciseBox.style.borderColor = '#FD8078';
    studyBox.style.borderColor = '#CBC9CF';
    chillBox.style.borderColor = '#CBC9CF';
    return exerciseBox.clicked = true;
}

function changeDisplay () {
    var newActTitle = document.querySelector('.newActTitle');
    var main1 = document.querySelector('.main1');
    var currentActWrapper = document.querySelector('.currentActWrapper');
    var main2 = document.querySelector('.main2');

    newActTitle.style.display = 'none';
    main1.style.display = 'none'; 
    currentActWrapper.style.display = 'block';
    main2.style.display = 'block';
}

function updateTimer () {
    var category = document.querySelector('.categoryType');

    event.preventDefault();
    timerMinute.innerHTML = minutesInput.value;
    timerSeconds.innerHTML = secondsInput.value;
    category.innerHTML = accomplishment.value;
}

function changeTimerColor () {
    if(studyBox.clicked == true) {
        circle.style.borderColor = "#B3FD78";
    } else if(chillBox.clicked == true) {
        circle.style.borderColor = "#C278FD"
    } else if(exerciseBox.clicked == true) {
        circle.style.borderColor = "#FD8078"
    }
    else {
        circle.style.borderColor = "#CBC9CF"
    }
}

function checkInputs () {
    if(accomplishment.value == "" || minutesInput.value == "" || secondsInput.value == "") {
        startBtn.setAttribute("disabled", null);
    } else {
        startBtn.removeAttribute("disabled");
    }
}

function startTimer () {
    var countdown = setInterval(function() {
        if (timerMinute.innerHTML <= 0 && timerSeconds.innerHTML <= 0) {
          clearInterval(countdown);
          return;
        }
          timerSeconds.innerHTML -= 1;
          if (timerSeconds.innerHTML < 0) {
             timerMinute.innerHTML -= 1;
             timerSeconds.innerHTML = 59;
          } if (timerSeconds > 0) {
              timerMinute.innerHTML = 0;
              timerSeconds.innerHTML = 0;
          } if(timerSeconds.innerHTML < 10) {
              timerSeconds.innerHTML = "0" + timerSeconds.innerHTML;
          } 
        }, 1000);
    }