
/**
 * @method setItem
 * @param item - item to be set
 * @param val  - value to be set
 */
function setItem(item, val) {
  try {
    window.localStorage.setItem(item, val);
  }
  catch (err) {
    console.log(err);
  }
}

/**
 * @method getItem
 * @param item - item to be checked
 */
function getItem(item) {
  try {
    window.localStorage.getItem(item);
  }
  catch (err) {
    console.log(err);
  }
}

export {
  setItem,
  getItem
}

