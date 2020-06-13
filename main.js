var number = document.getElementsByClassName('n');
var operator = document.getElementsByClassName('operator');
var clear = document.getElementById('clear');
var erase = document.getElementById('erase');


for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        var num = getOutput();
        if (num != NaN) {
            num = num + this.id;
            printOutput(num);
        }

    })
}


for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        var output = getOutput();
        var history = getHistory();
        if (output == "") {
            if (this.id == '-') {
                printOutput('-');
            }

        }
        if (output == "" && history != "") {
            if (isNaN(history[history.length - 1])) {
                history = history.substr(0, history.length - 1);
            }
        }
        if (output != '' || history != '') {
            history = history + output;
            if (this.id == '=') {
                var compute = eval(history);
                printOutput(compute);
                printHistory('');
            } else {
                history = history + this.id;
                printHistory(history);
                printOutput('');
            }
        }



    })
}

//to clear all input
clear.addEventListener('click', function() {
    printOutput('');
    printHistory('');
})

//to erase input
erase.addEventListener('click', function() {
    var x = getOutput();
    x = x.substring(0, x.length - 1);
    printOutput(x);
})

//to display output
printOutput = (a) => {
    document.getElementById('output_text').innerText = a;
}

//to display history
printHistory = (a) => {
    document.getElementById('history_text').innerText = a;
}

//getting output text
getOutput = () => {
    return document.getElementById('output_text').innerText;
}

//getting History text
getHistory = () => {
    return document.getElementById('history_text').innerText;
}