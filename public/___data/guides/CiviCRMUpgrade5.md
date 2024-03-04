
Update Message Templates
 
Debugging Problems :

- If menus not working properly, try cleaning up civicrm caches.
- If that doesnt' work, try rebuilding the [menus](http://example.org/civicrm/menu/rebuild?reset=1)
- Administer Menu > System Settings > Debugging and Error Handling
- See 'Debugging'

If inheriting civicrm system from previous admin:

- add as user with ssh keys using root password if exists
- Ubuntu by default doesn't have root passwords setup
- check if you are in a group

```sh
id
```

```sh
adduser $USER www-data # ubuntu
# logout and in again for it to take effect
```

If there are errors, you will need to debug them, or restore to the previous version.

- If menus not working properly, try cleaning up civicrm caches.
- If that doesnt' work, try [Rebuild Menus](http://example.org/civicrm/menu/rebuild?reset=1)
- Administer Menu > System Settings > Debugging and Error Handling
- ConfigAndLog / error messages / manually change if needed
- Stack Exchange
- Mattermost Forum
- [Log Viewer Extension](https://civicrm.org/extensions/civicrm-log-viewer)
- [Rollback](https://docs.civicrm.org/sysadmin/en/latest/troubleshooting/#roll-back-to-previous-version-of-civicrm-from-a-backup)
- Reenable InnoDB full text search if it was on in previous version 
- **Administer** > **Customize Data** > **Search Prefs**
- Update Message Templates
- [Updating System Workflow Message Templates](https://docs.civicrm.org/sysadmin/en/latest/upgrade/#updating-system-workflow-message-templates)
- Identify any customized templates by looking for rows which display "Revert to default" and "View Default" links
- Merge the different versions of templates.
- [kdiff](https://sourceforge.net/projects/kdiff3/files/kdiff3/0.9.98/kdiff3-0.9.98-MacOSX-64Bit.dmg/download)
- Test every page of your site to make sure everything is working ok
