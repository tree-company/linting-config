# v0.4.2 - 2024/05/06
Nothing changed - version bump to match other packages

# v0.4.1 - 2024/05/06
Nothing changed - version bump to match other packages

# v0.4.0 - 2024/05/06
* Bump required version of stylelint to v16.5.x

# v0.3.2 - 2024/01/18
* Bump required version of prettier to v3.2.x
* Bump required version of stylelint to v16.1.x

# v0.3.1 - 2023/09/19
Bump required version of prettier to v3.0.x

# v0.3.0 - 2023/09/19
Accidental release.

# v0.2.1 - 2023/03/01
* Remove usage of `stylelint-config-prettier`

# v0.2.0 - 2023/02/23
## Breaking changes
* We require at least stylelint 15.2 to be used
* We require at least prettier 2.8.4 to be used

## Internal changes
* The config was updated to be compatible with stylelint 15.x. This should not cause any changes

# v0.1.0 - 2022/02/23
Nothing changed - version bump to match other packages
# v0.0.9 - 2022/02/14
* Allow numbers in BEM elements
* Update stylelint-semantic-groups to v1.1.3

# v0.0.8 - 2022/02/07
## Bug fixes
* Fix conflicting rules about empty line before property

# v0.0.7 - 2022/02/03
This version adds a basic config for css. This config is now the default.  
To keep using the scss config, use 
```js
// stylelint.config.js
module.exports = {
  extends: ["@tree-company/stylelint-config/scss"],
};
```
