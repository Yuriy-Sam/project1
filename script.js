"use sctrict"
// let number = 5;
// const leftBorderWidth = 1;


// number = 10;

// console.log(number);
// const persone = "Alex";
// const obj = {
//     name: "john",
//     age: 25,

// }
// console.log(obj.name);
// alert ("Hello");
// const result = confirm("Are you here?");
// console.log(result);
// const answer = +prompt("Сколько вам лет?", "10");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("Ваше имя?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers));

// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

}



// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
    
}

// rememberMyFilms();




function detectPersonaLevel() {
    if (personalMovieDB.count <10) {
        alert ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert ("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert ("Вы киноман");
    } else {
        alert ("Произошла ошибка");
    }
    
}

// detectPersonaLevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log("ошибка");
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}


writeYourGenres();

// console.log(personalMovieDB);