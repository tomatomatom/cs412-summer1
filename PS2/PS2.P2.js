var str = 'All I know is something like a bird within her sang';

var word = '', result = []

for (const char of str) {
  word = char == ' ' ? (result.push(word), "") : (word + char);
}

result.push(word);

for (var i = 0; i < result.length; ++i) {
	console.log(result[i]);
}
