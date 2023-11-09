// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_math from "rescript/lib/es6/js_math.js";
import * as LeaferUi from "leafer-ui";
import * as Caml_int32 from "rescript/lib/es6/caml_int32.js";

function appname(param) {
  return "my name is dragon";
}

var leaferJsConfig_width = 600;

var leaferJsConfig_height = 400;

var leaferJsConfig = {
  view: window,
  width: leaferJsConfig_width,
  height: leaferJsConfig_height
};

var leafer = new LeaferUi.Leafer(leaferJsConfig);

var x_offset = [
  850,
  894,
  938,
  982,
  1026
];

var fillContainer = [];

function fillx(x1) {
  var f_offset = {
    x: -x1 | 0,
    y: 2
  };
  var f = {
    type: "image",
    url: "./src/dragon.png",
    mode: "clip",
    offset: f_offset
  };
  fillContainer.push(f);
}

x_offset.forEach(fillx);

fillContainer.forEach(function (x) {
      console.log(x);
    });

var runIndex = [
  2,
  3
];

var jumpIndex = [
  0,
  1,
  4
];

var dragonSoulRect = new LeaferUi.Rect({
      x: 100,
      y: 100,
      width: 39,
      height: 56,
      fill: fillContainer[0],
      draggable: true
    });

leafer.add(dragonSoulRect);

var flag = {
  contents: 0
};

var flagTimeUp = {
  contents: false
};

setInterval((function (param) {
        flagTimeUp.contents = true;
        console.log("time up!");
      }), 200);

var dragonPositionState = {
  x: 100,
  y: 100,
  vx: 0.0,
  vy: 0.0,
  isStop: true
};

function updatePosition(param) {
  dragonPositionState.x = dragonPositionState.x + Js_math.floor_int(dragonPositionState.vx) | 0;
  dragonPositionState.y = dragonPositionState.y + Js_math.floor_int(dragonPositionState.vy) | 0;
  dragonPositionState.vx = dragonPositionState.vx - 0.1;
  if (dragonPositionState.x < 10) {
    dragonPositionState.isStop = true;
    return ;
  }
  
}

function rectUpdate(param) {
  if (flagTimeUp.contents === true) {
    flagTimeUp.contents = false;
    flag.contents = Caml_int32.mod_(flag.contents + 1 | 0, fillContainer.length);
    var fill = fillContainer[flag.contents];
    dragonSoulRect.fill = fill;
    console.log("run update");
  }
  if (dragonPositionState.isStop === false) {
    updatePosition(undefined);
    dragonSoulRect.x = dragonPositionState.x;
    dragonSoulRect.y = dragonPositionState.y;
    return ;
  }
  
}

var roadStateDate = {
  isStart: false,
  x1: 0,
  x2: 1200,
  vx: -3
};

var roadSoul_offset = {
  x: 0,
  y: -53
};

var roadSoul = {
  type: "image",
  url: "./src/dragon.png",
  mode: "clip",
  offset: roadSoul_offset
};

var road_01 = new LeaferUi.Rect({
      x: 0,
      y: 200,
      width: 1200,
      height: 12,
      fill: roadSoul,
      draggable: false
    });

var road_02 = new LeaferUi.Rect({
      x: 1200,
      y: 200,
      width: 1200,
      height: 12,
      fill: roadSoul,
      draggable: false
    });

leafer.add(road_01);

leafer.add(road_02);

roadStateDate.isStart = true;

function updateRoad(param) {
  if (roadStateDate.isStart) {
    roadStateDate.x1 = roadStateDate.x1 + roadStateDate.vx | 0;
    roadStateDate.x2 = roadStateDate.x2 + roadStateDate.vx | 0;
    if (roadStateDate.x1 < -1200) {
      roadStateDate.x1 = roadStateDate.x2 + 1200 | 0;
    }
    if (roadStateDate.x2 < -1200) {
      roadStateDate.x2 = roadStateDate.x1 + 1200 | 0;
    }
    road_01.x = roadStateDate.x1;
    road_02.x = roadStateDate.x2;
    return ;
  }
  
}

leafer.on_(LeaferUi.AnimateEvent.FRAME, (function (param) {
        rectUpdate(undefined);
        updateRoad(undefined);
      }));

var rectTimeDuration = 200;

var roadRangeMax = 1200;

export {
  appname ,
  leaferJsConfig ,
  leafer ,
  x_offset ,
  fillContainer ,
  fillx ,
  runIndex ,
  jumpIndex ,
  dragonSoulRect ,
  flag ,
  flagTimeUp ,
  rectTimeDuration ,
  dragonPositionState ,
  updatePosition ,
  rectUpdate ,
  roadRangeMax ,
  roadStateDate ,
  roadSoul ,
  road_01 ,
  road_02 ,
  updateRoad ,
}
/* leaferJsConfig Not a pure module */