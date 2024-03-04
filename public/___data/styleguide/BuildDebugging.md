
- Check Dependancies are same in local and host production (Node version, etc)

```shell
# find node version in dev
node -v

# create file to specify node version in .nvmrc file in root
echo "10.18.0" > .nvmrc

# clear cache
npm cache verify
npm cache clean --force

npm --max-old-space-size=8192 run build


npm run build --verbose

# delete package-lock.json

npm verify cache

# check node version compatibility OS and Terminal  32bit / 64bit
node -p "process.arch"
# check system version
uname -a
```