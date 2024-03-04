```sh
sudo curl -LsS https://download.civicrm.org/cv/cv.phar -o /usr/local/bin/cv
sudo chmod +x /usr/local/bin/cv

cd /var/www/my/web/site
# cd /home/users/me/wordpress

cv # list commands
cv --help
cv api --help

# upgrade (download first)
cv upgrade:check
cv upgrade:db

# cv cache-clear
cv flush 

# Extensions
cv ext -Li
cv ext:list
# ext directory only
cv dl cividiscount [another-ext]
# from a specific url
cv dl EXTESION_KEY@ZIP_URL
cv en cividiscount
cv dis cividiscount
cv path -x cividiscount
cv url -x cividiscount
cv extension:enable [ext-name]

# Settings
cv api setting.get
cv vget
cv vget /mail/
cv vset mailerBatchLimit=100

## APIs
cv api3 contact.get last_name=Smith
cv api4 Contact.get +w last_name=Smith

# PHP
cv ev 'echo Civi::paths()->getPath("[civicrm.root]/.");'
cv scr /path/to/my-script.php
cv cli

# Web requests
cv url civicrm/dashboard --open
cv url civicrm/dashboard --open -LU admin
cv http civicrm/dashboard
cv http civicrm/dashboard -LU admin

# Events
cv event
cv event /flexmailer/
cv service
cv service /flexmailer/

cv import
cv export
cv api --gen [format] # generate docs

```