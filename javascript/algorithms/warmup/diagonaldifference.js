function processData(input) {
    input = input.split("\n");
    input = input.slice(1, input.length);
    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0, j = input.length - 1; i < input.length; i++, j--) {
        input[i] = input[i].split(" ");
        sum1 = sum1 + Number(input[i][i]);
        sum2 = sum2 + Number(input[i][j]);
    }

    var total = sum1 - sum2;
    if (sum1 > sum2) {
        total = sum1 - sum2;
    } else {
        total = sum2 - sum1;
    }
    console.log(total);
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
