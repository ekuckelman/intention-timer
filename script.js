var studyBox = document.querySelector('.studyBox');
var chillBox = document.querySelector('.chillBox');
var exerciseBox = document.querySelector('.exerciseBox');

studyBox.addEventListener('click', changeStudyBorder);
chillBox.addEventListener('click', changeChillBorder);
exerciseBox.addEventListener('click', changeExerciseBorder);

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