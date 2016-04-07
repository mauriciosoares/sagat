# Sagat

Configure your build process in 1 minute and start coding!

## Idea

All developers spend at least 30min - 1h in the build configuration of a new project. `sagat` is here to speed up this configuration, with some keys on your `package.json` file you can start coding in no time.

`sagat` uses [Webpack](https://webpack.github.io/) under the hood.

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

With this simple config you'll be able to use a full `common.js` enviroment on your project. Also you can require `css` files on your `js` files (thanks Webpack!).

## Custom Configuration

As we all know, ES6/7 is a thing, and CSS pre/post processors are the stuff!

You can easily add any babel presets or custom modules for your js/css builds.

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

Now you're good to go!

### Loaders

You can configure any loader on your project using the configuration inside `package.json`,

#### CSS webpack loaders

For using CSS loaders, you should configure something like this:

```
// package.json
...
"sagat": {
  ...
  "loaders": [{
    "style": {
      "test": "sass",
      "loaders": ["sass"]
    }
  }]
}
...
```

Then install the required modules for SASS to work with webpack:

```
npm i sass-loader node-sass --save-dev
```

The `tests` property is used to change the default extension test in webpack configuration.

Now it'll test for `.sass` files instead of `.css`.

#### JS webpack loaders

Similar to CSS loaders, you can configure it on the `package.json` as well, just change the key `style` to `javascript` and use any loader you want.

## Using

Sagat has a list of commands you can use:

`sagat -w --watch`: starts the build in watch mode

`sagat -b --build`: build your project once

`sagat -h --help`: list all available commands

## Docs

#### entry (string): the path for your entry point file.

ex: `"entry": "src/index.js"`

#### output (hash): configuration for your output file.

ex:

```
"output": {
  "path": "bundle",
  "filename": "bundle.js"
}
```

#### loaders (array): An array of loaders configuration.

ex:

```
"loaders": ["style": {
  "test": "sass",
  "loaders": ["sass"]
},
"javascript": {
  "test": "jsx?"
}]
```


## Final Thoughts

With all this configuration you'll be able to do something like this:

```javascript
// src/index.js

import React from 'react';
import 'index.sass';

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

- [ ] add a test build process
- [ ] add a linting build process
- [ ] add a production build process
- [ ] support multiple entries and outputs
- [ ] support direct css entry (multiple as well)
- [ ] custom module directories

## License

MIT
