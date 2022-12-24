## Introduction
Uses mostly CSS and a little jQuery to clean up Drupal's local tasks (the
"View," "Edit," "Revisions," etc. tabs you see when logged in as someone with
editorial permissions) by hiding them under a button that sticks to the side of
the viewport.

## Installation
Install in the usual way:
```shell
composer install drupal/tidy_local_tasks
drush -y en tidy_local_tasks
```

## Development
To alter this module's CSS or JS:
1. Ensure that you're using npm 16. You can do this by installing
[the nvm utility](https://github.com/nvm-sh/nvm) -- see
[the install instructions](https://github.com/nvm-sh/nvm#install--update-script)
if `which nvm` doesn't turn it up on your machine.
2. Change into the module's front_end directory.
3. Type `npm run watch`. Your changes to the module's CSS and JS should start
getting compiled on the fly.
