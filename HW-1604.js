/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - Yonodeu can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = 'string'

console.log(test);


/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

diffErence = 20 - 10
let sum = diffErence

console.log(sum);


/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

function randomInt020(min, max) {  
  let numGen = (Math.floor(Math.random() * (max - min + 1) + min));
  return numGen;
}

let ranDom = randomInt020(1,20);

console.log(ranDom);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
  name: 'Shakira',
  surname: 'Martin',
  age: '27',
};

console.log(me);

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age;

console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["JavaScript", "NodeJS", "Git", "GitHub"];

console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

delete me.skills.pop()

console.log(me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice(min, max) {  
  let numGen = (Math.floor(Math.random() * (max - min + 1) + min));
  return numGen;
}

let ranInt = dice(1,6);

console.log(ranInt);

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

let n1 = 9
let n2 = 8

const biggerN = function whoseBigger(n1,n2) {
  let whoB = n1 - n2
  if (whoB < 0) {
    let result = n2
    return result
  } else { 
    let result = n1
    return result
  }
}; 
console.log(biggerN(n1,n2))

let whoIsBigger = biggerN(n1,n2)

console.log(whoIsBigger);



/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let inputString = 'hello my name is kiara'
const space = ' '; 

function splitMe(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)
  return arrayOfStrings
};

let splitString = splitMe(inputString, space)

console.log(splitString);

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, otherwise it should 
    remove the last one from it.
*/

let booU = true
let stringU = 'kiara';

function deleteOne(booU, stringU) {
  let x = (stringU.length)
  let u = x + 1
  let y = x - 1
  if (booU === true) {
    let add = stringU.slice(1,u)
    return add
  } else if (booU === false) { 
    let remove = stringU.slice(0,y)
    return remove
  }else {
    return (3<2)
  }
}; 

console.log(deleteOne(booU,stringU))

let newString = deleteOne(booU,stringU)

console.log(newString);

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
let inputString5 = 'I am 5 years old';

function onlyLetters(numbersAndLetters){
  let byeNumber = numbersAndLetters.replace(/\d+/g, '')
  return byeNumber};

  console.log(onlyLetters(inputString5))

let noNumbers = onlyLetters(inputString5);

console.log(noNumbers)


/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

let inputString6 = 'sm880@kent.ac.uk';

function isThisEmail(checkEmail){
  let emailOrNo = checkEmail.includes('@');
  return emailOrNo};

  console.log(isThisEmail(inputString6))

let emAdd = isThisEmail(inputString6);

console.log('This Is An Email Address:', emAdd)

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const today = new Date()
const day = today.getDay()
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Todays Date:', today, 'Day of Week:', day,);

function whatDayIsIt (checkDay){
  let x = day
  let tellDay = dayArray[x]
  return tellDay
};

console.log('What day is it today?', whatDayIsIt());

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/ 

let counter = 0
let inputNum = 2
let outputNum = 0;
let diceRollArray = []

function rollTheDices (inputNum){
  while(counter < inputNum){
    let diceRoll = dice(1,6)

    console.log(diceRoll) 

    diceRollArray.push(diceRoll);

    outputNum = outputNum + diceRoll;

    counter = counter + 1;
}
}

let sum8 = rollTheDices(inputNum)

console.log(diceRollArray, 'Total Sum:', outputNum);


/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

let dayInp9 = 18
let monthInp9 = 4
let yearInp9 = 1994

const monthInpOut9 = monthInp9 -1
const time9 = [03, 03, 03]
const miliConv = 86400000
const inpDate = new Date((yearInp9), (monthInpOut9), (dayInp9), time9[0], time9[1], time9[2])
const today9 = Date.now()
let pastDay = Date.UTC((yearInp9), (monthInpOut9), (dayInp9), time9[0], time9[1], time9[2]);

const utcDiff = (today9 - pastDay)

console.log('Birthday UTC:', pastDay, "Today's Date UTC:", today9);
console.log(utcDiff);


function howManyDays (dayGen){
  if (dayGen >= 0) {
      let numberOfDays = utcDiff / miliConv
      return numberOfDays
    } else {
      return 0
  }
}

const howManyDaysSince = howManyDays(utcDiff)
const howManyDaysSinceX = Math.floor(howManyDaysSince)

console.log('It has been', ' ', howManyDaysSinceX, ' ', 'since', inpDate);



/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.

let date = a 
let month = b -1
let year = c -1;*/

let dayInp = 18
let monthInp = 4
const monthInpOut = monthInp -1
let yearInp = 1994
const time = [03, 03, 03]

const today10 = new Date()
let birthDay = new Date((yearInp), (monthInpOut), (dayInp), time[0], time[1], time[2])



console.log('Birthday:', birthDay, "Today's Date:", today10);

let birthDayArray = [birthDay.getFullYear(), (birthDay.getMonth()+1), birthDay.getDate()]
let today10Array = [today10.getFullYear(), (today10.getMonth()+1), today10.getDate()];


console.log(birthDayArray, today10Array)

