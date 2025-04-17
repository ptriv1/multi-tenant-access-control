const bcrypt = require('bcrypt');

const logins = [
  {
    "username": "amandajonson",
    "password": "$2b$10$RB/cSehL2ovtPQXxQTy1JOF8H2DoOsXAsv4Ih5FOgkeYBTVy9Ip9m"
  },
  {
    "username": "bobvenders",
    "password": "$2b$10$on571Jsv2l5tjq93uaB0XOn/CcSZZjkK5vNacRee0WTXlhO9ulyLq"
  }
]


const saltRounds = 10;

async function hashPasswords(users) {
  const hashedUsers = [];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    hashedUsers.push({
      username: user.username,
      password: hashedPassword
    });
  }

  console.log(JSON.stringify(hashedUsers, null, 2));
}

hashPasswords(logins);
