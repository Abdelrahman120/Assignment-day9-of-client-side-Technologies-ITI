let a = 1;
let b = 2;
console.log("a after "+a);
console.log("b after "+b);
[a, b] = [b, a];
console.log("a before "+a);
console.log("b before "+b);


//////////////////////////////

function MM(...arr){
    console.log("the max num is "+Math.max(...arr));
    console.log("the min num is "+Math.min(...arr));
}
MM(10,20,30,40,50,60);