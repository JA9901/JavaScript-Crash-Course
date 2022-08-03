let users = [
  {
    userName: "David",
    email: "david@frontendsimplified.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "David Bragg#0001",
    lessonsCompleted: [0, 1],
  },
  {
    userName: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri Bragg#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    userName: "Zen",
    email: "zen@frontendsimplified.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri Bragg#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("thisemaildoesnotexist@frontendsimplified.com", "wrong password");

function register(user) {
  users.push(user)
}
register({
  username: "zen",
  email: "zen@frontendsimplified.com",
  password: "zen123",
  subscriptionStatus: "VIP",
  discordId: "Zen#0002",
  lessonsCompleted: [0, 1]
});

console.log(users);
