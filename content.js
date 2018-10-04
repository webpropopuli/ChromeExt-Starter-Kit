async function myFn() {
  const nodes = await document.getElementsByClassName(
    "_42ft _4jy0 _3-99 _4jy3 _517h _51sy"
  );

  const len = nodes.length;
  //window.alert(`found: ${len}`);

  let numberToDelete = Math.min(3, len); // don't delete more than we have. Don't want to bring down Facebook...

  if (len) {
    // getElementsByClassName returns a 'live' node list so nodes[0] is always the top item
    for (let x = 0; x < numberToDelete; x++) {
      await nodes[0].click();
    }
  }
}

myFn();
