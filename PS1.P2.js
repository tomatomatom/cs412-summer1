const string1 = '4+2';
const string2 = '5*7';
const string3 = '6-1';
const string4 = '9/2';

function operator(fn) {
  return new Function('return ' + fn)();
}

console.log(string1 + '=' + operator(string1));

console.log(string2 + '=' + operator(string2));

console.log(string3 + '=' + operator(string3));

console.log(string4 + '=' + operator(string4));
