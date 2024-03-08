import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Physical Koin Raffle";
  export const SYMBOL: string = "PKR";
  export const MINT_PRICE: u64 = 7720000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 200;
  export const URI: string = "https://bafybeigck4233izv6kit27zoaafhy77s5hz3to342fzhcm5ag3f3c4apjq.ipfs.nftstorage.link";
  export const OWNER: Uint8Array = Base58.decode("1DzG86fM4TMRgFhZ94Me4EKzXdJtN1L4NH");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1MLqRMDDyxbaiUe1Uz52X5y34uiLvk4vcv");
}