function digitalClock() {
  const newDate = new Date();

  let hours = newDate.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  const hrs = hours < 10 ? "0" + hours : hours;

  let min = newDate.getMinutes();
  min = min < 10 ? "0" + min : min;

  let sec = newDate.getSeconds();
  sec = sec < 10 ? "0" + sec : sec;

  currentTime = `${hrs} : ${min} : ${sec}`;

  document.querySelector("#Digital_Clock").innerHTML = currentTime;

  return currentTime;
}

setTimeout(() => {
  console.log(digitalClock());
}, 1000);

const timer = setInterval(() => {
  console.log(digitalClock());
}, 1000);

digitalClock();

// clearInterval(timer);
