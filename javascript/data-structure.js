/* Array practice */
No.1
function Grades() {
	this.point = 0;
	this.num = 0;
	this.averagePoint = averagePoint;
	this.addPoint = addPoint;
}

function averagePoint() {
	return this.point / this.num;
}

function addPoint(point) {
	this.num ++;
	this.point += point;
}


No.2
/* 排序sort */
var words = ["apple", "orange", "banana"];
words.sort();
words.reverse();

var nums = [1,2,3,4,5,6]
nums.sort(positiveOrder);
nums.sort(reverseOrder);
function positiveOrder(a, b) {
	return a - b;
}
function reverseOrder(a, b) {
	return b - a;
}

/* Stack 进制转换 */
No.3
function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num%base);
		num = Math.floor(num/base);
	} while (num > 0);
	var converted = "";
	do {
     	converted += s.pop();
	} while(s.length > 0);
	return converted;
}

