/**
 * @constructor
 */
var Storage = function () {
  this.storage = window.localStorage
}

/**
 * @method getItem
 */
Storage.prototype.getItem = function (item) {
  if (typeof item !== "undefined") {
    return this.storage.getItem(item)
  }
  else
    return
}

/**
 * @method setItem
 */
Storage.prototype.setItem = function (item, val) {
  if (typeof item !== "undefined" && typeof val !== "undefined") {
    return this.storage.setItem(item, val);
  }
  else {
    reportError();
    return
  }
}


