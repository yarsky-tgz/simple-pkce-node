import crypto, { HexBase64Latin1Encoding } from 'crypto'
import { createPKCEHelper as originalCreatePKCEHelper, PKCEHelper } from 'abstract-pkce'

const DEFAULT_ALGORITHM = 'SHA256'
const DEFAULT_ENCODING: HexBase64Latin1Encoding = 'base64'

export type { PKCEHelper, PKCEChallenge } from 'abstract-pkce'

export type PKCEHelperNode = PKCEHelper<string>

export const createPKCEHelper: (
  algorithm?: string, encoding?: HexBase64Latin1Encoding, isHMAC?: boolean,
) => PKCEHelperNode = (
  algorithm = DEFAULT_ALGORITHM, encoding = DEFAULT_ENCODING, isHMAC = true,
) => originalCreatePKCEHelper<string>({
  getChallenge: isHMAC
    ? (verifier: string) => crypto
      .createHmac(algorithm, verifier)
      .digest(encoding)
    : (verifier: string) => crypto
      .createHash(DEFAULT_ALGORITHM)
      .update(verifier)
      .digest(encoding),
  buildVerifier(length: number, possibleCharsCount: number, getPossibleChar: (position: number) => string): string {
    let verifier = ''
    const getRandomByte: (offset?: number) => number = Buffer.prototype.readUInt8.bind(crypto.randomBytes(length))
    for (let i = 0; i < length; i++) verifier += getPossibleChar(getRandomByte(i) % possibleCharsCount)

    return verifier
  },
})
