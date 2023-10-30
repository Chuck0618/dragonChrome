type x
@val external x: x = "x"
@set external setOnload: (x, @this ((x, int) => unit)) => unit = "onload"
@get external resp: x => int = "response"
setOnload(x, @this ((o, v) => Js.log(resp(o) + v)))


let fun=(a)=>{Js.log(a)}
fun("hello") 


let a :int = 100
let a: int = (a+1);
let a: int = (a+2);
Js.log(a);