document.addEventListener("DOMContentLoaded", function () {


    function totalPledges() {
        var pledges = document.getElementById('pledge');

        for (i = 0; i < 10; i++) {
            setTimeout(function () {
                pledges.innerText = i;
            }, 3000);
        }
    }

    function increaseBars(element) {

    }

    totalPledges();

});
