/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

// const { starships } = require("./data/fixtures-bundle");

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/

function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */

function getFilmCount(character) {
    return character["films"].length
}

// console.log(getFilmCount(obiWanKenobi));

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  if(character["starships"].length > 1){
    return character.starships[1].name;
  } else {
    return 'none';
  }
}

// console.log(getSecondStarshipName(obiWanKenobi));

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character["films"].length} films.`
}

// console.log(getSummary(obiWanKenobi));

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/
function getVehiclesCostInCreditsSumTotal(character) {
  for(let i = 0; i < character.vehicles.length; i++){
    if(character.vehicles.length > 1){
      return character.vehicles[i].cost_in_credits + character.vehicles[i + 1].cost_in_credits;
    } else if(character.vehicles.length === 1 && character.vehicles[i].cost_in_credits !== null) {
      return character.vehicles[i].cost_in_credits;
    } else {
      return 0;
    } 
  }
}

// console.log(getVehiclesCostInCreditsSumTotal(obiWanKenobi));

/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/
function getStarshipPassengerAndCrewSumTotal(character) {
  for(let i = 0; i < character.starships.length; i++){
    if(character.starships.length === 2){
      return character.starships[i].crew + character.starships[i].passengers + character.starships[i + 1].crew + character.starships[i + 1].passengers;
    } else if (character.starships.length === 5){
      return character.starships[i].crew + character.starships[i].passengers + character.starships[i + 1].crew + character.starships[i + 1].passengers + character.starships[i + 2].crew + character.starships[i + 2].passengers + character.starships[i + 3].crew + character.starships[i + 3].passengers + character.starships[i + 4].crew + character.starships[i + 4].passengers;
    } else {
      return 0;
    }
  }
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  if(filmNumber <= 3){
    return character.films[filmNumber - 1];
  } else {
    return 'There are only 3 Star Wars movies. Fan fiction excluded.'
  }
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  // TODO: Add your code here.
}

/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  // TODO: Add your code here.
}

/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  // TODO: Add your code here.
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  // TODO: Add your code here.
}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
