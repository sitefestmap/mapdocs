# Git

Git is a Version Control System (VCS) that synchronizes your project folders and files between local and online versions. The `.gitignore` file is a root directory 'dot file' that tells your build what to ignore (Node Modules, `.env` etc)

```bash
cd projects
# substitute 'username' for your orgname if cloning from an org
git clone git@github.com:username/project-name.git

cd project-name
npm i # or pnpm i / bun i depending on package manager
```

<!-- 

Use Git in a local project that has been created on Github.

```shell
brew install gh
gh auth login

echo "# project title" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/project-title.git
git push -u origin main

git remote remove origin

# push exisiting repo from desktop
git remote add origin https://github.com/mattweston/wikilies.git
git branch -M main
git push -u origin main

cd project-name
# In root directory of desktop project
git init
git add -A # ?
git commit -m 'Added project' # ?
git init && git add -A && git commit -m "Initial commit"
git remote add origin git@github.com:mattweston/myProject.git
git push -u -f origin master #?
# Clone new repo from github 
open https://github.newrepo.new
clone

git push -u origin main
```

Clone

```sh
git clone git@github.com:username/project-name.git
cd project-name
npm install
```

```sh
# Check if installed
git --version

# install homebrew ( for mac git install)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

brew install git

git config --list
# :q to quite 

# Repo is a set of files that keeep track of changes within a directory

# Clone an existing repo into a new directory / create an ititial forked branch 
cd projects
git clone https://github.com/username/reponame.git # doesn't need folder

# check remote version
git remote
git remote -v

# Clone an organization repo if you are an owner
git clone https://github.com/orgname/reponame.git

# Create a new repo in a folder 
git init

# Create a file in the folder
echo "# ReadMe Title" >> README.md
git add README.md

# add all changes to staging
git add -A # -all:  
git add .
git reset .
# git reset : unstage

# Make a snapshot of the current state, that is linked to it's parent commit
git commit -m "first commit"

# staging and commit in same command
git commit -a -m "message"
git commit -am "message"

# All commands in one go
git init && git add -A && git commit -m "Initial commit"

# Push the changes upstream to github main branch
git push -u origin main
# always need -u?

# show current git activity
git status

# list branches in project
git branch

# Move/rename current branch
git branch -M main

# Create a branch called 'testing' and check it has been created
git branch testing
git branch

# Create branch and check into it
git checkout -b testing

# delete branch ( if not been merged into main)
git branch -d testing
# Force delete
git branch -D testing

# see remote-tracking branches for each branch in the cloned repo
git branch --remotes

# Move into the branch called 'testing'
git checkout testing
git commit -am "change to testing branch" # -add-all-with-message

# previous branch
git checkout - 

# Merge changes from 'testing' into 'main'
git checkout main
git merge testing

git branch -M main

git pull origin main

git branch -M main

# origin
git remote add origin https://github.com/myusername/project.git
# git remote show origin with urls
git remote --v
# git remote show origin with urls and more info
git remote show origin

cd my-project/some-folder git add . # only stage files from current dir
# further changes

# create empty repo or renitialize existing
cd /path/to/my/projects
mkdir my-new-project
cd my-new-project
git init # /project/.git  empty git dir with no commits 
# options
git init --shared
git add README.md
# git add -all # # add existing files to the index
git commit -m "first commit"
# if empty folder, not cloned folder
# esc :q! to exit vi

git commit -m "another commit" # -message
git push

# track from upstream - enable git pull
git push origin main -u # -u 

git push origin main # push upstream to github

# git push : update from local
# git pull : runs fetch and then rebase or merge
# avoid pull as you won't know which 2nd command failed

# add remote changes to staging
git fetch
git merge origin main

# fetch then merge
git pull origin main
# name is automatic if used git push origin main -u
git pull

git status

git remote --set-url # change the url
git remote add --set-url # add new url

# Git will automatically set you git identity name and email address, but you can set them explicitly too, but they do not have to be related to your github user/email.


# un stage
git restore --staged .

# Set the name you want attached to your commit transactions
git config --global user.name "Your Name"

# Set the email you want attached to your commit transactions
git config --global user.email you@email.com. # quotes not needed as no spaces

# Enable helpful colorization of command line output
git config --global color.ui auto

# Set VS Code as default editor (see docs for other editors)
git config --global core.editor "code --wait"

# open repo url and press . to open in VS Code web editor

git log # find ID of last commit
# only reset if havn't pushed changes
git reset [id]
git reset --hard [id]

# reset last add/commit
git reset --hard HEAD^

# ok for pushed commits
git log # find id
git revert [id]

# save changes without commiting
git stash save name
git stash list
git stash pop # apply most recent

# add a branch to the head/tip of the main branch
# best for a private one person branch
git checkout -b idea
git rebase main

# Branches

git branch -a # all

# Create Dev branch
git checkout -b dev
git add .
git commit -m 'initial dev branch commit'
git push origin dev

# Swithc branches
git checkout dev
git checkout main

# merge dev with main

# optional safety checks for conflicts
# git checkout dev
# git merge main
git checkout main
git merge dev
git push origin main
```

If freezing, try:

```sh
git config --global http.postBuffer 157286400
```

-->
