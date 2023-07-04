function clockTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var am_or_pm = document.getElementById('am_or_pm');
    if(am_or_pm >= 12) {
        am_or_pm.innerHTML = "AM";
    }
    else {
        am_or_pm.innerHTML = "PM";
    }
    
    if(hours > 12) 
        hours = hours - 12;

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(clockTime, 1000);