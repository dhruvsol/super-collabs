export {};
type T = Window & typeof globalThis;
declare global {
  interface Window extends T {
    solana: any;
  }
}
declare var window: any;
