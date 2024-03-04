Install New CiviCRM Version

```sh
unzip civicrm-x.xx.x-wordpress.zip
```

Install Localization Files if using in current version.

```sh
cd wp-content/plugins/civicrm
wget https://download.civicrm.org/civicrm-5.46.2-l10n.tar.gz
tar -xvzf civicrm-x.xx.x-l10n.tar.gz
sudo tar -xvzf civicrm-5.46.2-l10n.tar.gz
```

Delete Templates Cache folder contents  

```sh
# DO AS WEBSERVER USER or via weblink     sudo -u apache?
cd ../uploads/civicrm/templates_c
rm -Rf *
```

If used CLI CV, flush caches (UI does this automatically):

```sh
cv flush
```
