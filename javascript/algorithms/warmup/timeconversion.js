function processData(input) {

    var time = input.slice(input.length - 2, input.length);
    input = input.slice(0, input.length - 2).split(":");

    var hours = Number(input[0]);
    var minutes = Number(input[1]);
    var seconds = Number(input[2]);

    if(time == "PM" && hours < 12) {
        hours = hours + 12;
    } else if(time == "AM" && hours == 12) {
        hours = hours - 12;
    }

    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    var sSeconds = seconds.toString();

    if (hours < 10) {
        sHours = "0" + sHours;
    }
    if (minutes < 10) {
        sMinutes = "0" + sMinutes;
    }
    if (seconds < 10) {
        sSeconds = "0" + sSeconds;
    }

    console.log(sHours + ":" + sMinutes + ":" + sSeconds);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
