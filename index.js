"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPKCEHelper = void 0;
const crypto_1 = __importDefault(require("crypto"));
const abstract_pkce_1 = require("abstract-pkce");
const DEFAULT_ALGORITHM = 'SHA256';
const DEFAULT_ENCODING = 'base64';
exports.createPKCEHelper = (algorithm = DEFAULT_ALGORITHM, encoding = DEFAULT_ENCODING, isHMAC = true) => abstract_pkce_1.createPKCEHelper({
    getChallenge: isHMAC
        ? (verifier) => crypto_1.default
            .createHmac(algorithm, verifier)
            .digest(encoding)
        : (verifier) => crypto_1.default
            .createHash(DEFAULT_ALGORITHM)
            .update(verifier)
            .digest(encoding),
    buildVerifier(length, possibleCharsCount, getPossibleChar) {
        let verifier = '';
        const getRandomByte = Buffer.prototype.readUInt8.bind(crypto_1.default.randomBytes(length));
        for (let i = 0; i < length; i++)
            verifier += getPossibleChar(getRandomByte(i) % possibleCharsCount);
        return verifier;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQXdEO0FBQ3hELGlEQUF3RjtBQUV4RixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQTtBQUNsQyxNQUFNLGdCQUFnQixHQUE0QixRQUFRLENBQUE7QUFNN0MsUUFBQSxnQkFBZ0IsR0FFUCxDQUNwQixTQUFTLEdBQUcsaUJBQWlCLEVBQUUsUUFBUSxHQUFHLGdCQUFnQixFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQ3pFLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBUztJQUNwQyxZQUFZLEVBQUUsTUFBTTtRQUNsQixDQUFDLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxnQkFBTTthQUMzQixVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQzthQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLGdCQUFNO2FBQzNCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDckIsYUFBYSxDQUFDLE1BQWMsRUFBRSxrQkFBMEIsRUFBRSxlQUE2QztRQUNyRyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDakIsTUFBTSxhQUFhLEdBQWdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzlHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsUUFBUSxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtRQUVuRyxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIn0=