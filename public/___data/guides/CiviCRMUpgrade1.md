CiviCRM non-core extensions and `civicrm.settings.php` are placed outside of the civicrm plugin directory and should not be affected.

Customized message templates won't be updated in the upgrade process. They will need to be updated manually post-upgrade.

You will need to make backups of:

- Website Directory
- CMS Database
- CiviCRM Database
- Custom Message Templates

Disable some settings that can interfere with upgrades:

- Disable CiviCRM logging : Administer > System Settings > Misc
- Disable InnoDB full text search  : Administer > Customize Data > Search Prefs

Check for version-specific upgrade notes.

Check if `wp-content/plugins/civicrm/civicrm/settings_location.php` exists.

Check if localization `l10n` folder is being used in `civicrm` directory.
