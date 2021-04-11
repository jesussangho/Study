var members = ["sangho", "jesus", "church"];
console.log(members[1]); // jesus
var i = 0;
while (i < members.length) {
    console.log("array loop", members[i]);
    i = i + 1;
}

var roles = {
    programmer: "sangho",
    god: "jesus",
    building: "church",
};
console.log(roles.god); // jesus
console.log(roles["god"]); // jesus

for (var i in roles) {
    console.log("object", i, "value => ", roles[i]);
}
