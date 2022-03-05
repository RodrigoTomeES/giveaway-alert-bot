# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2022-03-05

### Added

- Added support to [freesteamkeys.com](https://www.freesteamkeys.com/).
- Logs have been added on the server.

## [2.0.0] - 2022-03-05

### Added

- Now you can execute the bot with docker-compose.
- The bot code has been updated so it can crawl multiple websites.

### Changed

- Docker image is based in alpine instead of default node.

## [1.0.2] - 2022-02-22

### Fixed

- Fixed error in giveaway link.
- Now the bot only warn you one time when new giveaway is detected.

## [1.0.1] - 2022-02-18

### Added

- Now you can execute the program with `npm start`.
- Maintainer label added to Dockerfile.

### Fixed

- Error running Docker image related with Node modules.

### Removed

- Clean up of unnecessary packages `@types/axios` and `@types/node`.

## [1.0.0] - 2022-02-17

### Added

- Now you can check Alienware giveaway every 5 minutes.
- Telegram support. Add your TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in `.env`
  to notify you of giveaways through Telegram.
- Docker support.
