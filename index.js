
/**
 * Module dependencies.
 */

var indexof = require('indexof');

/**
 * Expose `Set`.
 */

module.exports = Set;

/**
 * Initialize a new `Set` with optional `vals`
 *
 * @param {Array} vals
 * @api public
 */

function Set(vals) {
  if (!(this instanceof Set)) return new Set(vals);
  this.vals = [];
  if (vals) {
    for (var i = 0; i < vals.length; ++i) {
      this.add(vals[i]);
    }
  }
}

/**
 * Add `val`.
 *
 * @param {Mixed} val
 * @api public
 */

Set.prototype.add = function(val){
  if (this.has(val)) return;
  this.vals.push(val);
};

/**
 * Check if this set has `val`.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api public
 */

Set.prototype.has = function(val){
  return !! ~indexof(this.vals, val);
};

/**
 * Return the values as an array.
 *
 * @return {Array}
 * @api public
 */

Set.prototype.values = function(){
  return this.vals;
};

/**
 * Return the set size.
 *
 * @return {Number}
 * @api public
 */

Set.prototype.size = function(){
  return this.vals.length;
};

/**
 * Empty the set and return old values.
 *
 * @return {Array}
 * @api public
 */

Set.prototype.empty = function(){
  var old = this.vals;
  this.vals = [];
  return old;
};

/**
 * Remove `val`, returning __true__ when present, otherwise __false__.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api public
 */

Set.prototype.remove = function(val){
  var i = indexof(this.vals, val);
  if (~i) this.vals.splice(i, 1);
  return !! ~i;
};

/**
 * Perform a union on `set`.
 *
 * @param {Set} set
 * @return {Set} new set
 * @api public
 */

Set.prototype.union = function(set){
  var ret = new Set;
  var a = this.vals;
  var b = set.vals;
  for (var i = 0; i < a.length; ++i) ret.add(a[i]);
  for (var i = 0; i < b.length; ++i) ret.add(b[i]);
  return ret;
};

/**
 * Perform an intersection on `set`.
 *
 * @param {Set} set
 * @return {Set} new set
 * @api public
 */

Set.prototype.intersect = function(set){
  var ret = new Set;
  var a = this.vals;
  var b = set.vals;

  for (var i = 0; i < a.length; ++i) {
    if (set.has(a[i])) {
      ret.add(a[i]);
    }
  }

  for (var i = 0; i < b.length; ++i) {
    if (this.has(b[i])) {
      ret.add(b[i]);
    }
  }

  return ret;
};

