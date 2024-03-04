PHP Dev Env for MacOS that includes bundled tools.

- Valet
- PHP
- Composer
- Nginx Web Server
- Laravel
- DNSMasq (maps .test domain to folders).
- FPM (Fast CGI Process Manager).

The PHP version can be changed.

Any sites in the Herd paths will be available as a myapp.test domain

Herd does not come with a database, but recommends to install DBangin Database Manager to create and manage any databases, Helo for Email testing, and Tinkerwell REPL. TablePlus can be used for interacting with the database

Herd ships PHP as statically compiled binaries, so there is no need to use Homebrew.

Any PHP settings should be made in the `php.ini` file.

```sh
cd Herd
# example
laravel new appname --breeze
open https://appname.test

```