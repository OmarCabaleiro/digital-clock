function digitalClock() {
  let dateFunction = new Date()
  let day = dateFunction.getDay()
  let hours = dateFunction.getHours()
  let minutes = dateFunction.getMinutes()
  let seconds = dateFunction.getSeconds()
  let timeFormat = 'AM'

  timeFormat = hours >= 12 ? 'PM' : 'AM'
  hours = hours == 0 ? 12 : hours
  hours = hours > 12 ? hours - 12 : hours
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  document.querySelector('.hours').innerHTML = hours
  document.querySelector('.minutes').innerHTML = minutes
  document.querySelector('.seconds').innerHTML = seconds
  document.querySelector('.format').innerHTML = timeFormat

  let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
  todaysDay.classList.add('active')
}

setInterval(digitalClock, 1000)

let date = document.getElementById("date")

function showDate() {
  let now = new Date()

  let dayMonth = now.getDate()
  let month = now.getMonth() + 1
  let year = now.getFullYear()

    if(dayMonth < 10) {
    dayMonth = "0" + dayMonth
  }

  if(month < 10) {
    month = "0" + month
  }

  let currentDate = year + " / " + month + " / " + dayMonth

  date.textContent = currentDate
}

setInterval(showDate, 1000)
showDate()