function cubeInt(x) {
	return x * x * x;
}

const arr = [1,2,3,4,5,6,7];

const map1 = arr.map(x => cubeInt(x));


console.log(map1);