function isTodayMyBirthday (checkMonth, checkDate){
 
  let checkMonthValid = (birthDayArray[1] === today10Array[1])
  let checkDateValid = (birthDayArray[2] === today10Array[2]);

  console.log(checkMonthValid, checkDateValid);

  if ((checkMonthValid && checkDateValid) === true){
    let itsMyBirthday = true
    return itsMyBirthday
  } else {
    let itsMyBirthday = false 
    return itsMyBirthday
  }
  
};

let myBirthdayToday = isTodayMyBirthday()

console.log('My birthday is today:', myBirthdayToday);


// JS Arrays // Objs
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

let a = me
let b = 'name';


function deleteProp (objectA, stringB) {

  const doesPropertyExist = objectA.hasOwnProperty(stringB)

    if (doesPropertyExist === true) {
      delete objectA[stringB] 
      let newObj = objectA
      return newObj
    } else {
      return 'This property does not exist'
    }
}

let outPutObj = deleteProp (a, b)

console.log('New Object', outPutObj)


/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

let yearArray = [] ;

function olderMovie (movie12) {
  for(let x=0; x<movie12.length; x++){
    let yearOut = movie12[x].Year
    yearArray.push(yearOut)}

    let oldestYear = yearArray.sort()
    return yearArray

}


let movieYear = olderMovie(movies)

console.log(movieYear)

let oldestMovie = yearArray[0] 

console.log(oldestMovie)

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

function countMovies (movie13){
  let numberOfMovies = movie13.length
  return numberOfMovies
}

let movieInd = countMovies(movies)

console.log(movieInd)

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

let titleArray = [] ;

function onlyTheTitles (movie14) {
  for(let x=0; x<movie14.length; x++){
    let titleOut = movie14[x].Title
    titleArray.push(titleOut)}

    let titlesOnly = titleArray.sort()
    return titlesOnly

}


let movieTitles = onlyTheTitles(movies)

console.log(movieTitles)



/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
const millenArray = []

function onlyInThisMillennium (movie15) {

  

  for (v=0; v<movie15.length; v++) {

    const eachMovie = movie15[v]
    let yearOut = eachMovie.Year
    


    if (yearOut.includes('2') === true){
      
      millenArray.push(eachMovie)
      
    } 
  }
}

let thisMillennium = onlyInThisMillennium(movies)
console.log(millenArray)


/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

let givenID = "tt0120737"




function getMovieById (givenID, movie16) {
  

  for (d=0; d<movie16.length; d++) {

    const eachMovie = movie16[d]
    let movID = eachMovie.imdbID
    


    if (movID.includes(givenID) === true){
      
      console.log(eachMovie)
      
    } 
  }
}

let selectedMovieID = getMovieById (givenID, movies)



/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

let res = yearArray.reduce(function(prev, curr){
  return (Number(prev) || 0) + (Number(curr) || 0);
});

console.log(res); // prints 45

// let totalSum = function sumAllTheYears (movies) {
//   let sumYear = 0

//   for (f=0; f<movie17.length; f++) {

//     const selectedYear = movie17[f]
//     let getYear = selectedYear.year

//     console.log(getYear)

//     let numberYear = parseInt(getYear)

//     console.log(numberYear)

//     sumYear = (+numberYear)
//   }

//   return sumYear
// }

// console.log(sumYear)
// let totalSum = sumAllTheYears(movies)

// let yearNumArray = []

// function sumAllTheYears (arrayOfYears) {
  
//   arrayOfYears.forEach(parseInt())
//     let yearNum = element.parseInt()

//     yearNumArray.push(yearNum)
    
//   });

//   console.log(yearNumArray)

//   function getSum(total, num) {
//     return total + Math.round(num);
//   }


//   let sumofYears = yearNumArray.reduce(getSum, 0);

//   console.log(sumofYears)
// }

// let yearSum = sumAllTheYears(yearArray)


/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

let givenTitle = "The"




function searchByTitle (givenTitle, movie19) {
  

  for (y=0; y<movie19.length; y++) {

    const eachTitle = movie19[y]
    let movTitle = eachTitle.Title
    


    if (movTitle.includes(givenTitle) === true){
      
      console.log(eachTitle)
      
    } 
  }
}

let selectedMovieTitle= searchByTitle (givenTitle, movies)

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/


let givenTitle2 = "The"

let match = []
let unmatch = []


function searchByTitle2 (givenTitle2, movie19) {
  

  for (y=0; y<movie19.length; y++) {

    const eachTitle2 = movie19[y]
    let movTitle2 = eachTitle2.Title
    


    if (movTitle2.includes(givenTitle2) === true){
      
      match.push(eachTitle2)
      
    } else {

      unmatch.push(eachTitle2)

    }
  }
}

let selectedMovieTitle2= searchByTitle2 (givenTitle2, movies)
console.log('Movies that match', unmatch)
console.log('Movies that dont match', match)


/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
let excludingArray = []

function removeIndex (givenID, movie20) {
  

  for (d=0; d<movie20.length; d++) {

    const eachMovie = movie20[d]
    let movID = eachMovie.imdbID
    


    if (movID.includes(givenID) === false){
      
      excludingArray.push(eachMovie)
      
    } 
  }
}

let withoutIndex = removeIndex (givenID, movies)

console.log(excludingArray)

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */

 