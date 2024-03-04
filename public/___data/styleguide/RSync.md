```sh
# Local to Local
cd dir1
# Dry run (test) 
rsync -avzn ../dir2 . 
# rsync -avz --dry-run ../dir2 .

# sync dir2 and it's contents to dir1
rsync -avz ../dir2 .
```

You may want to check the path to the remote directory you want to sync.

```sh
ssh host@server
cd # move around file system
# print current path
pwd
```

You will need [SSH Keys](/ssh-keys) for remote server access.

```sh
cd backups
# Archive(recursive) Verbose Compress
rsync --dry-run -avz user@domain.com:/path/to/database .
```

You can make a [Bash script](/bash-scripts) to run an automatic backup.

```bash
#!/bin/bash

DATE=$(date '+%F')$
rsync -avz user@domain.com:/path/to/db/ /path/to/backups/db/$DATE
```

```sh
# save file and mark it executable
chmod +x dbbackup.sh

# Run Script
./backup.sh
```