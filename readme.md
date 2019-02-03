<h1 align="center">Figgo</h1>
<p align="center">A CLI tool make your design tokens stay up to date with your Figma design styleguide</p>

## Dev

- instalation
  `yarn install`
- development
  `yarn start [options]`
- test
  `yarn test`
- build
  `yarn build`

## Figma Guide

- Create three frames naming `Typography`, `Colors` and `Spacing`.
- Place your styleguide to frames accordingly. [Check out example](https://www.figma.com/file/ULXceywc0RjE0MFYNgOiZDrl/Figgo)

## Basic CLI Usage

```shell
How to use
    $ figgo [<options> ...]
    Options
      --init, -i         Setup figma board
      --sync, -s         Sync tokens
      --edit, -e         Edit board information (not ready yet)
      --list, -l         List boards
      --remove, -r       Remove board
      --help, -h         Show help message
      --version, -v      Show installed version
    Examples
      $ figgo --init
      $ figgo --init board_name board_id output_directory output_format[js|scss]
      $ figgp --edit board_name (not ready yet)
      $ figgo --list
      $ figgo --sync
      $ figgo --sync board_name
      $ figgo --remove board_name
      $ figgo --help
      $ figgo --version
```

## TODOs

- [x] CLI listing board information
- [x] CLI specify board sync
- [x] js output supports
- [ ] CLI edit board info
- [ ] Well-formatted results
- [ ] Screenshots
