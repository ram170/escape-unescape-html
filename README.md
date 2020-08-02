Thanks for checking out the package.

**USAGE:**

Add the package to your project by using: <br/>

```
npm i escape-unescape-html-characters
```

Import the package wherever you need and use it like this: <br/>

```Javascript
const packageModule = require('escape-unescape-html-characters');

console.log(packageModule.escapeHtml('<script>alert("1")</script>'));
// returns &lt;script&gt;alert(&quot;1&quot;)&lt;/script&gt;

console.log(packageModule.unescapeHtml('&lt;script&gt;alert(&quot;1&quot;)&lt;/script&gt;'));
// returns <script>alert("1")</script>
```

**GitHub:** https://github.com/ram170/escape-unescape-html <br/>
**NPM package:** https://www.npmjs.com/package/escape-unescape-html-characters

<br/>
**Release Notes:** <br/>

**v0.0.1** - Initial commit and doesn't provide support to few symbols(" and ') while escaping. This can be used if you only want to escape < and > <br/>
**v0.0.2** - Provided support for those symbols and added Readme. <br/>
**v0.0.3** - Fixed Readme mistakes. <br/>
**v0.0.4** - Added line break in Readme (Rookie mistake). <br/>

It is recommended to use v0.0.2 or v0.0.3 or v0.0.4 (They're all same except for the change in readme). Will release a stable package with tag **v1.0.0** with tests soon.


