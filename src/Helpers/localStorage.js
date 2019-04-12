/**
 * @constructor
 */
var Storage = function () {
  this.storage = window.localStorage
};

/**
 * @method validate
 * @return @object 
 */
Storage.prototype.validate = function (obj, val) {
  var args = [].call.arguments;
  for (let i in args) {
    if (typeof args[i] === "undefined" || typeof obj === null) {
      return;
    };
  };
}
/**
 * @method getItem
 * @param item - item to be checked
 */
Storage.prototype.getItem = function (item) {
  if (this.validate(item)) {
    return this.storage.getItem(item)
  };
};

/**
 * @method setItem
 * @param item - item to be set
 * @param val  - value to be set
 */
Storage.prototype.setItem = function (item, val) {
  if (this.validate(item, val)) {
    this.storage.setItem(item, val);
  }
}
