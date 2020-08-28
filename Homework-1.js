//fakeJoin

let myName = ['Tigran', 'Martirosyan', 'Grigori'];


let fakeJoin = (arr, separator = " ") => {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result += separator;
    }
    result += arr[i];
  }
  return result;
};

console.log(fakeJoin(myName, ' '));

//reverse-------------------->

function reverseArr(inputAr) {
    let ret = new Array;
    for(let i = inputAr.length-1; i >= 0; i--) {
        ret.push(inputAr[i]);
    }
    return ret;
}

let a = [9,8,7,6,5,4,3]
let b = reverseArr(a);
console.log(b);

//indexOf--------------------->


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
function ownIndex (arr, creature) {

  for(let i = 0; i<arr.length;i++){
    if(arr[i] === creature){
      return i;
    }
    return -1;
  }

}
console.log(ownIndex(beasts, 'bison'));

//lastIndex------------------->

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
function lastIndex (arr, creature, index = 0) {

  for(let i = arr.length - index - 1; i>= 0;i--){
    if(arr[i] === creature){
      return i;
    }
    
    }
    return -1;
  }


console.log(lastIndex(beasts, 'bison'));


//concat------------------------>

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function myConcat( arr1, arr2) {
  let n = new Array;
  for (let i = 0; i<arr1.length; i++){
    n.push(arr1[i]);
  }
  for (let j = 0; j<arr2.length; j++){
    n.push(arr2[j]);
  }
  return n;
}
console.log(myConcat(letters, numbers));

//slice---------------------->
//something's not right, I haven't found it yet :)

let a = [1, 2, 3, 4, 5];

function myFill(arr,n,start = 0, end = 0  ) {

 for (let i = 0 + start; i< arr.length  - end; i++ ){
   arr.push[n];
 }
 return n;
}
console.log(myFill(a,0,2,4));


// hoisting ------------------------------------>
function hsvtorgb, format;

hsvtorgb = function(h, s, v) {
  h,s,v; //global
  var i,f,p,q,t;
	if (s == 0)
		return format(v, v, v);

	h = ((h + 360) % 360) / 60;

	var i = Math.floor(h); //returns largest int value
	var f = h - i;
	var p = v * (1 - s);
	var q = v * (1 - s * f);
	var t = v * (1 - s * (1 - f));

	function format(r, g, b) {
    r,g,b //global
		return "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
	}

	switch(i) {
	case 0:
		r = v; g = t; b = p;
		break;

	case 1:
		r = q; g = v; b = p;
		break;

	case 2:
		r = p; g = v; b = t;
		break;

	case 3:
		r = p; g = q; b = v;
		break;

	case 4:
		r = t; g = p; b = v;
		break;

	default:
		r = v; g = p; b = q;
	}

	return format(r, g, b);
};

