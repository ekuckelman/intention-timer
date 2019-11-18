var studyBox = document.querySelector('.studyBox');
var chillBox = document.querySelector('.chillBox');
var exerciseBox = document.querySelector('.exerciseBox');
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');
var currentActWrapper = document.querySelector('.currentActWrapper');
var newActTitle = document.querySelector('.newActTitle');
var minutesInput = document.querySelector('.minutesInput');
var secondsInput = document.querySelector('.secondsInput');
var timerMinute = document.querySelector('.minutes');
var timerSeconds = document.querySelector('.seconds');
var startBtn = document.querySelector('.start');
var acccomplishment = document.querySelector('.accomplishment');
var category = document.querySelector('.categoryType');
var circle = document.querySelector('.circle');
var timerStart = document.querySelector('.main2Start');

studyBox.addEventListener('click', changeStudyBorder);
chillBox.addEventListener('click', changeChillBorder);
exerciseBox.addEventListener('click', changeExerciseBorder);
startBtn.addEventListener('click', changeDisplay);
startBtn.addEventListener('click', updateTimer);
startBtn.addEventListener('click', changeTimerColor);

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
    newActTitle.style.display = 'none';
    main1.style.display = 'none'; 
    currentActWrapper.style.display = 'block';
    main2.style.display = 'block';
}

function updateTimer () {
    event.preventDefault();
    timerMinute.innerHTML = minutesInput.value;
    timerSeconds.innerHTML = secondsInput.value;
    category.innerHTML = acccomplishment.value;
}

function changeTimerColor () {
    if(studyBox.clicked == true) {
        console.log('true click')
        circle.style.borderColor = "#B3FD78";
    } else if(chillBox.clicked == true) {
        console.log('chill man')
        circle.style.borderColor = "#C278FD"
    } else if(exerciseBox.clicked == true) {
        circle.style.borderColor = "#FD8078"
    }
    else {
        circle.style.borderColor = "#CBC9CF"
    }
}