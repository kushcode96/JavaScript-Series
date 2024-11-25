let input = document.getElementById("inputbox");
let button = document.querySelectorAll("button");


let btn = Array.from(button);

let str = '';
btn.forEach(function (val) {
    val.addEventListener("click", (e) => {

        if (e.target.innerText == "AC") {
            str = '';
            input.value = str;
        } else if (e.target.innerText == "DEL") {
            str = str.substring(0, str.length - 1);
            input.value = str;
        } else if (e.target.innerText == "=") {
            str = eval(str);
            input.value = str;
        }
        else {
            str += e.target.innerText;
            input.value = str;
        }

    })
})