# middleware

Middleware for `@xmpp/client` and `@xmpp/component`.

Supports Node.js and browsers.

## Install

```
npm install @xmpp/middleware
```

## Usage

```js
const {Client} = new require('@xmpp/client')
const middleware = require('@xmpp/middlware')

const client = new Client()
const app = middleware(client)
```

### use

The `use` method registers a middleware for incoming stanzas.

```js
app.use(ctx (ctx, next) => {

})
```


### filter


The `filter` method registers a middleware for outgoing stanzas.


```js
app.use(ctx (ctx, next) => {

})
```
