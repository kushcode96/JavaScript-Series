let feet = document.getElementById("feet");
let inch = document.getElementById("inch");


feet.addEventListener('input', function () {
    let f = this.value;
    let i = f * 12;
    inch.value = i;
});
inch.addEventListener('input', function () {
    let i = this.value;
    let f = i / 12;
    feet.value = f;
});

// feet.addEventListener('input',(e)=>{
//      let f = e.target.value;
//      let i = f * 12;
//     inch.value = i ;
// });