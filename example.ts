import { toGermanUpperCase } from "./mod.ts";

console.log("Straße".toLocaleUpperCase("de-DE")); // => "STRASSE"
console.log(toGermanUpperCase("Straße")); // => "STRAẞE"
