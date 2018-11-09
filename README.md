# @codhek/dashenv

![dashenv](https://img.shields.io/badge/npm-v1.1.0-blue.svg)


```
npm i dashenv
```

### How to use ?
#
Save your environment variables in a file `-env`, pass your `path` to the `-env` file and also a `callback` function to get your environment variables.
#### Your `-env`  file :
#
```
ENDPOINT=http://localhost:3000/graphql
SERVER=development
```
#### Use it as follows in the file you want to use your environment variables :
#
```
const extract = require('dashenv');

const path = './env_vars/-env';
extract(path, function(env) {
  console.log(env["ENDPOINT"]);
  console.log(env["SERVER"]);
});
```
