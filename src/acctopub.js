import { bech32 } from "bech32";

const acc = process.argv[2];
const pubRaw = new Uint8Array(bech32.fromWords(bech32.decode(acc).words));
const pub = Buffer.from(pubRaw).toString("hex");

console.log(`Terra Account: ${acc}, PublicKey: ${pub}`);
