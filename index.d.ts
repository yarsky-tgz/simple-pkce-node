/// <reference types="node" />
import { HexBase64Latin1Encoding } from 'crypto';
import { PKCEHelper } from 'abstract-pkce';
export type { PKCEHelper, PKCEChallenge } from 'abstract-pkce';
export declare type PKCEHelperNode = PKCEHelper<string>;
export declare const createPKCEHelper: (algorithm?: string, encoding?: HexBase64Latin1Encoding, isHMAC?: boolean) => PKCEHelperNode;
