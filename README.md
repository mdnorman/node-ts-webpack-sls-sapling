# CHANGEME

## Setup

### Node

1.  Install `nvm` (Node Version Manager)
2.  `cd` to the project directory and execute the following:
    ```
    nvm install
    nvm use
    npm install
    ```

### IDE Setup

This project uses [EditorConfig] for IDE configuration.

See `.editorconfig` for settings.

Many popular IDEs and editors support this out of the box or with a plugin.

## Development

### Running the Local Server

```
npm run server:development
```

The server runs at [http://localhost:5000/]

### Prettier

This project uses [Prettier], so please run it before checking in:

```
npm run pretty
```

See `.prettierrc` for settings.

Some IDEs and editors have plugins for running Prettier.

### Linting

This project uses [TSLint]. Check linting before checking in:

```
npm run lint
```

See `tslint.json` for settings.

Many IDEs and editors support TSLint.

## Testing

This project uses [Jasmine] for testing. Run tests before checking in.

### Unit Tests

```
npm test
```

### Integration Tests

```
npm run test:integration
```

## Building

### Development

```
npm run build:development
```

### Production

```
npm run build
```

[http://localhost:5000/]: http://localhost:5000/
[editorconfig]: https://editorconfig.org/
[jasmine]: https://jasmine.github.io/
[prettier]: https://prettier.io/
[tslint]: https://palantir.github.io/tslint/
