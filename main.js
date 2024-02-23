let ageDay = document.getElementById("ad");
let ageHour = document.getElementById("ah");
let ageSecond = document.getElementById("as");
let inputAge = document.getElementById("age-input");
let btnAge = document.getElementById("btn");

function MyAge() {
    if (inputAge != "" && inputAge.value != 0){
            let byDays = inputAge.value * 356
            ageDay.innerHTML = byDays;
            let byHour = byDays * 24;
            ageHour.innerHTML = byHour;
            let bySecond = byHour * 60;
            ageSecond.innerHTML = bySecond;
    } else {
            ageDay.innerHTML = "----";
            ageHour.innerHTML = "----";
            ageSecond.innerHTML = "----";
    }
}

btnAge.addEventListener("click", ()=> {
    MyAge();
})

