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