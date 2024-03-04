IF ROOT, change back to previous owner and their login group

```sh
pwd # plugins

# Recursive force(without confirmations)
chown -Rf username: civicrm

# or eg
chown -Rf username:www-data # Ubuntu Webserver - Apache, nginx
```

If using it, place the backup of `wp-content/plugins/civicrm/civicrm/settings_location.php` in the new folder.

Run the Database Upgrade script.

```sh
open https://example.org/wp-admin/admin.php?page=CiviCRM&q=civicrm/upgrade&reset=1
# or select url, Cmd C, CMD L (go to address bar:mac)
```

Reenable InnoDB full text search if it was on in previous version.

Test every page of your site to make sure everything is working ok.

Remove Zip files.

```sh
cd plugins
rm civicrm-x.xx.x-wordpress.zip
```
