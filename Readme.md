
# set

  Generic Set container

## Installation

```
$ component install component/set
```

## Example

```js
var set = require('set');
set.add('foo');
set.add('foo');
set.add({ some: 'object' });
set.remove('foo');

set.values();
// => [{ some: 'object' }]
```

## API

## License 

  MIT