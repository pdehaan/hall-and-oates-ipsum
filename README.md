# Hall and Oates Ipsum

... Because Lorem Ipsum wasn't interesting enough, plus, Hall and Oates!

## Installation:

```sh
$ npm install hall-and-oates-ipsum --save
```

## Usage:

```js
var hallAndOates = require('hall-and-oates-ipsum')

// Return full song lyrics:
console.log(hallAndOates.ipsum())

// Return the first 6 words of lyrics:
console.log(hallAndOates.ipsum({words: 6}))

// Return the first 2 lines of lyrics:
console.log(hallAndOates.ipsum({lines: 2}))

// Return the first paragraph of lyrics:
console.log(hallAndOates.ipsum({paragraphs: 1}))

// Return different song lyrics:
console.log(hallAndOates.ipsum({
  lines: 3,
  song: hallAndOates.MANEATER
}))
```
