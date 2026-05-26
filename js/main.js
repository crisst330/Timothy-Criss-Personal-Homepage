// Get element by Id's for the clock card event handling attributes
const greetingText = document.getElementById("greetingText");
const timeText = document.getElementById("timeText");
const dateText = document.getElementById("dateText");
 
function updateClock() {
  const now = new Date();
  const hour = now.getHours();

  // Default greeting value (can change later)
  let greeting = "Welcome";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  greetingText.textContent = `${greeting}. Welcome to Timothy Criss Jr.'s portfolio website.`;

  timeText.textContent = `Current time: ${now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  })}`;

  dateText.textContent = `Today is ${now.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}

updateClock();
setInterval(updateClock, 1000);
