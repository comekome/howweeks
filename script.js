let value = document.getElementById("value")
let result_week = document.getElementById("result_weeks");
let result_day = document.getElementById("result_days");
value.addEventListener("change", () => {
    let splited_string = value.value.split('-');
    let year = splited_string[0];
    let month = splited_string[1];
    let day = splited_string[2];
    let input_date = new Date(year, month-1, day);
    let diff = (Date.now()-input_date.getTime()) / 86400000;
    result_week.innerHTML=Math.floor(diff/7);
    result_day.innerHTML=Math.floor(diff%7);
})