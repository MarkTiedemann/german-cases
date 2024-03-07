# @mark/german-cases

A module to convert German strings to upper- or lowercase.

Instead of converting [lower-case <q>ß</q> (`U+00DF`)](https://symbl.cc/en/00DF/) into upper-case <q>SS</q>, as
<code>"ß".<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase">toLocaleUpperCase</a>("de-DE")</code>
does, this module converts Eszett into [upper-case <q>ẞ</q> (`U+1E9E`)](https://symbl.cc/en/1E9E/).

[Upper-case <q>ẞ</q> was adopted in standard German orthography in 2017.](https://www.rechtschreibrat.com/DOX/rfdr_PM_2017-06-29_Aktualisierung_Regelwerk.pdf)
The standard Unicode algorithm for converting to uppercase, however, still uses <q>SS</q>.

This module and its documentation are hosted on <abbr title="JavaScript Registry">JSR</abbr>:
[https://jsr.io/@mark/german-cases](https://jsr.io/@mark/german-cases)
