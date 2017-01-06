



// Get the date/time

var showDateTime = function() {
    var timeWrap = document.getElementById('date');
    var todaysDate = new Date();
    timeWrap.innerHTML = todaysDate;
};




// Run it!
window.onload = showDateTime();