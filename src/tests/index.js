import {expect} from 'chai'
import {describe, it} from 'mocha'

import * as hallAndOates from '../index'

import PRIVATE_EYES from '../songs/private-eyes'
import MANEATER from '../songs/maneater'

const PRIVATE_EYES_6_WORDS = `I see you, you see me`

const PRIVATE_EYES_2_LINES = `I see you, you see me
watch you blowin' the lines when you're making a scene`

const PRIVATE_EYES_1_PARAGRAPH = `I see you, you see me
watch you blowin' the lines when you're making a scene
Oh girl, you've got to know
what my head overlooks
the senses will show to my heart
when it's watching for lies
you can't escape my
Private Eyes
they're watching you
they see your every move
Private Eyes
they're watching you
Private Eyes
they're watching you watching you watching you watching you`

const MANEATER_2_LINES = `She'll only come out at night
The lean and hungry type`

describe('hallAndOates', function () {
  it('returns full lyrics by default', function () {
    expect(hallAndOates.ipsum()).to.equal(PRIVATE_EYES)
  })

  it('returns 6 words when specifying `{words:6}`', function () {
    expect(hallAndOates.ipsum({
      words: 6
    })).to.equal(PRIVATE_EYES_6_WORDS)
  })

  it('returns 2 lines when specifying `{lines:2}`', function () {
    expect(hallAndOates.ipsum({
      lines: 2
    })).to.equal(PRIVATE_EYES_2_LINES)
  })

  it('returns 1 paragraph when specifying `{paragraphs:1}`', function () {
    expect(hallAndOates.ipsum({
      paragraphs: 1
    })).to.equal(PRIVATE_EYES_1_PARAGRAPH)
  })

  it('returns the full song when specifying a `{song:value}`', function () {
    expect(hallAndOates.ipsum({
      song: hallAndOates.MANEATER
    })).to.equal(MANEATER)
  })

  it('returns a specified lines song when specifying `{song:value, lines:2}`', function () {
    expect(hallAndOates.ipsum({
      lines: 2,
      song: hallAndOates.MANEATER
    })).to.equal(MANEATER_2_LINES)
  })

  it('returns 1 paragraph of the specified song when specifying `{song:value, paragraphs:1}`', function () {
    expect(hallAndOates.ipsum({
      paragraphs: 1,
      song: hallAndOates.PRIVATE_EYES
    })).to.equal(PRIVATE_EYES_1_PARAGRAPH)
  })

  it('returns the correct number of lines when specifying an invalid `song` value', function () {
    expect(hallAndOates.ipsum({
      lines: 2,
      song: 'invalid'
    })).to.equal(PRIVATE_EYES_2_LINES)
  })

  it('returns the default song when specifying an invalid `song` value', function () {
    expect(hallAndOates.ipsum({
      lines: 'invalid'
    })).to.equal(PRIVATE_EYES)
  })

  it('returns the correct number of words when specifying `{words:6, lines:value, paragraphs:value}`', function () {
    expect(hallAndOates.ipsum({
      words: 6,
      lines: 2,
      paragraphs: 1
    })).to.equal(PRIVATE_EYES_6_WORDS)
  })

  it('returns the correct number of lines when specifying `{lines:2, paragraphs:value}`', function () {
    expect(hallAndOates.ipsum({
      lines: 2,
      paragraphs: 1
    })).to.equal(PRIVATE_EYES_2_LINES)
  })
})
