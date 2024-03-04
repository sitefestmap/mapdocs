Dump the database using mysqldump, either directly or using drush civicrm-sql-dump or wp-cli cv sql-dump. Copy the db dump to the staging server. We don't use git for this because of the database size; we either use drush sql-sync or copy it manually.

Assuming a manual database dump copy, we need to remove the trigger definers - unless the MySQL username is identical on both production and staging. I use 

```shell
sed -i -e 's:/\*\!50017.*\*/::g'.
```

just a detail on the sed expression that was not working out of the box for me, I use:

```shell
sed -e 's:/\*\!50017[^*]*\*/::g' <DUMP_ORIG> > <NEW_DUMP>
```

Or export the civicrm database without triggers and functions and after import, make sure civi is working, then recreate triggers @url civicrm/menu/rebuild?reset=1&triggerRebuild=1

```shell
# sql triggers may use the username that defined them, and will need stripping out ?

perl -pi -e 's#\/\*\!5001[7|3].*?`[^\*]*\*\/##g' /path/to/mysqldump.sql

# Dump : no triggers or functions

mysqldump --skip-triggers --skip-routines

mysql -e "drop database dbname"
mysql -e "create database dbname"
pv dbname.sql.gz | gunzip | |

perl -p -e 's#\/\*\!5001[7|3].*?`[^\*]*\*\/##g' | mysql databasename
```