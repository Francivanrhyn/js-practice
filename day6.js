/* 
number: 0 
count:0
	while the number is not zero
		add the number to the running total
		add one increment to the increment
	set the average to the new number divided by the new count
if the average is greater than or equal to 2
	print "Passed"
else 
	print "Failed"

	*/
function average(numbers_list) {
		 var numberArray=numbers_list;
		 var thisTotal=0;
		 var thisAverage = 0;
		// add elements of array together
		 for(var i=0;i<numberArray.length;i++)
		  {thisTotal+=numberArray[i];}
		// calculate average
		 thisAverage=(thisTotal/numberArray.length);
		// display result
		// if (thisAverage>=1) {
		//  return("passed")
		// }
		// else{
		// 	return("failed")
		return thisAverage;
}
		


/*
loop through array of numbers
for each number
	if it is greater than or equal to 50 
	 	print "Passed!"
	else
		print "Failed!"
	
	if it is a value equal to 50 or between 50 and 60
		print "F"
	else if it is a value equal to 60 or between 60 and 70
		print "D"
	else if it is a value equal to 70 or between 70 and 80
		print "C"
	else if it is a value equal to 80 or between 80 and 90
		print "B"
	else ,it is a value equal to 90 or between 90 and 100
		print "A"

*/
function assignGrade(grade) {
		var assignGrade = grade ;
		    if (60>assignGrade) {
		       return("F");
		    } 
		    else if(70>assignGrade>=60){
		       return("D");
		    }
		    else if (80>assignGrade>=70) {
		    	return("C");
		    }
		    else if (90>assignGrade>=80) {
		    	return("B");
		    }
		    else (100>=assignGrade>=90)
		    	return("A");
		    
}


/*
for a value with word variable with a number and word
	if the number is greater than 1
		print word plus "s"
	else if the number is equal to 11 
		print word
	else
		print nothing
*/

function pluralize(num, noun) {
	if (num>1){
		return (num+" "+noun+"s")
	}
	else{
		return (num+" "+noun)
	}
}


/* 
using the splt method, split the ojects in the array into sub arrays
(which wil output an array of separated words)
define a variable that will hold the length of the longest word
Create the FOR loop
If strSplit[i].length is greater than the word it is compared with, then longestWord takes this new value
Return the longest word
*/

function longestWord(sentence) {
		  var strSplit = sentence.split(' ');
		  var longestWord = "";
		  var wordLength = 0;
		  for(var i = 0; i < strSplit.length; i++){
		    if(strSplit[i].length > wordLength){
			longestWord = strSplit[i];
			wordLength= strSplit[i].length;
		     }
		  }
		  return longestWord;
}
		


/*
Change the word into lower case and remove  all non-alphanumeric characters
Reverse removeChar for comparison
Check to see if word is a Palindrome by equating the reverse to the original word 
	if equal
		print "yes"
	else
		print "no"
*/
function palindrome(word) {

		var removeChar = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();
		var checkPalindrome = removeChar.split('').reverse().join('');
		if(removeChar === checkPalindrome){
		  return("yes");
		}
		else{
		
		  return("no");
		}

}

/*
set all characters to lowercase, remove special charaters
set the var counter to zero
loop through characters
	if character is desired input letter
		add an increment to counter
	(else move to next character)
print counter 
*/

function letterCounter(phrase, letter) {
		var counter = 0;
		
		for (var i = 0; i < phrase.length; i++) {
			if (phrase[i] === letter) {
	    			counter++;
	    		}
	}
		return counter;


}

/*
call longest word
	test to see if it is a palindrome
		if it is a palindrome
			return word+"is a palindrome"
		else
			return word+"is not a palindrome"
*/

function longestPalindrome(sentence) {
		  var longest = longestWord(sentence);
		  if (palindrome(longest)==="yes"){
		  	return(longest+" "+"is a palindrome")
		  }
		  else{
		  	return(longest+" "+"is not a palindrome")
		  }


}

/*
loop through string
	if character is numerical
		multiply by two
	else if character is a word
		repeat word twice
	else
		(do nothing)
*/
function doItTwice(f) {

}

/*
for array
	if first is called
	return first name input
	else if last is called
		return last name input
	else if age is called
		return age input
	else if email is called
		return email input
	else color is called
	return color input
*/
function objectFun(first, last, age, email, color) {
	
}



/*
	for the variable children of testObj
		count number of children var
		return count
*/
function numChildren(obj) {
	
}

/*
*/
function greeting(name) {
	
}

/*
*/
function sayHello(first, last, greet) {

}

/*
*/
function goodnight(name) {

}

/*
*/
function sayGoodnight(name, status, message) {

}
