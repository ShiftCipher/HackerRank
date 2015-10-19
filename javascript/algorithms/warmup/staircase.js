function processData(input) {
    String.prototype.repeat = function(num) {
    return new Array( num + 1 ).join( this );
    }
    var cont = input;

    for (var i = 1; i <= input; i++) {
        cont = cont - 1;
        console.log(" ".repeat(cont) + "#".repeat(i));
        }
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
