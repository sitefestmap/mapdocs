- You will need MySQL username, name of MySQL database, and password.
- For WordPress, you can find these in `wp-config.php`.
- replace `USERNAME`` + `DATABASE`` with MySQL username and MySQL database name.
- Password (`-p`) will be prompted.

`mysqldump` can be slow and resource intensive, so is best not to use on a produciton database. Also if you don't lock tables, then updates made while dumping won't be saved.

```bash
# connect
mysql -u user -p password
# dump
mysqldump -u user -p password mydb > mydb.sql
# then transfer this file to local machine 
rsync ...

# backup on remote server
ssh host@server
mysqldump -uUSERNAME -p DATABASE > backup.sql
mysqldump -u user -p db-name > db-name-backup.sql

# Restore backup (create db first if migrating)
mysql -uUSERNAME -p DATABASE < backup.sql

# large dbs
mysqldump database_name | gzip > database_name.sql.gz

# timestamp
mysqldump  database_name > database_name-$(date +%Y%m%d).sql

```

Dump from remote to local

```sh
ssh -p [PORT] [USER]@[REMOTE_SERVER] mysqldump -u [REMOTE_DATABASE_USER] -p [REMOTE_DATABASE_NAME] > ~/private/db_dump_filename.sql
```

Dump to a remote server

```sh
mysqldump db-name | ssh user@server mysql db-name

# copy table to remote db
mysqldump db-name foo | ssh user@remote.box.com mysql bar
# or
mysqldump -u user -p'password' db-name foo | ssh user@remote.box.com mysql -u user -p'password' db-name foo

mysql -u [USERNAME] -p [DATABASENAME] < ~/PATH/TO/FILE/FILENAME.sql
```