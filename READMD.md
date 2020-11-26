# trim-null



null is unfriendly to destructuring assignment in Javascript, use trim-null to delete the entry which value is null in an object or transform to undefined if in an array. 



## install

```shell
$ yarn add trim-null
```

or 

```shell
$ npm install trim-null
```



## usage

```js
import trimNull from 'trim-null';

trimNull([null, {a: null}]) // [undefined, {}]
```

