let appname = ()=>{ "my name is dragon"};


type leaferConfig={
    view: Dom.window,
    width?: int,
    height?: int,
}
type leaferHandle={}
type cordinate={mutable x: int, 
mutable y : int }
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
type pointerEvent = {@as("DOWN") down_: string}
@new @module("leafer-ui") external 
leaferJS: leaferConfig => leaferHandle = "Leafer"
@new @module("leafer-ui") external 
rect: rectConfig => rectHandle = "Rect" 
@val @module("leafer-ui") external 
event:eventHandle = "AnimateEvent";
@val @module("leafer-ui") external 
pointerEvent:pointerEvent = "PointerEvent"

@send external on_:(leaferHandle, string, (unit)=>unit) => unit = "on_"
@send external 
add : (leaferHandle, rectHandle ) => unit = "add"

// main object
let leaferJsConfig:leaferConfig={view: window,
width: 600,
height: 400,
}

let leafer = leaferJS(leaferJsConfig)
// offset in soul png dragon.png
let x_offset:array<int> =[850,850+44,850+44*2,850+44*3,850+44*4,850+44*5];
let fillContainer:array<fillConfig>=[]

let fillDefault:fillConfig={
    type_: "image",
    url: "./src/dragon.png",
    mode: "clip",
    offset: { x:0, y: 0},
    }

let fillx=(x1:int) =>{
    let f:fillConfig={
    ...fillDefault,
    offset: { x: -x1, y: 2 },
    }
    let _ = Js.Array2.push(fillContainer, f);
};
//save fill style to fillContainer
Js.Array2.forEach(x_offset, x=>fillx(x))
Js.Array2.forEach(fillContainer, x=>Js.log(x));

// let runIndex = [2,3];
// let jumpIndex = [0,1,4];
// let stopIndex = [4,5];

type doing = 
| Run(int)
| Jump(int)
| Stop(int)


type dragonStates={
    mutable y: int,
    mutable vy: float,
    mutable state: doing,
        ay: float,
        y0: int,
        x0: int,
}
let dragonState={x0:20, y0:166, y:168, vy:0.0, ay:0.20, state:Stop(5) }

let dragonSoulRect=rect({
    x: dragonState.x0,
    y: dragonState.y0,
    width: 39,
    height: 56,
    fill:  fillContainer[0],
    draggable: false,
})
// add rectCurrent to leafer 
add(leafer,dragonSoulRect);

 
let rectTimeDuration=200;
let _= Js.Global.setInterval(() => {
    switch dragonState.state{
        | Run(ind) => {
            let v = (ind == 2 ? 3 : 2);
            dragonState.state = Run(v);
            ()
            };
        | _ => ()
    }
}, rectTimeDuration)

let updatePosition=()=>{
    dragonState.y = dragonState.y +Js.Math.floor_int(dragonState.vy); 
    dragonState.vy = dragonState.vy +. dragonState.ay;
    if (dragonState.y >= dragonState.y0 ){
        dragonState.y = dragonState.y0
        dragonState.vy =0.0 ;
        dragonState.state = Run(2);
    }
}

let updateDragon = () => {
    switch(dragonState.state){
    | Run(ind) =>{
       dragonSoulRect.fill=fillContainer[ind];
    }
    | Stop(ind) =>{
       dragonSoulRect.fill=fillContainer[ind];
    }
    | Jump(ind) =>{
        updatePosition();
        dragonSoulRect.y = dragonState.y ; 
       dragonSoulRect.fill=fillContainer[ind];
    }
    }
 
}





//  Obstructions 
//
// obsStateDate 控制 tree 在游戏中的行为



// type size={
//     width : int, 
//     height : int,
// }
// let offsetObstructSmallSize:size={
//     width : 100,
//     height: 100,
// }

// 载入游戏静态数据
let offsetObstructSmall:array<cordinate>=[
    { x: 262, y: 2},
    { x: (272+20), y: 2},
]
let offsetObstructLarge:array<cordinate>=[
    { x: 331, y: 2},
    { x: (331+20), y: 2},
]
let fillContainerTreeSmall:array<fillConfig>=[];
let fillContainerTreeLarge:array<fillConfig>=[];

let push= (ct:array<fillConfig>, cor:cordinate)=>{
    let f: fillConfig = {
   ...fillDefault,
    offset: { x: -cor.x, y: -cor.y},
    }
    let _ = Js.Array2.push(ct, f);
}
Js.Array2.forEach( offsetObstructSmall, (cor)=>{
    push(fillContainerTreeSmall, cor);
});

