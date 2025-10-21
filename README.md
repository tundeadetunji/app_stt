# Typist

**Typist** is a voice-to-text companion designed to make speech-driven coding and text input feel _human_ — not robotic.  
It listens, interprets, and types what you say, whether in **English**, **Yoruba**, or even when you’re “speaking code” in **Java** or **Python**.  
It’s equally at home in a browser, Electron app, or WebView2 container — making it ideal for web integrations or local developer tools.
Visit <a href="https://tundeadetunji2017.bsite.net/typist/typist.html">the page</a>.

---

## 🎙️ What Typist Does

- Converts **spoken words** to text in real-time using your browser’s built-in speech recognition (Google/Chromium layer).
- Supports **English** and **Yoruba** input (auto-translates Yoruba keywords to English).
- Can “speak” in **Java** or **Python syntax** — letting developers code naturally by voice.
- Includes inline editing, clipboard copy, and UI-assisted punctuation buttons.
- Works **silently** — no pop-ups or Google overlay bubbles — when embedded or customized.

---

## 🧩 UI Overview

| Element                                    | Description                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 🎤 **Mic Button**                          | Starts or stops speech recognition. Icon toggles between ▶️ (idle) and ⏹️ (listening).                      |
| ✏️ **Edit Button**                         | Toggles manual editing of the transcribed text (`contentEditable`).                                         |
| 📋 **Copy/Send Button**                    | Copies text to clipboard and triggers `onTranscribedSend()` (for integration hooks).                        |
| 🔘 **Dot / Newline / Dot+Newline Buttons** | Inserts punctuation or line breaks manually.                                                                |
| 🌐 **Language Group**                      | Choose recognition language (`en-US` or `yo-NG`). Yoruba input passes through `translateYorubaToEnglish()`. |
| 💻 **Programming Mode Group**              | Switch between `plain`, `java`, or `python` speech interpreters.                                            |

---

## 💡 Tip

Developers can “speak” code naturally — for example:

Say:

> Public class demo open squiggle print open bracket quote hello world quote close bracket semicolon close squiggle

Typist writes:

```java
public class demo {
    System.out.print("hello world");
}
```

---

## 🗺 Moving Forward

Additions and enhancements are continually WIP. Feel free to email <a href="mailto:tundeadetunji2017@gmail.com">the author</a> for enquiries or suggestions - they're welcome.

---

## 🛠️ Developer Notes

### Embedding Typist

Typist runs purely on front-end JavaScript and works inside:

- **Standard web pages** (no backend required),
- **Electron** windows (Chromium engine),
- **WebView2** (Edge runtime for Windows apps).

Just include your script and required DOM elements (buttons, toggles, display area).  
All functionality runs sandboxed in the browser thread — no external API keys or server calls.

### Java ⇄ English Vocabulary Reference

