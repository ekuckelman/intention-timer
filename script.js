var studyBox = document.querySelector('.studyBox');
var chillBox = document.querySelector('.chillBox');
var exerciseBox = document.querySelector('.exerciseBox');
var main1 = document.querySelector('.main1');
var main2 = document.querySelector('.main2');
var currentActWrapper = document.querySelector('.currentActWrapper');
var newActTitle = document.querySelector('.newActTitle');

var startBtn = document.querySelector('.start');

studyBox.addEventListener('click', changeStudyBorder);
chillBox.addEventListener('click', changeChillBorder);
exerciseBox.addEventListener('click', changeExerciseBorder);
startBtn.addEventListener('click', changeDisplay);

function changeStudyBorder() {
    studyBox.style.borderColor = '#B3FD78';
    chillBox.style.borderColor = '#CBC9CF';
    exerciseBox.style.borderColor = '#CBC9CF';
}

function changeChillBorder() {
    chillBox.style.borderColor = '#C278FD';
    exerciseBox.style.borderColor = '#CBC9CF';
    studyBox.style.borderColor = '#CBC9CF';
}

function changeExerciseBorder() {
    exerciseBox.style.borderColor = '#FD8078';
    studyBox.style.borderColor = '#CBC9CF';
    chillBox.style.borderColor = '#CBC9CF';
}

function changeDisplay () {
    newActTitle.style.display = 'none';
    main1.style.display = 'none'; 
    currentActWrapper.style.display = 'block';
    main2.style.display = 'block';
    
   
}