Js.Array2.forEach( offsetObstructLarge,push(fillContainerTreeLarge));



type obsState= {
    mutable x1: int,
    y1: int,
    mutable x2: int,
    y2: int,
    mutable isStart: bool,
    mutable vx: float,
}
let obsStateDate :obsState= {
    x1: 100,
    y1: 182,
    x2: 400,
    y2: 168,
    isStart: false,
    vx: 0.0,
} 

let treeRectSmall = rect({
    x: obsStateDate.x1,
    y: obsStateDate.y1,
    width : 18,
    height: 40,
    fill: fillContainerTreeSmall[0],
    draggable : false,
})

let treeRectLarge = rect({
    x: obsStateDate.x2,
    y: obsStateDate.y2,
    width : 25,
    height: 54,
    fill: fillContainerTreeLarge[0],
    draggable : false,
})

add(leafer, treeRectSmall);
add(leafer, treeRectLarge);
obsStateDate.vx = -3.0 ;
obsStateDate.isStart = true; 

let updateTree = ()=>{
    if(obsStateDate.isStart){
        obsStateDate.x1 = obsStateDate.x1 + Js.Math.floor_int(obsStateDate.vx);
        obsStateDate.x2 = obsStateDate.x2 + Js.Math.floor_int(obsStateDate.vx);
        if (obsStateDate.x1 < -10){
            let width :int =switch leaferJsConfig.width{
            | Some(w)=>w| _=>600};
            obsStateDate.x1 = width+Js.Math.random_int(0,500);
            if(obsStateDate.x1 > obsStateDate.x2 -10 && obsStateDate.x1 < obsStateDate.x2+30){
                obsStateDate.x1 = obsStateDate.x2 + 30 +Js.Math.random_int(0,500); 
            }
        }
        if (obsStateDate.x2 < -10){
            let width :int =switch leaferJsConfig.width{
            | Some(w)=>w| _=>600};
            obsStateDate.x2 = width+Js.Math.random_int(0,500);
            if(obsStateDate.x2 > obsStateDate.x1 -10 && obsStateDate.x2< obsStateDate.x1+30){
                obsStateDate.x2 = obsStateDate.x1 + 30 +Js.Math.random_int(0,500); 
            }
        }
        treeRectSmall.x = obsStateDate.x1;
        treeRectLarge.x = obsStateDate.x2;
    }
}
// For the road, withing the road01,road02
//
// roadStateDate 控制 road 在游戏中的行为
//
type roadState={
    mutable isStart: bool,
    mutable x1 : int ,
    mutable x2 : int ,
    mutable vx : int
}
let roadRangeMax = 1200;
let roadStateDate={
    isStart: false,
    x1: 0 ,
    x2: roadRangeMax, 
    vx: -3
}


let roadSoul:fillConfig={
    ...fillDefault,
    offset: { x: 0, y: -53},
}

let road_01 = rect({
    x:0,
    y:200,
    width: roadRangeMax,
    height: 12,
    fill: Some(roadSoul),
    draggable: false,
}) 
let road_02 = rect({
    x:roadRangeMax,
    y:200,
    width: roadRangeMax,
    height: 12,
    fill:  Some(roadSoul),
    draggable: false,
})

add(leafer, road_01);
add(leafer, road_02);

roadStateDate.isStart = true;



let updateRoad = ()=>{
    if(roadStateDate.isStart){
        roadStateDate.x1= roadStateDate.x1+roadStateDate.vx;
        roadStateDate.x2= roadStateDate.x2+roadStateDate.vx;
        if (roadStateDate.x1 < -roadRangeMax){
            roadStateDate.x1 = roadStateDate.x2 + roadRangeMax;
        }
        if (roadStateDate.x2 < -roadRangeMax){
            roadStateDate.x2 = roadStateDate.x1 + roadRangeMax;
        }

        road_01.x = roadStateDate.x1;
        road_02.x = roadStateDate.x2;
    }
}
// test

//routine of the game 

on_(leafer, event.frame_ , () => { 
    updateDragon();
    updateRoad();
    updateTree();
    // Js.log("test")
    // rect.forceUpdate();
})

let jumpTask =()=>{
    dragonState.vy = -6.0;
    dragonState.state = Jump(0);
    let _ = Js.log("Time up!")
}

let captureCommand = ()=>{
    switch dragonState.state{
        | Run(_) => {jumpTask()}
        | Stop(_) => {
            dragonState.state =Run(2);
        }
        | Jump(_) =>();
    } 
}

on_(leafer, pointerEvent.down_, ()  =>{
   captureCommand();
})


