//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var divisor = 2;
var input = 600851475143;

while (input != divisor)
{
	if (input % divisor == 0)
	input = input/divisor;
else
	divisor++;
}

console.log(divisor)