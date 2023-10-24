Console.log("Hello, World!")

Js.log("hello Rescript")


let a:string = "hello"
let b:int = 4234;
let c:float = 4.2;

let d= c +. 1.2
let d = "newd"
Js.log("b: int")
Js.log(Js.typeof(b))
let cond = ref(true)
Js.log(cond);
Js.log(Js.typeof(d));
cond.contents = false ;

cond:= true;
module Int = {
   let add= (a,b)=>{a + b}
   let minus = (a,b) =>{a -b }
    // Module contents
}

let cc=Js.log(Int.add(1,2));
// Js.log(Js.typeof(Int));
Js.log(cc)