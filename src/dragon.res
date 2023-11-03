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
let dragonState={x0:20, y0:168, y:168, vy:0.0, ay:0.20, state:Stop(5) }

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



//which config of fillContainer is using
 
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

    // if (flagTimeUp.contents == true ){
    //     flagTimeUp.contents = false
    //     flag.contents = mod( (flag.contents+1) , Js.Array2.length(fillContainer));
    //     let fill = fillContainer[flag.contents]; 
    //     dragonSoulRect.fill = fill;
    //     Js.log("run update")
    // }
    // if (dragonState.isStop == false){
    //     updatePosition();
    //     dragonSoulRect.x = dragonPositionState.x;     
    //     dragonSoulRect.y = dragonPositionState.y;    
    // }
}



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
    type_: "image",
    url: "./src/dragon.png",
    mode: "clip",
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



on_(leafer, event.frame_ , () => { 
    updateDragon();
    updateRoad();
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



// dragonState.state = Run(2);

// let _ = Js.Global.setTimeout(
//     jumpTask,
//     15000);

// let moveDragon2=(time:int)=>{
//     dragonPositionState.vy= -1.0;
//     dragonPositionState.vx= 15.0;
//     dragonPositionState.isStop = false;
// }

// let moveDragon=()=>{
//     dragonPositionState.x= 300;
//     dragonPositionState.y= 10;
//     dragonPositionState.vy= 1.0;
//     dragonPositionState.vx= 5.0;
//     dragonPositionState.isStop = false;
// }

// let moveDragon2=()=>{ 
//     dragonPositionState.vy= 0.0;
//     dragonPositionState.vx= 6.0;
//     dragonPositionState.isStop = false;
// }
// let moveDragon3=()=>{ 
//     dragonPositionState.vy= -0.1;
//     dragonPositionState.vx= 4.0;
//     dragonPositionState.isStop = false;
// }

// let moveDragon4=()=>{ 
//     dragonPositionState.vy= 0.1;
//     dragonPositionState.vx= 9.0;
//     dragonPositionState.isStop = false;
// }

// let stopDragon=()=>{
//     dragonPositionState.isStop = true;
// }

// type task={
//     time: int,
//     do: unit => unit
// }

// let timeTable = [{time: 10, do: moveDragon}, 
// {time: 6000, do: moveDragon2}, 
// {time: 10000, do: moveDragon3},
// {time: 12000, do: moveDragon4}, 
// {time: 18000,do: stopDragon}]

// Js.Array2.forEach(timeTable, (task)=>{
//     let _ = Js.Global.setTimeout(task.do,task.time)
// })