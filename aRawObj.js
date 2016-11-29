var e;
//
const w=window,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
O=w.Object,
Create=O.create,
aRawObj=aBindedCall(Create,null,null);
//
console.dir(aRawObj());
