// 계산식 나타내기

var display = document.getElementById("display");
var result = document.getElementById("result");
var numberCheck = false;
var numZero = true;


function add(num) {
// 문자열 방지
    if (numberCheck == false) {
        if (isNaN(num) == true) {

        } else {
            document.getElementById("display").value += num;
        }
    } else {
        document.getElementById("display").value += num;
    }

    if (isNaN(num) == true) {
        numberCheck = false;
    } else {
        numberCheck = true;
    }
}

// 입력받은 식 계산하여 출력하기

function calculate() {
    var resultCal = eval(display.value);
    result.value = resultCal;
    display.value = resultCal;
}

// 값 하나씩 지우기

function remove() {
    display.value = display.value.substring(0,display.value.length-1);
}

// AC 값 초기화하기

function reset() {
    document.getElementById("display").value = "";
    document.getElementById("result").value = "";
}









