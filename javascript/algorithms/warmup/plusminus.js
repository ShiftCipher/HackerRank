function processData(input) {
    input = input.split("\n");
    var divisor = Number(input[0]);
    input = input[1];
    input = input.split(" ");

    var positive = 0;
    var negative = 0;
    var zero = 0;
    input.forEach(function(element) {
        if (element > 0) {
            positive++;
        } else {
            if (element < 0) {
                negative++;
            } else {
                zero++;
            }
        }
    })

    console.log((positive/divisor).toFixed(6));
    console.log((negative/divisor).toFixed(6));
    console.log((zero/divisor).toFixed(6));
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
