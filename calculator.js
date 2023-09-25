let a, b
let operator
let ans_check = false
let dot_check = false

function display(e) {

    if (dot_check == true && e.target.value == '.') {
        return
    }
    if (result.value === "0" || ans_check == true) {
        result.value = e.target.value
        ans_check = false
        if (e.target.value == '.') {
            result.value += e.target.value
            dot_check = true
        }
    }
    else {
        result.value += e.target.value
    }
}

function backspace() {
    let text = result.value
    result.value = text.slice(0, text.length - 1)
}


function choose_operator(e) {
    a = Number(result.value)
    operator = e.target.value
    // document.getElementById('result').innerHTML += "<br>" + a + operator */herna ko lagi banalo ho /*
    
    clear()
}

function square() {
    ans = Number(result.value) * Number(result.value)
    result.value = ans
    dot_check = false
    ans_check = false
}

function square_root() {
    ans = Math.sqrt(Number(result.value))
    result.value = ans
    dot_check = false
    ans_check = false

}



function calculate() {
    b = Number(result.value)
    switch (operator) {
        case '+': {
            ans = a + b
            result.value = ans
            document.getElementById('result').innerHTML += "<br>" + b + "=" + ans
            break
        }
        case '-': {
            ans = a - b
            result.value = ans
            document.getElementById('result ').innerHTML += "<br>" + b + "= " + ans
            break
        }
        case '*': {
            ans = a * b
            result.value = ans
            document.getElementById('result').innerHTML += "<br>" + b + "=" + ans
        }
        case '/': {
            ans = a / b
            result.value = ans
            document.getElementById('result').innerHTML += "<br>" + b + "=" + ans
            break
        }
        default: {
            result.value = "ERROR"
        }
    }
    ans_check = true
    dot_check = false
}

function clear() {
    result.value = "0"
    dot_check = false
}
// for displaying
let result = document.getElementById("display")

let btn_clear = document.getElementById('clear')
let btn_equals = document.getElementById('equals')
// numbers
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn0 = document.getElementById('btn0')
let btn_dot = document.getElementById('btn_dot')
let btn_square = document.getElementById('sq')
let btn_sqrt = document.getElementById('sqrt')


// operators
let btn_plus = document.getElementById("plus")
let btn_backspace = document.getElementById("backspace")
let btn_product = document.getElementById('multiply')
let btn_divide = document.getElementById('divide')
let btn_minus = document.getElementById('subtract')


btn7.addEventListener('click', display)
btn8.addEventListener('click', display)
btn9.addEventListener('click', display)
btn1.addEventListener('click', display)
btn2.addEventListener('click', display)
btn3.addEventListener('click', display)
btn4.addEventListener('click', display)
btn5.addEventListener('click', display)
btn6.addEventListener('click', display)
btn0.addEventListener('click', display)
btn_clear.addEventListener('click', clear)



btn_plus.addEventListener('click', choose_operator)
btn_minus.addEventListener('click', choose_operator)
btn_divide.addEventListener('click', choose_operator)
btn_product.addEventListener('click', choose_operator)
btn_equals.addEventListener('click', calculate)
btn_backspace.addEventListener('click', backspace)
btn_square.addEventListener('click', square)
btn_sqrt.addEventListener('click', square_root)

btn_dot.addEventListener('click', display)
