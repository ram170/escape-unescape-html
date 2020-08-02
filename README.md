![npm](https://img.shields.io/npm/v/escape-unescape-html-characters)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/escape-unescape-html-characters/0.1.0)

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
**v0.1.0** - Provided support for those symbols and added Readme. <br/>


