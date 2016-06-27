//Step 1 - string array with 5 favorite movies
/*
var myMovies = ["The Empire Strikes Back", "Rebel Without A Cause", "The Crow", "The Matrix", "The Dark Knight"];
window.console.log(myMovies[1]);

//Step 2 - array with elements
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "The Crow";
movies[3] = "The Matrix";
movies[4] = "The Dark Knight";
window.console.log(movies[0]);

//Step 3 - arrayLength
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "The Matrix";
movies[5] = "The Dark Knight";
window.console.log(movies.length);

//Step 4 - delete operator
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "The Crow";
movies[3] = "The Matrix";
movies[4] = "The Dark Knight";
delete movies[0];
window.console.log(movies);

//Step 5 - for loop
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}

//Step 6 - for-in loop
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";
for (var index in movies) {
    window.console.log(movies[index]);
}

//Step 7 - for-in loop sorted
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";
for (var index in movies) {
    movies.sort();
    window.console.log(movies[index]);
}

//Step 8 - leastFavMovies
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";

var leastFavMovies = [];
leastFavMovies[0] = "Wrong Turn";
leastFavMovies[1] = "Final Destination 3D";
leastFavMovies[2] = "Divergent";

window.console.log("Movies I like:" + "\n" + " ")

for (var index in movies) {
    window.console.log(movies[index]);
}

window.console.log(" " + "\n" + " ")

window.console.log("Movies I regret watching:" + "\n" + " ")

for (var index in leastFavMovies) {
    window.console.log(leastFavMovies[index]);
}

//Step 9 - concat()
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";

var leastFavMovies = [];
leastFavMovies[0] = "Wrong Turn";
leastFavMovies[1] = "Final Destination 3D";
leastFavMovies[2] = "Divergent";

movies = movies.concat(leastFavMovies);
movies.reverse();
window.console.log(movies);

//Step 10 - return last item and display in console
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";

var leastFavMovies = [];
leastFavMovies[0] = "Wrong Turn";
leastFavMovies[1] = "Final Destination 3D";
leastFavMovies[2] = "Divergent";

movies = movies.pop();
window.console.log(movies);

//Step 11 - return first item and display in console
var movies = [];
movies[0] = "The Empire Strikes Back";
movies[1] = "Rebel Without A Cause";
movies[2] = "Predator";
movies[3] = "The Crow";
movies[4] = "Casablanca";
movies[5] = "The Matrix";
movies[6] = "The Dark Knight";

var leastFavMovies = [];
leastFavMovies[0] = "Wrong Turn";
leastFavMovies[1] = "Final Destination 3D";
leastFavMovies[2] = "Divergent";

movies = movies.shift();
window.console.log(movies);

//Step 12 - splice()
var movies = [];
movies[0] = "Wrong Turn";
movies[1] = "Final Destination 3D";
movies[2] = "Divergent";
movies.splice(0, 2, "The Empire Strikes Back", "Rebel Without A Cause", "Predator");
window.console.log(movies);

//Step 13 - Associative Arrays
var employee1 = [];
employee1["id"] = "0619";
employee1["name"] = "Bill Smith";
employee1["title"] = "Custodian";
employee1["department"] = "Maintenance";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = "0619";
employee2["name"] = "Jack Black";
employee2["title"] = "Software Engineer";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

employees = employee1.concat(employee2);
window.console.log(employee2["name"]);

//Step 14 - Associative Arrays - Loop
var employee1 = [];
employee1["id"] = "0619";
employee1["name"] = "Bill Smith";
employee1["title"] = "Custodian";
employee1["department"] = "Maintenance";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = "0619";
employee2["name"] = "Jack Black";
employee2["title"] = "Software Engineer";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

employee1 = employee1.concat(employee2);
window.console.log(employee1);
/* name.forEach(function(name) {
window.console.log(name);
}); */

/* for (var index in employees) {
window.console.log(employees[index]);
} 
*/
//Step 16 - iterate through a two-dimensional array
var movies = [
    ["The Empire Strikes Back",1], 
    ["Rebel Without A Cause",2], 
    ["The Crow",3], 
    ["The Matrix",4], 
    ["The Dark Knight",5]
];
for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i][0]);
}

