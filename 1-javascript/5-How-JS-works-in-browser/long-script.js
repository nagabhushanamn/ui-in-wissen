


var i = 0;

function longRunning() {
    while (i < 1000000000) {
        i++;
    }
}
longRunning();

postMessage(i)