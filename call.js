Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};
Function.prototype.call3 = function (context) {
  let context = context || window;
  context.fn = this;
  let args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  var res = eval("context.fn(" + args + ")");
  delete context.fn;
  return res;
};
Function.prototype.apply1 = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;
  var res;
  if (arr) {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    res = eval("context.fn(" + args + ")");
  } else {
    res = context.fn();
  }
  delete context.fn;
  return res;
};
Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }
  delete context.fn;
  return result;
};

Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () {};
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
Function.prototype.bind = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var args = Array.prototype.slice.call(arguments, 1);
  let self = this;
  var newFn = function () {};
  var banck = function () {
    var bindargs = args.concat(Array.prototype.slice.call(arguments));
    return self.apply(this instanceof newFn ? this : context, bindargs);
  };
  newFn.prototype = this.prototype;
  banck.prototype = new newFn();
  return banck;
};

function objectFactory() {
  var obj = new Object(),
    Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}

function newObj() {
  let obj = new Object();
  Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype
  let res = Constructor.apply(obj,arguments)
  return typeof res === 'object' ? res : obj
}

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
