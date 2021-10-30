# CodeIt

An interactive playground to learn programming

## CONTRIBUTING

Development of Codeit happens in GitHub, and we appreciate contributions. Learn
how you can help improving Codeit by reading the sections below.

### Prerequisite

- [POSIX-compliant shell][shell]
- [git][git] >= 2
- [github-cli][github-cli] >= 2
- [volta][volta]
- [node][nodejs] >= 16
- [npm][npm] >= 7
- [docker][docker]
- [docker-compose][docker-compose]

### Branch Organization

- `main`: latest stable release
- `staging`: next release candidate
- `dev`: latest development changes

### Sending a Pull Request

The Fullstacks-Dev team is monitoring for pull requests. We will review your
pull request and either merge it, request changes to it, or close it with an
explanation.

Before submitting a pull request, please make sure the following is done:

- Fork the repository and create your feature branch from dev.
- Run `npm install` to have all dependencies, husky hooks and, docker images
  needed for development.
- If you want to seed the database you can also run `npm run migrate-reset`.
- To start development run `npm run dev`. (PS. if you have tmux you can run
  `./script/dev/tmux`)
- If you’ve fixed a bug or added code that should be tested, add tests please.
- Ensure everything is ok `npm run verify`.
- (Optional) Run `./scripts/dev/pr` to create PR.

## How to Get in Touch

- [Telegram][telegram-channel]
- [Discord][discord-server]

## Stub Generator

The stub generator is the program which will write in every available language
the boilerplate code you get when you open the editor. To do this, the generator
needs input written using the syntax below.

and is open for your contribution, you can read the full spec
[here](docs/stub-generator.md).

[git]: https://git-scm.com/
[github-cli]: https://cli.github.com/
[nodejs]: https://nodejs.org/en/
[shell]: https://en.wikipedia.org/wiki/Unix_shell
[volta]: https://volta.sh/
[npm]: https://www.npmjs.com/
[docker]: https://docs.docker.com/
[docker-compose]: https://docs.docker.com/compose/
[telegram-channel]: https://t.me/fullstacks
[discord-server]: https://kutt.it/fsk-discord
