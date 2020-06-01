const string1 = "supercalifragilisticexpialidocious";

function alphabeticalOrder(str){
	var x = str.split("");
	return x.sort().join("");
}

console.log(alphabeticalOrder(string1));