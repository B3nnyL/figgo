export const hints = `
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
      $ figgo --init board_name board_id output_directory output_format
      $ figgp --edit board_name (not ready yet)
      $ figgo --list
      $ figgo --sync
      $ figgo --sync board_name
      $ figgo --remove board_name
      $ figgo --h
      $ figgo --v
`;
