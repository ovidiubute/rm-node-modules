## rm-recur-node-modules

Recursively deletes all node_modules found in the current working directory.

This package executes the following command synchronously:

```shell
find . -name "node_modules" -exec rm -rf '{}' +
```

## Usage

```shell
npm install -g rm-recur-node-modules
rm-node-modules
```

## License

MIT
