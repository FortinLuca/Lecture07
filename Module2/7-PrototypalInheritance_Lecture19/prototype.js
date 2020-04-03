var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("Walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD -  child.obj.value: ", child.obj.objValue);
console.log("PARENT -  parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);
