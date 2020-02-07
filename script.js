document.addEventListener("DOMContentLoaded", function () {


    function totalPledges() {
        var count = 0;
        var interval = setInterval(function () {
            if (typeof count === 'string') {
                count = parseInt(count.replace(/,/g, ''));
            }
            if (count < 1423) {
                count = ++count;
                if (count > 1000) {
                    count = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                }
                document.getElementById('pledge').innerHTML = count;
            } else {
                clearInterval(interval);
            }
        }, 2000 / 1000);
    }

    function increaseBars(maxWidth) {
        var bars = document.getElementsByClassName('dis-board-display');
        var barsNumb = document.getElementsByClassName('pledge-num');

        for (var i = 0; i < bars.length; i++) {
            var percentage =  Math.floor((parseInt(barsNumb[i].textContent.replace(' Pledges', '')) / 290) * 100);
            delayTransition(bars[i], percentage)
        }
    }

    function delayTransition(element, percentage) {
        setTimeout(function () {
            element.style.width = `${percentage}%`;
        }, 100);
    }

    totalPledges();
    increaseBars()


});
