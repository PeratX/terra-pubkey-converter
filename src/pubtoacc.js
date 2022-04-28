import { bech32 } from "bech32";

const pubkey = process.argv[2];
const acc = bech32.encode("terra", bech32.toWords(Uint8Array.from(Buffer.from(pubkey, 'hex'))));
console.log(`PubKey: ${pubkey}, Terra Account: ${acc}`);
