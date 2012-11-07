
# set

  Generic Set container

## Installation

```
$ component install component/set
```

## Example

```js
var Set = require('set');
var set = new Set;

set.add('foo');
set.add('foo');
set.add({ some: 'object' });
set.remove('foo');

set.values();
// => [{ some: 'object' }]
```

## Equality

  Set supports an `.equals(other)` method when present,
  for example you may then add two separate `User` instances
  that are identified as being the same via their name:

```js
User.prototype.equals = function(user){
  return this.name == user.name;
};
```

## API

### Set()

  Create a new `Set`.

### Set(values)

  Create a new `Set` with `values` array. Duplicates will be removed.

### Set#add(value)

  Add `value` to the set.

### Set#remove(value)

  Remove `value` from the set, returning __true__ when present,
  otherwise returning __false__.

### Set#has(value)

  Check if `value` is present.

### Set#values()

  Return an array of values.

  Aliased as `.toJSON()`.

### Set#each(fn)

  Iterate each member and invoke `fn(val)`.

### Set#size()

  Return the set size.

### Set#clear()

  Empty the set and return the old values array.

### Set#isEmpty()

  Check if the set is empty.

### Set#union(set)

  Perform a union with `set` and return a new `Set`.

### Set#intersect(set)

  Perform an intersection with `set` and return a new `Set`.

## License 

  MIT