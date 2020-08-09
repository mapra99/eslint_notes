let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// before es6
let allTeam = [];
team1.forEach(function (teamMember) {allTeam.push(teamMember)});
team2.forEach(function (teamMember) {allTeam.push(teamMember)});
console.log(allTeam);

// es6
let allTeam2 = [...team1, ...team2];
console.log(allTeam2);
