const App = LeaferUI.App;
const Group = LeaferUI.Group;
const Text = LeaferUI.Text;
const Line = LeaferUI.Line;
const Ellipse = LeaferUI.Ellipse;

function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

let config = {
  topPadding: 60
};
const app = new App({
  view: window,
  height: 500,
  width: 800,
  type: "user",
  fill: "#fff"
});
const contentLayer = app.addLeafer({
  stroke: "#eaebf1"
});
const animateLayer = app.addLeafer();

// 绘制折线 包含动画 hover 放大点
const xAxisgroup = new Group({});
const YAxisgroup = new Group({});
contentLayer.add(xAxisgroup);
contentLayer.add(YAxisgroup);
for (let i = 0; i <= 6; i++) {
  if (i != 6)
    YAxisgroup.add(
      new Line({
        x: 50,
        y: i * 50 + config.topPadding,
        width: 720,
        strokeWidth: 2,
        stroke: "#ebeef6"
      })
    );
  YAxisgroup.add(
    new Text({
      x: 0,
      y: i * 50 - 20 / 2 + config.topPadding,
      width: 40,
      lineHeight: 20,
      fontSize: 14,
      textAlign: "right",
      fill: "#83848c",
      text: (6 - i) * 50
    })
  );
}

let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let yData = [150, 230, 224, 218, 135, 147, 260];
xAxisgroup.add(
  new Line({
    x: 50,
    y: 6 * 50 + config.topPadding,
    width: 720,
    strokeWidth: 2,
    stroke: "#83848c"
  })
);
xAxisgroup.add(
  new Line({
    x: 50,
    y: 6 * 50 + config.topPadding,
    width: 5,
    strokeWidth: 2,
    stroke: "#83848c",
    rotation: 90
  })
);

for (let i = 0; i < xData.length; i++) {
  xAxisgroup.add(
    new Text({
      x: (720 / xData.length) * i + 50,
      y: 6 * 50 + config.topPadding + 10,
      width: 720 / xData.length,
      fontSize: 16,
      textAlign: "center",
      fill: "#83848c",
      text: xData[i]
    })
  );
  xAxisgroup.add(
    new Line({
      x: 50 + (i + 1) * (720 / xData.length),
      y: 6 * 50 + config.topPadding,
      width: 5,
      strokeWidth: 2,
      stroke: "#83848c",
      rotation: 90
    })
  );
  let point = new Ellipse({
    x: (720 / xData.length) * (i + 0.5) + 50 - 5,
    y: 6 * 50 - yData[i] + config.topPadding - 5,
    width: 10,
    height: 10,
    fill: "#fff",
    stroke: "#5c77c8"
  });
  animate(
    point,
    [
      {
        prop: "scaleX",
        fromTo: 0.5
      },
      {
        prop: "scaleY",
        fromTo: 0.5
      }
    ],
    300,
    i * 300 + 1000 / 30
  );
  if (i == xData.length - 1) break;
  let line = new Line({
    x: (720 / xData.length) * (i + 0.5) + 50,
    y: 6 * 50 - yData[i] + config.topPadding,
    // toPoint: {
    //   x: 720 / xData.length,
    //   y: yData[i] - yData[i + 1],
    // },
    strokeWidth: 2,
    stroke: "#5c77c8"
  });
  animate(
    line,
    [
      {
        prop: "toPoint",
        fromTo: [
          {
            x: 0,
            y: 0
          },
          {
            x: 720 / xData.length,
            y: yData[i] - yData[i + 1]
          }
        ]
      }
    ],
    300,
    i * 300
  );
}

function animate(ui, option, duration, delay) {
  duration = duration || 500; //毫秒
  delay = delay || 0; //毫秒
  // console.log(option);
  let start = +new Date() + delay,
    finish = start + duration,
    hasAdd = false;
  // time;
  tick(true);

  function tick(first) {
    let time = +new Date();
    if (time > finish) {
      ui.remove();
      contentLayer.add(ui);
      return;
    } else if (time > start) {
      let currentTime = time > finish ? duration : time - start,
        timePerc = currentTime / duration;
      // 更新值
      for (let o of option) {
        if (toRawType(o.fromTo[0]) == "Number") {
          ui[o.prop] = o.fromTo[0] + (o.fromTo[1] - o.fromTo[0]) * timePerc;
        } else if (toRawType(o.fromTo[0]) == "Object") {
          let temp = {};
          for (let p of Object.keys(o.fromTo[0])) {
            temp[p] =
              o.fromTo[0][p] + (o.fromTo[1][p] - o.fromTo[0][p]) * timePerc;
          }
          ui[o.prop] = temp;
          console.log(temp);
        }
      }

      if (!hasAdd) {
        animateLayer.add(ui);
        hasAdd = true;
      }
      requestAnimationFrame(tick);
    } else {
      requestAnimationFrame(tick);
    }
  }
}
