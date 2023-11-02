type leaferConfig={
    view: Dom.window,
    width?: int,
    height?: int,
}
type leaferHandle={}
type cordinate={mutable x: int, mutable y : int }
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

let rectTimeDuration=200;
let _= Js.Global.setInterval(() => {flagTimeUp.contents = true; Js.log("time up!")}, rectTimeDuration)



type positionState={
    mutable x: int, 
    mutable y: int,
    mutable vx: float,
    mutable vy: float,
    mutable isStop: bool,
}
let dragonPositionState={x:100, y :100, vx:0.0 , vy:0.0, isStop :true }

let updatePosition=()=>{
    dragonPositionState.x = dragonPositionState.x + Js.Math.floor_int(dragonPositionState.vx);
    dragonPositionState.y = dragonPositionState.y +Js.Math.floor_int(dragonPositionState.vy);
    dragonPositionState.vx = dragonPositionState.vx -. 0.1;
    if (dragonPositionState.x < 10){
        dragonPositionState.isStop = true
    }
}
let rectUpdate = () => {
    if (flagTimeUp.contents == true ){
        flagTimeUp.contents = false
        flag.contents = mod( (flag.contents+1) , Js.Array2.length(fillContainer));
        let fill = fillContainer[flag.contents]; 
        rectCurrent.fill = fill;
        Js.log("run update")
    }
    if (dragonPositionState.isStop == false){
        updatePosition();
        rectCurrent.x = dragonPositionState.x;     
        rectCurrent.y = dragonPositionState.y;    
    }
}


let appname = ()=>{ "my name is dragon"};

type roadState={
    mutable isStart: bool,
    mutable offset : int ,
    mutable speed : int
}
let roadRangeMax = 1200;
let roadStateDate={
    isStart: false,
    offset: 0 ,
    speed: 3
}

let road = rect({
    x:0,
    y:200,
    width: roadRangeMax,
    height: 12,
    fill: None,
    draggable: true,
}) 
add(leafer, road);
roadStateDate.isStart = true;

let updateRoad = ()=>{
    if(roadStateDate.isStart){
        roadStateDate.offset = roadStateDate.offset+roadStateDate.speed;
        if (roadStateDate.offset > roadRangeMax){
            roadStateDate.offset = 0 ;
        }
        let roadSoul:fillConfig={
            type_: "image",
            url: "./src/dragon.png",
            mode: "clip",
            offset: { x: -roadStateDate.offset, y: -53},
        }
        road.fill = Some(roadSoul);
    }
}
// test



on_(leafer, event.frame_ , () => { 
    rectUpdate();
    updateRoad();
    // Js.log("test")
    // rect.forceUpdate();
})


let moveDragon2=(time:int)=>{
    dragonPositionState.vy= -1.0;
    dragonPositionState.vx= 15.0;
    dragonPositionState.isStop = false;
}

let moveDragon=()=>{
    dragonPositionState.x= 300;
    dragonPositionState.y= 10;
    dragonPositionState.vy= 1.0;
    dragonPositionState.vx= 5.0;
    dragonPositionState.isStop = false;
}

let moveDragon2=()=>{ 
    dragonPositionState.vy= 0.0;
    dragonPositionState.vx= 6.0;
    dragonPositionState.isStop = false;
}
let moveDragon3=()=>{ 
    dragonPositionState.vy= -0.1;
    dragonPositionState.vx= 4.0;
    dragonPositionState.isStop = false;
}

let moveDragon4=()=>{ 
    dragonPositionState.vy= 0.1;
    dragonPositionState.vx= 9.0;
    dragonPositionState.isStop = false;
}

let stopDragon=()=>{
    dragonPositionState.isStop = true;
}

type task={
    time: int,
    do: unit => unit
}

let timeTable = [{time: 10, do: moveDragon}, 
{time: 6000, do: moveDragon2}, 
{time: 10000, do: moveDragon3},
{time: 12000, do: moveDragon4}, 
{time: 18000,do: stopDragon}]

Js.Array2.forEach(timeTable, (task)=>{
    let _ = Js.Global.setTimeout(task.do,task.time)
})