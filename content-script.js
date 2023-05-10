alert('you have succesfully added this extension to chrome');
let timeLimi t= 5*60;
let phoneStrikes = 0;

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
