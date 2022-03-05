# Giveaway Alert Bot

With this code you can check if there is a new giveaway in multiples websites.
When there is a new giveaway the code use Telegram API bot to send you a message
with the giveaway URL.

## Supported websites

- EU Alienware Arena
- NA Alienware Arena

## Configuration

Use the `giveawaybot.config.json` to add the websites to track and the cron. By
default all the websites are tracked with 5 minutes of ping.

Example

```json
[
  {
    "website": "eualienware",
    "cron": "0 0/10 * * * *"
  },
  {
    "website": "naalienware",
    "cron": "0 5/10 * * * *"
  }
]
```

## Usage

### Docker with docker-compose

```bash
docker-compose up -d
```

### Docker without docker-compose

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
