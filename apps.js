slowMath.add(1,1).then(function(result){
    console.log(result);
    slowMath.multiply(result,2).then(function(result){
        console.log(result);
        slowMath.divide(result,4).then(function(result){
            console.log(result);
            slowMath.subtract(result,3).then(function(result){
                console.log(result);
                slowMath.add(result,98).then(function(result){
                    console.log(result);
                    slowMath.remainder(result,2).then(function(result){
                        console.log(result);
                        slowMath.multiply(result,50).then(function(result){
                            console.log(result);
                            slowMath.remainder(result,40).then(function(result){
                                console.log(result);
                                slowMath.add(result,32).then(function(result){
                                    console.log("The final result is " + result);
                                }).catch(handleError)

                            }).catch(handleError)

                        }).catch(handleError)

                    }).catch(handleError)

                }).catch(handleError)

            }).catch(handleError)

        }).catch(handleError)

    }).catch(handleError)

}).catch(handleError)


function handleError(e){
    console.log(e);
}