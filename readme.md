Related to: https://github.com/netlify/zip-it-and-ship-it/issues/67

1. `git clone https://github.com/jon301/netlify-issue-67.git`
2. `cd netlify-issue-67`
3. `yarn`
4. `~/somewhere-locally/zip-it-and-ship-it/src/bin.js dist/apps/api /tmp/netlify-issue-67`
5. `cd /tmp/netlify-issue-67` 
6. `unzip 0.main.zip && unzip main.zip`
6. `node main.js`

Output:

```
 /tmp/netlify-issue-67 20:41:39 $ node main.js
internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module 'apollo-server-core'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/private/tmp/netlify-issue-67/src/node_modules/@nestjs/graphql/dist/graphql-definitions.factory.js:13:30)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)

```
