# Cls-Merge

A utility for constructing `className` strings conditionally.

## Install

```bash
$ npm install cls-merge
```

## Usage

```js
import clsMerge from "cls-merge";

clsMerge("hoge", true && "fuga", "piyo");
// result: "hoge fuga piyo"

clsMerge(["hoge", "fuga", "piyo"]);
// result: "hoge fuga piyo"

clsMerge("hoge", ["fuga", ["piyo"]], "foo", "bar", true ? null : "baz");
// result: "hoge fuga piyo foo bar"
```
