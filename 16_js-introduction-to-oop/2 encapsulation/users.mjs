import makeUser from "./user.mjs";

const getMutualFriends = (user1, user2) => {
  const user1Ids = user1.getFriends().map((e) => e.id);
  const commonFriends = user2
    .getFriends()
    .filter((e) => user1Ids.includes(e.id));
  return commonFriends;
};

const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // общий друг
  ],
});

const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }),
  ],
});

console.log("User 1");
user1.info();
console.log();
console.log("User 2");
user2.info();
console.log();
console.log("Common friends");
console.log(getMutualFriends(user1, user2)); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ] - массив состоящий из одного пользователя, общего друга
