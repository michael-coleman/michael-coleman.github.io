## how to install node modules globally on Ubuntu - without using sudo

*******

### establish where node is currently configured to install global packages
run:
~~~~
$ npm config get prefix
~~~~
or
~~~~
$ npm config list
~~~~
or (to show all config defaults)
~~~~
$ npm config ls -l
~~~~

### NPM prefix value determines where node packages are installed
The default prefix on ubuntu 14.04 is `/usr`, which means that npm  will create symlink in `/usr/bin`, and these symlinks will point to binaries (in a lib ? folder or similar).
This `/usr/bin` is already  on the PATH. and hence global packages run from anywhere.

If you run `$ npm config ls -l` you can see the `key : value` pair for `userconfig = /home/michael/.npmrc` i think this means *if the .npmrc and any key/values within exist* then use those settings will override the main npm settings.

#### Better way
set the `prefix` directly by using :
~~~~
npm config set prefix ~/npm
~~~~
append (edit) the `.bashrc` file with:
~~~~
export PATH="$PATH:$HOME/npm/bin"
~~~~
and run
~~~~
$ source .bashrc
~~~~
to re-parse the `.bashrc` script


