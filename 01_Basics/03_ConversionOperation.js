let score = "33AVB"
console.log(typeof score);
console.log(typeof (score));

let valueInNumer = Number(score)
console.log(typeof valueInNumer);
console.log(valueInNumer)


//Notes

//"33" => 33
//"33abc" => Nan
//true => 1; false => 0
//null => 0
//undefined =>Nan
//"Pratamesh" => Nan

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 0=> false
//"" =>false
//"hitesh" => true

//*************************  Operations  ******************************************************

console.log("1"+2)              //12
console.log(1+"2")              //12
console.log("1"+2+2)            //122
console.log(1+2+"2")            //32
console.log(1+2+"2"+4)          //324
console.log(+true)              //1
console.log(+"")                //0

let gameCounter =100
++gameCounter;
console.log(gameCounter);