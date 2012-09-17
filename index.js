
/**
 * Module dependencies.
 */

var indexof = require('indexof');

/**
 * Expose `Set`.
 */

module.exports = Set;

/**
 * Initialize a new `Set`.
 *
 * @api public
 */

function Set() {
  if (!(this instanceof Set)) return new Set;
  this.vals = [];
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

Set.prototype.length = function(){
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
