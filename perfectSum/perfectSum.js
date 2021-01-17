// This problem was asked by Microsoft.

// A number is considered perfect if its digits sum up to exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you should return 28.

i = 1;
n = 4;
sum = i + n;
function perfectSum(n){
    console.log('perfect sum for ' + n)
    for(i=1; sum != 10; i++){
        sum = i + n;
        console.log('testing ' + i)
            if(sum === 10){
                i = i.toString()
                n = n.toString()
                console.log(i+n)
            }
    }
}
perfectSum(8)