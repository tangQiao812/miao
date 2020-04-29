var tangqiao812 = {
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
  fill: function (ary, val, start = 0, end = ary.length) {
    for (var i = satrt; i <= end; i++) {
      ary[i] = val
    }
    return ary
  },
  find: function () {

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
  indexOf: function (ary, val, index = 0) {
    for (i = index; i < ary.length; i++) {
      if (ary[i] == val) {
        return i
      } else {
        return -1
      }
    }
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
  pullAt: function (ary, ...val) {//arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例
    var other = []
    for (let i = 0, len = val.length; i < len; i++) {
      other.push(ary[val[i]])
    }
    return other
  },
  divide: function (first, second) {
    return first / second
  },
  add: function (first, second) {
    return first + second
  },
  identity: function (val) {
    return arguments[0]
  },
  size: function (collection) {//判断变量是数组还是对象，使用Object.prototype.toString.call()，
    //兼容性好，切勿使用typeof来判断对象或者数组，因为typeof得到的都是object；
    if (Object.prototype.toString.call(collection) === "[object Array]") {
      return collection.length
    } else {
      var arr = Object.keys(collection)//Object.key可以获取到对象中属性名到集合
      return arr.length
    }
  },

}
