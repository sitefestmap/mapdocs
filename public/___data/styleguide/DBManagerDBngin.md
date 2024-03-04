1. Press '+' icon to create new Database Server
2. Service: MySQL
3. name : 'civicrm' / 'schema', 'laravelapp' etc
4. Root / no password
5. Create
6. Start
7. Open in TablePlus
8. in TablePlus, create 'new' Database : eg 'civicrm'.

in `.env` 

- `DB_CONNECTION` should read `MySQL`.
- `DB_DATABASE` should read eg. `laravelapp`.

```sh
open https://laravelapp.test
```

For WordPress, unzip inside a new Herd folder eg 'wordpressapp'

Make a new database in TablePlus: 'wordpressapp'

```sh
open https://wordpressapp.test
```

- Database name : 'wordpressapp'.
- Username: 'root' (wp database username).
- Password: '' (wp no password).
- Database host '127.0.0.1' will work better than 'localhost'.
