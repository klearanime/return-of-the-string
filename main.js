/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(str) {
  return exclaim = str + '!';
}

function getFirstCharacter(str) {
  return str[0];
}

function getLastCharacter(str) {
  return str[str.length-1]
}

function getOneCharacter(str, num) {
  return str[num]
}
//getOneCharacter('Crystal', 2)

function getTwoCharacters(str, num, num1) {
  return str[num] + str[num1]
}
//getTwoCharacters('Crystal', 1, 3)

function makeCapitalized(str) {
  return str.toUpperCase()
}

function yellLouder(yell) {
  return yell.toUpperCase() + '!!!'
}

function getInitials(init) {
  return init[0] + '.' + init[init.indexOf(' ')+1] + '.';
}


/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
