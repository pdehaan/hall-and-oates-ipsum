var hallAndOates = require('./dist/index')

// Return all lorem-y text:
console.log(hallAndOates.ipsum(), '\n---\n')

// Return the first 6 words of lyrics:
console.log(hallAndOates.ipsum({words: 6}), '\n---\n')

// Return the first 2 lines of lyrics:
console.log(hallAndOates.ipsum({lines: 2}), '\n---\n')

// Return the first paragraph of lyrics:
console.log(hallAndOates.ipsum({paragraphs: 1}), '\n---\n')

// Return different song:
console.log(hallAndOates.ipsum({
  lines: 3,
  song: hallAndOates.MANEATER
}), '\n---\n')
