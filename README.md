# Visual Studio Code: Sort imports

Destructured imports are easier to see when they're ordered alphabetically. This plugin re-arranges imports, so you don't have to think about it.

## Examples

```
import { c, a, b } from "@my/package";
```

is turned into

```
import { a, b, c } from "@my/package";
```

At the moment, this plugin hasn't been published, and must be installed manually.

## Building the package

Install `vsce` if it doesn't already exist:

```
npm i -g vsce
```

Package the plugin using vsce from the directory:

```
vsce package
```

This will generate a `.vsix` file in the repository root.

## Installing the plugin

1. Open VSCode.
1. **Go to the Extensions view** by clicking the **Extensions** icon in the Activity Bar on the side of the window
1. **Click on the three** dots in the top right corner of the Extensions view and select `Install from VSIX...`
1. **Navigate to the `.vsix`** file you created and select it.
