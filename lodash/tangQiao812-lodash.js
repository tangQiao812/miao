var tangqiao812 = {
  add: function (augend, addend) {
    return augend + addend
  },
  multiply: function (augend, addend) {
    return augend * addend
  },

  isNull: function (val) {
    return val === null ? true : false
  },
  isNaN: function (val) {
    return val !== val ? true : false
  },
  concat: function (ary, val) {
    var other = null

    for (i = 1; i < arguments.length; i++) {
      ary.push(arguments[i])
    }
    return other = ary
  },
  compact: function (ary) {
    var newAry = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        newAry.push(ary[i])
      }
    }
    return newAry
  },
  difference: function (ary1, ary2) {
    for (var i = 0; i < ary1.length; i++) {
      for (var j = 0; j < ary2.length; j++) {
        if (ary1[i] == ary2[j]) {
          ary1.splice(i, 1)
        }
      }
    }
    return ary1
  },
  defaults: function (object, ...sources) {//用Object.keys方法取出object中的属性名
    //遍历剩余参数参数的属性名，不相同的就增加到object中
    var keys = Object.keys(object)
    for (var i = 0; i < sources.length; i++) {
      if (Object.keys(sources[i]) !== keys) {
        object[Object.keys(sources[i])] = sources[i][Object.keys(sources[i])]
      } else {
        return
      }
      return object
    }

  },
  fill: function (ary, val, start = 0, end = ary.length) {
    for (var i = satrt; i <= end; i++) {
      ary[i] = val
    }
    return ary
  },
  find: function (collection, predicate, fromIndex = 0) {

  },
  gt: function (value, other) {
    if (value > other) {
      return true
    } else {
      return false
    }
  },
  gte: function (value, other) {
    if (value >= other) {
      return true
    } else {
      return false
    }
  },
  lt: function (value, other) {
    if (value < other) {
      return true
    } else {
      return false
    }
  },
  lte: function (value, other) {
    if (value <= other) {
      return true
    } else {
      return false
    }
  },

  head: function (ary) {
    return ary[0]
  },
  join: function (ary, sep = ',') {
    var a = nul
    for (i = 0; i < ary.length; i++) {
      for (j = 0; j < ary.length - 1; j++) {
        a += ary[i] + sep
      }
    }
    return a
  },
  last: function (ary) {
    return ary[ary.length - 1]
  },
  nth: function (ary, n = 0) {
    return n > 0 ? ary[n] : ary[ary.length + n]
  },
  first: function (ary) {
    return ary[0]
  },
  flaten: function (ary) {
    var a = []
    for (i = 0; i < ary.length; i++) {
      a.push(ary[i])
    }
    return a
  },
  initial: function (ary) {
    ary.pop()
    return ary
  },
  invert: function (object) {
    var map = {}
    for (var i in object) {
      map[object[i]] = i
    }
    return map
  },
  intersection: function (...array) {// for of遍历所有健值对的值
    var arrays = [];
    for (let i of array[0]) {
      for (let j = 1; j < array.length; j++) {
        if (array[j].includes(i)) {
          if (j == array.length - 1) {
            arrays.push(i);
          }
        } else {
          break;
        }
      }
    }
    return arrays;
  },
  indexOf: function (ary, val, index = 0) {
    for (i = index; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },
  lastIndexOf: function (ary, val, lastIndex = 0) {
    for (i = ary.length - 1; i >= 0; i--) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },
  chunk: function (ary, size = 1) {
    var arry = []
    for (var i = size; i <= ary.length; i = size) {
      arry.push(ary.splice(0, i))
    }
    if (ary.length !== 0) {
      arry.push(ary)
    } else {
      return arry
    }
  },
  drop: function (ary, n = 1) {
    return ary.slice(n)
  },
  max: function (ary) {
    if (ary == false) {
      return undefined
    }
    var maxnum = null
    for (var i = 0; i < ary.length; i++) {

      if (ary[i + 1] > ary[i]) {
        maxnum = ary[i + 1]
      } else {
        maxnum = ary[i]
      }
    }
    return maxnum

  },
  sum: function (ary) {
    var sum = null
    for (var i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  },
  min: function (ary) {
    var minnum = ary[0]
    for (var i = 0; i < ary.length; i++) {

      if (ary[i] < minnum) {
        minnum = ary[i]
      }
    }
    return minnum
  },
  mean: function (ary) {
    return tangqiao812.sum(ary) / ary.length
  },
  subtract: function (fist, second) {
    return first - second
  },
  omit: function (object, props) {
    var map = {}
    for (var k in object) {
      if (!props.includes(k)) {
        map[k] = object[k]
      }
    }
    return map

  },
  pick: function (object, props) {
    var map = {}
    for (var k in object) {
      if (props.includes(k)) {
        map[k] = object[k]
      }
    }
    return map
  },
  pullAt: function (ary, ...val) {//arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例
    var other = []
    for (let i = 0, len = val.length; i < len; i++) {
      other.push(ary[val[i]])
    }
    return other
  },
  pull: function (ary, ...val) {
    for (var i = 0; i < ary.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (ary[i] == arguments[j]) {
          ary.splice(i, 1)
          i--//原数组中删除元素后i需要减去1才能继续循环
        }
      }
    }
    return ary
  },
  pullAll: function (ary1, ary2) {
    for (var i = 0; i < ary1.length; i++) {
      for (var j = 0; j < ary2.length; j++) {
        if (ary1[i] == ary2[j]) {
          ary1.splice(i, 1)
        }
      }
    }
    return ary1
  },
  remove: function () {

  },
  reverse: function (ary) {
    let start = 0
    let end = ary.length - 1
    while (start <= end) {
      [ary[start], ary[end]] = [ary[end], ary[start]]//变量值交换
      start++
      end--
    }
    return ary
  },
  divide: function (first, second) {
    return first / second
  },
  identity: function (val) {
    return arguments[0]
  },
  size: function (collection) {//判断变量是数组还是对象，使用Object.prototype.toString.call()，
    //兼容性好，切勿使用typeof来判断对象或者数组，因为typeof得到的都是object；判断是不是数组Array.isArray（）
    if (Object.prototype.toString.call(collection) === "[object Array]") {
      return collection.length
    } else {
      var arr = Object.keys(collection)//Object.key可以获取到对象中属性名到集合
      return arr.length
    }
  },
  slice: function (ary, start = 0, end = ary.length) {
    var newAry = []
    for (var i = start; i <= end; i++) {
      newAry.push(ary[i])
    }
    return newAry
  },
  sortedIndex: function (ary, val) {

    for (var i = 0; i < ary.length; i++) {
      if (ary[i] < val && ary[i + 1] >= val) {
        return i + 1
      }
    }
  },
  sortedIndexOf: function (ary, val) {
    for (i = 0; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      }
    }
    return -1
  },
  tail: function (ary) {
    var newAry = []
    for (i = 1; i < ary.length; i++) {
      newAry.push(ary[i])
    }
    return newAry
  },
  take: function (ary, n = 1) {
    var newAry = []
    for (var i = 0; i < n; i++) {
      newAry.push(ary[i])
    }
    return newAry
  },
  takeRight: function (ary, n = 1) {
    var newAry = []
    for (var i = ary.length - 1; i > ary.length - 1 - n; i--) {
      newAry.push(ary[i])
    }
    return newAry
  },
  uniq: function (ary) {
    var map = {}
    var newAry = []
    for (var i = 0; i < ary.length; i++) {
      var c = ary[i]
      if (!(c in map)) {
        map[c] = 1
      } else {
        map[c]++
      }
    }
    for (var j in map) {//for of不能用于对象，for each in已经废弃
      if (map[j] == 1) {
        newAry.push(Number(j))
      }
    }
    return newAry
  },
  unzip: function (...ary) {
    var newAry = []
    for (var i = 0; i < ary.length; i++) {
      newAry.push(ary[i])
    }
    return newAry
  },
  without: function (ary, ...val) {

    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < val.length; j++) {
        if (ary[i] == val[j]) {
          ary.splice(i, 1)
        }
      }
    }
    return ary
  },
  zip: function (...ary) {

  },
  includes: function (collection, val, fromIndex) {
    if (Array.isArray(collection)) {
      for (var i = fromIndex; i < collection.length; i++) {
        if (collection[i] == val) {
          return i
        }
      }
      return -1

    }
  },
  sample: function (collection) {
    var newAry = []
    if (Array.isArray(collection)) {
      var n = Math.floor((Math.random() * collection.length) + 1);
      return collection[n]
    } else {
      for (var m in collection) {
        newAry.push(collection[m])
      }
      var j = Math.floor((Math.random() * newAry.length) + 1)
      return newAry[j]
    }
  },
  sampleSize: function (collection, n) {
    var newAry = []
    var newAry1 = []
    var newAry2 = []
    for (var i = 0; i < n; i++) {
      if (Array.isArray(collection)) {
        var n = Math.floor((Math.random() * collection.length) + 1);
        newAry1.push(collection[n])
      } else {
        for (var m in collection) {
          newAry.push(collection[m])
        }
        var j = Math.floor((Math.random() * newAry.length) + 1)
        newAry2.push(newAry[j])
      }
    }
    if (Array.isArray(collection)) {
      return newAry1
    } else {
      return newAry2
    }
  },
  shuffle: function (collection) {

  },
  //字符串
  camelCase: function (string) {
    var newStr = ''

  },
  //高阶函数
  before: function (n, func) {
    var i = 0
    var result
    return function (...args) {
      if (i <= n) {
        i++
        result = func(...args)
      }
      return result
    },
      after: function(n, func) {
        var i = 0
        return function (...args) {
          i++
          if (i < n) {
            return func(...args)
          }
        }
      }
  },
  ary: function (func, n = func.length) {
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },
  unary: function (func) {
    return function (arg) {
      return func(arg)
    }
  },
  flip: function (func) {
    return function (...args) {
      return func(...args.reverse())
    }
  },
  //扩展   function flip(func) {
  //     return function(...args) {
  //       return func(...args.reverse())
  //     }
  // }

  // parseInt2 = flip(parseInt)

  // parseInt3 = parseInt2.bind(null, 16)

  //   ;['1', '2', 'a'].map(unary(parseInt3))
  negate: function (func) {
    return function (...args) {
      return !func(...args)
    }
  },
  spread: function (func, start = 0) {
    return function (ary) {
      return func(...ary)
    }
  },
  bind: function (f, ...fixedArgs) { // [1,null,null,3]
    return function bound(...args) {//[7,8,9]
      var copy = fixedArgs.slice()
      var j = 0

      for (var i = 0; i < copy.length; i++) {
        if (copy[i] === null) {
          copy[i] = args[j++]
        }
      }
      while (j < args.length) {
        copy.push(args[j++])
      }

      return f(...copy)
    }
  },
  filter: function (ary, predicate) {

  },
  property：function(prop) {

    return get.bind(null, _, prop)

    return function (obj) {
      return obj[prop]
    }
  } ，
  forOwn: function (obj, action) {
    var hasOwn = Object.prototype.hasOwnProperty
      (for key in obj) {
        if (hasOwn.call(obj, key)) {
          action(obj[key], key, obj)
        }
      }
    return obj
  },

}

function Complex(real, imag) {
  this.real = real
  this.imag = imag
}
Complex.prototype.plus = function (c) {
  var real = this.real + c.real
  var imag = this.imag + c.imag
  return new Complex(real.imag)
}
Complex.prototype.minus = function (c) {
  var real = this.real + com.real
  var imag = this.
}
Complex.prototype.mul = function (c) {
  var real = this.real * c.real - this.imag * c.imag
  var imag = this.real * c.imag + this.imag * c.real
  return Complex(real, imag)
}
Complex.prototype. = function div(c) {
  var helper = new Complex(c.real, -c.imag)
  var down = c.mul(helper)
  var up = this.mul(helper)
  var real = up.real / down.real
  var imag = up.imag / down.imag
  return new Complex(real, imag)
}
