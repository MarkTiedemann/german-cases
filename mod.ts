// SPDX-License-Identifier: CC0-1.0+

/** A module to convert German strings to upper- or lowercase.
 *
 * Instead of converting [lower-case <q>ß</q> (`U+00DF`)](https://symbl.cc/en/00DF/)
 into upper-case <q>SS</q>, as <code>"ß".<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase">toLocaleUpperCase</a>("de-DE")</code> does, this module converts Eszett into [upper-case <q>ẞ</q> (`U+1E9E`)](https://symbl.cc/en/1E9E/).
 *
 * [Upper-case <q>ẞ</q> was adopted in standard German orthography in 2017.](https://www.rechtschreibrat.com/DOX/rfdr_PM_2017-06-29_Aktualisierung_Regelwerk.pdf) The standard Unicode algorithm for converting to uppercase, however, still uses <q>SS</q>.
 *
 * @example
 * ```ts
 * import { toGermanUpperCase } from "@mark/german-cases";
 *
 * console.log("Straße".toLocaleUpperCase("de-DE")); // => "STRASSE"
 * console.log(toGermanUpperCase("Straße")); // => "STRAẞE"
 * ```
 *
 * @license CC0-1.0+
 *
 * @module @mark/german-cases
 */

/** Lower-case Eszett: [ß (`U+00DF`)](https://symbl.cc/en/00DF/) */
export const LOWER_CASE_ESZETT = "ß" as const;

/** Upper-case Eszett: [ẞ (`U+1E9E`)](https://symbl.cc/en/1E9E/) */
export const UPPER_CASE_ESZETT = "ẞ" as const;

/** The locale for German as spoken in Germany, as a [<abbr title="Best Current Practice">BCP</abbr> 47](https://www.rfc-editor.org/info/bcp47) language tag */
export const LOCALE_GERMAN_GERMANY = "de-DE" as const;

/** Converts all alphabetic characters to German uppercase characters.
 *
 * Contrary to [`String.prototype.toLocaleUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase), this function converts [lower-case <q>ß</q> (`U+00DF`)](https://symbl.cc/en/00DF/) into [upper-case <q>ẞ</q> (`U+1E9E`)](https://symbl.cc/en/1E9E/). */
export function toGermanUpperCase(str: string): string {
	return str.replaceAll(LOWER_CASE_ESZETT, UPPER_CASE_ESZETT).toLocaleUpperCase(LOCALE_GERMAN_GERMANY);
}

/** Converts all alphabetic characters to German lowercase characters. */
export function toGermanLowerCase(str: string): string {
	return str.toLocaleLowerCase(LOCALE_GERMAN_GERMANY);
}
