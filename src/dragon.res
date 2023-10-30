type leaferConfig={
    view: string,
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
   x: int,
   y: int,
    width: int,
    height: int,
    mutable fill: option<fillConfig>,
    draggable: bool
}
type rectHandle=rectConfig;

type eventHandle={@as("FRAME") _frame: string}

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
let leafer = leaferJS({view: "mydiv",
width: 600,
height: 400,
})

let x_offset:array<int> =[850,850+44,850+44*2,850+44*3,850+44*4];
let fillContainer:array<fillConfig>=[]

let fillx=(x1:int) =>{
    let f:fillConfig={
    type_: "image",
    url: "dragon.png",
    mode: "clip",
    offset: { x: -x1, y: 2 },
    }
    let _ = Js.Array2.push(fillContainer, f);
};

Js.Array2.forEach(x_offset, x=>fillx(x))
Js.Array2.forEach(fillContainer, x=>Js.log(x));

// let evnetList = event()
Js.log(event._frame);



let rectCurrent=rect({
    x: 0,
    y: 0,
    width: 39,
    height: 56,
    fill:  fillContainer[0],
    draggable: true,
})

add(leafer,rectCurrent);

let flag = ref(0); // which config of fillContainer is using
let flagTimeup = ref(false);

let rectTimeDuration=200;
let _= Js.Global.setTimeout(() => {flagTimeup.contents = true; Js.log("time up!")}, rectTimeDuration)

let rectUpdate = () => {
    if (flagTimeup.contents == true ){
        flagTimeup.contents = false
        flag.contents = mod( (flag.contents+1) , Js.Array2.length(fillContainer));
        let fill = fillContainer[flag.contents]; 
        rectCurrent.fill = fill;
        Js.log("run update")
    }
}

 on_(leafer, event._frame , () => { 
    rectUpdate();
    Js.log("test")
    // rect.forceUpdate();
})

let name = ()=>{ "my name is dragon"}