function clock() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('ampm');

    const btnEl = document.getElementById('btn');
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }
    if (hrs > 12) {
        hrs -= 12;
    }
    document.getElementById('hours').innerHTML = hrs + " :";
    document.getElementById('minutes').innerHTML = min + " :";
    document.getElementById('seconds').innerHTML = sec;
    setTimeout(() => {
        clock()
    }, 1000);


}
clock();