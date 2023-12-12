const os = require('os');

function getGreeting() {
  const currentHour = new Date().getHours();
  const userName = os.userInfo().username;

  switch (true) {
    case currentHour < 12:
      return `Good morning, ${userName}`;
    case currentHour < 18:
      return `Good afternoon, ${userName}`;
    default:
      return `Good evening, ${userName}`;
  }
}

module.exports = getGreeting;
