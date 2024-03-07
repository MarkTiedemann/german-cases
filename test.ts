import { assertEquals } from "@std/assert";
import {
	LOCALE_GERMAN_GERMANY,
	LOWER_CASE_ESZETT,
	toGermanLowerCase,
	toGermanUpperCase,
	UPPER_CASE_ESZETT,
} from "./mod.ts";

Deno.test("toLocaleUpper/LowerCase", () => {
	assertEquals(LOWER_CASE_ESZETT.toLocaleUpperCase(LOCALE_GERMAN_GERMANY), "SS");
	assertEquals(UPPER_CASE_ESZETT.toLocaleUpperCase(LOCALE_GERMAN_GERMANY), UPPER_CASE_ESZETT);

	assertEquals(UPPER_CASE_ESZETT.toLocaleLowerCase(LOCALE_GERMAN_GERMANY), LOWER_CASE_ESZETT);
	assertEquals(LOWER_CASE_ESZETT.toLocaleLowerCase(LOCALE_GERMAN_GERMANY), LOWER_CASE_ESZETT);
});

Deno.test("toGermanUpper/LowerCase", () => {
	assertEquals(toGermanUpperCase("a"), "A");
	assertEquals(toGermanUpperCase("A"), "A");

	assertEquals(toGermanLowerCase("A"), "a");
	assertEquals(toGermanLowerCase("a"), "a");

	for (const [lowerCase, upperCase] of [["ä", "Ä"], ["ö", "Ö"], ["ü", "Ü"]]) {
		assertEquals(toGermanUpperCase(lowerCase), upperCase);
		assertEquals(toGermanUpperCase(upperCase), upperCase);

		assertEquals(toGermanLowerCase(upperCase), lowerCase);
		assertEquals(toGermanLowerCase(lowerCase), lowerCase);
	}

	assertEquals(toGermanUpperCase(LOWER_CASE_ESZETT), UPPER_CASE_ESZETT);
	assertEquals(toGermanUpperCase(UPPER_CASE_ESZETT), UPPER_CASE_ESZETT);

	assertEquals(toGermanLowerCase(UPPER_CASE_ESZETT), LOWER_CASE_ESZETT);
	assertEquals(toGermanLowerCase(LOWER_CASE_ESZETT), LOWER_CASE_ESZETT);
});