The following table lists how Typist interprets spoken Java code elements.  
When the programming mode is set to **Java**, saying any of these words or phrases will produce the corresponding symbol or keyword in text output.

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Spoken Phrase</th>
      <th>Java Output</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>open bracket</td><td>(</td><td>Brackets</td></tr>
    <tr><td>close bracket</td><td>)</td><td>Brackets</td></tr>
    <tr><td>open square bracket</td><td>[</td><td>Brackets</td></tr>
    <tr><td>close square bracket</td><td>]</td><td>Brackets</td></tr>
    <tr><td>open squiggle</td><td>{</td><td>Brackets</td></tr>
    <tr><td>close squiggle</td><td>}</td><td>Brackets</td></tr>
    <tr><td>semicolon</td><td>;</td><td>Punctuation</td></tr>
    <tr><td>colon</td><td>:</td><td>Punctuation</td></tr>
    <tr><td>comma</td><td>,</td><td>Punctuation</td></tr>
    <tr><td>dot</td><td>.</td><td>Punctuation</td></tr>
    <tr><td>quote</td><td>"</td><td>Punctuation</td></tr>
    <tr><td>single quote</td><td>'</td><td>Punctuation</td></tr>
    <tr><td>space</td><td>(space)</td><td>Punctuation</td></tr>
    <tr><td>newline</td><td>(newline)</td><td>Punctuation</td></tr>
    <tr><td>enter</td><td>(newline)</td><td>Punctuation</td></tr>
    <tr><td>plus</td><td>+</td><td>Arithmetic</td></tr>
    <tr><td>minus</td><td>-</td><td>Arithmetic</td></tr>
    <tr><td>times</td><td>*</td><td>Arithmetic</td></tr>
    <tr><td>divide</td><td>/</td><td>Arithmetic</td></tr>
    <tr><td>mod</td><td>%</td><td>Arithmetic</td></tr>
    <tr><td>modulus</td><td>%</td><td>Arithmetic</td></tr>
    <tr><td>equals</td><td>=</td><td>Comparison / Assignment</td></tr>
    <tr><td>equal to</td><td>==</td><td>Comparison</td></tr>
    <tr><td>not equals</td><td>!=</td><td>Comparison</td></tr>
    <tr><td>greater than</td><td>&gt;</td><td>Comparison</td></tr>
    <tr><td>less than</td><td>&lt;</td><td>Comparison</td></tr>
    <tr><td>greater than or equal to</td><td>&gt;=</td><td>Comparison</td></tr>
    <tr><td>less than or equal to</td><td>&lt;=</td><td>Comparison</td></tr>
    <tr><td>double pipe</td><td>||</td><td>Logic</td></tr>
    <tr><td>or</td><td>||</td><td>Logic</td></tr>
    <tr><td>double ampersand</td><td>&amp;&amp;</td><td>Logic</td></tr>
    <tr><td>and</td><td>&amp;&amp;</td><td>Logic</td></tr>
    <tr><td>not</td><td>!</td><td>Logic</td></tr>
    <tr><td>plus equals</td><td>+=</td><td>Assignment</td></tr>
    <tr><td>minus equals</td><td>-=</td><td>Assignment</td></tr>
    <tr><td>times equals</td><td>*=</td><td>Assignment</td></tr>
    <tr><td>divide equals</td><td>/=</td><td>Assignment</td></tr>
    <tr><td>plus plus</td><td>++</td><td>Increment</td></tr>
    <tr><td>minus minus</td><td>--</td><td>Decrement</td></tr>
    <tr><td>if</td><td>if</td><td>Control</td></tr>
    <tr><td>else</td><td>else</td><td>Control</td></tr>
    <tr><td>for</td><td>for</td><td>Control</td></tr>
    <tr><td>while</td><td>while</td><td>Control</td></tr>
    <tr><td>do</td><td>do</td><td>Control</td></tr>
    <tr><td>switch</td><td>switch</td><td>Control</td></tr>
    <tr><td>case</td><td>case</td><td>Control</td></tr>
    <tr><td>default</td><td>default</td><td>Control</td></tr>
    <tr><td>break</td><td>break</td><td>Control</td></tr>
    <tr><td>continue</td><td>continue</td><td>Control</td></tr>
    <tr><td>return</td><td>return</td><td>Control</td></tr>
    <tr><td>public</td><td>public</td><td>Declaration</td></tr>
    <tr><td>private</td><td>private</td><td>Declaration</td></tr>
    <tr><td>protected</td><td>protected</td><td>Declaration</td></tr>
    <tr><td>static</td><td>static</td><td>Declaration</td></tr>
    <tr><td>final</td><td>final</td><td>Declaration</td></tr>
    <tr><td>void</td><td>void</td><td>Declaration</td></tr>
    <tr><td>class</td><td>class</td><td>Declaration</td></tr>
    <tr><td>interface</td><td>interface</td><td>Declaration</td></tr>
    <tr><td>extends</td><td>extends</td><td>Declaration</td></tr>
    <tr><td>implements</td><td>implements</td><td>Declaration</td></tr>
    <tr><td>new</td><td>new</td><td>Declaration</td></tr>
    <tr><td>int</td><td>int</td><td>Type</td></tr>
    <tr><td>float</td><td>float</td><td>Type</td></tr>
    <tr><td>double</td><td>double</td><td>Type</td></tr>
    <tr><td>boolean</td><td>boolean</td><td>Type</td></tr>
    <tr><td>char</td><td>char</td><td>Type</td></tr>
    <tr><td>string</td><td>String</td><td>Type</td></tr>
    <tr><td>long</td><td>long</td><td>Type</td></tr>
    <tr><td>short</td><td>short</td><td>Type</td></tr>
    <tr><td>true</td><td>true</td><td>Literal</td></tr>
    <tr><td>false</td><td>false</td><td>Literal</td></tr>
    <tr><td>null</td><td>null</td><td>Literal</td></tr>
    <tr><td>begin comment</td><td>/*</td><td>Comment</td></tr>
    <tr><td>start comment</td><td>/*</td><td>Comment</td></tr>
    <tr><td>open comment</td><td>/*</td><td>Comment</td></tr>
    <tr><td>end comment</td><td>*/</td><td>Comment</td></tr>
    <tr><td>stop comment</td><td>*/</td><td>Comment</td></tr>
    <tr><td>close comment</td><td>*/</td><td>Comment</td></tr>
    <tr><td>begin single line comment</td><td>//</td><td>Comment</td></tr>
    <tr><td>start single line comment</td><td>//</td><td>Comment</td></tr>
    <tr><td>open single line comment</td><td>//</td><td>Comment</td></tr>
    <tr><td>end single line comment</td><td></td><td>Comment</td></tr>
    <tr><td>stop single line comment</td><td></td><td>Comment</td></tr>
    <tr><td>close single line comment</td><td></td><td>Comment</td></tr>
  </tbody>
