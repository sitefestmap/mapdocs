```sh
mysql db-name

# OR
mysql --user=user_name --password db_name

# or
mysql -u root -p

# statement;
# CTRL C : Cancel

\g
\G # go (send command)- display result vertically

\u # use another databae

\h # help

mysql > show databases;
mysql > create database db-name;
mysql > use db-name;
mysql > show tables;
mysql > drop database db-name
mysql > drop table table-name
mysql > select * from table-name
mysql > show columns from table-name
mysql> select * from [table name] where [field name] = “something”;
mysql> select * from [table name] where name = “Bob” AND phone_number = ‘3444444’;

exit
quit
\q
```

```sh

# install

# If not working, add the mysql binary to your system's path
export PATH=$PATH:/usr/local/mysql/bin # (mac monterey)
# reload terminal

mysql -u root -p

mysql db-name

# connect to server
mysql --user=username --password db-name


mysql> \r # Reconnect 
mysql> connect --database
mysql> \r --database
mysql> connect --host
mysql> \r --host

mysql> help
mysql> \h
mysql> ?
mysql> help contents # server side help
mysql --help #?

mysql> status
mysql> \s

mysql> clear
mysql> \c

mysql> edit
mysql> \e

mysql> go # send command to mysql server
mysql> \g
mysql> ego
mysql> \G # send command to mysql server, display result vertically

mysql exit
mysql quit
mysql> \q

# update
mysqladmin shutdown

mysql> delimiter
mysql> \d # Statement Delimiter

mysql> pager
mysql> \P
mysql> nopager
mysql> \n # disable pager, print to stdout

mysql> notee # don't write into outfile

mysql> print
mysql> \p

mysql> prompt
mysql> \R # change promt

mysql> rehash 
mysql> \#

mysql> \.
mysql> source # file name as arg

mysql> system # system shell command
mysql> \!

mysql> tee
mysql> \T # outfile

mysql> use --database-name
mysql> \u --database-name

mysql> charset
mysql> \C

mysql> warnings
mysql> \W

mysql> nowarning
mysql> \w

mysql> resetconnection
mysql> \x


# Local Server
mysql -u username -p password

# Remote Server
mysql -h hostname -u username -p

>mysql SELECT VERSION(), CURRENT_DATE;

# statement;
```
