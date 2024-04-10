document.addEventListener("DOMContentLoaded", function() {
    var lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        document.getElementById("last-visited").innerHTML = "<h2>Welcome!</h2><p>Let us know if you have any questions.</p>";
    } else {
        var currentDate = new Date();
        var daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            document.getElementById("last-visited").innerHTML = "<h2>Back so soon! Awesome!</h2>";
        } else {
            var message = "You last visited ";
            if (daysSinceLastVisit === 1) {
                message += "1 day ago.";
            } else {
                message += daysSinceLastVisit + " days ago.";
            }
            document.getElementById("last-visited").innerHTML = "<h2>" + message + "</h2>";
        }
    }

    // Store current date as last visit date in localStorage
    localStorage.setItem("lastVisit", Date.now());
});
