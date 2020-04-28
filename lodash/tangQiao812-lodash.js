var tangQiao812 = {
  isNull： function(val) {
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
  }
}