</table>

### Python ⇄ English Vocabulary Reference

The following table lists how Typist interprets spoken Python code elements.
When the programming mode is set to **Python**, saying any of these words or phrases will produce the corresponding symbol, keyword, or structure in text output.

<table border="1" cellspacing="0" cellpadding="6"> <thead> <tr> <th>Spoken Phrase</th> <th>Python Output</th> <th>Category</th> </tr> </thead> <tbody> <tr><td>open bracket</td><td>(</td><td>Brackets</td></tr> <tr><td>close bracket</td><td>)</td><td>Brackets</td></tr> <tr><td>open square bracket</td><td>[</td><td>Brackets</td></tr> <tr><td>close square bracket</td><td>]</td><td>Brackets</td></tr> <tr><td>open brace</td><td>{</td><td>Brackets</td></tr> <tr><td>close brace</td><td>}</td><td>Brackets</td></tr><tr><td>colon</td><td>:</td><td>Punctuation</td></tr><tr><td>plus</td><td>+</td><td>Arithmetic</td></tr>
<tr><td>minus</td><td>-</td><td>Arithmetic</td></tr>
<tr><td>times</td><td>*</td><td>Arithmetic</td></tr>
<tr><td>multiply</td><td>*</td><td>Arithmetic</td></tr>
<tr><td>divide</td><td>/</td><td>Arithmetic</td></tr>
<tr><td>mod</td><td>%</td><td>Arithmetic</td></tr>
<tr><td>modulus</td><td>%</td><td>Arithmetic</td></tr>
<tr><td>equals</td><td>=</td><td>Comparison / Assignment</td></tr>
<tr><td>equal to</td><td>==</td><td>Comparison</td></tr>
<tr><td>not equals</td><td>!=</td><td>Comparison</td></tr>
<tr><td>greater than</td><td>&gt;</td><td>Comparison</td></tr>
<tr><td>less than</td><td>&lt;</td><td>Comparison</td></tr>
<tr><td>greater than or equal to</td><td>&gt;=</td><td>Comparison</td></tr>
<tr><td>less than or equal to</td><td>&lt;=</td><td>Comparison</td></tr>
<tr><td>and</td><td>and</td><td>Logic</td></tr>
<tr><td>or</td><td>or</td><td>Logic</td></tr>
<tr><td>not</td><td>not</td><td>Logic</td></tr>
<tr><td>plus equals</td><td>+=</td><td>Assignment</td></tr>
<tr><td>minus equals</td><td>-=</td><td>Assignment</td></tr>
<tr><td>times equals</td><td>*=</td><td>Assignment</td></tr>
<tr><td>divide equals</td><td>/=</td><td>Assignment</td></tr>
<tr><td>def</td><td>def</td><td>Keyword</td></tr>
<tr><td>class</td><td>class</td><td>Keyword</td></tr>
<tr><td>if</td><td>if</td><td>Keyword</td></tr>
<tr><td>else</td><td>else</td><td>Keyword</td></tr>
<tr><td>elif</td><td>elif</td><td>Keyword</td></tr>
<tr><td>for</td><td>for</td><td>Keyword</td></tr>
<tr><td>while</td><td>while</td><td>Keyword</td></tr>
<tr><td>in</td><td>in</td><td>Keyword</td></tr>
<tr><td>return</td><td>return</td><td>Keyword</td></tr>
<tr><td>import</td><td>import</td><td>Keyword</td></tr>
<tr><td>from</td><td>from</td><td>Keyword</td></tr>
<tr><td>as</td><td>as</td><td>Keyword</td></tr>
<tr><td>try</td><td>try</td><td>Keyword</td></tr>
<tr><td>except</td><td>except</td><td>Keyword</td></tr>
<tr><td>finally</td><td>finally</td><td>Keyword</td></tr>
<tr><td>with</td><td>with</td><td>Keyword</td></tr>
<tr><td>print</td><td>print</td><td>Keyword</td></tr>
<tr><td>break</td><td>break</td><td>Keyword</td></tr>
<tr><td>continue</td><td>continue</td><td>Keyword</td></tr>
<tr><td>pass</td><td>pass</td><td>Keyword</td></tr>
<tr><td>true</td><td>True</td><td>Literal</td></tr>
<tr><td>false</td><td>False</td><td>Literal</td></tr>
<tr><td>none</td><td>None</td><td>Literal</td></tr>
<tr><td>begin comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>start comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>open comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>end comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>stop comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>close comment</td><td>"""</td><td>Comment</td></tr>
<tr><td>begin single line comment</td><td>#</td><td>Comment</td></tr>
<tr><td>start single line comment</td><td>#</td><td>Comment</td></tr>
<tr><td>open single line comment</td><td>#</td><td>Comment</td></tr>
<tr><td>end single line comment</td><td></td><td>Comment</td></tr>
<tr><td>stop single line comment</td><td></td><td>Comment</td></tr>
<tr><td>close single line comment</td><td></td><td>Comment</td></tr>
<tr><td>indent</td><td>(4 spaces)</td><td>Structure</td></tr>
<tr><td>tab</td><td>(4 spaces)</td><td>Structure</td></tr>
<tr><td>dedent</td><td>(unindent)</td><td>Structure</td></tr>
<tr><td>unindent</td><td>(unindent)</td><td>Structure</td></tr>
</tbody> </table>

### Yoruba Programming Constructs in Typist

Typist allows developers to speak Yoruba naturally to produce valid **Java** or **Python** code.
Through its built-in Yoruba-to-English mapping engine, spoken Yoruba phrases are first translated into equivalent programming terms, and then passed to the corresponding Java or Python interpreter, which converts them to the actual code symbols or keywords.

This makes Typist a bridge between human language and code, especially for Yoruba speakers <i>learning</i> or <i>teaching</i> programming.

How It Works

1. When the active recognition language is Yoruba (yo-NG), Typist captures Yoruba speech.

2. It automatically translates recognized Yoruba phrases to their English coding equivalents (e.g. “pade idimu” → “close brace”).

3. If a programming mode (Java or Python) is active, Typist interprets those terms into real syntax:

4. Java mode: produces curly braces, semicolons, keywords like public, class, return, etc.

5. Python mode: produces indentation, colons, def, print, if, etc.

6. The result appears in the editor area as valid code.

Example — Spoken Yoruba → Python Code

Say:

> Ilana akọkọ ṣi iyika pade iyika aami ifakọ ila tuntun bẹrẹ ila kọ ila ṣi iyika ami asọye bawo ni ami asọye pade iyika ila tuntun

Typist writes:

```java
def akọkọ():
    print("Hello aye")
```

### Yoruba ⇄ Programming Vocabulary Reference

The following tables show how Yoruba phrases map to programming concepts that Typist understands.
The translation applies first (Yoruba → English keyword), and then Typist interprets that keyword according to the current programming mode (Java or Python)

1. **General Structure and Punctuation**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output (Java/Python)</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ṣi iyika</td><td>open bracket</td><td>(</td><td>Opening round bracket</td></tr>
    <tr><td>pade iyika</td><td>close bracket</td><td>)</td><td>Closing round bracket</td></tr>
    <tr><td>ṣi apo</td><td>open square bracket</td><td>[</td><td>Opening square bracket</td></tr>
    <tr><td>pade apo</td><td>close square bracket</td><td>]</td><td>Closing square bracket</td></tr>
    <tr><td>ṣi idimu</td><td>open squiggle / brace</td><td>{ (Java only)</td><td>Opening curly brace</td></tr>
    <tr><td>pade idimu</td><td>close squiggle / brace</td><td>} (Java only)</td><td>Closing curly brace</td></tr>
    <tr><td>aami idajọ</td><td>semicolon</td><td>; (Java)</td><td>Ends statements in Java</td></tr>
    <tr><td>ami isopọ</td><td>colon</td><td>:</td><td>Used in Python (and Java labels)</td></tr>
    <tr><td>ami ifakọ</td><td>comma</td><td>,</td><td>Separator for items</td></tr>
    <tr><td>ami atẹjade</td><td>dot</td><td>.</td><td>Access operator (e.g. System.out)</td></tr>
    <tr><td>ami asọye</td><td>quote</td><td>"</td><td>String literal delimiter</td></tr>
    <tr><td>ami ifọrọ</td><td>single quote</td><td>'</td><td>Character literal (Java)</td></tr>
    <tr><td>aaye</td><td>space</td><td>(space)</td><td>Adds spacing</td></tr>
    <tr><td>titẹ / ila tuntun</td><td>enter / newline</td><td>\n</td><td>Starts new line</td></tr>
  </tbody>
</table>

2. **Logic and Comparison**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ati</td><td>and</td><td><code>&amp;&amp;</code> (Java) / <code>and</code> (Python)</td><td>Logical AND</td></tr>
    <tr><td>tabi</td><td>or</td><td><code>||</code> (Java) / <code>or</code> (Python)</td><td>Logical OR</td></tr>
    <tr><td>kii ṣe</td><td>not</td><td><code>!</code> (Java) / <code>not</code> (Python)</td><td>Logical NOT</td></tr>
    <tr><td>jẹ</td><td>equals</td><td><code>=</code></td><td>Assignment / equality</td></tr>
    <tr><td>ko jẹ</td><td>not equals</td><td><code>!=</code></td><td>Not equal comparison</td></tr>
    <tr><td>tobi ju</td><td>greater than</td><td><code>&gt;</code></td><td>Comparison operator</td></tr>
    <tr><td>kere ju</td><td>less than</td><td><code>&lt;</code></td><td>Comparison operator</td></tr>
    <tr><td>tobi ju tabi jẹ</td><td>greater than or equal to</td><td><code>&gt;=</code></td><td>Comparison operator</td></tr>
    <tr><td>kere ju tabi jẹ</td><td>less than or equal to</td><td><code>&lt;=</code></td><td>Comparison operator</td></tr>
  </tbody>
</table>

3. **Arithmetic and Assignment**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>fikun</td><td>plus</td><td><code>+</code></td><td>Addition</td></tr>
    <tr><td>yọ kuro ninu</td><td>minus</td><td><code>-</code></td><td>Subtraction</td></tr>
    <tr><td>pin</td><td>divide</td><td><code>/</code></td><td>Division</td></tr>
    <tr><td>lona</td><td>times</td><td><code>*</code></td><td>Multiplication</td></tr>
    <tr><td>iyipada</td><td>modulus</td><td><code>%</code></td><td>Remainder</td></tr>
    <tr><td>fikun si</td><td>plus equals</td><td><code>+=</code></td><td>Add-and-assign</td></tr>
    <tr><td>yọ kuro si</td><td>minus equals</td><td><code>-=</code></td><td>Subtract-and-assign</td></tr>
  </tbody>
</table>

4. **Comments and Documentation**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output (Java/Python)</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bẹrẹ asọye</td>
      <td>begin comment</td>
      <td><code>/*</code> (Java) / <code>"""</code> (Python)</td>
      <td>Start block comment</td>
    </tr>
    <tr>
      <td>pari asọye</td>
      <td>end comment</td>
      <td><code>*/</code> (Java) / <code>"""</code> (Python)</td>
      <td>End block comment</td>
    </tr>
    <tr>
      <td>bẹrẹ asọye gigun</td>
      <td>begin single line comment</td>
      <td><code>//</code> (Java) / <code>#</code> (Python)</td>
      <td>Start line comment</td>
    </tr>
    <tr>
      <td>pari asọye gigun</td>
      <td>end single line comment</td>
      <td><em>(none)</em></td>
      <td>Line comment terminator (implicit)</td>
    </tr>
  </tbody>
</table>

5. **Control Structures**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Java Output</th>
      <th>Python Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ṣe / ṣé / se</td>
      <td>if</td>
      <td><code>if</code></td>
      <td><code>if</code></td>
      <td>Conditional</td>
    </tr>
    <tr>
      <td>bibẹẹkọ</td>
      <td>else</td>
      <td><code>else</code></td>
      <td><code>else</code></td>
      <td>Alternate block</td>
    </tr>
    <tr>
      <td>fun</td>
      <td>for</td>
      <td><code>for</code></td>
      <td><code>for</code></td>
      <td>Loop construct</td>
    </tr>
    <tr>
      <td>nigba ti / nigba</td>
      <td>while</td>
      <td><code>while</code></td>
      <td><code>while</code></td>
      <td>Loop construct</td>
    </tr>
    <tr>
      <td>tẹsiwaju</td>
      <td>continue</td>
      <td><code>continue</code></td>
      <td><code>continue</code></td>
      <td>Skip iteration</td>
    </tr>
    <tr>
      <td>kuro</td>
      <td>break</td>
      <td><code>break</code></td>
      <td><code>break</code></td>
      <td>Exit loop</td>
    </tr>
    <tr>
      <td>pada</td>
      <td>return</td>
      <td><code>return</code></td>
      <td><code>return</code></td>
      <td>Return value</td>
    </tr>
  </tbody>
</table>

6. **Declaration and Program Structure**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Java Output</th>
      <th>Python Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ẹgbẹ</td>
      <td>class</td>
      <td><code>class</code></td>
      <td><code>class</code></td>
      <td>Declares class</td>
    </tr>
    <tr>
      <td>ilana</td>
      <td>def</td>
      <td>—</td>
      <td><code>def</code></td>
      <td>Function definition</td>
    </tr>
    <tr>
      <td>gbangba</td>
      <td>public</td>
      <td><code>public</code></td>
      <td>—</td>
      <td>Access modifier</td>
    </tr>
    <tr>
      <td>ominira</td>
      <td>static</td>
      <td><code>static</code></td>
      <td>—</td>
      <td>Static context</td>
    </tr>
    <tr>
      <td>òfo / ofo</td>
      <td>void</td>
      <td><code>void</code></td>
      <td>—</td>
      <td>No return type</td>
    </tr>
    <tr>
      <td>koko / pataki</td>
      <td>main</td>
      <td><code>main</code></td>
      <td>—</td>
      <td>Entry function</td>
    </tr>
    <tr>
      <td>ọrọ</td>
      <td>string</td>
      <td><code>String</code></td>
      <td><code>str</code> (implicit)</td>
      <td>String type</td>
    </tr>
    <tr>
      <td>eto</td>
      <td>system</td>
      <td><code>System</code></td>
      <td>—</td>
      <td>System class reference</td>
    </tr>
    <tr>
      <td>kọ ila</td>
      <td>print</td>
      <td><code>System.out.print</code></td>
      <td><code>print()</code></td>
      <td>Output statement</td>
    </tr>
  </tbody>
</table>

7. **Literals and Constants**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>òtítọ́ / otito / bẹ́ẹ̀ni</td>
      <td>true</td>
      <td><code>true</code> (Java) / <code>True</code> (Python)</td>
      <td>Boolean true</td>
    </tr>
    <tr>
      <td>irọ́ / iro</td>
      <td>false</td>
      <td><code>false</code> (Java) / <code>False</code> (Python)</td>
      <td>Boolean false</td>
    </tr>
    <tr>
      <td>ko si</td>
      <td>none</td>
      <td><code>null</code> (Java) / <code>None</code> (Python)</td>
      <td>Null value</td>
    </tr>
  </tbody>
</table>

8. **Indentation (Python only)**

<table border="1" cellspacing="0" cellpadding="6">
  <thead>
    <tr>
      <th>Yoruba Phrase</th>
      <th>English Equivalent</th>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tab</td>
      <td>indent</td>
      <td><code>    </code></td>
      <td>Four spaces for Python blocks</td>
    </tr>
    <tr>
      <td>dedent / unindent</td>
      <td>dedent</td>
      <td><em>(new line)</em></td>
      <td>Unindents block</td>
    </tr>
  </tbody>
</table>


