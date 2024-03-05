function age(n){
    if(n>0){
        if(n<13)
            console.log("Kid");
        else if(n>19)
            console.log("Adult");
        else
            console.log("Teen")
    }
    else
        console.log("Invalid Age");
}
let num = age(19);
let n = age(20);
let a=age(12);

