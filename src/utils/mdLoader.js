function reorganize(str) {
  var rules = {
    newline: /^\n+/,
    h1: /^# .*/,
    h2: /^## .*/,
    h3: /^### .*/,
    h4: /^#### .*/,
    h5: /^##### .*/,
    h5: /^###### .*/,
    item: /- .*\n$/
  }
  var cap, nodes = null;
  let currentContext = nodes;
  while(str) {
    if (cap = rules.newline.exec(str)) {
      str = str.substring(cap[0].length);
    }

    if (cap = rules.h1.exec(str)) {
      str = str.substring(cap[0].length)
      var pushObj = {
        label: cap[0],
      }
      if (nodes) {
        currentContext.children ? currentContext.children.push(pushObj) : currentContext.children = [pushObj]
      } else {
        nodes = [pushObj]
        currentContext = nodes[0]
      }
      currentContext = pushObj
    }

    if (cap = rules.h2.exec(str)) {
      str = str.substring(cap[0].length)
      var pushObj = {
        label: cap[0]
      }
      currentContext.children ? currentContext.children.push(pushObj) : currentContext.children = [pushObj]
      currentContext = pushObj
    }

    if (cap = rules.h3.exec(str)) {
      str = str.substring(cap[0].length)
      var pushObj = {
        label: cap[0]
      }
      currentContext.children ? currentContext.children.push(pushObj) : currentContext.children = [pushObj]
      currentContext = pushObj
    }
  }
  return nodes;
}

export default reorganize;
