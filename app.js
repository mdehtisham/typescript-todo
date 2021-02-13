var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (initial === void 0) { initial = 10; }
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current.toString();
        current -= interval;
    }
}
