alert('is this working?');
let timeLimit=5; // 500 
let phoneStrikes =5;

function resetTimer() {
    timeLimit=60;
}

function minusTime() {
    timeLimit--;
}

setInterval(minusTime, 1000);

function amogus () {
    if (timeLimit <=0) {
        alert("get off ur phone/lose ur friend >:(");
        phoneStrikes++;
    }

}

setInterval(phonebegone, 10500);

function phonebegone () {
    if(phoneStrikes >=3) {
        alert("you should probably put your phone/friends in another room for awhile.");
    }
}

setInterval(amogus, 1000);
addEventListener("click", resetTimer);