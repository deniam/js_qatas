function cupAndBalls(b, arr){
    let a = b;
    arr.map((array, index) => {
        if (array[0] == a) {
            a = array[1];
        } else if (array[1]== a) {
            a = array[0];
        }
    });
    return a;
};

b = 2;
arr = [[1,3],[1,2],[2,1],[2,3]];
const result = cupAndBalls(b, arr);
console.log(result);
