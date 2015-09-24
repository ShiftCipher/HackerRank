function processData(input) {
    input = input.split("\n");

    input = input[1].split(" ");

    var sum = 0;

    for (var i = 0; i < input.length; i++) {
        sum = sum + Number(input[i]);
    }
    console.log(sum);
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
