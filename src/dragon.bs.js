// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_math from "rescript/lib/es6/js_math.js";
import * as LeaferUi from "leafer-ui";
import * as Caml_int32 from "rescript/lib/es6/caml_int32.js";

var leafer = new LeaferUi.Leafer({
      view: window,
      width: 600,
      height: 400
    });

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

console.log(LeaferUi.AnimateEvent.FRAME);

var rectCurrent = new LeaferUi.Rect({
      x: 100,
      y: 100,
      width: 39,
      height: 56,
      fill: fillContainer[0],
      draggable: true
    });

leafer.add(rectCurrent);

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
    rectCurrent.fill = fill;
    console.log("run update");
  }
  if (dragonPositionState.isStop === false) {
    updatePosition(undefined);
    rectCurrent.x = dragonPositionState.x;
    rectCurrent.y = dragonPositionState.y;
    return ;
  }
  
}

function appname(param) {
  return "my name is dragon";
}

var roadStateDate = {
  isStart: false,
  offset: 0,
  speed: 3
};

var road = new LeaferUi.Rect({
      x: 0,
      y: 200,
      width: 1200,
      height: 12,
      fill: undefined,
      draggable: true
    });

leafer.add(road);

roadStateDate.isStart = true;

function updateRoad(param) {
  if (!roadStateDate.isStart) {
    return ;
  }
  roadStateDate.offset = roadStateDate.offset + roadStateDate.speed | 0;
  if (roadStateDate.offset > 1200) {
    roadStateDate.offset = 0;
  }
  var roadSoul_offset = {
    x: -roadStateDate.offset | 0,
    y: -53
  };
  var roadSoul = {
    type: "image",
    url: "./src/dragon.png",
    mode: "clip",
    offset: roadSoul_offset
  };
  road.fill = roadSoul;
}

leafer.on_(LeaferUi.AnimateEvent.FRAME, (function (param) {
        rectUpdate(undefined);
        updateRoad(undefined);
      }));

function moveDragon(param) {
  dragonPositionState.x = 300;
  dragonPositionState.y = 10;
  dragonPositionState.vy = 1.0;
  dragonPositionState.vx = 5.0;
  dragonPositionState.isStop = false;
}

function moveDragon2(param) {
  dragonPositionState.vy = 0.0;
  dragonPositionState.vx = 6.0;
  dragonPositionState.isStop = false;
}

function moveDragon3(param) {
  dragonPositionState.vy = -0.1;
  dragonPositionState.vx = 4.0;
  dragonPositionState.isStop = false;
}

function moveDragon4(param) {
  dragonPositionState.vy = 0.1;
  dragonPositionState.vx = 9.0;
  dragonPositionState.isStop = false;
}

function stopDragon(param) {
  dragonPositionState.isStop = true;
}

var timeTable = [
  {
    time: 10,
    do: moveDragon
  },
  {
    time: 6000,
    do: moveDragon2
  },
  {
    time: 10000,
    do: moveDragon3
  },
  {
    time: 12000,
    do: moveDragon4
  },
  {
    time: 18000,
    do: stopDragon
  }
];

timeTable.forEach(function (task) {
      setTimeout(task.do, task.time);
    });

var rectTimeDuration = 200;

var roadRangeMax = 1200;

export {
  leafer ,
  x_offset ,
  fillContainer ,
  fillx ,
  rectCurrent ,
  flag ,
  flagTimeUp ,
  rectTimeDuration ,
  dragonPositionState ,
  updatePosition ,
  rectUpdate ,
  appname ,
  roadRangeMax ,
  roadStateDate ,
  road ,
  updateRoad ,
  moveDragon ,
  moveDragon2 ,
  moveDragon3 ,
  moveDragon4 ,
  stopDragon ,
  timeTable ,
}
/* leafer Not a pure module */
