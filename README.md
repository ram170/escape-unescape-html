Thanks for checking out the package.

**USAGE**

Add the package to your project by using 

```
npm i escape-unescape-html-characters
```

Import the package wherever you need and use it.
Ex:

```Javascript
const packageModule = require('escape-unescape-html');

console.log(packageModule.escapeHtml('&%#$*(<>"'));
// returns &amp;%#$*(&lt;&gt;&quot;

console.log(packageModule.unescapeHtml('&apos;&lt;&gt;&quot;&amp;'));
// returns '<>"&
```

***GitHub:***
https://github.com/ram170/escape-unescape-html
