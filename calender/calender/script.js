let date = new Date();
let today =  date.getDate()//prompt("Enter the date", date.getDate());
let currentMonth = date.getMonth()//prompt("Enter the date", date.getMonth());
let currentYear =  date.getFullYear()//prompt("Enter the date", date.getFullYear());
let currentHour = date.getHours()//prompt("Enter the date", date.getFullYear());
let currentMinute = date.getMinutes()//prompt("Enter the date", date.getFullYear());
let currentSecond = date.getSeconds()//prompt("Enter the date", date.getFullYear());

let cal = document.querySelector("#cal");
let con = document.querySelector("#con");

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// Functions
function firstDayOfYear(yr) {// completed
    console.log("firstDayOfYear");
    yr = yr - 1;
    return weekdays[(CountLeapYearBetween(yr, 1) + yr) % 7]
}

function CountLeapYearBetween(s, e) {//completed
    console.log("CountLeapYearBetween");
    if (e > s) { let a = s; s = e; e = a }
    return Math.floor(s / 4) - Math.floor((e - 1) / 4);
}

function isLeap(year) {//completed
    console.log("isLeap");
    return (year % 4 == 0);
}

function firstDayOfMonths(year) {//completed
    console.log("firstDayOfMonths");
    let mArray = [...monthNames]
    let di = weekdays.indexOf(firstDayOfYear(year))
    let leap = isLeap(year)
    for (let i = 0; i < mArray.length; i++) {
        const e = mArray[i];
        mArray[i] = { "month": e, "firstDay": weekdays[di] }
        if (i == 1 && leap) { di++; }
        di = (di + monthDays[i]) % 7
    }
    return mArray
}

function changeDate() {  // rewrite
    currentYear = prompt("Enter Year", currentYear)
    currentMonth = prompt("Enter Month", currentMonth)
    today = prompt("Enter Date", today)
    
    let node = document.querySelector(".calendar");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    print()
}

function goToMonth() {  // rewrite
    monthCalenderGenerator(prompt("Add Year"), prompt("Add Month") - 1)
}

function nextMonth(year, month) {//olmost good
    if (month == 11) {
        monthCalenderGenerator(year + 1, 0)
    } else {
        monthCalenderGenerator(year, month + 1)
    }
}

function prevMonth(year, month) {//almost good
    if (month == 0) {
        monthCalenderGenerator(year - 1, 11)
    } else {
        monthCalenderGenerator(year, month - 1)
    }
}

// Dependent Constent
let firstDayOfCurrentMonths = firstDayOfMonths(currentYear)[currentMonth].firstDay


// Components

function monthCalenderGenerator(year, month) {
    console.log("monthCalenderGenerator");
    let fdom = firstDayOfMonths(year)[month].firstDay;
    console.log(fdom);
    let monthCalender = document.createElement("div")
    monthCalender.className = `calendar ${monthNames[month]}`
    let html = `
    <div class="month">
    <ul>
    <li class="prev">
    <button onclick="prevMonth(${year}, ${month})">❮ prev</button>
    </li>
    <li>
    <span id="month-name">${monthNames[month]}  ${year}</span><br>
    <span id="year"></span>
    </li>
    <li class="next">
    <button onclick="nextMonth(${year}, ${month})">next ❯</button>
    </li>
    </ul>
    </div>
    <ul class="weekdays"><li>Sun</li><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li></ul>
    <ul class="days">`
    let st = weekdays.indexOf(fdom)
    let daysInMonth;

    if (!isLeap(year)) {daysInMonth = monthDays[month]} 
    else {if (month == 1) {daysInMonth = monthDays[month] + 1;}
    else{daysInMonth = monthDays[month];}}

    console.log(daysInMonth);
    let date = 1;
    let nextDate = 1;
    let prevDate = monthDays[month - 1]
    if (month == 0) {
        prevDate = 31;
    }
    if (month == 2 && isLeap(year)) {
        prevDate++
    }

    for (let i = 0; i < 42; i++) {
        if (date == today && month == currentMonth && year == currentYear) {
            html += `<li class="today">${date}</li>`
            date++
        } else if (i >= st && date <= daysInMonth) {
            html += `<li>${date}</li>`
            date++;
        } else if (date > daysInMonth) {
            html += `<li class="next-date">${nextDate}</li>`;
            nextDate++;
        } else if (i < st) {
            html += `<li class="prev-date">${prevDate - st + 1}</li>`
            prevDate++
        }
        
    }
    html += `</ul>`
    
    monthCalender.innerHTML = html
    cal.appendChild(monthCalender)
}
print()
function print() {
    con.innerHTML = `<div class="nav"><h2>${today} ${monthNames[currentMonth]} ${currentYear}</h2><h2 id="time">${currentHour}:${currentMinute}:${currentSecond}</h2><label class="label">
    <div class="toggle" onclick="toggle()">
        <input class="toggle-state" type="checkbox" name="check" value="uncheck">
        <div class="indicator" ></div>
    </div>
</label></div>
    <div><button onclick="changeDate()">change date</button><p>first day of this year: ${firstDayOfYear(currentYear)}</p>
    <p>first day of this Month: ${firstDayOfCurrentMonths}</p>
    <p>Exact day of this date: ${weekdays[(weekdays.indexOf(firstDayOfCurrentMonths) + today - 1) % 7]}</p></div><button onclick="goToMonth()">Go to specific month</button>`
    monthNames.forEach(e=>{monthCalenderGenerator(currentYear,monthNames.indexOf(e))})
    // monthCalenderGenerator(currentYear, )
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark")
}

// document.querySelector("input.toggle-state").addEventListener('change',toggle())
let tg = 1;
function toggle() {
    // console.log("toggle executed");
    tg++;
    if (tg == 3) {
        console.log("tg = " + tg);
        tg = 1;
        document.body.classList.toggle("dark");
    }
}

setInterval(setTime, 1000);

function setTime() {// let ta = [date.getDate().getHours(),date.getDate().getMinutes(),date.getDate().getSeconds()];
    let date = new Date()
    let ta = [date.getHours(),date.getMinutes(),date.getSeconds()];
    document.getElementById("time").innerHTML = ta.join(":")
}