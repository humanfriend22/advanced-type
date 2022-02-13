# advanced-type

I needed something more precise than JavaScript's ```typeof``` keyword so I created this.

### Install:

#### NPM
```
npm install advanced-type
```

#### Browser
```
<script src="https://cdn.jsdelivr.net/npm/advanced-type@1.1.0/browser.js"></script>
```

### Usage
```
const type = require('advanced-type');

console.log(type(PARAM));
```
while replacing ```PARAM``` with any value.

#### To get the ```type``` of multiple items, use the ```multiple``` function:
```
const type = require('advanced-type');

const items = [1, {}, [], NaN, "hello"];

console.log(type.multiple(items)); // ['number', 'object', 'array' 'NaN', 'string']
```


#### For multiple items, one single data type can be forced. Use the output of ```type()``` is recommended:
```
const type = require('advanced-type');

const items1 = [1, {}, [], NaN, "hello"];
const items2 = [5, 4, 3, 8, 10];

console.log(type.multiple(items1), type('')); // [false, false, false, false, true]

console.log(type.multiple(items2), type(0)); // [true, true, true, true, true]
```