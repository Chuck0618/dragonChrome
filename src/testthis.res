
let fun=(a)=>{Js.log(a)}
fun("hello") 


let a :int = 100
let a: int = (a+1);
let a: int = (a+2);
Js.log(a);

type person = {
  age: int,
  name?: string,
}

let me = {
  age: 123,
  name: "ReScript",
}

let isRescript = switch me.name {
| Some("ReScript") => true
| Some(_) | None => false
}

Js.log(isRescript)

let teststatic= ()=>{
  let local =ref(0)
  local.contents = local.contents+100 
  local.contents;
}

Js.log(teststatic());
Js.log(teststatic());
