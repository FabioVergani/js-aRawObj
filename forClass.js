var e;
//
const w=window,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
O=w.Object,Create=O.create,
aRawObj=aBindedCall(Create,null,null);
//----------------------------------------------
var MyClass=aRawObj({
  property1:{value:true,writable:true},
  property2:{value:"Hello"}
});
console.dir(e);
