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
type textConfig={
    fill: string,
    text: string,
    x: int,
    y: int,
} 
type textHandle={
    mutable text: string,
}
@new @module("leafer-ui") external 
text: textConfig => textHandle = "Text"
@send external 
addText : (leaferHandle, textHandle ) => unit = "add"
// const text = new Text({
//   fill: 'rgb(50,205,121)',
//   text: 'Welcome to LeaferJS',
// })

type event 
// type handle=| Lf(leaferHandle)| Rt(rectHandle)

@send external on_:(leaferHandle, string, (unit)=>unit) => event = "on_"
@send external off_:(leaferHandle, event ) => unit = "off_"

@send external on:(rectHandle, string, (unit)=>unit) => event = "on"

@send external 
add : (leaferHandle, rectHandle ) => unit = "add"


// game handle object 
type gameState={ 
    // mutable scoreLast: int,
    mutable scoreNow: int,
    mutable scoreMax: int,
    mutable gameEvent? : event,  // None : 游戏停止， // Some ： 游戏在运行
}
let gameStateDate: gameState={ scoreNow: 0, scoreMax: 0 };
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
    mutable passSmall: int,
    mutable passLarge: int,
}
let treeStateDate :obsState= {
    x1: 300,
    y1: 182,
    x2: 400,
    y2: 168,
    isStart: false,
    vx: 0.0,
    passSmall: 0,
    passLarge: 0,
} 

let treeRectSmall = rect({
    x: treeStateDate.x1,
    y: treeStateDate.y1,
    width : 18,
    height: 40,
    fill: fillContainerTreeSmall[0],
    draggable : false,
})

let treeRectLarge = rect({
    x: treeStateDate.x2,
    y: treeStateDate.y2,
    width : 25,
    height: 54,
    fill: fillContainerTreeLarge[0],
    draggable : false,
})

add(leafer, treeRectSmall);
add(leafer, treeRectLarge);
treeStateDate.vx = -3.0 ;
treeStateDate.isStart = true; 

let updateTree = ()=>{
    if(treeStateDate.isStart){
        treeStateDate.x1 = treeStateDate.x1 + Js.Math.floor_int(treeStateDate.vx);
        treeStateDate.x2 = treeStateDate.x2 + Js.Math.floor_int(treeStateDate.vx);
        if (treeStateDate.x1 < -10){
            treeStateDate.passSmall = treeStateDate.passSmall +1;
            let width :int =switch leaferJsConfig.width{
            | Some(w)=>w| _=>600};
            treeStateDate.x1 = width+Js.Math.random_int(0,500);
            if(treeStateDate.x1 > treeStateDate.x2 -10 && treeStateDate.x1 < treeStateDate.x2+30){
                treeStateDate.x1 = treeStateDate.x2 + 30 +Js.Math.random_int(0,500); 
            }
        }
        if (treeStateDate.x2 < -10){
            treeStateDate.passLarge = treeStateDate.passLarge +1;
            let width :int =switch leaferJsConfig.width{
            | Some(w)=>w| _=>600};
            treeStateDate.x2 = width+Js.Math.random_int(0,500);
            if(treeStateDate.x2 > treeStateDate.x1 -10 && treeStateDate.x2< treeStateDate.x1+30){
                treeStateDate.x2 = treeStateDate.x1 + 30 +Js.Math.random_int(0,500); 
            }
        }
        gameStateDate.scoreNow =  treeStateDate.passLarge * 20 + treeStateDate.passSmall * 10;
        treeRectSmall.x = treeStateDate.x1;
        treeRectLarge.x = treeStateDate.x2;
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
// text
let textScoreNow = text({
    fill: "rgb(50,50,70)",
    x: 100,
    y: 30,
    text: ""
}); 
let textScoreMax = text({
    fill: "rgb(50,50,70)",
    x: 100,
    y: 45,
    text: ""
});

let updateTextNow=()=>{
    textScoreNow.text = "当前得分：" ++ Js.Int.toString(gameStateDate.scoreNow);
}
let updateTextMax=()=>{
    textScoreMax.text = "最高得分：" ++ Js.Int.toString(gameStateDate.scoreMax);
}
// let updateTextLast=()=>{
//     textScoreLast.text = "上局得分：" ++ Js.Int.toString(gameStateDate.scoreLast);
// }

addText(leafer,textScoreNow);
// addText(leafer,textScoreLast);
addText(leafer,textScoreMax);
textScoreNow.text = "Game Not Start! 按这个键开始----->";
// updateTextLast();
updateTextMax();

//routine of the game 
let fillButton : fillConfig ={
    ...fillDefault,
    offset: {x: 2,y : 2},
}
let button = rect({
    x: 300,
    y: 20 ,
    width: 40,
    height: 40,  
    fill: Some(fillButton),
    draggable: false,
})
add(leafer, button);


// let gameEvent = on_(Lf(leafer), event.frame_ , () => { 
//     updateDragon();
//     updateRoad();
//     updateTree();
//     // Js.log("test")
//     // rect.forceUpdate();
// })


let testDead = () =>{
    let test1 = (Js.Math.abs_int(dragonState.x0 -treeStateDate.x1) < 18) &&  (Js.Math.abs_int(dragonState.y-treeStateDate.y1) < 30)
    let test2 = (Js.Math.abs_int(dragonState.x0 -treeStateDate.x2) < 20) &&  (Js.Math.abs_int(dragonState.y-treeStateDate.y2) < 40)
    test1 || test2 
}
let gameover= ()=>{
    Js.log("Dead!")
    treeStateDate.passLarge = 0 ;
    treeStateDate.passSmall = 0 ;
    treeStateDate.x1 = Js.Math.random_int(500,600);
    treeStateDate.x2 = Js.Math.random_int(630,800);
    if(gameStateDate.scoreNow > gameStateDate.scoreMax){
        gameStateDate.scoreMax = gameStateDate.scoreNow;
        updateTextMax();
    }
    // gameStateDate.scoreLast = gameStateDate.scoreNow;
    gameStateDate.scoreNow = 0;
    switch(gameStateDate.gameEvent){
        | Some(ev) =>{
            gameStateDate.gameEvent = None;
            let _ = off_( leafer , ev);
            }
        | _=>()
    }
} 
let gameloop= ()=>{
    updateDragon();
    updateRoad();
    updateTree();
    updateTextNow();
    if (testDead()){ 
        gameover();
    } 
}
let _ = on(button, pointerEvent.down_, ()=>{
    switch (gameStateDate.gameEvent){
        | Some(ev)=>{
            let _ = off_( leafer , ev);
            gameStateDate.gameEvent = None; 
        }
        | None => {
            gameStateDate.gameEvent =  Some(on_( leafer , event.frame_ , gameloop)) 
        }
    } 
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

let _ = on_( leafer , pointerEvent.down_, ()  =>{
   captureCommand();
})


