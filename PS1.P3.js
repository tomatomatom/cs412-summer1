const string1 = "supercalifragilisticexpialidocious";

function splitString(str){
	var regex = /(?=c)/g;
	var x = str.split(regex);
	
	return x;
}

function replaceString(str){
	var newChar = 'A';
	var n = str.length;
	var x = str.split('a').join(newChar);
	var letterCount = 0;
	
	for (var position = 0; position < str.length; position++){
    	if (str.charAt(position) == 'a'){
      		letterCount += 1;
      	}
  	}

	console.log('originalString: ' + str);
	console.log('modifiedString: ' + x);
	console.log('numberReplaced: ' + letterCount);
	console.log('length: ' + n);
	return 0;
}


console.log(splitString(string1));
console.log(replaceString(string1));


