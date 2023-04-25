const endpoint = {
    firstDay: "Mon",
    isLeap: "false"
  };
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const calendar = document.querySelector(".calendar");
  const monthName = document.querySelector("#month-name");
  const year = document.querySelector("#year");
  const weekdaysList = document.querySelector(".weekdays");
  const daysList = document.querySelector(".days");
  
  let date = new Date();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  let today = date.getDate();
  
  function initCalendar() {
    setMonthYear(currentMonth, currentYear);
    setWeekdays();
    setDays(currentMonth, currentYear);
  }
  
  function setMonthYear(month, year) {
    monthName.textContent = monthNames[month];
    year.textContent = year;
  }
  
  function setWeekdays() {
    for (let i = 0; i < weekdays.length; i++) {
      const weekday = weekdays[i];
      const li = document.createElement("li");
      li.textContent = weekday;
      weekdaysList.appendChild(li);
    }
  }
  function setDays(month, year) {
    daysList.innerHTML = "";
  
    const firstDay = getFirstDayOfMonth(month, year);
    const daysInMonth = getDaysInMonth(month, year);
    const daysInPrevMonth = getDaysInMonth(month - 1, year);
    const lastDayPrevMonth = daysInPrevMonth - firstDay + 1;
  
    let dayCounter = 1;
    let prevMonthCounter = lastDayPrevMonth;
    let nextMonthCounter = 1;
  
    for (let i = 0; i < 6 * 7; i++) {
      const li = document.createElement("li");
      if (i < firstDay) {
        li.classList.add("prev-date");
        li.textContent = prevMonthCounter++;
      } else if (dayCounter <= daysInMonth) {
        li.textContent = dayCounter++;
        if (currentMonth === month && currentYear === year && today === dayCounter - 1) {
          li.classList.add("today");
        }
      } else {
        li.classList.add("next-date");
        li.textContent = nextMonthCounter++;
      }
      daysList.appendChild(li);
    }
  }
  
  function getFirstDayOfMonth(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    if (endpoint.firstDay === "Mon") {
      return (firstDay === 0) ? 6 : firstDay - 1;
    } else {
      return firstDay;
    }
  }
  
  function getDaysInMonth(month, year) {
    if (month === 1 && endpoint.isLeap === "true") {
      return 29;
    } else {
      return new Date(year, month + 1, 0).getDate();
    }
  }
  
  initCalendar();
    