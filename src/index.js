export const PRIVATE_EYES = 'private-eyes'
export const MANEATER = 'maneater'
export const I_CANT_GO_FOR_THAT_NO_CAN_DO = 'i-cant-go-for-that-no-can-do'
export const RICH_GIRL = 'rich-girl'

export const SONGS = [
  PRIVATE_EYES,
  MANEATER,
  I_CANT_GO_FOR_THAT_NO_CAN_DO,
  RICH_GIRL
]

export function ipsum (options = {}) {
  var song
  options.song = options.song || PRIVATE_EYES
  try {
    song = require('./songs/' + options.song.trim())
  } catch (err) {
    song = require('./songs/private-eyes')
  }

  if (options.words && !isNaN(options.words)) {
    return words(song, options.words)
  } else if (options.lines && !isNaN(options.lines)) {
    return lines(song, options.lines)
  } else if (options.paragraphs && !isNaN(options.paragraphs)) {
    return paragraphs(song, options.paragraphs)
  }

  return song
}

function words (str, count = NaN) {
  return _splitStr(str, count, /\s+/, ' ')
}

function lines (str, count = NaN) {
  return _splitStr(str, count, '\n')
}

function paragraphs (str, count = NaN) {
  return _splitStr(str, count, '\n\n')
}

function _splitStr (str, count, splitToken, joinToken = splitToken) {
  if (isNaN(count) || parseInt(count, 10) <= 0 || !splitToken) {
    return str
  }
  return str.split(splitToken).splice(0, count).join(joinToken)
}
