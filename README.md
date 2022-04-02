# Giveaway Alert Bot

With this code you can check if there is a new giveaway in multiples websites.
When there is a new giveaway the code use Telegram API bot to send you a message
with the giveaway URL.

## Supported websites

| Website                                                 | Keyword config file |
| ------------------------------------------------------- | ------------------- |
| [eu.alienwarearena.com](https://eu.alienwarearena.com/) | `eualienware`       |
| [na.alienwarearena.com](https://na.alienwarearena.com/) | `naalienware`       |
| [freesteamkeys.com](https://www.freesteamkeys.com/)     | `freesteamkeys`     |
| [games.steelseries.com](https://games.steelseries.com/) | `steelseries`       |

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

#### Cron format

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
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

Compile the code and run the bot

```bash
npm start
```
