```shell
# Download Zip to the plugins directory.
ssh user@host
cd user/wordpress/wp-content/plugins
ls
wget https://download.civicrm.org/civicrm-x.xx.x-wordpress.zip
# or : use owners username so that root doesn't become owner after upgrade
# sudo -u username wget https://download.civicrm.org/civicrm-x.xx.x-wordpress.zip
pwd
# sudo -i -u username command --- run command as user with the environment of another user
```

Remove Current CiviCRM

```sh
cd wp-content/plugins

rm -Rf civicrm    # Trash-cli npm install --global trash-cli   use: trash file.txt  
ls -la
```