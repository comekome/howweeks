let value = document.getElementById("value")
let result_week = document.getElementById("result_weeks");
let result_day = document.getElementById("result_days");
value.addEventListener("change", () => {
    let input_string = value.value;
    console.log(input_string);
    let splited_string = input_string.split('-');
    let year = splited_string[0];
    let month = splited_string[1];
    let day = splited_string[2];
    console.log(year);
    console.log(month);
    console.log(day);
    let input_date = new Date(year, month-1, day);
    console.log(input_date);
    let diff = (input_date.getTime() - Date.now()) / 86400000;
    result_week.innerHTML=Math.floor(diff/7);
    result_day.innerHTML=Math.ceil(diff%7);
})