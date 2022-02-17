# Alienware Giveaway Bot

With this code you can check if there is a new giveaway in Alienware EU or NA.
When there is a new giveaway code use Telegram API bot to send you a message
with the giveaway URL.

By default the code check the website every 10 minutes but the query is sandwiched between the two domains so it is actually queried every 5 minutes.

## Usage

### Docker

First you need to build the image

```bash
docker build . -t alienware-giveaway-bot
```

Later you can execute it

```bash
docker run -d alienware-giveaway-bot
```

### Node

First you need to compile the code

```bash
npm run tsc
```

Later you can execute it

```bash
node ./dist/index.mjs
```
