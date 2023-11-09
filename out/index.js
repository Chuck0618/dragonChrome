// node_modules/rescript/lib/es6/js_int.js
var max = 2147483647;
var min = -2147483648;

// node_modules/rescript/lib/es6/js_math.js
var floor_int = function(f) {
  if (f > max) {
    return max;
  } else if (f < min) {
    return min;
  } else {
    return Math.floor(f);
  }
};
var random_int = function(min2, max2) {
  return floor_int(Math.random() * (max2 - min2 | 0)) + min2 | 0;
};

// node_modules/@leafer/core/dist/core.esm.js
var get = function() {
  return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
};
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var contextAttr = function(realName) {
  return (target, key) => {
    if (!realName)
      realName = key;
    const property = {
      get() {
        return this.context[realName];
      },
      set(value) {
        this.context[realName] = value;
      }
    };
    Object.defineProperty(target, key, property);
  };
};
var contextMethod = function() {
  return (_target, key) => {
    contextMethodNameList.push(key);
  };
};
var roundRect = function(drawer) {
  if (drawer && !drawer.roundRect) {
    drawer.roundRect = function(x, y, width, height, cornerRadius) {
      drawRoundRect(this, x, y, width, height, cornerRadius);
    };
  }
};
var canvasPatch = function(drawer) {
  roundRect(drawer);
};
var defineKey = function(target, key, descriptor) {
  Object.defineProperty(target, key, descriptor);
};
var getDescriptor = function(object, name) {
  return Object.getOwnPropertyDescriptor(object, name);
};
var getNames = function(object) {
  return Object.getOwnPropertyNames(object);
};
var defineLeafAttr = function(target, key, defaultValue, mergeDescriptor) {
  const defaultDescriptor = {
    get() {
      return this.__getAttr(key);
    },
    set(value) {
      this.__setAttr(key, value);
    },
    configurable: true,
    enumerable: true
  };
  defineKey(target, key, Object.assign(defaultDescriptor, mergeDescriptor || {}));
  defineDataProcessor(target, key, defaultValue);
};
var dataType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue);
  };
};
var positionType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.matrixChanged || this.__layout.matrixChange();
      }
    });
  };
};
var scaleType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.scaleChanged || this.__layout.scaleChange();
      }
    });
  };
};
var rotationType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.rotationChanged || this.__layout.rotationChange();
      }
    });
  };
};
var boundsType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.boxChanged || this.__layout.boxChange();
        if (this.__.around)
          this.__layout.matrixChanged || this.__layout.matrixChange();
      }
    });
  };
};
var affectStrokeBoundsType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.strokeChanged || this.__layout.strokeChange();
      }
    });
  };
};
var affectRenderBoundsType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.renderChanged || this.__layout.renderChange();
      }
    });
  };
};
var surfaceType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.surfaceChanged || this.__layout.surfaceChange();
      }
    });
  };
};
var opacityType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.opacityChanged || this.__layout.opacityChange();
      }
    });
  };
};
var sortType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.surfaceChanged || this.__layout.surfaceChange();
        this.waitParent(() => {
          this.parent.__layout.childrenSortChange();
        });
      }
    });
  };
};
var maskType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.boxChanged || this.__layout.boxChange();
        this.waitParent(() => {
          this.parent.__updateMask(value);
        });
      }
    });
  };
};
var eraserType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.waitParent(() => {
          this.parent.__updateEraser(value);
        });
      }
    });
  };
};
var hitType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        if (Debug.showHitView) {
          this.__layout.surfaceChanged || this.__layout.surfaceChange();
        }
        if (this.leafer)
          this.leafer.updateCursor();
      }
    });
  };
};
var cursorType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        if (this.leafer)
          this.leafer.updateCursor();
      }
    });
  };
};
var dataProcessor = function(processor) {
  return (target, _key) => {
    defineKey(target, "__DataProcessor", {
      get() {
        return processor;
      }
    });
  };
};
var getSetMethodName = function(key) {
  return "set" + key.charAt(0).toUpperCase() + key.slice(1);
};
var defineDataProcessor = function(target, key, defaultValue) {
  const data = target.__DataProcessor.prototype;
  const computedKey = "_" + key;
  const setMethodName = getSetMethodName(key);
  const property = {
    get() {
      const v = this[computedKey];
      return v === undefined ? defaultValue : v;
    },
    set(value) {
      this[computedKey] = value;
    },
    configurable: true,
    enumerable: true
  };
  if (defaultValue === undefined) {
    property.get = function() {
      return this[computedKey];
    };
  } else if (key === "width") {
    property.get = function() {
      const v = this[computedKey];
      return v === undefined ? this.__naturalWidth || defaultValue : v;
    };
  } else if (key === "height") {
    property.get = function() {
      const v = this[computedKey];
      return v === undefined ? this.__naturalHeight || defaultValue : v;
    };
  }
  const descriptor = getDescriptor(data, key);
  if (descriptor && descriptor.set)
    property.set = descriptor.set;
  if (data[setMethodName]) {
    property.set = data[setMethodName];
    delete data[setMethodName];
  }
  Object.defineProperty(data, key, property);
};
var rewrite = function(method) {
  return (target, key) => {
    list.push({ name: target.constructor.name + "." + key, run: () => {
      target[key] = method;
    } });
  };
};
var rewriteAble = function() {
  return (_target) => {
    doRewrite();
  };
};
var doRewrite = function(error) {
  if (list.length) {
    list.forEach((item) => {
      if (error)
        debug$1.error(item.name, "\u9700\u5728Class\u4E0A\u88C5\u9970@rewriteAble()");
      item.run();
    });
    list.length = 0;
  }
};
var useModule = function(module, exclude) {
  return (target) => {
    const names = module.prototype ? getNames(module.prototype) : Object.keys(module);
    names.forEach((name) => {
      if (!excludeNames.includes(name) && (!exclude || !exclude.includes(name))) {
        if (module.prototype) {
          const d = getDescriptor(module.prototype, name);
          if (d.writable)
            target.prototype[name] = module.prototype[name];
        } else {
          target.prototype[name] = module[name];
        }
      }
    });
  };
};
var registerUI = function() {
  return (target) => {
    UICreator.register(target);
  };
};
var registerUIEvent = function() {
  return (target) => {
    EventCreator.register(target);
  };
};
var moveByMatrix = function(t, matrix) {
  t.x += matrix.e - t.__local.e;
  t.y += matrix.f - t.__local.f;
};
var getTempLocal = function(t, world) {
  t.__layout.checkUpdate();
  return t.parent ? PointHelper.tempToInnerOf(world, t.parent.__world) : world;
};
var emit = function(type, data, path, excludePath) {
  if (!path && !data.path)
    return;
  let leaf;
  data.type = type;
  if (path) {
    data = Object.assign(Object.assign({}, data), { path });
  } else {
    path = data.path;
  }
  data.target = path.indexAt(0);
  for (let i = path.length - 1;i > -1; i--) {
    leaf = path.list[i];
    if (emitEvent(leaf, type, data, true, excludePath))
      return;
    if (leaf.isApp)
      emitAppChildren(leaf, type, data, true, excludePath);
  }
  for (let i = 0, len = path.length;i < len; i++) {
    leaf = path.list[i];
    if (leaf.isApp)
      emitAppChildren(leaf, type, data, false, excludePath);
    if (emitEvent(leaf, type, data, false, excludePath))
      return;
  }
};
var emitAppChildren = function(leaf, type, data, capture, excludePath) {
  if (allowTypes.some((name) => type.startsWith(name)) && leaf.__.hitChildren && !exclude(leaf, excludePath)) {
    let child;
    for (let i = 0, len = leaf.children.length;i < len; i++) {
      child = leaf.children[i];
      if (!data.path.has(child) && child.__.hittable)
        emitEvent(child, type, data, capture, excludePath);
    }
  }
};
var emitEvent = function(leaf, type, data, capture, excludePath) {
  if (leaf.destroyed)
    return true;
  if (leaf.__.hitSelf && leaf.hasEvent(type, capture) && !exclude(leaf, excludePath)) {
    data.phase = capture ? 1 : leaf === data.target ? 2 : 3;
    const event = EventCreator.get(type, data);
    leaf.emitEvent(event, capture);
    if (event.isStop)
      return true;
  }
  return false;
};
var exclude = function(leaf, excludePath) {
  return excludePath && excludePath.has(leaf);
};
var __getListenerMap = function(eventer, capture, create) {
  if (capture) {
    const { __captureMap: c } = eventer;
    if (c) {
      return c;
    } else {
      return create ? eventer.__captureMap = {} : empty;
    }
  } else {
    const { __bubbleMap: b } = eventer;
    if (b) {
      return b;
    } else {
      return create ? eventer.__bubbleMap = {} : empty;
    }
  }
};
var Platform = {
  imageSuffix: "leaf"
};
var Creator = {};
var IncrementId = {
  RUNTIME: "runtime",
  LEAF: "leaf",
  TASK: "task",
  CNAVAS: "canvas",
  IMAGE: "image",
  types: {},
  create(typeName) {
    const { types } = I$2;
    if (types[typeName]) {
      return types[typeName]++;
    } else {
      types[typeName] = 1;
      return 0;
    }
  }
};
var I$2 = IncrementId;
var MathHelper = {
  within(value, min2, max2) {
    if (value < min2)
      value = min2;
    if (value > max2)
      value = max2;
    return value;
  },
  fourNumber(num) {
    let one, two, three, four;
    if (num instanceof Array) {
      switch (num.length) {
        case 4:
          return num;
        case 2:
          one = three = num[0];
          two = four = num[1];
          break;
        case 3:
          one = num[0];
          two = four = num[1];
          three = num[2];
          break;
        case 1:
          num = num[0];
          break;
        default:
          num = 0;
      }
    }
    return one === undefined ? [num, num, num, num] : [one, two, three, four];
  },
  formatRotation(rotation, unsign) {
    rotation %= 360;
    if (unsign) {
      if (rotation < 0)
        rotation += 360;
    } else {
      if (rotation > 180)
        rotation -= 360;
      if (rotation < -180)
        rotation += 360;
    }
    return rotation;
  },
  getGapRotation(rotation, gap) {
    if (gap > 1) {
      const r = Math.abs(rotation % gap);
      if (r < 1 || r > gap - 1)
        rotation = Math.round(rotation / gap) * gap;
    }
    return rotation;
  },
  formatSkew(skew) {
    return MathHelper.within(skew, -90, 90);
  }
};
var OneRadian = Math.PI / 180;
var PI2 = Math.PI * 2;
var PI_2 = Math.PI / 2;
var { sin: sin$4, cos: cos$4, acos, atan, sqrt: sqrt$3, PI: PI$1 } = Math;
var tempPoint$1 = {};
var MatrixHelper = {
  defaultMatrix: get(),
  tempMatrix: {},
  set(t, a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
    t.a = a;
    t.b = b;
    t.c = c;
    t.d = d;
    t.e = e;
    t.f = f;
  },
  get,
  copy(t, matrix) {
    t.a = matrix.a;
    t.b = matrix.b;
    t.c = matrix.c;
    t.d = matrix.d;
    t.e = matrix.e;
    t.f = matrix.f;
  },
  translate(t, x, y) {
    t.e += x;
    t.f += y;
  },
  translateInner(t, x, y) {
    t.e += t.a * x + t.c * y;
    t.f += t.b * x + t.d * y;
  },
  scale(t, x, y = x) {
    t.a *= x;
    t.b *= x;
    t.c *= y;
    t.d *= y;
  },
  scaleOfOuter(t, origin, x, y = x) {
    M$6.toInnerPoint(t, origin, tempPoint$1);
    M$6.scaleOfInner(t, tempPoint$1, x, y);
  },
  scaleOfInner(t, origin, x, y = x) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.scale(t, x, y);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  rotate(t, angle) {
    angle *= OneRadian;
    const cosR = cos$4(angle);
    const sinR = sin$4(angle);
    const { a, b, c, d } = t;
    t.a = a * cosR - b * sinR;
    t.b = a * sinR + b * cosR;
    t.c = c * cosR - d * sinR;
    t.d = c * sinR + d * cosR;
  },
  rotateOfOuter(t, origin, angle) {
    M$6.toInnerPoint(t, origin, tempPoint$1);
    M$6.rotateOfInner(t, tempPoint$1, angle);
  },
  rotateOfInner(t, origin, angle) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.rotate(t, angle);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  skew(t, x, y) {
    const { a, b, c, d } = t;
    if (y) {
      y *= OneRadian;
      t.a = a + c * y;
      t.b = b + d * y;
    }
    if (x) {
      x *= OneRadian;
      t.c = c + a * x;
      t.d = d + b * x;
    }
  },
  skewOfOuter(t, origin, x, y) {
    M$6.toInnerPoint(t, origin, tempPoint$1);
    M$6.skewOfInner(t, tempPoint$1, x, y);
  },
  skewOfInner(t, origin, x, y) {
    M$6.translateInner(t, origin.x, origin.y);
    M$6.skew(t, x, y);
    M$6.translateInner(t, -origin.x, -origin.y);
  },
  multiply(t, matrix) {
    const { a, b, c, d, e, f } = t;
    t.a = matrix.a * a + matrix.b * c;
    t.b = matrix.a * b + matrix.b * d;
    t.c = matrix.c * a + matrix.d * c;
    t.d = matrix.c * b + matrix.d * d;
    t.e = matrix.e * a + matrix.f * c + e;
    t.f = matrix.e * b + matrix.f * d + f;
  },
  preMultiply(t, matrix) {
    const { a, b, c, d, e, f } = t;
    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
      t.a = a * matrix.a + b * matrix.c;
      t.b = a * matrix.b + b * matrix.d;
      t.c = c * matrix.a + d * matrix.c;
      t.d = c * matrix.b + d * matrix.d;
    }
    t.e = e * matrix.a + f * matrix.c + matrix.e;
    t.f = e * matrix.b + f * matrix.d + matrix.f;
  },
  divide(t, matrix) {
    M$6.preMultiply(t, M$6.tempInvert(matrix));
  },
  tempInvert(t) {
    const { tempMatrix: temp } = M$6;
    M$6.copy(temp, t);
    M$6.invert(temp);
    return temp;
  },
  invert(t) {
    const { a, b, c, d, e, f } = t;
    const s = 1 / (a * d - b * c);
    t.a = d * s;
    t.b = -b * s;
    t.c = -c * s;
    t.d = a * s;
    t.e = -(e * d - f * c) * s;
    t.f = -(f * a - e * b) * s;
  },
  toOuterPoint(t, inner, to, distance) {
    const { x, y } = inner;
    to || (to = inner);
    to.x = x * t.a + y * t.c;
    to.y = x * t.b + y * t.d;
    if (!distance) {
      to.x += t.e;
      to.y += t.f;
    }
  },
  toInnerPoint(t, outer, to, distance) {
    const { x, y } = outer;
    const { a, b, c, d } = t;
    const s = 1 / (a * d - b * c);
    to || (to = outer);
    to.x = (x * d - y * c) * s;
    to.y = (y * a - x * b) * s;
    if (!distance) {
      const { e, f } = t;
      to.x -= (e * d - f * c) * s;
      to.y -= (f * a - e * b) * s;
    }
  },
  decompose(t) {
    const { a, b, c, d } = t;
    let scaleX = a, scaleY = d, rotation = 0, skewX = 0, skewY = 0;
    if (b || c) {
      const s = a * d - b * c;
      const k = a * c + b * d;
      if (b) {
        const ab = a * a + b * b;
        scaleX = sqrt$3(ab);
        scaleY = s / scaleX;
        const r = a / scaleX;
        rotation = b > 0 ? acos(r) : -acos(r);
        skewX = atan(k / ab) / OneRadian;
      } else {
        const cd = c * c + d * d;
        scaleY = sqrt$3(cd);
        scaleX = s / scaleY;
        const r = c / scaleY;
        rotation = PI$1 / 2 - (d > 0 ? acos(-r) : -acos(r));
        skewY = atan(k / cd) / OneRadian;
      }
      rotation /= OneRadian;
    }
    return { x: t.e, y: t.f, scaleX, scaleY, rotation, skewX, skewY };
  },
  reset(t) {
    M$6.set(t);
  }
};
var M$6 = MatrixHelper;
var { toInnerPoint: toInnerPoint$2, toOuterPoint: toOuterPoint$2 } = MatrixHelper;
var { sin: sin$3, cos: cos$3, abs: abs$1, sqrt: sqrt$2, atan2: atan2$2 } = Math;
var PointHelper = {
  defaultPoint: { x: 0, y: 0 },
  tempPoint: {},
  tempRadiusPoint: {},
  set(t, x = 0, y = 0) {
    t.x = x;
    t.y = y;
  },
  setRadius(t, x, y) {
    t.radiusX = x;
    t.radiusY = y === undefined ? x : y;
  },
  copy(t, point) {
    t.x = point.x;
    t.y = point.y;
  },
  move(t, x, y) {
    t.x += x;
    t.y += y;
  },
  rotate(t, rotation, center) {
    if (!center)
      center = P$5.defaultPoint;
    const cosR = cos$3(rotation * OneRadian);
    const sinR = sin$3(rotation * OneRadian);
    const rx = t.x - center.x;
    const ry = t.y - center.y;
    t.x = center.x + rx * cosR - ry * sinR;
    t.y = center.y + rx * sinR + ry * cosR;
  },
  tempToInnerOf(t, matrix) {
    const { tempPoint: temp } = P$5;
    P$5.copy(temp, t);
    toInnerPoint$2(matrix, temp, temp);
    return temp;
  },
  tempToOuterOf(t, matrix) {
    const { tempPoint: temp } = P$5;
    P$5.copy(temp, t);
    toOuterPoint$2(matrix, temp, temp);
    return temp;
  },
  tempToInnerRadiusPointOf(t, matrix) {
    const { tempRadiusPoint: temp } = P$5;
    P$5.copy(temp, t);
    P$5.toInnerRadiusPointOf(t, matrix, temp);
    return temp;
  },
  toInnerRadiusPointOf(t, matrix, to) {
    to || (to = t);
    toInnerPoint$2(matrix, t, to);
    to.radiusX = Math.abs(t.radiusX / matrix.scaleX);
    to.radiusY = Math.abs(t.radiusY / matrix.scaleY);
  },
  toInnerOf(t, matrix, to) {
    toInnerPoint$2(matrix, t, to);
  },
  toOuterOf(t, matrix, to) {
    toOuterPoint$2(matrix, t, to);
  },
  getCenter(t, to) {
    return { x: t.x + (to.x - t.x) / 2, y: t.y + (to.y - t.y) / 2 };
  },
  getDistance(t, point) {
    const x = abs$1(point.x - t.x);
    const y = abs$1(point.y - t.y);
    return sqrt$2(x * x + y * y);
  },
  getAngle(t, to) {
    return P$5.getAtan2(t, to) / OneRadian;
  },
  getChangeAngle(t, orign, to, toOrigin) {
    if (!toOrigin)
      toOrigin = orign;
    let fromAngle = P$5.getAngle(t, orign);
    let toAngle = P$5.getAngle(to, toOrigin);
    const angle = toAngle - fromAngle;
    return angle < -180 ? angle + 360 : angle;
  },
  getAtan2(t, to) {
    return atan2$2(to.y - t.y, to.x - t.x);
  },
  getDistancePoint(t, to, distance) {
    const r = P$5.getAtan2(t, to);
    return { x: t.x + cos$3(r) * distance, y: t.y + sin$3(r) * distance };
  },
  reset(t) {
    P$5.reset(t);
  }
};
var P$5 = PointHelper;
class Matrix {
  constructor(a, b, c, d, e, f) {
    typeof a === "object" ? MatrixHelper.copy(this, a) : MatrixHelper.set(this, a, b, c, d, e, f);
  }
  set(a, b, c, d, e, f) {
    MatrixHelper.set(this, a, b, c, d, e, f);
  }
  copy(matrix) {
    MatrixHelper.copy(this, matrix);
    return this;
  }
  clone() {
    return new Matrix(this);
  }
  translate(x, y) {
    MatrixHelper.translate(this, x, y);
    return this;
  }
  translateInner(x, y) {
    MatrixHelper.translateInner(this, x, y);
    return this;
  }
  scale(x, y) {
    MatrixHelper.scale(this, x, y);
    return this;
  }
  scaleOfOuter(origin, x, y) {
    MatrixHelper.scaleOfOuter(this, origin, x, y);
    return this;
  }
  scaleOfInner(origin, x, y) {
    MatrixHelper.scaleOfInner(this, origin, x, y);
    return this;
  }
  rotate(angle) {
    MatrixHelper.rotate(this, angle);
    return this;
  }
  rotateOfOuter(origin, angle) {
    MatrixHelper.rotateOfOuter(this, origin, angle);
    return this;
  }
  rotateOfInner(origin, angle) {
    MatrixHelper.rotateOfInner(this, origin, angle);
    return this;
  }
  skew(x, y) {
    MatrixHelper.skew(this, x, y);
    return this;
  }
  skewOfOuter(origin, x, y) {
    MatrixHelper.skewOfOuter(this, origin, x, y);
    return this;
  }
  skewOfInner(origin, x, y) {
    MatrixHelper.skewOfInner(this, origin, x, y);
    return this;
  }
  multiply(matrix) {
    MatrixHelper.multiply(this, matrix);
    return this;
  }
  preMultiply(matrix) {
    MatrixHelper.preMultiply(this, matrix);
    return this;
  }
  divide(matrix) {
    MatrixHelper.divide(this, matrix);
    return this;
  }
  invert() {
    MatrixHelper.invert(this);
    return this;
  }
  toOuterPoint(inner, to, distance) {
    MatrixHelper.toOuterPoint(this, inner, to, distance);
  }
  toInnerPoint(outer, to, distance) {
    MatrixHelper.toInnerPoint(this, outer, to, distance);
  }
  decompose() {
    return MatrixHelper.decompose(this);
  }
  reset() {
    MatrixHelper.reset(this);
  }
}
var TwoPointBoundsHelper = {
  tempPointBounds: {},
  setPoint(t, minX, minY) {
    t.minX = t.maxX = minX;
    t.minY = t.maxY = minY;
  },
  addPoint(t, x, y) {
    t.minX = x < t.minX ? x : t.minX;
    t.minY = y < t.minY ? y : t.minY;
    t.maxX = x > t.maxX ? x : t.maxX;
    t.maxY = y > t.maxY ? y : t.maxY;
  },
  addBounds(t, x, y, width, height) {
    addPoint$3(t, x, y);
    addPoint$3(t, x + width, y + height);
  },
  copy(t, pb) {
    t.minX = pb.minX;
    t.minY = pb.minY;
    t.maxX = pb.maxX;
    t.maxY = pb.maxY;
  },
  add(t, pb) {
    t.minX = pb.minX < t.minX ? pb.minX : t.minX;
    t.minY = pb.minY < t.minY ? pb.minY : t.minY;
    t.maxX = pb.maxX > t.maxX ? pb.maxX : t.maxX;
    t.maxY = pb.maxY > t.maxY ? pb.maxY : t.maxY;
  },
  toBounds(t, setBounds) {
    setBounds.x = t.minX;
    setBounds.y = t.minY;
    setBounds.width = t.maxX - t.minX;
    setBounds.height = t.maxY - t.minY;
  }
};
var { addPoint: addPoint$3 } = TwoPointBoundsHelper;
var { tempPointBounds: tempPointBounds$1, setPoint: setPoint$2, addPoint: addPoint$2, toBounds: toBounds$1 } = TwoPointBoundsHelper;
var { toOuterPoint: toOuterPoint$1 } = MatrixHelper;
var right;
var bottom;
var boundsRight;
var boundsBottom;
var point = {};
var toPoint = {};
var BoundsHelper = {
  tempBounds: {},
  set(t, x = 0, y = 0, width = 0, height = 0) {
    t.x = x;
    t.y = y;
    t.width = width;
    t.height = height;
  },
  copy(t, bounds) {
    t.x = bounds.x;
    t.y = bounds.y;
    t.width = bounds.width;
    t.height = bounds.height;
  },
  copyAndSpread(t, bounds, spreadX, spreadY) {
    if (!spreadY)
      spreadY = spreadX;
    B.set(t, bounds.x - spreadX, bounds.y - spreadY, bounds.width + spreadX * 2, bounds.height + spreadY * 2);
  },
  right(t) {
    return t.x + t.width;
  },
  bottom(t) {
    return t.y + t.height;
  },
  move(t, x, y) {
    t.x += x;
    t.y += y;
  },
  getByMove(t, x, y) {
    t = Object.assign({}, t);
    B.move(t, x, y);
    return t;
  },
  toOffsetOutBounds(t, to, parent) {
    if (!to) {
      to = t;
    } else {
      copy$4(to, t);
    }
    if (parent) {
      to.offsetX = -(B.right(parent) - t.x);
      to.offsetY = -(B.bottom(parent) - t.y);
    } else {
      to.offsetX = t.x + t.width;
      to.offsetY = t.y + t.height;
    }
    B.move(to, -to.offsetX, -to.offsetY);
  },
  scale(t, scaleX, scaleY = scaleX) {
    if (t.x)
      t.x *= scaleX;
    if (t.y)
      t.y *= scaleY;
    t.width *= scaleX;
    t.height *= scaleY;
  },
  scaleOf(t, origin, scaleX, scaleY) {
    t.x += (t.x - origin.x) * (scaleX - 1);
    t.y += (t.y - origin.y) * (scaleY - 1);
    t.width *= scaleX;
    t.height *= scaleY;
  },
  tempToOuterOf(t, matrix) {
    B.copy(B.tempBounds, t);
    B.toOuterOf(B.tempBounds, matrix);
    return B.tempBounds;
  },
  getOuterOf(t, matrix) {
    t = Object.assign({}, t);
    B.toOuterOf(t, matrix);
    return t;
  },
  toOuterOf(t, matrix, to) {
    to || (to = t);
    if (matrix.b === 0 && matrix.c === 0) {
      const { a, d } = matrix;
      if (a > 0) {
        to.width = t.width * a;
        to.x = matrix.e + t.x * a;
      } else {
        to.width = t.width * -a;
        to.x = matrix.e + t.x * a - to.width;
      }
      if (d > 0) {
        to.height = t.height * d;
        to.y = matrix.f + t.y * d;
      } else {
        to.height = t.height * -d;
        to.y = matrix.f + t.y * d - to.height;
      }
    } else {
      point.x = t.x;
      point.y = t.y;
      toOuterPoint$1(matrix, point, toPoint);
      setPoint$2(tempPointBounds$1, toPoint.x, toPoint.y);
      point.x = t.x + t.width;
      toOuterPoint$1(matrix, point, toPoint);
      addPoint$2(tempPointBounds$1, toPoint.x, toPoint.y);
      point.y = t.y + t.height;
      toOuterPoint$1(matrix, point, toPoint);
      addPoint$2(tempPointBounds$1, toPoint.x, toPoint.y);
      point.x = t.x;
      toOuterPoint$1(matrix, point, toPoint);
      addPoint$2(tempPointBounds$1, toPoint.x, toPoint.y);
      toBounds$1(tempPointBounds$1, to);
    }
  },
  getFitMatrix(t, put) {
    const scale = Math.min(1, Math.min(t.width / put.width, t.height / put.height));
    return new Matrix(scale, 0, 0, scale, -put.x * scale, -put.y * scale);
  },
  getSpread(t, spreadX, spreadY) {
    const n = {};
    B.copyAndSpread(n, t, spreadX, spreadY);
    return n;
  },
  spread(t, spreadX, spreadY = spreadX) {
    B.copyAndSpread(t, t, spreadX, spreadY);
  },
  ceil(t) {
    t.x = Math.floor(t.x);
    t.y = Math.floor(t.y);
    t.width = Math.ceil(t.width);
    t.height = Math.ceil(t.height);
  },
  unsign(t) {
    if (t.width < 0) {
      t.x += t.width;
      t.width = -t.width;
    }
    if (t.height < 0) {
      t.y += t.height;
      t.height = -t.height;
    }
  },
  add(t, bounds) {
    right = t.x + t.width;
    bottom = t.y + t.height;
    boundsRight = bounds.x + bounds.width;
    boundsBottom = bounds.y + bounds.height;
    right = right > boundsRight ? right : boundsRight;
    bottom = bottom > boundsBottom ? bottom : boundsBottom;
    t.x = t.x < bounds.x ? t.x : bounds.x;
    t.y = t.y < bounds.y ? t.y : bounds.y;
    t.width = right - t.x;
    t.height = bottom - t.y;
  },
  addList(t, list) {
    B.setByListWithHandle(t, list, undefined, true);
  },
  setByList(t, list, addMode = false) {
    B.setByListWithHandle(t, list, undefined, addMode);
  },
  addListWithHandle(t, list, boundsDataHandle) {
    B.setByListWithHandle(t, list, boundsDataHandle, true);
  },
  setByListWithHandle(t, list, boundsDataHandle, addMode = false) {
    let bounds, first = true;
    for (let i = 0, len = list.length;i < len; i++) {
      bounds = boundsDataHandle ? boundsDataHandle(list[i]) : list[i];
      if (bounds && (bounds.width || bounds.height)) {
        if (first) {
          first = false;
          if (!addMode)
            copy$4(t, bounds);
        } else {
          add$1(t, bounds);
        }
      }
    }
    if (first)
      B.reset(t);
  },
  setByPoints(t, points) {
    points.forEach((point2, index) => {
      index === 0 ? setPoint$2(tempPointBounds$1, point2.x, point2.y) : addPoint$2(tempPointBounds$1, point2.x, point2.y);
    });
    toBounds$1(tempPointBounds$1, t);
  },
  hitRadiusPoint(t, point2, pointMatrix) {
    if (pointMatrix)
      point2 = PointHelper.tempToInnerRadiusPointOf(point2, pointMatrix);
    return point2.x >= t.x - point2.radiusX && point2.x <= t.x + t.width + point2.radiusX && (point2.y >= t.y - point2.radiusY && point2.y <= t.y + t.height + point2.radiusY);
  },
  hitPoint(t, point2, pointMatrix) {
    if (pointMatrix)
      point2 = PointHelper.tempToInnerOf(point2, pointMatrix);
    return point2.x >= t.x && point2.x <= t.x + t.width && (point2.y >= t.y && point2.y <= t.y + t.height);
  },
  hit(t, other, otherMatrix) {
    if (otherMatrix)
      other = B.tempToOuterOf(other, otherMatrix);
    return !(t.y + t.height < other.y || other.y + other.height < t.y || t.x + t.width < other.x || other.x + other.width < t.x);
  },
  includes(t, other, otherMatrix) {
    if (otherMatrix)
      other = B.tempToOuterOf(other, otherMatrix);
    return t.x <= other.x && t.y <= other.y && t.x + t.width >= other.x + other.width && t.y + t.height >= other.y + other.height;
  },
  getIntersectData(t, other, otherMatrix) {
    if (otherMatrix)
      other = B.tempToOuterOf(other, otherMatrix);
    let { x, y, width, height } = other;
    right = x + width;
    bottom = y + height;
    boundsRight = t.x + t.width;
    boundsBottom = t.y + t.height;
    x = x > t.x ? x : t.x;
    y = y > t.y ? y : t.y;
    right = right < boundsRight ? right : boundsRight;
    bottom = bottom < boundsBottom ? bottom : boundsBottom;
    width = right - x;
    height = bottom - y;
    return { x, y, width, height };
  },
  intersect(t, other, otherMatrix) {
    B.copy(t, B.getIntersectData(t, other, otherMatrix));
  },
  isSame(t, bounds) {
    return t.x === bounds.x && t.y === bounds.y && t.width === bounds.width && t.height === bounds.height;
  },
  isEmpty(t) {
    return t.x === 0 && t.y === 0 && t.width === 0 && t.height === 0;
  },
  reset(t) {
    B.set(t);
  }
};
var B = BoundsHelper;
var { add: add$1, copy: copy$4 } = B;

class Bounds {
  constructor(x, y, width, height) {
    typeof x === "object" ? BoundsHelper.copy(this, x) : BoundsHelper.set(this, x, y, width, height);
  }
  set(x, y, width, height) {
    BoundsHelper.set(this, x, y, width, height);
  }
  copy(bounds) {
    BoundsHelper.copy(this, bounds);
    return this;
  }
  clone() {
    return new Bounds(this);
  }
  scale(scaleX, scaleY) {
    BoundsHelper.scale(this, scaleX, scaleY);
    return this;
  }
  scaleOf(origin, scaleX, scaleY) {
    BoundsHelper.scaleOf(this, origin, scaleX, scaleY);
    return this;
  }
  toOuterOf(matrix, to) {
    BoundsHelper.toOuterOf(this, matrix, to);
    return this;
  }
  getFitMatrix(put) {
    return BoundsHelper.getFitMatrix(this, put);
  }
  spread(spreadX, spreadY) {
    BoundsHelper.spread(this, spreadX, spreadY);
    return this;
  }
  ceil() {
    BoundsHelper.ceil(this);
    return this;
  }
  unsign() {
    BoundsHelper.unsign(this);
    return this;
  }
  add(bounds) {
    BoundsHelper.add(this, bounds);
    return this;
  }
  addList(boundsList) {
    BoundsHelper.setByList(this, boundsList, true);
    return this;
  }
  setByList(boundsList, addMode) {
    BoundsHelper.setByList(this, boundsList, addMode);
    return this;
  }
  addListWithHandle(list, boundsDataHandle) {
    BoundsHelper.setByListWithHandle(this, list, boundsDataHandle, true);
    return this;
  }
  setByListWithHandle(list, boundsDataHandle, addMode) {
    BoundsHelper.setByListWithHandle(this, list, boundsDataHandle, addMode);
    return this;
  }
  setByPoints(points) {
    BoundsHelper.setByPoints(this, points);
    return this;
  }
  hitPoint(point2, pointMatrix) {
    return BoundsHelper.hitPoint(this, point2, pointMatrix);
  }
  hitRadiusPoint(point2, pointMatrix) {
    return BoundsHelper.hitRadiusPoint(this, point2, pointMatrix);
  }
  hit(bounds, boundsMatrix) {
    return BoundsHelper.hit(this, bounds, boundsMatrix);
  }
  includes(bounds, boundsMatrix) {
    return BoundsHelper.includes(this, bounds, boundsMatrix);
  }
  intersect(bounds, boundsMatrix) {
    BoundsHelper.intersect(this, bounds, boundsMatrix);
    return this;
  }
  getIntersect(bounds, boundsMatrix) {
    return new Bounds(BoundsHelper.getIntersectData(this, bounds, boundsMatrix));
  }
  isSame(bounds) {
    return BoundsHelper.isSame(this, bounds);
  }
  isEmpty() {
    return BoundsHelper.isEmpty(this);
  }
  reset() {
    BoundsHelper.reset(this);
  }
}

class AutoBounds {
  constructor(top, right2, bottom2, left, width, height) {
    typeof top === "object" ? this.copy(top) : this.set(top, right2, bottom2, left, width, height);
  }
  set(top = 0, right2 = 0, bottom2 = 0, left = 0, width = 0, height = 0) {
    this.top = top;
    this.right = right2;
    this.bottom = bottom2;
    this.left = left;
    this.width = width;
    this.height = height;
  }
  copy(autoSize) {
    const { top, right: right2, bottom: bottom2, left, width, height } = autoSize;
    this.set(top, right2, bottom2, left, width, height);
  }
  getBoundsFrom(parent) {
    const { top, right: right2, bottom: bottom2, left, width, height } = this;
    return new Bounds(left, top, width ? width : parent.width - left - right2, height ? height : parent.height - top - bottom2);
  }
}
var StringNumberMap = {
  "0": 1,
  "1": 1,
  "2": 1,
  "3": 1,
  "4": 1,
  "5": 1,
  "6": 1,
  "7": 1,
  "8": 1,
  "9": 1,
  ".": 1,
  e: 1,
  E: 1
};

class Debug {
  constructor(name) {
    this.repeatMap = {};
    this.name = name;
  }
  static get(name) {
    return new Debug(name);
  }
  static set filter(name) {
    if (!name)
      name = [];
    else if (typeof name === "string")
      name = [name];
    this.filterList = name;
  }
  static set exclude(name) {
    if (!name)
      name = [];
    else if (typeof name === "string")
      name = [name];
    this.excludeList = name;
  }
  log(...messages) {
    if (D$4.enable) {
      if (D$4.filterList.length && D$4.filterList.every((name) => name !== this.name))
        return;
      if (D$4.excludeList.length && D$4.excludeList.some((name) => name === this.name))
        return;
      console.log("%c" + this.name, "color:#21ae62", ...messages);
    }
  }
  warn(...messages) {
    if (D$4.enable)
      console.warn(this.name, ...messages);
  }
  repeat(name, ...messages) {
    if (!this.repeatMap[name]) {
      this.warn("repeat:" + name, ...messages);
      this.repeatMap[name] = true;
    }
  }
  error(...messages) {
    try {
      throw new Error;
    } catch (e) {
      console.error(this.name, ...messages, e);
    }
  }
}
Debug.filterList = [];
Debug.excludeList = [];
var D$4 = Debug;
var debug$9 = Debug.get("RunTime");

class Run {
  static start(name, microsecond) {
    const id = IncrementId.create(IncrementId.RUNTIME);
    R.currentId = R.idMap[id] = microsecond ? performance.now() : Date.now();
    R.currentName = R.nameMap[id] = name;
    R.nameToIdMap[name] = id;
    return id;
  }
  static end(id, microsecond) {
    const time = R.idMap[id];
    const name = R.nameMap[id];
    R.idMap[id] = R.nameMap[id] = R.nameToIdMap[name] = undefined;
    if (microsecond) {
      debug$9.log(name, performance.now() - time, "\xB5s");
    } else {
      debug$9.log(name, Date.now() - time, "ms");
    }
  }
  static endOfName(name, microsecond) {
    const id = R.nameToIdMap[name];
    if (id !== undefined)
      R.end(id, microsecond);
  }
}
Run.idMap = {};
Run.nameMap = {};
Run.nameToIdMap = {};
var R = Run;
var debug$8 = Debug.get("UICreator");
var UICreator = {
  list: {},
  register(UI) {
    const { __tag: tag } = UI.prototype;
    if (list$1[tag]) {
      debug$8.repeat(tag);
    } else {
      list$1[tag] = UI;
    }
  },
  get(tag, data, x, y, width, height) {
    const ui = new list$1[tag](data);
    if (x !== undefined) {
      ui.x = x;
      if (y)
        ui.y = y;
      if (width)
        ui.width = width;
      if (height)
        ui.height = height;
    }
    return ui;
  }
};
var { list: list$1 } = UICreator;
var debug$7 = Debug.get("EventCreator");
var EventCreator = {
  nameList: {},
  register(Event) {
    let name;
    Object.keys(Event).forEach((key) => {
      name = Event[key];
      if (typeof name === "string")
        nameList[name] ? debug$7.repeat(name) : nameList[name] = Event;
    });
  },
  changeName(oldName, newName) {
    const Event = nameList[oldName];
    if (Event) {
      const constName = Object.keys(Event).find((key) => Event[key] === oldName);
      if (constName) {
        Event[constName] = newName;
        nameList[newName] = Event;
      }
    }
  },
  has(type) {
    return !!this.nameList[type];
  },
  get(type, ...params) {
    return new nameList[type](...params);
  }
};
var { nameList } = EventCreator;

class CanvasManager {
  constructor() {
    this.list = [];
  }
  add(canvas) {
    canvas.manager = this;
    this.list.push(canvas);
  }
  get(size) {
    let old;
    const { list } = this;
    for (let i = 0, len = list.length;i < len; i++) {
      old = list[i];
      if (old.recycled && old.isSameSize(size)) {
        old.recycled = false;
        old.manager || (old.manager = this);
        return old;
      }
    }
    const canvas = Creator.canvas(size);
    this.add(canvas);
    return canvas;
  }
  recycle(old) {
    if (!old.recycled) {
      old.clear();
      old.recycled = true;
    }
  }
  clearRecycled() {
    let canvas;
    const filter = [];
    for (let i = 0, len = this.list.length;i < len; i++) {
      canvas = this.list[i];
      canvas.recycled ? canvas.destroy() : filter.push(canvas);
    }
    this.list = filter;
  }
  clear() {
    this.list.forEach((item) => {
      item.destroy();
    });
    this.list.length = 0;
  }
  destroy() {
    this.clear();
  }
}

class LeafList {
  get length() {
    return this.list.length;
  }
  constructor(item) {
    this.reset();
    if (item)
      item instanceof Array ? this.pushList(item) : this.push(item);
  }
  has(leaf) {
    return leaf && this.keys[leaf.innerId] !== undefined;
  }
  indexAt(index) {
    return this.list[index];
  }
  indexOf(leaf) {
    const index = this.keys[leaf.innerId];
    return index === undefined ? -1 : index;
  }
  pushList(list) {
    list.forEach((leaf) => {
      this.push(leaf);
    });
  }
  unshift(leaf) {
    const { keys } = this;
    if (keys[leaf.innerId] === undefined) {
      this.list.unshift(leaf);
      Object.keys(keys).forEach((innerId) => {
        if (keys[innerId] !== undefined)
          keys[innerId]++;
      });
      keys[leaf.innerId] = 0;
    }
  }
  push(leaf) {
    const { list, keys } = this;
    if (keys[leaf.innerId] === undefined) {
      list.push(leaf);
      keys[leaf.innerId] = list.length - 1;
    }
  }
  sort(reverse) {
    const { list } = this;
    if (reverse) {
      list.sort((a, b) => b.__level - a.__level);
    } else {
      list.sort((a, b) => a.__level - b.__level);
    }
  }
  remove(leaf) {
    const { list } = this;
    let findIndex;
    for (let i = 0, len = list.length;i < len; i++) {
      if (findIndex !== undefined) {
        this.keys[list[i].innerId] = i - 1;
      } else if (list[i].innerId === leaf.innerId) {
        findIndex = i;
        delete this.keys[leaf.innerId];
      }
    }
    if (findIndex !== undefined)
      list.splice(findIndex, 1);
  }
  forEach(itemCallback) {
    this.list.forEach(itemCallback);
  }
  clone() {
    const list = new LeafList;
    this.list.forEach((item) => {
      list.push(item);
    });
    return list;
  }
  reset() {
    this.list = [];
    this.keys = {};
  }
  destroy() {
    this.list = null;
  }
}

class LeafLevelList {
  get length() {
    return this._length;
  }
  constructor(item) {
    this._length = 0;
    this.reset();
    if (item)
      item instanceof Array ? this.pushList(item) : this.push(item);
  }
  has(leaf) {
    return this.keys[leaf.innerId] !== undefined;
  }
  without(leaf) {
    return this.keys[leaf.innerId] === undefined;
  }
  sort(reverse) {
    const { levels } = this;
    if (reverse) {
      levels.sort((a, b) => b - a);
    } else {
      levels.sort((a, b) => a - b);
    }
  }
  pushList(list) {
    list.forEach((leaf) => {
      this.push(leaf);
    });
  }
  push(leaf) {
    const { keys, levelMap } = this;
    if (!keys[leaf.innerId]) {
      keys[leaf.innerId] = 1;
      if (!levelMap[leaf.__level]) {
        levelMap[leaf.__level] = [leaf];
        this.levels.push(leaf.__level);
      } else {
        levelMap[leaf.__level].push(leaf);
      }
      this._length++;
    }
  }
  forEach(itemCallback) {
    let list;
    this.levels.forEach((level) => {
      list = this.levelMap[level];
      for (let i = 0, len = list.length;i < len; i++) {
        itemCallback(list[i]);
      }
    });
  }
  reset() {
    this.levelMap = {};
    this.keys = {};
    this.levels = [];
    this._length = 0;
  }
  destroy() {
    this.levelMap = null;
  }
}

class HitCanvasManager extends CanvasManager {
  constructor() {
    super(...arguments);
    this.pathTypeList = new LeafList;
    this.imageTypeList = new LeafList;
  }
  getImageType(leaf, size) {
    this.imageTypeList.push(leaf);
    return Creator.hitCanvas(size);
  }
  getPathType(leaf) {
    this.pathTypeList.push(leaf);
    return Creator.hitCanvas();
  }
  clearImageType() {
    this.__clearLeafList(this.imageTypeList);
  }
  clearPathType() {
    this.__clearLeafList(this.pathTypeList);
  }
  __clearLeafList(leafList) {
    if (leafList.length) {
      leafList.forEach((leaf) => {
        if (leaf.__hitCanvas) {
          leaf.__hitCanvas.destroy();
          leaf.__hitCanvas = null;
        }
      });
      leafList.reset();
    }
  }
  clear() {
    this.clearPathType();
    this.clearImageType();
  }
}
var DataHelper = {
  default(t, defaultData) {
    assign(defaultData, t);
    assign(t, defaultData);
    return t;
  },
  assign(t, merge) {
    let value;
    Object.keys(merge).forEach((key) => {
      var _a;
      value = merge[key];
      if ((value === null || value === undefined ? undefined : value.constructor) === Object) {
        ((_a = t[key]) === null || _a === undefined ? undefined : _a.constructor) === Object ? assign(t[key], merge[key]) : t[key] = merge[key];
      } else {
        t[key] = merge[key];
      }
    });
  },
  copyAttrs(t, from, include) {
    include.forEach((key) => {
      if (from[key] !== undefined)
        t[key] = from[key];
    });
    return t;
  },
  clone(data) {
    return JSON.parse(JSON.stringify(data));
  }
};
var { assign } = DataHelper;

class LeafData {
  constructor(leaf) {
    this.__leaf = leaf;
  }
  __get(name) {
    if (this.__input) {
      const value = this.__input[name];
      if (value !== undefined)
        return value;
    }
    return this[name];
  }
  __setInput(name, value) {
    this.__input || (this.__input = {});
    this.__input[name] = value;
  }
  __getInput(name) {
    if (this.__input) {
      const value = this.__input[name];
      if (value !== undefined)
        return value;
    }
    return this["_" + name];
  }
  __removeInput(name) {
    if (this.__input && this.__input[name] !== undefined)
      this.__input[name] = undefined;
  }
  __getInputData(options) {
    const data = { tag: this.__leaf.tag }, { __input } = this;
    if (options) {
      for (let key in this) {
        if (key[0] !== "_")
          data[key] = this[key];
      }
    } else {
      let realKey, value;
      for (let key in this) {
        realKey = key.substring(1);
        if (this[realKey] !== undefined) {
          value = __input ? __input[realKey] : undefined;
          data[realKey] = value === undefined ? this[key] : value;
        }
      }
    }
    return data;
  }
  __setMiddle(name, value) {
    this.__middle || (this.__middle = {});
    this.__middle[name] = value;
  }
  __getMiddle(name) {
    return this.__middle && this.__middle[name];
  }
  __checkSingle() {
    if (this.blendMode === "pass-through") {
      if (this.__leaf.__hasEraser || this.isEraser) {
        this.__single = true;
      } else if (this.__single) {
        this.__single = false;
      }
    } else {
      this.__single = true;
    }
  }
  destroy() {
    this.__input = this.__middle = null;
  }
}
var FileHelper = {
  opacityTypes: ["png", "webp", "svg"],
  upperCaseTypeMap: {},
  mineType(type) {
    if (!type || type.startsWith("image"))
      return type;
    if (type === "jpg")
      type = "jpeg";
    return "image/" + type;
  },
  fileType(filename) {
    const l = filename.split(".");
    return l[l.length - 1];
  }
};
FileHelper.opacityTypes.forEach((type) => FileHelper.upperCaseTypeMap[type] = type.toUpperCase());
var contextMethodNameList = [];
var emptyArray = [];

class Canvas {
  set blendMode(value) {
    if (value === "normal")
      value = "source-over";
    this.context.globalCompositeOperation = value;
  }
  get blendMode() {
    return this.context.globalCompositeOperation;
  }
  set dashPattern(value) {
    this.context.setLineDash(value || emptyArray);
  }
  get dashPattern() {
    return this.context.getLineDash();
  }
  __bindContext() {
    let method;
    contextMethodNameList.forEach((name) => {
      method = this.context[name];
      if (method)
        this[name] = method.bind(this.context);
    });
    this.textBaseline = "alphabetic";
  }
  setTransform(_a, _b, _c, _d, _e, _f) {
  }
  resetTransform() {
  }
  getTransform() {
    return;
  }
  save() {
  }
  restore() {
  }
  transform(a, b, c, d, e, f) {
    if (typeof a === "object") {
      this.context.transform(a.a, a.b, a.c, a.d, a.e, a.f);
    } else {
      this.context.transform(a, b, c, d, e, f);
    }
  }
  translate(_x, _y) {
  }
  scale(_x, _y) {
  }
  rotate(_angle) {
  }
  fill(_path2d, _rule) {
  }
  stroke(_path2d) {
  }
  clip(_path2d, _rule) {
  }
  fillRect(_x, _y, _width, _height) {
  }
  strokeRect(_x, _y, _width, _height) {
  }
  clearRect(_x, _y, _width, _height) {
  }
  drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    switch (arguments.length) {
      case 9:
        if (sx < 0) {
          const d = -sx / sw * dw;
          sw += sx;
          sx = 0;
          dx += d;
          dw -= d;
        }
        if (sy < 0) {
          const d = -sy / sh * dh;
          sh += sy;
          sy = 0;
          dy += d;
          dh -= d;
        }
        this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        break;
      case 5:
        this.context.drawImage(image, sx, sy, sw, sh);
        break;
      case 3:
        this.context.drawImage(image, sx, sy);
    }
  }
  beginPath() {
  }
  moveTo(_x, _y) {
  }
  lineTo(_x, _y) {
  }
  bezierCurveTo(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y) {
  }
  quadraticCurveTo(_cpx, _cpy, _x, _y) {
  }
  closePath() {
  }
  arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {
  }
  arcTo(_x1, _y1, _x2, _y2, _radius) {
  }
  ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {
  }
  rect(_x, _y, _width, _height) {
  }
  roundRect(_x, _y, _width, _height, _radius) {
  }
  createConicGradient(_startAngle, _x, _y) {
    return;
  }
  createLinearGradient(_x0, _y0, _x1, _y1) {
    return;
  }
  createPattern(_image, _repetition) {
    return;
  }
  createRadialGradient(_x0, _y0, _r0, _x1, _y1, _r1) {
    return;
  }
  fillText(_text, _x, _y, _maxWidth) {
  }
  measureText(_text) {
    return;
  }
  strokeText(_text, _x, _y, _maxWidth) {
  }
  destroy() {
    this.context = null;
  }
}
__decorate([
  contextAttr("imageSmoothingEnabled")
], Canvas.prototype, "smooth", undefined);
__decorate([
  contextAttr("imageSmoothingQuality")
], Canvas.prototype, "smoothLevel", undefined);
__decorate([
  contextAttr("globalAlpha")
], Canvas.prototype, "opacity", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "fillStyle", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "strokeStyle", undefined);
__decorate([
  contextAttr("lineWidth")
], Canvas.prototype, "strokeWidth", undefined);
__decorate([
  contextAttr("lineCap")
], Canvas.prototype, "strokeCap", undefined);
__decorate([
  contextAttr("lineJoin")
], Canvas.prototype, "strokeJoin", undefined);
__decorate([
  contextAttr("lineDashOffset")
], Canvas.prototype, "dashOffset", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "miterLimit", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "shadowBlur", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "shadowColor", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "shadowOffsetX", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "shadowOffsetY", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "filter", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "font", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "fontKerning", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "fontStretch", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "fontVariantCaps", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "textAlign", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "textBaseline", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "textRendering", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "wordSpacing", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "letterSpacing", undefined);
__decorate([
  contextAttr()
], Canvas.prototype, "direction", undefined);
__decorate([
  contextMethod()
], Canvas.prototype, "setTransform", null);
__decorate([
  contextMethod()
], Canvas.prototype, "resetTransform", null);
__decorate([
  contextMethod()
], Canvas.prototype, "getTransform", null);
__decorate([
  contextMethod()
], Canvas.prototype, "save", null);
__decorate([
  contextMethod()
], Canvas.prototype, "restore", null);
__decorate([
  contextMethod()
], Canvas.prototype, "translate", null);
__decorate([
  contextMethod()
], Canvas.prototype, "scale", null);
__decorate([
  contextMethod()
], Canvas.prototype, "rotate", null);
__decorate([
  contextMethod()
], Canvas.prototype, "fill", null);
__decorate([
  contextMethod()
], Canvas.prototype, "stroke", null);
__decorate([
  contextMethod()
], Canvas.prototype, "clip", null);
__decorate([
  contextMethod()
], Canvas.prototype, "fillRect", null);
__decorate([
  contextMethod()
], Canvas.prototype, "strokeRect", null);
__decorate([
  contextMethod()
], Canvas.prototype, "clearRect", null);
__decorate([
  contextMethod()
], Canvas.prototype, "beginPath", null);
__decorate([
  contextMethod()
], Canvas.prototype, "moveTo", null);
__decorate([
  contextMethod()
], Canvas.prototype, "lineTo", null);
__decorate([
  contextMethod()
], Canvas.prototype, "bezierCurveTo", null);
__decorate([
  contextMethod()
], Canvas.prototype, "quadraticCurveTo", null);
__decorate([
  contextMethod()
], Canvas.prototype, "closePath", null);
__decorate([
  contextMethod()
], Canvas.prototype, "arc", null);
__decorate([
  contextMethod()
], Canvas.prototype, "arcTo", null);
__decorate([
  contextMethod()
], Canvas.prototype, "ellipse", null);
__decorate([
  contextMethod()
], Canvas.prototype, "rect", null);
__decorate([
  contextMethod()
], Canvas.prototype, "roundRect", null);
__decorate([
  contextMethod()
], Canvas.prototype, "createConicGradient", null);
__decorate([
  contextMethod()
], Canvas.prototype, "createLinearGradient", null);
__decorate([
  contextMethod()
], Canvas.prototype, "createPattern", null);
__decorate([
  contextMethod()
], Canvas.prototype, "createRadialGradient", null);
__decorate([
  contextMethod()
], Canvas.prototype, "fillText", null);
__decorate([
  contextMethod()
], Canvas.prototype, "measureText", null);
__decorate([
  contextMethod()
], Canvas.prototype, "strokeText", null);
var temp = new Bounds;
var minSize = { width: 1, height: 1, pixelRatio: 1 };
var debug$6 = Debug.get("LeaferCanvasBase");
var canvasSizeAttrs = ["width", "height", "pixelRatio"];

class LeaferCanvasBase extends Canvas {
  get pixelWidth() {
    return this.width * this.pixelRatio;
  }
  get pixelHeight() {
    return this.height * this.pixelRatio;
  }
  get allowBackgroundColor() {
    return this.view && this.parentView;
  }
  constructor(config, manager) {
    super();
    this.worldTransform = {};
    if (!config)
      config = minSize;
    if (!config.pixelRatio)
      config.pixelRatio = Platform.devicePixelRatio;
    this.manager = manager;
    this.innerId = IncrementId.create(IncrementId.CNAVAS);
    const { width, height, pixelRatio } = config;
    this.autoLayout = !width || !height;
    this.pixelRatio = pixelRatio;
    this.config = config;
    this.init();
  }
  init() {
  }
  __createContext() {
    this.context = this.view.getContext("2d");
    this.__bindContext();
  }
  toBlob(type, quality) {
    return new Promise((resolve) => {
      const canvas = this.getSaveCanvas(type);
      Platform.origin.canvasToBolb(canvas.view, type, quality).then((blob) => {
        canvas.recycle();
        resolve(blob);
      }).catch((e) => {
        debug$6.error(e);
        resolve(null);
      });
    });
  }
  toDataURL(type, quality) {
    const canvas = this.getSaveCanvas(type);
    const data = Platform.origin.canvasToDataURL(canvas.view, type, quality);
    canvas.recycle();
    return data;
  }
  saveAs(filename, quality) {
    return new Promise((resolve) => {
      const canvas = this.getSaveCanvas(FileHelper.fileType(filename));
      Platform.origin.canvasSaveAs(canvas.view, filename, quality).then(() => {
        canvas.recycle();
        resolve(true);
      }).catch((e) => {
        debug$6.error(e);
        resolve(false);
      });
    });
  }
  getSaveCanvas(type) {
    const { backgroundColor, bounds } = this;
    const canvas = this.getSameCanvas();
    if (["jpg", "jpeg"].includes(type))
      canvas.fillWorld(bounds, "#FFFFFF");
    if (backgroundColor)
      canvas.fillWorld(bounds, backgroundColor);
    canvas.copyWorld(this);
    return canvas;
  }
  resize(size) {
    if (this.isSameSize(size))
      return;
    let takeCanvas;
    if (this.context && !this.unreal && this.width) {
      takeCanvas = this.getSameCanvas();
      takeCanvas.copyWorld(this);
    }
    DataHelper.copyAttrs(this, size, canvasSizeAttrs);
    this.bounds = new Bounds(0, 0, this.width, this.height);
    this.pixelRatio || (this.pixelRatio = 1);
    if (!this.unreal) {
      this.updateViewSize();
      this.smooth = this.config.smooth;
    }
    this.updateClientBounds();
    if (this.context && !this.unreal && takeCanvas) {
      this.clearWorld(takeCanvas.bounds);
      this.copyWorld(takeCanvas);
      takeCanvas.recycle();
    }
  }
  updateViewSize() {
  }
  updateClientBounds() {
  }
  startAutoLayout(_autoBounds, _listener) {
  }
  stopAutoLayout() {
  }
  setCursor(_cursor) {
  }
  setWorld(matrix, parentMatrix, onlyTranslate) {
    const { pixelRatio } = this;
    const w = this.worldTransform;
    if (parentMatrix) {
      if (onlyTranslate) {
        this.setTransform(w.a = matrix.a * pixelRatio, w.b = matrix.b * pixelRatio, w.c = matrix.c * pixelRatio, w.d = matrix.d * pixelRatio, w.e = (matrix.e + parentMatrix.e) * pixelRatio, w.f = (matrix.f + parentMatrix.f) * pixelRatio);
      } else {
        const { a, b, c, d, e, f } = parentMatrix;
        this.setTransform(w.a = (matrix.a * a + matrix.b * c) * pixelRatio, w.b = (matrix.a * b + matrix.b * d) * pixelRatio, w.c = (matrix.c * a + matrix.d * c) * pixelRatio, w.d = (matrix.c * b + matrix.d * d) * pixelRatio, w.e = (matrix.e * a + matrix.f * c + e) * pixelRatio, w.f = (matrix.e * b + matrix.f * d + f) * pixelRatio);
      }
    } else {
      this.setTransform(w.a = matrix.a * pixelRatio, w.b = matrix.b * pixelRatio, w.c = matrix.c * pixelRatio, w.d = matrix.d * pixelRatio, w.e = matrix.e * pixelRatio, w.f = matrix.f * pixelRatio);
    }
  }
  useWorldTransform(worldTransform) {
    if (worldTransform)
      this.worldTransform = worldTransform;
    const w = this.worldTransform;
    if (w)
      this.setTransform(w.a, w.b, w.c, w.d, w.e, w.f);
  }
  setStroke(color, strokeWidth, options) {
    if (strokeWidth)
      this.strokeWidth = strokeWidth;
    if (color)
      this.strokeStyle = color;
    if (options)
      this.setStrokeOptions(options);
  }
  setStrokeOptions(options) {
    this.strokeCap = options.strokeCap;
    this.strokeJoin = options.strokeJoin;
    this.dashPattern = options.dashPattern;
    this.dashOffset = options.dashOffset;
    this.miterLimit = options.miterLimit;
  }
  saveBlendMode(blendMode) {
    this.savedBlendMode = this.blendMode;
    this.blendMode = blendMode;
  }
  restoreBlendMode() {
    this.blendMode = this.savedBlendMode;
  }
  hitFill(point2, fillRule) {
    return fillRule ? this.context.isPointInPath(point2.x, point2.y, fillRule) : this.context.isPointInPath(point2.x, point2.y);
  }
  hitStroke(point2, strokeWidth) {
    this.strokeWidth = strokeWidth;
    return this.context.isPointInStroke(point2.x, point2.y);
  }
  setWorldShadow(x, y, blur, color) {
    const { pixelRatio } = this;
    this.shadowOffsetX = x * pixelRatio;
    this.shadowOffsetY = y * pixelRatio;
    this.shadowBlur = blur * pixelRatio;
    this.shadowColor = color || "black";
  }
  setWorldBlur(blur) {
    const { pixelRatio } = this;
    this.filter = `blur(${blur * pixelRatio}px)`;
  }
  copyWorld(canvas, from, to, blendMode) {
    if (blendMode)
      this.blendMode = blendMode;
    if (from) {
      const { pixelRatio } = this;
      if (!to)
        to = from;
      this.drawImage(canvas.view, from.x * pixelRatio, from.y * pixelRatio, from.width * pixelRatio, from.height * pixelRatio, to.x * pixelRatio, to.y * pixelRatio, to.width * pixelRatio, to.height * pixelRatio);
    } else {
      this.drawImage(canvas.view, 0, 0);
    }
    if (blendMode)
      this.blendMode = "source-over";
  }
  copyWorldToInner(canvas, fromWorld, toInnerBounds, blendMode) {
    if (blendMode)
      this.blendMode = blendMode;
    if (fromWorld.b || fromWorld.c) {
      this.save();
      this.resetTransform();
      this.copyWorld(canvas, fromWorld, BoundsHelper.tempToOuterOf(toInnerBounds, fromWorld));
      this.restore();
    } else {
      const { pixelRatio } = this;
      this.drawImage(canvas.view, fromWorld.x * pixelRatio, fromWorld.y * pixelRatio, fromWorld.width * pixelRatio, fromWorld.height * pixelRatio, toInnerBounds.x, toInnerBounds.y, toInnerBounds.width, toInnerBounds.height);
    }
    if (blendMode)
      this.blendMode = "source-over";
  }
  copyWorldByReset(canvas, from, to, blendMode) {
    this.resetTransform();
    this.copyWorld(canvas, from, to, blendMode);
    this.useWorldTransform();
  }
  useMask(maskCanvas, fromBounds, toBounds) {
    this.copyWorld(maskCanvas, fromBounds, toBounds, "destination-in");
  }
  useEraser(eraserCanvas, fromBounds, toBounds) {
    this.copyWorld(eraserCanvas, fromBounds, toBounds, "destination-out");
  }
  fillWorld(bounds, color, blendMode) {
    if (blendMode)
      this.blendMode = blendMode;
    this.fillStyle = color;
    temp.copy(bounds).scale(this.pixelRatio);
    this.fillRect(temp.x, temp.y, temp.width, temp.height);
    if (blendMode)
      this.blendMode = "source-over";
  }
  strokeWorld(bounds, color, blendMode) {
    if (blendMode)
      this.blendMode = blendMode;
    this.strokeStyle = color;
    temp.copy(bounds).scale(this.pixelRatio);
    this.strokeRect(temp.x, temp.y, temp.width, temp.height);
    if (blendMode)
      this.blendMode = "source-over";
  }
  clearWorld(bounds, ceilPixel) {
    temp.copy(bounds).scale(this.pixelRatio);
    if (ceilPixel)
      temp.ceil();
    this.clearRect(temp.x, temp.y, temp.width, temp.height);
  }
  clipWorld(bounds, ceilPixel) {
    this.beginPath();
    temp.copy(bounds).scale(this.pixelRatio);
    if (ceilPixel)
      temp.ceil();
    this.rect(temp.x, temp.y, temp.width, temp.height);
    this.clip();
  }
  clear() {
    const { pixelRatio } = this;
    this.clearRect(0, 0, this.width * pixelRatio, this.height * pixelRatio);
  }
  isSameSize(size) {
    return this.width === size.width && this.height === size.height && this.pixelRatio === size.pixelRatio;
  }
  getSameCanvas(useSameWorldTransform) {
    const { width, height, pixelRatio } = this;
    const options = { width, height, pixelRatio };
    const canvas = this.manager ? this.manager.get(options) : Creator.canvas(options);
    canvas.save();
    if (useSameWorldTransform)
      canvas.useWorldTransform(Object.assign({}, this.worldTransform));
    return canvas;
  }
  getBiggerCanvas(addWidth, addHeight) {
    let { width, height, pixelRatio } = this;
    if (addWidth)
      width += addWidth;
    if (addHeight)
      height += addHeight;
    const options = { width, height, pixelRatio };
    const canvas = this.manager ? this.manager.get(options) : Creator.canvas(options);
    canvas.save();
    return canvas;
  }
  recycle() {
    if (!this.recycled) {
      this.restore();
      this.manager ? this.manager.recycle(this) : this.destroy();
    }
  }
  updateRender() {
  }
  unrealCanvas() {
  }
  destroy() {
    this.manager = this.view = this.parentView = null;
  }
}
var PathHelper = {
  creator: {},
  parse(_pathString, _curveMode) {
    return;
  },
  convertToCanvasData(_old, _curveMode) {
    return;
  }
};
var CanvasCommandOnlyMap = {
  N: 21,
  D: 22,
  X: 23,
  G: 24,
  F: 25,
  O: 26,
  P: 27,
  U: 28
};
var PathCommandMap = Object.assign({ M: 1, m: 10, L: 2, l: 20, H: 3, h: 30, V: 4, v: 40, C: 5, c: 50, S: 6, s: 60, Q: 7, q: 70, T: 8, t: 80, A: 9, a: 90, Z: 11, z: 11, R: 12 }, CanvasCommandOnlyMap);
var PathCommandLengthMap = {
  M: 3,
  m: 3,
  L: 3,
  l: 3,
  H: 2,
  h: 2,
  V: 2,
  v: 2,
  C: 7,
  c: 7,
  S: 5,
  s: 5,
  Q: 5,
  q: 5,
  T: 3,
  t: 3,
  A: 8,
  a: 8,
  Z: 1,
  z: 1,
  N: 5,
  D: 9,
  X: 6,
  G: 9,
  F: 5,
  O: 7,
  P: 4,
  U: 6
};
var NeedConvertToCanvasCommandMap = {
  m: 10,
  l: 20,
  H: 3,
  h: 30,
  V: 4,
  v: 40,
  c: 50,
  S: 6,
  s: 60,
  q: 70,
  T: 8,
  t: 80,
  A: 9,
  a: 90
};
var NeedConvertToCurveCommandMap = Object.assign(Object.assign({}, NeedConvertToCanvasCommandMap), CanvasCommandOnlyMap);
var P$4 = PathCommandMap;
var PathNumberCommandMap = {};
for (let key in P$4) {
  PathNumberCommandMap[P$4[key]] = key;
}
var PathNumberCommandLengthMap = {};
for (let key in P$4) {
  PathNumberCommandLengthMap[P$4[key]] = PathCommandLengthMap[key];
}
var RectHelper = {
  drawRoundRect(drawer, x, y, width, height, cornerRadius) {
    let [topLeft, topRight, bottomRight, bottomLeft] = MathHelper.fourNumber(cornerRadius);
    const max2 = Math.min(width / 2, height / 2);
    if (topLeft > max2)
      topLeft = max2;
    if (topRight > max2)
      topRight = max2;
    if (bottomRight > max2)
      bottomRight = max2;
    if (bottomLeft > max2)
      bottomLeft = max2;
    topLeft ? drawer.moveTo(x + topLeft, y) : drawer.moveTo(x, y);
    topRight ? drawer.arcTo(x + width, y, x + width, y + height, topRight) : drawer.lineTo(x + width, y);
    bottomRight ? drawer.arcTo(x + width, y + height, x, y + height, bottomRight) : drawer.lineTo(x + width, y + height);
    bottomLeft ? drawer.arcTo(x, y + height, x, y, bottomLeft) : drawer.lineTo(x, y + height);
    topLeft ? drawer.arcTo(x, y, x + width, y, topLeft) : drawer.lineTo(x, y);
  }
};
var { sin: sin$2, cos: cos$2, atan2: atan2$1, ceil, abs, PI, sqrt: sqrt$1, pow } = Math;
var { setPoint: setPoint$1, addPoint: addPoint$1 } = TwoPointBoundsHelper;
var { set } = PointHelper;
var { M: M$5, L: L$6, C: C$5, Q: Q$4, Z: Z$5 } = PathCommandMap;
var tempPoint = {};
var BezierHelper = {
  points(data, points, curve, close) {
    data.push(M$5, points[0], points[1]);
    if (curve && points.length > 5) {
      let aX, aY, bX, bY, cX, cY, c1X, c1Y, c2X, c2Y;
      let ba, cb, d, len = points.length;
      const t = curve === true ? 0.5 : curve;
      if (close) {
        points = [points[len - 2], points[len - 1], ...points, points[0], points[1], points[2], points[3]];
        len = points.length;
      }
      for (let i = 2;i < len - 2; i += 2) {
        aX = points[i - 2];
        aY = points[i - 1];
        bX = points[i];
        bY = points[i + 1];
        cX = points[i + 2];
        cY = points[i + 3];
        ba = sqrt$1(pow(bX - aX, 2) + pow(bY - aY, 2));
        cb = sqrt$1(pow(cX - bX, 2) + pow(cY - bY, 2));
        d = ba + cb;
        ba = t * ba / d;
        cb = t * cb / d;
        cX -= aX;
        cY -= aY;
        c1X = bX - ba * cX;
        c1Y = bY - ba * cY;
        if (i === 2) {
          if (!close)
            data.push(Q$4, c1X, c1Y, bX, bY);
        } else {
          data.push(C$5, c2X, c2Y, c1X, c1Y, bX, bY);
        }
        c2X = bX + cb * cX;
        c2Y = bY + cb * cY;
      }
      if (!close)
        data.push(Q$4, c2X, c2Y, points[len - 2], points[len - 1]);
    } else {
      for (let i = 2, len = points.length;i < len; i += 2) {
        data.push(L$6, points[i], points[i + 1]);
      }
    }
    if (close)
      data.push(Z$5);
  },
  rect(data, x, y, width, height) {
    PathHelper.creator.path = data;
    PathHelper.creator.moveTo(x, y).lineTo(x + width, y).lineTo(x + width, y + height).lineTo(x, y + height).lineTo(x, y);
  },
  roundRect(data, x, y, width, height, radius) {
    PathHelper.creator.path = [];
    RectHelper.drawRoundRect(PathHelper.creator, x, y, width, height, radius);
    data.push(...PathHelper.convertToCanvasData(PathHelper.creator.path, true));
  },
  arcTo(data, fromX, fromY, x1, y1, toX, toY, radius, setPointBounds, setEndPoint, setStartPoint) {
    const BAx = x1 - fromX;
    const BAy = y1 - fromY;
    const CBx = toX - x1;
    const CBy = toY - y1;
    let startRadian = atan2$1(BAy, BAx);
    let endRadian = atan2$1(CBy, CBx);
    let totalRadian = endRadian - startRadian;
    if (totalRadian < 0)
      totalRadian += PI2;
    if (totalRadian === PI || abs(BAx + BAy) < 0.000000000001 || abs(CBx + CBy) < 0.000000000001) {
      if (data)
        data.push(L$6, x1, y1);
      if (setPointBounds) {
        setPoint$1(setPointBounds, fromX, fromY);
        addPoint$1(setPointBounds, x1, y1);
      }
      if (setStartPoint)
        set(setStartPoint, fromX, fromY);
      if (setEndPoint)
        set(setEndPoint, x1, y1);
      return;
    }
    const anticlockwise = BAx * CBy - CBx * BAy < 0;
    const sign = anticlockwise ? -1 : 1;
    const c = radius / cos$2(totalRadian / 2);
    const centerX = x1 + c * cos$2(startRadian + totalRadian / 2 + PI_2 * sign);
    const centerY = y1 + c * sin$2(startRadian + totalRadian / 2 + PI_2 * sign);
    startRadian -= PI_2 * sign;
    endRadian -= PI_2 * sign;
    return ellipse$5(data, centerX, centerY, radius, radius, 0, startRadian / OneRadian, endRadian / OneRadian, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
  },
  arc(data, x, y, radius, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
    return ellipse$5(data, x, y, radius, radius, 0, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
  },
  ellipse(data, cx, cy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
    const rotationRadian = rotation * OneRadian;
    const rotationSin = sin$2(rotationRadian);
    const rotationCos = cos$2(rotationRadian);
    let startRadian = startAngle * OneRadian;
    let endRadian = endAngle * OneRadian;
    if (startRadian > PI)
      startRadian -= PI2;
    if (endRadian < 0)
      endRadian += PI2;
    let totalRadian = endRadian - startRadian;
    if (totalRadian < 0)
      totalRadian += PI2;
    else if (totalRadian > PI2)
      totalRadian -= PI2;
    if (anticlockwise)
      totalRadian -= PI2;
    const parts = ceil(abs(totalRadian / PI_2));
    const partRadian = totalRadian / parts;
    const partRadian4Sin = sin$2(partRadian / 4);
    const control = 8 / 3 * partRadian4Sin * partRadian4Sin / sin$2(partRadian / 2);
    endRadian = startRadian + partRadian;
    let startCos = cos$2(startRadian);
    let startSin = sin$2(startRadian);
    let endCos, endSin;
    let x, y, x1, y1, x2, y2;
    let startX = x = rotationCos * radiusX * startCos - rotationSin * radiusY * startSin;
    let startY = y = rotationSin * radiusX * startCos + rotationCos * radiusY * startSin;
    let fromX = cx + x, fromY = cy + y;
    if (data)
      data.push(L$6, fromX, fromY);
    if (setPointBounds)
      setPoint$1(setPointBounds, fromX, fromY);
    if (setStartPoint)
      set(setStartPoint, fromX, fromY);
    for (let i = 0;i < parts; i++) {
      endCos = cos$2(endRadian);
      endSin = sin$2(endRadian);
      x = rotationCos * radiusX * endCos - rotationSin * radiusY * endSin;
      y = rotationSin * radiusX * endCos + rotationCos * radiusY * endSin;
      x1 = cx + startX - control * (rotationCos * radiusX * startSin + rotationSin * radiusY * startCos);
      y1 = cy + startY - control * (rotationSin * radiusX * startSin - rotationCos * radiusY * startCos);
      x2 = cx + x + control * (rotationCos * radiusX * endSin + rotationSin * radiusY * endCos);
      y2 = cy + y + control * (rotationSin * radiusX * endSin - rotationCos * radiusY * endCos);
      if (data)
        data.push(C$5, x1, y1, x2, y2, cx + x, cy + y);
      if (setPointBounds)
        toTwoPointBounds$1(cx + startX, cy + startY, x1, y1, x2, y2, cx + x, cy + y, setPointBounds, true);
      startX = x;
      startY = y;
      startCos = endCos;
      startSin = endSin;
      startRadian = endRadian;
      endRadian += partRadian;
    }
    if (setEndPoint)
      set(setEndPoint, cx + x, cy + y);
  },
  quadraticCurveTo(data, fromX, fromY, x1, y1, toX, toY) {
    data.push(C$5, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY);
  },
  toTwoPointBoundsByQuadraticCurve(fromX, fromY, x1, y1, toX, toY, pointBounds, addMode) {
    toTwoPointBounds$1(fromX, fromY, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY, pointBounds, addMode);
  },
  toTwoPointBounds(fromX, fromY, x1, y1, x2, y2, toX, toY, pointBounds, addMode) {
    const tList = [];
    let a, b, c, t, t1, t2, v, sqrtV;
    let f = fromX, z1 = x1, z2 = x2, o = toX;
    for (let i = 0;i < 2; ++i) {
      if (i == 1) {
        f = fromY, z1 = y1, z2 = y2, o = toY;
      }
      a = -3 * f + 9 * z1 - 9 * z2 + 3 * o;
      b = 6 * f - 12 * z1 + 6 * z2;
      c = 3 * z1 - 3 * f;
      if (Math.abs(a) < 0.000000000001) {
        if (Math.abs(b) < 0.000000000001)
          continue;
        t = -c / b;
        if (0 < t && t < 1)
          tList.push(t);
        continue;
      }
      v = b * b - 4 * c * a;
      sqrtV = Math.sqrt(v);
      if (v < 0)
        continue;
      t1 = (-b + sqrtV) / (2 * a);
      if (0 < t1 && t1 < 1)
        tList.push(t1);
      t2 = (-b - sqrtV) / (2 * a);
      if (0 < t2 && t2 < 1)
        tList.push(t2);
    }
    addMode ? addPoint$1(pointBounds, fromX, fromY) : setPoint$1(pointBounds, fromX, fromY);
    addPoint$1(pointBounds, toX, toY);
    for (let i = 0, len = tList.length;i < len; i++) {
      getPointAndSet(tList[i], fromX, fromY, x1, y1, x2, y2, toX, toY, tempPoint);
      addPoint$1(pointBounds, tempPoint.x, tempPoint.y);
    }
  },
  getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, setPoint) {
    const o = 1 - t, a = o * o * o, b = 3 * o * o * t, c = 3 * o * t * t, d = t * t * t;
    setPoint.x = a * fromX + b * x1 + c * x2 + d * toX;
    setPoint.y = a * fromY + b * y1 + c * y2 + d * toY;
  },
  getPoint(t, fromX, fromY, x1, y1, x2, y2, toX, toY) {
    const point2 = {};
    getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, point2);
    return point2;
  }
};
var { getPointAndSet, toTwoPointBounds: toTwoPointBounds$1, ellipse: ellipse$5 } = BezierHelper;
var { sin: sin$1, cos: cos$1, sqrt, atan2 } = Math;
var { ellipse: ellipse$4 } = BezierHelper;
var EllipseHelper = {
  ellipticalArc(data, fromX, fromY, radiusX, radiusY, rotation, largeFlag, sweepFlag, toX, toY, curveMode) {
    const halfX = (toX - fromX) / 2;
    const halfY = (toY - fromY) / 2;
    const rotationRadian = rotation * OneRadian;
    const rotationSin = sin$1(rotationRadian);
    const rotationCos = cos$1(rotationRadian);
    const px = -rotationCos * halfX - rotationSin * halfY;
    const py = -rotationCos * halfY + rotationSin * halfX;
    const rxSquare = radiusX * radiusX;
    const rySquare = radiusY * radiusY;
    const pySquare = py * py;
    const pxSquare = px * px;
    const a = rxSquare * rySquare - rxSquare * pySquare - rySquare * pxSquare;
    let s = 0;
    if (a < 0) {
      const t = sqrt(1 - a / (rxSquare * rySquare));
      radiusX *= t;
      radiusY *= t;
    } else {
      s = (largeFlag === sweepFlag ? -1 : 1) * sqrt(a / (rxSquare * pySquare + rySquare * pxSquare));
    }
    const cx = s * radiusX * py / radiusY;
    const cy = -s * radiusY * px / radiusX;
    const startRadian = atan2((py - cy) / radiusY, (px - cx) / radiusX);
    const endRadian = atan2((-py - cy) / radiusY, (-px - cx) / radiusX);
    let totalRadian = endRadian - startRadian;
    if (sweepFlag === 0 && totalRadian > 0) {
      totalRadian -= PI2;
    } else if (sweepFlag === 1 && totalRadian < 0) {
      totalRadian += PI2;
    }
    const centerX = fromX + halfX + rotationCos * cx - rotationSin * cy;
    const centerY = fromY + halfY + rotationSin * cx + rotationCos * cy;
    const anticlockwise = totalRadian < 0 ? 1 : 0;
    if (curveMode || Platform.ellipseToCurve) {
      ellipse$4(data, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
    } else {
      if (radiusX === radiusY && !rotation) {
        data.push(PathCommandMap.O, centerX, centerY, radiusX, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
      } else {
        data.push(PathCommandMap.G, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
      }
    }
  }
};
var { M: M$4, m, L: L$5, l, H, h, V, v, C: C$4, c, S, s, Q: Q$3, q, T, t, A, a, Z: Z$4, z, N: N$3, D: D$3, X: X$3, G: G$3, F: F$3, O: O$3, P: P$3, U: U$4 } = PathCommandMap;
var { rect: rect$1, roundRect: roundRect$2, arcTo: arcTo$2, arc: arc$3, ellipse: ellipse$3, quadraticCurveTo: quadraticCurveTo$1 } = BezierHelper;
var { ellipticalArc } = EllipseHelper;
var debug$5 = Debug.get("PathConvert");
var setEndPoint$1 = {};
var PathConvert = {
  current: { dot: 0 },
  stringify(data) {
    let i = 0, len = data.length, count, str = "", command, lastCommand;
    while (i < len) {
      command = data[i];
      count = PathNumberCommandLengthMap[command];
      if (command === lastCommand) {
        str += " ";
      } else {
        str += PathNumberCommandMap[command];
      }
      for (let j = 1;j < count; j++) {
        str += data[i + j];
        j === count - 1 || (str += " ");
      }
      lastCommand = command;
      i += count;
    }
    return str;
  },
  parse(pathString, curveMode) {
    let needConvert, char, lastChar, num = "";
    const data = [];
    const convertCommand = curveMode ? NeedConvertToCurveCommandMap : NeedConvertToCanvasCommandMap;
    for (let i = 0, len = pathString.length;i < len; i++) {
      char = pathString[i];
      if (StringNumberMap[char]) {
        if (char === ".") {
          current.dot++;
          if (current.dot > 1) {
            pushData(data, num);
            num = "";
          }
        }
        num += char;
      } else if (PathCommandMap[char]) {
        if (num) {
          pushData(data, num);
          num = "";
        }
        current.name = PathCommandMap[char];
        current.length = PathCommandLengthMap[char];
        current.index = 0;
        pushData(data, current.name);
        if (!needConvert && convertCommand[char])
          needConvert = true;
      } else {
        if (char === "-" || char === "+") {
          if (lastChar === "e" || lastChar === "E") {
            num += char;
          } else {
            if (num)
              pushData(data, num);
            num = char;
          }
        } else {
          if (num) {
            pushData(data, num);
            num = "";
          }
        }
      }
      lastChar = char;
    }
    if (num)
      pushData(data, num);
    return needConvert ? PathConvert.toCanvasData(data, curveMode) : data;
  },
  toCanvasData(old, curveMode) {
    let x = 0, y = 0, x1 = 0, y1 = 0, i = 0, len = old.length, controlX, controlY, command, lastCommand, smooth;
    const data = [];
    while (i < len) {
      command = old[i];
      switch (command) {
        case m:
          old[i + 1] += x;
          old[i + 2] += y;
        case M$4:
          x = old[i + 1];
          y = old[i + 2];
          data.push(M$4, x, y);
          i += 3;
          break;
        case h:
          old[i + 1] += x;
        case H:
          x = old[i + 1];
          data.push(L$5, x, y);
          i += 2;
          break;
        case v:
          old[i + 1] += y;
        case V:
          y = old[i + 1];
          data.push(L$5, x, y);
          i += 2;
          break;
        case l:
          old[i + 1] += x;
          old[i + 2] += y;
        case L$5:
          x = old[i + 1];
          y = old[i + 2];
          data.push(L$5, x, y);
          i += 3;
          break;
        case s:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          command = S;
        case S:
          smooth = lastCommand === C$4 || lastCommand === S;
          x1 = smooth ? x * 2 - controlX : old[i + 1];
          y1 = smooth ? y * 2 - controlY : old[i + 2];
          controlX = old[i + 1];
          controlY = old[i + 2];
          x = old[i + 3];
          y = old[i + 4];
          data.push(C$4, x1, y1, controlX, controlY, x, y);
          i += 5;
          break;
        case c:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          old[i + 5] += x;
          old[i + 6] += y;
          command = C$4;
        case C$4:
          controlX = old[i + 3];
          controlY = old[i + 4];
          x = old[i + 5];
          y = old[i + 6];
          data.push(C$4, old[i + 1], old[i + 2], controlX, controlY, x, y);
          i += 7;
          break;
        case t:
          old[i + 1] += x;
          old[i + 2] += y;
          command = T;
        case T:
          smooth = lastCommand === Q$3 || lastCommand === T;
          controlX = smooth ? x * 2 - controlX : old[i + 1];
          controlY = smooth ? y * 2 - controlY : old[i + 2];
          curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 1], old[i + 2]) : data.push(Q$3, controlX, controlY, old[i + 1], old[i + 2]);
          x = old[i + 1];
          y = old[i + 2];
          i += 3;
          break;
        case q:
          old[i + 1] += x;
          old[i + 2] += y;
          old[i + 3] += x;
          old[i + 4] += y;
          command = Q$3;
        case Q$3:
          controlX = old[i + 1];
          controlY = old[i + 2];
          curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 3], old[i + 4]) : data.push(Q$3, controlX, controlY, old[i + 3], old[i + 4]);
          x = old[i + 3];
          y = old[i + 4];
          i += 5;
          break;
        case a:
          old[i + 6] += x;
          old[i + 7] += y;
        case A:
          ellipticalArc(data, x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], curveMode);
          x = old[i + 6];
          y = old[i + 7];
          i += 8;
          break;
        case z:
        case Z$4:
          data.push(Z$4);
          i++;
          break;
        case N$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? rect$1(data, x, y, old[i + 3], old[i + 4]) : copyData(data, old, i, 5);
          i += 5;
          break;
        case D$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], [old[i + 5], old[i + 6], old[i + 7], old[i + 8]]) : copyData(data, old, i, 9);
          i += 9;
          break;
        case X$3:
          x = old[i + 1];
          y = old[i + 2];
          curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], old[i + 5]) : copyData(data, old, i, 6);
          i += 6;
          break;
        case G$3:
          ellipse$3(curveMode ? data : copyData(data, old, i, 9), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], old[i + 8], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 9;
          break;
        case F$3:
          curveMode ? ellipse$3(data, old[i + 1], old[i + 2], old[i + 3], old[i + 4], 0, 0, 360, false) : copyData(data, old, i, 5);
          x = old[i + 1] + old[i + 3];
          y = old[i + 2];
          i += 5;
          break;
        case O$3:
          arc$3(curveMode ? data : copyData(data, old, i, 7), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 7;
          break;
        case P$3:
          curveMode ? arc$3(data, old[i + 1], old[i + 2], old[i + 3], 0, 360, false) : copyData(data, old, i, 4);
          x = old[i + 1] + old[i + 3];
          y = old[i + 2];
          i += 4;
          break;
        case U$4:
          arcTo$2(curveMode ? data : copyData(data, old, i, 6), x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], null, setEndPoint$1);
          x = setEndPoint$1.x;
          y = setEndPoint$1.y;
          i += 6;
          break;
        default:
          debug$5.error(`command: ${command} [index:${i}]`, old);
          return data;
      }
      lastCommand = command;
    }
    return data;
  },
  copyData(data, old, index, count) {
    for (let i = index, end = index + count;i < end; i++) {
      data.push(old[i]);
    }
  },
  pushData(data, strNum) {
    if (current.index === current.length) {
      current.index = 1;
      data.push(current.name);
    }
    data.push(Number(strNum));
    current.index++;
    current.dot = 0;
  }
};
var { current, pushData, copyData } = PathConvert;
var { M: M$3, L: L$4, C: C$3, Q: Q$2, Z: Z$3, N: N$2, D: D$2, X: X$2, G: G$2, F: F$2, O: O$2, P: P$2, U: U$3 } = PathCommandMap;
var startPoint = {};
var PathCommandDataHelper = {
  beginPath(data) {
    data.length = 0;
  },
  moveTo(data, x, y) {
    data.push(M$3, x, y);
  },
  lineTo(data, x, y) {
    data.push(L$4, x, y);
  },
  bezierCurveTo(data, x1, y1, x2, y2, x, y) {
    data.push(C$3, x1, y1, x2, y2, x, y);
  },
  quadraticCurveTo(data, x1, y1, x, y) {
    data.push(Q$2, x1, y1, x, y);
  },
  closePath(data) {
    data.push(Z$3);
  },
  rect(data, x, y, width, height) {
    data.push(N$2, x, y, width, height);
  },
  roundRect(data, x, y, width, height, cornerRadius) {
    if (typeof cornerRadius === "number") {
      data.push(X$2, x, y, width, height, cornerRadius);
    } else {
      const fourCorners = MathHelper.fourNumber(cornerRadius);
      if (fourCorners) {
        data.push(D$2, x, y, width, height, ...fourCorners);
      } else {
        data.push(N$2, x, y, width, height);
      }
    }
  },
  ellipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    if (rotation === undefined) {
      data.push(F$2, x, y, radiusX, radiusY);
    } else {
      if (startAngle === undefined)
        startAngle = 0;
      if (endAngle === undefined)
        endAngle = 360;
      data.push(G$2, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise ? 1 : 0);
    }
  },
  arc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
    if (startAngle === undefined) {
      data.push(P$2, x, y, radius);
    } else {
      if (endAngle === undefined)
        endAngle = 360;
      data.push(O$2, x, y, radius, startAngle, endAngle, anticlockwise ? 1 : 0);
    }
  },
  arcTo(data, x1, y1, x2, y2, radius) {
    data.push(U$3, x1, y1, x2, y2, radius);
  },
  drawEllipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    if (rotation === undefined)
      rotation = 0;
    if (startAngle === undefined)
      startAngle = 0;
    if (endAngle === undefined)
      endAngle = 360;
    BezierHelper.ellipse(null, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, null, null, startPoint);
    data.push(M$3, startPoint.x, startPoint.y);
    ellipse$2(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  },
  drawArc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
    if (startAngle === undefined)
      startAngle = 0;
    if (endAngle === undefined)
      endAngle = 360;
    BezierHelper.arc(null, x, y, radius, startAngle, endAngle, anticlockwise, null, null, startPoint);
    data.push(M$3, startPoint.x, startPoint.y);
    arc$2(data, x, y, radius, startAngle, endAngle, anticlockwise);
  },
  drawPoints(data, points, curve, close) {
    BezierHelper.points(data, points, curve, close);
  }
};
var { ellipse: ellipse$2, arc: arc$2 } = PathCommandDataHelper;
var { moveTo, lineTo, quadraticCurveTo, bezierCurveTo, closePath, beginPath, rect, roundRect: roundRect$1, ellipse: ellipse$1, arc: arc$1, arcTo: arcTo$1, drawEllipse, drawArc, drawPoints } = PathCommandDataHelper;

class PathCreator {
  constructor(path) {
    if (path) {
      this.path = typeof path === "string" ? PathHelper.parse(path) : path;
    } else {
      this.path = [];
    }
  }
  beginPath() {
    beginPath(this.path);
    return this;
  }
  moveTo(x, y) {
    moveTo(this.path, x, y);
    return this;
  }
  lineTo(x, y) {
    lineTo(this.path, x, y);
    return this;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    bezierCurveTo(this.path, x1, y1, x2, y2, x, y);
    return this;
  }
  quadraticCurveTo(x1, y1, x, y) {
    quadraticCurveTo(this.path, x1, y1, x, y);
    return this;
  }
  closePath() {
    closePath(this.path);
    return this;
  }
  rect(x, y, width, height) {
    rect(this.path, x, y, width, height);
    return this;
  }
  roundRect(x, y, width, height, cornerRadius) {
    roundRect$1(this.path, x, y, width, height, cornerRadius);
    return this;
  }
  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    ellipse$1(this.path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return this;
  }
  arc(x, y, radius, startAngle, endAngle, anticlockwise) {
    arc$1(this.path, x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  arcTo(x1, y1, x2, y2, radius) {
    arcTo$1(this.path, x1, y1, x2, y2, radius);
    return this;
  }
  drawEllipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    drawEllipse(this.path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    return this;
  }
  drawArc(x, y, radius, startAngle, endAngle, anticlockwise) {
    drawArc(this.path, x, y, radius, startAngle, endAngle, anticlockwise);
    return this;
  }
  drawPoints(points, curve, close) {
    drawPoints(this.path, points, curve, close);
    return this;
  }
}
var { M: M$2, L: L$3, C: C$2, Q: Q$1, Z: Z$2, N: N$1, D: D$1, X: X$1, G: G$1, F: F$1, O: O$1, P: P$1, U: U$2 } = PathCommandMap;
var debug$4 = Debug.get("PathDrawer");
var PathDrawer = {
  drawPathByData(drawer, data) {
    if (!data)
      return;
    let command;
    let i = 0, len = data.length;
    while (i < len) {
      command = data[i];
      switch (command) {
        case M$2:
          drawer.moveTo(data[i + 1], data[i + 2]);
          i += 3;
          break;
        case L$3:
          drawer.lineTo(data[i + 1], data[i + 2]);
          i += 3;
          break;
        case C$2:
          drawer.bezierCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
          i += 7;
          break;
        case Q$1:
          drawer.quadraticCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
          i += 5;
          break;
        case Z$2:
          drawer.closePath();
          i += 1;
          break;
        case N$1:
          drawer.rect(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
          i += 5;
          break;
        case D$1:
          drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], [data[i + 5], data[i + 6], data[i + 7], data[i + 8]]);
          i += 9;
          break;
        case X$1:
          drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
          i += 6;
          break;
        case G$1:
          drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5] * OneRadian, data[i + 6] * OneRadian, data[i + 7] * OneRadian, data[i + 8]);
          i += 9;
          break;
        case F$1:
          drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], 0, 0, PI2, false);
          i += 5;
          break;
        case O$1:
          drawer.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4] * OneRadian, data[i + 5] * OneRadian, data[i + 6]);
          i += 7;
          break;
        case P$1:
          drawer.arc(data[i + 1], data[i + 2], data[i + 3], 0, PI2, false);
          i += 4;
          break;
        case U$2:
          drawer.arcTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
          i += 6;
          break;
        default:
          debug$4.error(`command: ${command} [index:${i}]`, data);
          return;
      }
    }
  }
};
var { M: M$1, L: L$2, C: C$1, Q, Z: Z$1, N, D, X, G, F, O, P, U: U$1 } = PathCommandMap;
var { toTwoPointBounds, toTwoPointBoundsByQuadraticCurve, arcTo, arc, ellipse } = BezierHelper;
var { add, copy: copy$3, addPoint, setPoint, addBounds, toBounds } = TwoPointBoundsHelper;
var debug$3 = Debug.get("PathBounds");
var radius;
var radiusX;
var radiusY;
var tempPointBounds = {};
var setPointBounds = {};
var setEndPoint = {};
var PathBounds = {
  toBounds(data, setBounds) {
    PathBounds.toTwoPointBounds(data, setPointBounds);
    toBounds(setPointBounds, setBounds);
  },
  toTwoPointBounds(data, setPointBounds2) {
    if (!data || !data.length)
      return setPoint(setPointBounds2, 0, 0);
    let command;
    let i = 0, x = 0, y = 0, x1, y1, toX, toY;
    const len = data.length;
    while (i < len) {
      command = data[i];
      if (i === 0) {
        if (command === Z$1 || command === C$1 || command === Q) {
          setPoint(setPointBounds2, x, y);
        } else {
          setPoint(setPointBounds2, data[i + 1], data[i + 2]);
        }
      }
      switch (command) {
        case M$1:
        case L$2:
          x = data[i + 1];
          y = data[i + 2];
          addPoint(setPointBounds2, x, y);
          i += 3;
          break;
        case C$1:
          toX = data[i + 5];
          toY = data[i + 6];
          toTwoPointBounds(x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], toX, toY, tempPointBounds);
          add(setPointBounds2, tempPointBounds);
          x = toX;
          y = toY;
          i += 7;
          break;
        case Q:
          x1 = data[i + 1];
          y1 = data[i + 2];
          toX = data[i + 3];
          toY = data[i + 4];
          toTwoPointBoundsByQuadraticCurve(x, y, x1, y1, toX, toY, tempPointBounds);
          add(setPointBounds2, tempPointBounds);
          x = toX;
          y = toY;
          i += 5;
          break;
        case Z$1:
          i += 1;
          break;
        case N:
          x = data[i + 1];
          y = data[i + 2];
          addBounds(setPointBounds2, x, y, data[i + 3], data[i + 4]);
          i += 5;
          break;
        case D:
        case X:
          x = data[i + 1];
          y = data[i + 2];
          addBounds(setPointBounds2, x, y, data[i + 3], data[i + 4]);
          i += command === D ? 9 : 6;
          break;
        case G:
          ellipse(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], data[i + 7], data[i + 8], tempPointBounds, setEndPoint);
          i === 0 ? copy$3(setPointBounds2, tempPointBounds) : add(setPointBounds2, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 9;
          break;
        case F:
          x = data[i + 1];
          y = data[i + 2];
          radiusX = data[i + 3];
          radiusY = data[i + 4];
          addBounds(setPointBounds2, x - radiusX, y - radiusY, radiusX * 2, radiusY * 2);
          x += radiusX;
          i += 5;
          break;
        case O:
          arc(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], tempPointBounds, setEndPoint);
          i === 0 ? copy$3(setPointBounds2, tempPointBounds) : add(setPointBounds2, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 7;
          break;
        case P:
          x = data[i + 1];
          y = data[i + 2];
          radius = data[i + 3];
          addBounds(setPointBounds2, x - radius, y - radius, radius * 2, radius * 2);
          x += radius;
          i += 4;
          break;
        case U$1:
          arcTo(null, x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], tempPointBounds, setEndPoint);
          i === 0 ? copy$3(setPointBounds2, tempPointBounds) : add(setPointBounds2, tempPointBounds);
          x = setEndPoint.x;
          y = setEndPoint.y;
          i += 6;
          break;
        default:
          debug$3.error(`command: ${command} [index:${i}]`, data);
          return;
      }
    }
  }
};
var { M, L: L$1, C, Z, U } = PathCommandMap;
var PathCorner = {
  smooth(data, cornerRadius, _cornerSmoothing) {
    let command;
    let i = 0, x = 0, y = 0, startX, startY = 0, centerX = 0, centerY = 0;
    const len = data.length;
    const smooth = [];
    while (i < len) {
      command = data[i];
      switch (command) {
        case M:
          startX = data[i + 1];
          startY = data[i + 2];
          i += 3;
          if (data[i] === L$1) {
            centerX = startX + (data[i + 1] - startX) / 2;
            centerY = startY + (data[i + 2] - startY) / 2;
            smooth.push(M, centerX, centerY);
          } else {
            smooth.push(M, startX, startY);
          }
          break;
        case L$1:
          x = data[i + 1];
          y = data[i + 2];
          i += 3;
          switch (data[i]) {
            case L$1:
              smooth.push(U, x, y, data[i + 1], data[i + 2], cornerRadius);
              break;
            case Z:
              smooth.push(U, x, y, startX, startY, cornerRadius);
              break;
            default:
              smooth.push(L$1, x, y);
          }
          break;
        case C:
          smooth.push(C, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
          i += 7;
          break;
        case Z:
          smooth.push(U, startX, startY, centerX, centerY, cornerRadius);
          smooth.push(Z);
          i += 1;
          break;
      }
    }
    if (command !== Z) {
      smooth[1] = startX;
      smooth[2] = startY;
    }
    return smooth;
  }
};
PathHelper.creator = new PathCreator;
PathHelper.parse = PathConvert.parse;
PathHelper.convertToCanvasData = PathConvert.toCanvasData;
var { drawRoundRect } = RectHelper;
var debug$2 = Debug.get("TaskProcessor");

class TaskItem {
  constructor(task) {
    this.parallel = true;
    this.time = 1;
    this.id = IncrementId.create(IncrementId.TASK);
    this.task = task;
  }
  run() {
    return __awaiter(this, undefined, undefined, function* () {
      try {
        if (this.task && !this.isComplete && this.parent.running)
          yield this.task();
      } catch (error) {
        debug$2.error(error);
      }
    });
  }
  complete() {
    this.isComplete = true;
    this.parent = null;
    this.task = null;
  }
  cancel() {
    this.isCancel = true;
    this.complete();
  }
}

class TaskProcessor {
  get total() {
    return this.list.length + this.delayNumber;
  }
  get finishedIndex() {
    return this.isComplete ? 0 : this.index + this.parallelSuccessNumber;
  }
  get remain() {
    return this.isComplete ? this.total : this.total - this.finishedIndex;
  }
  get percent() {
    const { total } = this;
    let totalTime = 0, runTime = 0;
    for (let i = 0;i < total; i++) {
      if (i <= this.finishedIndex) {
        runTime += this.list[i].time;
        if (i === this.finishedIndex)
          totalTime = runTime;
      } else {
        totalTime += this.list[i].time;
      }
    }
    return this.isComplete ? 1 : runTime / totalTime;
  }
  constructor(config) {
    this.config = { parallel: 6 };
    this.list = [];
    this.running = false;
    this.isComplete = true;
    this.index = 0;
    this.delayNumber = 0;
    if (config)
      DataHelper.assign(this.config, config);
    this.empty();
  }
  add(taskCallback, options) {
    let start, parallel, time, delay;
    const task = new TaskItem(taskCallback);
    task.parent = this;
    if (typeof options === "number") {
      delay = options;
    } else if (options) {
      parallel = options.parallel;
      start = options.start;
      time = options.time;
      delay = options.delay;
    }
    if (time)
      task.time = time;
    if (parallel === false)
      task.parallel = false;
    if (delay === undefined) {
      this.push(task, start);
    } else {
      this.delayNumber++;
      setTimeout(() => {
        if (this.delayNumber) {
          this.delayNumber--;
          this.push(task, start);
        }
      }, delay);
    }
    this.isComplete = false;
    return task;
  }
  push(task, start) {
    this.list.push(task);
    if (start !== false && !this.timer) {
      this.timer = setTimeout(() => this.start());
    }
  }
  empty() {
    this.index = 0;
    this.parallelSuccessNumber = 0;
    this.list = [];
    this.parallelList = [];
    this.delayNumber = 0;
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.isComplete = false;
      this.run();
    }
  }
  pause() {
    clearTimeout(this.timer);
    this.timer = null;
    this.running = false;
  }
  resume() {
    this.start();
  }
  skip() {
    this.index++;
    this.resume();
  }
  stop() {
    this.isComplete = true;
    this.list.forEach((task) => {
      if (!task.isComplete)
        task.cancel();
    });
    this.pause();
    this.empty();
  }
  run() {
    if (!this.running)
      return;
    this.setParallelList();
    if (this.parallelList.length > 1) {
      this.runParallelTasks();
    } else {
      this.remain ? this.runTask() : this.onComplete();
    }
  }
  runTask() {
    const task = this.list[this.index];
    if (!task) {
      this.nextTask();
      return;
    }
    task.run().then(() => {
      this.onTask(task);
      this.index++;
      this.nextTask();
    }).catch((error) => {
      this.onError(error);
    });
  }
  runParallelTasks() {
    this.parallelList.forEach((task) => this.runParallelTask(task));
  }
  runParallelTask(task) {
    task.run().then(() => {
      this.onTask(task);
      this.fillParallelTask();
    }).catch((error) => {
      this.onParallelError(error);
    });
  }
  nextTask() {
    if (this.total === this.finishedIndex) {
      this.onComplete();
    } else {
      this.timer = setTimeout(() => this.run());
    }
  }
  setParallelList() {
    let task;
    this.parallelList = [];
    this.parallelSuccessNumber = 0;
    let end = this.index + this.config.parallel;
    if (end > this.list.length)
      end = this.list.length;
    for (let i = this.index;i < end; i++) {
      task = this.list[i];
      if (task.parallel) {
        this.parallelList.push(task);
      } else {
        break;
      }
    }
  }
  fillParallelTask() {
    let task;
    const parallelList = this.parallelList;
    this.parallelSuccessNumber++;
    parallelList.pop();
    const parallelWaitNumber = parallelList.length;
    const nextIndex = this.finishedIndex + parallelWaitNumber;
    if (parallelList.length) {
      if (!this.running)
        return;
      if (nextIndex < this.total) {
        task = this.list[nextIndex];
        if (task && task.parallel) {
          parallelList.push(task);
          this.runParallelTask(task);
        }
      }
    } else {
      this.index += this.parallelSuccessNumber;
      this.parallelSuccessNumber = 0;
      this.nextTask();
    }
  }
  onComplete() {
    this.stop();
    if (this.config.onComplete)
      this.config.onComplete();
  }
  onTask(task) {
    task.complete();
    if (this.config.onTask)
      this.config.onTask();
  }
  onParallelError(error) {
    this.parallelList.forEach((task) => {
      task.parallel = false;
    });
    this.parallelList.length = 0;
    this.parallelSuccessNumber = 0;
    this.onError(error);
  }
  onError(error) {
    this.pause();
    if (this.config.onError)
      this.config.onError(error);
  }
  destroy() {
    this.stop();
  }
}
var ImageManager = {
  map: {},
  recycledList: [],
  tasker: new TaskProcessor,
  patternTasker: new TaskProcessor,
  get isComplete() {
    return I$1.tasker.isComplete && I$1.patternTasker.isComplete;
  },
  get(config) {
    let image = I$1.map[config.url];
    if (!image) {
      image = Creator.image(config);
      I$1.map[config.url] = image;
    }
    image.use++;
    return image;
  },
  recycle(image) {
    image.use--;
    setTimeout(() => {
      if (!image.use)
        I$1.recycledList.push(image);
    });
  },
  clearRecycled() {
    const list = I$1.recycledList;
    if (list.length) {
      list.forEach((image) => {
        if (!image.use && image.url) {
          delete I$1.map[image.url];
          image.destroy();
        }
      });
      list.length = 0;
    }
  },
  isPixel(config) {
    return FileHelper.opacityTypes.some((item) => I$1.isFormat(item, config));
  },
  isFormat(format, config) {
    if (config.format === format)
      return true;
    const { url } = config;
    if (url.startsWith("data:")) {
      if (url.startsWith("data:" + FileHelper.mineType(format)))
        return true;
    } else {
      if (url.includes("." + format) || url.includes("." + FileHelper.upperCaseTypeMap[format]))
        return true;
    }
    return false;
  },
  destroy() {
    I$1.map = {};
  }
};
var I$1 = ImageManager;
var { IMAGE, create: create$1 } = IncrementId;

class LeaferImage {
  get url() {
    return this.config.url;
  }
  get completed() {
    return this.ready || !!this.error;
  }
  constructor(config) {
    this.use = 0;
    this.waitComplete = [];
    this.innerId = create$1(IMAGE);
    this.config = config || { url: "" };
    this.isSVG = ImageManager.isFormat("svg", config);
  }
  load(onSuccess, onError) {
    if (!this.loading) {
      this.loading = true;
      ImageManager.tasker.add(() => __awaiter(this, undefined, undefined, function* () {
        return yield Platform.origin.loadImage(this.url).then((img) => {
          this.ready = true;
          this.width = img.naturalWidth || img.width;
          this.height = img.naturalHeight || img.height;
          this.view = img;
          this.onComplete(true);
        }).catch((e) => {
          this.error = e;
          this.onComplete(false);
        });
      }));
    }
    this.waitComplete.push(onSuccess, onError);
    return this.waitComplete.length - 2;
  }
  unload(index, stopEvent) {
    const l2 = this.waitComplete;
    if (stopEvent) {
      const error = l2[index + 1];
      if (error)
        error({ type: "stop" });
    }
    l2[index] = l2[index + 1] = undefined;
  }
  onComplete(isSuccess) {
    let odd;
    this.waitComplete.forEach((item, index) => {
      odd = index % 2;
      if (item) {
        if (isSuccess) {
          if (!odd)
            item(this);
        } else {
          if (odd)
            item(this.error);
        }
      }
    });
    this.waitComplete.length = 0;
    this.loading = false;
  }
  getCanvas(width, height, opacity, _filters) {
    width || (width = this.width);
    height || (height = this.height);
    const canvas = Platform.origin.createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    if (opacity)
      ctx.globalAlpha = opacity;
    ctx.drawImage(this.view, 0, 0, width, height);
    return canvas;
  }
  destroy() {
    this.config = { url: "" };
    this.waitComplete.length = 0;
  }
}

class Event {
  constructor(type, target) {
    this.bubbles = false;
    this.type = type;
    if (target)
      this.target = target;
  }
  stopDefault() {
    this.isStopDefault = true;
    if (this.origin)
      Platform.event.stopDefault(this.origin);
  }
  stopNow() {
    this.isStopNow = true;
    this.isStop = true;
    if (this.origin)
      Platform.event.stopNow(this.origin);
  }
  stop() {
    this.isStop = true;
    if (this.origin)
      Platform.event.stop(this.origin);
  }
}

class ChildEvent extends Event {
  constructor(type, child, parent) {
    super(type, child);
    this.parent = parent;
    this.child = child;
  }
}
ChildEvent.ADD = "child.add";
ChildEvent.REMOVE = "child.remove";

class PropertyEvent extends Event {
  constructor(type, target, attrName, oldValue, newValue) {
    super(type, target);
    this.attrName = attrName;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
}
PropertyEvent.CHANGE = "property.change";

class ImageEvent extends Event {
  constructor(type, data) {
    super(type);
    Object.assign(this, data);
  }
}
ImageEvent.LOAD = "image.load";
ImageEvent.LOADED = "image.loaded";
ImageEvent.ERROR = "image.error";

class ResizeEvent extends Event {
  get bigger() {
    if (!this.old)
      return true;
    const { width, height } = this.old;
    return this.width >= width && this.height >= height;
  }
  get smaller() {
    return !this.bigger;
  }
  get samePixelRatio() {
    if (!this.old)
      return true;
    return this.pixelRatio === this.old.pixelRatio;
  }
  constructor(size, oldSize) {
    if (typeof size === "object") {
      super(ResizeEvent.RESIZE);
      Object.assign(this, size);
    } else {
      super(size);
    }
    this.old = oldSize;
  }
}
ResizeEvent.RESIZE = "resize";

class WatchEvent extends Event {
  constructor(type, data) {
    super(type);
    this.data = data;
  }
}
WatchEvent.REQUEST = "watch.request";
WatchEvent.DATA = "watch.data";

class LayoutEvent extends Event {
  constructor(type, data, times) {
    super(type);
    if (data) {
      this.data = data;
      this.times = times;
    }
  }
}
LayoutEvent.CHECK_UPDATE = "layout.check_update";
LayoutEvent.REQUEST = "layout.request";
LayoutEvent.START = "layout.start";
LayoutEvent.BEFORE = "layout.before";
LayoutEvent.LAYOUT = "layout.layout";
LayoutEvent.AFTER = "layout.after";
LayoutEvent.AGAIN = "layout.again";
LayoutEvent.END = "layout.end";

class AnimateEvent extends Event {
}
AnimateEvent.FRAME = "animate.frame";

class RenderEvent extends Event {
  constructor(type, times, bounds, options) {
    super(type);
    if (times)
      this.times = times;
    if (bounds) {
      this.renderBounds = bounds;
      this.renderOptions = options;
    }
  }
}
RenderEvent.REQUEST = "render.request";
RenderEvent.START = "render.start";
RenderEvent.BEFORE = "render.before";
RenderEvent.RENDER = "render";
RenderEvent.AFTER = "render.after";
RenderEvent.AGAIN = "render.again";
RenderEvent.END = "render.end";

class LeaferEvent extends Event {
}
LeaferEvent.START = "leafer.start";
LeaferEvent.BEFORE_READY = "leafer.before_ready";
LeaferEvent.READY = "leafer.ready";
LeaferEvent.AFTER_READY = "leafer.after_ready";
LeaferEvent.VIEW_READY = "leafer.view_ready";
LeaferEvent.VIEW_COMPLETED = "leafer.view_completed";
LeaferEvent.STOP = "leafer.stop";
LeaferEvent.RESTART = "leafer.restart";
LeaferEvent.END = "leafer.end";
var downKeyMap = {};
var Keyboard = {
  isHoldSpaceKey() {
    return Keyboard.isHold("Space");
  },
  isHold(code) {
    return downKeyMap[code];
  },
  setDownCode(code) {
    if (!downKeyMap[code])
      downKeyMap[code] = true;
  },
  setUpCode(code) {
    downKeyMap[code] = false;
  }
};
var PointerButton = {
  LEFT: 1,
  RIGHT: 2,
  MIDDLE: 4,
  defaultLeft(event) {
    if (!event.buttons)
      event.buttons = 1;
  },
  left(event) {
    return event.buttons === 1;
  },
  right(event) {
    return event.buttons === 2;
  },
  middle(event) {
    return event.buttons === 4;
  }
};

class UIEvent extends Event {
  get spaceKey() {
    return Keyboard.isHoldSpaceKey();
  }
  get left() {
    return PointerButton.left(this);
  }
  get right() {
    return PointerButton.right(this);
  }
  get middle() {
    return PointerButton.middle(this);
  }
  constructor(params) {
    super(params.type);
    this.bubbles = true;
    Object.assign(this, params);
  }
  getInner(relative) {
    if (!relative)
      relative = this.current;
    return relative.getInnerPoint(this);
  }
  getLocal(relative) {
    if (!relative)
      relative = this.current;
    return relative.getLocalPoint(this);
  }
  static changeName(oldName, newName) {
    EventCreator.changeName(oldName, newName);
  }
}
var pathType = boundsType;
var strokeType = affectStrokeBoundsType;
var debug$1 = new Debug("rewrite");
var list = [];
var excludeNames = ["destroy", "constructor"];
setTimeout(() => doRewrite(true));
var PointerEvent = class PointerEvent2 extends UIEvent {
};
PointerEvent.POINTER = "pointer";
PointerEvent.BEFORE_DOWN = "pointer.before_down";
PointerEvent.BEFORE_MOVE = "pointer.before_move";
PointerEvent.BEFORE_UP = "pointer.before_up";
PointerEvent.DOWN = "pointer.down";
PointerEvent.MOVE = "pointer.move";
PointerEvent.UP = "pointer.up";
PointerEvent.OVER = "pointer.over";
PointerEvent.OUT = "pointer.out";
PointerEvent.ENTER = "pointer.enter";
PointerEvent.LEAVE = "pointer.leave";
PointerEvent.TAP = "tap";
PointerEvent.DOUBLE_TAP = "double_tap";
PointerEvent.CLICK = "click";
PointerEvent.DOUBLE_CLICK = "double_click";
PointerEvent.LONG_PRESS = "long_press";
PointerEvent.LONG_TAP = "long_tap";
PointerEvent.MENU = "pointer.menu";
PointerEvent = __decorate([
  registerUIEvent()
], PointerEvent);
var move = {};
var DragEvent = class DragEvent2 extends PointerEvent {
  static setList(data) {
    this.list = data instanceof LeafList ? data : new LeafList(data);
  }
  static setData(data) {
    this.data = data;
  }
  getInnerMove(relative, total) {
    if (!relative)
      relative = this.current;
    this.assignMove(total);
    return relative.getInnerPoint(move, null, true);
  }
  getLocalMove(relative, total) {
    if (!relative)
      relative = this.current;
    this.assignMove(total);
    return relative.getLocalPoint(move, null, true);
  }
  getInnerTotal(relative) {
    return this.getInnerMove(relative, true);
  }
  getLocalTotal(relative) {
    return this.getLocalMove(relative, true);
  }
  assignMove(total) {
    move.x = total ? this.totalX : this.moveX;
    move.y = total ? this.totalY : this.moveY;
  }
};
DragEvent.BEFORE_DRAG = "drag.before_drag";
DragEvent.START = "drag.start";
DragEvent.DRAG = "drag";
DragEvent.END = "drag.end";
DragEvent.OVER = "drag.over";
DragEvent.OUT = "drag.out";
DragEvent.ENTER = "drag.enter";
DragEvent.LEAVE = "drag.leave";
DragEvent = __decorate([
  registerUIEvent()
], DragEvent);
var DropEvent = class DropEvent2 extends PointerEvent {
  static setList(data) {
    DragEvent.setList(data);
  }
  static setData(data) {
    DragEvent.setData(data);
  }
};
DropEvent.DROP = "drop";
DropEvent = __decorate([
  registerUIEvent()
], DropEvent);
var MoveEvent = class MoveEvent2 extends DragEvent {
};
MoveEvent.BEFORE_MOVE = "move.before_move";
MoveEvent.START = "move.start";
MoveEvent.MOVE = "move";
MoveEvent.END = "move.end";
MoveEvent = __decorate([
  registerUIEvent()
], MoveEvent);
var RotateEvent = class RotateEvent2 extends UIEvent {
};
RotateEvent.BEFORE_ROTATE = "rotate.before_rotate";
RotateEvent.START = "rotate.start";
RotateEvent.ROTATE = "rotate";
RotateEvent.END = "rotate.end";
RotateEvent = __decorate([
  registerUIEvent()
], RotateEvent);
var SwipeEvent = class SwipeEvent2 extends DragEvent {
};
SwipeEvent.SWIPE = "swipe";
SwipeEvent.LEFT = "swipe.left";
SwipeEvent.RIGHT = "swipe.right";
SwipeEvent.UP = "swipe.up";
SwipeEvent.DOWN = "swipe.down";
SwipeEvent = __decorate([
  registerUIEvent()
], SwipeEvent);
var ZoomEvent = class ZoomEvent2 extends UIEvent {
};
ZoomEvent.BEFORE_ZOOM = "zoom.before_zoom";
ZoomEvent.START = "zoom.start";
ZoomEvent.ZOOM = "zoom";
ZoomEvent.END = "zoom.end";
ZoomEvent = __decorate([
  registerUIEvent()
], ZoomEvent);
var KeyEvent = class KeyEvent2 extends UIEvent {
};
KeyEvent.DOWN = "key.down";
KeyEvent.HOLD = "key.hold";
KeyEvent.UP = "key.up";
KeyEvent = __decorate([
  registerUIEvent()
], KeyEvent);

class Transformer {
  constructor(interaction) {
    this.interaction = interaction;
  }
  move(data) {
    const { interaction } = this;
    if (!this.moveData) {
      const { path } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.moveData = Object.assign(Object.assign({}, data), { moveX: 0, moveY: 0 });
      interaction.emit(MoveEvent.START, this.moveData);
    }
    data.path = this.moveData.path;
    interaction.emit(MoveEvent.BEFORE_MOVE, data);
    interaction.emit(MoveEvent.MOVE, data);
    this.transformEndWait();
  }
  zoom(data) {
    const { interaction } = this;
    if (!this.zoomData) {
      const { path } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.zoomData = Object.assign(Object.assign({}, data), { scale: 1 });
      interaction.emit(ZoomEvent.START, this.zoomData);
    }
    data.path = this.zoomData.path;
    interaction.emit(ZoomEvent.BEFORE_ZOOM, data);
    interaction.emit(ZoomEvent.ZOOM, data);
    this.transformEndWait();
  }
  rotate(data) {
    const { interaction } = this;
    if (!this.rotateData) {
      const { path } = interaction.selector.getByPoint(data, interaction.hitRadius);
      data.path = path;
      this.rotateData = Object.assign(Object.assign({}, data), { rotation: 0 });
      interaction.emit(RotateEvent.START, this.rotateData);
    }
    data.path = this.rotateData.path;
    interaction.emit(RotateEvent.BEFORE_ROTATE, data);
    interaction.emit(RotateEvent.ROTATE, data);
    this.transformEndWait();
  }
  transformEndWait() {
    clearTimeout(this.transformTimer);
    this.transformTimer = setTimeout(() => {
      this.transformEnd();
    }, this.interaction.config.pointer.transformTime);
  }
  transformEnd() {
    this.moveEnd();
    this.zoomEnd();
    this.rotateEnd();
  }
  moveEnd() {
    if (this.moveData) {
      this.interaction.emit(MoveEvent.END, this.moveData);
      this.moveData = null;
    }
  }
  zoomEnd() {
    if (this.zoomData) {
      this.interaction.emit(ZoomEvent.END, this.zoomData);
      this.zoomData = null;
    }
  }
  rotateEnd() {
    if (this.rotateData) {
      this.interaction.emit(RotateEvent.END, this.rotateData);
      this.rotateData = null;
    }
  }
  destroy() {
    this.zoomData = this.moveData = this.rotateData = null;
  }
}
var { copy: copy$2, toInnerPoint: toInnerPoint$1, scaleOfOuter, rotateOfOuter, skewOfOuter } = MatrixHelper;
var matrix = {};
var LeafHelper = {
  updateAllWorldMatrix(leaf) {
    leaf.__updateWorldMatrix();
    if (leaf.isBranch) {
      const { children } = leaf;
      for (let i = 0, len = children.length;i < len; i++) {
        updateAllWorldMatrix(children[i]);
      }
    }
  },
  updateAllWorldOpacity(leaf) {
    leaf.__updateWorldOpacity();
    if (leaf.isBranch) {
      const { children } = leaf;
      for (let i = 0, len = children.length;i < len; i++) {
        updateAllWorldOpacity(children[i]);
      }
    }
  },
  updateAllChange(leaf) {
    updateAllWorldOpacity(leaf);
    leaf.__updateChange();
    if (leaf.isBranch) {
      const { children } = leaf;
      for (let i = 0, len = children.length;i < len; i++) {
        updateAllChange(children[i]);
      }
    }
  },
  worldHittable(t2) {
    if (!t2.__.hittable)
      return false;
    let { parent } = t2;
    while (parent) {
      if (!parent.__.hittable || !parent.__.hitChildren)
        return false;
      parent = parent.parent;
    }
    return true;
  },
  moveWorld(t2, x, y) {
    const local = { x, y };
    if (t2.parent)
      toInnerPoint$1(t2.parent.worldTransform, local, local, true);
    L.moveLocal(t2, local.x, local.y);
  },
  moveLocal(t2, x, y = 0) {
    t2.x += x;
    t2.y += y;
  },
  zoomOfWorld(t2, origin, scaleX, scaleY) {
    this.zoomOfLocal(t2, getTempLocal(t2, origin), scaleX, scaleY);
  },
  zoomOfLocal(t2, origin, scaleX, scaleY = scaleX) {
    copy$2(matrix, t2.__local);
    scaleOfOuter(matrix, origin, scaleX, scaleY);
    moveByMatrix(t2, matrix);
    t2.scaleX *= scaleX;
    t2.scaleY *= scaleY;
  },
  rotateOfWorld(t2, origin, angle) {
    this.rotateOfLocal(t2, getTempLocal(t2, origin), angle);
  },
  rotateOfLocal(t2, origin, angle) {
    copy$2(matrix, t2.__local);
    rotateOfOuter(matrix, origin, angle);
    moveByMatrix(t2, matrix);
    t2.rotation = MathHelper.formatRotation(t2.rotation + angle);
  },
  skewOfWorld(t2, origin, skewX, skewY) {
    this.skewOfLocal(t2, getTempLocal(t2, origin), skewX, skewY);
  },
  skewOfLocal(t2, origin, skewX, skewY) {
    copy$2(matrix, t2.__local);
    skewOfOuter(matrix, origin, skewX, skewY);
    moveByMatrix(t2, matrix);
    t2.skewX = MathHelper.formatSkew(t2.skewX + skewX);
    t2.skewY = MathHelper.formatSkew(t2.skewY + skewY);
  },
  drop(t2, parent) {
    const position = { x: t2.x, y: t2.y };
    t2.localToWorld(position);
    parent.worldToInner(position);
    t2.set(position);
    parent.add(t2);
  },
  hasParent(t2, parent) {
    if (!parent)
      return false;
    let p = t2;
    while (p) {
      if (parent === p)
        return true;
      p = p.parent;
    }
    return false;
  }
};
var L = LeafHelper;
var { updateAllWorldMatrix, updateAllWorldOpacity, updateAllChange } = L;
var LeafBoundsHelper = {
  worldBounds(target) {
    return target.__world;
  },
  localBoxBounds(target) {
    return target.__.isEraser ? null : target.__local;
  },
  localEventBounds(target) {
    return target.__.isEraser ? null : target.__layout.localStrokeBounds;
  },
  localRenderBounds(target) {
    return target.__.isEraser ? null : target.__layout.localRenderBounds;
  },
  maskLocalBoxBounds(target) {
    return target.__.isMask ? target.__local : null;
  },
  maskLocalEventBounds(target) {
    return target.__.isMask ? target.__layout.localStrokeBounds : null;
  },
  maskLocalRenderBounds(target) {
    return target.__.isMask ? target.__layout.localRenderBounds : null;
  }
};
var BranchHelper = {
  sort(a2, b) {
    return a2.__.zIndex === b.__.zIndex ? a2.__tempNumber - b.__tempNumber : a2.__.zIndex - b.__.zIndex;
  },
  pushAllChildBranch(branch, pushList) {
    branch.__tempNumber = 1;
    if (branch.__.__childBranchNumber) {
      const { children } = branch;
      for (let i = 0, len = children.length;i < len; i++) {
        branch = children[i];
        if (branch.isBranch) {
          branch.__tempNumber = 1;
          pushList.push(branch);
          pushAllChildBranch(branch, pushList);
        }
      }
    }
  },
  pushAllParent(leaf, pushList) {
    const { keys } = pushList;
    if (keys) {
      while (leaf.parent) {
        if (keys[leaf.parent.innerId] === undefined) {
          pushList.push(leaf.parent);
          leaf = leaf.parent;
        } else {
          break;
        }
      }
    } else {
      while (leaf.parent) {
        pushList.push(leaf.parent);
        leaf = leaf.parent;
      }
    }
  },
  pushAllBranchStack(branch, pushList) {
    let start = pushList.length;
    const { children } = branch;
    for (let i = 0, len = children.length;i < len; i++) {
      if (children[i].isBranch) {
        pushList.push(children[i]);
      }
    }
    for (let i = start, len = pushList.length;i < len; i++) {
      pushAllBranchStack(pushList[i], pushList);
    }
  },
  updateWorldBoundsByBranchStack(branchStack) {
    let branch;
    for (let i = branchStack.length - 1;i > -1; i--) {
      branch = branchStack[i];
      for (let j = 0, len = branch.children.length;j < len; j++) {
        branch.children[j].__updateWorldBounds();
      }
    }
    branch.__updateWorldBounds();
  }
};
var { pushAllChildBranch, pushAllBranchStack } = BranchHelper;
var WaitHelper = {
  run(wait) {
    for (let i = 0, len = wait.length;i < len; i++) {
      wait[i]();
    }
    wait.length = 0;
  }
};
var InteractionHelper = {
  getMoveEventData(center, move2, event) {
    return Object.assign(Object.assign({}, event), { x: center.x, y: center.y, moveX: move2.x, moveY: move2.y });
  },
  getRotateEventData(center, angle, event) {
    return Object.assign(Object.assign({}, event), { x: center.x, y: center.y, rotation: angle });
  },
  getZoomEventData(center, scale, event) {
    return Object.assign(Object.assign({}, event), { x: center.x, y: center.y, scale });
  },
  getDragEventData(startPoint2, lastPoint, event) {
    return Object.assign(Object.assign({}, event), { x: event.x, y: event.y, moveX: event.x - lastPoint.x, moveY: event.y - lastPoint.y, totalX: event.x - startPoint2.x, totalY: event.y - startPoint2.y });
  },
  getDropEventData(event, list2, data) {
    return Object.assign(Object.assign({}, event), {
      list: list2,
      data
    });
  },
  getSwipeDirection(angle) {
    if (angle < -45 && angle > -135) {
      return SwipeEvent.UP;
    } else if (angle > 45 && angle < 135) {
      return SwipeEvent.DOWN;
    } else if (angle <= 45 && angle >= -45) {
      return SwipeEvent.RIGHT;
    } else {
      return SwipeEvent.LEFT;
    }
  },
  getSwipeEventData(startPoint2, lastDragData, event) {
    return Object.assign(Object.assign({}, event), { moveX: lastDragData.moveX, moveY: lastDragData.moveY, totalX: event.x - startPoint2.x, totalY: event.y - startPoint2.y, type: I.getSwipeDirection(PointHelper.getAngle(startPoint2, event)) });
  },
  getBase(e) {
    return {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      buttons: e.buttons === undefined ? 1 : e.buttons,
      origin: e
    };
  },
  pathHasEventType(path, type) {
    const { list: list2 } = path;
    for (let i = 0, len = list2.length;i < len; i++) {
      if (list2[i].hasEvent(type))
        return true;
    }
    return false;
  },
  filterPathByEventType(path, type) {
    const find = new LeafList;
    const { list: list2 } = path;
    for (let i = 0, len = list2.length;i < len; i++) {
      if (list2[i].hasEvent(type))
        find.push(list2[i]);
    }
    return find;
  }
};
var I = InteractionHelper;
var emptyList = new LeafList;
var { getDragEventData, getDropEventData, getSwipeEventData } = InteractionHelper;

class Dragger {
  constructor(interaction) {
    this.interaction = interaction;
  }
  setDragData(data) {
    this.dragData = getDragEventData(data, data, data);
  }
  getList() {
    return this.dragging ? DragEvent.list || this.interaction.selector.list || this.dragableList || emptyList : emptyList;
  }
  checkDrag(data, canDrag) {
    const { interaction } = this;
    const { downData } = interaction;
    if (this.moving && !(PointerButton.middle(data) || PointerButton.left(data))) {
      interaction.pointerCancel();
      return;
    }
    const { dragData } = this;
    if (!this.moving) {
      const moveOnDragEmpty = interaction.config.move.dragEmpty && downData.target.isLeafer;
      this.moving = (PointerButton.middle(data) || interaction.moveMode || moveOnDragEmpty) && canDrag;
      if (this.moving)
        interaction.emit(MoveEvent.START, dragData);
    }
    if (!this.moving) {
      this.dragStart(data, canDrag);
    }
    const { path, throughPath } = downData;
    this.dragData = getDragEventData(downData, dragData, data);
    if (throughPath)
      this.dragData.throughPath = throughPath;
    this.dragData.path = path;
    if (this.moving) {
      interaction.emit(MoveEvent.BEFORE_MOVE, this.dragData);
      interaction.emit(MoveEvent.MOVE, this.dragData);
    } else if (this.dragging) {
      this.realDrag();
      interaction.emit(DragEvent.BEFORE_DRAG, this.dragData);
      interaction.emit(DragEvent.DRAG, this.dragData);
    }
  }
  dragStart(data, canDrag) {
    if (!this.dragging) {
      this.dragging = PointerButton.left(data) && canDrag;
      if (this.dragging) {
        this.interaction.emit(DragEvent.START, this.dragData);
        this.getDragableList(this.dragData.path);
      }
    }
  }
  getDragableList(path) {
    let leaf;
    for (let i = 0, len = path.length;i < len; i++) {
      leaf = path.list[i];
      if (leaf.__.draggable && leaf.__.hitSelf) {
        this.dragableList = new LeafList(leaf);
        break;
      }
    }
  }
  realDrag() {
    const { running } = this.interaction;
    const list2 = this.getList();
    if (list2.length && running) {
      const { moveX, moveY } = this.dragData;
      list2.forEach((leaf) => {
        LeafHelper.moveWorld(leaf, moveX, moveY);
      });
    }
  }
  dragOverOrOut(data) {
    const { interaction } = this;
    const { dragOverPath } = this;
    const { path } = data;
    if (dragOverPath) {
      if (path.indexAt(0) !== dragOverPath.indexAt(0)) {
        interaction.emit(DragEvent.OUT, data, dragOverPath);
        interaction.emit(DragEvent.OVER, data, path);
      }
    } else {
      interaction.emit(DragEvent.OVER, data, path);
    }
    this.dragOverPath = path;
  }
  dragEnterOrLeave(data) {
    const { interaction } = this;
    const { dragEnterPath } = this;
    const { path } = data;
    interaction.emit(DragEvent.LEAVE, data, dragEnterPath, path);
    interaction.emit(DragEvent.ENTER, data, path, dragEnterPath);
    this.dragEnterPath = path;
  }
  dragEnd(data) {
    const { interaction } = this;
    const { downData } = interaction;
    if (!downData)
      return;
    const { path, throughPath } = downData;
    const endDragData = getDragEventData(downData, data, data);
    if (throughPath)
      endDragData.throughPath = throughPath;
    endDragData.path = path;
    if (this.moving)
      interaction.emit(MoveEvent.END, endDragData);
    if (this.dragging) {
      interaction.emit(DragEvent.END, endDragData);
      this.swipe(data, endDragData);
      this.drop(data);
    }
    this.autoMoveCancel();
    this.dragReset();
  }
  swipe(data, endDragData) {
    const { interaction } = this;
    const { downData } = interaction;
    if (PointHelper.getDistance(downData, data) > interaction.config.pointer.swipeDistance) {
      const swipeData = getSwipeEventData(downData, this.dragData, endDragData);
      this.interaction.emit(swipeData.type, swipeData);
    }
  }
  drop(data) {
    const dropData = getDropEventData(data, this.getList(), DragEvent.data);
    dropData.path = this.dragEnterPath;
    this.interaction.emit(DropEvent.DROP, dropData);
    this.interaction.emit(DragEvent.LEAVE, data, this.dragEnterPath);
  }
  dragReset() {
    DragEvent.list = DragEvent.data = this.dragableList = this.dragData = this.dragOverPath = this.dragEnterPath = null;
    this.dragging = this.moving = false;
  }
  checkDragOut(data) {
    const { interaction } = this;
    this.autoMoveCancel();
    if (this.dragging && !interaction.shrinkCanvasBounds.hitPoint(data))
      this.autoMoveOnDragOut(data);
  }
  autoMoveOnDragOut(data) {
    const { interaction } = this;
    const { downData } = interaction;
    const { autoDistance, dragOut } = interaction.config.move;
    if (!dragOut || !autoDistance)
      return;
    const bounds = interaction.shrinkCanvasBounds;
    const { x, y } = bounds;
    const right2 = BoundsHelper.right(bounds);
    const bottom2 = BoundsHelper.bottom(bounds);
    const moveX = data.x < x ? autoDistance : right2 < data.x ? -autoDistance : 0;
    const moveY = data.y < y ? autoDistance : bottom2 < data.y ? -autoDistance : 0;
    let totalX = 0, totalY = 0;
    this.autoMoveTimer = setInterval(() => {
      totalX += moveX;
      totalY += moveY;
      PointHelper.move(downData, moveX, moveY);
      PointHelper.move(this.dragData, moveX, moveY);
      interaction.move(Object.assign(Object.assign({}, data), { moveX, moveY, totalX, totalY }));
      interaction.pointerMoveReal(data);
    }, 10);
  }
  autoMoveCancel() {
    if (this.autoMoveTimer) {
      clearInterval(this.autoMoveTimer);
      this.autoMoveTimer = 0;
    }
  }
  destroy() {
    this.dragReset();
  }
}
var allowTypes = ["move", "zoom", "rotate", "key"];
var MultiTouchHelper = {
  getData(list2) {
    const a2 = list2[0];
    const b = list2[1];
    const lastCenter = PointHelper.getCenter(a2.from, b.from);
    const center = PointHelper.getCenter(a2.to, b.to);
    const move2 = { x: center.x - lastCenter.x, y: center.y - lastCenter.y };
    const lastDistance = PointHelper.getDistance(a2.from, b.from);
    const distance = PointHelper.getDistance(a2.to, b.to);
    const scale = distance / lastDistance;
    const angle = PointHelper.getChangeAngle(a2.from, b.from, a2.to, b.to);
    return { move: move2, scale, angle, center };
  }
};
var { pathHasEventType, getMoveEventData, getZoomEventData, getRotateEventData } = InteractionHelper;

class InteractionBase {
  get dragging() {
    return this.dragger.dragging;
  }
  get moveMode() {
    return Keyboard.isHoldSpaceKey() && this.config.move.holdSpaceKey || this.downData && PointerButton.middle(this.downData);
  }
  get hitRadius() {
    return this.config.pointer.hitRadius;
  }
  constructor(target, canvas, selector, userConfig) {
    this.config = {
      wheel: {
        zoomMode: false,
        zoomSpeed: 0.5,
        moveSpeed: 0.5,
        rotateSpeed: 0.5,
        delta: Platform.os === "Windows" ? { x: 150 / 4, y: 150 / 4 } : { x: 80 / 4, y: 8 },
        preventDefault: true
      },
      pointer: {
        hitRadius: 5,
        through: false,
        tapTime: 120,
        longPressTime: 800,
        transformTime: 500,
        dragHover: true,
        dragDistance: 2,
        swipeDistance: 20,
        ignoreMove: false
      },
      cursor: {}
    };
    this.tapCount = 0;
    this.downKeyMap = {};
    this.target = target;
    this.canvas = canvas;
    this.selector = selector;
    this.defaultPath = new LeafList(target);
    this.transformer = new Transformer(this);
    this.dragger = new Dragger(this);
    if (userConfig)
      this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  receive(_event) {
  }
  pointerDown(data, useDefaultPath) {
    if (!data)
      data = this.hoverData;
    if (!data)
      return;
    PointerButton.defaultLeft(data);
    this.emit(PointerEvent.BEFORE_DOWN, data, this.defaultPath);
    this.updateDownData(data);
    if (useDefaultPath)
      data.path = this.defaultPath;
    this.emit(PointerEvent.DOWN, data);
    this.downTime = Date.now();
    this.dragger.setDragData(data);
    if (PointerButton.left(data)) {
      this.tapWait();
      this.longPressWait(data);
    }
    this.updateCursor(data);
  }
  pointerMove(data) {
    if (!data)
      data = this.hoverData;
    if (!data)
      return;
    if (this.downData)
      PointerButton.defaultLeft(data);
    const hit = this.canvas.bounds.hitPoint(data);
    if (hit || this.downData) {
      if (hit && !this.downData && PointerButton.left(data))
        this.pointerDown(data, true);
      this.pointerMoveReal(data);
      this.dragger.checkDragOut(data);
    }
  }
  pointerMoveReal(data) {
    this.emit(PointerEvent.BEFORE_MOVE, data, this.defaultPath);
    if (this.downData) {
      const canDrag = PointHelper.getDistance(this.downData, data) > this.config.pointer.dragDistance;
      if (this.waitTap && canDrag)
        this.pointerWaitCancel();
      this.dragger.checkDrag(data, canDrag);
    }
    if (this.dragger.moving || this.config.pointer.ignoreMove)
      return;
    this.updateHoverData(data);
    this.emit(PointerEvent.MOVE, data);
    this.pointerOverOrOut(data);
    this.pointerEnterOrLeave(data);
    if (this.dragger.dragging) {
      this.dragger.dragOverOrOut(data);
      this.dragger.dragEnterOrLeave(data);
    }
    this.updateCursor(data);
  }
  pointerUp(data) {
    if (!data)
      data = this.downData;
    if (!this.downData)
      return;
    PointerButton.defaultLeft(data);
    this.emit(PointerEvent.BEFORE_UP, data, this.defaultPath);
    this.findPath(data);
    this.emit(PointerEvent.UP, data);
    this.emit(PointerEvent.UP, this.downData, undefined, data.path);
    this.touchLeave(data);
    this.tap(data);
    this.dragger.dragEnd(data);
    this.downData = null;
    this.updateCursor(data);
  }
  pointerCancel() {
    this.pointerUp(this.dragger.dragData);
  }
  multiTouch(data, list2) {
    const { move: move2, angle, scale, center } = MultiTouchHelper.getData(list2);
    this.rotate(getRotateEventData(center, angle, data));
    this.zoom(getZoomEventData(center, scale, data));
    this.move(getMoveEventData(center, move2, data));
  }
  menu(data) {
    this.findPath(data);
    this.emit(PointerEvent.MENU, data);
  }
  move(data) {
    this.transformer.move(data);
  }
  zoom(data) {
    this.transformer.zoom(data);
  }
  rotate(data) {
    this.transformer.rotate(data);
  }
  transformEnd() {
    this.transformer.transformEnd();
  }
  keyDown(data) {
    const { code } = data;
    if (!this.downKeyMap[code]) {
      this.downKeyMap[code] = true;
      Keyboard.setDownCode(code);
      this.emit(KeyEvent.HOLD, data, this.defaultPath);
      if (this.moveMode)
        this.updateCursor();
    }
    this.emit(KeyEvent.DOWN, data, this.defaultPath);
  }
  keyUp(data) {
    const { code } = data;
    this.downKeyMap[code] = false;
    Keyboard.setUpCode(code);
    this.emit(KeyEvent.UP, data, this.defaultPath);
    if (this.cursor === "grab")
      this.updateCursor();
  }
  pointerOverOrOut(data) {
    if (this.dragger.moving)
      return;
    if (this.dragging && !this.config.pointer.dragHover)
      return;
    const { path } = data;
    if (this.overPath) {
      if (path.indexAt(0) !== this.overPath.indexAt(0)) {
        this.emit(PointerEvent.OUT, data, this.overPath);
        this.emit(PointerEvent.OVER, data, path);
      }
    } else {
      this.emit(PointerEvent.OVER, data, path);
    }
    this.overPath = path;
  }
  pointerEnterOrLeave(data) {
    if (this.dragger.moving)
      return;
    if (this.dragging && !this.config.pointer.dragHover)
      return;
    const { path } = data;
    this.emit(PointerEvent.LEAVE, data, this.enterPath, path);
    this.emit(PointerEvent.ENTER, data, path, this.enterPath);
    this.enterPath = path;
  }
  touchLeave(data) {
    if (data.pointerType === "touch") {
      if (this.enterPath) {
        this.emit(PointerEvent.LEAVE, data);
        if (this.dragger.dragging)
          this.emit(DropEvent.LEAVE, data);
      }
    }
  }
  tap(data) {
    const { pointer } = this.config;
    const longTap = this.longTap(data);
    if (!pointer.tapMore && longTap)
      return;
    if (!this.waitTap)
      return;
    if (pointer.tapMore)
      this.emitTap(data);
    const useTime = Date.now() - this.downTime;
    const hasDouble = [PointerEvent.DOUBLE_TAP, PointerEvent.DOUBLE_CLICK].some((type) => pathHasEventType(data.path, type));
    if (useTime < pointer.tapTime + 50 && hasDouble) {
      this.tapCount++;
      if (this.tapCount === 2) {
        this.tapWaitCancel();
        this.emitDoubleTap(data);
      } else {
        clearTimeout(this.tapTimer);
        this.tapTimer = setTimeout(() => {
          if (!pointer.tapMore) {
            this.tapWaitCancel();
            this.emitTap(data);
          }
        }, pointer.tapTime);
      }
    } else {
      if (!pointer.tapMore) {
        this.tapWaitCancel();
        this.emitTap(data);
      }
    }
  }
  findPath(data, options) {
    const { hitRadius, through } = this.config.pointer;
    const find = this.selector.getByPoint(data, hitRadius, options || { through });
    if (find.throughPath)
      data.throughPath = find.throughPath;
    data.path = find.path;
    return find.path;
  }
  isDrag(leaf) {
    return this.dragger.getList().has(leaf);
  }
  updateDownData(data) {
    if (!data)
      data = this.downData;
    if (!data)
      return;
    this.findPath(data);
    this.downData = data;
  }
  updateHoverData(data) {
    if (!data)
      data = this.hoverData;
    if (!data)
      return;
    this.findPath(data, { exclude: this.dragger.getList(), name: PointerEvent.MOVE });
    this.hoverData = data;
  }
  updateCursor(data) {
    if (this.config.cursor.stop)
      return;
    if (!data) {
      this.updateHoverData();
      data = this.hoverData;
    }
    if (this.dragger.moving) {
      return this.setCursor("grabbing");
    } else if (this.moveMode) {
      return this.setCursor(this.downData ? "grabbing" : "grab");
    } else if (!data || this.dragger.dragging)
      return;
    let leaf;
    let cursor;
    const { path } = data;
    for (let i = 0, len = path.length;i < len; i++) {
      leaf = path.list[i];
      cursor = leaf.cursor;
      if (cursor)
        break;
    }
    this.setCursor(cursor);
  }
  setCursor(cursor) {
    this.cursor = cursor;
    this.canvas.setCursor(cursor);
  }
  emitTap(data) {
    this.emit(PointerEvent.TAP, data);
    this.emit(PointerEvent.CLICK, data);
  }
  emitDoubleTap(data) {
    this.emit(PointerEvent.DOUBLE_TAP, data);
    this.emit(PointerEvent.DOUBLE_CLICK, data);
  }
  pointerWaitCancel() {
    this.tapWaitCancel();
    this.longPressWaitCancel();
  }
  tapWait() {
    clearTimeout(this.tapTimer);
    this.waitTap = true;
  }
  tapWaitCancel() {
    clearTimeout(this.tapTimer);
    this.waitTap = false;
    this.tapCount = 0;
  }
  longPressWait(data) {
    clearTimeout(this.longPressTimer);
    this.longPressTimer = setTimeout(() => {
      this.longPressed = true;
      this.emit(PointerEvent.LONG_PRESS, data);
    }, this.config.pointer.longPressTime);
  }
  longTap(data) {
    let longTap;
    if (this.longPressed) {
      this.emit(PointerEvent.LONG_TAP, data);
      if (pathHasEventType(data.path, PointerEvent.LONG_TAP))
        longTap = true;
    }
    this.longPressWaitCancel();
    return longTap;
  }
  longPressWaitCancel() {
    clearTimeout(this.longPressTimer);
    this.longPressed = false;
  }
  __onResize() {
    this.shrinkCanvasBounds = new Bounds(this.canvas.bounds);
    this.shrinkCanvasBounds.spread(-2);
  }
  __listenEvents() {
    const { target } = this;
    this.__eventIds = [target.on_(ResizeEvent.RESIZE, this.__onResize, this)];
    target.once(LeaferEvent.READY, () => this.__onResize());
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  emit(type, data, path, excludePath) {
    if (this.running)
      emit(type, data, path, excludePath);
  }
  destroy() {
    if (this.__eventIds.length) {
      this.stop();
      this.__removeListenEvents();
      this.dragger.destroy();
      this.transformer.destroy();
      this.downData = this.overPath = this.enterPath = null;
    }
  }
}

class Cursor {
  static set(name, value) {
    this.custom[name] = value;
  }
  static get(name) {
    return this.custom[name];
  }
}
Cursor.custom = {};
var { toOuterOf: toOuterOf$1 } = BoundsHelper;

class LeafLayout {
  constructor(leaf) {
    this.leaf = leaf;
    this.renderBounds = this.strokeBounds = this.boxBounds = { x: 0, y: 0, width: 0, height: 0 };
    this.localRenderBounds = this.localStrokeBounds = leaf.__local;
    this.boxChange();
    this.matrixChange();
  }
  checkUpdate(force) {
    const { leafer } = this.leaf;
    if (leafer) {
      if (leafer.ready) {
        if ((Platform.realtimeLayout || force) && leafer.watcher.changed)
          leafer.layouter.layout();
      } else {
        leafer.start();
      }
    } else {
      let root = this.leaf;
      while (root.parent) {
        root = root.parent;
      }
      Platform.layout(root);
    }
  }
  getTransform(locationType) {
    this.checkUpdate();
    return locationType === "world" ? this.leaf.__world : this.leaf.__local;
  }
  getBounds(type, locationType) {
    this.checkUpdate();
    if (locationType === "world") {
      switch (type) {
        case "render":
          return this.leaf.__world;
        case "content":
          if (this.contentBounds)
            return this.getWorldContentBounds();
        case "margin":
        case "box":
          return this.getWorldBoxBounds();
        case "margin":
        case "stroke":
          return this.getWorldStrokeBounds();
      }
    } else if (locationType === "inner") {
      switch (type) {
        case "render":
          return this.renderBounds;
        case "content":
          if (this.contentBounds)
            return this.contentBounds;
        case "margin":
        case "box":
          return this.boxBounds;
        case "stroke":
          return this.strokeBounds;
      }
    } else {
      switch (type) {
        case "render":
          return this.localRenderBounds;
        case "margin":
        case "content":
        case "box":
          return this.leaf.__local;
        case "stroke":
          return this.localStrokeBounds;
      }
    }
  }
  getWorldContentBounds() {
    this._worldContentBounds || (this._worldContentBounds = {});
    toOuterOf$1(this.contentBounds, this.leaf.__world, this._worldContentBounds);
    return this._worldContentBounds;
  }
  getWorldBoxBounds() {
    this._worldBoxBounds || (this._worldBoxBounds = {});
    toOuterOf$1(this.boxBounds, this.leaf.__world, this._worldBoxBounds);
    return this._worldBoxBounds;
  }
  getWorldStrokeBounds() {
    this._worldStrokeBounds || (this._worldStrokeBounds = {});
    toOuterOf$1(this.strokeBounds, this.leaf.__world, this._worldStrokeBounds);
    return this._worldStrokeBounds;
  }
  spreadStrokeCancel() {
    const same = this.renderBounds === this.strokeBounds;
    this.strokeBounds = this.boxBounds;
    this.localStrokeBounds = this.leaf.__local;
    if (same)
      this.spreadRenderCancel();
  }
  spreadRenderCancel() {
    this.renderBounds = this.strokeBounds;
    this.localRenderBounds = this.localStrokeBounds;
  }
  spreadStroke() {
    const { x, y, width, height } = this.strokeBounds;
    this.strokeBounds = { x, y, width, height };
    this.localStrokeBounds = { x, y, width, height };
    if (!this.renderSpread)
      this.spreadRenderCancel();
  }
  spreadRender() {
    const { x, y, width, height } = this.renderBounds;
    this.renderBounds = { x, y, width, height };
    this.localRenderBounds = { x, y, width, height };
  }
  boxChange() {
    this.boxChanged = true;
    this.localBoxChanged || this.localBoxChange();
    this.hitCanvasChanged = true;
  }
  localBoxChange() {
    this.localBoxChanged = true;
    this.boundsChanged = true;
  }
  strokeChange() {
    this.strokeChanged = true;
    this.strokeSpread || (this.strokeSpread = 1);
    this.boundsChanged = true;
    this.hitCanvasChanged = true;
  }
  renderChange() {
    this.renderChanged = true;
    this.renderSpread || (this.renderSpread = 1);
    this.boundsChanged = true;
  }
  scaleChange() {
    this.scaleChanged = true;
    this._scaleOrRotationChange();
  }
  rotationChange() {
    this.rotationChanged = true;
    this.affectRotation = true;
    this._scaleOrRotationChange();
  }
  _scaleOrRotationChange() {
    this.affectScaleOrRotation = true;
    this.matrixChange();
  }
  matrixChange() {
    this.matrixChanged = true;
    this.localBoxChanged || this.localBoxChange();
  }
  surfaceChange() {
    this.surfaceChanged = true;
  }
  opacityChange() {
    this.opacityChanged = true;
    this.surfaceChanged || this.surfaceChange();
  }
  childrenSortChange() {
    if (!this.childrenSortChanged) {
      this.childrenSortChanged = true;
      this.leaf.forceUpdate("surface");
    }
  }
  destroy() {
  }
}
var empty = {};
var LeafEventer = {
  on(type, listener, options) {
    let capture, once;
    if (options) {
      if (typeof options === "boolean") {
        capture = options;
      } else {
        capture = options.capture;
        once = options.once;
      }
    }
    let events;
    const map = __getListenerMap(this, capture, true);
    const typeList = typeof type === "string" ? type.split(" ") : type;
    const item = once ? { listener, once } : { listener };
    typeList.forEach((type2) => {
      if (type2) {
        events = map[type2];
        if (events) {
          if (events.findIndex((item2) => item2.listener === listener) === -1)
            events.push(item);
        } else {
          map[type2] = [item];
        }
      }
    });
  },
  off(type, listener, options) {
    let capture;
    if (options)
      capture = typeof options === "boolean" ? options : options.capture;
    let events, index;
    const map = __getListenerMap(this, capture);
    const typeList = typeof type === "string" ? type.split(" ") : type;
    typeList.forEach((type2) => {
      if (type2) {
        events = map[type2];
        if (events) {
          index = events.findIndex((item) => item.listener === listener);
          if (index > -1)
            events.splice(index, 1);
          if (!events.length)
            delete map[type2];
        }
      }
    });
  },
  on_(type, listener, bind, options) {
    if (bind)
      listener = listener.bind(bind);
    this.on(type, listener, options);
    return { type, listener, options };
  },
  off_(id) {
    if (!id)
      return;
    const list2 = id instanceof Array ? id : [id];
    list2.forEach((item) => this.off(item.type, item.listener, item.options));
    list2.length = 0;
  },
  once(type, listener, capture) {
    this.on(type, listener, { once: true, capture });
  },
  emit(type, event, capture) {
    if (!event && EventCreator.has(type))
      event = EventCreator.get(type, { type, target: this, current: this });
    const map = __getListenerMap(this, capture);
    const list2 = map[type];
    if (list2) {
      let item;
      for (let i = 0, len = list2.length;i < len; i++) {
        item = list2[i];
        item.listener(event);
        if (item.once) {
          this.off(type, item.listener, capture);
          i--, len--;
        }
        if (event && event.isStopNow)
          break;
      }
    }
  },
  emitEvent(event, capture) {
    event.current = this;
    this.emit(event.type, event, capture);
  },
  hasEvent(type, capture) {
    const { __bubbleMap: b, __captureMap: c2 } = this;
    if (capture === undefined) {
      return !!(c2 && c2[type] || b && b[type]);
    } else {
      return !!(capture ? c2 && c2[type] : b && b[type]);
    }
  }
};
var LeafDataProxy = {
  __setAttr(name, newValue) {
    if (this.leafer && this.leafer.created) {
      const oldValue = this.__.__getInput(name);
      if (typeof newValue === "object" || oldValue !== newValue) {
        this.__[name] = newValue;
        if (this.proxyData)
          this.setProxyAttr(name, newValue);
        const { CHANGE } = PropertyEvent;
        const event = new PropertyEvent(CHANGE, this, name, oldValue, newValue);
        if (this.hasEvent(CHANGE) && !this.isLeafer)
          this.emitEvent(event);
        this.leafer.emitEvent(event);
      }
    } else {
      this.__[name] = newValue;
      if (this.proxyData)
        this.setProxyAttr(name, newValue);
    }
  },
  __getAttr(name) {
    if (this.proxyData)
      return this.getProxyAttr(name);
    return this.__.__get(name);
  },
  setProxyAttr(name, newValue) {
    if (this.proxyData[name] !== newValue)
      this.proxyData[name] = newValue;
  },
  getProxyAttr(name) {
    return this.proxyData[name];
  }
};
var { sin, cos } = Math;
var defaultWorld = Object.assign(Object.assign({}, MatrixHelper.defaultMatrix), { scaleX: 1, scaleY: 1, rotation: 0, skewX: 0, skewY: 0 });
var defaultCenter = { x: 0.5, y: 0.5 };
var LeafMatrix = {
  __updateWorldMatrix() {
    const pw = this.parent ? this.parent.__world : defaultWorld;
    const r = this.__local;
    const w = this.__world;
    if (this.__layout.matrixChanged)
      this.__updateLocalMatrix();
    if (this.__layout.affectScaleOrRotation) {
      w.a = r.a * pw.a + r.b * pw.c;
      w.b = r.a * pw.b + r.b * pw.d;
      w.c = r.c * pw.a + r.d * pw.c;
      w.d = r.c * pw.b + r.d * pw.d;
      w.e = r.e * pw.a + r.f * pw.c + pw.e;
      w.f = r.e * pw.b + r.f * pw.d + pw.f;
      const data = this.__;
      w.scaleX = pw.scaleX * data.scaleX;
      w.scaleY = pw.scaleY * data.scaleY;
      w.rotation = pw.rotation + data.rotation;
      w.skewX = pw.skewX + data.skewX;
      w.skewY = pw.skewY + data.skewY;
    } else {
      w.a = pw.a;
      w.b = pw.b;
      w.c = pw.c;
      w.d = pw.d;
      w.e = r.e * pw.a + r.f * pw.c + pw.e;
      w.f = r.e * pw.b + r.f * pw.d + pw.f;
      w.scaleX = pw.scaleX;
      w.scaleY = pw.scaleY;
      w.rotation = pw.rotation;
      w.skewX = pw.skewX;
      w.skewY = pw.skewY;
    }
  },
  __updateLocalMatrix() {
    const r = this.__local;
    const layout = this.__layout;
    if (layout.affectScaleOrRotation) {
      const { scaleX, scaleY } = this.__;
      if (layout.affectRotation) {
        if (layout.scaleChanged || layout.rotationChanged) {
          let { rotation, skewX, skewY } = this.__;
          if (rotation || skewX || skewY) {
            rotation *= OneRadian;
            if (skewX)
              skewX *= OneRadian;
            if (skewY)
              skewY *= OneRadian;
            r.a = scaleX * cos(rotation + skewY);
            r.b = scaleX * sin(rotation + skewY);
            r.c = scaleY * -sin(rotation - skewX);
            r.d = scaleY * cos(rotation - skewX);
          } else {
            r.a = scaleX;
            r.b = 0;
            r.c = 0;
            r.d = scaleY;
            layout.affectRotation = false;
          }
          layout.scaleChanged = false;
          layout.rotationChanged = false;
        }
      } else {
        if (layout.scaleChanged) {
          r.a = scaleX;
          r.d = scaleY;
          layout.scaleChanged = false;
        }
      }
    }
    const { x, y, around } = this.__;
    r.e = x;
    r.f = y;
    if (around) {
      const { width, height } = this.__;
      if (width && height) {
        const origin = around === "center" ? defaultCenter : around;
        const offsetX = width * origin.x, offsetY = height * origin.y;
        r.e -= offsetX * r.a + offsetY * r.c;
        r.f -= offsetX * r.b + offsetY * r.d;
      }
    }
    this.__layout.matrixChanged = false;
  }
};
var { toOuterOf, copyAndSpread } = BoundsHelper;
var LeafBounds = {
  __updateWorldBounds() {
    var _a;
    if (this.__layout.boundsChanged) {
      let resize;
      const layout = this.__layout;
      if (layout.boxChanged) {
        this.__updatePath();
        this.__updateRenderPath();
        this.__updateBoxBounds();
        layout.boxChanged = false;
        resize = true;
      }
      if (layout.localBoxChanged) {
        this.__updateLocalBoxBounds();
        layout.localBoxChanged = false;
        if (layout.strokeSpread)
          layout.strokeChanged = true;
        if (layout.renderSpread)
          layout.renderChanged = true;
        (_a = this.parent) === null || _a === undefined || _a.__layout.boxChange();
      }
      if (layout.strokeChanged) {
        layout.strokeSpread = this.__updateStrokeSpread();
        if (layout.strokeSpread) {
          if (layout.strokeBounds === layout.boxBounds) {
            layout.spreadStroke();
          }
          this.__updateStrokeBounds();
          this.__updateLocalStrokeBounds();
        } else {
          layout.spreadStrokeCancel();
        }
        layout.strokeChanged = false;
        if (layout.renderSpread)
          layout.renderChanged = true;
        if (this.parent)
          this.parent.__layout.strokeChange();
        resize || (resize = true);
      }
      if (layout.renderChanged) {
        layout.renderSpread = this.__updateRenderSpread();
        if (layout.renderSpread) {
          if (layout.renderBounds === layout.boxBounds || layout.renderBounds === layout.strokeBounds) {
            layout.spreadRender();
          }
          this.__updateRenderBounds();
          this.__updateLocalRenderBounds();
        } else {
          layout.spreadRenderCancel();
        }
        layout.renderChanged = false;
        if (this.parent)
          this.parent.__layout.renderChange();
      }
      layout.boundsChanged = false;
      toOuterOf(this.__layout.renderBounds, this.__world, this.__world);
      if (resize)
        this.__onUpdateSize();
    } else {
      toOuterOf(this.__layout.renderBounds, this.__world, this.__world);
    }
  },
  __updateLocalBoxBounds() {
    toOuterOf(this.__layout.boxBounds, this.__local, this.__local);
  },
  __updateLocalStrokeBounds() {
    toOuterOf(this.__layout.strokeBounds, this.__local, this.__layout.localStrokeBounds);
  },
  __updateLocalRenderBounds() {
    toOuterOf(this.__layout.renderBounds, this.__local, this.__layout.localRenderBounds);
  },
  __updateBoxBounds() {
    const b = this.__layout.boxBounds;
    const { width, height } = this.__;
    b.x = 0;
    b.y = 0;
    b.width = width;
    b.height = height;
  },
  __updateNaturalSize() {
    const { __: data, __layout: layout } = this;
    data.__naturalWidth = layout.boxBounds.width;
    data.__naturalHeight = layout.boxBounds.height;
    if (this.around) {
      layout.matrixChanged = true;
      this.__updateWorldMatrix();
    }
  },
  __updateStrokeBounds() {
    copyAndSpread(this.__layout.strokeBounds, this.__layout.boxBounds, this.__layout.strokeSpread);
  },
  __updateRenderBounds() {
    copyAndSpread(this.__layout.renderBounds, this.__layout.strokeBounds, this.__layout.renderSpread);
  }
};
var { toInnerRadiusPointOf, copy: copy$1, setRadius } = PointHelper;
var inner = {};
var LeafHit = {
  __hitWorld(point2) {
    if (this.__layout.hitCanvasChanged || !this.__hitCanvas) {
      this.__updateHitCanvas();
      this.__layout.hitCanvasChanged = false;
    }
    if (this.__.hitRadius) {
      copy$1(inner, point2), point2 = inner;
      setRadius(point2, this.__.hitRadius);
    }
    toInnerRadiusPointOf(point2, this.__world, inner);
    if (this.__.hitBox) {
      if (BoundsHelper.hitRadiusPoint(this.__layout.boxBounds, inner))
        return true;
    }
    return this.__hit(inner);
  },
  __drawHitPath(canvas) {
    this.__drawRenderPath(canvas);
  }
};
var LeafRender = {
  __render(canvas, options) {
    if (this.__worldOpacity) {
      canvas.setWorld(this.__world, options.matrix);
      canvas.opacity = this.__worldOpacity;
      if (this.__.__single) {
        const tempCanvas = canvas.getSameCanvas(true);
        this.__draw(tempCanvas, options);
        const blendMode = this.__.isEraser ? "destination-out" : this.__.blendMode;
        if (this.__hasMirror || options.matrix) {
          canvas.copyWorldByReset(tempCanvas, null, null, blendMode);
        } else {
          canvas.copyWorldToInner(tempCanvas, this.__world, this.__layout.renderBounds, blendMode);
        }
        tempCanvas.recycle();
      } else {
        this.__draw(canvas, options);
      }
    }
  },
  __updateWorldOpacity() {
    this.__worldOpacity = this.__.visible ? this.parent ? this.parent.__worldOpacity * this.__.opacity : this.__.opacity : 0;
    if (this.__layout.opacityChanged)
      this.__layout.opacityChanged = false;
  }
};
var LeafMask = {
  __updateEraser(value) {
    this.__hasEraser = value ? true : this.children.some((item) => item.__.isEraser);
  },
  __updateMask(value) {
    this.__hasMask = value ? true : this.children.some((item) => item.__.isMask);
  },
  __renderMask(canvas, content, mask, recycle) {
    content.opacity = 1;
    content.resetTransform();
    content.useMask(mask);
    canvas.opacity = this.__worldOpacity;
    canvas.resetTransform();
    canvas.copyWorld(content);
    if (recycle) {
      content.recycle();
      mask.recycle();
    } else {
      content.clear();
      mask.clear();
    }
  },
  __removeMask(child) {
    if (child) {
      child.isMask = false;
      this.remove(child);
    } else {
      const { children } = this;
      for (let i = 0, len = children.length;i < len; i++) {
        child = children[i];
        if (child.isMask) {
          this.__removeMask(child);
          len--, i--;
        }
      }
    }
  }
};
var BranchRender = {
  __updateChange() {
    const { __layout: layout } = this;
    if (layout.childrenSortChanged) {
      this.__updateSortChildren();
      layout.childrenSortChanged = false;
    }
    this.__.__checkSingle();
  },
  __render(canvas, options) {
    if (this.__worldOpacity) {
      if (this.__.__single) {
        canvas.resetTransform();
        const tempCanvas = canvas.getSameCanvas();
        this.__renderBranch(tempCanvas, options);
        canvas.opacity = this.__worldOpacity;
        const blendMode = this.__.isEraser ? "destination-out" : this.__.blendMode;
        if (this.__hasMirror || options.matrix) {
          canvas.copyWorld(tempCanvas, null, null, blendMode);
        } else {
          canvas.copyWorld(tempCanvas, this.__world, this.__world, blendMode);
        }
        tempCanvas.recycle();
      } else {
        this.__renderBranch(canvas, options);
      }
    }
  },
  __renderBranch(canvas, options) {
    let child;
    const { children } = this;
    if (this.__hasMask && children.length > 1) {
      let mask;
      const maskCanvas = canvas.getSameCanvas();
      const contentCanvas = canvas.getSameCanvas();
      for (let i = 0, len = children.length;i < len; i++) {
        child = children[i];
        if (child.isMask) {
          if (mask) {
            this.__renderMask(canvas, contentCanvas, maskCanvas);
          } else {
            mask = true;
          }
          child.__render(maskCanvas, options);
          continue;
        }
        child.__render(mask ? contentCanvas : canvas, options);
      }
      this.__renderMask(canvas, contentCanvas, maskCanvas, true);
    } else {
      const { bounds, hideBounds } = options;
      for (let i = 0, len = children.length;i < len; i++) {
        child = children[i];
        if (bounds && !bounds.hit(child.__world, options.matrix))
          continue;
        if (hideBounds && hideBounds.includes(child.__world, options.matrix))
          continue;
        child.__render(canvas, options);
      }
    }
  }
};
var { LEAF, create } = IncrementId;
var { toInnerPoint, toOuterPoint } = MatrixHelper;
var { tempToOuterOf, copy } = PointHelper;
var { moveLocal, zoomOfLocal, rotateOfLocal, skewOfLocal } = LeafHelper;
var Leaf = class Leaf2 {
  get tag() {
    return this.__tag;
  }
  set tag(_value) {
  }
  get __tag() {
    return "Leaf";
  }
  get innerName() {
    return this.__.name || this.tag + this.innerId;
  }
  get __DataProcessor() {
    return LeafData;
  }
  get __LayoutProcessor() {
    return LeafLayout;
  }
  get worldTransform() {
    return this.__layout.getTransform("world");
  }
  get localTransform() {
    return this.__layout.getTransform("local");
  }
  get boxBounds() {
    return this.getBounds("box", "inner");
  }
  get worldBoxBounds() {
    return this.getBounds("box");
  }
  get worldStrokeBounds() {
    return this.getBounds("stroke");
  }
  get worldRenderBounds() {
    return this.getBounds("render");
  }
  get worldOpacity() {
    this.__layout.checkUpdate();
    return this.__worldOpacity;
  }
  get resizeable() {
    return true;
  }
  get __hasMirror() {
    return this.__world.scaleX < 0 || this.__world.scaleY < 0;
  }
  get __onlyHitMask() {
    return this.__hasMask && !this.__.hitChildren;
  }
  get __ignoreHitWorld() {
    return (this.__hasMask || this.__hasEraser) && this.__.hitChildren;
  }
  constructor(data) {
    this.innerId = create(LEAF);
    this.reset(data);
  }
  reset(data) {
    this.__world = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, x: 0, y: 0, width: 0, height: 0, scaleX: 1, scaleY: 1, rotation: 0, skewX: 0, skewY: 0 };
    this.__local = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, x: 0, y: 0, width: 0, height: 0 };
    this.__worldOpacity = 1;
    this.__ = new this.__DataProcessor(this);
    this.__layout = new this.__LayoutProcessor(this);
    if (this.__level)
      this.resetCustom();
    if (data) {
      if (data.children) {
        this.set(data);
      } else {
        Object.assign(this, data);
      }
    }
  }
  resetCustom() {
    this.__hasMask = this.__hasEraser = null;
    this.forceUpdate();
  }
  waitParent(item) {
    this.parent ? item() : this.__parentWait ? this.__parentWait.push(item) : this.__parentWait = [item];
  }
  waitLeafer(item) {
    this.leafer ? item() : this.__leaferWait ? this.__leaferWait.push(item) : this.__leaferWait = [item];
  }
  nextRender(item) {
    this.leafer ? this.leafer.nextRender(item) : this.waitLeafer(() => this.leafer.nextRender(item));
  }
  __bindLeafer(leafer) {
    if (this.isLeafer) {
      if (leafer !== null)
        leafer = this;
    }
    if (this.leafer && !leafer)
      this.leafer.leafs--;
    this.leafer = leafer;
    if (leafer) {
      leafer.leafs++;
      this.__level = this.parent ? this.parent.__level + 1 : 1;
      if (this.__leaferWait)
        WaitHelper.run(this.__leaferWait);
    }
    if (this.isBranch) {
      const { children } = this;
      for (let i = 0, len = children.length;i < len; i++) {
        children[i].__bindLeafer(leafer);
      }
    }
  }
  set(_data) {
  }
  get(_options) {
    return;
  }
  toJSON() {
    return this.__.__getInputData();
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  __setAttr(_attrName, _newValue) {
  }
  __getAttr(_attrName) {
    return;
  }
  setProxyAttr(_attrName, _newValue) {
  }
  getProxyAttr(_attrName) {
    return;
  }
  find(_condition) {
    return;
  }
  findOne(_condition) {
    return;
  }
  forceUpdate(attrName) {
    if (attrName === undefined)
      attrName = "width";
    else if (attrName === "surface")
      attrName = "blendMode";
    const value = this.__.__getInput(attrName);
    this.__[attrName] = value === undefined ? null : undefined;
    this[attrName] = value;
  }
  __updateWorldMatrix() {
  }
  __updateLocalMatrix() {
  }
  __updateWorldBounds() {
  }
  __updateLocalBoxBounds() {
  }
  __updateLocalStrokeBounds() {
  }
  __updateLocalRenderBounds() {
  }
  __updateBoxBounds() {
  }
  __updateStrokeBounds() {
  }
  __updateRenderBounds() {
  }
  __updateNaturalSize() {
  }
  __updateStrokeSpread() {
    return 0;
  }
  __updateRenderSpread() {
    return 0;
  }
  __onUpdateSize() {
  }
  __updateEraser(_value) {
  }
  __updateMask(_value) {
  }
  __renderMask(_canvas, _content, _mask, _recycle) {
  }
  __removeMask(_child) {
  }
  getWorld(attrName) {
    this.__layout.checkUpdate();
    if (attrName === "x")
      return this.__world.e;
    if (attrName === "y")
      return this.__world.f;
    return this.__world[attrName];
  }
  getBounds(type, locationType = "world") {
    return this.__layout.getBounds(type, locationType);
  }
  worldToLocal(world, to, distance, relative) {
    if (this.parent) {
      this.parent.worldToInner(world, to, distance, relative);
    } else {
      if (to)
        copy(to, world);
    }
  }
  localToWorld(local, to, distance, relative) {
    if (this.parent) {
      this.parent.innerToWorld(local, to, distance, relative);
    } else {
      if (to)
        copy(to, local);
    }
  }
  worldToInner(world, to, distance, relative) {
    if (relative) {
      relative.innerToWorld(world, to, distance);
      world = to ? to : world;
    }
    toInnerPoint(this.worldTransform, world, to, distance);
  }
  innerToWorld(inner2, to, distance, relative) {
    toOuterPoint(this.worldTransform, inner2, to, distance);
    if (relative)
      relative.worldToInner(to ? to : inner2, null, distance);
  }
  getInnerPoint(world, relative, distance, change) {
    const point2 = change ? world : {};
    this.worldToInner(world, point2, distance, relative);
    return point2;
  }
  getInnerPointByLocal(local, _relative, distance, change) {
    return this.getInnerPoint(local, this.parent, distance, change);
  }
  getLocalPoint(world, relative, distance, change) {
    const point2 = change ? world : {};
    this.worldToLocal(world, point2, distance, relative);
    return point2;
  }
  getLocalPointByInner(inner2, _relative, distance, change) {
    return this.getWorldPoint(inner2, this.parent, distance, change);
  }
  getWorldPoint(inner2, relative, distance, change) {
    const point2 = change ? inner2 : {};
    this.innerToWorld(inner2, point2, distance, relative);
    return point2;
  }
  getWorldPointByLocal(local, relative, distance, change) {
    const point2 = change ? local : {};
    this.localToWorld(local, point2, distance, relative);
    return point2;
  }
  move(x, y) {
    moveLocal(this, x, y);
  }
  scaleOf(origin, x, y) {
    zoomOfLocal(this, tempToOuterOf(origin, this.localTransform), x, y);
  }
  rotateOf(origin, angle) {
    rotateOfLocal(this, tempToOuterOf(origin, this.localTransform), angle);
  }
  skewOf(origin, x, y) {
    skewOfLocal(this, tempToOuterOf(origin, this.localTransform), x, y);
  }
  __hitWorld(_point) {
    return true;
  }
  __hit(_local) {
    return true;
  }
  __drawHitPath(_canvas) {
  }
  __updateHitCanvas() {
  }
  __render(_canvas, _options) {
  }
  __drawFast(_canvas, _options) {
  }
  __draw(_canvas, _options) {
  }
  __renderShape(_canvas, _options) {
  }
  __updateWorldOpacity() {
  }
  __updateChange() {
  }
  __drawPath(_canvas) {
  }
  __drawRenderPath(_canvas) {
  }
  __updatePath() {
  }
  __updateRenderPath() {
  }
  __updateSortChildren() {
  }
  add(_child, _index) {
  }
  remove(_child, destroy) {
    if (this.parent)
      this.parent.remove(this, destroy);
  }
  on(_type, _listener, _options) {
  }
  off(_type, _listener, _options) {
  }
  on_(_type, _listener, _bind, _options) {
    return;
  }
  off_(_id) {
  }
  once(_type, _listener, _capture) {
  }
  emit(_type, _event, _capture) {
  }
  emitEvent(_event, _capture) {
  }
  hasEvent(_type, _capture) {
    return false;
  }
  destroy() {
    if (!this.destroyed) {
      if (this.parent)
        this.remove();
      if (this.children)
        this.removeAll(true);
      this.__.destroy();
      this.__layout.destroy();
      this.__captureMap = this.__bubbleMap = this.__parentWait = this.__leaferWait = null;
      this.destroyed = true;
    }
  }
};
Leaf = __decorate([
  useModule(LeafDataProxy),
  useModule(LeafMatrix),
  useModule(LeafBounds),
  useModule(LeafHit),
  useModule(LeafEventer),
  useModule(LeafRender)
], Leaf);
var { setByListWithHandle } = BoundsHelper;
var { sort } = BranchHelper;
var { localBoxBounds, localEventBounds, localRenderBounds, maskLocalBoxBounds, maskLocalEventBounds, maskLocalRenderBounds } = LeafBoundsHelper;
var Branch = class Branch2 extends Leaf {
  constructor() {
    super();
    this.isBranch = true;
    this.children = [];
  }
  __updateStrokeSpread() {
    const { children } = this;
    for (let i = 0, len = children.length;i < len; i++) {
      if (children[i].__layout.strokeSpread)
        return 1;
    }
    return 0;
  }
  __updateRenderSpread() {
    const { children } = this;
    for (let i = 0, len = children.length;i < len; i++) {
      if (children[i].__layout.renderSpread)
        return 1;
    }
    return 0;
  }
  __updateBoxBounds() {
    setByListWithHandle(this.__layout.boxBounds, this.children, this.__hasMask ? maskLocalBoxBounds : localBoxBounds);
  }
  __updateStrokeBounds() {
    setByListWithHandle(this.__layout.strokeBounds, this.children, this.__hasMask ? maskLocalEventBounds : localEventBounds);
  }
  __updateRenderBounds() {
    setByListWithHandle(this.__layout.renderBounds, this.children, this.__hasMask ? maskLocalRenderBounds : localRenderBounds);
  }
  __updateSortChildren() {
    let affectSort;
    const { children } = this;
    if (children.length > 1) {
      for (let i = 0, len = children.length;i < len; i++) {
        children[i].__tempNumber = i;
        if (children[i].__.zIndex)
          affectSort = true;
      }
      children.sort(sort);
      this.__layout.affectChildrenSort = affectSort;
    }
  }
  add(child, index) {
    if (child.parent)
      child.parent.remove(child);
    child.parent = this;
    index === undefined ? this.children.push(child) : this.children.splice(index, 0, child);
    if (child.isBranch)
      this.__.__childBranchNumber = (this.__.__childBranchNumber || 0) + 1;
    child.__layout.boundsChanged || child.__layout.matrixChange();
    if (child.__parentWait)
      WaitHelper.run(child.__parentWait);
    if (this.leafer) {
      child.__bindLeafer(this.leafer);
      if (this.leafer.created)
        this.__emitChildEvent(ChildEvent.ADD, child);
    }
    this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
  }
  addMany(...children) {
    children.forEach((child) => this.add(child));
  }
  remove(child, destroy) {
    if (child) {
      const index = this.children.indexOf(child);
      if (index > -1) {
        this.children.splice(index, 1);
        if (child.isBranch)
          this.__.__childBranchNumber = (this.__.__childBranchNumber || 1) - 1;
        this.__preRemove();
        this.__realRemoveChild(child);
        if (destroy)
          child.destroy();
      }
    } else if (child === undefined) {
      super.remove(null, destroy);
    }
  }
  removeAll(destroy) {
    const { children } = this;
    if (children.length) {
      this.children = [];
      this.__preRemove();
      this.__.__childBranchNumber = 0;
      children.forEach((child) => {
        this.__realRemoveChild(child);
        if (destroy)
          child.destroy();
      });
    }
  }
  __preRemove() {
    if (this.__hasMask)
      this.__updateMask();
    if (this.__hasEraser)
      this.__updateEraser();
    this.__layout.boxChange();
    this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
  }
  __realRemoveChild(child) {
    child.parent = null;
    if (this.leafer) {
      child.__bindLeafer(null);
      if (this.leafer.created) {
        this.__emitChildEvent(ChildEvent.REMOVE, child);
        if (this.leafer.hitCanvasManager)
          this.leafer.hitCanvasManager.clear();
      }
    }
  }
  __emitChildEvent(type, child) {
    const event = new ChildEvent(type, child, this);
    if (child.hasEvent(type))
      child.emitEvent(event);
    if (this.hasEvent(type) && !this.isLeafer)
      this.emitEvent(event);
    this.leafer.emitEvent(event);
  }
};
Branch = __decorate([
  useModule(BranchRender),
  useModule(LeafMask)
], Branch);
var debug = Debug.get("plugin");
var PluginManager = {
  power: {},
  list: [],
  onLeafer(leafer) {
    PluginManager.list.forEach((plugin) => {
      if (plugin.onLeafer)
        plugin.onLeafer(leafer);
    });
  }
};
// node_modules/@leafer-ui/core/dist/core.esm.js
var __decorate2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c2 < 3 ? d(r) : c2 > 3 ? d(target, key, r) : d(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
};
var draw = function(leafer) {
  const { config } = leafer;
  config.move.dragOut = false;
};
var design = function(leafer) {
  if (leafer.isApp)
    return;
  leafer.__eventIds.push(leafer.on_(MoveEvent.BEFORE_MOVE, (e) => {
    LeafHelper.moveWorld(leafer.zoomLayer, e.moveX, e.moveY);
  }), leafer.on_(ZoomEvent.BEFORE_ZOOM, (e) => {
    const { scaleX } = leafer.zoomLayer.__, { min: min2, max: max2 } = leafer.config.zoom;
    let { scale } = e;
    if (scale * Math.abs(scaleX) < min2)
      scale = min2 / scaleX;
    else if (scale * Math.abs(scaleX) > max2)
      scale = max2 / scaleX;
    if (scale !== 1)
      LeafHelper.zoomOfWorld(leafer.zoomLayer, e, scale);
  }));
};
var effectType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        if (value)
          this.__.__useEffect = true;
        this.__layout.renderChanged || this.__layout.renderChange();
      }
    });
  };
};
var resizeType = function(defaultValue) {
  return (target, key) => {
    defineLeafAttr(target, key, defaultValue, {
      set(value) {
        this.__setAttr(key, value);
        this.__layout.boxChanged || this.__layout.boxChange();
        this.__updateSize();
      }
    });
  };
};
var debug$22 = Debug.get("LeaferTypeCreator");
var LeaferTypeCreator = {
  list: {},
  register(name, fn) {
    if (list2[name]) {
      debug$22.repeat(name);
    } else {
      list2[name] = fn;
    }
  },
  run(name, leafer) {
    const fn = LeaferTypeCreator.list[name];
    if (fn) {
      fn(leafer);
    } else {
      debug$22.error("no", name);
    }
  }
};
var { list: list2 } = LeaferTypeCreator;
LeaferTypeCreator.register("draw", draw);
LeaferTypeCreator.register("user", draw);
LeaferTypeCreator.register("design", design);
var Effect = {};
var Paint = {};
var TextConvert = {};
var ColorConvert = {};
var Export = {};
var emptyPaint = {};
var debug$12 = Debug.get("UIData");

class UIData extends LeafData {
  setVisible(value) {
    if (this.__leaf.leafer)
      this.__leaf.leafer.watcher.hasVisible = true;
    this._visible = value;
  }
  setWidth(value) {
    if (value < 0) {
      this._width = -value;
      this.__leaf.scaleX *= -1;
      debug$12.warn("width < 0, instead -scaleX ", this);
    } else {
      this._width = value;
    }
  }
  setHeight(value) {
    if (value < 0) {
      this._height = -value;
      this.__leaf.scaleY *= -1;
      debug$12.warn("height < 0, instead -scaleY", this);
    } else {
      this._height = value;
    }
  }
  setFill(value) {
    if (this.__naturalWidth)
      this.__naturalWidth = this.__naturalHeight = undefined;
    if (typeof value === "string" || !value) {
      if (this.__isFills) {
        this.__removeInput("fill");
        Paint.recycleImage("fill", this);
        this.__isFills = false;
        if (this.__pixelFill)
          this.__pixelFill = false;
      }
      this._fill = value;
    } else if (typeof value === "object") {
      this.__setInput("fill", value);
      this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
      this.__isFills = true;
      this._fill || (this._fill = emptyPaint);
    }
  }
  setStroke(value) {
    if (typeof value === "string" || !value) {
      if (this.__isStrokes) {
        this.__removeInput("stroke");
        Paint.recycleImage("stroke", this);
        this.__isStrokes = false;
        if (this.__pixelStroke)
          this.__pixelStroke = false;
      }
      this._stroke = value;
    } else if (typeof value === "object") {
      this.__setInput("stroke", value);
      this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
      this.__isStrokes = true;
      this._stroke || (this._stroke = emptyPaint);
    }
  }
  setShadow(value) {
    this.__setInput("shadow", value);
    if (value instanceof Array) {
      if (value.some((item) => item.visible === false))
        value = value.filter((item) => item.visible !== false);
      this._shadow = value.length ? value : null;
    } else if (value) {
      this._shadow = value.visible === false ? null : [value];
    } else {
      this._shadow = null;
    }
  }
  setInnerShadow(value) {
    this.__setInput("innerShadow", value);
    if (value instanceof Array) {
      if (value.some((item) => item.visible === false))
        value = value.filter((item) => item.visible !== false);
      this._innerShadow = value.length ? value : null;
    } else if (value) {
      this._innerShadow = value.visible === false ? null : [value];
    } else {
      this._innerShadow = null;
    }
  }
}
var UnitConvert = {
  number(value, percentRefer) {
    if (typeof value === "object")
      return value.type === "percent" ? value.value / 100 * percentRefer : value.value;
    return value;
  }
};

class GroupData extends UIData {
}

class BoxData extends GroupData {
  get __boxStroke() {
    return true;
  }
}

class LeaferData extends GroupData {
}

class FrameData extends BoxData {
}

class LineData extends UIData {
}

class RectData extends UIData {
  get __boxStroke() {
    return true;
  }
}

class EllipseData extends UIData {
  get __boxStroke() {
    return true;
  }
}

class PolygonData extends UIData {
}

class StarData extends UIData {
}
var { parse } = PathConvert;

class PathData extends UIData {
  setPath(value) {
    if (typeof value === "string") {
      this.__setInput("path", value);
      this._path = parse(value);
    } else {
      if (this.__input)
        this.__removeInput("path");
      this._path = value;
    }
  }
}

class PenData extends GroupData {
}
var fontWeightMap = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  black: 900
};

class TextData extends UIData {
  setFontWeight(value) {
    if (typeof value === "string") {
      this.__setInput("fontWeight", value);
      this._fontWeight = fontWeightMap[value] || 400;
    } else {
      if (this.__input)
        this.__removeInput("fontWeight");
      this._fontWeight = value;
    }
  }
}

class ImageData extends RectData {
}
var UIBounds = {
  __updateStrokeSpread() {
    let width = 0, boxWidth = 0;
    const { stroke, hitStroke, strokeAlign, strokeWidth } = this.__;
    if ((stroke || hitStroke === "all") && strokeWidth && strokeAlign !== "inside") {
      boxWidth = width = strokeAlign === "center" ? strokeWidth / 2 : strokeWidth;
      if (!this.__.__boxStroke) {
        const { miterLimit, strokeCap } = this.__;
        const miterLimitAddWidth = this.__tag !== "Line" ? 1 / Math.sin(miterLimit * OneRadian / 2) * Math.sqrt(strokeWidth) - width : 0;
        const storkeCapAddWidth = strokeCap === "none" ? 0 : strokeWidth;
        width += Math.max(miterLimitAddWidth, storkeCapAddWidth);
      }
    }
    this.__layout.strokeBoxSpread = boxWidth;
    return width;
  },
  __updateRenderSpread() {
    let width = 0;
    const { shadow, innerShadow, blur, backgroundBlur } = this.__;
    if (shadow)
      shadow.forEach((item) => {
        width = Math.max(width, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread > 0 ? item.spread : 0) + item.blur * 1.5);
      });
    if (blur)
      width = Math.max(width, blur);
    let shapeWidth = width = Math.ceil(width);
    if (innerShadow)
      innerShadow.forEach((item) => {
        shapeWidth = Math.max(shapeWidth, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread < 0 ? -item.spread : 0) + item.blur * 1.5);
      });
    if (backgroundBlur)
      shapeWidth = Math.max(shapeWidth, backgroundBlur);
    this.__layout.renderShapeSpread = shapeWidth;
    return width;
  }
};
var UIHit = {
  __updateHitCanvas() {
    if (!this.__hitCanvas)
      this.__hitCanvas = this.leafer.hitCanvasManager.getPathType(this);
    const h2 = this.__hitCanvas;
    this.__drawHitPath(h2);
    h2.setStrokeOptions(this.__);
  },
  __hit(inner2) {
    const { __hitCanvas: h2 } = this;
    if (Platform.name === "miniapp")
      this.__drawHitPath(h2);
    const { fill, hitFill, windingRule } = this.__;
    const needHitFill = fill && hitFill === "path" || hitFill === "all";
    const isHitFill = h2.hitFill(inner2, windingRule);
    if (needHitFill && isHitFill)
      return true;
    const { stroke, hitStroke, strokeWidth, strokeAlign } = this.__;
    const needHitStroke = stroke && hitStroke === "path" || hitStroke === "all";
    const radiusWidth = inner2.radiusX * 2;
    let hitWidth = radiusWidth;
    if (needHitStroke) {
      switch (strokeAlign) {
        case "inside":
          hitWidth += strokeWidth * 2;
          if (!needHitFill && (isHitFill && h2.hitStroke(inner2, hitWidth)))
            return true;
          hitWidth = radiusWidth;
          break;
        case "center":
          hitWidth += strokeWidth;
          break;
        case "outside":
          hitWidth += strokeWidth * 2;
          if (!needHitFill) {
            if (!isHitFill && h2.hitStroke(inner2, hitWidth))
              return true;
            hitWidth = radiusWidth;
          }
          break;
      }
    }
    return hitWidth ? h2.hitStroke(inner2, hitWidth) : false;
  }
};
var UIRender = {
  __updateChange() {
    const data = this.__;
    if (data.__useEffect) {
      const { shadow, innerShadow, blur, backgroundBlur } = this.__;
      data.__useEffect = !!(shadow || innerShadow || blur || backgroundBlur);
    }
    data.__checkSingle();
    const complex = data.__isFills || data.__isStrokes || data.cornerRadius || data.__useEffect;
    if (complex) {
      data.__complex = true;
    } else {
      data.__complex && (data.__complex = false);
    }
  },
  __drawFast(canvas, options) {
    const { fill, stroke, __drawAfterFill } = this.__;
    this.__drawRenderPath(canvas);
    if (fill)
      Paint.fill(fill, this, canvas);
    if (__drawAfterFill)
      this.__drawAfterFill(canvas, options);
    if (stroke)
      Paint.stroke(stroke, this, canvas, options);
  },
  __draw(canvas, options) {
    if (this.__.__complex) {
      const { fill, stroke, __drawAfterFill } = this.__;
      this.__drawRenderPath(canvas);
      if (this.__.__useEffect) {
        const shape = Paint.shape(this, canvas, options);
        const { shadow, innerShadow } = this.__;
        if (shadow)
          Effect.shadow(this, canvas, shape, options);
        if (fill)
          this.__.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
        if (__drawAfterFill)
          this.__drawAfterFill(canvas, options);
        if (innerShadow)
          Effect.innerShadow(this, canvas, shape, options);
        if (stroke)
          this.__.__isStrokes ? Paint.strokes(stroke, this, canvas, options) : Paint.stroke(stroke, this, canvas, options);
        if (shape.worldCanvas)
          shape.worldCanvas.recycle();
        shape.canvas.recycle();
      } else {
        if (fill)
          this.__.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
        if (__drawAfterFill)
          this.__drawAfterFill(canvas, options);
        if (stroke)
          this.__.__isStrokes ? Paint.strokes(stroke, this, canvas, options) : Paint.stroke(stroke, this, canvas, options);
      }
    } else {
      this.__drawFast(canvas, options);
    }
  },
  __renderShape(canvas, renderOptions) {
    if (!this.__worldOpacity)
      return;
    canvas.setWorld(this.__world, renderOptions.matrix);
    const { fill, stroke } = this.__;
    this.__drawRenderPath(canvas);
    if (fill)
      this.__.__pixelFill ? Paint.fills(fill, this, canvas) : Paint.fill("#000000", this, canvas);
    if (stroke)
      this.__.__pixelStroke ? Paint.strokes(stroke, this, canvas, renderOptions) : Paint.stroke("#000000", this, canvas, renderOptions);
  }
};
var RectRender = {
  __drawFast(canvas, options) {
    const { width, height, fill, stroke, __drawAfterFill } = this.__;
    if (fill) {
      canvas.fillStyle = fill;
      canvas.fillRect(0, 0, width, height);
    }
    if (__drawAfterFill)
      this.__drawAfterFill(canvas, options);
    if (stroke) {
      const { strokeAlign, strokeWidth } = this.__;
      canvas.setStroke(stroke, strokeWidth, this.__);
      const half = strokeWidth / 2;
      switch (strokeAlign) {
        case "center":
          canvas.strokeRect(0, 0, width, height);
          break;
        case "inside":
          canvas.strokeRect(half, half, width - strokeWidth, height - strokeWidth);
          break;
        case "outside":
          canvas.strokeRect(-half, -half, width + strokeWidth, height + strokeWidth);
          break;
      }
    }
  }
};
var UI_1;
var UI = UI_1 = class UI2 extends Leaf {
  set scale(value) {
    if (typeof value === "number") {
      this.scaleX = this.scaleY = value;
    } else {
      this.scaleX = value.x;
      this.scaleY = value.y;
    }
  }
  get scale() {
    const { scaleX, scaleY } = this;
    return scaleX !== scaleY ? { x: scaleX, y: scaleY } : scaleX;
  }
  reset(_data) {
  }
  set(data) {
    Object.assign(this, data);
  }
  get(options) {
    return this.__.__getInputData(options);
  }
  getProxyData() {
    return;
  }
  find(condition) {
    return this.leafer ? this.leafer.selector.getBy(condition, this) : [];
  }
  findOne(condition) {
    return this.leafer ? this.leafer.selector.getBy(condition, this, true) : null;
  }
  getPath(curve) {
    const path = this.__.path;
    if (!path)
      return [];
    return curve ? PathConvert.toCanvasData(path, true) : path;
  }
  getPathString(curve) {
    return PathConvert.stringify(this.getPath(curve));
  }
  __onUpdateSize() {
    if (this.__.__input) {
      const { fill, stroke } = this.__.__input;
      if (fill)
        Paint.compute("fill", this);
      if (stroke)
        Paint.compute("stroke", this);
    }
  }
  __updateRenderPath() {
    if (this.__.path) {
      const { __: data } = this;
      data.__pathForRender = data.cornerRadius ? PathCorner.smooth(data.path, data.cornerRadius, data.cornerSmoothing) : data.path;
    }
  }
  __drawRenderPath(canvas) {
    canvas.beginPath();
    this.__drawPathByData(canvas, this.__.__pathForRender);
  }
  __drawPath(canvas) {
    canvas.beginPath();
    this.__drawPathByData(canvas, this.__.path);
  }
  __drawPathByData(_drawer, _data) {
  }
  export(filename, options) {
    return Export.export(this, filename, options);
  }
  clone() {
    return UI_1.one(this.toJSON());
  }
  static one(data, x, y, width, height) {
    return UICreator.get(data.tag || this.prototype.__tag, data, x, y, width, height);
  }
  destroy() {
    this.fill = this.stroke = null;
    super.destroy();
  }
};
__decorate2([
  dataProcessor(UIData)
], UI.prototype, "__", undefined);
__decorate2([
  dataType("")
], UI.prototype, "id", undefined);
__decorate2([
  dataType("")
], UI.prototype, "name", undefined);
__decorate2([
  dataType("")
], UI.prototype, "className", undefined);
__decorate2([
  surfaceType("pass-through")
], UI.prototype, "blendMode", undefined);
__decorate2([
  opacityType(1)
], UI.prototype, "opacity", undefined);
__decorate2([
  opacityType(true)
], UI.prototype, "visible", undefined);
__decorate2([
  maskType(false)
], UI.prototype, "isMask", undefined);
__decorate2([
  eraserType(false)
], UI.prototype, "isEraser", undefined);
__decorate2([
  sortType(0)
], UI.prototype, "zIndex", undefined);
__decorate2([
  dataType()
], UI.prototype, "locked", undefined);
__decorate2([
  positionType(0)
], UI.prototype, "x", undefined);
__decorate2([
  positionType(0)
], UI.prototype, "y", undefined);
__decorate2([
  boundsType(100)
], UI.prototype, "width", undefined);
__decorate2([
  boundsType(100)
], UI.prototype, "height", undefined);
__decorate2([
  scaleType(1)
], UI.prototype, "scaleX", undefined);
__decorate2([
  scaleType(1)
], UI.prototype, "scaleY", undefined);
__decorate2([
  rotationType(0)
], UI.prototype, "rotation", undefined);
__decorate2([
  rotationType(0)
], UI.prototype, "skewX", undefined);
__decorate2([
  rotationType(0)
], UI.prototype, "skewY", undefined);
__decorate2([
  positionType()
], UI.prototype, "around", undefined);
__decorate2([
  dataType(false)
], UI.prototype, "draggable", undefined);
__decorate2([
  hitType(true)
], UI.prototype, "hittable", undefined);
__decorate2([
  hitType("path")
], UI.prototype, "hitFill", undefined);
__decorate2([
  strokeType("path")
], UI.prototype, "hitStroke", undefined);
__decorate2([
  hitType(false)
], UI.prototype, "hitBox", undefined);
__decorate2([
  hitType(true)
], UI.prototype, "hitChildren", undefined);
__decorate2([
  hitType(true)
], UI.prototype, "hitSelf", undefined);
__decorate2([
  hitType()
], UI.prototype, "hitRadius", undefined);
__decorate2([
  cursorType("")
], UI.prototype, "cursor", undefined);
__decorate2([
  surfaceType()
], UI.prototype, "fill", undefined);
__decorate2([
  strokeType()
], UI.prototype, "stroke", undefined);
__decorate2([
  strokeType("inside")
], UI.prototype, "strokeAlign", undefined);
__decorate2([
  strokeType(1)
], UI.prototype, "strokeWidth", undefined);
__decorate2([
  strokeType("none")
], UI.prototype, "strokeCap", undefined);
__decorate2([
  strokeType("miter")
], UI.prototype, "strokeJoin", undefined);
__decorate2([
  strokeType()
], UI.prototype, "dashPattern", undefined);
__decorate2([
  strokeType()
], UI.prototype, "dashOffset", undefined);
__decorate2([
  strokeType(10)
], UI.prototype, "miterLimit", undefined);
__decorate2([
  pathType()
], UI.prototype, "cornerRadius", undefined);
__decorate2([
  pathType()
], UI.prototype, "cornerSmoothing", undefined);
__decorate2([
  effectType()
], UI.prototype, "shadow", undefined);
__decorate2([
  effectType()
], UI.prototype, "innerShadow", undefined);
__decorate2([
  effectType()
], UI.prototype, "blur", undefined);
__decorate2([
  effectType()
], UI.prototype, "backgroundBlur", undefined);
__decorate2([
  effectType()
], UI.prototype, "grayscale", undefined);
__decorate2([
  rewrite(Leaf.prototype.reset)
], UI.prototype, "reset", null);
__decorate2([
  rewrite(PathDrawer.drawPathByData)
], UI.prototype, "__drawPathByData", null);
UI = UI_1 = __decorate2([
  useModule(UIBounds),
  useModule(UIHit),
  useModule(UIRender),
  rewriteAble()
], UI);
var Group = class Group2 extends UI {
  get __tag() {
    return "Group";
  }
  get resizeable() {
    return false;
  }
  set mask(child) {
    if (this.__hasMask)
      this.__removeMask();
    if (child) {
      child.isMask = true;
      this.addAt(child, 0);
    }
  }
  get mask() {
    return this.children.find((item) => item.isMask);
  }
  constructor(data) {
    super(data);
    this.__setBranch();
  }
  __setBranch() {
    this.isBranch = true;
    if (!this.children)
      this.children = [];
  }
  set(data) {
    if (data.children) {
      const { children } = data;
      delete data.children;
      if (!this.children) {
        this.__setBranch();
      } else {
        this.removeAll(true);
      }
      super.set(data);
      let child;
      children.forEach((childData) => {
        child = UICreator.get(childData.tag, childData);
        this.add(child);
      });
      data.children = children;
    } else {
      super.set(data);
    }
  }
  toJSON() {
    const data = super.toJSON();
    data.children = this.children.map((child) => child.toJSON());
    return data;
  }
  addAt(child, index) {
    this.add(child, index);
  }
  addAfter(child, after) {
    this.add(child, this.children.indexOf(after) + 1);
  }
  addBefore(child, before) {
    this.add(child, this.children.indexOf(before));
  }
  add(_child, _index) {
  }
  addMany(..._children) {
  }
  remove(_child, _destroy) {
  }
  removeAll(_destroy) {
  }
};
__decorate2([
  dataProcessor(GroupData)
], Group.prototype, "__", undefined);
Group = __decorate2([
  useModule(Branch),
  registerUI()
], Group);
var Rect = class Rect2 extends UI {
  get __tag() {
    return "Rect";
  }
  constructor(data) {
    super(data);
  }
  __drawPathByData(drawer, _data) {
    const { width, height, cornerRadius } = this.__;
    if (cornerRadius) {
      drawer.roundRect(0, 0, width, height, cornerRadius);
    } else {
      drawer.rect(0, 0, width, height);
    }
  }
};
__decorate2([
  dataProcessor(RectData)
], Rect.prototype, "__", undefined);
Rect = __decorate2([
  useModule(RectRender),
  registerUI()
], Rect);
var rect2 = Rect.prototype;
var group = Group.prototype;
var bounds = {};
var { copy: copy2, add: add2 } = BoundsHelper;
var Box = class Box2 extends Group {
  get __tag() {
    return "Box";
  }
  get resizeable() {
    return true;
  }
  constructor(data) {
    super(data);
    this.isBranchLeaf = true;
    this.__layout.renderChanged || this.__layout.renderChange();
  }
  __updateStrokeSpread() {
    return 0;
  }
  __updateRectRenderSpread() {
    return 0;
  }
  __updateRenderSpread() {
    let width = this.__updateRectRenderSpread() || super.__updateRenderSpread();
    this.__.__drawAfterFill = this.__.overflow === "hide";
    if (!width)
      width = this.__.__drawAfterFill ? 0 : 1;
    return width;
  }
  __updateBoxBounds() {
  }
  __updateStrokeBounds() {
  }
  __updateRenderBounds() {
    this.__updateRectRenderBounds();
    if (!this.__.__drawAfterFill) {
      const { renderBounds } = this.__layout;
      copy2(bounds, renderBounds);
      super.__updateRenderBounds();
      add2(renderBounds, bounds);
    }
  }
  __updateRectRenderBounds() {
  }
  __updateRectChange() {
  }
  __updateChange() {
    super.__updateChange();
    this.__updateRectChange();
  }
  __drawPathByData(_drawer, _data) {
  }
  __renderRect(_canvas, _options) {
  }
  __renderGroup(_canvas, _options) {
  }
  __render(canvas, options) {
    if (this.__.__drawAfterFill) {
      this.__renderRect(canvas, options);
    } else {
      this.__renderRect(canvas, options);
      this.__renderGroup(canvas, options);
    }
  }
  __drawAfterFill(canvas, options) {
    canvas.save();
    canvas.clip();
    this.__renderGroup(canvas, options);
    canvas.restore();
    if (this.__.stroke)
      this.__drawRenderPath(canvas);
  }
};
__decorate2([
  dataProcessor(BoxData)
], Box.prototype, "__", undefined);
__decorate2([
  affectRenderBoundsType("show")
], Box.prototype, "overflow", undefined);
__decorate2([
  rewrite(rect2.__updateStrokeSpread)
], Box.prototype, "__updateStrokeSpread", null);
__decorate2([
  rewrite(rect2.__updateRenderSpread)
], Box.prototype, "__updateRectRenderSpread", null);
__decorate2([
  rewrite(rect2.__updateBoxBounds)
], Box.prototype, "__updateBoxBounds", null);
__decorate2([
  rewrite(rect2.__updateStrokeBounds)
], Box.prototype, "__updateStrokeBounds", null);
__decorate2([
  rewrite(rect2.__updateRenderBounds)
], Box.prototype, "__updateRectRenderBounds", null);
__decorate2([
  rewrite(rect2.__updateChange)
], Box.prototype, "__updateRectChange", null);
__decorate2([
  rewrite(rect2.__drawPathByData)
], Box.prototype, "__drawPathByData", null);
__decorate2([
  rewrite(rect2.__render)
], Box.prototype, "__renderRect", null);
__decorate2([
  rewrite(group.__render)
], Box.prototype, "__renderGroup", null);
Box = __decorate2([
  rewriteAble(),
  registerUI()
], Box);
var Frame = class Frame2 extends Box {
  get __tag() {
    return "Frame";
  }
  constructor(data) {
    super(data);
    if (!this.__.fill)
      this.__.fill = "#FFFFFF";
  }
};
__decorate2([
  dataProcessor(FrameData)
], Frame.prototype, "__", undefined);
__decorate2([
  affectRenderBoundsType("hide")
], Frame.prototype, "overflow", undefined);
Frame = __decorate2([
  registerUI()
], Frame);
var { moveTo: moveTo$3, closePath: closePath$2, ellipse: ellipse2 } = PathCommandDataHelper;
var Ellipse = class Ellipse2 extends UI {
  get __tag() {
    return "Ellipse";
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const { width, height, innerRadius, startAngle, endAngle } = this.__;
    const rx = width / 2, ry = height / 2;
    const path = this.__.path = [];
    if (innerRadius) {
      if (startAngle || endAngle) {
        if (innerRadius < 1)
          ellipse2(path, rx, ry, rx * innerRadius, ry * innerRadius, 0, startAngle, endAngle, false);
        ellipse2(path, rx, ry, rx, ry, 0, endAngle, startAngle, true);
        if (innerRadius < 1)
          closePath$2(path);
      } else {
        if (innerRadius < 1) {
          ellipse2(path, rx, ry, rx * innerRadius, ry * innerRadius);
          moveTo$3(path, width, ry);
        }
        ellipse2(path, rx, ry, rx, ry, 0, 360, 0, true);
      }
      if (Platform.ellipseToCurve)
        this.__.path = PathConvert.toCanvasData(path, true);
    } else {
      if (startAngle || endAngle) {
        moveTo$3(path, rx, ry);
        ellipse2(path, rx, ry, rx, ry, 0, startAngle, endAngle, false);
        closePath$2(path);
      } else {
        ellipse2(path, rx, ry, rx, ry);
      }
    }
  }
};
__decorate2([
  dataProcessor(EllipseData)
], Ellipse.prototype, "__", undefined);
__decorate2([
  pathType(0)
], Ellipse.prototype, "innerRadius", undefined);
__decorate2([
  pathType(0)
], Ellipse.prototype, "startAngle", undefined);
__decorate2([
  pathType(0)
], Ellipse.prototype, "endAngle", undefined);
Ellipse = __decorate2([
  registerUI()
], Ellipse);
var { sin: sin$12, cos: cos$12, PI: PI$12 } = Math;
var { moveTo: moveTo$2, lineTo: lineTo$2, closePath: closePath$1, drawPoints: drawPoints$1 } = PathCommandDataHelper;
var { toBounds: toBounds$2 } = PathBounds;
var Polygon = class Polygon2 extends UI {
  get __tag() {
    return "Polygon";
  }
  get resizeable() {
    return !this.points;
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const path = this.__.path = [];
    if (this.__.points) {
      drawPoints$1(path, this.__.points, false, true);
    } else {
      const { width, height, sides } = this.__;
      const rx = width / 2, ry = height / 2;
      moveTo$2(path, rx, 0);
      for (let i = 1;i < sides; i++) {
        lineTo$2(path, rx + rx * sin$12(i * 2 * PI$12 / sides), ry - ry * cos$12(i * 2 * PI$12 / sides));
      }
    }
    closePath$1(path);
  }
  __updateRenderPath() {
    if (this.__.points && this.__.curve) {
      drawPoints$1(this.__.__pathForRender = [], this.__.points, this.__.curve, true);
    } else {
      super.__updateRenderPath();
    }
  }
  __updateBoxBounds() {
    if (this.__.points) {
      toBounds$2(this.__.__pathForRender, this.__layout.boxBounds);
      this.__updateNaturalSize();
    } else {
      super.__updateBoxBounds();
    }
  }
};
__decorate2([
  dataProcessor(PolygonData)
], Polygon.prototype, "__", undefined);
__decorate2([
  pathType(3)
], Polygon.prototype, "sides", undefined);
__decorate2([
  pathType()
], Polygon.prototype, "points", undefined);
__decorate2([
  pathType(0)
], Polygon.prototype, "curve", undefined);
Polygon = __decorate2([
  registerUI()
], Polygon);
var { sin: sin2, cos: cos2, PI: PI3 } = Math;
var { moveTo: moveTo$1, lineTo: lineTo$1, closePath: closePath2 } = PathCommandDataHelper;
var Star = class Star2 extends UI {
  get __tag() {
    return "Star";
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const { width, height, corners, innerRadius } = this.__;
    const rx = width / 2, ry = height / 2;
    const path = this.__.path = [];
    moveTo$1(path, rx, 0);
    for (let i = 1;i < corners * 2; i++) {
      lineTo$1(path, rx + (i % 2 === 0 ? rx : rx * innerRadius) * sin2(i * PI3 / corners), ry - (i % 2 === 0 ? ry : ry * innerRadius) * cos2(i * PI3 / corners));
    }
    closePath2(path);
  }
};
__decorate2([
  dataProcessor(StarData)
], Star.prototype, "__", undefined);
__decorate2([
  pathType(5)
], Star.prototype, "corners", undefined);
__decorate2([
  pathType(0.382)
], Star.prototype, "innerRadius", undefined);
Star = __decorate2([
  registerUI()
], Star);
var { moveTo: moveTo2, lineTo: lineTo2, drawPoints: drawPoints2 } = PathCommandDataHelper;
var { rotate, getAngle, getDistance, defaultPoint } = PointHelper;
var { toBounds: toBounds$12 } = PathBounds;
var Line = class Line2 extends UI {
  get __tag() {
    return "Line";
  }
  get resizeable() {
    return !this.points;
  }
  get toPoint() {
    const { width, rotation } = this.__;
    const to = { x: 0, y: 0 };
    if (width)
      to.x = width;
    if (rotation)
      rotate(to, rotation);
    return to;
  }
  set toPoint(value) {
    this.width = getDistance(defaultPoint, value);
    this.rotation = getAngle(defaultPoint, value);
    if (this.height)
      this.height = 0;
  }
  constructor(data) {
    super(data);
  }
  __updatePath() {
    const path = this.__.path = [];
    if (this.__.points) {
      drawPoints2(path, this.__.points, false);
    } else {
      moveTo2(path, 0, 0);
      lineTo2(path, this.width, 0);
    }
  }
  __updateRenderPath() {
    if (this.__.points && this.__.curve) {
      drawPoints2(this.__.__pathForRender = [], this.__.points, this.__.curve, false);
    } else {
      super.__updateRenderPath();
    }
  }
  __updateBoxBounds() {
    if (this.points) {
      toBounds$12(this.__.__pathForRender, this.__layout.boxBounds);
      this.__updateNaturalSize();
    } else {
      super.__updateBoxBounds();
    }
  }
};
__decorate2([
  dataProcessor(LineData)
], Line.prototype, "__", undefined);
__decorate2([
  affectStrokeBoundsType("center")
], Line.prototype, "strokeAlign", undefined);
__decorate2([
  boundsType(0)
], Line.prototype, "height", undefined);
__decorate2([
  pathType()
], Line.prototype, "points", undefined);
__decorate2([
  pathType(0)
], Line.prototype, "curve", undefined);
Line = __decorate2([
  registerUI()
], Line);
var Image2 = class Image3 extends Rect {
  get __tag() {
    return "Image";
  }
  get ready() {
    return this.image ? this.image.ready : false;
  }
  constructor(data) {
    super(data);
  }
  __updateBoxBounds() {
    let update;
    const { url } = this;
    const fill = this.fill;
    if (fill) {
      if (fill.url !== url)
        update = true;
    } else {
      if (url)
        update = true;
    }
    if (update) {
      if (this.image)
        this.image = null;
      this.fill = url ? { type: "image", mode: "strench", url } : undefined;
      this.once(ImageEvent.LOADED, (e) => this.image = e.image);
    }
    super.__updateBoxBounds();
  }
  destroy() {
    this.image = null;
    super.destroy();
  }
};
__decorate2([
  dataProcessor(ImageData)
], Image2.prototype, "__", undefined);
__decorate2([
  boundsType("")
], Image2.prototype, "url", undefined);
Image2 = __decorate2([
  registerUI()
], Image2);
var Canvas2 = class Canvas3 extends Rect {
  get __tag() {
    return "Canvas";
  }
  constructor(data) {
    super(data);
    this.canvas = Creator.canvas(this.__);
    this.context = this.canvas.context;
    this.__.__drawAfterFill = true;
  }
  draw(ui, offset, scale, rotation) {
    ui.__layout.checkUpdate();
    const matrix2 = new Matrix(ui.__world);
    matrix2.invert();
    const m2 = new Matrix;
    if (offset)
      m2.translate(offset.x, offset.y);
    if (scale)
      typeof scale === "number" ? m2.scale(scale) : m2.scale(scale.x, scale.y);
    if (rotation)
      m2.rotate(rotation);
    matrix2.preMultiply(m2);
    ui.__render(this.canvas, { matrix: matrix2 });
    this.paint();
  }
  paint() {
    this.forceUpdate("fill");
  }
  __drawAfterFill(canvas, _options) {
    const origin = this.canvas.view;
    const { width, height } = this;
    if (this.__.cornerRadius) {
      canvas.save();
      canvas.clip();
      canvas.drawImage(this.canvas.view, 0, 0, origin.width, origin.height, 0, 0, width, height);
      canvas.restore();
    } else {
      canvas.drawImage(this.canvas.view, 0, 0, origin.width, origin.height, 0, 0, width, height);
    }
  }
  __updateSize() {
    const { canvas } = this;
    if (canvas) {
      const { smooth } = this.__;
      if (canvas.smooth !== smooth)
        canvas.smooth = smooth;
      canvas.resize(this.__);
    }
  }
  destroy() {
    if (this.canvas) {
      this.canvas.destroy();
      this.canvas = null;
      this.context = null;
    }
    super.destroy();
  }
};
__decorate2([
  dataProcessor(ImageData)
], Canvas2.prototype, "__", undefined);
__decorate2([
  resizeType(100)
], Canvas2.prototype, "width", undefined);
__decorate2([
  resizeType(100)
], Canvas2.prototype, "height", undefined);
__decorate2([
  resizeType(Platform.devicePixelRatio)
], Canvas2.prototype, "pixelRatio", undefined);
__decorate2([
  resizeType(true)
], Canvas2.prototype, "smooth", undefined);
__decorate2([
  hitType("all")
], Canvas2.prototype, "hitFill", undefined);
Canvas2 = __decorate2([
  registerUI()
], Canvas2);
var { copyAndSpread: copyAndSpread2, includes, spread, setByList } = BoundsHelper;
var Text = class Text2 extends UI {
  get __tag() {
    return "Text";
  }
  get textDrawData() {
    this.__layout.checkUpdate();
    return this.__.__textDrawData;
  }
  constructor(data) {
    super(data);
  }
  __drawHitPath(canvas) {
    const { __lineHeight, __baseLine, __textDrawData: data } = this.__;
    canvas.beginPath();
    if (this.__.__letterSpacing < 0) {
      this.__drawPathByData(canvas);
    } else {
      data.rows.forEach((row) => canvas.rect(row.x, row.y - __baseLine, row.width, __lineHeight));
    }
  }
  __drawPathByData(drawer, _data) {
    const { x, y, width, height } = this.__layout.boxBounds;
    drawer.rect(x, y, width, height);
  }
  __drawRenderPath(canvas) {
    canvas.font = this.__.__font;
  }
  __updateTextDrawData() {
    const data = this.__;
    data.__textDrawData = TextConvert.getDrawData(data.text, this.__);
  }
  __updateBoxBounds() {
    const data = this.__;
    const layout = this.__layout;
    const { lineHeight, letterSpacing, fontFamily, fontSize, fontWeight, italic, textCase, textOverflow } = data;
    const width = data.__getInput("width");
    const height = data.__getInput("height");
    data.__lineHeight = UnitConvert.number(lineHeight, fontSize);
    data.__letterSpacing = UnitConvert.number(letterSpacing, fontSize);
    data.__baseLine = data.__lineHeight - (data.__lineHeight - fontSize * 0.7) / 2;
    data.__font = `${italic ? "italic " : ""}${textCase === "small-caps" ? "small-caps " : ""}${fontWeight !== "normal" ? fontWeight + " " : ""}${fontSize}px ${fontFamily}`;
    data.__clipText = textOverflow !== "show" && (width || height);
    this.__updateTextDrawData();
    const { bounds: bounds2 } = data.__textDrawData;
    const b = layout.boxBounds;
    if (data.__lineHeight < fontSize)
      spread(bounds2, fontSize / 2);
    if (width && height) {
      super.__updateBoxBounds();
    } else {
      b.x = width ? 0 : bounds2.x;
      b.y = height ? 0 : bounds2.y;
      b.width = width ? width : bounds2.width;
      b.height = height ? height : bounds2.height;
      this.__updateNaturalSize();
    }
    const contentBounds = includes(b, bounds2) ? b : bounds2;
    if (contentBounds !== layout.contentBounds) {
      layout.contentBounds = contentBounds;
      layout.renderChanged = true;
      setByList(data.__textBoxBounds = {}, [b, bounds2]);
    } else {
      data.__textBoxBounds = contentBounds;
    }
  }
  __updateRenderSpread() {
    let width = super.__updateRenderSpread();
    if (!width)
      width = this.__layout.boxBounds === this.__layout.contentBounds ? 0 : 1;
    return width;
  }
  __updateRenderBounds() {
    copyAndSpread2(this.__layout.renderBounds, this.__.__textBoxBounds, this.__layout.renderSpread);
  }
};
__decorate2([
  dataProcessor(TextData)
], Text.prototype, "__", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "width", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "height", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "padding", undefined);
__decorate2([
  affectStrokeBoundsType("outside")
], Text.prototype, "strokeAlign", undefined);
__decorate2([
  hitType("all")
], Text.prototype, "hitFill", undefined);
__decorate2([
  boundsType("")
], Text.prototype, "text", undefined);
__decorate2([
  boundsType("L")
], Text.prototype, "fontFamily", undefined);
__decorate2([
  boundsType(12)
], Text.prototype, "fontSize", undefined);
__decorate2([
  boundsType("normal")
], Text.prototype, "fontWeight", undefined);
__decorate2([
  boundsType(false)
], Text.prototype, "italic", undefined);
__decorate2([
  boundsType("none")
], Text.prototype, "textCase", undefined);
__decorate2([
  boundsType("none")
], Text.prototype, "textDecoration", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "letterSpacing", undefined);
__decorate2([
  boundsType({ type: "percent", value: 150 })
], Text.prototype, "lineHeight", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "paraIndent", undefined);
__decorate2([
  boundsType(0)
], Text.prototype, "paraSpacing", undefined);
__decorate2([
  boundsType("left")
], Text.prototype, "textAlign", undefined);
__decorate2([
  boundsType("top")
], Text.prototype, "verticalAlign", undefined);
__decorate2([
  boundsType("normal")
], Text.prototype, "textWrap", undefined);
__decorate2([
  boundsType("show")
], Text.prototype, "textOverflow", undefined);
Text = __decorate2([
  registerUI()
], Text);
var { toBounds: toBounds2 } = PathBounds;
var Path = class Path2 extends UI {
  get __tag() {
    return "Path";
  }
  get resizeable() {
    return false;
  }
  constructor(data) {
    super(data);
  }
  __updateBoxBounds() {
    toBounds2(this.__.path, this.__layout.boxBounds);
    this.__updateNaturalSize();
  }
};
__decorate2([
  dataProcessor(PathData)
], Path.prototype, "__", undefined);
__decorate2([
  pathType()
], Path.prototype, "path", undefined);
__decorate2([
  pathType()
], Path.prototype, "windingRule", undefined);
__decorate2([
  affectStrokeBoundsType("center")
], Path.prototype, "strokeAlign", undefined);
Path = __decorate2([
  registerUI()
], Path);
var Pen = class Pen2 extends Group {
  get __tag() {
    return "Pen";
  }
  constructor(data) {
    super(data);
  }
  setStyle(data) {
    const path = this.pathElement = new Path(data);
    this.pathStyle = data;
    this.path = path.path || (path.path = []);
    this.add(path);
    return this;
  }
  beginPath() {
    this.path.length = 0;
    this.paint();
    return this;
  }
  moveTo(_x, _y) {
    return this;
  }
  lineTo(_x, _y) {
    return this;
  }
  bezierCurveTo(_x1, _y1, _x2, _y2, _x, _y) {
    return this;
  }
  quadraticCurveTo(_x1, _y1, _x, _y) {
    return this;
  }
  closePath() {
    return this;
  }
  rect(_x, _y, _width, _height) {
    return this;
  }
  roundRect(_x, _y, _width, _height, _cornerRadius) {
    return this;
  }
  ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  arcTo(_x1, _y1, _x2, _y2, _radius) {
    return this;
  }
  drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  drawArc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) {
    return this;
  }
  drawPoints(_points, _curve, _close) {
    return this;
  }
  paint() {
    this.pathElement.forceUpdate("path");
  }
  clear() {
    this.removeAll(true);
  }
};
__decorate2([
  dataProcessor(PenData)
], Pen.prototype, "__", undefined);
Pen = __decorate2([
  useModule(PathCreator, ["beginPath"]),
  registerUI()
], Pen);
var debug2 = Debug.get("Leafer");
var Leafer = class Leafer2 extends Group {
  get __tag() {
    return "Leafer";
  }
  get isApp() {
    return false;
  }
  get app() {
    return this.parent || this;
  }
  get cursorPoint() {
    return this.interaction && this.interaction.hoverData || { x: this.width / 2, y: this.height / 2 };
  }
  constructor(userConfig, data) {
    super(data);
    this.zoomLayer = this;
    this.config = {
      type: "design",
      start: true,
      hittable: true,
      smooth: true,
      zoom: {
        min: 0.02,
        max: 256
      },
      move: {
        holdSpaceKey: true,
        dragOut: true,
        autoDistance: 2
      }
    };
    this.leafs = 0;
    this.__eventIds = [];
    this.__controllers = [];
    this.__readyWait = [];
    this.__viewReadyWait = [];
    this.__viewCompletedWait = [];
    this.__nextRenderWait = [];
    this.userConfig = userConfig;
    if (userConfig && (userConfig.view || userConfig.width))
      this.init(userConfig);
  }
  init(userConfig, parentApp) {
    if (this.canvas)
      return;
    this.__setLeafer(this);
    if (userConfig)
      DataHelper.assign(this.config, userConfig);
    let start;
    const { config } = this;
    LeaferTypeCreator.run(config.type, this);
    this.canvas = Creator.canvas(config);
    this.__controllers.push(this.renderer = Creator.renderer(this, this.canvas, config), this.watcher = Creator.watcher(this, config), this.layouter = Creator.layouter(this, config));
    if (this.isApp)
      this.__setApp();
    this.__checkAutoLayout(config);
    this.view = this.canvas.view;
    if (parentApp) {
      this.__bindApp(parentApp);
      start = parentApp.running;
    } else {
      this.selector = Creator.selector(this);
      this.__controllers.unshift(this.interaction = Creator.interaction(this, this.canvas, this.selector, config));
      this.canvasManager = new CanvasManager;
      this.hitCanvasManager = new HitCanvasManager;
      start = config.start;
    }
    this.hittable = config.hittable;
    this.fill = config.fill;
    this.canvasManager.add(this.canvas);
    this.__listenEvents();
    if (start)
      this.__startTimer = setTimeout(this.start.bind(this));
    PluginManager.onLeafer(this);
  }
  set(data) {
    if (!this.children) {
      setTimeout(() => {
        super.set(data);
      });
    } else {
      super.set(data);
    }
  }
  start() {
    clearTimeout(this.__startTimer);
    if (!this.running && this.canvas) {
      this.ready ? this.emitLeafer(LeaferEvent.RESTART) : this.emitLeafer(LeaferEvent.START);
      this.__controllers.forEach((item) => item.start());
      if (!this.isApp)
        this.renderer.render();
      this.running = true;
    }
  }
  stop() {
    clearTimeout(this.__startTimer);
    if (this.running && this.canvas) {
      this.__controllers.forEach((item) => item.stop());
      this.running = false;
      this.emitLeafer(LeaferEvent.STOP);
    }
  }
  resize(size) {
    const data = DataHelper.copyAttrs({}, size, canvasSizeAttrs);
    Object.keys(data).forEach((key) => this[key] = data[key]);
  }
  forceLayout() {
    this.__layout.checkUpdate(true);
  }
  forceFullRender() {
    this.renderer.addBlock(this.canvas.bounds);
    if (this.viewReady)
      this.renderer.update();
  }
  updateCursor() {
    if (this.interaction)
      this.interaction.updateCursor();
  }
  __doResize(size) {
    if (!this.canvas || this.canvas.isSameSize(size))
      return;
    const old = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
    this.canvas.resize(size);
    this.__onResize(new ResizeEvent(size, old));
  }
  __onResize(event) {
    this.emitEvent(event);
    DataHelper.copyAttrs(this.__, event, canvasSizeAttrs);
    setTimeout(() => {
      if (this.canvasManager)
        this.canvasManager.clearRecycled();
    }, 0);
  }
  __setApp() {
  }
  __bindApp(app) {
    this.selector = app.selector;
    this.interaction = app.interaction;
    this.canvasManager = app.canvasManager;
    this.hitCanvasManager = app.hitCanvasManager;
  }
  __setLeafer(leafer) {
    this.leafer = leafer;
    this.isLeafer = !!leafer;
    this.__level = 1;
  }
  setZoomLayer(zoomLayer) {
    this.zoomLayer = zoomLayer;
  }
  __checkAutoLayout(config) {
    if (!config.width || !config.height) {
      this.autoLayout = new AutoBounds(config);
      this.canvas.startAutoLayout(this.autoLayout, this.__onResize.bind(this));
    }
  }
  __setAttr(attrName, newValue) {
    if (this.canvas) {
      if (canvasSizeAttrs.includes(attrName)) {
        this.__changeCanvasSize(attrName, newValue);
      } else if (attrName === "fill") {
        this.__changeFill(newValue);
      } else if (attrName === "hittable") {
        this.canvas.hittable = newValue;
      }
    }
    super.__setAttr(attrName, newValue);
  }
  __getAttr(attrName) {
    if (this.canvas && canvasSizeAttrs.includes(attrName))
      return this.canvas[attrName];
    return super.__getAttr(attrName);
  }
  __changeCanvasSize(attrName, newValue) {
    const data = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
    data[attrName] = this.config[attrName] = newValue;
    if (newValue)
      this.canvas.stopAutoLayout();
    this.__doResize(data);
  }
  __changeFill(newValue) {
    this.config.fill = newValue;
    if (this.canvas.allowBackgroundColor) {
      this.canvas.backgroundColor = newValue;
    } else {
      this.forceFullRender();
    }
  }
  __onCreated() {
    this.created = true;
  }
  __onReady() {
    if (this.ready)
      return;
    this.ready = true;
    this.emitLeafer(LeaferEvent.BEFORE_READY);
    this.emitLeafer(LeaferEvent.READY);
    this.emitLeafer(LeaferEvent.AFTER_READY);
    WaitHelper.run(this.__readyWait);
  }
  __onViewReady() {
    if (this.viewReady)
      return;
    this.viewReady = true;
    this.emitLeafer(LeaferEvent.VIEW_READY);
    WaitHelper.run(this.__viewReadyWait);
  }
  __onRenderEnd(_e) {
    if (!this.viewReady)
      this.__onViewReady();
    const completed = this.__checkViewCompleted();
    if (completed)
      this.__onViewCompleted();
    this.viewCompleted = completed;
    WaitHelper.run(this.__nextRenderWait);
  }
  __checkViewCompleted() {
    return this.viewReady && !this.watcher.changed && ImageManager.isComplete;
  }
  __onViewCompleted() {
    if (!this.viewCompleted) {
      this.emitLeafer(LeaferEvent.VIEW_COMPLETED);
      WaitHelper.run(this.__viewCompletedWait);
    }
  }
  __onWatchData() {
    if (this.watcher.childrenChanged && this.interaction) {
      this.nextRender(() => this.interaction.updateCursor());
    }
  }
  waitReady(item) {
    this.ready ? item() : this.__readyWait.push(item);
  }
  waitViewReady(item) {
    this.viewReady ? item() : this.__viewReadyWait.push(item);
  }
  waitViewCompleted(item) {
    if (this.viewCompleted) {
      item();
    } else {
      this.__viewCompletedWait.push(item);
      if (!this.running)
        this.start();
    }
  }
  nextRender(item) {
    if (this.watcher && !this.watcher.changed) {
      item();
    } else {
      this.__nextRenderWait.push(item);
    }
  }
  __checkUpdateLayout() {
    this.__layout.checkUpdate();
  }
  emitLeafer(type) {
    this.emitEvent(new LeaferEvent(type, this));
  }
  __listenEvents() {
    const runId = Run.start("FirstCreate " + this.innerName);
    this.once(LeaferEvent.START, () => Run.end(runId));
    this.once(LayoutEvent.END, () => this.__onReady());
    this.once(RenderEvent.START, () => this.__onCreated());
    this.__eventIds.push(this.on_(WatchEvent.DATA, this.__onWatchData, this), this.on_(RenderEvent.END, this.__onRenderEnd, this), this.on_(LayoutEvent.CHECK_UPDATE, this.__checkUpdateLayout, this));
  }
  __removeListenEvents() {
    this.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  destroy() {
    setTimeout(() => {
      if (!this.destroyed) {
        try {
          this.stop();
          this.emitEvent(new LeaferEvent(LeaferEvent.END, this));
          this.__removeListenEvents();
          this.__controllers.forEach((item) => {
            if (!(this.parent && item === this.interaction))
              item.destroy();
          });
          this.__controllers.length = 0;
          if (!this.parent) {
            this.selector.destroy();
            this.canvasManager.destroy();
            this.hitCanvasManager.destroy();
          }
          this.canvas.destroy();
          this.config.view = this.view = null;
          if (this.userConfig)
            this.userConfig.view = null;
          super.destroy();
          setTimeout(() => {
            ImageManager.clearRecycled();
          }, 100);
        } catch (e) {
          debug2.error(e);
        }
      }
    });
  }
};
__decorate2([
  dataProcessor(LeaferData)
], Leafer.prototype, "__", undefined);
__decorate2([
  boundsType()
], Leafer.prototype, "pixelRatio", undefined);
Leafer = __decorate2([
  registerUI()
], Leafer);
var App = class App2 extends Leafer {
  get __tag() {
    return "App";
  }
  get isApp() {
    return true;
  }
  __setApp() {
    const { canvas } = this;
    const { realCanvas, view } = this.config;
    if (realCanvas || view === this.canvas.view || !canvas.parentView) {
      this.realCanvas = true;
    } else {
      canvas.unrealCanvas();
    }
    this.leafer = this;
    this.watcher.disable();
    this.layouter.disable();
    this.__eventIds.push(this.on_(PropertyEvent.CHANGE, this.__onPropertyChange, this));
  }
  start() {
    super.start();
    this.children.forEach((leafer) => {
      leafer.start();
    });
  }
  stop() {
    this.children.forEach((leafer) => {
      leafer.stop();
    });
    super.stop();
  }
  addLeafer(merge) {
    const leafer = new Leafer(merge);
    this.add(leafer);
    return leafer;
  }
  add(leafer) {
    if (!leafer.view) {
      if (this.realCanvas && !this.canvas.bounds) {
        setTimeout(() => this.add(leafer), 10);
        return;
      }
      leafer.init(this.__getChildConfig(leafer.userConfig), this);
    }
    super.add(leafer);
    this.__listenChildEvents(leafer);
  }
  __onPropertyChange() {
    if (Debug.showHitView)
      this.children.forEach((leafer) => {
        leafer.forceUpdate("surface");
      });
  }
  __onCreated() {
    this.created = this.children.every((child) => child.created);
  }
  __onReady() {
    if (this.children.every((child) => child.ready))
      super.__onReady();
  }
  __onViewReady() {
    if (this.children.every((child) => child.viewReady))
      super.__onViewReady();
  }
  __checkViewCompleted() {
    return this.children.every((item) => item.viewCompleted);
  }
  __onChildRenderEnd(e) {
    this.renderer.addBlock(e.renderBounds);
    if (this.viewReady)
      this.renderer.update();
  }
  __render(canvas, _options) {
    this.children.forEach((leafer) => {
      canvas.copyWorld(leafer.canvas);
    });
  }
  __onResize(event) {
    this.children.forEach((leafer) => {
      leafer.resize(event);
    });
    super.__onResize(event);
  }
  __checkUpdateLayout() {
    this.children.forEach((leafer) => {
      leafer.__layout.checkUpdate();
    });
  }
  __getChildConfig(userConfig) {
    let config = Object.assign({}, this.config);
    config.hittable = config.realCanvas = undefined;
    if (userConfig)
      DataHelper.assign(config, userConfig);
    if (this.autoLayout)
      DataHelper.copyAttrs(config, this, canvasSizeAttrs);
    config.view = this.realCanvas ? undefined : this.view;
    config.fill = undefined;
    return config;
  }
  __listenChildEvents(leafer) {
    leafer.once(LayoutEvent.END, () => this.__onReady());
    leafer.once(RenderEvent.START, () => this.__onCreated());
    leafer.once(RenderEvent.END, (e) => this.__onRenderEnd(e));
    if (this.realCanvas)
      this.__eventIds.push(leafer.on_(RenderEvent.END, this.__onChildRenderEnd, this));
  }
};
App = __decorate2([
  registerUI()
], App);

// node_modules/leafer-ui/dist/web.esm.js
var updateMatrix = function(updateList, levelList) {
  let layout;
  updateList.list.forEach((leaf) => {
    layout = leaf.__layout;
    if (levelList.without(leaf) && !layout.proxyZoom) {
      if (layout.matrixChanged) {
        updateAllWorldMatrix$1(leaf);
        levelList.push(leaf);
        if (leaf.isBranch)
          pushAllChildBranch2(leaf, levelList);
        pushAllParent(leaf, levelList);
      } else if (layout.boundsChanged) {
        levelList.push(leaf);
        if (leaf.isBranch)
          leaf.__tempNumber = 0;
        pushAllParent(leaf, levelList);
      }
    }
  });
};
var updateBounds = function(boundsList) {
  let itemList, branch;
  boundsList.sort(true);
  boundsList.levels.forEach((level) => {
    itemList = boundsList.levelMap[level];
    for (let i = 0, len = itemList.length;i < len; i++) {
      branch = itemList[i];
      if (branch.isBranch && branch.__tempNumber) {
        for (let j = 0, jLen = branch.children.length;j < jLen; j++) {
          if (!branch.children[j].isBranch) {
            branch.children[j].__updateWorldBounds();
          }
        }
      }
      branch.__updateWorldBounds();
    }
  });
};
var updateChange = function(updateList) {
  updateList.list.forEach((leaf) => {
    if (leaf.__layout.opacityChanged)
      updateAllWorldOpacity2(leaf);
    leaf.__updateChange();
  });
};
var useCanvas = function(_canvasType, _power) {
  Platform.origin = {
    createCanvas(width, height) {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      return canvas;
    },
    canvasToDataURL: (canvas, type, quality) => canvas.toDataURL(mineType(type), quality),
    canvasToBolb: (canvas, type, quality) => new Promise((resolve) => canvas.toBlob(resolve, mineType(type), quality)),
    canvasSaveAs: (canvas, filename, quality) => {
      return new Promise((resolve) => {
        let el = document.createElement("a");
        el.href = canvas.toDataURL(mineType(fileType(filename)), quality);
        el.download = filename;
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        resolve();
      });
    },
    loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image;
        img.setAttribute("crossOrigin", "anonymous");
        img.crossOrigin = "anonymous";
        img.onload = () => {
          resolve(img);
        };
        img.onerror = (e) => {
          reject(e);
        };
        if (!src.startsWith("data:") && Platform.imageSuffix)
          src += (src.includes("?") ? "&" : "?") + Platform.imageSuffix;
        img.src = src;
      });
    }
  };
  Platform.event = {
    stopDefault(origin) {
      origin.preventDefault();
    },
    stopNow(origin) {
      origin.stopImmediatePropagation();
    },
    stop(origin) {
      origin.stopPropagation();
    }
  };
  Platform.canvas = Creator.canvas();
  Platform.conicGradientSupport = !!Platform.canvas.context.createConicGradient;
};
var fillOrFitMode = function(data, mode, box, width, height, rotation) {
  const transform = get$4();
  const swap = rotation && rotation !== 180;
  const sw = box.width / (swap ? height : width);
  const sh = box.height / (swap ? width : height);
  const scale = mode === "fit" ? Math.min(sw, sh) : Math.max(sw, sh);
  const x = box.x + (box.width - width * scale) / 2;
  const y = box.y + (box.height - height * scale) / 2;
  translate$1(transform, x, y);
  scaleHelper$1(transform, scale);
  if (rotation)
    rotateOfOuter$2(transform, { x: box.x + box.width / 2, y: box.y + box.height / 2 }, rotation);
  data.scaleX = data.scaleY = scale;
  data.transform = transform;
};
var clipMode = function(data, box, offset, scale, rotation) {
  const transform = get$4();
  translate$1(transform, box.x, box.y);
  if (offset)
    translate$1(transform, offset.x, offset.y);
  if (scale) {
    typeof scale === "number" ? scaleHelper$1(transform, scale) : scaleHelper$1(transform, scale.x, scale.y);
    data.scaleX = transform.a;
    data.scaleY = transform.d;
  }
  if (rotation)
    rotate2(transform, rotation);
  data.transform = transform;
};
var repeatMode = function(data, box, width, height, scale, rotation) {
  const transform = get$4();
  if (rotation) {
    rotate2(transform, rotation);
    switch (rotation) {
      case 90:
        translate$1(transform, height, 0);
        break;
      case 180:
        translate$1(transform, width, height);
        break;
      case 270:
        translate$1(transform, 0, width);
        break;
    }
  }
  translate$1(transform, box.x, box.y);
  if (scale) {
    scaleOfOuter$2(transform, box, scale);
    data.scaleX = data.scaleY = scale;
  }
  data.transform = transform;
};
var createData = function(leafPaint, image, paint, box) {
  let { width, height } = image;
  const { opacity, mode, offset, scale, rotation, blendMode } = paint;
  const sameBox = box.width === width && box.height === height;
  if (blendMode)
    leafPaint.blendMode = blendMode;
  const data = leafPaint.data = { mode };
  switch (mode) {
    case "strench":
      if (!sameBox)
        width = box.width, height = box.height;
      if (box.x || box.y) {
        data.transform = get$3();
        translate(data.transform, box.x, box.y);
      }
      break;
    case "clip":
      if (offset || scale || rotation)
        clipMode(data, box, offset, scale, rotation);
      break;
    case "repeat":
      if (!sameBox || scale || rotation)
        repeatMode(data, box, width, height, scale, rotation);
      break;
    case "fit":
    case "cover":
    default:
      if (!sameBox || rotation)
        fillOrFitMode(data, mode, box, width, height, rotation);
  }
  data.width = width;
  data.height = height;
  if (opacity)
    data.opacity = opacity;
};
var image = function(ui, attrName, attrValue, box, firstUse) {
  const leafPaint = { type: attrValue.type };
  const image2 = leafPaint.image = ImageManager.get(attrValue);
  const event = (firstUse || image2.loading) && { target: ui, image: image2, attrName, attrValue };
  if (image2.ready) {
    if (hasNaturalSize(ui, attrName, image2))
      createData(leafPaint, image2, attrValue, box);
    if (firstUse) {
      emit2(ImageEvent.LOAD, event);
      emit2(ImageEvent.LOADED, event);
    }
  } else if (image2.error) {
    if (firstUse) {
      ui.forceUpdate("surface");
      event.error = image2.error;
      emit2(ImageEvent.ERROR, event);
    }
  } else {
    if (firstUse)
      emit2(ImageEvent.LOAD, event);
    leafPaint.loadId = image2.load(() => {
      if (!ui.destroyed) {
        if (hasNaturalSize(ui, attrName, image2)) {
          createData(leafPaint, image2, attrValue, box);
          ui.forceUpdate("surface");
        }
        emit2(ImageEvent.LOADED, event);
      }
    }, (error) => {
      ui.forceUpdate("surface");
      event.error = error;
      emit2(ImageEvent.ERROR, event);
    });
  }
  return leafPaint;
};
var hasNaturalSize = function(ui, attrName, image2) {
  if (attrName === "fill" && !ui.__.__naturalWidth) {
    const { __: d } = ui;
    d.__naturalWidth = image2.width;
    d.__naturalHeight = image2.height;
    if (!d.__getInput("width") || !d.__getInput("height")) {
      ui.forceUpdate("width");
      return false;
    }
  }
  return true;
};
var emit2 = function(type, data) {
  if (data.target.hasEvent(type))
    data.target.emitEvent(new ImageEvent(type, data));
};
var __awaiter2 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var createPattern = function(ui, paint, pixelRatio) {
  let { scaleX, scaleY } = ui.__world;
  const id = scaleX + "-" + scaleY;
  if (paint.patternId !== id && !ui.destroyed) {
    paint.patternId = id;
    scaleX = Math.abs(scaleX);
    scaleY = Math.abs(scaleY);
    const { image: image2, data } = paint;
    const maxWidth = image2.isSVG ? 4096 : Math.min(image2.width, 4096);
    const maxHeight = image2.isSVG ? 4096 : Math.min(image2.height, 4096);
    let scale, matrix2, { width, height, scaleX: sx, scaleY: sy, opacity, transform, mode } = data;
    if (sx) {
      matrix2 = get$2();
      copy$12(matrix2, transform);
      scaleHelper(matrix2, 1 / sx, 1 / sy);
      scaleX *= sx;
      scaleY *= sy;
    }
    scaleX *= pixelRatio;
    scaleY *= pixelRatio;
    width *= scaleX;
    height *= scaleY;
    if (width > maxWidth || height > maxHeight) {
      scale = Math.max(width / maxWidth, height / maxHeight);
    }
    if (scale) {
      scaleX /= scale;
      scaleY /= scale;
      width /= scale;
      height /= scale;
    }
    if (sx) {
      scaleX /= sx;
      scaleY /= sy;
    }
    if (transform || scaleX !== 1 || scaleY !== 1) {
      if (!matrix2) {
        matrix2 = get$2();
        if (transform)
          copy$12(matrix2, transform);
      }
      scaleHelper(matrix2, 1 / scaleX, 1 / scaleY);
    }
    const style = Platform.canvas.createPattern(image2.getCanvas(width < 1 ? 1 : width, height < 1 ? 1 : height, opacity), mode === "repeat" ? "repeat" : Platform.origin.noRepeat || "no-repeat");
    try {
      if (paint.transform)
        paint.transform = null;
      if (matrix2)
        style.setTransform ? style.setTransform(matrix2) : paint.transform = matrix2;
    } catch (_a) {
      paint.transform = matrix2;
    }
    paint.style = style;
    return true;
  } else {
    return false;
  }
};
var checkImage = function(ui, canvas, paint, allowPaint) {
  const { scaleX, scaleY } = ui.__world;
  if (!paint.data || paint.patternId === scaleX + "-" + scaleY) {
    return false;
  } else {
    if (allowPaint) {
      if (paint.image.isSVG && paint.data.mode !== "repeat") {
        let { width, height } = paint.data;
        width *= scaleX * canvas.pixelRatio;
        height *= scaleY * canvas.pixelRatio;
        allowPaint = width > 4096 || height > 4096;
      } else {
        allowPaint = false;
      }
    }
    if (allowPaint) {
      canvas.save();
      canvas.clip();
      const { data } = paint;
      if (paint.blendMode)
        canvas.blendMode = paint.blendMode;
      if (data.opacity)
        canvas.opacity *= data.opacity;
      if (data.transform)
        canvas.transform(data.transform);
      canvas.drawImage(paint.image.view, 0, 0, data.width, data.height);
      canvas.restore();
      return true;
    } else {
      if (!paint.style) {
        createPattern(ui, paint, canvas.pixelRatio);
      } else {
        if (!paint.patternTask) {
          paint.patternTask = ImageManager.patternTasker.add(() => __awaiter2(this, undefined, undefined, function* () {
            paint.patternTask = null;
            if (canvas.bounds.hit(ui.__world))
              createPattern(ui, paint, canvas.pixelRatio);
            ui.forceUpdate("surface");
          }), 300);
        }
      }
      return false;
    }
  }
};
var recycleImage = function(attrName, data) {
  const paints = attrName === "fill" ? data._fill : data._stroke;
  if (paints instanceof Array) {
    let image2, recycleMap, input, url;
    for (let i = 0, len = paints.length;i < len; i++) {
      image2 = paints[i].image;
      url = image2 && image2.url;
      if (url) {
        if (!recycleMap)
          recycleMap = {};
        recycleMap[url] = true;
        ImageManager.recycle(image2);
        if (image2.loading) {
          if (!input) {
            input = data.__input && data.__input[attrName] || [];
            if (!(input instanceof Array))
              input = [input];
          }
          image2.unload(paints[i].loadId, !input.some((item) => item.url === url));
        }
      }
    }
    return recycleMap;
  }
  return null;
};
var fillText = function(ui, canvas) {
  let row;
  const { rows, decorationY, decorationHeight } = ui.__.__textDrawData;
  for (let i = 0, len = rows.length;i < len; i++) {
    row = rows[i];
    if (row.text) {
      canvas.fillText(row.text, row.x, row.y);
    } else if (row.data) {
      row.data.forEach((charData) => {
        canvas.fillText(charData.char, charData.x, row.y);
      });
    }
    if (decorationY)
      canvas.fillRect(row.x, row.y + decorationY, row.width, decorationHeight);
  }
};
var fill = function(fill2, ui, canvas) {
  canvas.fillStyle = fill2;
  ui.__.__font ? fillText(ui, canvas) : ui.__.windingRule ? canvas.fill(ui.__.windingRule) : canvas.fill();
};
var fills = function(fills2, ui, canvas) {
  let item;
  const { windingRule, __font } = ui.__;
  for (let i = 0, len = fills2.length;i < len; i++) {
    item = fills2[i];
    if (item.image && checkImage(ui, canvas, item, !__font))
      continue;
    if (item.style) {
      canvas.fillStyle = item.style;
      if (item.transform) {
        canvas.save();
        canvas.transform(item.transform);
        if (item.blendMode)
          canvas.blendMode = item.blendMode;
        __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
        canvas.restore();
      } else {
        if (item.blendMode) {
          canvas.saveBlendMode(item.blendMode);
          __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
          canvas.restoreBlendMode();
        } else {
          __font ? fillText(ui, canvas) : windingRule ? canvas.fill(windingRule) : canvas.fill();
        }
      }
    }
  }
};
var strokeText = function(stroke, ui, canvas, renderOptions) {
  const { strokeAlign } = ui.__;
  const isStrokes = typeof stroke !== "string";
  switch (strokeAlign) {
    case "center":
      canvas.setStroke(isStrokes ? undefined : stroke, ui.__.strokeWidth, ui.__);
      isStrokes ? drawStrokesStyle(stroke, true, ui, canvas) : drawTextStroke(ui, canvas);
      break;
    case "inside":
      drawAlignStroke("inside", stroke, isStrokes, ui, canvas, renderOptions);
      break;
    case "outside":
      drawAlignStroke("outside", stroke, isStrokes, ui, canvas, renderOptions);
      break;
  }
};
var drawAlignStroke = function(align, stroke, isStrokes, ui, canvas, renderOptions) {
  const { strokeWidth, __font } = ui.__;
  const out = canvas.getSameCanvas(true);
  out.setStroke(isStrokes ? undefined : stroke, strokeWidth * 2, ui.__);
  out.font = __font;
  isStrokes ? drawStrokesStyle(stroke, true, ui, out) : drawTextStroke(ui, out);
  out.blendMode = align === "outside" ? "destination-out" : "destination-in";
  fillText(ui, out);
  out.blendMode = "normal";
  if (ui.__hasMirror || renderOptions.matrix) {
    canvas.copyWorldByReset(out);
  } else {
    canvas.copyWorldToInner(out, ui.__world, ui.__layout.renderBounds);
  }
  out.recycle();
};
var drawTextStroke = function(ui, canvas) {
  let row;
  const { rows, decorationY, decorationHeight } = ui.__.__textDrawData;
  for (let i = 0, len = rows.length;i < len; i++) {
    row = rows[i];
    if (row.text) {
      canvas.strokeText(row.text, row.x, row.y);
    } else if (row.data) {
      row.data.forEach((charData) => {
        canvas.strokeText(charData.char, charData.x, row.y);
      });
    }
    if (decorationY)
      canvas.strokeRect(row.x, row.y + decorationY, row.width, decorationHeight);
  }
};
var drawStrokesStyle = function(strokes, isText, ui, canvas) {
  let item;
  for (let i = 0, len = strokes.length;i < len; i++) {
    item = strokes[i];
    if (item.image && checkImage(ui, canvas, item, false))
      continue;
    if (item.style) {
      canvas.strokeStyle = item.style;
      if (item.blendMode) {
        canvas.saveBlendMode(item.blendMode);
        isText ? drawTextStroke(ui, canvas) : canvas.stroke();
        canvas.restoreBlendMode();
      } else {
        isText ? drawTextStroke(ui, canvas) : canvas.stroke();
      }
    }
  }
};
var stroke = function(stroke2, ui, canvas, renderOptions) {
  const options = ui.__;
  const { strokeWidth, strokeAlign, __font } = options;
  if (!strokeWidth)
    return;
  if (__font) {
    strokeText(stroke2, ui, canvas, renderOptions);
  } else {
    switch (strokeAlign) {
      case "center":
        canvas.setStroke(stroke2, strokeWidth, options);
        canvas.stroke();
        break;
      case "inside":
        canvas.save();
        canvas.setStroke(stroke2, strokeWidth * 2, options);
        options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
        canvas.stroke();
        canvas.restore();
        break;
      case "outside":
        const out = canvas.getSameCanvas(true);
        out.setStroke(stroke2, strokeWidth * 2, ui.__);
        ui.__drawRenderPath(out);
        out.stroke();
        options.windingRule ? out.clip(options.windingRule) : out.clip();
        out.clearWorld(ui.__layout.renderBounds);
        if (ui.__hasMirror || renderOptions.matrix) {
          canvas.copyWorldByReset(out);
        } else {
          canvas.copyWorldToInner(out, ui.__world, ui.__layout.renderBounds);
        }
        out.recycle();
        break;
    }
  }
};
var strokes = function(strokes2, ui, canvas, renderOptions) {
  const options = ui.__;
  const { strokeWidth, strokeAlign, __font } = options;
  if (!strokeWidth)
    return;
  if (__font) {
    strokeText(strokes2, ui, canvas, renderOptions);
  } else {
    switch (strokeAlign) {
      case "center":
        canvas.setStroke(undefined, strokeWidth, options);
        drawStrokesStyle(strokes2, false, ui, canvas);
        break;
      case "inside":
        canvas.save();
        canvas.setStroke(undefined, strokeWidth * 2, options);
        options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
        drawStrokesStyle(strokes2, false, ui, canvas);
        canvas.restore();
        break;
      case "outside":
        const { renderBounds } = ui.__layout;
        const out = canvas.getSameCanvas(true);
        ui.__drawRenderPath(out);
        out.setStroke(undefined, strokeWidth * 2, ui.__);
        drawStrokesStyle(strokes2, false, ui, out);
        options.windingRule ? out.clip(options.windingRule) : out.clip();
        out.clearWorld(renderBounds);
        if (ui.__hasMirror || renderOptions.matrix) {
          canvas.copyWorldByReset(out);
        } else {
          canvas.copyWorldToInner(out, ui.__world, renderBounds);
        }
        out.recycle();
        break;
    }
  }
};
var shape = function(ui, current2, options) {
  const canvas = current2.getSameCanvas();
  let bounds2, matrix2, shapeBounds;
  let worldCanvas;
  const { __world } = ui;
  let { scaleX, scaleY } = __world;
  if (scaleX < 0)
    scaleX = -scaleX;
  if (scaleY < 0)
    scaleY = -scaleY;
  if (!current2.bounds.includes(__world, options.matrix)) {
    const { renderShapeSpread: spread2 } = ui.__layout;
    const worldClipBounds = getIntersectData(spread2 ? getSpread(current2.bounds, spread2 * scaleX, spread2 * scaleY) : current2.bounds, __world, options.matrix);
    matrix2 = current2.bounds.getFitMatrix(worldClipBounds);
    if (matrix2.a < 1) {
      worldCanvas = current2.getSameCanvas();
      ui.__renderShape(worldCanvas, options);
      scaleX *= matrix2.a;
      scaleY *= matrix2.d;
    }
    shapeBounds = getOuterOf(__world, matrix2);
    bounds2 = getByMove(shapeBounds, -matrix2.e, -matrix2.f);
    if (options.matrix)
      matrix2.multiply(options.matrix);
    options = Object.assign(Object.assign({}, options), { matrix: matrix2 });
  } else {
    if (options.matrix) {
      scaleX *= options.matrix.a;
      scaleY *= options.matrix.d;
      bounds2 = shapeBounds = getOuterOf(__world, options.matrix);
    } else {
      bounds2 = shapeBounds = __world;
    }
    worldCanvas = canvas;
  }
  ui.__renderShape(canvas, options);
  return {
    canvas,
    matrix: matrix2,
    bounds: bounds2,
    worldCanvas,
    shapeBounds,
    scaleX,
    scaleY
  };
};
var linearGradient = function(paint, box) {
  let { from, to, type, blendMode, opacity } = paint;
  from || (from = defaultFrom$2);
  to || (to = defaultTo$2);
  const style = Platform.canvas.createLinearGradient(box.x + from.x * box.width, box.y + from.y * box.height, box.x + to.x * box.width, box.y + to.y * box.height);
  applyStops(style, paint.stops, opacity);
  const data = { type, style };
  if (blendMode)
    data.blendMode = blendMode;
  return data;
};
var applyStops = function(gradient, stops, opacity) {
  let stop;
  for (let i = 0, len = stops.length;i < len; i++) {
    stop = stops[i];
    gradient.addColorStop(stop.offset, ColorConvert.string(stop.color, opacity));
  }
};
var radialGradient = function(paint, box) {
  let { from, to, type, opacity, blendMode, stretch } = paint;
  from || (from = defaultFrom$1);
  to || (to = defaultTo$1);
  const { x, y, width, height } = box;
  set$1(realFrom$1, x + from.x * width, y + from.y * height);
  set$1(realTo$1, x + to.x * width, y + to.y * height);
  let transform;
  if (width !== height || stretch) {
    transform = get$1();
    scaleOfOuter$1(transform, realFrom$1, width / height * (stretch || 1), 1);
    rotateOfOuter$1(transform, realFrom$1, getAngle$1(realFrom$1, realTo$1) + 90);
  }
  const style = Platform.canvas.createRadialGradient(realFrom$1.x, realFrom$1.y, 0, realFrom$1.x, realFrom$1.y, getDistance$1(realFrom$1, realTo$1));
  applyStops(style, paint.stops, opacity);
  const data = { type, style, transform };
  if (blendMode)
    data.blendMode = blendMode;
  return data;
};
var conicGradient = function(paint, box) {
  let { from, to, type, opacity, blendMode, stretch } = paint;
  from || (from = defaultFrom);
  to || (to = defaultTo);
  const { x, y, width, height } = box;
  set2(realFrom, x + from.x * width, y + from.y * height);
  set2(realTo, x + to.x * width, y + to.y * height);
  const transform = get2();
  const angle = getAngle2(realFrom, realTo);
  if (Platform.conicGradientRotate90) {
    scaleOfOuter2(transform, realFrom, width / height * (stretch || 1), 1);
    rotateOfOuter2(transform, realFrom, angle + 90);
  } else {
    scaleOfOuter2(transform, realFrom, 1, width / height * (stretch || 1));
    rotateOfOuter2(transform, realFrom, angle);
  }
  const style = Platform.conicGradientSupport ? Platform.canvas.createConicGradient(0, realFrom.x, realFrom.y) : Platform.canvas.createRadialGradient(realFrom.x, realFrom.y, 0, realFrom.x, realFrom.y, getDistance2(realFrom, realTo));
  applyStops(style, paint.stops, opacity);
  const data = { type, style, transform };
  if (blendMode)
    data.blendMode = blendMode;
  return data;
};
var compute = function(attrName, ui) {
  const value = [];
  const data = ui.__;
  let item;
  let paints = data.__input[attrName];
  if (!(paints instanceof Array))
    paints = [paints];
  recycleMap = recycleImage(attrName, data);
  for (let i = 0, len = paints.length;i < len; i++) {
    item = getLeafPaint(attrName, paints[i], ui);
    if (item)
      value.push(item);
  }
  data["_" + attrName] = value.length ? value : undefined;
  let isPixel;
  if (paints.length === 1) {
    const paint = paints[0];
    if (paint.type === "image")
      isPixel = ImageManager.isPixel(paint);
  }
  if (attrName === "fill") {
    data.__pixelFill = isPixel;
  } else {
    data.__pixelStroke = isPixel;
  }
};
var getLeafPaint = function(attrName, paint, ui) {
  if (typeof paint !== "object" || paint.visible === false || paint.opacity === 0)
    return;
  const { boxBounds } = ui.__layout;
  switch (paint.type) {
    case "solid":
      let { type, blendMode, color, opacity } = paint;
      return { type, blendMode, style: ColorConvert.string(color, opacity) };
    case "image":
      return image(ui, attrName, paint, boxBounds, !recycleMap || !recycleMap[paint.url]);
    case "linear":
      return linearGradient(paint, boxBounds);
    case "radial":
      return radialGradient(paint, boxBounds);
    case "angular":
      return conicGradient(paint, boxBounds);
    default:
      return paint.r ? { type: "solid", style: ColorConvert.string(paint) } : undefined;
  }
};
var shadow = function(ui, current2, shape2, renderOptions) {
  let copyBounds, spreadScale;
  const { __world, __layout } = ui;
  const { shadow: shadow2 } = ui.__;
  const { worldCanvas, bounds: bounds2, shapeBounds, scaleX, scaleY } = shape2;
  const other = current2.getSameCanvas();
  const end = shadow2.length - 1;
  toOffsetOutBounds$1(bounds2, offsetOutBounds$1);
  shadow2.forEach((item, index) => {
    other.setWorldShadow(offsetOutBounds$1.offsetX + item.x * scaleX, offsetOutBounds$1.offsetY + item.y * scaleY, item.blur * scaleX, item.color);
    spreadScale = item.spread ? 1 + item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
    drawWorldShadow(other, offsetOutBounds$1, spreadScale, shape2);
    copyBounds = bounds2;
    if (item.box) {
      other.restore();
      other.save();
      if (worldCanvas) {
        other.copyWorld(other, bounds2, __world, "copy");
        copyBounds = __world;
      }
      worldCanvas ? other.copyWorld(worldCanvas, __world, __world, "destination-out") : other.copyWorld(shape2.canvas, shapeBounds, bounds2, "destination-out");
    }
    if (ui.__hasMirror || renderOptions.matrix) {
      current2.copyWorldByReset(other, copyBounds, __world, item.blendMode);
    } else {
      current2.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
    }
    if (end && index < end)
      other.clear();
  });
  other.recycle();
};
var drawWorldShadow = function(canvas, outBounds, spreadScale, shape2) {
  const { bounds: bounds2, shapeBounds } = shape2;
  if (Platform.fullImageShadow) {
    copy3(tempBounds, canvas.bounds);
    tempBounds.x += outBounds.x - shapeBounds.x;
    tempBounds.y += outBounds.y - shapeBounds.y;
    if (spreadScale) {
      const { matrix: matrix2 } = shape2;
      tempBounds.x -= (bounds2.x + (matrix2 ? matrix2.e : 0) + bounds2.width / 2) * (spreadScale - 1);
      tempBounds.y -= (bounds2.y + (matrix2 ? matrix2.f : 0) + bounds2.height / 2) * (spreadScale - 1);
      tempBounds.width *= spreadScale;
      tempBounds.height *= spreadScale;
    }
    canvas.copyWorld(shape2.canvas, canvas.bounds, tempBounds);
  } else {
    if (spreadScale) {
      copy3(tempBounds, outBounds);
      tempBounds.x -= outBounds.width / 2 * (spreadScale - 1);
      tempBounds.y -= outBounds.height / 2 * (spreadScale - 1);
      tempBounds.width *= spreadScale;
      tempBounds.height *= spreadScale;
    }
    canvas.copyWorld(shape2.canvas, shapeBounds, spreadScale ? tempBounds : outBounds);
  }
};
var innerShadow = function(ui, current2, shape2, renderOptions) {
  let copyBounds, spreadScale;
  const { __world, __layout } = ui;
  const { innerShadow: innerShadow2 } = ui.__;
  const { worldCanvas, bounds: bounds2, shapeBounds, scaleX, scaleY } = shape2;
  const other = current2.getSameCanvas();
  const end = innerShadow2.length - 1;
  toOffsetOutBounds(bounds2, offsetOutBounds);
  innerShadow2.forEach((item, index) => {
    other.save();
    other.setWorldShadow(offsetOutBounds.offsetX + item.x * scaleX, offsetOutBounds.offsetY + item.y * scaleY, item.blur * scaleX);
    spreadScale = item.spread ? 1 - item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
    drawWorldShadow(other, offsetOutBounds, spreadScale, shape2);
    other.restore();
    if (worldCanvas) {
      other.copyWorld(other, bounds2, __world, "copy");
      other.copyWorld(worldCanvas, __world, __world, "source-out");
      copyBounds = __world;
    } else {
      other.copyWorld(shape2.canvas, shapeBounds, bounds2, "source-out");
      copyBounds = bounds2;
    }
    other.fillWorld(copyBounds, item.color, "source-in");
    if (ui.__hasMirror || renderOptions.matrix) {
      current2.copyWorldByReset(other, copyBounds, __world, item.blendMode);
    } else {
      current2.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
    }
    if (end && index < end)
      other.clear();
  });
  other.recycle();
};
var blur = function(ui, current2, origin) {
  const { blur: blur2 } = ui.__;
  origin.setWorldBlur(blur2 * ui.__world.a);
  origin.copyWorldToInner(current2, ui.__world, ui.__layout.renderBounds);
  origin.filter = "none";
};
var mapChar = function(str) {
  const map = {};
  str.split("").forEach((char) => map[char] = true);
  return map;
};
var getCharType = function(char) {
  if (letterMap[char]) {
    return Letter$1;
  } else if (breakMap[char]) {
    return Break$1;
  } else if (beforeMap[char]) {
    return Before$1;
  } else if (afterMap[char]) {
    return After$1;
  } else if (symbolMap[char]) {
    return Symbol$1;
  } else if (cjkReg.test(char)) {
    return Single$1;
  } else {
    return Letter$1;
  }
};
var getTextCase = function(char, textCase, firstChar) {
  switch (textCase) {
    case "title":
      return firstChar ? char.toUpperCase() : char;
    case "upper":
      return char.toUpperCase();
    case "lower":
      return char.toLowerCase();
    default:
      return char;
  }
};
var createRows = function(drawData, content, style) {
  textDrawData = drawData;
  rows = drawData.rows;
  bounds2 = drawData.bounds;
  const { __letterSpacing, paraIndent, textCase } = style;
  const { canvas } = Platform;
  const { width, height } = bounds2;
  const charMode = width || height || __letterSpacing || textCase !== "none";
  if (charMode) {
    const wrap = style.textWrap !== "none";
    const breakAll = style.textWrap === "break";
    paraStart = true;
    lastCharType = null;
    startCharSize = charWidth = charSize = wordWidth = rowWidth = 0;
    word = { data: [] }, row = { words: [] };
    for (let i = 0, len = content.length;i < len; i++) {
      char = content[i];
      if (char === "\n") {
        if (wordWidth)
          addWord();
        row.paraEnd = true;
        addRow();
        paraStart = true;
      } else {
        charType = getCharType(char);
        if (charType === Letter && textCase !== "none")
          char = getTextCase(char, textCase, !wordWidth);
        charWidth = canvas.measureText(char).width;
        if (__letterSpacing) {
          if (__letterSpacing < 0)
            charSize = charWidth;
          charWidth += __letterSpacing;
        }
        langBreak = charType === Single && (lastCharType === Single || lastCharType === Letter) || lastCharType === Single && charType !== After;
        afterBreak = (charType === Before || charType === Single) && (lastCharType === Symbol || lastCharType === After);
        realWidth = paraStart && paraIndent ? width - paraIndent : width;
        if (wrap && (width && rowWidth + wordWidth + charWidth > realWidth)) {
          if (breakAll) {
            if (wordWidth)
              addWord();
            addRow();
          } else {
            if (!afterBreak)
              afterBreak = charType === Letter && lastCharType == After;
            if (langBreak || afterBreak || charType === Break || charType === Before || charType === Single || wordWidth + charWidth > realWidth) {
              if (wordWidth)
                addWord();
              addRow();
            } else {
              addRow();
            }
          }
        }
        if (char === " " && paraStart !== true && rowWidth + wordWidth === 0)
          ;
        else {
          if (charType === Break) {
            if (char === " " && wordWidth)
              addWord();
            addChar(char, charWidth);
            addWord();
          } else if (langBreak || afterBreak) {
            if (wordWidth)
              addWord();
            addChar(char, charWidth);
          } else {
            addChar(char, charWidth);
          }
        }
        lastCharType = charType;
      }
    }
    if (wordWidth)
      addWord();
    if (rowWidth)
      addRow();
    rows.length > 0 && (rows[rows.length - 1].paraEnd = true);
  } else {
    content.split("\n").forEach((content2) => {
      textDrawData.paraNumber++;
      rows.push({ x: paraIndent || 0, text: content2, width: canvas.measureText(content2).width, paraStart: true });
    });
  }
};
var addChar = function(char, width) {
  if (charSize && !startCharSize)
    startCharSize = charSize;
  word.data.push({ char, width });
  wordWidth += width;
};
var addWord = function() {
  rowWidth += wordWidth;
  word.width = wordWidth;
  row.words.push(word);
  word = { data: [] };
  wordWidth = 0;
};
var addRow = function() {
  if (paraStart) {
    textDrawData.paraNumber++;
    row.paraStart = true;
    paraStart = false;
  }
  if (charSize) {
    row.startCharSize = startCharSize;
    row.endCharSize = charSize;
    startCharSize = 0;
  }
  row.width = rowWidth;
  if (bounds2.width)
    trimRight(row);
  rows.push(row);
  row = { words: [] };
  rowWidth = 0;
};
var layoutChar = function(drawData, style, width, _height) {
  const { rows } = drawData;
  const { textAlign, paraIndent, letterSpacing } = style;
  let charX, addWordWidth, indentWidth, mode, wordChar;
  rows.forEach((row) => {
    if (row.words) {
      indentWidth = paraIndent && row.paraStart ? paraIndent : 0;
      addWordWidth = width && textAlign === "justify" && row.words.length > 1 ? (width - row.width - indentWidth) / (row.words.length - 1) : 0;
      mode = letterSpacing || row.isOverflow ? CharMode : addWordWidth > 0.01 ? WordMode : TextMode;
      if (row.isOverflow && !letterSpacing)
        row.textMode = true;
      if (mode === TextMode) {
        row.x += indentWidth;
        toTextChar$1(row);
      } else {
        row.x += indentWidth;
        charX = row.x;
        row.data = [];
        row.words.forEach((word) => {
          if (mode === WordMode) {
            wordChar = { char: "", x: charX };
            charX = toWordChar(word.data, charX, wordChar);
            if (wordChar.char !== " ")
              row.data.push(wordChar);
          } else {
            charX = toChar(word.data, charX, row.data);
          }
          if (!row.paraEnd && addWordWidth) {
            charX += addWordWidth;
            row.width += addWordWidth;
          }
        });
      }
      row.words = null;
    }
  });
};
var toTextChar$1 = function(row) {
  row.text = "";
  row.words.forEach((word) => {
    word.data.forEach((char) => {
      row.text += char.char;
    });
  });
};
var toWordChar = function(data, charX, wordChar) {
  data.forEach((char) => {
    wordChar.char += char.char;
    charX += char.width;
  });
  return charX;
};
var toChar = function(data, charX, rowData) {
  data.forEach((char) => {
    if (char.char !== " ") {
      char.x = charX;
      rowData.push(char);
    }
    charX += char.width;
  });
  return charX;
};
var layoutText = function(drawData, style) {
  const { rows, bounds: bounds2 } = drawData;
  const { __lineHeight, __baseLine, __letterSpacing, __clipText, textAlign, verticalAlign, paraSpacing } = style;
  let { x, y, width, height } = bounds2, realHeight = __lineHeight * rows.length + (paraSpacing ? paraSpacing * (drawData.paraNumber - 1) : 0);
  let starY = __baseLine;
  if (__clipText && realHeight > height) {
    realHeight = Math.max(height, __lineHeight);
    drawData.overflow = rows.length;
  } else {
    switch (verticalAlign) {
      case "middle":
        y += (height - realHeight) / 2;
        break;
      case "bottom":
        y += height - realHeight;
    }
  }
  starY += y;
  let row, rowX, rowWidth;
  for (let i = 0, len = rows.length;i < len; i++) {
    row = rows[i];
    row.x = x;
    switch (textAlign) {
      case "center":
        row.x += (width - row.width) / 2;
        break;
      case "right":
        row.x += width - row.width;
    }
    if (row.paraStart && paraSpacing && i > 0)
      starY += paraSpacing;
    row.y = starY;
    starY += __lineHeight;
    if (drawData.overflow > i && starY > realHeight) {
      row.isOverflow = true;
      drawData.overflow = i + 1;
    }
    rowX = row.x;
    rowWidth = row.width;
    if (__letterSpacing < 0) {
      if (row.width < 0) {
        rowWidth = -row.width + style.fontSize + __letterSpacing;
        rowX -= rowWidth;
        rowWidth += style.fontSize;
      } else {
        rowWidth -= __letterSpacing;
      }
    }
    if (rowX < bounds2.x)
      bounds2.x = rowX;
    if (rowWidth > bounds2.width)
      bounds2.width = rowWidth;
    if (__clipText && width && width < rowWidth) {
      row.isOverflow = true;
      if (!drawData.overflow)
        drawData.overflow = rows.length;
    }
  }
  bounds2.y = y;
  bounds2.height = realHeight;
};
var clipText = function(drawData, style) {
  const { rows, overflow } = drawData;
  let { textOverflow } = style;
  rows.splice(overflow);
  if (textOverflow !== "hide") {
    if (textOverflow === "ellipsis")
      textOverflow = "...";
    let char, charRight;
    const ellipsisWidth = Platform.canvas.measureText(textOverflow).width;
    const right2 = style.x + style.width - ellipsisWidth;
    const list3 = style.textWrap === "none" ? rows : [rows[overflow - 1]];
    list3.forEach((row) => {
      if (row.isOverflow && row.data) {
        let end = row.data.length - 1;
        for (let i = end;i > -1; i--) {
          char = row.data[i];
          charRight = char.x + char.width;
          if (i === end && charRight < right2) {
            break;
          } else if (charRight < right2 && char.char !== " ") {
            row.data.splice(i + 1);
            row.width -= char.width;
            break;
          }
          row.width -= char.width;
        }
        row.width += ellipsisWidth;
        row.data.push({ char: textOverflow, x: charRight });
        if (row.textMode)
          toTextChar(row);
      }
    });
  }
};
var toTextChar = function(row) {
  row.text = "";
  row.data.forEach((char) => {
    row.text += char.char;
  });
  row.data = null;
};
var decorationText = function(drawData, style) {
  const { fontSize } = style;
  drawData.decorationHeight = fontSize / 11;
  switch (style.textDecoration) {
    case "under":
      drawData.decorationY = fontSize * 0.15;
      break;
    case "delete":
      drawData.decorationY = -fontSize * 0.35;
  }
};
var addTask = function(task) {
  if (!tasker)
    tasker = new TaskProcessor;
  return new Promise((resolve) => {
    tasker.add(() => __awaiter2(this, undefined, undefined, function* () {
      return yield task(resolve);
    }), { parallel: false });
  });
};

class Watcher {
  get childrenChanged() {
    return this.hasAdd || this.hasRemove || this.hasVisible;
  }
  get updatedList() {
    if (this.hasRemove) {
      const updatedList = new LeafList;
      this.__updatedList.list.forEach((item) => {
        if (item.leafer)
          updatedList.push(item);
      });
      return updatedList;
    } else {
      return this.__updatedList;
    }
  }
  constructor(target, userConfig) {
    this.totalTimes = 0;
    this.config = {};
    this.__updatedList = new LeafList;
    this.target = target;
    if (userConfig)
      this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    if (this.disabled)
      return;
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  disable() {
    this.stop();
    this.__removeListenEvents();
    this.disabled = true;
  }
  update() {
    this.changed = true;
    if (this.running)
      this.target.emit(RenderEvent.REQUEST);
  }
  __onAttrChange(event) {
    this.__updatedList.push(event.target);
    this.update();
  }
  __onChildEvent(event) {
    if (event.type === ChildEvent.ADD) {
      this.hasAdd = true;
      this.__pushChild(event.child);
    } else {
      this.hasRemove = true;
      this.__updatedList.push(event.parent);
    }
    this.update();
  }
  __pushChild(child) {
    this.__updatedList.push(child);
    if (child.isBranch)
      this.__loopChildren(child);
  }
  __loopChildren(parent) {
    const { children } = parent;
    for (let i = 0, len = children.length;i < len; i++)
      this.__pushChild(children[i]);
  }
  __onRquestData() {
    this.target.emitEvent(new WatchEvent(WatchEvent.DATA, { updatedList: this.updatedList }));
    this.__updatedList = new LeafList;
    this.totalTimes++;
    this.changed = false;
    this.hasVisible = false;
    this.hasRemove = false;
    this.hasAdd = false;
  }
  __listenEvents() {
    const { target } = this;
    this.__eventIds = [
      target.on_(PropertyEvent.CHANGE, this.__onAttrChange, this),
      target.on_([ChildEvent.ADD, ChildEvent.REMOVE], this.__onChildEvent, this),
      target.on_(WatchEvent.REQUEST, this.__onRquestData, this)
    ];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = null;
      this.__updatedList = null;
    }
  }
}
var { updateAllWorldMatrix: updateAllWorldMatrix$1, updateAllWorldOpacity: updateAllWorldOpacity2 } = LeafHelper;
var { pushAllChildBranch: pushAllChildBranch2, pushAllParent } = BranchHelper;
var { worldBounds } = LeafBoundsHelper;
var { setByListWithHandle: setByListWithHandle2 } = BoundsHelper;

class LayoutBlockData {
  constructor(list3) {
    this.updatedBounds = new Bounds;
    this.beforeBounds = new Bounds;
    this.afterBounds = new Bounds;
    if (list3 instanceof Array)
      list3 = new LeafList(list3);
    this.updatedList = list3;
  }
  setBefore() {
    setByListWithHandle2(this.beforeBounds, this.updatedList.list, worldBounds);
  }
  setAfter() {
    setByListWithHandle2(this.afterBounds, this.updatedList.list, worldBounds);
    this.updatedBounds.setByList([this.beforeBounds, this.afterBounds]);
  }
  merge(data) {
    this.updatedList.pushList(data.updatedList.list);
    this.beforeBounds.add(data.beforeBounds);
    this.afterBounds.add(data.afterBounds);
    this.updatedBounds.add(data.updatedBounds);
  }
  destroy() {
    this.updatedList = null;
  }
}
var { updateAllWorldMatrix: updateAllWorldMatrix2, updateAllChange: updateAllChange2 } = LeafHelper;
var { pushAllBranchStack: pushAllBranchStack2, updateWorldBoundsByBranchStack } = BranchHelper;
var debug$23 = Debug.get("Layouter");

class Layouter {
  constructor(target, userConfig) {
    this.totalTimes = 0;
    this.config = {};
    this.__levelList = new LeafLevelList;
    this.target = target;
    if (userConfig)
      this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
  }
  start() {
    if (this.disabled)
      return;
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  disable() {
    this.stop();
    this.__removeListenEvents();
    this.disabled = true;
  }
  layout() {
    if (!this.running)
      return;
    const { target } = this;
    this.times = 0;
    try {
      target.emit(LayoutEvent.START);
      this.layoutOnce();
      target.emitEvent(new LayoutEvent(LayoutEvent.END, this.layoutedBlocks, this.times));
    } catch (e) {
      debug$23.error(e);
    }
    this.layoutedBlocks = null;
  }
  layoutAgain() {
    if (this.layouting) {
      this.waitAgain = true;
    } else {
      this.layoutOnce();
    }
  }
  layoutOnce() {
    if (this.layouting)
      return debug$23.warn("layouting");
    if (this.times > 3)
      return debug$23.warn("layout max times");
    this.times++;
    this.totalTimes++;
    this.layouting = true;
    this.target.emit(WatchEvent.REQUEST);
    if (this.totalTimes > 1) {
      this.partLayout();
    } else {
      this.fullLayout();
    }
    this.layouting = false;
    if (this.waitAgain) {
      this.waitAgain = false;
      this.layoutOnce();
    }
  }
  partLayout() {
    var _a;
    if (!((_a = this.__updatedList) === null || _a === undefined ? undefined : _a.length))
      return;
    const t2 = Run.start("PartLayout");
    const { target, __updatedList: updateList } = this;
    const { BEFORE, LAYOUT, AFTER } = LayoutEvent;
    const blocks = this.getBlocks(updateList);
    blocks.forEach((item) => {
      item.setBefore();
    });
    target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
    updateList.sort();
    updateMatrix(updateList, this.__levelList);
    updateBounds(this.__levelList);
    updateChange(updateList);
    blocks.forEach((item) => item.setAfter());
    target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
    target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
    this.addBlocks(blocks);
    this.__levelList.reset();
    this.__updatedList = null;
    Run.end(t2);
  }
  fullLayout() {
    const t2 = Run.start("FullLayout");
    const { target } = this;
    const { BEFORE, LAYOUT, AFTER } = LayoutEvent;
    const blocks = this.getBlocks(new LeafList(target));
    target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
    Layouter.fullLayout(target);
    blocks.forEach((item) => {
      item.setAfter();
    });
    target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
    target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
    this.addBlocks(blocks);
    Run.end(t2);
  }
  static fullLayout(target) {
    updateAllWorldMatrix2(target);
    if (target.isBranch) {
      const branchStack = [target];
      pushAllBranchStack2(target, branchStack);
      updateWorldBoundsByBranchStack(branchStack);
    } else {
      target.__updateWorldBounds();
    }
    updateAllChange2(target);
  }
  createBlock(data) {
    return new LayoutBlockData(data);
  }
  getBlocks(list3) {
    return [this.createBlock(list3)];
  }
  addBlocks(current2) {
    this.layoutedBlocks ? this.layoutedBlocks.push(...current2) : this.layoutedBlocks = current2;
  }
  __onReceiveWatchData(event) {
    this.__updatedList = event.data.updatedList;
  }
  __listenEvents() {
    const { target } = this;
    this.__eventIds = [
      target.on_(LayoutEvent.REQUEST, this.layout, this),
      target.on_(LayoutEvent.AGAIN, this.layoutAgain, this),
      target.on_(WatchEvent.DATA, this.__onReceiveWatchData, this)
    ];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = null;
      this.config = null;
    }
  }
}
var debug$13 = Debug.get("Renderer");

class Renderer {
  get needFill() {
    return !!(!this.canvas.allowBackgroundColor && this.config.fill);
  }
  constructor(target, canvas, userConfig) {
    this.FPS = 60;
    this.totalTimes = 0;
    this.times = 0;
    this.config = {
      usePartRender: true,
      maxFPS: 60
    };
    this.target = target;
    this.canvas = canvas;
    if (userConfig)
      this.config = DataHelper.default(userConfig, this.config);
    this.__listenEvents();
    this.__requestRender();
  }
  start() {
    this.running = true;
  }
  stop() {
    this.running = false;
  }
  update() {
    this.changed = true;
  }
  requestLayout() {
    this.target.emit(LayoutEvent.REQUEST);
  }
  render(callback) {
    if (!(this.running && this.canvas.view)) {
      this.changed = true;
      return;
    }
    const { target } = this;
    this.times = 0;
    this.totalBounds = new Bounds;
    debug$13.log(target.innerName, "--->");
    try {
      this.emitRender(RenderEvent.START);
      this.renderOnce(callback);
      this.emitRender(RenderEvent.END, this.totalBounds);
      ImageManager.clearRecycled();
    } catch (e) {
      this.rendering = false;
      debug$13.error(e);
    }
    debug$13.log("-------------|");
  }
  renderAgain() {
    if (this.rendering) {
      this.waitAgain = true;
    } else {
      this.renderOnce();
    }
  }
  renderOnce(callback) {
    if (this.rendering)
      return debug$13.warn("rendering");
    if (this.times > 3)
      return debug$13.warn("render max times");
    this.times++;
    this.totalTimes++;
    this.rendering = true;
    this.changed = false;
    this.renderBounds = new Bounds;
    this.renderOptions = {};
    if (callback) {
      this.emitRender(RenderEvent.BEFORE);
      callback();
    } else {
      this.requestLayout();
      this.emitRender(RenderEvent.BEFORE);
      if (this.config.usePartRender && this.totalTimes > 1) {
        this.partRender();
      } else {
        this.fullRender();
      }
    }
    this.emitRender(RenderEvent.RENDER, this.renderBounds, this.renderOptions);
    this.emitRender(RenderEvent.AFTER, this.renderBounds, this.renderOptions);
    this.updateBlocks = null;
    this.rendering = false;
    if (this.waitAgain) {
      this.waitAgain = false;
      this.renderOnce();
    }
  }
  partRender() {
    const { canvas, updateBlocks: list3 } = this;
    if (!list3)
      return debug$13.warn("PartRender: need update attr");
    this.mergeBlocks();
    list3.forEach((block) => {
      if (canvas.bounds.hit(block) && !block.isEmpty())
        this.clipRender(block);
    });
  }
  clipRender(block) {
    const t2 = Run.start("PartRender");
    const { canvas } = this;
    const bounds2 = block.getIntersect(canvas.bounds);
    const includes2 = block.includes(this.target.__world);
    const realBounds = new Bounds().copy(bounds2);
    canvas.save();
    if (includes2 && !Debug.showRepaint) {
      canvas.clear();
    } else {
      bounds2.spread(1 + 1 / this.canvas.pixelRatio).ceil();
      canvas.clearWorld(bounds2, true);
      canvas.clipWorld(bounds2, true);
    }
    this.__render(bounds2, includes2, realBounds);
    canvas.restore();
    Run.end(t2);
  }
  fullRender() {
    const t2 = Run.start("FullRender");
    const { canvas } = this;
    canvas.save();
    canvas.clear();
    this.__render(canvas.bounds, true);
    canvas.restore();
    Run.end(t2);
  }
  __render(bounds2, includes2, realBounds) {
    const options = bounds2.includes(this.target.__world) ? { includes: includes2 } : { bounds: bounds2, includes: includes2 };
    if (this.needFill)
      this.canvas.fillWorld(bounds2, this.config.fill);
    if (Debug.showRepaint)
      this.canvas.strokeWorld(bounds2, "red");
    this.target.__render(this.canvas, options);
    this.renderBounds = realBounds || bounds2;
    this.renderOptions = options;
    this.totalBounds.isEmpty() ? this.totalBounds = this.renderBounds : this.totalBounds.add(this.renderBounds);
    if (Debug.showHitView)
      this.renderHitView(options);
    if (Debug.showBoundsView)
      this.renderBoundsView(options);
    this.canvas.updateRender();
  }
  renderHitView(_options) {
  }
  renderBoundsView(_options) {
  }
  addBlock(block) {
    if (!this.updateBlocks)
      this.updateBlocks = [];
    this.updateBlocks.push(block);
  }
  mergeBlocks() {
    const { updateBlocks: list3 } = this;
    if (list3) {
      const bounds2 = new Bounds;
      bounds2.setByList(list3);
      list3.length = 0;
      list3.push(bounds2);
    }
  }
  __requestRender() {
    const startTime = Date.now();
    Platform.requestRender(() => {
      this.FPS = Math.min(60, Math.ceil(1000 / (Date.now() - startTime)));
      if (this.changed) {
        if (this.running && this.canvas.view)
          this.render();
      }
      if (this.running)
        this.target.emit(AnimateEvent.FRAME);
      if (this.target)
        this.__requestRender();
    });
  }
  __onResize(e) {
    if (this.canvas.unreal)
      return;
    if (e.bigger || !e.samePixelRatio) {
      const { width, height } = e.old;
      const bounds2 = new Bounds(0, 0, width, height);
      if (!bounds2.includes(this.target.__world) || this.needFill || !e.samePixelRatio) {
        this.addBlock(this.canvas.bounds);
        this.target.forceUpdate("blendMode");
      }
    }
  }
  __onLayoutEnd(event) {
    if (event.data)
      event.data.map((item) => {
        let empty2;
        if (item.updatedList)
          item.updatedList.list.some((leaf) => {
            empty2 = !leaf.__world.width || !leaf.__world.height;
            if (empty2) {
              if (!leaf.isLeafer)
                debug$13.warn(leaf.innerName, ": empty");
              empty2 = !leaf.isBranch || leaf.isBranchLeaf;
            }
            return empty2;
          });
        this.addBlock(empty2 ? this.canvas.bounds : item.updatedBounds);
      });
  }
  emitRender(type, bounds2, options) {
    this.target.emitEvent(new RenderEvent(type, this.times, bounds2, options));
  }
  __listenEvents() {
    const { target } = this;
    this.__eventIds = [
      target.on_(RenderEvent.REQUEST, this.update, this),
      target.on_(LayoutEvent.END, this.__onLayoutEnd, this),
      target.on_(RenderEvent.AGAIN, this.renderAgain, this),
      target.on_(ResizeEvent.RESIZE, this.__onResize, this)
    ];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
  }
  destroy() {
    if (this.target) {
      this.stop();
      this.__removeListenEvents();
      this.target = null;
      this.canvas = null;
      this.config = null;
    }
  }
}
var { hitRadiusPoint } = BoundsHelper;

class Pather {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
  }
  getByPoint(hitPoint, hitRadius, options) {
    if (!hitRadius)
      hitRadius = 0;
    if (!options)
      options = {};
    const through = options.through || false;
    const ignoreHittable = options.ignoreHittable || false;
    this.exclude = options.exclude || null;
    this.point = { x: hitPoint.x, y: hitPoint.y, radiusX: hitRadius, radiusY: hitRadius };
    this.findList = [];
    this.eachFind(this.target.children, this.target.__onlyHitMask);
    const list3 = this.findList;
    const leaf = this.getBestMatchLeaf();
    const path = ignoreHittable ? this.getPath(leaf) : this.getHitablePath(leaf);
    this.clear();
    return through ? { path, leaf, throughPath: list3.length ? this.getThroughPath(list3) : path } : { path, leaf };
  }
  getBestMatchLeaf() {
    const { findList: targets } = this;
    if (targets.length > 1) {
      let find;
      this.findList = [];
      const { x, y } = this.point;
      const point2 = { x, y, radiusX: 0, radiusY: 0 };
      for (let i = 0, len = targets.length;i < len; i++) {
        find = targets[i];
        if (LeafHelper.worldHittable(find)) {
          this.hitChild(find, point2);
          if (this.findList.length)
            return this.findList[0];
        }
      }
    }
    return targets[0];
  }
  getPath(leaf) {
    const path = new LeafList;
    while (leaf) {
      path.push(leaf);
      leaf = leaf.parent;
    }
    path.push(this.target);
    return path;
  }
  getHitablePath(leaf) {
    const path = this.getPath(leaf);
    let item, hittablePath = new LeafList;
    for (let i = path.list.length - 1;i > -1; i--) {
      item = path.list[i];
      if (!item.__.hittable)
        break;
      hittablePath.unshift(item);
      if (!item.__.hitChildren)
        break;
    }
    return hittablePath;
  }
  getThroughPath(list3) {
    const throughPath = new LeafList;
    const pathList = [];
    for (let i = list3.length - 1;i > -1; i--) {
      pathList.push(this.getPath(list3[i]));
    }
    let path, nextPath, leaf;
    for (let i = 0, len = pathList.length;i < len; i++) {
      path = pathList[i], nextPath = pathList[i + 1];
      for (let j = 0, jLen = path.length;j < jLen; j++) {
        leaf = path.list[j];
        if (nextPath && nextPath.has(leaf))
          break;
        throughPath.push(leaf);
      }
    }
    return throughPath;
  }
  eachFind(children, hitMask) {
    let child, hit;
    const { point: point2 } = this, len = children.length;
    for (let i = len - 1;i > -1; i--) {
      child = children[i];
      if (!child.__.visible || hitMask && !child.__.isMask)
        continue;
      hit = child.__.hitRadius ? true : hitRadiusPoint(child.__world, point2);
      if (child.isBranch) {
        if (hit || child.__ignoreHitWorld) {
          this.eachFind(child.children, child.__onlyHitMask);
          if (child.isBranchLeaf && !this.findList.length)
            this.hitChild(child, point2);
        }
      } else {
        if (hit)
          this.hitChild(child, point2);
      }
    }
  }
  hitChild(child, point2) {
    if (this.exclude && this.exclude.has(child))
      return;
    if (child.__hitWorld(point2))
      this.findList.push(child);
  }
  clear() {
    this.point = null;
    this.findList = null;
    this.exclude = null;
  }
  destroy() {
    this.clear();
  }
}

class Selector {
  constructor(target, userConfig) {
    this.config = {};
    this.innerIdMap = {};
    this.idMap = {};
    this.methods = {
      id: (leaf, name) => leaf.id === name ? this.idMap[name] = leaf : 0,
      innerId: (leaf, innerId) => leaf.innerId === innerId ? this.innerIdMap[innerId] = leaf : 0,
      className: (leaf, name) => leaf.className === name ? 1 : 0,
      tag: (leaf, name) => leaf.__tag === name ? 1 : 0
    };
    this.target = target;
    if (userConfig)
      this.config = DataHelper.default(userConfig, this.config);
    this.pather = new Pather(target, this);
    this.__listenEvents();
  }
  getByPoint(hitPoint, hitRadius, options) {
    if (Platform.name === "node")
      this.target.emit(LayoutEvent.CHECK_UPDATE);
    return this.pather.getByPoint(hitPoint, hitRadius, options);
  }
  getBy(condition, branch, one, options) {
    switch (typeof condition) {
      case "number":
        const leaf = this.getByInnerId(condition, branch);
        return one ? leaf : leaf ? [leaf] : [];
      case "string":
        switch (condition[0]) {
          case "#":
            const leaf2 = this.getById(condition.substring(1), branch);
            return one ? leaf2 : leaf2 ? [leaf2] : [];
          case ".":
            return this.getByMethod(this.methods.className, branch, one, condition.substring(1));
          default:
            return this.getByMethod(this.methods.tag, branch, one, condition);
        }
      case "function":
        return this.getByMethod(condition, branch, one, options);
    }
  }
  getByInnerId(innerId, branch) {
    const cache = this.innerIdMap[innerId];
    if (cache)
      return cache;
    this.eachFind(this.toChildren(branch), this.methods.innerId, null, innerId);
    return this.findLeaf;
  }
  getById(id, branch) {
    const cache = this.idMap[id];
    if (cache && LeafHelper.hasParent(cache, branch || this.target))
      return cache;
    this.eachFind(this.toChildren(branch), this.methods.id, null, id);
    return this.findLeaf;
  }
  getByClassName(className, branch) {
    return this.getByMethod(this.methods.className, branch, false, className);
  }
  getByTag(tag, branch) {
    return this.getByMethod(this.methods.tag, branch, false, tag);
  }
  getByMethod(method, branch, one, options) {
    const list3 = one ? null : [];
    this.eachFind(this.toChildren(branch), method, list3, options);
    return list3 || this.findLeaf;
  }
  eachFind(children, method, list3, options) {
    let child;
    for (let i = 0, len = children.length;i < len; i++) {
      child = children[i];
      if (method(child, options)) {
        if (list3) {
          list3.push(child);
        } else {
          this.findLeaf = child;
          return;
        }
      }
      if (child.isBranch)
        this.eachFind(child.children, method, list3, options);
    }
  }
  toChildren(branch) {
    this.findLeaf = null;
    return [branch || this.target];
  }
  __onRemoveChild(event) {
    const { id, innerId } = event.child;
    if (this.idMap[id])
      delete this.idMap[id];
    if (this.innerIdMap[innerId])
      delete this.innerIdMap[innerId];
  }
  __checkIdChange(event) {
    if (event.attrName === "id") {
      const id = event.oldValue;
      if (this.idMap[id])
        delete this.idMap[id];
    }
  }
  __listenEvents() {
    this.__eventIds = [
      this.target.on_(ChildEvent.REMOVE, this.__onRemoveChild, this),
      this.target.on_(PropertyEvent.CHANGE, this.__checkIdChange, this)
    ];
  }
  __removeListenEvents() {
    this.target.off_(this.__eventIds);
    this.__eventIds.length = 0;
  }
  destroy() {
    if (this.__eventIds.length) {
      this.__removeListenEvents();
      this.pather.destroy();
      this.findLeaf = null;
      this.innerIdMap = {};
      this.idMap = {};
    }
  }
}
Object.assign(Creator, {
  watcher: (target, options) => new Watcher(target, options),
  layouter: (target, options) => new Layouter(target, options),
  renderer: (target, canvas, options) => new Renderer(target, canvas, options),
  selector: (target, options) => new Selector(target, options)
});
Platform.layout = Layouter.fullLayout;
var debug3 = Debug.get("LeaferCanvas");

class LeaferCanvas extends LeaferCanvasBase {
  init() {
    const { view } = this.config;
    view ? this.__createViewFrom(view) : this.__createView();
    const { style } = this.view;
    style.display || (style.display = "block");
    this.parentView = this.view.parentElement;
    if (Platform.syncDomFont && !this.parentView) {
      this.view.style.display = "none";
      document.body.appendChild(this.view);
    }
    this.__createContext();
    if (!this.autoLayout)
      this.resize(this.config);
  }
  set backgroundColor(color) {
    this.view.style.backgroundColor = color;
  }
  get backgroundColor() {
    return this.view.style.backgroundColor;
  }
  set hittable(hittable) {
    this.view.style.pointerEvents = hittable ? "auto" : "none";
  }
  get hittable() {
    return this.view.style.pointerEvents !== "none";
  }
  __createView() {
    this.view = document.createElement("canvas");
  }
  setCursor(cursor) {
    const list3 = [];
    this.eachCursor(cursor, list3);
    if (typeof list3[list3.length - 1] === "object")
      list3.push("default");
    this.view.style.cursor = list3.map((item) => typeof item === "object" ? `url(${item.url}) ${item.x || 0} ${item.y || 0}` : item).join(",");
  }
  eachCursor(cursor, list3, level = 0) {
    level++;
    if (cursor instanceof Array) {
      cursor.forEach((item) => this.eachCursor(item, list3, level));
    } else {
      const custom = typeof cursor === "string" && Cursor.get(cursor);
      if (custom && level < 2) {
        this.eachCursor(custom, list3, level);
      } else {
        list3.push(cursor);
      }
    }
  }
  __createViewFrom(inputView) {
    let find = typeof inputView === "string" ? document.getElementById(inputView) : inputView;
    if (find) {
      if (find instanceof HTMLCanvasElement) {
        this.view = find;
      } else {
        let parent = find;
        if (find === window || find === document) {
          const div = document.createElement("div");
          const { style } = div;
          style.position = "absolute";
          style.top = style.bottom = style.left = style.right = "0px";
          document.body.appendChild(div);
          parent = div;
        }
        this.__createView();
        const view = this.view;
        if (parent.hasChildNodes()) {
          const { style } = view;
          style.position = "absolute";
          style.top = style.left = "0px";
          parent.style.position || (parent.style.position = "relative");
        }
        parent.appendChild(view);
      }
    } else {
      debug3.error(`no id: ${inputView}`);
      this.__createView();
    }
  }
  updateViewSize() {
    const { width, height, pixelRatio } = this;
    const { style } = this.view;
    style.width = width + "px";
    style.height = height + "px";
    this.view.width = width * pixelRatio;
    this.view.height = height * pixelRatio;
  }
  updateClientBounds() {
    this.clientBounds = this.view.getBoundingClientRect();
  }
  startAutoLayout(autoBounds, listener) {
    this.autoBounds = autoBounds;
    this.resizeListener = listener;
    try {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.updateClientBounds();
        for (const entry of entries)
          this.checkAutoBounds(entry.contentRect);
      });
      const parent = this.parentView;
      if (parent) {
        this.resizeObserver.observe(parent);
        this.checkAutoBounds(parent.getBoundingClientRect());
      }
    } catch (_a) {
      this.imitateResizeObserver();
    }
  }
  imitateResizeObserver() {
    if (this.autoLayout) {
      if (this.parentView)
        this.checkAutoBounds(this.parentView.getBoundingClientRect());
      Platform.requestRender(this.imitateResizeObserver.bind(this));
    }
  }
  checkAutoBounds(parentSize) {
    const view = this.view;
    const { x, y, width, height } = this.autoBounds.getBoundsFrom(parentSize);
    if (width !== this.width || height !== this.height) {
      const { style } = view;
      const { pixelRatio } = this;
      style.marginLeft = x + "px";
      style.marginTop = y + "px";
      const size = { width, height, pixelRatio };
      const oldSize = {};
      DataHelper.copyAttrs(oldSize, this, canvasSizeAttrs);
      this.resize(size);
      if (this.width !== undefined)
        this.resizeListener(new ResizeEvent(size, oldSize));
    }
  }
  stopAutoLayout() {
    this.autoLayout = false;
    this.resizeListener = null;
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unrealCanvas() {
    if (!this.unreal && this.parentView) {
      const view = this.view;
      if (view)
        view.remove();
      this.view = this.parentView;
      this.unreal = true;
    }
  }
  destroy() {
    if (this.view) {
      this.stopAutoLayout();
      if (!this.unreal) {
        const view = this.view;
        if (view.parentElement)
          view.remove();
      }
      super.destroy();
    }
  }
}
canvasPatch(CanvasRenderingContext2D.prototype);
canvasPatch(Path2D.prototype);
var PointerEventHelper = {
  convert(e, local) {
    const base = InteractionHelper.getBase(e);
    const data = Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: e.width, height: e.height, pointerType: e.pointerType, pressure: e.pressure });
    if (data.pointerType === "pen") {
      data.tangentialPressure = e.tangentialPressure;
      data.tiltX = e.tiltX;
      data.tiltY = e.tiltY;
      data.twist = e.twist;
    }
    return data;
  },
  convertMouse(e, local) {
    const base = InteractionHelper.getBase(e);
    return Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: 1, height: 1, pointerType: "mouse", pressure: 0.5 });
  },
  convertTouch(e, local) {
    const touch = PointerEventHelper.getTouch(e);
    const base = InteractionHelper.getBase(e);
    return Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: 1, height: 1, pointerType: "touch", pressure: touch.force });
  },
  getTouch(e) {
    return e.targetTouches[0] || e.changedTouches[0];
  }
};
var WheelEventHelper = {
  getMove(e, config) {
    let { moveSpeed } = config;
    let { deltaX, deltaY } = e;
    if (e.shiftKey && !deltaX) {
      deltaX = deltaY;
      deltaY = 0;
    }
    if (deltaX > 50)
      deltaX = Math.max(50, deltaX / 3);
    if (deltaY > 50)
      deltaY = Math.max(50, deltaY / 3);
    return { x: -deltaX * moveSpeed * 2, y: -deltaY * moveSpeed * 2 };
  },
  getScale(e, config) {
    let zoom;
    let scale = 1;
    let { zoomMode, zoomSpeed } = config;
    const delta = e.deltaY || e.deltaX;
    if (zoomMode) {
      zoom = zoomMode === "mouse" ? true : !e.deltaX && (Platform.intWheelDeltaY ? Math.abs(delta) > 17 : Math.ceil(delta) !== delta);
      if (e.shiftKey || e.metaKey || e.ctrlKey)
        zoom = true;
    } else {
      zoom = !e.shiftKey && (e.metaKey || e.ctrlKey);
    }
    if (zoom) {
      zoomSpeed = MathHelper.within(zoomSpeed, 0, 1);
      const min2 = e.deltaY ? config.delta.y : config.delta.x;
      scale = 1 - delta / (min2 * 25 * (1 - zoomSpeed) + 10);
      if (scale < 0.5)
        scale = 0.5;
      if (scale >= 1.5)
        scale = 1.5;
    }
    return scale;
  }
};
var KeyEventHelper = {
  convert(e) {
    const base = InteractionHelper.getBase(e);
    const data = Object.assign(Object.assign({}, base), { code: e.code, key: e.key });
    return data;
  }
};
var { getMoveEventData: getMoveEventData2, getZoomEventData: getZoomEventData2, getRotateEventData: getRotateEventData2 } = InteractionHelper;

class Interaction extends InteractionBase {
  __listenEvents() {
    super.__listenEvents();
    const view = this.view = this.canvas.view;
    this.viewEvents = {
      pointerdown: this.onPointerDown,
      mousedown: this.onMouseDown,
      touchstart: this.onTouchStart,
      contextmenu: this.onContextMenu,
      wheel: this.onWheel,
      gesturestart: this.onGesturestart,
      gesturechange: this.onGesturechange,
      gestureend: this.onGestureend
    };
    this.windowEvents = {
      pointermove: this.onPointerMove,
      pointerup: this.onPointerUp,
      pointercancel: this.onPointerCancel,
      mousemove: this.onMouseMove,
      mouseup: this.onMouseUp,
      touchmove: this.onTouchMove,
      touchend: this.onTouchEnd,
      touchcancel: this.onTouchCancel,
      keydown: this.onKeyDown,
      keyup: this.onKeyUp,
      scroll: this.onScroll
    };
    const { viewEvents, windowEvents } = this;
    for (let name in viewEvents) {
      viewEvents[name] = viewEvents[name].bind(this);
      view.addEventListener(name, viewEvents[name]);
    }
    for (let name in windowEvents) {
      windowEvents[name] = windowEvents[name].bind(this);
      window.addEventListener(name, windowEvents[name]);
    }
  }
  __removeListenEvents() {
    super.__removeListenEvents();
    const { viewEvents, windowEvents } = this;
    for (let name in viewEvents) {
      this.view.removeEventListener(name, viewEvents[name]);
      this.viewEvents = {};
    }
    for (let name in windowEvents) {
      window.removeEventListener(name, windowEvents[name]);
      this.windowEvents = {};
    }
  }
  getLocal(p, updateClient) {
    if (updateClient)
      this.canvas.updateClientBounds();
    const { clientBounds } = this.canvas;
    return { x: p.clientX - clientBounds.x, y: p.clientY - clientBounds.y };
  }
  getTouches(touches) {
    const list3 = [];
    for (let i = 0, len = touches.length;i < len; i++) {
      list3.push(touches[i]);
    }
    return list3;
  }
  preventDefaultPointer(e) {
    const { pointer } = this.config;
    if (pointer.preventDefault)
      e.preventDefault();
  }
  preventDefaultWheel(e) {
    const { wheel } = this.config;
    if (wheel.preventDefault)
      e.preventDefault();
  }
  preventWindowPointer(e) {
    return !this.downData && e.target !== this.view;
  }
  onKeyDown(e) {
    this.keyDown(KeyEventHelper.convert(e));
  }
  onKeyUp(e) {
    this.keyUp(KeyEventHelper.convert(e));
  }
  onContextMenu(e) {
    this.menu(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onScroll() {
    this.canvas.updateClientBounds();
  }
  onPointerDown(e) {
    this.preventDefaultPointer(e);
    this.usePointer || (this.usePointer = true);
    if (this.useMultiTouch)
      return;
    this.pointerDown(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onPointerMove(e) {
    this.usePointer || (this.usePointer = true);
    if (this.useMultiTouch || this.preventWindowPointer(e))
      return;
    this.pointerMove(PointerEventHelper.convert(e, this.getLocal(e, true)));
  }
  onPointerUp(e) {
    if (this.downData)
      this.preventDefaultPointer(e);
    if (this.useMultiTouch || this.preventWindowPointer(e))
      return;
    this.pointerUp(PointerEventHelper.convert(e, this.getLocal(e)));
  }
  onPointerCancel() {
    if (this.useMultiTouch)
      return;
    this.pointerCancel();
  }
  onMouseDown(e) {
    this.preventDefaultPointer(e);
    if (this.useTouch || this.usePointer)
      return;
    this.pointerDown(PointerEventHelper.convertMouse(e, this.getLocal(e)));
  }
  onMouseMove(e) {
    if (this.useTouch || this.usePointer || this.preventWindowPointer(e))
      return;
    this.pointerMove(PointerEventHelper.convertMouse(e, this.getLocal(e, true)));
  }
  onMouseUp(e) {
    if (this.downData)
      this.preventDefaultPointer(e);
    if (this.useTouch || this.usePointer || this.preventWindowPointer(e))
      return;
    this.pointerUp(PointerEventHelper.convertMouse(e, this.getLocal(e)));
  }
  onMouseCancel() {
    if (this.useTouch || this.usePointer)
      return;
    this.pointerCancel();
  }
  onTouchStart(e) {
    e.preventDefault();
    this.multiTouchStart(e);
    if (this.usePointer)
      return;
    if (this.touchTimer) {
      window.clearTimeout(this.touchTimer);
      this.touchTimer = 0;
    }
    this.useTouch = true;
    const touch = PointerEventHelper.getTouch(e);
    this.pointerDown(PointerEventHelper.convertTouch(e, this.getLocal(touch, true)));
  }
  onTouchMove(e) {
    this.multiTouchMove(e);
    if (this.usePointer || this.preventWindowPointer(e))
      return;
    const touch = PointerEventHelper.getTouch(e);
    this.pointerMove(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
  }
  onTouchEnd(e) {
    this.multiTouchEnd();
    if (this.usePointer || this.preventWindowPointer(e))
      return;
    if (this.touchTimer)
      clearTimeout(this.touchTimer);
    this.touchTimer = setTimeout(() => {
      this.useTouch = false;
    }, 500);
    const touch = PointerEventHelper.getTouch(e);
    this.pointerUp(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
  }
  onTouchCancel() {
    if (this.usePointer)
      return;
    this.pointerCancel();
  }
  multiTouchStart(e) {
    this.useMultiTouch = e.touches.length >= 2;
    this.touches = this.useMultiTouch ? this.getTouches(e.touches) : undefined;
    if (this.useMultiTouch)
      this.pointerCancel();
  }
  multiTouchMove(e) {
    if (!this.useMultiTouch)
      return;
    if (e.touches.length > 1) {
      const touches = this.getTouches(e.touches);
      const list3 = this.getKeepTouchList(this.touches, touches);
      if (list3.length > 1) {
        this.multiTouch(InteractionHelper.getBase(e), list3);
        this.touches = touches;
      }
    }
  }
  multiTouchEnd() {
    this.touches = null;
    this.useMultiTouch = false;
    this.transformEnd();
  }
  getKeepTouchList(old, touches) {
    let to;
    const list3 = [];
    old.forEach((from) => {
      to = touches.find((touch) => touch.identifier === from.identifier);
      if (to)
        list3.push({ from: this.getLocal(from), to: this.getLocal(to) });
    });
    return list3;
  }
  getLocalTouchs(points) {
    return points.map((point2) => this.getLocal(point2));
  }
  onWheel(e) {
    this.preventDefaultWheel(e);
    const { wheel } = this.config;
    const scale = wheel.getScale ? wheel.getScale(e, wheel) : WheelEventHelper.getScale(e, wheel);
    const local = this.getLocal(e);
    const eventBase = InteractionHelper.getBase(e);
    scale !== 1 ? this.zoom(getZoomEventData2(local, scale, eventBase)) : this.move(getMoveEventData2(local, wheel.getMove ? wheel.getMove(e, wheel) : WheelEventHelper.getMove(e, wheel), eventBase));
  }
  onGesturestart(e) {
    this.preventDefaultWheel(e);
    this.lastGestureScale = 1;
    this.lastGestureRotation = 0;
  }
  onGesturechange(e) {
    this.preventDefaultWheel(e);
    const local = this.getLocal(e);
    const eventBase = InteractionHelper.getBase(e);
    const changeScale = e.scale / this.lastGestureScale;
    const changeAngle = e.rotation - this.lastGestureRotation;
    let { rotateSpeed } = this.config.wheel;
    rotateSpeed = MathHelper.within(rotateSpeed, 0, 1);
    this.zoom(getZoomEventData2(local, changeScale * changeScale, eventBase));
    this.rotate(getRotateEventData2(local, changeAngle / Math.PI * 180 * (rotateSpeed / 4 + 0.1), eventBase));
    this.lastGestureScale = e.scale;
    this.lastGestureRotation = e.rotation;
  }
  onGestureend(e) {
    this.preventDefaultWheel(e);
    this.transformEnd();
  }
  destroy() {
    if (this.view) {
      super.destroy();
      this.view = null;
      this.touches = null;
    }
  }
}
var { mineType, fileType } = FileHelper;
Object.assign(Creator, {
  canvas: (options, manager) => new LeaferCanvas(options, manager),
  image: (options) => new LeaferImage(options),
  hitCanvas: (options, manager) => new LeaferCanvas(options, manager),
  interaction: (target, canvas, selector, options) => new Interaction(target, canvas, selector, options)
});
Platform.name = "web";
Platform.isMobile = ("ontouchstart" in window);
Platform.requestRender = function(render) {
  window.requestAnimationFrame(render);
};
Platform.devicePixelRatio = devicePixelRatio;
Platform.realtimeLayout = true;
var { userAgent } = navigator;
if (userAgent.indexOf("Firefox") > -1) {
  Platform.conicGradientRotate90 = true;
  Platform.intWheelDeltaY = true;
  Platform.syncDomFont = true;
} else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
  Platform.fullImageShadow = true;
}
if (userAgent.indexOf("Windows") > -1) {
  Platform.os = "Windows";
  Platform.intWheelDeltaY = true;
} else if (userAgent.indexOf("Mac") > -1) {
  Platform.os = "Mac";
} else if (userAgent.indexOf("Linux") > -1) {
  Platform.os = "Linux";
}
var { get: get$4, rotateOfOuter: rotateOfOuter$2, translate: translate$1, scaleOfOuter: scaleOfOuter$2, scale: scaleHelper$1, rotate: rotate2 } = MatrixHelper;
var { get: get$3, translate } = MatrixHelper;
var { get: get$2, scale: scaleHelper, copy: copy$12 } = MatrixHelper;
var { getSpread, getOuterOf, getByMove, getIntersectData } = BoundsHelper;
var defaultFrom$2 = { x: 0.5, y: 0 };
var defaultTo$2 = { x: 0.5, y: 1 };
var { set: set$1, getAngle: getAngle$1, getDistance: getDistance$1 } = PointHelper;
var { get: get$1, rotateOfOuter: rotateOfOuter$1, scaleOfOuter: scaleOfOuter$1 } = MatrixHelper;
var defaultFrom$1 = { x: 0.5, y: 0.5 };
var defaultTo$1 = { x: 0.5, y: 1 };
var realFrom$1 = {};
var realTo$1 = {};
var { set: set2, getAngle: getAngle2, getDistance: getDistance2 } = PointHelper;
var { get: get2, rotateOfOuter: rotateOfOuter2, scaleOfOuter: scaleOfOuter2 } = MatrixHelper;
var defaultFrom = { x: 0.5, y: 0.5 };
var defaultTo = { x: 0.5, y: 1 };
var realFrom = {};
var realTo = {};
var recycleMap;
var UIPaint = Object.freeze({
  __proto__: null,
  compute,
  drawTextStroke,
  fill,
  fillText,
  fills,
  recycleImage,
  shape,
  stroke,
  strokeText,
  strokes
});
var { copy: copy3, toOffsetOutBounds: toOffsetOutBounds$1 } = BoundsHelper;
var tempBounds = {};
var offsetOutBounds$1 = {};
var { toOffsetOutBounds } = BoundsHelper;
var offsetOutBounds = {};
var UIEffect = Object.freeze({
  __proto__: null,
  blur,
  innerShadow,
  shadow
});
var money = "\xA5\uFFE5\uFF04\u20AC\xA3\uFFE1\xA2\uFFE0";
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
var langBefore = "\u300A\uFF08\u300C\u3008\u300E\u3016\u3010\u3014\uFF5B\u250C\uFF1C\u2018\u201C\uFF1D" + money;
var langAfter = "\u300B\uFF09\u300D\u3009\u300F\u3017\u3011\u3015\uFF5D\u2510\uFF1E\u2019\u201D\uFF01\uFF1F\uFF0C\u3001\u3002\uFF1A\uFF1B\u2030";
var langSymbol = "\u226E\u226F\u2248\u2260\uFF1D\u2026";
var langBreak$1 = "\u2014\uFF0F\uFF5E\uFF5C\u2506\xB7";
var beforeChar = '{[(<\'"' + langBefore;
var afterChar = '>)]}%!?,.:;\'"' + langAfter;
var symbolChar = afterChar + "_#~&*+\\=|" + langSymbol;
var breakChar = "- " + langBreak$1;
var cjkRangeList = [
  [19968, 40959],
  [13312, 19903],
  [131072, 173791],
  [173824, 177983],
  [177984, 178207],
  [178208, 183983],
  [183984, 191471],
  [196608, 201551],
  [201552, 205743],
  [11904, 12031],
  [12032, 12255],
  [12272, 12287],
  [12288, 12351],
  [12736, 12783],
  [12800, 13055],
  [13056, 13311],
  [63744, 64255],
  [65072, 65103],
  [127488, 127743],
  [194560, 195103]
];
var cjkReg = new RegExp(cjkRangeList.map(([start, end]) => `[\\u${start.toString(16)}-\\u${end.toString(16)}]`).join("|"));
var letterMap = mapChar(letter);
var beforeMap = mapChar(beforeChar);
var afterMap = mapChar(afterChar);
var symbolMap = mapChar(symbolChar);
var breakMap = mapChar(breakChar);
var CharType;
(function(CharType2) {
  CharType2[CharType2["Letter"] = 0] = "Letter";
  CharType2[CharType2["Single"] = 1] = "Single";
  CharType2[CharType2["Before"] = 2] = "Before";
  CharType2[CharType2["After"] = 3] = "After";
  CharType2[CharType2["Symbol"] = 4] = "Symbol";
  CharType2[CharType2["Break"] = 5] = "Break";
})(CharType || (CharType = {}));
var { Letter: Letter$1, Single: Single$1, Before: Before$1, After: After$1, Symbol: Symbol$1, Break: Break$1 } = CharType;
var TextRowHelper = {
  trimRight(row) {
    const { words } = row;
    let trimRight = 0, len = words.length, char;
    for (let i = len - 1;i > -1; i--) {
      char = words[i].data[0];
      if (char.char === " ") {
        trimRight++;
        row.width -= char.width;
      } else {
        break;
      }
    }
    if (trimRight)
      words.splice(len - trimRight, trimRight);
  }
};
var { trimRight } = TextRowHelper;
var { Letter, Single, Before, After, Symbol, Break } = CharType;
var word;
var row;
var wordWidth;
var rowWidth;
var realWidth;
var char;
var charWidth;
var startCharSize;
var charSize;
var charType;
var lastCharType;
var langBreak;
var afterBreak;
var paraStart;
var textDrawData;
var rows = [];
var bounds2;
var CharMode = 0;
var WordMode = 1;
var TextMode = 2;
var TextConvert2 = {
  getDrawData(content, style) {
    if (typeof content !== "string")
      content = String(content);
    let x = 0, y = 0;
    let width = style.__getInput("width") || 0;
    let height = style.__getInput("height") || 0;
    const { textDecoration, __font, padding } = style;
    if (padding) {
      const [top, right2, bottom2, left] = MathHelper.fourNumber(padding);
      if (width) {
        x = left;
        width -= right2 + left;
      }
      if (height) {
        y = top;
        height -= top + bottom2;
      }
    }
    const drawData = {
      bounds: { x, y, width, height },
      rows: [],
      paraNumber: 0,
      font: Platform.canvas.font = __font
    };
    createRows(drawData, content, style);
    layoutText(drawData, style);
    layoutChar(drawData, style, width);
    if (drawData.overflow)
      clipText(drawData, style);
    if (textDecoration !== "none")
      decorationText(drawData, style);
    return drawData;
  }
};
var ColorConvert2 = {
  string(color, opacity) {
    if (typeof color === "string")
      return color;
    let a2 = color.a === undefined ? 1 : color.a;
    if (opacity)
      a2 *= opacity;
    const rgb = color.r + "," + color.g + "," + color.b;
    return a2 === 1 ? "rgb(" + rgb + ")" : "rgba(" + rgb + "," + a2 + ")";
  }
};
var Export2 = {
  export(leaf, filename, options) {
    return addTask((success) => new Promise((resolve) => {
      const { leafer } = leaf;
      if (leafer) {
        leafer.waitViewCompleted(() => __awaiter2(this, undefined, undefined, function* () {
          let quality, blob;
          let { canvas } = leafer;
          let { unreal } = canvas;
          if (unreal) {
            canvas = canvas.getSameCanvas();
            canvas.backgroundColor = leafer.config.fill;
            leafer.__render(canvas, {});
          }
          switch (typeof options) {
            case "object":
              if (options.quality)
                quality = options.quality;
              if (options.blob)
                blob = true;
              break;
            case "number":
              quality = options;
              break;
            case "boolean":
              blob = options;
          }
          let data;
          if (filename.includes(".")) {
            data = yield canvas.saveAs(filename, quality);
          } else if (blob) {
            data = yield canvas.toBlob(filename, quality);
          } else {
            data = yield canvas.toDataURL(filename, quality);
          }
          success({ data });
          resolve();
          if (unreal)
            canvas.recycle();
        }));
      } else {
        success({ data: false });
        resolve();
      }
    }));
  }
};
var tasker;
Object.assign(Paint, UIPaint);
Object.assign(Effect, UIEffect);
Object.assign(TextConvert, TextConvert2);
Object.assign(ColorConvert, ColorConvert2);
Object.assign(Export, Export2);
useCanvas();

// node_modules/rescript/lib/es6/caml_option.js
var some = function(x) {
  if (x === undefined) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
};
var valFromOption = function(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
};

// src/dragon.bs.js
var appname = function(param) {
  return "my name is dragon";
};
var fillx = function(x1) {
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
};
var updatePosition = function(param) {
  dragonState.y = dragonState.y + floor_int(dragonState.vy) | 0;
  dragonState.vy = dragonState.vy + dragonState.ay;
  if (dragonState.y >= dragonState.y0) {
    dragonState.y = dragonState.y0;
    dragonState.vy = 0;
    dragonState.state = {
      TAG: 0,
      _0: 2
    };
    return;
  }
};
var updateDragon = function(param) {
  var ind = dragonState.state;
  switch (ind.TAG | 0) {
    case 1:
      updatePosition(undefined);
      dragonSoulRect.y = dragonState.y;
      dragonSoulRect.fill = fillContainer[ind._0];
      return;
    case 0:
    case 2:
      dragonSoulRect.fill = fillContainer[ind._0];
      return;
  }
};
var push = function(ct, cor) {
  var f_offset = {
    x: -cor.x | 0,
    y: -cor.y | 0
  };
  var f = {
    type: "image",
    url: "./src/dragon.png",
    mode: "clip",
    offset: f_offset
  };
  ct.push(f);
};
var updateTree = function(param) {
  if (!treeStateDate.isStart) {
    return;
  }
  treeStateDate.x1 = treeStateDate.x1 + floor_int(treeStateDate.vx) | 0;
  treeStateDate.x2 = treeStateDate.x2 + floor_int(treeStateDate.vx) | 0;
  if (treeStateDate.x1 < -10) {
    treeStateDate.passSmall = treeStateDate.passSmall + 1 | 0;
    var w = 600;
    var width = w !== undefined ? w : 600;
    treeStateDate.x1 = width + random_int(0, 500) | 0;
    if (treeStateDate.x1 > (treeStateDate.x2 - 10 | 0) && treeStateDate.x1 < (treeStateDate.x2 + 30 | 0)) {
      treeStateDate.x1 = (treeStateDate.x2 + 30 | 0) + random_int(0, 500) | 0;
    }
  }
  if (treeStateDate.x2 < -10) {
    treeStateDate.passLarge = treeStateDate.passLarge + 1 | 0;
    var w$1 = 600;
    var width$1 = w$1 !== undefined ? w$1 : 600;
    treeStateDate.x2 = width$1 + random_int(0, 500) | 0;
    if (treeStateDate.x2 > (treeStateDate.x1 - 10 | 0) && treeStateDate.x2 < (treeStateDate.x1 + 30 | 0)) {
      treeStateDate.x2 = (treeStateDate.x1 + 30 | 0) + random_int(0, 500) | 0;
    }
  }
  gameStateDate.scoreNow = Math.imul(treeStateDate.passLarge, 20) + Math.imul(treeStateDate.passSmall, 10) | 0;
  treeRectSmall.x = treeStateDate.x1;
  treeRectLarge.x = treeStateDate.x2;
};
var updateRoad = function(param) {
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
    return;
  }
};
var updateTextNow = function(param) {
  textScoreNow.text = "\u5F53\u524D\u5F97\u5206\uFF1A" + gameStateDate.scoreNow.toString();
};
var updateTextMax = function(param) {
  textScoreMax.text = "\u6700\u9AD8\u5F97\u5206\uFF1A" + gameStateDate.scoreMax.toString();
};
var testDead = function(param) {
  var test1 = Math.abs(dragonState.x0 - treeStateDate.x1 | 0) < 18 && Math.abs(dragonState.y - treeStateDate.y1 | 0) < 30;
  var test2 = Math.abs(dragonState.x0 - treeStateDate.x2 | 0) < 20 && Math.abs(dragonState.y - treeStateDate.y2 | 0) < 40;
  if (test1) {
    return true;
  } else {
    return test2;
  }
};
var gameover = function(param) {
  console.log("Dead!");
  treeStateDate.passLarge = 0;
  treeStateDate.passSmall = 0;
  treeStateDate.x1 = random_int(500, 600);
  treeStateDate.x2 = random_int(630, 800);
  if (gameStateDate.scoreNow > gameStateDate.scoreMax) {
    gameStateDate.scoreMax = gameStateDate.scoreNow;
    updateTextMax(undefined);
  }
  gameStateDate.scoreNow = 0;
  var ev = gameStateDate.gameEvent;
  if (ev !== undefined) {
    gameStateDate.gameEvent = undefined;
    leafer.off_(valFromOption(ev));
    return;
  }
};
var gameloop = function(param) {
  updateDragon(undefined);
  updateRoad(undefined);
  updateTree(undefined);
  updateTextNow(undefined);
  if (testDead(undefined)) {
    return gameover(undefined);
  }
};
var jumpTask = function(param) {
  dragonState.vy = -6;
  dragonState.state = {
    TAG: 1,
    _0: 0
  };
  console.log("Time up!");
};
var captureCommand = function(param) {
  var match = dragonState.state;
  switch (match.TAG | 0) {
    case 0:
      return jumpTask(undefined);
    case 1:
      return;
    case 2:
      dragonState.state = {
        TAG: 0,
        _0: 2
      };
      return;
  }
};
var gameStateDate = {
  scoreNow: 0,
  scoreMax: 0
};
var leaferJsConfig_width = 600;
var leaferJsConfig_height = 400;
var leaferJsConfig = {
  view: window,
  width: leaferJsConfig_width,
  height: leaferJsConfig_height
};
var leafer = new Leafer(leaferJsConfig);
var x_offset = [
  850,
  894,
  938,
  982,
  1026,
  1070
];
var fillContainer = [];
x_offset.forEach(fillx);
fillContainer.forEach(function(x) {
  console.log(x);
});
var dragonState = {
  y: 168,
  vy: 0,
  state: {
    TAG: 2,
    _0: 5
  },
  ay: 0.2,
  y0: 166,
  x0: 20
};
var dragonSoulRect = new Rect({
  x: dragonState.x0,
  y: dragonState.y0,
  width: 39,
  height: 56,
  fill: fillContainer[0],
  draggable: false
});
leafer.add(dragonSoulRect);
setInterval(function(param) {
  var ind = dragonState.state;
  switch (ind.TAG | 0) {
    case 0:
      var v2 = ind._0 === 2 ? 3 : 2;
      dragonState.state = {
        TAG: 0,
        _0: v2
      };
      return;
    case 1:
    case 2:
      return;
  }
}, 200);
var offsetObstructSmall = [
  {
    x: 262,
    y: 2
  },
  {
    x: 292,
    y: 2
  }
];
var offsetObstructLarge = [
  {
    x: 331,
    y: 2
  },
  {
    x: 351,
    y: 2
  }
];
var fillContainerTreeSmall = [];
var fillContainerTreeLarge = [];
offsetObstructSmall.forEach(function(cor) {
  push(fillContainerTreeSmall, cor);
});
offsetObstructLarge.forEach(function(param) {
  return push(fillContainerTreeLarge, param);
});
var treeStateDate = {
  x1: 300,
  y1: 182,
  x2: 400,
  y2: 168,
  isStart: false,
  vx: 0,
  passSmall: 0,
  passLarge: 0
};
var treeRectSmall = new Rect({
  x: treeStateDate.x1,
  y: treeStateDate.y1,
  width: 18,
  height: 40,
  fill: fillContainerTreeSmall[0],
  draggable: false
});
var treeRectLarge = new Rect({
  x: treeStateDate.x2,
  y: treeStateDate.y2,
  width: 25,
  height: 54,
  fill: fillContainerTreeLarge[0],
  draggable: false
});
leafer.add(treeRectSmall);
leafer.add(treeRectLarge);
treeStateDate.vx = -3;
treeStateDate.isStart = true;
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
var road_01 = new Rect({
  x: 0,
  y: 200,
  width: 1200,
  height: 12,
  fill: roadSoul,
  draggable: false
});
var road_02 = new Rect({
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
var textScoreNow = new Text({
  fill: "rgb(50,50,70)",
  text: "",
  x: 100,
  y: 30
});
var textScoreMax = new Text({
  fill: "rgb(50,50,70)",
  text: "",
  x: 100,
  y: 45
});
leafer.add(textScoreNow);
leafer.add(textScoreMax);
textScoreNow.text = "Game Not Start! \u6309\u8FD9\u4E2A\u952E\u5F00\u59CB----->";
updateTextMax(undefined);
var fillButton_offset = {
  x: 2,
  y: 2
};
var fillButton = {
  type: "image",
  url: "./src/dragon.png",
  mode: "clip",
  offset: fillButton_offset
};
var button = new Rect({
  x: 300,
  y: 20,
  width: 40,
  height: 40,
  fill: fillButton,
  draggable: false
});
leafer.add(button);
button.on(PointerEvent.DOWN, function(param) {
  var ev = gameStateDate.gameEvent;
  if (ev !== undefined) {
    leafer.off_(valFromOption(ev));
    gameStateDate.gameEvent = undefined;
  } else {
    gameStateDate.gameEvent = some(leafer.on_(AnimateEvent.FRAME, gameloop));
  }
});
leafer.on_(PointerEvent.DOWN, function(param) {
  captureCommand(undefined);
});

// src/index.js
console.log(appname());
