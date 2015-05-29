import str from './songs/private-eyes'

export default function (funcStr, count = NaN) {
  switch (funcStr) {
    case 'words':
      return words(str, count)
    case 'lines':
      return lines(str, count)
    case 'paragraphs':
      return paragraphs(str, count)
  }
  return str
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

function _splitStr (str, count, splitToken, joinToken) {
  if (isNaN(count)) {
    return str
  }
  if (!joinToken) {
    joinToken = splitToken
  }
  return str.split(splitToken).splice(0, count).join(joinToken)
}
