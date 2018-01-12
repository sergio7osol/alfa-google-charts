const arrValSum = (arr) => {
    let sum = arr.reduce(function(accu, v){
        return accu += v;
    });
    return sum;
};

export default arrValSum;