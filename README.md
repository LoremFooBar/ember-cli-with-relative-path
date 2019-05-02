# ember-cli-with-relative-path

A helper for defining relative paths to routes. Usage:
```hbs
{{#link-to (with-relative-path 'child-route') ...}}
```

This will generate an absolute route path, prepending the current route path to the provided value.

By default, the helper will replace a trailing `index` in the current route path with the provided value. If this behaviour is not desired, turn it off as such:
```hbs
{{#link-to (with-relative-path 'child-route' replaceIndex=false) ...}}
```

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-with-relative-path
```

## Development

* `git clone https://github.com/tstormk/ember-cli-with-relative-path.git`
* `npm install`
* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
