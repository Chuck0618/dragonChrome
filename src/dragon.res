type leaferConfig={
    view: Dom.window,
    width?: int,
    height?: int,
}
type leaferHandle={}
type cordinate={x: int, y : int }
type fillConfig={
   @as("type") type_: string,
    url: string,
    mode: string,
    offset: cordinate,
    // scale: { x: 1.1, y: 1.1 },
} 

type rectConfig={
   mutable x: int,
   mutable y: int,
    width: int,
    height: int,
    mutable fill: option<fillConfig>,
    draggable: bool
}
type rectHandle=rectConfig;

type eventHandle={@as("FRAME") frame_: string}

@new @module("leafer-ui") external 
leaferJS: leaferConfig => leaferHandle = "Leafer"
@new @module("leafer-ui") external 
rect: rectConfig => rectHandle = "Rect" 
@val @module("leafer-ui") external 
event:eventHandle = "AnimateEvent";

@send external on_:(leaferHandle, string, (unit)=>unit) => unit = "on_"
@send external 
add : (leaferHandle, rectHandle ) => unit = "add"

// main object
let leafer = leaferJS({view: window,
width: 600,
height: 400,
})
// offset in soul png dragon.png
let x_offset:array<int> =[850,850+44,850+44*2,850+44*3,850+44*4];
let fillContainer:array<fillConfig>=[]

let fillx=(x1:int) =>{
    let f:fillConfig={
    type_: "image",
    url: "./src/dragon.png",
    mode: "clip",
    offset: { x: -x1, y: 2 },
    }
    let _ = Js.Array2.push(fillContainer, f);
};
//save fill style to fillContainer
Js.Array2.forEach(x_offset, x=>fillx(x))
Js.Array2.forEach(fillContainer, x=>Js.log(x));

// test event.frame_ 
Js.log(event.frame_);

// rect object 
let rectCurrent=rect({
    x: 100,
    y: 100,
    width: 39,
    height: 56,
    fill:  fillContainer[0],
    draggable: true,
})
// add rectCurrent to leafer 
add(leafer,rectCurrent);

let flag = ref(0); // which config of fillContainer is using
let flagTimeUp = ref(false);
let flagMove = ref(false);

let rectTimeDuration=200;
let _= Js.Global.setInterval(() => {flagTimeUp.contents = true; Js.log("time up!")}, rectTimeDuration)

let rectUpdate = () => {
    if (flagTimeUp.contents == true ){
        flagTimeUp.contents = false
        flag.contents = mod( (flag.contents+1) , Js.Array2.length(fillContainer));
        let fill = fillContainer[flag.contents]; 
        rectCurrent.fill = fill;
        Js.log("run update")
    }
    if (flagMove.contents == true){
        rectCurrent.x = rectCurrent.x+1;        
    }
}

 on_(leafer, event.frame_ , () => { 
    rectUpdate();
    // Js.log("test")
    // rect.forceUpdate();
})

let appname = ()=>{ "my name is dragon"}

let moveDragon=()=>{
    flagMove.contents = true;
    let _ = Js.Global.setTimeout(()=>{flagMove.contents = false }, 4000);
}

moveDragon()