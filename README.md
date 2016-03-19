# Sagat

Tired of having to configure all the webpack/grunt/gulp/wathever task runner in your project?

`Sagat` is here to make your life (and build process) way easier. Just `install` it on your project and start coding!

`Sagat` uses webpack under the hood.

Tiger uppercut!

## Instalation

Optionally install it globally on your machine, it'll make things even easier.

```
npm install sagat {-g}
```

## Configuration

To have your build process ready to go, you just need to add 2 properties to your `package.json` file:

```
// package.json
...
"sagat": {
  "entry": "src/index.js",
  "output": {
    "path": "bundle",
    "filename": "bundle.js"
  }
}
...
```

These configuration are mandatory for `sagat` to work.

With this simple config you'll be able to use full `common.js` enviroment on your project.

## Custom Configuration

As we all know, ES6 is a thing, and pre/pos css processors are the stuff! You can easily add any babel presets or custom modules for your js/css builds.

### Babel Presets

To add custom babel presets just add a `.babelrc` config file to the root of your project, and add your custom presets on it:

```
{
  "presets": ["es2015", "react"]
}

```

After that you'll have to install these preset`s locally on your project:

```
npm i babel-preset-es2015 babel-preset-react --save-dev
```

You're good to go!

### CSS webpack loaders

You can also add custom loaders your css configuration:

```
// package.json
...
"sagat": {
  ...
  "loaders": {
    "style": ["sass"]
  },
  "tests": {
    "style": "scss"
  }
}
...
```

Then install the required modules for SASS to work with webpack:

```
npm i sass-loader node-sass --save-dev
```

The `tests` property is used to change the default extension test in webpack configuration.

Now it'll test for `.scss` files instead of `css`.

## Using

Just run `sagat` inside your project folder, a watcher will look for any changes on your files.

## Final Thoughts

With all this configuration you'll be able to do something like this:

```javascript
// src/index.js

import React from 'react';
import 'index.scss';

class Root extends React.Component {
  render() {
    return (
      <div>teste</div>
    );
  }
}
```

This is not (yet) a production ready builder, but it's handy when you want to work on personal projects.

## TODO

- [] support multiple entries and outputs
- [] support direct css entry (multiple as well)

## License

MIT
