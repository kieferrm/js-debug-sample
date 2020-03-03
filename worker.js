onmessage = function(e) {
  // You are now in the worker. Check out CALL STACK
  let result = e.data[0] * e.data[1];
  // @ts-ignore
  postMessage(result);
}
